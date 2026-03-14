# SPM埋点方案文档

## 1. 需求概述

### 1.1 业务背景
智能车控 HMI 车机版埋点设计，应用于座舱 HMI 屏。主要场景包括空调控制页，包含座椅加热、车窗控制、空调电源、送风模式、风量调节、语音推荐词、温度调节等功能。

### 1.2 涉及页面
| 页面 | 页面SPM | 说明 |
|------|---------|------|
| 桌面 | hmi_base.desktop | 座舱桌面（底部导航承载空调、亮度等快捷入口） |
| 空调控制页 | vehicle_control.climate_control | 空调、风量、送风模式、车窗和座椅加热的主控制页 |

---

## 2. SPM树形结构

```
a: 智能车控 (vehicle_control)
│
├── b: 空调控制页 (climate_control) - 页面
│   ├── c: 座椅加热区
│   │   ├── d: 副驾座椅加热按钮(front_right_seat_heating_btn)
│   │   ├── d: 左后座椅加热按钮(rear_left_seat_heating_btn)
│   │   └── d: 右后座椅加热按钮(rear_right_seat_heating_btn)
│   ├── c: 车窗控制区
│   │   ├── d: 关窗按钮(close_window_btn)
│   │   └── d: 透气按钮(ventilation_btn)
│   ├── c: 空调总控区
│   │   └── d: 空调电源按钮(climate_power_btn)
│   ├── c: 送风模式区
│   │   ├── d: 吹头模式按钮(airflow_head_btn)
│   │   ├── d: 吹脚模式按钮(airflow_foot_btn)
│   │   └── d: 吹窗模式按钮(airflow_window_btn)
│   ├── c: 风量调节区
│   │   ├── d: 风量减小按钮(fan_decrease_btn)
│   │   └── d: 风量增大按钮(fan_increase_btn)
│   ├── c: 语音推荐词区
│   │   └── d: 推荐词按钮(有点冷/feeling_cold)
│   │   └── d: 推荐词按钮(右后座椅加热/rear_seat_heating)
│   │   └── d: 推荐词按钮(风小一点/lower_wind)
│   └── c: 温度调节区
│       ├── d: 温度降低按钮(temperature_decrease_btn)
│       └── d: 温度升高按钮(temperature_increase_btn)
```

---

## 3. 参数定义（统一）

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
| reco_sug | array_string | 否 | 推荐sug词 | - |

### 3.2 事件特有参数
| 参数名 | 类型 | 说明 | 枚举值 |
|--------|------|------|--------|
| fan_level | number | 风量级别 | - |
| temperature_value | number | 温度值 | - |

---

## 4. 埋点清单

### 4.1 空调控制页 (b: climate_control) - 页面

浏览事件：

| a | b | b浏览 | 触发时机 | 参数 |
|---|---|------|----------|------|
| 智能车控 | 空调控制页 | 是 | 每次打开空调控制页时 | [公共参数] |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 座椅加热区 | 否 | 副驾座椅加热按钮(front_right_seat_heating_btn) | - | 固定坑位 | 点击 | 点击副驾座椅加热 | [公共参数] |
| 座椅加热区 | 否 | 左后座椅加热按钮(rear_left_seat_heating_btn) | - | 固定坑位 | 点击 | 点击左后座椅加热 | [公共参数] |
| 座椅加热区 | 否 | 右后座椅加热按钮(rear_right_seat_heating_btn) | - | 固定坑位 | 点击 | 点击右后座椅加热 | [公共参数] |
| 车窗控制区 | 否 | 关窗按钮(close_window_btn) | - | 固定坑位 | 点击 | 点击关窗 | [公共参数] |
| 车窗控制区 | 否 | 透气按钮(ventilation_btn) | - | 固定坑位 | 点击 | 点击透气 | [公共参数] |
| 空调总控区 | 否 | 空调电源按钮(climate_power_btn) | - | 固定坑位 | 点击 | 点击空调电源 | [公共参数] |
| 送风模式区 | 否 | 吹头模式按钮(airflow_head_btn) | - | 固定坑位 | 点击 | 点击吹头模式 | [公共参数] |
| 送风模式区 | 否 | 吹脚模式按钮(airflow_foot_btn) | - | 固定坑位 | 点击 | 点击吹脚模式 | [公共参数] |
| 送风模式区 | 否 | 吹窗模式按钮(airflow_window_btn) | - | 固定坑位 | 点击 | 点击吹窗模式 | [公共参数] |
| 风量调节区 | 否 | 风量减小按钮(fan_decrease_btn) | - | 固定坑位 | 点击 | 点击减小风量 | [公共参数] fan_level |
| 风量调节区 | 否 | 风量增大按钮(fan_increase_btn) | - | 固定坑位 | 点击 | 点击增大风量 | [公共参数] fan_level |
| 语音推荐词区 | 是 | 推荐词按钮(有点冷/feeling_cold) | - | 顺序坑位 | 点击+曝光 | 点击推荐词 | [公共参数] reco_sug |
| 语音推荐词区 | 是 | 推荐词按钮(右后座椅加热/rear_seat_heating) | - | 顺序坑位 | 点击+曝光 | 点击推荐词 | [公共参数] reco_sug |
| 语音推荐词区 | 是 | 推荐词按钮(风小一点/lower_wind) | - | 顺序坑位 | 点击+曝光 | 点击推荐词 | [公共参数] reco_sug |
| 温度调节区 | 否 | 温度降低按钮(temperature_decrease_btn) | - | 固定坑位 | 点击 | 点击降低温度 | [公共参数] temperature_value |
| 温度调节区 | 否 | 温度升高按钮(temperature_increase_btn) | - | 固定坑位 | 点击 | 点击升高温度 | [公共参数] temperature_value |

---

## 5. 变更记录

| 日期 | 版本 | 变更内容 | 变更人 |
|------|------|---------|-------|
| 2026-03-12 | v1.0 | 初始版本 - 智能车控HMI埋点设计 | - |
