# SPM埋点方案文档

## 1. 需求概览

### 1.1 需求名称

Robotaxi 健康监测功能

### 1.2 需求摘要

智能座舱通过高频、沉浸式的车内场景提供轻量化健康监测服务，目标是在行程中完成健康检测、输出报告并承接健康服务转化。当前需求覆盖性别选择、基础信息录入、监测启动、教学引导、检测准备、检测过程、报告生成、结果报告以及协议/退出等关键弹窗场景。

### 1.3 涉及页面

| 页面中文 | 页面英文 | page_id | 说明 |
| --- | --- | --- | --- |
| 性别选择页 | gender_selection | health_monitor_gender_selection | 用户进入健康监测后的第一页，选择性别后进入基础信息录入。 |
| 基础信息录入页 | basic_info | health_monitor_basic_info | 用户录入年龄、身高、体重，并点击开始检测。 |
| 健康监测启动页 | start | health_monitor_start | 展示健康监测价值介绍、协议勾选和一键开启按钮。 |
| 协议详情弹窗 | agreement_detail | health_monitor_agreement_detail | 展示知情同意书内容，并提供不同意/同意并继续操作。 |
| 隐私政策弹窗 | privacy_policy | health_monitor_privacy_policy | 展示隐私政策内容，并提供不同意/同意并继续操作。 |
| 教学引导页 | guide | health_monitor_guide | 展示如何取出设备、如何双手持握的教学指引。 |
| 检测准备页 | prepare | health_monitor_prepare | 信号采集正常后展示准备状态，提示检测即将开始。 |
| 监测过程页 | monitoring | health_monitor_monitoring | 展示监测进度、实时波形和健康科普内容。 |
| 退出确认弹窗 | exit_confirm | health_monitor_exit_confirm | 用户中途退出时的挽留弹窗，提供退出和坚持一下两个选择。 |
| 报告生成页 | report_generating | health_monitor_report_generating | 监测完成后展示报告生成中的等待页面与科普内容。 |
| 结果报告页 | report_result | health_monitor_report_result | 展示总评分、生理指标、心理指标，以及二维码和营销banner。 |

## 2. 整体SPM树形结构

```text
A: 健康监测 / health_monitor
├── B: 性别选择页 / gender_selection (health_monitor_gender_selection)
    ├── C: 性别选择区 / gender_selector
        ├── D: 男性选项 / male_option
        └── D: 女性选项 / female_option
    └── C: 底部固定区域 / fixed_bottom
        └── D: 下一步按钮 / next_btn
├── B: 基础信息录入页 / basic_info (health_monitor_basic_info)
    ├── C: 基础信息区 / basic_info_form
        ├── D: 年龄选择器 / age_picker
        ├── D: 身高选择器 / height_picker
        └── D: 体重选择器 / weight_picker
    └── C: 底部固定区域 / fixed_bottom
        └── D: 开始检测按钮 / start_btn
├── B: 健康监测启动页 / start (health_monitor_start)
    ├── C: 协议栏 / agreement_bar
        ├── D: 知情同意复选框 / agreement_checkbox
        ├── D: 知情同意书链接 / agreement_link
        └── D: 隐私政策链接 / privacy_link
    └── C: 启动主区域 / start_panel
        └── D: 开始检测按钮 / start_btn
├── B: 协议详情弹窗 / agreement_detail (health_monitor_agreement_detail)
    └── C: 操作弹窗区 / modal_actions
        ├── D: 不同意按钮 / disagree_btn
        └── D: 同意并继续按钮 / agree_continue_btn
├── B: 隐私政策弹窗 / privacy_policy (health_monitor_privacy_policy)
    └── C: 操作弹窗区 / modal_actions
        ├── D: 不同意按钮 / disagree_btn
        └── D: 同意并继续按钮 / agree_continue_btn
├── B: 教学引导页 / guide (health_monitor_guide)
    └── C: 引导内容区 / guide_content
        └── D: 引导卡片 / guide_card
├── B: 检测准备页 / prepare (health_monitor_prepare)
    └── C: 准备状态区 / prepare_status
        └── D: 准备进度环 / prepare_progress
├── B: 监测过程页 / monitoring (health_monitor_monitoring)
    ├── C: 监测面板区 / monitoring_panel
        └── D: 监测进度区 / monitoring_area
    └── C: 科普内容区 / science_content
        └── D: 科普卡片 / science_card
├── B: 退出确认弹窗 / exit_confirm (health_monitor_exit_confirm)
    ├── C: 操作弹窗区 / modal_actions
        ├── D: 退出按钮 / exit_btn
        └── D: 坚持一下按钮 / hold_btn
    └── C: 弹窗关闭区 / modal_close
        └── D: 关闭按钮 / close_btn
├── B: 报告生成页 / report_generating (health_monitor_report_generating)
    ├── C: 报告生成区 / generating_panel
        └── D: 生成中区域 / generating_area
    └── C: 科普内容区 / science_content
        └── D: 科普卡片 / science_card
└── B: 结果报告页 / report_result (health_monitor_report_result)
    ├── C: 结果总览区 / result_summary
        └── D: 综合评分区 / score_area
    ├── C: 生理指标区 / physiological_metrics
        ├── D: 生理指标卡组 / physio_cards
        ├── D: 窦性心律指标卡 / sinus_rhythm_card
        ├── D: 室上性早搏指标卡 / premature_beat_card
        └── D: 心率指标卡 / heart_rate_card
    ├── C: 心理指标区 / mental_metrics
        ├── D: 心理指标卡组 / mental_cards
        ├── D: 能量指标卡 / energy_card
        ├── D: 压力指标卡 / stress_card
        ├── D: 负面情绪指标卡 / negative_emotion_card
        └── D: 效率指标卡 / efficiency_card
    └── C: 右侧推广区 / right_promo
        ├── D: 二维码卡片 / qr_card
        └── D: 营销Banner / promo_banner
```

## 3. 分页面埋点方案

### 性别选择页 / gender_selection

- page_id: health_monitor_gender_selection
- 页面说明: 用户进入健康监测后的第一页，选择性别后进入基础信息录入。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 性别选择区 / gender_selector | 男性选项 / male_option | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 性别选择区 / gender_selector | 女性选项 / female_option | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 底部固定区域 / fixed_bottom | 下一步按钮 / next_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 性别选择区 / gender_selector | 男性选项 / male_option | 坑位点击 | health_monitor.gender_selection.gender_selector.male_option | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 性别选择区 / gender_selector | 女性选项 / female_option | 坑位点击 | health_monitor.gender_selection.gender_selector.female_option | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 底部固定区域 / fixed_bottom | 下一步按钮 / next_btn | 坑位点击 | health_monitor.gender_selection.fixed_bottom.next_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |

### 基础信息录入页 / basic_info

- page_id: health_monitor_basic_info
- 页面说明: 用户录入年龄、身高、体重，并点击开始检测。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 基础信息区 / basic_info_form | 年龄选择器 / age_picker | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 基础信息区 / basic_info_form | 身高选择器 / height_picker | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 基础信息区 / basic_info_form | 体重选择器 / weight_picker | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 底部固定区域 / fixed_bottom | 开始检测按钮 / start_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 基础信息区 / basic_info_form | 年龄选择器 / age_picker | 坑位点击 | health_monitor.basic_info.basic_info_form.age_picker | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 基础信息区 / basic_info_form | 身高选择器 / height_picker | 坑位点击 | health_monitor.basic_info.basic_info_form.height_picker | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 基础信息区 / basic_info_form | 体重选择器 / weight_picker | 坑位点击 | health_monitor.basic_info.basic_info_form.weight_picker | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 底部固定区域 / fixed_bottom | 开始检测按钮 / start_btn | 坑位点击 | health_monitor.basic_info.fixed_bottom.start_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |

### 健康监测启动页 / start

- page_id: health_monitor_start
- 页面说明: 展示健康监测价值介绍、协议勾选和一键开启按钮。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 协议栏 / agreement_bar | 知情同意复选框 / agreement_checkbox | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 协议栏 / agreement_bar | 知情同意书链接 / agreement_link | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 协议栏 / agreement_bar | 隐私政策链接 / privacy_link | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 启动主区域 / start_panel | 开始检测按钮 / start_btn | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 协议栏 / agreement_bar | 知情同意复选框 / agreement_checkbox | 坑位点击 | health_monitor.start.agreement_bar.agreement_checkbox | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 协议栏 / agreement_bar | 知情同意书链接 / agreement_link | 坑位点击 | health_monitor.start.agreement_bar.agreement_link | agreement_type(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 协议栏 / agreement_bar | 隐私政策链接 / privacy_link | 坑位点击 | health_monitor.start.agreement_bar.privacy_link | agreement_type(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 启动主区域 / start_panel | - | 区块曝光 | health_monitor.start.start_panel | order_id(string, 必填)<br/>user_pin(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 启动主区域 / start_panel | 开始检测按钮 / start_btn | 坑位点击 | health_monitor.start.start_panel.start_btn | order_id(string, 必填)<br/>user_pin(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |

### 协议详情弹窗 / agreement_detail

- page_id: health_monitor_agreement_detail
- 页面说明: 展示知情同意书内容，并提供不同意/同意并继续操作。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 操作弹窗区 / modal_actions | 不同意按钮 / disagree_btn | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |
| 操作弹窗区 / modal_actions | 同意并继续按钮 / agree_continue_btn | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 操作弹窗区 / modal_actions | - | 区块曝光 | health_monitor.agreement_detail.modal_actions | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 操作弹窗区 / modal_actions | 不同意按钮 / disagree_btn | 坑位点击 | health_monitor.agreement_detail.modal_actions.disagree_btn | agreement_type(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 操作弹窗区 / modal_actions | 同意并继续按钮 / agree_continue_btn | 坑位点击 | health_monitor.agreement_detail.modal_actions.agree_continue_btn | agreement_type(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |

### 隐私政策弹窗 / privacy_policy

- page_id: health_monitor_privacy_policy
- 页面说明: 展示隐私政策内容，并提供不同意/同意并继续操作。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 操作弹窗区 / modal_actions | 不同意按钮 / disagree_btn | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |
| 操作弹窗区 / modal_actions | 同意并继续按钮 / agree_continue_btn | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 操作弹窗区 / modal_actions | - | 区块曝光 | health_monitor.privacy_policy.modal_actions | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 操作弹窗区 / modal_actions | 不同意按钮 / disagree_btn | 坑位点击 | health_monitor.privacy_policy.modal_actions.disagree_btn | agreement_type(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 操作弹窗区 / modal_actions | 同意并继续按钮 / agree_continue_btn | 坑位点击 | health_monitor.privacy_policy.modal_actions.agree_continue_btn | agreement_type(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |

### 教学引导页 / guide

- page_id: health_monitor_guide
- 页面说明: 展示如何取出设备、如何双手持握的教学指引。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 引导内容区 / guide_content | 引导卡片 / guide_card | 固定坑位 | none | 是 | 区块覆盖 | - | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 引导内容区 / guide_content | - | 区块曝光 | health_monitor.guide.guide_content | order_id(string, 必填)<br/>user_pin(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |

### 检测准备页 / prepare

- page_id: health_monitor_prepare
- 页面说明: 信号采集正常后展示准备状态，提示检测即将开始。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 准备状态区 / prepare_status | 准备进度环 / prepare_progress | 固定坑位 | none | 是 | 区块覆盖 | - | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 准备状态区 / prepare_status | - | 区块曝光 | health_monitor.prepare.prepare_status | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |

### 监测过程页 / monitoring

- page_id: health_monitor_monitoring
- 页面说明: 展示监测进度、实时波形和健康科普内容。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 监测面板区 / monitoring_panel | 监测进度区 / monitoring_area | 固定坑位 | none | 是 | 区块覆盖 | - | - |
| 科普内容区 / science_content | 科普卡片 / science_card | 顺序坑位 | level_1 | 是 | 坑位曝光 | - | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 监测面板区 / monitoring_panel | - | 区块曝光 | health_monitor.monitoring.monitoring_panel | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 科普内容区 / science_content | - | 区块曝光 | health_monitor.monitoring.science_content | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>monitor_id(string, 选填) |
| 科普内容区 / science_content | 科普卡片 / science_card | 坑位曝光 | health_monitor.monitoring.science_content.science_card | content_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>monitor_id(string, 选填) |

### 退出确认弹窗 / exit_confirm

- page_id: health_monitor_exit_confirm
- 页面说明: 用户中途退出时的挽留弹窗，提供退出和坚持一下两个选择。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 操作弹窗区 / modal_actions | 退出按钮 / exit_btn | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |
| 操作弹窗区 / modal_actions | 坚持一下按钮 / hold_btn | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |
| 弹窗关闭区 / modal_close | 关闭按钮 / close_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 操作弹窗区 / modal_actions | - | 区块曝光 | health_monitor.exit_confirm.modal_actions | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 操作弹窗区 / modal_actions | 退出按钮 / exit_btn | 坑位点击 | health_monitor.exit_confirm.modal_actions.exit_btn | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 操作弹窗区 / modal_actions | 坚持一下按钮 / hold_btn | 坑位点击 | health_monitor.exit_confirm.modal_actions.hold_btn | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 弹窗关闭区 / modal_close | 关闭按钮 / close_btn | 坑位点击 | health_monitor.exit_confirm.modal_close.close_btn | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |

### 报告生成页 / report_generating

- page_id: health_monitor_report_generating
- 页面说明: 监测完成后展示报告生成中的等待页面与科普内容。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 报告生成区 / generating_panel | 生成中区域 / generating_area | 固定坑位 | none | 是 | 区块覆盖 | - | - |
| 科普内容区 / science_content | 科普卡片 / science_card | 顺序坑位 | level_1 | 是 | 坑位曝光 | - | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 报告生成区 / generating_panel | - | 区块曝光 | health_monitor.report_generating.generating_panel | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 科普内容区 / science_content | - | 区块曝光 | health_monitor.report_generating.science_content | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>monitor_id(string, 选填) |
| 科普内容区 / science_content | 科普卡片 / science_card | 坑位曝光 | health_monitor.report_generating.science_content.science_card | content_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>monitor_id(string, 选填) |

### 结果报告页 / report_result

- page_id: health_monitor_report_result
- 页面说明: 展示总评分、生理指标、心理指标，以及二维码和营销banner。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 结果总览区 / result_summary | 综合评分区 / score_area | 固定坑位 | none | 是 | 区块覆盖 | - | - |
| 生理指标区 / physiological_metrics | 生理指标卡组 / physio_cards | 固定坑位 | none | 是 | 坑位曝光 | - | - |
| 生理指标区 / physiological_metrics | 窦性心律指标卡 / sinus_rhythm_card | 固定坑位 | none | 是 | 坑位曝光 | - | - |
| 生理指标区 / physiological_metrics | 室上性早搏指标卡 / premature_beat_card | 固定坑位 | none | 是 | 坑位曝光 | - | - |
| 生理指标区 / physiological_metrics | 心率指标卡 / heart_rate_card | 固定坑位 | none | 是 | 坑位曝光 | - | - |
| 心理指标区 / mental_metrics | 心理指标卡组 / mental_cards | 固定坑位 | none | 是 | 坑位曝光 | - | - |
| 心理指标区 / mental_metrics | 能量指标卡 / energy_card | 固定坑位 | none | 是 | 坑位曝光 | - | - |
| 心理指标区 / mental_metrics | 压力指标卡 / stress_card | 固定坑位 | none | 是 | 坑位曝光 | - | - |
| 心理指标区 / mental_metrics | 负面情绪指标卡 / negative_emotion_card | 固定坑位 | none | 是 | 坑位曝光 | - | - |
| 心理指标区 / mental_metrics | 效率指标卡 / efficiency_card | 固定坑位 | none | 是 | 坑位曝光 | - | - |
| 右侧推广区 / right_promo | 二维码卡片 / qr_card | 固定坑位 | none | 是 | 坑位曝光 | - | - |
| 右侧推广区 / right_promo | 营销Banner / promo_banner | 顺序坑位 | level_1 | 是 | 坑位曝光 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 结果总览区 / result_summary | - | 区块曝光 | health_monitor.report_result.result_summary | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>monitor_id(string, 选填) |
| 生理指标区 / physiological_metrics | - | 区块曝光 | health_monitor.report_result.physiological_metrics | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 生理指标区 / physiological_metrics | 生理指标卡组 / physio_cards | 坑位曝光 | health_monitor.report_result.physiological_metrics.physio_cards | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 生理指标区 / physiological_metrics | 窦性心律指标卡 / sinus_rhythm_card | 坑位曝光 | health_monitor.report_result.physiological_metrics.sinus_rhythm_card | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 生理指标区 / physiological_metrics | 室上性早搏指标卡 / premature_beat_card | 坑位曝光 | health_monitor.report_result.physiological_metrics.premature_beat_card | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 生理指标区 / physiological_metrics | 心率指标卡 / heart_rate_card | 坑位曝光 | health_monitor.report_result.physiological_metrics.heart_rate_card | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 心理指标区 / mental_metrics | - | 区块曝光 | health_monitor.report_result.mental_metrics | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 心理指标区 / mental_metrics | 心理指标卡组 / mental_cards | 坑位曝光 | health_monitor.report_result.mental_metrics.mental_cards | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 心理指标区 / mental_metrics | 能量指标卡 / energy_card | 坑位曝光 | health_monitor.report_result.mental_metrics.energy_card | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 心理指标区 / mental_metrics | 压力指标卡 / stress_card | 坑位曝光 | health_monitor.report_result.mental_metrics.stress_card | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 心理指标区 / mental_metrics | 负面情绪指标卡 / negative_emotion_card | 坑位曝光 | health_monitor.report_result.mental_metrics.negative_emotion_card | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 心理指标区 / mental_metrics | 效率指标卡 / efficiency_card | 坑位曝光 | health_monitor.report_result.mental_metrics.efficiency_card | monitor_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 右侧推广区 / right_promo | - | 区块曝光 | health_monitor.report_result.right_promo | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>monitor_id(string, 选填) |
| 右侧推广区 / right_promo | 二维码卡片 / qr_card | 坑位曝光 | health_monitor.report_result.right_promo.qr_card | content_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>monitor_id(string, 选填) |
| 右侧推广区 / right_promo | 营销Banner / promo_banner | 坑位曝光 | health_monitor.report_result.right_promo.promo_banner | content_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>monitor_id(string, 选填) |
| 右侧推广区 / right_promo | 营销Banner / promo_banner | 坑位点击 | health_monitor.report_result.right_promo.promo_banner | content_id(string, 选填)<br/>user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>monitor_id(string, 选填) |


## 4. 主数据沉淀建议

| 类型 | 中文名 | 英文名 | 状态 | 原因 |
| --- | --- | --- | --- | --- |
| c | 弹窗关闭区 | modal_close | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 关闭按钮 | close_btn | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 窦性心律指标卡 | sinus_rhythm_card | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 室上性早搏指标卡 | premature_beat_card | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 心率指标卡 | heart_rate_card | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 能量指标卡 | energy_card | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 压力指标卡 | stress_card | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 负面情绪指标卡 | negative_emotion_card | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 效率指标卡 | efficiency_card | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
