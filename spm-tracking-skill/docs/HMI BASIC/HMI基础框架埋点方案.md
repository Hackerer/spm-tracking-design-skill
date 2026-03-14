# SPM埋点方案文档

## 1. 需求概述

### 1.1 业务背景
座舱HMI（人机界面）基础框架埋点设计，用于监测用户在车载系统中的基础交互行为。

### 1.2 涉及模块
| 页面 | 功能 |
|------|------|
| 全局SOS组件 | SOS紧急呼叫 |
| 通知组件 | toast/弹窗/霸屏通知 |
| 桌面 | 桌面推荐卡 |
| Dock栏 | 空调、亮度、音量、媒体等控制 |

---

## 2. SPM树形结构

```
a0470 (hmi基础)
│
├── b: sos (全局SOS组件)
│   └── c: sos_area
│       └── d: sos_btn (SOS按钮)
│
├── b: notification (通知组件)
│   ├── c: toast
│   │   └── d: sys_notification
│   ├── c: popup
│   │   └── d: sys_notification
│   └── c: fullscreen
│       └── d: sys_notification
│
├── b: desktop (桌面)
│   └── c: recommend
│       └── d: item_1, item_2, item_3... (顺序坑位)
│
└── b: dock (Dock栏)
    └── c: dock
        ├── d: ac_on_off (空调开/关机)
        ├── d: back_home (返回桌面)
        ├── d: brightness_down (调高亮度)
        ├── d: brightness_set_entrance (亮度调节入口)
        ├── d: brightness_up (调低亮度)
        ├── d: media_next (下一首)
        ├── d: media_play_pause (播放/暂停)
        ├── d: nearby_parking_entrance (就近停车入口)
        ├── d: sos_entrance (SOS入口)
        ├── d: temp_lower (调低温度)
        ├── d: temp_warmer (调高温度)
        ├── d: volume_down (调低音量)
        ├── d: volume_set_entrance (音量调节入口)
        └── d: volume_up (调高音量)
```

---

## 3. 组件说明

> **全局SOS组件、通知组件** 为全局组件，遵循以下规则：
> 1. 组件没有固定的spma和spmb，上报所在页面的spma和spmb
> 2. 组件没有浏览事件，如需统计组件UV，采集区块曝光事件

---

## 4. 埋点清单

### 4.1 全局SOS组件 (b: sos)

| c | d | 事件类型 | 触发时机 | 参数 |
|---|---|----------|----------|------|
| sos_area | sos_btn | 点击 | 点击SOS按钮 | [公共参数] |

---

### 4.2 通知组件 (b: notification)

| c | d | 事件类型 | 触发时机 | 参数 |
|---|---|----------|----------|------|
| toast | sys_notification | 曝光 | Toast通知展示 | [公共参数] |
| toast | sys_notification | 点击 | 点击Toast通知 | [公共参数] |
| popup | sys_notification | 曝光 | 弹窗通知展示 | [公共参数] |
| popup | sys_notification | 点击确定 | 点击弹窗确定 | [公共参数] |
| popup | sys_notification | 点击取消 | 点击弹窗取消 | [公共参数] |
| popup | sys_notification | 关闭 | 弹窗关闭 | [公共参数] |
| fullscreen | sys_notification | 曝光 | 霸屏通知展示 | [公共参数] |
| fullscreen | sys_notification | 点击确定 | 点击霸屏确定 | [公共参数] |
| fullscreen | sys_notification | 关闭 | 霸屏关闭 | [公共参数] |

---

### 4.3 桌面 (b: desktop)

| c | d | 事件类型 | 触发时机 | 参数 |
|---|---|----------|----------|------|
| recommend | item_1~N | 曝光 | 推荐卡片展示 | [公共参数] + content_type, content_id |
| recommend | item_1~N | 点击 | 点击推荐卡片 | [公共参数] + content_type, content_id |

---

### 4.4 Dock栏 (b: dock)

| c | d | 事件类型 | 触发时机 | 参数 |
|---|---|----------|----------|------|
| dock | ac_on_off | 点击 | 空调开关点击 | [公共参数] |
| dock | back_home | 点击 | 返回桌面点击 | [公共参数] |
| dock | brightness_down | 点击 | 调高亮度点击 | [公共参数] |
| dock | brightness_up | 点击 | 调低亮度点击 | [公共参数] |
| dock | brightness_set_entrance | 点击 | 亮度调节入口点击 | [公共参数] |
| dock | media_next | 点击 | 下一首点击 | [公共参数] + content_type, content_id |
| dock | media_play_pause | 点击 | 播放/暂停点击 | [公共参数] + content_type, content_id |
| dock | nearby_parking_entrance | 点击 | 就近停车入口点击 | [公共参数] |
| dock | sos_entrance | 点击 | SOS入口点击 | [公共参数] |
| dock | temp_lower | 值变更 | 调低温度 | [公共参数] + initial_value, new_value |
| dock | temp_warmer | 值变更 | 调高温度 | [公共参数] + initial_value, new_value |
| dock | volume_down | 值变更 | 调低音量 | [公共参数] + initial_value, new_value |
| dock | volume_up | 值变更 | 调高音量 | [公共参数] + initial_value, new_value |
| dock | volume_set_entrance | 点击 | 音量调节入口点击 | [公共参数] |

---

## 5. 参数定义

### 5.1 公共业务参数
| 参数名 | 类型 | 必填 | 说明 | 校验规则 | 枚举值 |
|--------|------|------|------|----------|--------|
| user_pin | string | 是 | 用户京东pin | - | - |
| navi_bar_status | string | 是 | 导航栏状态 | enum | show/hide |
| vid | string | 是 | 车辆id | - | - |
| env | string | 是 | JKC环境 | enum | test/prod |
| car_city | string | 是 | 运营城市 | - | - |
| order_id | string | 否 | 订单id | length: 1-50 | - |
| click_type | string | 是 | 点击触发方式 | enum | click/voice/touch |

### 5.2 事件特有参数
| 参数名 | 类型 | 必填 | 说明 | 校验规则 | 枚举值 | 适用事件 |
|--------|------|------|------|----------|--------|----------|
| content_type | string | 否 | 内容类型 | - | - | 推荐卡/媒体播放 |
| content_id | string | 否 | 内容id | - | - | 推荐卡/媒体播放 |
| initial_value | string | 否 | 变更前值 | - | - | 值变更 |
| new_value | string | 否 | 变更后值 | - | - | 值变更 |

---

## 6. 变更记录

| 日期 | 版本 | 变更内容 | 变更人 |
|------|------|---------|-------|
| 2026-03-12 | v1.0 | 初始版本 | - |
