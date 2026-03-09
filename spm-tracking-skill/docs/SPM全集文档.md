# SPM全集文档

## 文档概述

本文档记录所有已定义的SPM编码，用于统一管理和查询。

---

## 一、a级（产品/业务线）全集

| a级值 | 业务线名称 | 说明 | 状态 |
|--------|-----------|------|------|
| shop | 购物模块 | 商品相关 | 预定义 |
| cart | 购物车模块 | 购物车相关 | 预定义 |
| user | 用户模块 | 用户中心相关 | 预定义 |
| pay | 支付模块 | 支付相关 | 预定义 |
| search | 搜索模块 | 搜索相关 | 预定义 |
| recommend | 推荐模块 | 推荐相关 | 预定义 |
| brand | 品牌模块 | 品牌相关 | 预定义 |
| category | 分类模块 | 分类相关 | 预定义 |
| order | 订单模块 | 订单相关 | 预定义 |
| live | 直播模块 | 直播相关 | 预定义 |
| video | 视频模块 | 视频相关 | 预定义 |
| coupon | 优惠券模块 | 优惠券相关 | 预定义 |

---

## 二、b级（页面/模块）全集

### shop（购物模块）

| b级值 | 页面名称 | 说明 |
|-------|----------|------|
| index | 首页 | 商城首页 |
| list | 商品列表页 | 分类/搜索结果列表 |
| detail | 商品详情页 | 商详页 |
| search | 搜索结果页 | 搜索结果 |
| recommend | 推荐页 | 个性化推荐 |

### cart（购物车模块）

| b级值 | 页面名称 | 说明 |
|-------|----------|------|
| index | 购物车页 | 购物车首页 |
| checkout | 结算页 | 订单确认 |
| edit | 编辑购物车 | 修改数量/删除 |

### user（用户模块）

| b级值 | 页面名称 | 说明 |
|-------|----------|------|
| center | 用户中心 | 账户首页 |
| order_list | 订单列表 | 我的订单 |
| order_detail | 订单详情 | 订单详情页 |
| address | 地址管理 | 收货地址 |
| favorite | 收藏夹 | 我的收藏 |
| setting | 设置 | 账户设置 |

### pay（支付模块）

| b级值 | 页面名称 | 说明 |
|-------|----------|------|
| payment | 支付页 | 收银台 |
| result | 支付结果 | 支付成功/失败 |
| password | 支付密码 | 密码输入 |

### search（搜索模块）

| b级值 | 页面名称 | 说明 |
|-------|----------|------|
| index | 搜索首页 | 搜索入口 |
| result | 搜索结果 | 列表展示 |
| suggestion | 搜索建议 | 联想词 |

### recommend（推荐模块）

| b级值 | 页面名称 | 说明 |
|-------|----------|------|
| index | 推荐首页 | 个性化推荐 |
| detail | 推荐详情 | 推荐详情页 |

---

## 三、c级（区块）全集

| c级值 | 说明 | 适用场景 |
|--------|------|----------|
| banner | 顶部轮播/横幅 | 首焦、楼层标题 |
| nav | 导航区域 | 金刚区、Tab导航 |
| recommend | 推荐区域 | 猜你喜欢、智能推荐 |
| list | 列表区域 | 商品列表、内容列表 |
| feeds | Feeds流 | 信息流、瀑布流 |
| fixed_bottom | 底部固定区域 | 底部按钮、TabBar |
| fixed_top | 顶部固定区域 | 顶部搜索、标题栏 |
| popup | 弹层区域 | 弹窗、浮层 |
| sidebar | 侧边栏 | 侧边工具栏 |
| search | 搜索区域 | 搜索框、筛选 |
| filter | 筛选区域 | 排序、筛选 |
| sort | 排序区域 | 排序选项 |
| footer | 底部区域 | 底部版权、链接 |
| header | 头部区域 | 页面头部 |
| info | 信息区域 | 商品信息、详情 |

---

## 四、d级（坑位）全集

### 4.1 通用坑位

| d级值 | 说明 | 适用类型 |
|--------|------|----------|
| btn | 通用按钮 | 固定坑位 |
| link | 链接 | 固定坑位 |
| icon | 图标 | 固定坑位 |
| image | 图片 | 固定坑位 |
| text | 文本 | 固定坑位 |
| tab | 标签页 | 顺序坑位 |
| item | 列表项 | 顺序坑位 |
| card | 卡片 | 顺序坑位 |
| row | 行 | 顺序坑位 |
| cell | 单元格 | 顺序坑位 |

### 4.2 功能按钮

| d级值 | 说明 | 适用场景 |
|--------|------|----------|
| buy_btn | 立即购买 | 商详页 |
| add_cart | 加入购物车 | 商详、列表 |
| favorite | 收藏 | 商品、店铺 |
| share | 分享 | 商品、详情 |
| cart | 购物车 | 底部导航 |
| back | 返回 | 导航栏 |
| close | 关闭 | 弹窗 |
| confirm | 确认 | 弹窗/表单 |
| cancel | 取消 | 弹窗/表单 |
| edit | 编辑 | 编辑页 |
| delete | 删除 | 列表项 |
| view_more | 查看更多 | 列表底部 |
| refresh | 刷新 | 列表顶部 |
| to_top | 返回顶部 | 列表侧边 |

### 4.3 顺序坑位编号

对于顺序类坑位，使用数字编号：

```
1, 2, 3, 4, 5, 6, 7, 8, 9, 10...
```

示例：
```
shop.product_detail.feeds.1   - 第1个商品卡片
shop.product_detail.feeds.2   - 第2个商品卡片
shop.product_detail.nav.1     - 第1个Tab
shop.product_detail.nav.2     - 第2个Tab
```

---

## 五、biz_type（业务类型）全集

| biz_type值 | 说明 | 适用场景 |
|------------|------|----------|
| card | 商卡 | 商品卡片 |
| add_cart | 加购 | 加购按钮 |
| cart | 购物车 | 购物车入口 |
| shop | 店铺 | 店铺入口 |
| rank | 榜单 | 榜单入口 |
| coupon | 优惠券 | 优惠券 |
| live | 直播 | 直播间 |
| video | 视频 | 视频内容 |
| favorite | 收藏 | 收藏按钮 |
| share | 分享 | 分享按钮 |
| buy | 购买 | 购买按钮 |
| order | 下单 | 下单入口 |
| payment | 支付 | 支付入口 |
| detail | 详情 | 详情入口 |
| comment | 评价 | 评价入口 |
| image | 图片 | 图片查看 |
| search | 搜索 | 搜索入口 |

---

## 六、组合示例

### 6.1 商品详情页

```
浏览事件:
SPM: shop.detail
事件类型: pv

曝光事件:
SPM: shop.detail.banner
事件类型: exposure

点击事件:
SPM: shop.detail.banner.buy_btn
事件类型: click
biz_type: buy

SPM: shop.detail.info.favorite
事件类型: click
biz_type: favorite

SPM: shop.detail.recommend.add_cart
事件类型: click
biz_type: add_cart
```

### 6.2 商品列表页

```
浏览事件:
SPM: shop.list
事件类型: pv

曝光事件:
SPM: shop.list.feeds.1
事件类型: exposure
biz_type: card

点击事件:
SPM: shop.list.feeds.1
事件类型: click
biz_type: card
```

### 6.3 购物车页

```
浏览事件:
SPM: cart.index
事件类型: pv

点击事件:
SPM: cart.index.list.1
事件类型: click
biz_type: card

SPM: cart.index.fixed_bottom.checkout
事件类型: click
biz_type: order
```

---

## 七、新增记录

| 日期 | 版本 | 变更内容 | 变更人 |
|------|------|---------|-------|
| 2026-03-06 | v1.0 | 初始版本 | - |

---

## 八、SPM设计自查清单

设计新的SPM时，请检查：

- [ ] a级是否在a级全集中？
- [ ] b级是否在对应业务线的b级全集中？
- [ ] c级是否在c级全集中？
- [ ] d级是否在d级全集中？
- [ ] 是否需要定义新的b级？
- [ ] 是否需要定义新的c级？
- [ ] 是否需要定义新的d级？
- [ ] 业务类型biz_type是否已定义？

---

**版本**: v1.0
**最后更新**: 2026-03-06
**维护人**: 数据产品团队
