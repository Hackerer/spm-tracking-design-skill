# 埋点测试建议

- 需求名称：Robotaxi 无麦K歌

## 桌面页面浏览验证

- 页面：桌面
- 目标SPM：desktop.desktop
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入桌面 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 应用磁贴区区块曝光验证

- 页面：桌面
- 目标SPM：desktop.desktop.desktop_tiles
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入桌面并确认应用磁贴区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 唱吧磁贴卡片坑位点击验证

- 页面：桌面
- 目标SPM：desktop.desktop.desktop_tiles.karaoke_tile
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击唱吧磁贴卡片 | 点击事件上报 | 无biz_type要求。 |
## 唱吧磁贴卡片参数验证

- 页面：桌面
- 目标SPM：desktop.desktop.desktop_tiles.karaoke_tile
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发唱吧磁贴卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发唱吧磁贴卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发唱吧磁贴卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发唱吧磁贴卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发唱吧磁贴卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发唱吧磁贴卡片对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
## 首页页面浏览验证

- 页面：首页
- 目标SPM：home.main
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入首页 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 语音推荐词区区块曝光验证

- 页面：首页
- 目标SPM：home.main.voice_suggestions
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入首页并确认语音推荐词区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 语音推荐词按钮坑位点击验证

- 页面：首页
- 目标SPM：home.main.voice_suggestions.suggestion_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击语音推荐词按钮 | 点击事件上报 | 无biz_type要求。 |
## 语音推荐词按钮参数验证

- 页面：首页
- 目标SPM：home.main.voice_suggestions.suggestion_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发语音推荐词按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发语音推荐词按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发语音推荐词按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发语音推荐词按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发语音推荐词按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发语音推荐词按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发语音推荐词按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 热门歌星区区块曝光验证

- 页面：首页
- 目标SPM：home.main.singer_section
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入首页并确认热门歌星区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 热门歌星入口坑位点击验证

- 页面：首页
- 目标SPM：home.main.singer_section.singer_entry
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击热门歌星入口 | 点击事件上报 | 无biz_type要求。 |
## 热门歌星入口参数验证

- 页面：首页
- 目标SPM：home.main.singer_section.singer_entry
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发热门歌星入口对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发热门歌星入口对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发热门歌星入口对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发热门歌星入口对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发热门歌星入口对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发热门歌星入口对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
## 歌手卡片坑位点击验证

- 页面：首页
- 目标SPM：home.main.singer_section.singer_card
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击歌手卡片 | 点击事件上报 | 无biz_type要求。 |
## 歌手卡片参数验证

- 页面：首页
- 目标SPM：home.main.singer_section.singer_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发歌手卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发歌手卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发歌手卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发歌手卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发歌手卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发歌手卡片对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌手ID参数校验 | 触发歌手卡片对应事件 | singer_id | 歌手ID需符合类型 string，且为必填。 |
| 歌手名参数校验 | 触发歌手卡片对应事件 | singer_name | 歌手名需符合类型 string。 |
## 大家都爱唱区区块曝光验证

- 页面：首页
- 目标SPM：home.main.popular_section
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入首页并确认大家都爱唱区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 大家都爱唱入口坑位点击验证

- 页面：首页
- 目标SPM：home.main.popular_section.popular_entry
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击大家都爱唱入口 | 点击事件上报 | 无biz_type要求。 |
## 大家都爱唱入口参数验证

- 页面：首页
- 目标SPM：home.main.popular_section.popular_entry
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发大家都爱唱入口对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发大家都爱唱入口对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发大家都爱唱入口对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发大家都爱唱入口对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发大家都爱唱入口对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发大家都爱唱入口对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
## 热门歌曲卡片坑位点击验证

- 页面：首页
- 目标SPM：home.main.popular_section.hot_song_card
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击热门歌曲卡片 | 点击事件上报 | 无biz_type要求。 |
## 热门歌曲卡片参数验证

- 页面：首页
- 目标SPM：home.main.popular_section.hot_song_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发热门歌曲卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发热门歌曲卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发热门歌曲卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发热门歌曲卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发热门歌曲卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发热门歌曲卡片对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发热门歌曲卡片对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发热门歌曲卡片对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发热门歌曲卡片对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 更多推荐区区块曝光验证

- 页面：首页
- 目标SPM：home.main.recommendation_section
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入首页并确认更多推荐区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 更多推荐入口坑位点击验证

- 页面：首页
- 目标SPM：home.main.recommendation_section.recommend_entry
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击更多推荐入口 | 点击事件上报 | 无biz_type要求。 |
## 更多推荐入口参数验证

- 页面：首页
- 目标SPM：home.main.recommendation_section.recommend_entry
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发更多推荐入口对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发更多推荐入口对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发更多推荐入口对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发更多推荐入口对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发更多推荐入口对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发更多推荐入口对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
## 推荐分类卡片坑位点击验证

- 页面：首页
- 目标SPM：home.main.recommendation_section.theme_card
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击推荐分类卡片 | 点击事件上报 | 无biz_type要求。 |
## 推荐分类卡片参数验证

- 页面：首页
- 目标SPM：home.main.recommendation_section.theme_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发推荐分类卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发推荐分类卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发推荐分类卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发推荐分类卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发推荐分类卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发推荐分类卡片对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐主题参数校验 | 触发推荐分类卡片对应事件 | theme_name | 推荐主题需符合类型 string，且为必填。 |
## 热门歌星页页面浏览验证

- 页面：热门歌星页
- 目标SPM：home.karaoke_singer
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入热门歌星页 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 返回按钮坑位点击验证

- 页面：热门歌星页
- 目标SPM：home.karaoke_singer.fixed_top.back
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击返回按钮 | 点击事件上报 | 无biz_type要求。 |
## 返回按钮参数验证

- 页面：热门歌星页
- 目标SPM：home.karaoke_singer.fixed_top.back
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发返回按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发返回按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发返回按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发返回按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发返回按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发返回按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
## 歌星分类导航区块曝光验证

- 页面：热门歌星页
- 目标SPM：home.karaoke_singer.singer_tabs
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入热门歌星页并确认歌星分类导航展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 歌星分类Tab坑位点击验证

- 页面：热门歌星页
- 目标SPM：home.karaoke_singer.singer_tabs.singer_tab
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击歌星分类Tab | 点击事件上报 | 无biz_type要求。 |
## 歌星分类Tab参数验证

- 页面：热门歌星页
- 目标SPM：home.karaoke_singer.singer_tabs.singer_tab
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发歌星分类Tab对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发歌星分类Tab对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发歌星分类Tab对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发歌星分类Tab对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发歌星分类Tab对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发歌星分类Tab对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 分类名参数校验 | 触发歌星分类Tab对应事件 | category_name | 分类名需符合类型 string，且为必填。 |
## 歌手列表区区块曝光验证

- 页面：热门歌星页
- 目标SPM：home.karaoke_singer.singer_list
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入热门歌星页并确认歌手列表区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 歌手卡片坑位点击验证

- 页面：热门歌星页
- 目标SPM：home.karaoke_singer.singer_list.singer_card
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击歌手卡片 | 点击事件上报 | 无biz_type要求。 |
## 歌手卡片参数验证

- 页面：热门歌星页
- 目标SPM：home.karaoke_singer.singer_list.singer_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发歌手卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发歌手卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发歌手卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发歌手卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发歌手卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发歌手卡片对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌手ID参数校验 | 触发歌手卡片对应事件 | singer_id | 歌手ID需符合类型 string，且为必填。 |
| 歌手名参数校验 | 触发歌手卡片对应事件 | singer_name | 歌手名需符合类型 string。 |
## 更多推荐页页面浏览验证

- 页面：更多推荐页
- 目标SPM：home.karaoke_recommend
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入更多推荐页 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 返回按钮坑位点击验证

- 页面：更多推荐页
- 目标SPM：home.karaoke_recommend.fixed_top.back
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击返回按钮 | 点击事件上报 | 无biz_type要求。 |
## 返回按钮参数验证

- 页面：更多推荐页
- 目标SPM：home.karaoke_recommend.fixed_top.back
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发返回按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发返回按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发返回按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发返回按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发返回按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发返回按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
## 推荐分类导航区块曝光验证

- 页面：更多推荐页
- 目标SPM：home.karaoke_recommend.recommendation_tabs
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入更多推荐页并确认推荐分类导航展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 推荐分类Tab坑位点击验证

- 页面：更多推荐页
- 目标SPM：home.karaoke_recommend.recommendation_tabs.theme_tab
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击推荐分类Tab | 点击事件上报 | 无biz_type要求。 |
## 推荐分类Tab参数验证

- 页面：更多推荐页
- 目标SPM：home.karaoke_recommend.recommendation_tabs.theme_tab
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发推荐分类Tab对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发推荐分类Tab对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发推荐分类Tab对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发推荐分类Tab对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发推荐分类Tab对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发推荐分类Tab对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐主题参数校验 | 触发推荐分类Tab对应事件 | theme_name | 推荐主题需符合类型 string，且为必填。 |
## 推荐歌曲列表区块曝光验证

- 页面：更多推荐页
- 目标SPM：home.karaoke_recommend.recommendation_list
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入更多推荐页并确认推荐歌曲列表展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 推荐歌曲卡片坑位点击验证

- 页面：更多推荐页
- 目标SPM：home.karaoke_recommend.recommendation_list.recommend_song_card
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击推荐歌曲卡片 | 点击事件上报 | 无biz_type要求。 |
## 推荐歌曲卡片参数验证

- 页面：更多推荐页
- 目标SPM：home.karaoke_recommend.recommendation_list.recommend_song_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发推荐歌曲卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发推荐歌曲卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发推荐歌曲卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发推荐歌曲卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发推荐歌曲卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发推荐歌曲卡片对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发推荐歌曲卡片对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发推荐歌曲卡片对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发推荐歌曲卡片对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 歌曲列表页页面浏览验证

- 页面：歌曲列表页
- 目标SPM：home.karaoke_song_list
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入歌曲列表页 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 返回按钮坑位点击验证

- 页面：歌曲列表页
- 目标SPM：home.karaoke_song_list.fixed_top.back
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击返回按钮 | 点击事件上报 | 无biz_type要求。 |
## 返回按钮参数验证

- 页面：歌曲列表页
- 目标SPM：home.karaoke_song_list.fixed_top.back
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发返回按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发返回按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发返回按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发返回按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发返回按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发返回按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
## 歌曲列表区区块曝光验证

- 页面：歌曲列表页
- 目标SPM：home.karaoke_song_list.song_list
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入歌曲列表页并确认歌曲列表区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 歌曲卡片坑位点击验证

- 页面：歌曲列表页
- 目标SPM：home.karaoke_song_list.song_list.song_card
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击歌曲卡片 | 点击事件上报 | 无biz_type要求。 |
## 歌曲卡片参数验证

- 页面：歌曲列表页
- 目标SPM：home.karaoke_song_list.song_list.song_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发歌曲卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发歌曲卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发歌曲卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发歌曲卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发歌曲卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发歌曲卡片对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发歌曲卡片对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发歌曲卡片对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发歌曲卡片对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 直接唱按钮坑位点击验证

- 页面：歌曲列表页
- 目标SPM：home.karaoke_song_list.song_list.sing_now_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击直接唱按钮 | 点击事件上报 | 无biz_type要求。 |
## 直接唱按钮参数验证

- 页面：歌曲列表页
- 目标SPM：home.karaoke_song_list.song_list.sing_now_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发直接唱按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发直接唱按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发直接唱按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发直接唱按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发直接唱按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发直接唱按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发直接唱按钮对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发直接唱按钮对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发直接唱按钮对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 加入待唱按钮坑位点击验证

- 页面：歌曲列表页
- 目标SPM：home.karaoke_song_list.song_list.add_to_queue_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击加入待唱按钮 | 点击事件上报 | 无biz_type要求。 |
## 加入待唱按钮参数验证

- 页面：歌曲列表页
- 目标SPM：home.karaoke_song_list.song_list.add_to_queue_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发加入待唱按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发加入待唱按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发加入待唱按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发加入待唱按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发加入待唱按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发加入待唱按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发加入待唱按钮对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发加入待唱按钮对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发加入待唱按钮对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 语义歧义弹窗页面浏览验证

- 页面：语义歧义弹窗
- 目标SPM：home.karaoke_disambiguation
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入语义歧义弹窗 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 候选结果区区块曝光验证

- 页面：语义歧义弹窗
- 目标SPM：home.karaoke_disambiguation.modal_candidates
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入语义歧义弹窗并确认候选结果区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 候选歌曲卡片坑位点击验证

- 页面：语义歧义弹窗
- 目标SPM：home.karaoke_disambiguation.modal_candidates.candidate_card
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击候选歌曲卡片 | 点击事件上报 | 无biz_type要求。 |
## 候选歌曲卡片参数验证

- 页面：语义歧义弹窗
- 目标SPM：home.karaoke_disambiguation.modal_candidates.candidate_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发候选歌曲卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发候选歌曲卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发候选歌曲卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发候选歌曲卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发候选歌曲卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发候选歌曲卡片对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发候选歌曲卡片对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发候选歌曲卡片对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发候选歌曲卡片对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 语音推荐词区区块曝光验证

- 页面：语义歧义弹窗
- 目标SPM：home.karaoke_disambiguation.voice_suggestions
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入语义歧义弹窗并确认语音推荐词区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 语义推荐词按钮坑位点击验证

- 页面：语义歧义弹窗
- 目标SPM：home.karaoke_disambiguation.voice_suggestions.suggestion_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击语义推荐词按钮 | 点击事件上报 | 无biz_type要求。 |
## 语义推荐词按钮参数验证

- 页面：语义歧义弹窗
- 目标SPM：home.karaoke_disambiguation.voice_suggestions.suggestion_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发语义推荐词按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发语义推荐词按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发语义推荐词按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发语义推荐词按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发语义推荐词按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发语义推荐词按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发语义推荐词按钮对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
## 播放器页面浏览验证

- 页面：播放器
- 目标SPM：home.karaoke_player
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入播放器 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 演唱主舞台区块曝光验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_stage
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入播放器并确认演唱主舞台展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 演唱区参数验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_stage.singing_stage
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发演唱区对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发演唱区对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发演唱区对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发演唱区对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发演唱区对应事件 | env | 环境需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发演唱区对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发演唱区对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发演唱区对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 手势喝彩按钮坑位点击验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_stage.cheer_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击手势喝彩按钮 | 点击事件上报 | 无biz_type要求。 |
## 手势喝彩按钮参数验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_stage.cheer_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发手势喝彩按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发手势喝彩按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发手势喝彩按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发手势喝彩按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发手势喝彩按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发手势喝彩按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发手势喝彩按钮对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发手势喝彩按钮对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发手势喝彩按钮对应事件 | artist_name | 演唱者名需符合类型 string。 |
| 动效类型参数校验 | 触发手势喝彩按钮对应事件 | effect_type | 动效类型需符合类型 string，且为必填。 |
## 重唱按钮坑位点击验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.replay_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击重唱按钮 | 点击事件上报 | 无biz_type要求。 |
## 重唱按钮参数验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.replay_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发重唱按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发重唱按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发重唱按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发重唱按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发重唱按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发重唱按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发重唱按钮对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发重唱按钮对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发重唱按钮对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 媒体播放暂停坑位点击验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.media_play_pause
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击媒体播放暂停 | 点击事件上报 | 无biz_type要求。 |
## 媒体播放暂停参数验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.media_play_pause
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
| 歌曲ID参数校验 | 触发媒体播放暂停对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发媒体播放暂停对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发媒体播放暂停对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 下一步按钮坑位点击验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.next_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击下一步按钮 | 点击事件上报 | 无biz_type要求。 |
## 下一步按钮参数验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.next_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发下一步按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发下一步按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发下一步按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发下一步按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发下一步按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发下一步按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发下一步按钮对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发下一步按钮对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发下一步按钮对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 调音按钮坑位点击验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.tuning_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击调音按钮 | 点击事件上报 | 无biz_type要求。 |
## 调音按钮参数验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.tuning_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发调音按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发调音按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发调音按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发调音按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发调音按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发调音按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发调音按钮对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发调音按钮对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发调音按钮对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 打开领唱按钮坑位点击验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.lead_vocal_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击打开领唱按钮 | 点击事件上报 | 无biz_type要求。 |
## 打开领唱按钮参数验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.lead_vocal_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发打开领唱按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发打开领唱按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发打开领唱按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发打开领唱按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发打开领唱按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发打开领唱按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发打开领唱按钮对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发打开领唱按钮对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发打开领唱按钮对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 已点歌单按钮坑位点击验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.queue_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击已点歌单按钮 | 点击事件上报 | 无biz_type要求。 |
## 已点歌单按钮参数验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.queue_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发已点歌单按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发已点歌单按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发已点歌单按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发已点歌单按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发已点歌单按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发已点歌单按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发已点歌单按钮对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发已点歌单按钮对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发已点歌单按钮对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 收起按钮坑位点击验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.collapse_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击收起按钮 | 点击事件上报 | 无biz_type要求。 |
## 收起按钮参数验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.collapse_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发收起按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发收起按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发收起按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发收起按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发收起按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发收起按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发收起按钮对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发收起按钮对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发收起按钮对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 原唱开关坑位点击验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.original_switch
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击原唱开关 | 点击事件上报 | 无biz_type要求。 |
## 原唱开关参数验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_controls.original_switch
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发原唱开关对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发原唱开关对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发原唱开关对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发原唱开关对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发原唱开关对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发原唱开关对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发原唱开关对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发原唱开关对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发原唱开关对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 高分惊喜区区块曝光验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_effect
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入播放器并确认高分惊喜区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 高分惊喜动效参数验证

- 页面：播放器
- 目标SPM：home.karaoke_player.player_effect.high_score_effect
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发高分惊喜动效对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发高分惊喜动效对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发高分惊喜动效对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发高分惊喜动效对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发高分惊喜动效对应事件 | env | 环境需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发高分惊喜动效对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发高分惊喜动效对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发高分惊喜动效对应事件 | artist_name | 演唱者名需符合类型 string。 |
| 动效类型参数校验 | 触发高分惊喜动效对应事件 | effect_type | 动效类型需符合类型 string，且为必填。 |
## 调音弹窗页面浏览验证

- 页面：调音弹窗
- 目标SPM：home.karaoke_tuning
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入调音弹窗 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 关闭按钮坑位点击验证

- 页面：调音弹窗
- 目标SPM：home.karaoke_tuning.modal_close.close_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击关闭按钮 | 点击事件上报 | 无biz_type要求。 |
## 关闭按钮参数验证

- 页面：调音弹窗
- 目标SPM：home.karaoke_tuning.modal_close.close_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发关闭按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发关闭按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发关闭按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发关闭按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发关闭按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发关闭按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
## 调音操作区区块曝光验证

- 页面：调音弹窗
- 目标SPM：home.karaoke_tuning.tuning_panel
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入调音弹窗并确认调音操作区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 麦克风音量滑动条坑位点击验证

- 页面：调音弹窗
- 目标SPM：home.karaoke_tuning.tuning_panel.mic_volume_slider
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击麦克风音量滑动条 | 点击事件上报 | 无biz_type要求。 |
## 麦克风音量滑动条参数验证

- 页面：调音弹窗
- 目标SPM：home.karaoke_tuning.tuning_panel.mic_volume_slider
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发麦克风音量滑动条对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发麦克风音量滑动条对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发麦克风音量滑动条对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发麦克风音量滑动条对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发麦克风音量滑动条对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发麦克风音量滑动条对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
## 媒体音量滑动条坑位点击验证

- 页面：调音弹窗
- 目标SPM：home.karaoke_tuning.tuning_panel.media_volume_slider
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击媒体音量滑动条 | 点击事件上报 | 无biz_type要求。 |
## 媒体音量滑动条参数验证

- 页面：调音弹窗
- 目标SPM：home.karaoke_tuning.tuning_panel.media_volume_slider
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发媒体音量滑动条对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发媒体音量滑动条对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发媒体音量滑动条对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发媒体音量滑动条对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发媒体音量滑动条对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发媒体音量滑动条对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 音量值参数校验 | 触发媒体音量滑动条对应事件 | volume_level | 音量值需符合类型 number。 |
## 已点歌单弹窗页面浏览验证

- 页面：已点歌单弹窗
- 目标SPM：home.karaoke_queue
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入已点歌单弹窗 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 已点歌单区区块曝光验证

- 页面：已点歌单弹窗
- 目标SPM：home.karaoke_queue.queue_list
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入已点歌单弹窗并确认已点歌单区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 已点歌曲卡片坑位点击验证

- 页面：已点歌单弹窗
- 目标SPM：home.karaoke_queue.queue_list.queued_song_card
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击已点歌曲卡片 | 点击事件上报 | 无biz_type要求。 |
## 已点歌曲卡片参数验证

- 页面：已点歌单弹窗
- 目标SPM：home.karaoke_queue.queue_list.queued_song_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发已点歌曲卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发已点歌曲卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发已点歌曲卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发已点歌曲卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发已点歌曲卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发已点歌曲卡片对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发已点歌曲卡片对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发已点歌曲卡片对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发已点歌曲卡片对应事件 | artist_name | 演唱者名需符合类型 string。 |
| 待唱顺位参数校验 | 触发已点歌曲卡片对应事件 | queue_index | 待唱顺位需符合类型 number。 |
## 置顶按钮坑位点击验证

- 页面：已点歌单弹窗
- 目标SPM：home.karaoke_queue.queue_list.pin_top_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击置顶按钮 | 点击事件上报 | 无biz_type要求。 |
## 置顶按钮参数验证

- 页面：已点歌单弹窗
- 目标SPM：home.karaoke_queue.queue_list.pin_top_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发置顶按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发置顶按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发置顶按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发置顶按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发置顶按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发置顶按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发置顶按钮对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发置顶按钮对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发置顶按钮对应事件 | artist_name | 演唱者名需符合类型 string。 |
| 待唱顺位参数校验 | 触发置顶按钮对应事件 | queue_index | 待唱顺位需符合类型 number。 |
## 删除按钮坑位点击验证

- 页面：已点歌单弹窗
- 目标SPM：home.karaoke_queue.queue_list.delete_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击删除按钮 | 点击事件上报 | 无biz_type要求。 |
## 删除按钮参数验证

- 页面：已点歌单弹窗
- 目标SPM：home.karaoke_queue.queue_list.delete_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发删除按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发删除按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发删除按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发删除按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发删除按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发删除按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发删除按钮对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发删除按钮对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发删除按钮对应事件 | artist_name | 演唱者名需符合类型 string。 |
| 待唱顺位参数校验 | 触发删除按钮对应事件 | queue_index | 待唱顺位需符合类型 number。 |
## 中途退出弹窗页面浏览验证

- 页面：中途退出弹窗
- 目标SPM：home.karaoke_exit_confirm
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入中途退出弹窗 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 操作弹窗区区块曝光验证

- 页面：中途退出弹窗
- 目标SPM：home.karaoke_exit_confirm.modal_actions
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入中途退出弹窗并确认操作弹窗区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 退出按钮坑位点击验证

- 页面：中途退出弹窗
- 目标SPM：home.karaoke_exit_confirm.modal_actions.exit_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击退出按钮 | 点击事件上报 | 无biz_type要求。 |
## 退出按钮参数验证

- 页面：中途退出弹窗
- 目标SPM：home.karaoke_exit_confirm.modal_actions.exit_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发退出按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发退出按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发退出按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发退出按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发退出按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发退出按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发退出按钮对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发退出按钮对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发退出按钮对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 继续唱按钮坑位点击验证

- 页面：中途退出弹窗
- 目标SPM：home.karaoke_exit_confirm.modal_actions.continue_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击继续唱按钮 | 点击事件上报 | 无biz_type要求。 |
## 继续唱按钮参数验证

- 页面：中途退出弹窗
- 目标SPM：home.karaoke_exit_confirm.modal_actions.continue_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发继续唱按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发继续唱按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发继续唱按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发继续唱按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发继续唱按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发继续唱按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发继续唱按钮对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发继续唱按钮对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发继续唱按钮对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 结尾推荐弹层页面浏览验证

- 页面：结尾推荐弹层
- 目标SPM：home.karaoke_ending_recommend
- 测试类型：pv_check
- 预期结果：页面浏览上报成功，页面SPM与page_id符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 页面进入 | 进入结尾推荐弹层 | 页面浏览上报 | 确认页面浏览是否正常上报，page_id是否正确。 |
## 结尾推荐区区块曝光验证

- 页面：结尾推荐弹层
- 目标SPM：home.karaoke_ending_recommend.ending_recommend
- 测试类型：block_exposure_check
- 预期结果：区块曝光上报成功，目标区块标识正确。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 区块首次曝光 | 进入结尾推荐弹层并确认结尾推荐区展示 | 区块曝光上报 | 确认区块曝光是否按方案触发。 |
## 推荐歌曲卡片坑位点击验证

- 页面：结尾推荐弹层
- 目标SPM：home.karaoke_ending_recommend.ending_recommend.recommend_song_card
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击推荐歌曲卡片 | 点击事件上报 | 无biz_type要求。 |
## 推荐歌曲卡片参数验证

- 页面：结尾推荐弹层
- 目标SPM：home.karaoke_ending_recommend.ending_recommend.recommend_song_card
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发推荐歌曲卡片对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发推荐歌曲卡片对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发推荐歌曲卡片对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发推荐歌曲卡片对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发推荐歌曲卡片对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发推荐歌曲卡片对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 歌曲ID参数校验 | 触发推荐歌曲卡片对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发推荐歌曲卡片对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发推荐歌曲卡片对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 点第1个推荐词坑位点击验证

- 页面：结尾推荐弹层
- 目标SPM：home.karaoke_ending_recommend.ending_recommend.pick_first_btn
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击点第1个推荐词 | 点击事件上报 | 无biz_type要求。 |
## 点第1个推荐词参数验证

- 页面：结尾推荐弹层
- 目标SPM：home.karaoke_ending_recommend.ending_recommend.pick_first_btn
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发点第1个推荐词对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发点第1个推荐词对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发点第1个推荐词对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发点第1个推荐词对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发点第1个推荐词对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发点第1个推荐词对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐Sug词参数校验 | 触发点第1个推荐词对应事件 | reco_sug | 推荐Sug词需符合类型 array_string。 |
| 歌曲ID参数校验 | 触发点第1个推荐词对应事件 | song_id | 歌曲ID需符合类型 string，且为必填。 |
| 歌曲名参数校验 | 触发点第1个推荐词对应事件 | song_name | 歌曲名需符合类型 string。 |
| 演唱者名参数校验 | 触发点第1个推荐词对应事件 | artist_name | 演唱者名需符合类型 string。 |
## 换一批按钮坑位点击验证

- 页面：结尾推荐弹层
- 目标SPM：home.karaoke_ending_recommend.ending_recommend.refresh_batch
- 测试类型：position_click_check
- 预期结果：坑位点击上报成功，SPM与业务类型符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 点击坑位 | 点击换一批按钮 | 点击事件上报 | 无biz_type要求。 |
## 换一批按钮参数验证

- 页面：结尾推荐弹层
- 目标SPM：home.karaoke_ending_recommend.ending_recommend.refresh_batch
- 测试类型：param_check
- 预期结果：关键业务参数完整上报，字段定义符合方案约束。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 用户PIN参数校验 | 触发换一批按钮对应事件 | user_pin | 用户PIN需符合类型 string，且为必填。 |
| 订单ID参数校验 | 触发换一批按钮对应事件 | order_id | 订单ID需符合类型 string，且为必填。 |
| 车辆VID参数校验 | 触发换一批按钮对应事件 | vid | 车辆VID需符合类型 string，且为必填。 |
| 运营城市参数校验 | 触发换一批按钮对应事件 | car_city | 运营城市需符合类型 string，且为必填。 |
| 环境参数校验 | 触发换一批按钮对应事件 | env | 环境需符合类型 string，且为必填。 |
| 触发方式参数校验 | 触发换一批按钮对应事件 | click_type | 触发方式需符合类型 string，且为必填。 |
| 推荐主题参数校验 | 触发换一批按钮对应事件 | theme_name | 推荐主题需符合类型 string，且为必填。 |
## 核心业务链路链路验证

- 页面：桌面
- 目标SPM：desktop_desktop -> home_karaoke_ending_recommend
- 测试类型：flow_check
- 预期结果：核心页面跳转链路可被完整识别，页面序列与方案一致。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 链路步骤1 | 从桌面页点击唱吧磁贴卡片进入点歌台首页 | desktop_desktop | Robotaxi 桌面承载唱吧磁贴卡片，用户从桌面进入无麦K歌。 |
| 链路步骤2 | 在点歌台首页通过语音推荐词、热门歌星、大家都爱唱或更多推荐发起选歌 | home_main | 无麦K歌主入口页面，提供语音引导、热门歌星、大家都爱唱和更多推荐。 |
| 链路步骤3 | 进入热门歌星页浏览歌手分类和歌手卡片 | home_karaoke_singer | 按歌手分类浏览候选歌手并进入歌曲列表。 |
| 链路步骤4 | 进入更多推荐页浏览推荐主题和推荐歌曲 | home_karaoke_recommend | 按推荐主题浏览歌曲的选歌页面。 |
| 链路步骤5 | 在歌曲列表页点击直接唱按钮或加入待唱按钮 | home_karaoke_song_list | 展示某位歌手或某个推荐主题下的歌曲列表。 |
| 链路步骤6 | 若语义命中多结果则弹出语义歧义弹窗并选择候选歌曲 | home_karaoke_disambiguation | 语音点歌存在歧义时的候选选择弹窗。 |
| 链路步骤7 | 进入播放器开始演唱并触发喝彩、切歌、原唱和已点歌单操作 | home_karaoke_player | 无麦K歌全屏沉浸式播放器。 |
| 链路步骤8 | 在播放器中打开调音弹窗调节麦克风和媒体音量 | home_karaoke_tuning | 调节麦克风音量和媒体音量的弹窗。 |
| 链路步骤9 | 在播放器中查看已点歌单并执行置顶或删除操作 | home_karaoke_queue | 展示已点待唱歌曲列表，支持置顶和删除。 |
| 链路步骤10 | 如需退出则触发中途退出弹窗 | home_karaoke_exit_confirm | 用户演唱中退出时的确认弹窗。 |
| 链路步骤11 | 演唱结束后进入结尾推荐弹层继续点歌 | home_karaoke_ending_recommend | 演唱结束后展示推荐歌曲和快捷推荐词。 |
## 核心业务链路回退验证

- 页面：结尾推荐弹层
- 目标SPM：home_karaoke_player -> home_karaoke_song_list
- 测试类型：rollback_check
- 预期结果：回退后目标页重新上报PV，回退链路与页面关系符合方案定义。

| 检查点 | 操作 | 检查目标 | 备注 |
| --- | --- | --- | --- |
| 进入回退起点页 | 进入页面 home_karaoke_player | home_karaoke_player | 先确认回退起点页已正常上报浏览。 |
| 触发回退 | 播放器点击收起或返回上一级页面 | 回退动作 | 需要验证播放器回退到选歌页时，页面浏览和上一层坑位链路仍然可关联。 |
| 确认回退目标页 | 回到页面 home_karaoke_song_list | home_karaoke_song_list | 关注目标页PV是否重新上报，并确认回退链路可定位。 |
