# 埋点测试建议

- 需求名称：Robotaxi 智能车控核心控制能力

## 桌面页面浏览验证

- 页面：桌面
- 目标SPM：desktop.desktop
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入桌面 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 底部导航栏区块曝光验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入桌面并确认底部导航栏展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 空调开关坑位曝光验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.ac_on_off
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认空调开关展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 空调开关坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.ac_on_off
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击空调开关 | 点击事件上报 | 无biz_type要求。 |
## 空调开关参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.ac_on_off
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发空调开关对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发空调开关对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发空调开关对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发空调开关对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发空调开关对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发空调开关对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发空调开关对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 返回桌面坑位曝光验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.back_home
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认返回桌面展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 返回桌面坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.back_home
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击返回桌面 | 点击事件上报 | 无biz_type要求。 |
## 返回桌面参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.back_home
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发返回桌面对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发返回桌面对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发返回桌面对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发返回桌面对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发返回桌面对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发返回桌面对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发返回桌面对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 亮度降低坑位曝光验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.brightness_down
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认亮度降低展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 亮度降低坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.brightness_down
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击亮度降低 | 点击事件上报 | 无biz_type要求。 |
## 亮度降低参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.brightness_down
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 亮度值参数校验 | 触发亮度降低对应事件 | brightness_level | 亮度值需符合类型 number。 |
| 用户PIN参数校验 | 触发亮度降低对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发亮度降低对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发亮度降低对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发亮度降低对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发亮度降低对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发亮度降低对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发亮度降低对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 亮度调节入口坑位曝光验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.brightness_set_entrance
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认亮度调节入口展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 亮度调节入口坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.brightness_set_entrance
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击亮度调节入口 | 点击事件上报 | 无biz_type要求。 |
## 亮度调节入口参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.brightness_set_entrance
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发亮度调节入口对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发亮度调节入口对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发亮度调节入口对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发亮度调节入口对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发亮度调节入口对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发亮度调节入口对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发亮度调节入口对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 亮度升高坑位曝光验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.brightness_up
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认亮度升高展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 亮度升高坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.brightness_up
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击亮度升高 | 点击事件上报 | 无biz_type要求。 |
## 亮度升高参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.brightness_up
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 亮度值参数校验 | 触发亮度升高对应事件 | brightness_level | 亮度值需符合类型 number。 |
| 用户PIN参数校验 | 触发亮度升高对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发亮度升高对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发亮度升高对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发亮度升高对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发亮度升高对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发亮度升高对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发亮度升高对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 媒体下一个坑位曝光验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.media_next
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认媒体下一个展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 媒体下一个坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.media_next
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击媒体下一个 | 点击事件上报 | 无biz_type要求。 |
## 媒体下一个参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.media_next
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发媒体下一个对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发媒体下一个对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发媒体下一个对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发媒体下一个对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发媒体下一个对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发媒体下一个对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发媒体下一个对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 媒体播放暂停坑位曝光验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.media_play_pause
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认媒体播放暂停展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 媒体播放暂停坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.media_play_pause
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击媒体播放暂停 | 点击事件上报 | 无biz_type要求。 |
## 媒体播放暂停参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.media_play_pause
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发媒体播放暂停对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发媒体播放暂停对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发媒体播放暂停对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发媒体播放暂停对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发媒体播放暂停对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发媒体播放暂停对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发媒体播放暂停对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 就近停车入口坑位曝光验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.nearby_parking_entrance
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认就近停车入口展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 就近停车入口坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.nearby_parking_entrance
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击就近停车入口 | 点击事件上报 | 无biz_type要求。 |
## 就近停车入口参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.nearby_parking_entrance
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发就近停车入口对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发就近停车入口对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发就近停车入口对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发就近停车入口对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发就近停车入口对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发就近停车入口对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发就近停车入口对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 音量调节入口坑位曝光验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.volume_set_entrance
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认音量调节入口展示并进入可视区域 | 坑位曝光上报 | 固定坑位只需确认曝光是否存在。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 音量调节入口坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.volume_set_entrance
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击音量调节入口 | 点击事件上报 | 无biz_type要求。 |
## 音量调节入口参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.bottom_navigation.volume_set_entrance
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发音量调节入口对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发音量调节入口对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发音量调节入口对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发音量调节入口对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发音量调节入口对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发音量调节入口对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发音量调节入口对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 亮度面板区区块曝光验证

- 页面：桌面
- 目标SPM：desktop.desktop.brightness_panel
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入桌面并确认亮度面板区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 阅读灯开关坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.brightness_panel.reading_light_switch
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击阅读灯开关 | 点击事件上报 | 无biz_type要求。 |
## 阅读灯开关参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.brightness_panel.reading_light_switch
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发阅读灯开关对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发阅读灯开关对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发阅读灯开关对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发阅读灯开关对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发阅读灯开关对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发阅读灯开关对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发阅读灯开关对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 屏幕亮度滑动条坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.brightness_panel.brightness_slider
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击屏幕亮度滑动条 | 点击事件上报 | 无biz_type要求。 |
## 屏幕亮度滑动条参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.brightness_panel.brightness_slider
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 亮度值参数校验 | 触发屏幕亮度滑动条对应事件 | brightness_level | 亮度值需符合类型 number。 |
| 用户PIN参数校验 | 触发屏幕亮度滑动条对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发屏幕亮度滑动条对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发屏幕亮度滑动条对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发屏幕亮度滑动条对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发屏幕亮度滑动条对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发屏幕亮度滑动条对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发屏幕亮度滑动条对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 音量面板区区块曝光验证

- 页面：桌面
- 目标SPM：desktop.desktop.volume_panel
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入桌面并确认音量面板区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 语音助手音量滑动条坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.volume_panel.assistant_volume_slider
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击语音助手音量滑动条 | 点击事件上报 | 无biz_type要求。 |
## 语音助手音量滑动条参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.volume_panel.assistant_volume_slider
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 音量值参数校验 | 触发语音助手音量滑动条对应事件 | volume_level | 音量值需符合类型 number。 |
| 用户PIN参数校验 | 触发语音助手音量滑动条对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发语音助手音量滑动条对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发语音助手音量滑动条对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发语音助手音量滑动条对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发语音助手音量滑动条对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发语音助手音量滑动条对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发语音助手音量滑动条对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 媒体音量滑动条坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.volume_panel.media_volume_slider
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击媒体音量滑动条 | 点击事件上报 | 无biz_type要求。 |
## 媒体音量滑动条参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.volume_panel.media_volume_slider
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 音量值参数校验 | 触发媒体音量滑动条对应事件 | volume_level | 音量值需符合类型 number。 |
| 用户PIN参数校验 | 触发媒体音量滑动条对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发媒体音量滑动条对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发媒体音量滑动条对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发媒体音量滑动条对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发媒体音量滑动条对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发媒体音量滑动条对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发媒体音量滑动条对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 媒体静音按钮坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.volume_panel.mute_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击媒体静音按钮 | 点击事件上报 | 无biz_type要求。 |
## 媒体静音按钮参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.volume_panel.mute_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发媒体静音按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发媒体静音按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发媒体静音按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发媒体静音按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发媒体静音按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发媒体静音按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发媒体静音按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 空调控制页页面浏览验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入空调控制页 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 副驾座椅加热按钮坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.seat_heating_controls.passenger_seat_heating_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击副驾座椅加热按钮 | 点击事件上报 | 无biz_type要求。 |
## 副驾座椅加热按钮参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.seat_heating_controls.passenger_seat_heating_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发副驾座椅加热按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发副驾座椅加热按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发副驾座椅加热按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发副驾座椅加热按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发副驾座椅加热按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发副驾座椅加热按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发副驾座椅加热按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 左后座椅加热按钮坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.seat_heating_controls.rear_left_seat_heating_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击左后座椅加热按钮 | 点击事件上报 | 无biz_type要求。 |
## 左后座椅加热按钮参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.seat_heating_controls.rear_left_seat_heating_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发左后座椅加热按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发左后座椅加热按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发左后座椅加热按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发左后座椅加热按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发左后座椅加热按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发左后座椅加热按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发左后座椅加热按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 右后座椅加热按钮坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.seat_heating_controls.rear_right_seat_heating_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击右后座椅加热按钮 | 点击事件上报 | 无biz_type要求。 |
## 右后座椅加热按钮参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.seat_heating_controls.rear_right_seat_heating_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发右后座椅加热按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发右后座椅加热按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发右后座椅加热按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发右后座椅加热按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发右后座椅加热按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发右后座椅加热按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发右后座椅加热按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 关窗按钮坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.window_controls.close_window_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击关窗按钮 | 点击事件上报 | 无biz_type要求。 |
## 关窗按钮参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.window_controls.close_window_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发关窗按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发关窗按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发关窗按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发关窗按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发关窗按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发关窗按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发关窗按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 透气按钮坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.window_controls.ventilation_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击透气按钮 | 点击事件上报 | 无biz_type要求。 |
## 透气按钮参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.window_controls.ventilation_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发透气按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发透气按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发透气按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发透气按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发透气按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发透气按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发透气按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 空调电源按钮坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.climate_power.climate_power_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击空调电源按钮 | 点击事件上报 | 无biz_type要求。 |
## 空调电源按钮参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.climate_power.climate_power_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发空调电源按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发空调电源按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发空调电源按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发空调电源按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发空调电源按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发空调电源按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发空调电源按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 吹头模式按钮坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.airflow_modes.airflow_head_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击吹头模式按钮 | 点击事件上报 | 无biz_type要求。 |
## 吹头模式按钮参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.airflow_modes.airflow_head_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发吹头模式按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发吹头模式按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发吹头模式按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发吹头模式按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发吹头模式按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发吹头模式按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发吹头模式按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 吹脚模式按钮坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.airflow_modes.airflow_foot_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击吹脚模式按钮 | 点击事件上报 | 无biz_type要求。 |
## 吹脚模式按钮参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.airflow_modes.airflow_foot_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发吹脚模式按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发吹脚模式按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发吹脚模式按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发吹脚模式按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发吹脚模式按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发吹脚模式按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发吹脚模式按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 吹窗模式按钮坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.airflow_modes.airflow_window_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击吹窗模式按钮 | 点击事件上报 | 无biz_type要求。 |
## 吹窗模式按钮参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.airflow_modes.airflow_window_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发吹窗模式按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发吹窗模式按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发吹窗模式按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发吹窗模式按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发吹窗模式按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发吹窗模式按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发吹窗模式按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 风量减小按钮坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.fan_speed_controls.fan_decrease_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击风量减小按钮 | 点击事件上报 | 无biz_type要求。 |
## 风量减小按钮参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.fan_speed_controls.fan_decrease_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 风量档位参数校验 | 触发风量减小按钮对应事件 | fan_level | 风量档位需符合类型 number。 |
| 用户PIN参数校验 | 触发风量减小按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发风量减小按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发风量减小按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发风量减小按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发风量减小按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发风量减小按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发风量减小按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 风量增大按钮坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.fan_speed_controls.fan_increase_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击风量增大按钮 | 点击事件上报 | 无biz_type要求。 |
## 风量增大按钮参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.fan_speed_controls.fan_increase_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 风量档位参数校验 | 触发风量增大按钮对应事件 | fan_level | 风量档位需符合类型 number。 |
| 用户PIN参数校验 | 触发风量增大按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发风量增大按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发风量增大按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发风量增大按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发风量增大按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发风量增大按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发风量增大按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 语音推荐词区区块曝光验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.voice_suggestions
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入空调控制页并确认语音推荐词区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 推荐词按钮（有点冷/feeling_cold）坑位曝光验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.voice_suggestions.suggestion_btn(feeling_cold)
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认推荐词按钮（有点冷/feeling_cold）展示并进入可视区域 | 坑位曝光上报 | 顺序坑位需同时确认坑位顺序是否符合预期。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 推荐词按钮（有点冷/feeling_cold）坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.voice_suggestions.suggestion_btn(feeling_cold)
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击推荐词按钮（有点冷/feeling_cold） | 点击事件上报 | 需确认biz_type=feeling_cold。 |
## 推荐词按钮（有点冷/feeling_cold）参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.voice_suggestions.suggestion_btn(feeling_cold)
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 推荐Sug词参数校验 | 触发推荐词按钮（有点冷/feeling_cold）对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
| 用户PIN参数校验 | 触发推荐词按钮（有点冷/feeling_cold）对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发推荐词按钮（有点冷/feeling_cold）对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发推荐词按钮（有点冷/feeling_cold）对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发推荐词按钮（有点冷/feeling_cold）对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发推荐词按钮（有点冷/feeling_cold）对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发推荐词按钮（有点冷/feeling_cold）对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
## 推荐词按钮（右后座椅加热/rear_seat_heating）坑位曝光验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.voice_suggestions.suggestion_btn(rear_seat_heating)
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认推荐词按钮（右后座椅加热/rear_seat_heating）展示并进入可视区域 | 坑位曝光上报 | 顺序坑位需同时确认坑位顺序是否符合预期。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 推荐词按钮（右后座椅加热/rear_seat_heating）坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.voice_suggestions.suggestion_btn(rear_seat_heating)
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击推荐词按钮（右后座椅加热/rear_seat_heating） | 点击事件上报 | 需确认biz_type=rear_seat_heating。 |
## 推荐词按钮（右后座椅加热/rear_seat_heating）参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.voice_suggestions.suggestion_btn(rear_seat_heating)
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 推荐Sug词参数校验 | 触发推荐词按钮（右后座椅加热/rear_seat_heating）对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
| 用户PIN参数校验 | 触发推荐词按钮（右后座椅加热/rear_seat_heating）对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发推荐词按钮（右后座椅加热/rear_seat_heating）对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发推荐词按钮（右后座椅加热/rear_seat_heating）对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发推荐词按钮（右后座椅加热/rear_seat_heating）对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发推荐词按钮（右后座椅加热/rear_seat_heating）对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发推荐词按钮（右后座椅加热/rear_seat_heating）对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
## 推荐词按钮（风小一点/lower_wind）坑位曝光验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.voice_suggestions.suggestion_btn(lower_wind)
- 测试类型：ordered_position_check
- 预期结果：坑位曝光上报成功，SPM位置定义与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 坑位曝光 | 确认推荐词按钮（风小一点/lower_wind）展示并进入可视区域 | 坑位曝光上报 | 顺序坑位需同时确认坑位顺序是否符合预期。该元素具备独立曝光分析价值，保留坑位级曝光。 |
## 推荐词按钮（风小一点/lower_wind）坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.voice_suggestions.suggestion_btn(lower_wind)
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击推荐词按钮（风小一点/lower_wind） | 点击事件上报 | 需确认biz_type=lower_wind。 |
## 推荐词按钮（风小一点/lower_wind）参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.voice_suggestions.suggestion_btn(lower_wind)
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 推荐Sug词参数校验 | 触发推荐词按钮（风小一点/lower_wind）对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
| 用户PIN参数校验 | 触发推荐词按钮（风小一点/lower_wind）对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发推荐词按钮（风小一点/lower_wind）对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发推荐词按钮（风小一点/lower_wind）对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发推荐词按钮（风小一点/lower_wind）对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发推荐词按钮（风小一点/lower_wind）对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发推荐词按钮（风小一点/lower_wind）对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
## 温度降低按钮坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.temperature_controls.temperature_decrease_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击温度降低按钮 | 点击事件上报 | 无biz_type要求。 |
## 温度降低按钮参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.temperature_controls.temperature_decrease_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 目标温度参数校验 | 触发温度降低按钮对应事件 | temperature_value | 目标温度需符合类型 number。 |
| 用户PIN参数校验 | 触发温度降低按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发温度降低按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发温度降低按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发温度降低按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发温度降低按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发温度降低按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发温度降低按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 温度升高按钮坑位点击验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.temperature_controls.temperature_increase_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击温度升高按钮 | 点击事件上报 | 无biz_type要求。 |
## 温度升高按钮参数验证

- 页面：空调控制页
- 目标SPM：vehicle_control.climate_control.temperature_controls.temperature_increase_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 目标温度参数校验 | 触发温度升高按钮对应事件 | temperature_value | 目标温度需符合类型 number。 |
| 用户PIN参数校验 | 触发温度升高按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发温度升高按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发温度升高按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发温度升高按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发温度升高按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发温度升高按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发温度升高按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 核心业务链路链路验证

- 页面：桌面
- 目标SPM：desktop_desktop -> desktop_desktop
- 测试类型：flow_check
- 预期结果：核心页面跳转链路可被完整识别，页面序列与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 链路步骤1 | 进入桌面页 | desktop_desktop | 座舱桌面页，底部导航栏中承载空调、亮度、媒体和就近停车等快捷控制入口。 |
| 链路步骤2 | 通过桌面底部导航栏触发空调、亮度、音量或媒体快捷操作 | desktop_desktop | 座舱桌面页，底部导航栏中承载空调、亮度、媒体和就近停车等快捷控制入口。 |
| 链路步骤3 | 点击空调开关进入空调控制页 | vehicle_control_climate_control | 空调、风量、送风模式、车窗和座椅加热的主控制页面。 |
| 链路步骤4 | 在空调控制页调节温度、风量、送风模式、车窗和座椅加热 | vehicle_control_climate_control | 空调、风量、送风模式、车窗和座椅加热的主控制页面。 |
| 链路步骤5 | 在桌面页通过 Dock 快捷操作调节亮度、阅读灯、语音助手音量、媒体音量或静音 | desktop_desktop | 座舱桌面页，底部导航栏中承载空调、亮度、媒体和就近停车等快捷控制入口。 |
| 链路步骤6 | 通过桌面底部导航栏触发空调、亮度、音量或媒体快捷控制 | desktop_desktop | 座舱桌面页，底部导航栏中承载空调、亮度、媒体和就近停车等快捷控制入口。 |
