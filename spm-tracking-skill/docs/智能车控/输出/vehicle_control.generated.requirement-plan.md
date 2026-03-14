# SPM埋点方案文档

## 1. 需求概览

### 1.1 需求名称

Robotaxi 智能车控核心控制能力

### 1.2 需求摘要

Robotaxi 智能座舱需要提供一套核心、易用的车控能力，覆盖空调与座椅、屏幕亮度、语音助手音量和媒体音量等高频控制能力。本需求里真正新增的页面只有空调控制页；桌面页底部导航栏承载一组固定的快捷控制与快捷入口，亮度和音量调节属于桌面 Dock 快捷操作，不单独视为新页面。车控能力在行程内发生，需要同时支持触屏和语音两种交互方式，并关注功能使用率、用户干预率和交互方式占比。

### 1.3 涉及页面

| 页面中文 | 页面英文 | page_id | 说明 |
| --- | --- | --- | --- |
| 桌面 | desktop | desktop_desktop | 座舱桌面页，底部导航栏中承载空调、亮度、媒体和就近停车等快捷控制入口。 |
| 空调控制页 | climate_control | vehicle_control_climate_control | 空调、风量、送风模式、车窗和座椅加热的主控制页面。 |

## 2. 整体SPM树形结构

```text
A: 桌面 / desktop
└── B: 桌面 / desktop (desktop_desktop)
    ├── C: 底部导航栏 / bottom_navigation
        ├── D: 空调开关 / ac_on_off
        ├── D: 返回桌面 / back_home
        ├── D: 亮度降低 / brightness_down
        ├── D: 亮度调节入口 / brightness_set_entrance
        ├── D: 亮度升高 / brightness_up
        ├── D: 媒体下一个 / media_next
        ├── D: 媒体播放暂停 / media_play_pause
        ├── D: 就近停车入口 / nearby_parking_entrance
        └── D: 音量调节入口 / volume_set_entrance
    ├── C: 亮度面板区 / brightness_panel
        ├── D: 阅读灯开关 / reading_light_switch
        └── D: 屏幕亮度滑动条 / brightness_slider
    └── C: 音量面板区 / volume_panel
        ├── D: 语音助手音量滑动条 / assistant_volume_slider
        ├── D: 媒体音量滑动条 / media_volume_slider
        └── D: 媒体静音按钮 / mute_btn
A: 智能车控 / vehicle_control
└── B: 空调控制页 / climate_control (vehicle_control_climate_control)
    ├── C: 座椅加热区 / seat_heating_controls
        ├── D: 副驾座椅加热按钮 / passenger_seat_heating_btn
        ├── D: 左后座椅加热按钮 / rear_left_seat_heating_btn
        └── D: 右后座椅加热按钮 / rear_right_seat_heating_btn
    ├── C: 车窗控制区 / window_controls
        ├── D: 关窗按钮 / close_window_btn
        └── D: 透气按钮 / ventilation_btn
    ├── C: 空调总控区 / climate_power
        └── D: 空调电源按钮 / climate_power_btn
    ├── C: 送风模式区 / airflow_modes
        ├── D: 吹头模式按钮 / airflow_head_btn
        ├── D: 吹脚模式按钮 / airflow_foot_btn
        └── D: 吹窗模式按钮 / airflow_window_btn
    ├── C: 风量调节区 / fan_speed_controls
        ├── D: 风量减小按钮 / fan_decrease_btn
        └── D: 风量增大按钮 / fan_increase_btn
    ├── C: 语音推荐词区 / voice_suggestions
        ├── D: 推荐词按钮 / suggestion_btn (有点冷/feeling_cold)
        ├── D: 推荐词按钮 / suggestion_btn (右后座椅加热/rear_seat_heating)
        └── D: 推荐词按钮 / suggestion_btn (风小一点/lower_wind)
    └── C: 温度调节区 / temperature_controls
        ├── D: 温度降低按钮 / temperature_decrease_btn
        └── D: 温度升高按钮 / temperature_increase_btn
```

## 3. 分页面埋点方案

### 桌面 / desktop

- page_id: desktop_desktop
- 页面说明: 座舱桌面页，底部导航栏中承载空调、亮度、媒体和就近停车等快捷控制入口。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 底部导航栏 / bottom_navigation | 空调开关 / ac_on_off | 固定坑位 | none | 是 | 坑位曝光 | 点击 | - |
| 底部导航栏 / bottom_navigation | 返回桌面 / back_home | 固定坑位 | none | 是 | 坑位曝光 | 点击 | - |
| 底部导航栏 / bottom_navigation | 亮度降低 / brightness_down | 固定坑位 | none | 是 | 坑位曝光 | 点击 | - |
| 底部导航栏 / bottom_navigation | 亮度调节入口 / brightness_set_entrance | 固定坑位 | none | 是 | 坑位曝光 | 点击 | - |
| 底部导航栏 / bottom_navigation | 亮度升高 / brightness_up | 固定坑位 | none | 是 | 坑位曝光 | 点击 | - |
| 底部导航栏 / bottom_navigation | 媒体下一个 / media_next | 固定坑位 | none | 是 | 坑位曝光 | 点击 | - |
| 底部导航栏 / bottom_navigation | 媒体播放暂停 / media_play_pause | 固定坑位 | none | 是 | 坑位曝光 | 点击 | - |
| 底部导航栏 / bottom_navigation | 就近停车入口 / nearby_parking_entrance | 固定坑位 | none | 是 | 坑位曝光 | 点击 | - |
| 底部导航栏 / bottom_navigation | 音量调节入口 / volume_set_entrance | 固定坑位 | none | 是 | 坑位曝光 | 点击 | - |
| 亮度面板区 / brightness_panel | 阅读灯开关 / reading_light_switch | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |
| 亮度面板区 / brightness_panel | 屏幕亮度滑动条 / brightness_slider | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |
| 音量面板区 / volume_panel | 语音助手音量滑动条 / assistant_volume_slider | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |
| 音量面板区 / volume_panel | 媒体音量滑动条 / media_volume_slider | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |
| 音量面板区 / volume_panel | 媒体静音按钮 / mute_btn | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 底部导航栏 / bottom_navigation | - | 区块曝光 | desktop.desktop.bottom_navigation | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 底部导航栏 / bottom_navigation | 空调开关 / ac_on_off | 坑位曝光 | desktop.desktop.bottom_navigation.ac_on_off | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 底部导航栏 / bottom_navigation | 空调开关 / ac_on_off | 坑位点击 | desktop.desktop.bottom_navigation.ac_on_off | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 底部导航栏 / bottom_navigation | 返回桌面 / back_home | 坑位曝光 | desktop.desktop.bottom_navigation.back_home | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 底部导航栏 / bottom_navigation | 返回桌面 / back_home | 坑位点击 | desktop.desktop.bottom_navigation.back_home | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 底部导航栏 / bottom_navigation | 亮度降低 / brightness_down | 坑位曝光 | desktop.desktop.bottom_navigation.brightness_down | brightness_level(number, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 底部导航栏 / bottom_navigation | 亮度降低 / brightness_down | 坑位点击 | desktop.desktop.bottom_navigation.brightness_down | brightness_level(number, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 底部导航栏 / bottom_navigation | 亮度调节入口 / brightness_set_entrance | 坑位曝光 | desktop.desktop.bottom_navigation.brightness_set_entrance | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 底部导航栏 / bottom_navigation | 亮度调节入口 / brightness_set_entrance | 坑位点击 | desktop.desktop.bottom_navigation.brightness_set_entrance | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 底部导航栏 / bottom_navigation | 亮度升高 / brightness_up | 坑位曝光 | desktop.desktop.bottom_navigation.brightness_up | brightness_level(number, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 底部导航栏 / bottom_navigation | 亮度升高 / brightness_up | 坑位点击 | desktop.desktop.bottom_navigation.brightness_up | brightness_level(number, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 底部导航栏 / bottom_navigation | 媒体下一个 / media_next | 坑位曝光 | desktop.desktop.bottom_navigation.media_next | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 底部导航栏 / bottom_navigation | 媒体下一个 / media_next | 坑位点击 | desktop.desktop.bottom_navigation.media_next | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 底部导航栏 / bottom_navigation | 媒体播放暂停 / media_play_pause | 坑位曝光 | desktop.desktop.bottom_navigation.media_play_pause | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 底部导航栏 / bottom_navigation | 媒体播放暂停 / media_play_pause | 坑位点击 | desktop.desktop.bottom_navigation.media_play_pause | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 底部导航栏 / bottom_navigation | 就近停车入口 / nearby_parking_entrance | 坑位曝光 | desktop.desktop.bottom_navigation.nearby_parking_entrance | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 底部导航栏 / bottom_navigation | 就近停车入口 / nearby_parking_entrance | 坑位点击 | desktop.desktop.bottom_navigation.nearby_parking_entrance | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 底部导航栏 / bottom_navigation | 音量调节入口 / volume_set_entrance | 坑位曝光 | desktop.desktop.bottom_navigation.volume_set_entrance | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 底部导航栏 / bottom_navigation | 音量调节入口 / volume_set_entrance | 坑位点击 | desktop.desktop.bottom_navigation.volume_set_entrance | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 亮度面板区 / brightness_panel | - | 区块曝光 | desktop.desktop.brightness_panel | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 亮度面板区 / brightness_panel | 阅读灯开关 / reading_light_switch | 坑位点击 | desktop.desktop.brightness_panel.reading_light_switch | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 亮度面板区 / brightness_panel | 屏幕亮度滑动条 / brightness_slider | 坑位点击 | desktop.desktop.brightness_panel.brightness_slider | brightness_level(number, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 音量面板区 / volume_panel | - | 区块曝光 | desktop.desktop.volume_panel | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 音量面板区 / volume_panel | 语音助手音量滑动条 / assistant_volume_slider | 坑位点击 | desktop.desktop.volume_panel.assistant_volume_slider | volume_level(number, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 音量面板区 / volume_panel | 媒体音量滑动条 / media_volume_slider | 坑位点击 | desktop.desktop.volume_panel.media_volume_slider | volume_level(number, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 音量面板区 / volume_panel | 媒体静音按钮 / mute_btn | 坑位点击 | desktop.desktop.volume_panel.mute_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |

### 空调控制页 / climate_control

- page_id: vehicle_control_climate_control
- 页面说明: 空调、风量、送风模式、车窗和座椅加热的主控制页面。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 座椅加热区 / seat_heating_controls | 副驾座椅加热按钮 / passenger_seat_heating_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 座椅加热区 / seat_heating_controls | 左后座椅加热按钮 / rear_left_seat_heating_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 座椅加热区 / seat_heating_controls | 右后座椅加热按钮 / rear_right_seat_heating_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 车窗控制区 / window_controls | 关窗按钮 / close_window_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 车窗控制区 / window_controls | 透气按钮 / ventilation_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 空调总控区 / climate_power | 空调电源按钮 / climate_power_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 送风模式区 / airflow_modes | 吹头模式按钮 / airflow_head_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 送风模式区 / airflow_modes | 吹脚模式按钮 / airflow_foot_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 送风模式区 / airflow_modes | 吹窗模式按钮 / airflow_window_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 风量调节区 / fan_speed_controls | 风量减小按钮 / fan_decrease_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 风量调节区 / fan_speed_controls | 风量增大按钮 / fan_increase_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 语音推荐词区 / voice_suggestions | 推荐词按钮 / suggestion_btn (有点冷/feeling_cold) | 顺序坑位 | level_1 | 是 | 坑位曝光 | 点击 | 有点冷 / feeling_cold |
| 语音推荐词区 / voice_suggestions | 推荐词按钮 / suggestion_btn (右后座椅加热/rear_seat_heating) | 顺序坑位 | level_1 | 是 | 坑位曝光 | 点击 | 右后座椅加热 / rear_seat_heating |
| 语音推荐词区 / voice_suggestions | 推荐词按钮 / suggestion_btn (风小一点/lower_wind) | 顺序坑位 | level_1 | 是 | 坑位曝光 | 点击 | 风小一点 / lower_wind |
| 温度调节区 / temperature_controls | 温度降低按钮 / temperature_decrease_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 温度调节区 / temperature_controls | 温度升高按钮 / temperature_increase_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 座椅加热区 / seat_heating_controls | 副驾座椅加热按钮 / passenger_seat_heating_btn | 坑位点击 | vehicle_control.climate_control.seat_heating_controls.passenger_seat_heating_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 座椅加热区 / seat_heating_controls | 左后座椅加热按钮 / rear_left_seat_heating_btn | 坑位点击 | vehicle_control.climate_control.seat_heating_controls.rear_left_seat_heating_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 座椅加热区 / seat_heating_controls | 右后座椅加热按钮 / rear_right_seat_heating_btn | 坑位点击 | vehicle_control.climate_control.seat_heating_controls.rear_right_seat_heating_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 车窗控制区 / window_controls | 关窗按钮 / close_window_btn | 坑位点击 | vehicle_control.climate_control.window_controls.close_window_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 车窗控制区 / window_controls | 透气按钮 / ventilation_btn | 坑位点击 | vehicle_control.climate_control.window_controls.ventilation_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 空调总控区 / climate_power | 空调电源按钮 / climate_power_btn | 坑位点击 | vehicle_control.climate_control.climate_power.climate_power_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 送风模式区 / airflow_modes | 吹头模式按钮 / airflow_head_btn | 坑位点击 | vehicle_control.climate_control.airflow_modes.airflow_head_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 送风模式区 / airflow_modes | 吹脚模式按钮 / airflow_foot_btn | 坑位点击 | vehicle_control.climate_control.airflow_modes.airflow_foot_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 送风模式区 / airflow_modes | 吹窗模式按钮 / airflow_window_btn | 坑位点击 | vehicle_control.climate_control.airflow_modes.airflow_window_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 风量调节区 / fan_speed_controls | 风量减小按钮 / fan_decrease_btn | 坑位点击 | vehicle_control.climate_control.fan_speed_controls.fan_decrease_btn | fan_level(number, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 风量调节区 / fan_speed_controls | 风量增大按钮 / fan_increase_btn | 坑位点击 | vehicle_control.climate_control.fan_speed_controls.fan_increase_btn | fan_level(number, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 语音推荐词区 / voice_suggestions | - | 区块曝光 | vehicle_control.climate_control.voice_suggestions | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 语音推荐词区 / voice_suggestions | 推荐词按钮 / suggestion_btn (有点冷/feeling_cold) | 坑位曝光 | vehicle_control.climate_control.voice_suggestions.suggestion_btn(feeling_cold) | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 语音推荐词区 / voice_suggestions | 推荐词按钮 / suggestion_btn (有点冷/feeling_cold) | 坑位点击 | vehicle_control.climate_control.voice_suggestions.suggestion_btn(feeling_cold) | reco_sug(array_string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填) |
| 语音推荐词区 / voice_suggestions | 推荐词按钮 / suggestion_btn (右后座椅加热/rear_seat_heating) | 坑位曝光 | vehicle_control.climate_control.voice_suggestions.suggestion_btn(rear_seat_heating) | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 语音推荐词区 / voice_suggestions | 推荐词按钮 / suggestion_btn (右后座椅加热/rear_seat_heating) | 坑位点击 | vehicle_control.climate_control.voice_suggestions.suggestion_btn(rear_seat_heating) | reco_sug(array_string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填) |
| 语音推荐词区 / voice_suggestions | 推荐词按钮 / suggestion_btn (风小一点/lower_wind) | 坑位曝光 | vehicle_control.climate_control.voice_suggestions.suggestion_btn(lower_wind) | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 语音推荐词区 / voice_suggestions | 推荐词按钮 / suggestion_btn (风小一点/lower_wind) | 坑位点击 | vehicle_control.climate_control.voice_suggestions.suggestion_btn(lower_wind) | reco_sug(array_string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填) |
| 温度调节区 / temperature_controls | 温度降低按钮 / temperature_decrease_btn | 坑位点击 | vehicle_control.climate_control.temperature_controls.temperature_decrease_btn | temperature_value(number, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 温度调节区 / temperature_controls | 温度升高按钮 / temperature_increase_btn | 坑位点击 | vehicle_control.climate_control.temperature_controls.temperature_increase_btn | temperature_value(number, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |


## 4. 主数据沉淀建议

当前方案未产生新的主数据沉淀建议。
