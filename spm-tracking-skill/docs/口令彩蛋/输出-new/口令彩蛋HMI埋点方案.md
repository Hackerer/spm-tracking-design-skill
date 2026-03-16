# SPM埋点方案文档

## 1. 需求概述

### 1.1 业务背景
口令彩蛋是座舱内的营销能力，通过语音口令触发彩蛋，为用户发放权益（实物商品、打车券、商品券），提升用户出行体验和粘性。

### 1.2 涉及页面
| 页面b | 页面SPM | 说明 |
|------|---------|------|
| 桌面 | hmi.desktop | HMI首页桌面推荐区 |
| 彩蛋展现页 | egg_promotion.egg_show | 彩蛋动效+打断+兜底 |
| 权益展现页 | egg_promotion.rights_show | 三份权益卡片展示（三选一） |
| 权益领取页 | egg_promotion.rights_receive | 用户选择权益后展示二维码/引导文案 |

### 1.3 业务规则
**权益发放规则：**
- 基础频控：按行程维度进行权益发放，即单次行程内若多次触发，不进行权益更新
- 发放说明：单次发放三份权益，均需用户主动进行领取操作；三份权益可为不同类型，用户需在三份权益中三选一领取

**权益类型：**
| 权益类型 | 说明 |
|----------|------|
| 实物商品 | 商品活动透图、商品名称、商品价格、领取按钮 |
| 打车券-免单券 | 免单券图形化、券名称、券说明、领取按钮 |
| 打车券-折扣券 | 折扣力度图形化、券名称、券说明、领取按钮 |
| 打车券-满/立减券 | 折扣金额图形化、券名称、券说明、按钮 |
| 商品券 | 商品主图、商品名称、商品到手价、划线价、券力度&门槛、领取按钮 |

**异常兜底：**
- 获取失败：权益未获取完成（弱网超时/未命中权益），展示兜底提示"活动太火爆啦，稍后再试试吧"
- 权益不足：兼容单个、两个权益卡片的情况

---

## 2. SPM树形结构

```
a: hmi
│
├── b: 桌面 (desktop) - 页面
│   └── c: 桌面推荐区 (desktop_recommend)
│       └── d: 顺序坑位(recommend_1, recommend_2, recommend_3, ...)
│
a: 彩蛋营销 (egg_promotion)
│
├── b: 彩蛋展现页 (egg_show) - 页面(弹层)
│   ├── c: 彩蛋动效区
│   │   └── d: 彩蛋动效(egg_animation)
│   ├── c: 打断区
│   │   └── d: 彩蛋打断(egg_interrupt)
│   └── c: 兜底区
│       └── d: 活动火爆提示(fallback_hint)
│
├── b: 权益展现页 (rights_show) - 页面(弹层)
│   └── c: 权益卡片区
│       ├── d: 权益卡片1(rights_card_1)
│       ├── d: 权益卡片2(rights_card_2)
│       └── d: 权益卡片3(rights_card_3)
│
└── b: 权益领取页 (rights_receive) - 页面(弹层)
    ├── c: 已选权益区
    │   └── d: 权益详情(rights_detail)
    └── c: 二维码区
        └── d: 二维码(qr_code)
```

---

## 3. 参数定义

### 3.1 公共业务参数 (HMI业务公参)
| 参数名 | 类型 | 必填 | 说明 | 枚举值 |
|--------|------|------|------|--------|
| user_pin | string | 是 | 用户京东pin | - |
| navi_bar_status | string | 是 | 导航栏状态 | 沉浸式/非沉浸式 |
| vid | string | 是 | 车辆id | - |
| server_env | string | 是 | 服务端环境 | live/staging/test |
| build_type | string | 是 | 包环境类型 | 可切环境包/不可切环境包 |
| order_id | string | 是 | jkc订单id | - |
| click_type | string | 是 | 点击触发方式 | voice/touch/gesture |

### 3.2 事件特有参数
| 参数名 | 类型 | 说明 | 枚举值 |
|--------|------|------|--------|
| entry_type | string | 入口类型 | voice/recommend/badge |
| rights_type | string | 权益类型：实物商品/免单券/折扣券/满减券/商品券 | product/coupon_free/coupon_discount/coupon_reduce/goods |
| rights_id | string | 权益ID | - |
| rights_name | string | 权益名称 | - |
| receive_type | string | 领取方式 | voice/click |
| is_first_trigger | boolean | 是否本次行程首次触发 | true/false |
| has_received | boolean | 是否已领取过权益(用于区分彩蛋展现逻辑，已领取则跳过动效) | true/false |
| content_id | string | 内容ID | - |
| interrupt_type | string | 打断类型：点击空白/关闭APP/拉起其他应用 | click_blank/close_app/open_app |
| fallback_type | string | 兜底类型：网络错误/无权益/权益不足 | network_error/rights_empty/rights_insufficient |
| rights_count | number | 权益卡片数量(用于兼容权益不足场景) | 1/2/3 |
| product_price | number | 商品价格(分，实物商品) | - |
| coupon_value | number | 优惠券面值(分，打车券/商品券) | - |
| coupon_threshold | number | 优惠券门槛(分，打车券/商品券) | - |
| receive_status | string | 领取状态 | success/fail |
| fail_reason | string | 失败原因：库存不足/网络错误 | no_stock/network_error |
| qr_code_url | string | 二维码跳转URL(实物商品/商品券) | - |

**注意：** 触发方式使用公共参数 `click_type`

---

## 4. 埋点清单

### 4.1 桌面 (b: desktop) - 页面

浏览事件：

| a | b | b浏览 | b截图 | 触发时机 | 参数 |
|---|---|-------|-------|----------|------|
| hmi | 桌面 | 是 | - | 进入首页时 | [公共参数] |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 桌面推荐区 | 是 | 顺序坑位 | - | 顺序坑位 | 曝光+点击 | 坑位曝光时触发 | [公共参数] + content_id |

**说明：**
- 桌面推荐区：按顺序坑位1,2,3...上报，其中包含彩蛋坑位

---

### 4.2 彩蛋展现页 (b: egg_show) - 页面(弹层)

浏览事件：

| a | b | b浏览 | b截图 | 触发时机 | 参数 |
|---|---|-------|-------|----------|------|
| 彩蛋营销 | 彩蛋展现页 | 是 | - | 用户触发彩蛋时 | [公共参数] + is_first_trigger + has_received |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 彩蛋动效区 | 否 | 彩蛋动效(egg_animation) | - | 固定坑位 | 曝光 | 动效开始播放时 | [公共参数] + entry_type + click_type |
| 打断区 | 否 | 彩蛋打断(egg_interrupt) | - | 固定坑位 | 点击 | 用户打断彩蛋时 | [公共参数] + interrupt_type |
| 兜底区 | 否 | 活动火爆提示(fallback_hint) | - | 固定坑位 | 曝光 | 权益获取失败时 | [公共参数] + fallback_type |

**说明：**
- 彩蛋动效曝光：动效开始播放时触发
- 彩蛋打断：用户点击空白处/拉起其他应用导致彩蛋中断
- 兜底曝光：权益获取失败或不足时展示

---

### 4.3 权益展现页 (b: rights_show) - 页面(弹层)

浏览事件：

| a | b | b浏览 | b截图 | 触发时机 | 参数 |
|---|---|-------|-------|----------|------|
| 彩蛋营销 | 权益展现页 | 是 | - | 彩蛋动效播放完成后 | [公共参数] + rights_count |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 权益卡片区 | 否 | 权益卡片1(rights_card_1) | - | 顺序坑位 | 曝光+点击 | 权益卡片展示/点击选择时 | [公共参数] + rights_type + rights_id + rights_name + product_price/coupon_value/coupon_threshold |
| 权益卡片区 | 否 | 权益卡片2(rights_card_2) | - | 顺序坑位 | 曝光+点击 | 权益卡片展示/点击选择时 | [公共参数] + rights_type + rights_id + rights_name + product_price/coupon_value/coupon_threshold |
| 权益卡片区 | 否 | 权益卡片3(rights_card_3) | - | 顺序坑位 | 曝光+点击 | 权益卡片展示/点击选择时 | [公共参数] + rights_type + rights_id + rights_name + product_price/coupon_value/coupon_threshold |

**说明：**
- 权益卡片曝光：彩蛋动效播放完成，权益卡片完全展示时触发
- 权益卡片点击：用户点击某个权益卡片进行选择（触发领取）
- 根据权益类型不同，携带不同参数：
  - 实物商品：product_price（商品价格）
  - 打车券/商品券：coupon_value（面值）+ coupon_threshold（门槛）

---

### 4.4 权益领取页 (b: rights_receive) - 页面(弹层)

浏览事件：

| a | b | b浏览 | b截图 | 触发时机 | 参数 |
|---|---|-------|-------|----------|------|
| 彩蛋营销 | 权益领取页 | 是 | - | 用户选择权益后 | [公共参数] + receive_type + rights_type + rights_id + has_received |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 已选权益区 | 否 | 权益详情(rights_detail) | - | 固定坑位 | 曝光 | 页面展示时 | [公共参数] + rights_type + rights_id + rights_name + receive_status + fail_reason |
| 二维码区 | 否 | 二维码(qr_code) | - | 固定坑位 | 曝光 | 二维码展示时 | [公共参数] + qr_code_url |

**说明：**
- 权益详情曝光：用户选择权益后，页面展示已选权益信息，携带领取状态
- 二维码曝光：展示二维码供用户扫码领取（实物商品/商品券显示二维码，打车券显示券说明）
- receive_status：领取结果（success成功/fail失败）
- fail_reason：领取失败原因（no_stock库存不足/network_error网络错误）
- qr_code_url：二维码跳转URL（实物商品跳转试用频道/商品券跳转商详页）

---

## 5. 关键指标

| 指标 | 说明 |
|------|------|
| 入口曝光数 | 桌面推荐区彩蛋坑位曝光次数 |
| 入口触发数 | 用户触发彩蛋的次数 |
| 彩蛋打断数 | 用户打断彩蛋动效的次数 |
| 兜底曝光数 | 权益获取失败兜底展示次数 |
| 权益曝光数 | 权益卡片完全展示的次数 |
| 权益领取数 | 用户成功领取权益的次数 |
| 权益核销数 | 权益被实际使用的次数 |

---

## 6. 变更记录

| 日期 | 版本 | 变更内容 | 变更人 |
|------|------|---------|-------|
| 2026-03-13 | v1.0 | 初始版本 - 口令彩蛋HMI埋点设计 | - |
