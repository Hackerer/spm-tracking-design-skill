# 埋点测试建议

- 需求名称：Robotaxi 健康监测功能

## 性别选择页页面浏览验证

- 页面：性别选择页
- 目标SPM：health_monitor.gender_selection
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入性别选择页 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 男性选项坑位点击验证

- 页面：性别选择页
- 目标SPM：health_monitor.gender_selection.gender_selector.male_option
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击男性选项 | 点击事件上报 | 无biz_type要求。 |
## 男性选项参数验证

- 页面：性别选择页
- 目标SPM：health_monitor.gender_selection.gender_selector.male_option
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发男性选项对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发男性选项对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发男性选项对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发男性选项对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发男性选项对应事件 | env | 环境需符合类型 string，且为必填。 |
## 女性选项坑位点击验证

- 页面：性别选择页
- 目标SPM：health_monitor.gender_selection.gender_selector.female_option
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击女性选项 | 点击事件上报 | 无biz_type要求。 |
## 女性选项参数验证

- 页面：性别选择页
- 目标SPM：health_monitor.gender_selection.gender_selector.female_option
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发女性选项对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发女性选项对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发女性选项对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发女性选项对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发女性选项对应事件 | env | 环境需符合类型 string，且为必填。 |
## 下一步按钮坑位点击验证

- 页面：性别选择页
- 目标SPM：health_monitor.gender_selection.fixed_bottom.next_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击下一步按钮 | 点击事件上报 | 无biz_type要求。 |
## 下一步按钮参数验证

- 页面：性别选择页
- 目标SPM：health_monitor.gender_selection.fixed_bottom.next_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发下一步按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发下一步按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发下一步按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发下一步按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发下一步按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
## 基础信息录入页页面浏览验证

- 页面：基础信息录入页
- 目标SPM：health_monitor.basic_info
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入基础信息录入页 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 年龄选择器坑位点击验证

- 页面：基础信息录入页
- 目标SPM：health_monitor.basic_info.basic_info_form.age_picker
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击年龄选择器 | 点击事件上报 | 无biz_type要求。 |
## 年龄选择器参数验证

- 页面：基础信息录入页
- 目标SPM：health_monitor.basic_info.basic_info_form.age_picker
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发年龄选择器对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发年龄选择器对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发年龄选择器对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发年龄选择器对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发年龄选择器对应事件 | env | 环境需符合类型 string，且为必填。 |
## 身高选择器坑位点击验证

- 页面：基础信息录入页
- 目标SPM：health_monitor.basic_info.basic_info_form.height_picker
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击身高选择器 | 点击事件上报 | 无biz_type要求。 |
## 身高选择器参数验证

- 页面：基础信息录入页
- 目标SPM：health_monitor.basic_info.basic_info_form.height_picker
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发身高选择器对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发身高选择器对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发身高选择器对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发身高选择器对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发身高选择器对应事件 | env | 环境需符合类型 string，且为必填。 |
## 体重选择器坑位点击验证

- 页面：基础信息录入页
- 目标SPM：health_monitor.basic_info.basic_info_form.weight_picker
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击体重选择器 | 点击事件上报 | 无biz_type要求。 |
## 体重选择器参数验证

- 页面：基础信息录入页
- 目标SPM：health_monitor.basic_info.basic_info_form.weight_picker
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发体重选择器对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发体重选择器对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发体重选择器对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发体重选择器对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发体重选择器对应事件 | env | 环境需符合类型 string，且为必填。 |
## 开始检测按钮坑位点击验证

- 页面：基础信息录入页
- 目标SPM：health_monitor.basic_info.fixed_bottom.start_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击开始检测按钮 | 点击事件上报 | 无biz_type要求。 |
## 开始检测按钮参数验证

- 页面：基础信息录入页
- 目标SPM：health_monitor.basic_info.fixed_bottom.start_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发开始检测按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发开始检测按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发开始检测按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发开始检测按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发开始检测按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
## 健康监测启动页页面浏览验证

- 页面：健康监测启动页
- 目标SPM：health_monitor.start
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入健康监测启动页 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 知情同意复选框坑位点击验证

- 页面：健康监测启动页
- 目标SPM：health_monitor.start.agreement_bar.agreement_checkbox
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击知情同意复选框 | 点击事件上报 | 无biz_type要求。 |
## 知情同意复选框参数验证

- 页面：健康监测启动页
- 目标SPM：health_monitor.start.agreement_bar.agreement_checkbox
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发知情同意复选框对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发知情同意复选框对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发知情同意复选框对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发知情同意复选框对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发知情同意复选框对应事件 | env | 环境需符合类型 string，且为必填。 |
## 知情同意书链接坑位点击验证

- 页面：健康监测启动页
- 目标SPM：health_monitor.start.agreement_bar.agreement_link
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击知情同意书链接 | 点击事件上报 | 无biz_type要求。 |
## 知情同意书链接参数验证

- 页面：健康监测启动页
- 目标SPM：health_monitor.start.agreement_bar.agreement_link
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 协议类型参数校验 | 触发知情同意书链接对应事件 | agreement_type | 协议类型需符合类型 string。 |
| 用户PIN参数校验 | 触发知情同意书链接对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发知情同意书链接对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发知情同意书链接对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发知情同意书链接对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发知情同意书链接对应事件 | env | 环境需符合类型 string，且为必填。 |
## 隐私政策链接坑位点击验证

- 页面：健康监测启动页
- 目标SPM：health_monitor.start.agreement_bar.privacy_link
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击隐私政策链接 | 点击事件上报 | 无biz_type要求。 |
## 隐私政策链接参数验证

- 页面：健康监测启动页
- 目标SPM：health_monitor.start.agreement_bar.privacy_link
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 协议类型参数校验 | 触发隐私政策链接对应事件 | agreement_type | 协议类型需符合类型 string。 |
| 用户PIN参数校验 | 触发隐私政策链接对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发隐私政策链接对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发隐私政策链接对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发隐私政策链接对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发隐私政策链接对应事件 | env | 环境需符合类型 string，且为必填。 |
## 启动主区域区块曝光验证

- 页面：健康监测启动页
- 目标SPM：health_monitor.start.start_panel
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入健康监测启动页并确认启动主区域展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 开始检测按钮坑位点击验证

- 页面：健康监测启动页
- 目标SPM：health_monitor.start.start_panel.start_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击开始检测按钮 | 点击事件上报 | 无biz_type要求。 |
## 开始检测按钮参数验证

- 页面：健康监测启动页
- 目标SPM：health_monitor.start.start_panel.start_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 订单ID参数校验 | 触发开始检测按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 用户PIN参数校验 | 触发开始检测按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发开始检测按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发开始检测按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发开始检测按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
## 协议详情弹窗页面浏览验证

- 页面：协议详情弹窗
- 目标SPM：health_monitor.agreement_detail
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入协议详情弹窗 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 操作弹窗区区块曝光验证

- 页面：协议详情弹窗
- 目标SPM：health_monitor.agreement_detail.modal_actions
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入协议详情弹窗并确认操作弹窗区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 不同意按钮坑位点击验证

- 页面：协议详情弹窗
- 目标SPM：health_monitor.agreement_detail.modal_actions.disagree_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击不同意按钮 | 点击事件上报 | 无biz_type要求。 |
## 不同意按钮参数验证

- 页面：协议详情弹窗
- 目标SPM：health_monitor.agreement_detail.modal_actions.disagree_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 协议类型参数校验 | 触发不同意按钮对应事件 | agreement_type | 协议类型需符合类型 string。 |
| 用户PIN参数校验 | 触发不同意按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发不同意按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发不同意按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发不同意按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发不同意按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
## 同意并继续按钮坑位点击验证

- 页面：协议详情弹窗
- 目标SPM：health_monitor.agreement_detail.modal_actions.agree_continue_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击同意并继续按钮 | 点击事件上报 | 无biz_type要求。 |
## 同意并继续按钮参数验证

- 页面：协议详情弹窗
- 目标SPM：health_monitor.agreement_detail.modal_actions.agree_continue_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 协议类型参数校验 | 触发同意并继续按钮对应事件 | agreement_type | 协议类型需符合类型 string。 |
| 用户PIN参数校验 | 触发同意并继续按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发同意并继续按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发同意并继续按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发同意并继续按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发同意并继续按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
## 隐私政策弹窗页面浏览验证

- 页面：隐私政策弹窗
- 目标SPM：health_monitor.privacy_policy
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入隐私政策弹窗 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 操作弹窗区区块曝光验证

- 页面：隐私政策弹窗
- 目标SPM：health_monitor.privacy_policy.modal_actions
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入隐私政策弹窗并确认操作弹窗区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 不同意按钮坑位点击验证

- 页面：隐私政策弹窗
- 目标SPM：health_monitor.privacy_policy.modal_actions.disagree_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击不同意按钮 | 点击事件上报 | 无biz_type要求。 |
## 不同意按钮参数验证

- 页面：隐私政策弹窗
- 目标SPM：health_monitor.privacy_policy.modal_actions.disagree_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 协议类型参数校验 | 触发不同意按钮对应事件 | agreement_type | 协议类型需符合类型 string。 |
| 用户PIN参数校验 | 触发不同意按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发不同意按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发不同意按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发不同意按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发不同意按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
## 同意并继续按钮坑位点击验证

- 页面：隐私政策弹窗
- 目标SPM：health_monitor.privacy_policy.modal_actions.agree_continue_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击同意并继续按钮 | 点击事件上报 | 无biz_type要求。 |
## 同意并继续按钮参数验证

- 页面：隐私政策弹窗
- 目标SPM：health_monitor.privacy_policy.modal_actions.agree_continue_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 协议类型参数校验 | 触发同意并继续按钮对应事件 | agreement_type | 协议类型需符合类型 string。 |
| 用户PIN参数校验 | 触发同意并继续按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发同意并继续按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发同意并继续按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发同意并继续按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发同意并继续按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
## 教学引导页页面浏览验证

- 页面：教学引导页
- 目标SPM：health_monitor.guide
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入教学引导页 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 引导内容区区块曝光验证

- 页面：教学引导页
- 目标SPM：health_monitor.guide.guide_content
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入教学引导页并确认引导内容区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 引导卡片参数验证

- 页面：教学引导页
- 目标SPM：health_monitor.guide.guide_content.guide_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 订单ID参数校验 | 触发引导卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 用户PIN参数校验 | 触发引导卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发引导卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发引导卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发引导卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
## 检测准备页页面浏览验证

- 页面：检测准备页
- 目标SPM：health_monitor.prepare
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入检测准备页 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 准备状态区区块曝光验证

- 页面：检测准备页
- 目标SPM：health_monitor.prepare.prepare_status
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入检测准备页并确认准备状态区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 准备进度环参数验证

- 页面：检测准备页
- 目标SPM：health_monitor.prepare.prepare_status.prepare_progress
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发准备进度环对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发准备进度环对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发准备进度环对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发准备进度环对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发准备进度环对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发准备进度环对应事件 | env | 环境需符合类型 string，且为必填。 |
## 监测过程页页面浏览验证

- 页面：监测过程页
- 目标SPM：health_monitor.monitoring
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入监测过程页 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 监测面板区区块曝光验证

- 页面：监测过程页
- 目标SPM：health_monitor.monitoring.monitoring_panel
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入监测过程页并确认监测面板区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 监测进度区参数验证

- 页面：监测过程页
- 目标SPM：health_monitor.monitoring.monitoring_panel.monitoring_area
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发监测进度区对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发监测进度区对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发监测进度区对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发监测进度区对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发监测进度区对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发监测进度区对应事件 | env | 环境需符合类型 string，且为必填。 |
## 科普内容区区块曝光验证

- 页面：监测过程页
- 目标SPM：health_monitor.monitoring.science_content
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入监测过程页并确认科普内容区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 科普卡片坑位曝光验证

- 页面：监测过程页
- 目标SPM：health_monitor.monitoring.science_content.science_card
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认科普卡片展示并进入可视区域 | 坑位曝光上报 | 顺序坑位需同时确认坑位顺序是否符合预期。顺序坑位需要区分具体位置或序号，坑位级曝光具备独立分析价值。 |
## 科普卡片参数验证

- 页面：监测过程页
- 目标SPM：health_monitor.monitoring.science_content.science_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 内容ID参数校验 | 触发科普卡片对应事件 | content_id | 内容ID需符合类型 string。 |
| 用户PIN参数校验 | 触发科普卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发科普卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发科普卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发科普卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发科普卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
| 监测ID参数校验 | 触发科普卡片对应事件 | monitor_id | 监测ID需符合类型 string。 |
## 退出确认弹窗页面浏览验证

- 页面：退出确认弹窗
- 目标SPM：health_monitor.exit_confirm
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入退出确认弹窗 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 操作弹窗区区块曝光验证

- 页面：退出确认弹窗
- 目标SPM：health_monitor.exit_confirm.modal_actions
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入退出确认弹窗并确认操作弹窗区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 退出按钮坑位点击验证

- 页面：退出确认弹窗
- 目标SPM：health_monitor.exit_confirm.modal_actions.exit_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击退出按钮 | 点击事件上报 | 无biz_type要求。 |
## 退出按钮参数验证

- 页面：退出确认弹窗
- 目标SPM：health_monitor.exit_confirm.modal_actions.exit_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发退出按钮对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发退出按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发退出按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发退出按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发退出按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发退出按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
## 坚持一下按钮坑位点击验证

- 页面：退出确认弹窗
- 目标SPM：health_monitor.exit_confirm.modal_actions.hold_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击坚持一下按钮 | 点击事件上报 | 无biz_type要求。 |
## 坚持一下按钮参数验证

- 页面：退出确认弹窗
- 目标SPM：health_monitor.exit_confirm.modal_actions.hold_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发坚持一下按钮对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发坚持一下按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发坚持一下按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发坚持一下按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发坚持一下按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发坚持一下按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
## 关闭按钮坑位点击验证

- 页面：退出确认弹窗
- 目标SPM：health_monitor.exit_confirm.modal_close.close_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击关闭按钮 | 点击事件上报 | 无biz_type要求。 |
## 关闭按钮参数验证

- 页面：退出确认弹窗
- 目标SPM：health_monitor.exit_confirm.modal_close.close_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发关闭按钮对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发关闭按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发关闭按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发关闭按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发关闭按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发关闭按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
## 报告生成页页面浏览验证

- 页面：报告生成页
- 目标SPM：health_monitor.report_generating
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入报告生成页 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 报告生成区区块曝光验证

- 页面：报告生成页
- 目标SPM：health_monitor.report_generating.generating_panel
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入报告生成页并确认报告生成区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 生成中区域参数验证

- 页面：报告生成页
- 目标SPM：health_monitor.report_generating.generating_panel.generating_area
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发生成中区域对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发生成中区域对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发生成中区域对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发生成中区域对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发生成中区域对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发生成中区域对应事件 | env | 环境需符合类型 string，且为必填。 |
## 科普内容区区块曝光验证

- 页面：报告生成页
- 目标SPM：health_monitor.report_generating.science_content
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入报告生成页并确认科普内容区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 科普卡片坑位曝光验证

- 页面：报告生成页
- 目标SPM：health_monitor.report_generating.science_content.science_card
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认科普卡片展示并进入可视区域 | 坑位曝光上报 | 顺序坑位需同时确认坑位顺序是否符合预期。顺序坑位需要区分具体位置或序号，坑位级曝光具备独立分析价值。 |
## 科普卡片参数验证

- 页面：报告生成页
- 目标SPM：health_monitor.report_generating.science_content.science_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 内容ID参数校验 | 触发科普卡片对应事件 | content_id | 内容ID需符合类型 string。 |
| 用户PIN参数校验 | 触发科普卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发科普卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发科普卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发科普卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发科普卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
| 监测ID参数校验 | 触发科普卡片对应事件 | monitor_id | 监测ID需符合类型 string。 |
## 结果报告页页面浏览验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入结果报告页 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 结果总览区区块曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.result_summary
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入结果报告页并确认结果总览区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 综合评分区参数验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.result_summary.score_area
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发综合评分区对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发综合评分区对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发综合评分区对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发综合评分区对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发综合评分区对应事件 | env | 环境需符合类型 string，且为必填。 |
| 监测ID参数校验 | 触发综合评分区对应事件 | monitor_id | 监测ID需符合类型 string。 |
## 生理指标区区块曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.physiological_metrics
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入结果报告页并确认生理指标区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 生理指标卡组坑位曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.physiological_metrics.physio_cards
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认生理指标卡组展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 生理指标卡组参数验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.physiological_metrics.physio_cards
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发生理指标卡组对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发生理指标卡组对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发生理指标卡组对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发生理指标卡组对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发生理指标卡组对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发生理指标卡组对应事件 | env | 环境需符合类型 string，且为必填。 |
## 窦性心律指标卡坑位曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.physiological_metrics.sinus_rhythm_card
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认窦性心律指标卡展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 窦性心律指标卡参数验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.physiological_metrics.sinus_rhythm_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发窦性心律指标卡对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发窦性心律指标卡对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发窦性心律指标卡对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发窦性心律指标卡对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发窦性心律指标卡对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发窦性心律指标卡对应事件 | env | 环境需符合类型 string，且为必填。 |
## 室上性早搏指标卡坑位曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.physiological_metrics.premature_beat_card
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认室上性早搏指标卡展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 室上性早搏指标卡参数验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.physiological_metrics.premature_beat_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发室上性早搏指标卡对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发室上性早搏指标卡对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发室上性早搏指标卡对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发室上性早搏指标卡对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发室上性早搏指标卡对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发室上性早搏指标卡对应事件 | env | 环境需符合类型 string，且为必填。 |
## 心率指标卡坑位曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.physiological_metrics.heart_rate_card
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认心率指标卡展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 心率指标卡参数验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.physiological_metrics.heart_rate_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发心率指标卡对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发心率指标卡对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发心率指标卡对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发心率指标卡对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发心率指标卡对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发心率指标卡对应事件 | env | 环境需符合类型 string，且为必填。 |
## 心理指标区区块曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.mental_metrics
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入结果报告页并确认心理指标区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 心理指标卡组坑位曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.mental_metrics.mental_cards
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认心理指标卡组展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 心理指标卡组参数验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.mental_metrics.mental_cards
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发心理指标卡组对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发心理指标卡组对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发心理指标卡组对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发心理指标卡组对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发心理指标卡组对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发心理指标卡组对应事件 | env | 环境需符合类型 string，且为必填。 |
## 能量指标卡坑位曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.mental_metrics.energy_card
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认能量指标卡展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 能量指标卡参数验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.mental_metrics.energy_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发能量指标卡对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发能量指标卡对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发能量指标卡对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发能量指标卡对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发能量指标卡对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发能量指标卡对应事件 | env | 环境需符合类型 string，且为必填。 |
## 压力指标卡坑位曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.mental_metrics.stress_card
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认压力指标卡展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 压力指标卡参数验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.mental_metrics.stress_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发压力指标卡对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发压力指标卡对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发压力指标卡对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发压力指标卡对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发压力指标卡对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发压力指标卡对应事件 | env | 环境需符合类型 string，且为必填。 |
## 负面情绪指标卡坑位曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.mental_metrics.negative_emotion_card
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认负面情绪指标卡展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 负面情绪指标卡参数验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.mental_metrics.negative_emotion_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发负面情绪指标卡对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发负面情绪指标卡对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发负面情绪指标卡对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发负面情绪指标卡对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发负面情绪指标卡对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发负面情绪指标卡对应事件 | env | 环境需符合类型 string，且为必填。 |
## 效率指标卡坑位曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.mental_metrics.efficiency_card
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认效率指标卡展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 效率指标卡参数验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.mental_metrics.efficiency_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 监测ID参数校验 | 触发效率指标卡对应事件 | monitor_id | 监测ID需符合类型 string。 |
| 用户PIN参数校验 | 触发效率指标卡对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发效率指标卡对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发效率指标卡对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发效率指标卡对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发效率指标卡对应事件 | env | 环境需符合类型 string，且为必填。 |
## 右侧推广区区块曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.right_promo
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入结果报告页并确认右侧推广区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 二维码卡片坑位曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.right_promo.qr_card
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认二维码卡片展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素承载独立内容或素材，需要保留坑位级曝光。 |
## 二维码卡片参数验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.right_promo.qr_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 内容ID参数校验 | 触发二维码卡片对应事件 | content_id | 内容ID需符合类型 string。 |
| 用户PIN参数校验 | 触发二维码卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发二维码卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发二维码卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发二维码卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发二维码卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
| 监测ID参数校验 | 触发二维码卡片对应事件 | monitor_id | 监测ID需符合类型 string。 |
## 营销Banner坑位曝光验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.right_promo.promo_banner
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认营销Banner展示并进入可视区域 | 坑位曝光上报 | 顺序坑位需同时确认坑位顺序是否符合预期。顺序坑位需要区分具体位置或序号，坑位级曝光具备独立分析价值。 |
## 营销Banner坑位点击验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.right_promo.promo_banner
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击营销Banner | 点击事件上报 | 无biz_type要求。 |
## 营销Banner参数验证

- 页面：结果报告页
- 目标SPM：health_monitor.report_result.right_promo.promo_banner
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 内容ID参数校验 | 触发营销Banner对应事件 | content_id | 内容ID需符合类型 string。 |
| 用户PIN参数校验 | 触发营销Banner对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发营销Banner对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发营销Banner对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发营销Banner对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发营销Banner对应事件 | env | 环境需符合类型 string，且为必填。 |
| 监测ID参数校验 | 触发营销Banner对应事件 | monitor_id | 监测ID需符合类型 string。 |
## 核心业务链路链路验证

- 页面：性别选择页
- 目标SPM：health_monitor_gender_selection -> health_monitor_report_generating
- 测试类型：flow_check
- 预期结果：核心页面跳转链路可被完整识别，页面序列与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 链路步骤1 | 进入性别选择页 | health_monitor_gender_selection | 用户进入健康监测后的第一页，选择性别后进入基础信息录入。 |
| 链路步骤2 | 选择性别并进入基础信息录入页 | health_monitor_basic_info | 用户录入年龄、身高、体重，并点击开始检测。 |
| 链路步骤3 | 填写年龄、身高、体重并进入健康监测启动页 | health_monitor_start | 展示健康监测价值介绍、协议勾选和一键开启按钮。 |
| 链路步骤4 | 进入教学引导页 | health_monitor_guide | 展示如何取出设备、如何双手持握的教学指引。 |
| 链路步骤5 | 完成双手持握进入检测准备页 | health_monitor_prepare | 信号采集正常后展示准备状态，提示检测即将开始。 |
| 链路步骤6 | 进入监测过程页 | health_monitor_monitoring | 展示监测进度、实时波形和健康科普内容。 |
| 链路步骤7 | 生成报告并进入报告生成页 | health_monitor_report_generating | 监测完成后展示报告生成中的等待页面与科普内容。 |
| 链路步骤8 | 进入结果报告页 | health_monitor_report_result | 展示总评分、生理指标、心理指标，以及二维码和营销banner。 |
| 链路步骤9 | 进入健康监测启动页 | health_monitor_start | 展示健康监测价值介绍、协议勾选和一键开启按钮。 |
| 链路步骤10 | 进入检测准备页 | health_monitor_prepare | 信号采集正常后展示准备状态，提示检测即将开始。 |
| 链路步骤11 | 检测中可能弹出退出确认弹窗 | health_monitor_exit_confirm | 用户中途退出时的挽留弹窗，提供退出和坚持一下两个选择。 |
| 链路步骤12 | 进入报告生成页 | health_monitor_report_generating | 监测完成后展示报告生成中的等待页面与科普内容。 |
