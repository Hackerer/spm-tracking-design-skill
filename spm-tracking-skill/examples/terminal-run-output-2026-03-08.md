# SPM埋点方案文档（Terminal实跑验证）

## 0. 执行说明
- 执行日期：2026-03-08
- 执行环境：Codex Terminal
- 使用Skill：`spm-tracking`
- 输入来源：`examples/需求示例.md`
- 结论：该Skill为“工作流提示词型Skill”，可在终端中由Agent按流程执行并产出文档；非独立CLI脚本。

---

## 1. Phase 1 - 需求理解（HUMAN CHECK）

### 1.1 核心业务流程
用户进入闪购首页 -> 浏览限时抢购模块 -> 点击商品卡片进入商详 -> 选择规格 -> 点击加购或立即购买 -> 进入结算。

### 1.2 涉及页面
- 闪购首页 `/flash-sale/index`
- 商品详情页 `/product/detail`
- 购物车页 `/cart/index`
- 结算页 `/checkout/index`

### 1.3 关键业务指标
- 限时抢购模块曝光UV/PV
- 商品点击率（CTR）
- 点击到加购转化率
- 点击到下单转化率

---

## 2. Phase 2 - 设计稿分析（HUMAN CHECK）

### 2.1 页面区域识别
- `fixed_top`：返回、分享
- `banner`：轮播图
- `info`：商品信息、规格选择
- `recommend`：推荐列表
- `fixed_bottom`：收藏、客服、加购、购买

### 2.2 可交互元素
返回、分享、轮播图、商品图片、规格选择、收藏、客服、加入购物车、立即购买。

---

## 3. Phase 3 - 公共参数确认
复用公共参数并以业务参数为主（SDK参数由底层自动上报）。

候选公共业务参数：
- `product_id` string 必填
- `sku_id` string 必填
- `price` number 必填

---

## 4. Phase 4 - SPM设计（HUMAN CHECK）

### 4.1 页面级SPM
- `flash.index`
- `flash.product_detail`
- `cart.index`
- `cart.checkout`

### 4.2 关键区块/坑位SPM
- `flash.index.limit_flash`
- `flash.index.limit_flash.feeds.{n}`
- `flash.product_detail.banner`
- `flash.product_detail.info.spec`
- `flash.product_detail.fixed_bottom.favorite`
- `flash.product_detail.fixed_bottom.service`
- `flash.product_detail.fixed_bottom.add_cart`
- `flash.product_detail.fixed_bottom.buy_btn`

---

## 5. Phase 5 - 参数设计（HUMAN CHECK）

| 参数名 | 类型 | 必填 | 说明 |
|---|---|---|---|
| product_id | string | 是 | 商品ID |
| sku_id | string | 是 | SKU ID |
| price | number | 是 | 当前价格(分) |
| original_price | number | 否 | 原价(分) |
| quantity | number | 否 | 商品数量 |
| spec | string | 否 | 规格信息 |
| carousel_index | number | 否 | 轮播图索引 |
| favorite_status | boolean | 否 | 收藏状态 |

---

## 6. Phase 6 - 埋点文档输出

| 序号 | 事件ID | 事件名称 | SPM | 事件类型 | biz_type | 触发时机 |
|---|---|---|---|---|---|---|
| 1 | EVT001 | 首页浏览 | flash.index | pv | - | 进入首页 |
| 2 | EVT002 | 限时抢购曝光 | flash.index.limit_flash | exposure | - | 模块漏出 |
| 3 | EVT003 | 商品曝光 | flash.index.limit_flash.feeds.{n} | exposure | card | 卡片漏出50% |
| 4 | EVT004 | 商品点击 | flash.index.limit_flash.feeds.{n} | click | card | 点击商品卡片 |
| 5 | EVT005 | 商详浏览 | flash.product_detail | pv | - | 进入商详 |
| 6 | EVT006 | 轮播图曝光 | flash.product_detail.banner | exposure | - | 轮播图漏出 |
| 7 | EVT007 | 轮播图点击 | flash.product_detail.banner.{n} | click | image | 点击轮播图 |
| 8 | EVT008 | 规格选择 | flash.product_detail.info.spec | click | select | 选择规格 |
| 9 | EVT009 | 收藏点击 | flash.product_detail.fixed_bottom.favorite | click | favorite | 点击收藏 |
| 10 | EVT010 | 客服点击 | flash.product_detail.fixed_bottom.service | click | service | 点击客服 |
| 11 | EVT011 | 加入购物车 | flash.product_detail.fixed_bottom.add_cart | click | add_cart | 点击加购 |
| 12 | EVT012 | 立即购买 | flash.product_detail.fixed_bottom.buy_btn | click | buy | 点击购买 |

---

## 7. Phase 7 - 文档沉淀询问（HUMAN CHECK）
建议可沉淀：
- `docs/SPM全集文档.md`：补充 `flash` 业务线及新增坑位枚举
- `docs/参数管理规范.md`：如需新增 `favorite_status` 等参数定义

---

## 8. 终端执行结论
1. 当前目录中的 `spm-tracking-skill` 没有 `scripts/`、`package.json`、可执行入口文件。
2. 该Skill通过 `SKILL.md` 定义流程与约束，属于 Agent 工作流能力，不是本地二进制/CLI 程序。
3. 在本终端可执行方式为：提供需求文档+设计稿后，由Agent按7个Phase流程产出埋点方案文档（已验证）。
