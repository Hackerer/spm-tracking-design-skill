# Robotaxi健康监测 SPM埋点方案文档

## 文档信息

| 项目 | 内容 |
|------|------|
| 业务 | Robotaxi健康监测 |
| 版本 | v8.0 |
| 日期 | 2026-03-06 |
| 覆盖车型 | GXR-改装车 |

---

## 1. 需求概述

### 1.1 业务背景
健康监测功能针对弱网/断网等问题进行流程优化，完善数据基建，为异常监控、用户行为分析搭建数据基础。

### 1.3 涉及页面
| 页面 | 功能 |
|------|------|
| 首页 | 启动监测、知情同意 |
| 教学引导 | 引导用户正确姿势 |
| 监测过程 | 监测中显示、科普知识 |
| 报告生成 | 生成中提示 |
| 结果报告 | 评分、指标、二维码 |
| 异常弹窗 | 各类异常提示 |
| 挽留弹窗 | 退出/继续挽留 |

---

## 2. SPM树形结构

```
a: 健康监测
│
b: 首页
├── c: 启动区域
│   └── d: start_btn(启动监测按钮)
├── c: 知情同意
│   ├── d: agreement_link(同意书链接)
│   └── d: checkbox(勾选按钮)
│
b: 教学引导
├── c: 引导内容
│   └── d: guide_card(引导卡片)
├── c: 挽留弹窗
│   ├── d: continue_btn(继续按钮)
│   └── d: exit_btn(退出按钮)
│
b: 监测过程
├── c: 监测显示
│   └── d: monitoring_area(监测中区域)
├── c: 科普内容
│   └── d: science_card(科普知识卡片)
├── c: 挽留弹窗
│   ├── d: hold_btn(坚持按钮)
│   └── d: exit_btn(退出按钮)
│
b: 报告生成
├── c: 生成提示
│   └── d: generating_area(生成中区域)
├── c: 挽留弹窗
│   ├── d: wait_btn(再等等按钮)
│   └── d: exit_btn(退出按钮)
│
b: 结果报告
├── c: 评分区域
│   └── d: score_area(综合评分)
├── c: 生理指标
│   ├── d: heart_rate(心率指标)
│   ├── d: breath_rate(呼吸指标)
│   └── d: blood_oxygen(血氧指标)
├── c: 心理指标
│   ├── d: energy(能量指数)
│   ├── d: pressure(压力指数)
│   ├── d: emotion(情绪指数)
│   └── d: efficiency(效率指数)
├── c: 右侧区域
│   ├── d: qr_card(二维码卡片)
│   └── d: question(引导问题)
├── c: 挽留弹窗
│   ├── d: back_btn(再看看按钮)
│   └── d: exit_btn(退出按钮)
│
b: 异常弹窗
├── c: 异常提示
│   ├── d: weak_signal(信号弱提示)
│   ├── d: sensor_disconnect(传感器断联提示)
│   ├── d: poor_signal(信号质量差提示)
│   ├── d: retry_fail(重试失败提示)
│   └── d: report_fail(报告失败提示)
├── c: 操作按钮
│   ├── d: restart_btn(重新监测按钮)
│   └── d: back_btn(返回首页按钮)
│
b: 挽留弹窗
├── d: continue_btn(继续按钮)
└── d: exit_btn(退出按钮)
```

---

## 3. 埋点清单

### 3.1 首页

| b | c | d(中文+英文) | 事件类型 | 触发时机 | 参数 |
|-----|-----|----------------|----------|----------|------|
| 首页 | 启动区域 | 启动监测按钮(start_btn) | 点击 | 点击启动按钮 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"is_agreed","param_name":"是否同意","data_type":"boolean","is_required":true,"enum_values":["true","false"],"description":"用户是否同意健康监测协议"}] |
| 首页 | 知情同意 | 同意书链接(agreement_link) | 点击 | 点击同意书链接 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"}] |
| 首页 | 知情同意 | 勾选按钮(checkbox) | 点击 | 勾选同意 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"is_checked","param_name":"是否勾选","data_type":"boolean","is_required":true,"enum_values":["true","false"],"description":"用户是否勾选同意框"}] |

### 3.2 教学引导

| b | c | d(中文+英文) | 事件类型 | 触发时机 | 参数 |
|-----|-----|----------------|----------|----------|------|
| 教学引导 | 引导内容 | 引导卡片(guide_card) | 曝光 | 页面曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"}] |
| 教学引导 | 挽留弹窗 | 继续按钮(continue_btn) | 点击 | 点击继续 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"}] |
| 教学引导 | 挽留弹窗 | 退出按钮(exit_btn) | 点击 | 点击退出 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"}] |

### 3.3 监测过程

| b | c | d(中文+英文) | 事件类型 | 触发时机 | 参数 |
|-----|-----|----------------|----------|----------|------|
| 监测过程 | 监测显示 | 监测中区域(monitoring_area) | 曝光 | 页面曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"}] |
| 监测过程 | 科普内容 | 科普知识卡片(science_card) | 曝光/切换 | 内容切换后曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"science_content_id","param_name":"科普内容ID","data_type":"string","is_required":false,"enum_values":[],"description":"展示的科普内容唯一标识"}] |
| 监测过程 | 挽留弹窗 | 坚持按钮(hold_btn) | 点击 | 点击坚持 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"remaining_time","param_name":"剩余时间","data_type":"number","is_required":false,"enum_values":[],"description":"倒计时剩余时间，单位秒"}] |
| 监测过程 | 挽留弹窗 | 退出按钮(exit_btn) | 点击 | 点击退出 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"}] |

### 3.4 报告生成

| b | c | d(中文+英文) | 事件类型 | 触发时机 | 参数 |
|-----|-----|----------------|----------|----------|------|
| 报告生成 | 生成提示 | 生成中区域(generating_area) | 曝光 | 页面曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"}] |
| 报告生成 | 挽留弹窗 | 再等等按钮(wait_btn) | 点击 | 点击再等等 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"}] |
| 报告生成 | 挽留弹窗 | 退出按钮(exit_btn) | 点击 | 点击退出 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"}] |

### 3.5 结果报告

| b | c | d(中文+英文) | 事件类型 | 触发时机 | 参数 |
|-----|-----|----------------|----------|----------|------|
| 结果报告 | 评分区域 | 综合评分(score_area) | 曝光 | 页面曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"total_score","param_name":"总评分","data_type":"number","is_required":true,"enum_values":[],"description":"健康监测综合评分，0-100分"}] |
| 结果报告 | 生理指标 | 心率指标(heart_rate) | 曝光 | 指标曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"indicator_name","param_name":"指标名称","data_type":"string","is_required":true,"enum_values":[],"description":"具体监测的指标名，例如：心率、左前轮胎压"},{"param_code":"indicator_value","param_name":"指标值","data_type":"string","is_required":true,"enum_values":[],"description":"测量得出的具体数值文本，例如：120、1.8"},{"param_code":"indicator_unit","param_name":"指标单位","data_type":"string","is_required":false,"enum_values":[],"description":"测量值的物理单位，例如：bpm、bar"},{"param_code":"indicator_label","param_name":"指标标签","data_type":"string","is_required":false,"enum_values":["偏高","正常","偏低"],"description":"对当前指标健康度的文本定性"},{"param_code":"indicator_label_color","param_name":"标签颜色","data_type":"string","is_required":false,"enum_values":["red","green"],"description":"当前状态对应前端UI需要渲染的颜色色值"}] |
| 结果报告 | 生理指标 | 呼吸指标(breath_rate) | 曝光 | 指标曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"indicator_name","param_name":"指标名称","data_type":"string","is_required":true,"enum_values":[],"description":"具体监测的指标名，例如：心率、左前轮胎压"},{"param_code":"indicator_value","param_name":"指标值","data_type":"string","is_required":true,"enum_values":[],"description":"测量得出的具体数值文本，例如：120、1.8"},{"param_code":"indicator_unit","param_name":"指标单位","data_type":"string","is_required":false,"enum_values":[],"description":"测量值的物理单位，例如：bpm、bar"},{"param_code":"indicator_label","param_name":"指标标签","data_type":"string","is_required":false,"enum_values":["偏高","正常","偏低"],"description":"对当前指标健康度的文本定性"},{"param_code":"indicator_label_color","param_name":"标签颜色","data_type":"string","is_required":false,"enum_values":["red","green"],"description":"当前状态对应前端UI需要渲染的颜色色值"}] |
| 结果报告 | 生理指标 | 血氧指标(blood_oxygen) | 曝光 | 指标曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"indicator_name","param_name":"指标名称","data_type":"string","is_required":true,"enum_values":[],"description":"具体监测的指标名，例如：心率、左前轮胎压"},{"param_code":"indicator_value","param_name":"指标值","data_type":"string","is_required":true,"enum_values":[],"description":"测量得出的具体数值文本，例如：120、1.8"},{"param_code":"indicator_unit","param_name":"指标单位","data_type":"string","is_required":false,"enum_values":[],"description":"测量值的物理单位，例如：bpm、bar"},{"param_code":"indicator_label","param_name":"指标标签","data_type":"string","is_required":false,"enum_values":["偏高","正常","偏低"],"description":"对当前指标健康度的文本定性"},{"param_code":"indicator_label_color","param_name":"标签颜色","data_type":"string","is_required":false,"enum_values":["red","green"],"description":"当前状态对应前端UI需要渲染的颜色色值"}] |
| 结果报告 | 心理指标 | 能量指数(energy) | 曝光 | 指标曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"indicator_name","param_name":"指标名称","data_type":"string","is_required":true,"enum_values":[],"description":"具体监测的指标名，例如：心率、左前轮胎压"},{"param_code":"indicator_value","param_name":"指标值","data_type":"string","is_required":true,"enum_values":[],"description":"测量得出的具体数值文本，例如：120、1.8"},{"param_code":"indicator_level","param_name":"指标等级","data_type":"number","is_required":false,"enum_values":[],"description":"心理指标的等级数值"}] |
| 结果报告 | 心理指标 | 压力指数(pressure) | 曝光 | 指标曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"indicator_name","param_name":"指标名称","data_type":"string","is_required":true,"enum_values":[],"description":"具体监测的指标名，例如：心率、左前轮胎压"},{"param_code":"indicator_value","param_name":"指标值","data_type":"string","is_required":true,"enum_values":[],"description":"测量得出的具体数值文本，例如：120、1.8"},{"param_code":"indicator_level","param_name":"指标等级","data_type":"number","is_required":false,"enum_values":[],"description":"心理指标的等级数值"}] |
| 结果报告 | 心理指标 | 情绪指数(emotion) | 曝光 | 指标曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"indicator_name","param_name":"指标名称","data_type":"string","is_required":true,"enum_values":[],"description":"具体监测的指标名，例如：心率、左前轮胎压"},{"param_code":"indicator_value","param_name":"指标值","data_type":"string","is_required":true,"enum_values":[],"description":"测量得出的具体数值文本，例如：120、1.8"},{"param_code":"indicator_level","param_name":"指标等级","data_type":"number","is_required":false,"enum_values":[],"description":"心理指标的等级数值"}] |
| 结果报告 | 心理指标 | 效率指数(efficiency) | 曝光 | 指标曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string",","enum_values":[],"description":"关联的业务订单唯一is_required":false标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"indicator_name","param_name":"指标名称","data_type":"string","is_required":true,"enum_values":[],"description":"具体监测的指标名，例如：心率、左前轮胎压"},{"param_code":"indicator_value","param_name":"指标值","data_type":"string","is_required":true,"enum_values":[],"description":"测量得出的具体数值文本，例如：120、1.8"},{"param_code":"indicator_level","param_name":"指标等级","data_type":"number","is_required":false,"enum_values":[],"description":"心理指标的等级数值"}] |
| 结果报告 | 右侧区域 | 二维码卡片(qr_card) | 曝光 | 二维码曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"qr_url","param_name":"二维码URL","data_type":"string","is_required":false,"enum_values":[],"description":"二维码图片地址"}] |
| 结果报告 | 右侧区域 | 引导问题(question) | 点击 | 点击问题 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"question_id","param_name":"问题ID","data_type":"string","is_required":false,"enum_values":[],"description":"点击的问题ID"}] |
| 结果报告 | 挽留弹窗 | 再看看按钮(back_btn) | 点击 | 点击再看看 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"exposure_time","param_name":"曝光时长","data_type":"number","is_required":false,"enum_values":[],"description":"结果报告页曝光时长，单位秒"}] |
| 结果报告 | 挽留弹窗 | 退出按钮(exit_btn) | 点击 | 点击退出 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"}] |

### 3.6 异常弹窗

| b | c | d(中文+英文) | 事件类型 | 触发时机 | 参数 |
|-----|-----|----------------|----------|----------|------|
| 异常弹窗 | 异常提示 | 信号弱提示(weak_signal) | 曝光 | 弹窗曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"error_type","param_name":"异常类型","data_type":"string","is_required":true,"enum_values":["weak_signal","sensor_disconnect","poor_signal","retry_fail","report_fail"],"description":"异常类型枚举值"}] |
| 异常弹窗 | 异常提示 | 传感器断联提示(sensor_disconnect) | 曝光 | 弹窗曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"error_type","param_name":"异常类型","data_type":"string","is_required":true,"enum_values":["weak_signal","sensor_disconnect","poor_signal","retry_fail","report_fail"],"description":"异常类型枚举值"}] |
| 异常弹窗 | 异常提示 | 信号质量差提示(poor_signal) | 曝光 | 弹窗曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"error_type","param_name":"异常类型","data_type":"string","is_required":true,"enum_values":["weak_signal","sensor_disconnect","poor_signal","retry_fail","report_fail"],"description":"异常类型枚举值"}] |
| 异常弹窗 | 异常提示 | 重试失败提示(retry_fail) | 曝光 | 弹窗曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"error_type","param_name":"异常类型","data_type":"string","is_required":true,"enum_values":["weak_signal","sensor_disconnect","poor_signal","retry_fail","report_fail"],"description":"异常类型枚举值"}] |
| 异常弹窗 | 异常提示 | 报告失败提示(report_fail) | 曝光 | 弹窗曝光 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"error_type","param_name":"异常类型","data_type":"string","is_required":true,"enum_values":["weak_signal","sensor_disconnect","poor_signal","retry_fail","report_fail"],"description":"异常类型枚举值"}] |
| 异常弹窗 | 操作按钮 | 重新监测按钮(restart_btn) | 点击 | 点击重新监测 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"error_type","param_name":"异常类型","data_type":"string","is_required":true,"enum_values":["weak_signal","sensor_disconnect","poor_signal","retry_fail","report_fail"],"description":"异常类型枚举值"}] |
| 异常弹窗 | 操作按钮 | 返回首页按钮(back_btn) | 点击 | 点击返回首页 | [{"param_code":"order_id","param_name":"订单ID","data_type":"string","is_required":false,"enum_values":[],"description":"关联的业务订单唯一标识"},{"param_code":"monitor_id","param_name":"监测ID","data_type":"string","is_required":false,"enum_values":[],"description":"本次监测任务或动作的唯一标识"},{"param_code":"error_type","param_name":"异常类型","data_type":"string","is_required":true,"enum_values":["weak_signal","sensor_disconnect","poor_signal","retry_fail","report_fail"],"description":"异常类型枚举值"}] |

---

## 4. 参数定义

### 4.1 公共业务参数
| 参数名 | 类型 | 必填 | 说明 | 校验规则 |
|--------|------|------|------|----------|
| order_id | string | 是 | 订单ID | length: 1-50 |
| monitor_id | string | 是 | 监测ID | length: 1-50 |
| error_type | string | 是 | 异常类型 | enum: weak_signal, sensor_disconnect, poor_signal, retry_fail, report_fail |

### 4.2 事件特有参数
| 参数名 | 类型 | 必填 | 说明 | 枚举值 |
|--------|------|------|------|--------|
| is_agreed | boolean | 是 | 是否同意 | - |
| is_checked | boolean | 是 | 是否勾选 | - |
| science_content_id | string | 否 | 科普内容ID | - |
| remaining_time | number | 否 | 剩余时间(秒) | - |
| total_score | number | 是 | 总评分 | range: 0-100 |
| score_level | string | 是 | 评分等级 | red, yellow, green |
| indicator_name | string | 是 | 指标名称 | - |
| indicator_value | string | 是 | 指标值 | - |
| indicator_unit | string | 否 | 指标单位 | - |
| indicator_label | string | 否 | 指标标签 | 偏高, 正常, 偏低 |
| indicator_label_color | string | 否 | 标签颜色 | red, green |
| indicator_level | number | 否 | 指标等级 | - |
| qr_url | string | 否 | 二维码URL | - |
| question_id | string | 否 | 问题ID | - |
| exposure_time | number | 否 | 曝光时长(秒) | - |

---

## 5. 枚举值定义

| 枚举类型 | 枚举值 | 说明 |
|----------|--------|------|
| score_level | red | 红灯(0-65分) |
| score_level | yellow | 黄灯(65-85分) |
| score_level | green | 绿灯(85-100分) |
| indicator_label | 偏高 | 指标偏高 |
| indicator_label | 正常 | 指标正常 |
| indicator_label | 偏低 | 指标偏低 |
| indicator_label_color | red | 红色 |
| indicator_label_color | green | 绿色 |
| error_type | weak_signal | 信号弱 |
| error_type | sensor_disconnect | 传感器断联 |
| error_type | poor_signal | 信号质量差 |
| error_type | retry_fail | 重试失败 |
| error_type | report_fail | 报告失败 |

---

## 6. 评价指标对应埋点

| 指标 | 计算方式 | 对应埋点触发时机 |
|------|----------|-----------------|
| 功能点击率 | 健康监测入口点击次数 / 有效行程数 | 首页.启动监测按钮点击 |
| 功能使用率 | 健康监测开启次数 / 健康监测首页曝光次数 | 首页.启动监测按钮点击 / 首页曝光 |
| 使用完成率 | 健康监测结果页曝光次数 / 健康监测开启次数 | 结果报告曝光 / 首页.启动监测点击 |
| 用户使用留存率 | 重复开启健康监测用户数 / 同周期打到制车用户数 | 首页.启动监测按钮点击用户去重 |
| 用户有效留存率 | 重复使用完成健康监测用户数 / 同周期打到制车用户数 | 结果报告曝光用户去重 |

---

## 7. 车型覆盖说明

| 车型 | 覆盖范围 |
|------|----------|
| GXR-改装车 | 全量功能 |
| GXR | 无此功能 |
| 小马 | 无此功能 |
| 量产车A | 无此功能 |
| 商务接待 | 无此功能 |
| 英文版 | 无此功能 |

---

## 8. 变更记录

| 日期 | 版本 | 变更内容 | 变更人 |
|------|------|---------|-------|
| 2026-03-06 | v1.0 | 初始版本 | Claude Code |
| 2026-03-06 | v2.0 | 优化格式，参数内联到每行 | Claude Code |
| 2026-03-06 | v3.0 | 移除核心业务流程，保留SPM树形结构，更新埋点清单格式 | Claude Code |
| 2026-03-06 | v4.0 | 新增SPM树形结构可视化展示(b/c层级) | Claude Code |
| 2026-03-06 | v5.0 | 树形结构加abcd标识，abc纯中文，d英文(中文)，移除2.1-2.4表格 | Claude Code |
| 2026-03-06 | v6.0 | 简化树形结构，仅用a:b:c:d字母标识 | Claude Code |
| 2026-03-06 | v7.0 | 埋点表去掉完整SPM列，参数列改为结构化呈现 | Claude Code |
| 2026-03-06 | v8.0 | 参数列改为JSON数组格式 | Claude Code |

---

**版本**: v8.0
**创建时间**: 2026-03-06
