# 外卖自提 SPM 埋点方案文档

## 文档信息

| 项目 | 内容 |
|------|------|
| 需求名称 | Robotaxi 外卖自提交易能力 |
| 需求来源 | PRD + Figma + 业务输入 |
| 文档版本 | v2.0 |
| 生成日期 | 2026-03-11 |

---

## 一、核心设计原则

### 1.1 SPM结构规范

- **A.B = PageID**：A和B结合自动生成PageID，无需单独设计
- **原子操作**：相同行为在不同页面使用统一的action命名
- **click_type**：区分操作方式（touch/voice/gesture）
- **全局统一**：商品D统一命名为item(N)，便于全局统计CTR

### 1.2 业务参数规范

- **推荐参数**：request_id + request_info（JSON字符串）
- **tag机制**：记录用户完整访问路径，支持来源分析
- **业务状态参数**：各页面携带完整的业务状态信息

---

## 二、SPM树形结构

### 2.1 A级结构

```
A: 桌面 / desktop                    ← 入口层
A: 外卖自提 / takeaway_pickup        ← 业务层
```

### 2.2 桌面（Desktop）

```
A: 桌面 / desktop

└── B: 首页推荐卡片区域 / home_recommend
    ├── C: 外卖卡片区 / delivery_section
    │   ├── D: 外卖卡片 / delivery_card
    │   │   └── D: 商品 / item(N) [坑位]
    │   └── D: 展开按钮 / expand_btn
    │
    └── C: 自提卡片区 / pickup_section
        ├── D: 自提卡片 / pickup_card
        │   └── D: 商品 / item(N) [坑位]
        └── D: 展开按钮 / expand_btn
```

### 2.3 外卖自提（Takeaway Pickup）

```
A: 外卖自提 / takeaway_pickup

├── B: 商品列表页 / product_list
│   ├── C: 顶部固定区 / fixed_top
│   │   └── D: 返回按钮 / back_btn
│   ├── C: 语音交互气泡 / voice_bubble
│   │   ├── D: 气泡内容 / bubble_content
│   │   └── D: 语音结果 / voice_result
│   ├── C: 商品列表区 / product_list
│   │   └── D: 商品 / item(N) [坑位]
│   ├── C: 快捷操作区 / quick_actions
│   │   ├── D: 换一批按钮 / refresh_btn
│   │   └── D: 快捷下单按钮 / quick_order_btn
│   └── C: SUG推荐区 / sug_area
│       └── D: SUG词按钮 / sug_btn
│
├── B: 必选品选择页 / required_item
│   ├── C: 必选品列表区 / required_item_list
│   │   └── D: 必选品卡片 / required_item_card(N) [坑位]
│   ├── C: 快捷操作区 / quick_actions
│   │   └── D: 选择第一个按钮 / first_btn
│   ├── C: 语音交互气泡 / voice_bubble
│   └── C: SUG推荐区 / sug_area
│
├── B: 规格选择页 / spec_select
│   ├── C: 商品信息区 / product_info
│   │   └── D: 商品卡片 / product_card
│   ├── C: 规格选项区 / spec_options
│   │   └── D: 规格选项 / spec_option(N) [坑位]
│   ├── C: 数量选择区 / quantity
│   │   └── D: 数量操作按钮 / quantity_btn
│   ├── C: 语音交互气泡 / voice_bubble
│   └── C: 底部操作区 / bottom_actions
│       └── D: 确认按钮 / confirm_btn
│
├── B: 商品确认页 / item_confirm
│   ├── C: 商品确认区 / item_confirm_area
│   │   └── D: 商品卡片 / item_card
│   ├── C: 快捷操作区 / quick_actions
│   │   ├── D: 切换热饮按钮 / switch_hot_btn
│   │   └── D: 切换自提按钮 / switch_pickup_btn
│   ├── C: 语音交互气泡 / voice_bubble
│   └── C: 底部操作区 / bottom_actions
│       └── D: 去支付按钮 / pay_btn
│
├── B: 多品确认页 / multi_item_confirm
│   ├── C: 商品列表区 / item_list
│   │   └── D: 商品卡片 / item_card(N) [坑位]
│   ├── C: 备注区 / remark_area
│   │   └── D: 添加备注按钮 / add_remark_btn
│   ├── C: 快捷操作区 / quick_actions
│   │   ├── D: 切换热饮按钮 / switch_hot_btn
│   │   └── D: 切换自提按钮 / switch_pickup_btn
│   ├── C: 语音交互气泡 / voice_bubble
│   └── C: 底部操作区 / bottom_actions
│       └── D: 去支付按钮 / pay_btn
│
├── B: 地址清单页 / address_list
│   ├── C: 地址列表区 / address_list
│   │   └── D: 地址卡片 / address_card(N) [坑位]
│   ├── C: 快捷操作区 / quick_actions
│   │   └── D: 新增地址按钮 / add_address_btn
│   ├── C: 语音交互气泡 / voice_bubble
│   └── C: SUG推荐区 / sug_area
│
├── B: 新增地址搜索页 / address_search
│   ├── C: 搜索结果区 / search_results
│   │   └── D: 地址选项 / address_option(N) [坑位]
│   ├── C: 语音交互气泡 / voice_bubble
│   └── C: SUG推荐区 / sug_area
│
├── B: 新增地址确认页 / address_add
│   ├── C: 地址表单区 / address_form
│   │   ├── D: 收货人输入框 / receiver_input
│   │   ├── D: 手机号输入框 / phone_input
│   │   └── D: 详细地址输入框 / detail_input
│   ├── C: 语音交互气泡 / voice_bubble
│   └── C: 底部操作区 / bottom_actions
│       └── D: 确认按钮 / confirm_btn
│
├── B: 地址修改页 / address_edit
│   ├── C: 地址表单区 / address_form
│   │   ├── D: 收货人修改按钮 / edit_receiver_btn
│   │   ├── D: 手机号修改按钮 / edit_phone_btn
│   │   └── D: 地址修改按钮 / edit_address_btn
│   ├── C: 语音交互气泡 / voice_bubble
│   └── C: 底部操作区 / bottom_actions
│       └── D: 确认按钮 / confirm_btn
│
├── B: 结算页 / checkout
│   ├── C: 配送信息区 / delivery_info
│   │   ├── D: 配送方式卡片 / delivery_card
│   │   └── D: 地址卡片 / address_card
│   ├── C: 商品信息区 / product_info
│   │   └── D: 商品卡片 / product_card
│   ├── C: 价格信息区 / price_info
│   │   └── D: 价格明细 / price_detail
│   ├── C: 备注区 / remark_area
│   │   └── D: 添加备注按钮 / add_remark_btn
│   ├── C: 支付方式区 / payment_method
│   │   └── D: 支付方式选择 / payment_select
│   ├── C: 语音交互气泡 / voice_bubble
│   ├── C: SUG推荐区 / sug_area
│   └── C: 底部操作区 / bottom_actions
│       └── D: 去支付按钮 / pay_btn
│
├── B: 支付方式页 / payment_method
│   ├── C: 支付方式列表区 / method_list
│   │   └── D: 支付方式选项 / method_option(N) [坑位]
│   ├── C: 语音交互气泡 / voice_bubble
│   └── C: 底部操作区 / bottom_actions
│       └── D: 确认按钮 / confirm_btn
│
├── B: 支付中页 / paying
│   └── C: 支付状态区 / payment_status
│       └── D: 支付中状态 / paying_status
│
├── B: 支付成功页 / pay_success
│   ├── C: 结果状态区 / result_status
│   │   └── D: 成功状态 / success_status
│   ├── C: 订单信息区 / order_info
│   │   └── D: 订单卡片 / order_card
│   ├── C: 语音交互气泡 / voice_bubble
│   └── C: 操作区 / actions
│       ├── D: 查看订单按钮 / view_order_btn
│       └── D: 继续推荐按钮 / recommend_btn
│
├── B: 支付失败页 / pay_fail
│   ├── C: 结果状态区 / result_status
│   │   └── D: 失败状态 / fail_status
│   └── C: 操作区 / actions
│       └── D: 重新支付按钮 / retry_pay_btn
│
├── B: 订单列表页 / order_list
│   ├── C: 订单列表区 / order_list
│   │   └── D: 订单卡片 / order_card(N) [坑位]
│   └── C: 状态栏 / status_bar
│       └── D: 灵动岛状态 / live_island
│
├── B: 订单详情页 / order_detail
│   ├── C: 取餐码区 / pickup_code
│   │   └── D: 取餐码显示 / code_display
│   ├── C: 订单状态区 / order_status
│   │   └── D: 状态进度 / status_progress
│   ├── C: 订单信息区 / order_info
│   │   └── D: 订单卡片 / order_card
│   └── C: 操作区 / actions
│       └── D: 继续推荐按钮 / recommend_btn
│
├── B: 复购确认页 / repurchase_confirm
│   ├── C: 历史订单区 / history_order
│   │   └── D: 历史订单卡片 / history_card(N) [坑位]
│   ├── C: 商品确认区 / product_confirm
│   │   └── D: 商品卡片 / product_card
│   ├── C: 语音交互气泡 / voice_bubble
│   └── C: 底部操作区 / bottom_actions
│       └── D: 确认下单按钮 / confirm_btn
│
├── B: 声纹开通弹窗 / voiceprint_open
│   ├── C: 弹窗内容区 / modal_content
│   │   └── D: 协议链接 / agreement_link
│   ├── C: 弹窗操作区 / modal_actions
│   │   ├── D: 暂不按钮 / skip_btn
│   │   └── D: 开通按钮 / enable_btn
│   └── C: 弹窗关闭区 / modal_close
│       └── D: 关闭按钮 / close_btn
│
├── B: 加载页 / loading
│   └── C: 加载状态区 / loading_status
│       └── D: 加载动画 / loading_animation
│
└── B: 异常提示页 / error_tip
    ├── C: 异常提示区 / error_message
    │   └── D: 异常信息显示 / error_display
    └── C: 操作区 / actions
        ├── D: 返回按钮 / back_btn
        └── D: 重试按钮 / retry_btn
```

---

## 三、原子操作定义

### 3.1 曝光类

| action | 说明 | 适用场景 |
|--------|------|----------|
| block_expose | 区块曝光 | 页面区域首次展示 |
| position_expose | 坑位曝光 | 可交互元素首次展示 |

### 3.2 交互类

| action | 说明 | 适用页面 |
|--------|------|----------|
| select_item | 选择商品 | 桌面、商品列表、必选品、复购确认 |
| expand | 展开卡片 | 桌面外卖/自提卡片 |
| next_page | 下一页 | 商品列表、地址列表 |
| prev_page | 上一页 | 商品列表、地址列表 |
| refresh | 换一批 | 商品列表 |
| confirm | 确认 | 规格选择、地址确认、支付确认 |
| cancel | 取消 | 取消操作 |
| close | 关闭 | 弹窗、页面关闭 |
| add_cart | 加购物车 | 商品确认页 |
| remove_cart | 从购物车删除 | 多品确认页 |
| modify_quantity | 修改数量 | 规格选择页 |
| modify_spec | 修改规格 | 规格选择页、商品确认页 |
| add_remark | 添加备注 | 多品确认页、结算页 |
| switch_delivery | 切换配送方式 | 商品确认页、结算页 |
| select_address | 选择地址 | 地址清单页 |
| add_address | 新增地址 | 地址清单页 |
| modify_address | 修改地址 | 地址修改页、结算页 |
| input_receiver | 输入收货人 | 地址表单 |
| input_phone | 输入手机号 | 地址表单 |
| input_detail | 输入详细地址 | 地址表单 |
| select_payment | 选择支付方式 | 支付方式页 |
| pay | 支付 | 结算页、支付方式页 |
| retry | 重试 | 支付失败页、异常提示页 |
| view_order | 查看订单 | 支付成功页 |
| recommend | 继续推荐 | 支付成功页、订单详情页 |
| enable_voice | 开通声纹 | 声纹开通弹窗 |
| skip_voice | 暂不开通 | 声纹开通弹窗 |
| switch_hot | 切换热饮 | 商品确认页 |
| switch_cold | 切换冷饮 | 商品确认页 |
| back | 返回 | 页面返回 |

### 3.3 click_type定义

| click_type | 说明 |
|------------|------|
| touch | 触屏点击 |
| voice | 语音点击 |
| gesture | 手势操控 |

---

## 四、关键埋点设计

### 4.1 桌面 / desktop

#### 首页推荐卡片区域 / home_recommend

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| delivery_section | - | 区块曝光 | block_expose | - | - |
| delivery_section | delivery_card | 坑位曝光 | position_expose | - | item_count |
| delivery_section | delivery_card | 坑位点击 | expand | touch/voice/gesture | target_a=takeaway_pickup |
| delivery_section | item(N) | 坑位曝光 | position_expose | - | sku_id, sku_name, sku_index, price |
| delivery_section | item(N) | 坑位点击 | select_item | touch/voice/gesture | sku_id, sku_name, sku_index, price, target_a, request_id, request_info |
| pickup_section | - | 区块曝光 | block_expose | - | - |
| pickup_section | pickup_card | 坑位曝光 | position_expose | - | shop_id, shop_name |
| pickup_section | pickup_card | 坑位点击 | expand | touch/voice/gesture | target_a=takeaway_pickup |
| pickup_section | item(N) | 坑位曝光 | position_expose | - | shop_id, shop_name, sku_id, sku_name, sku_index, price |
| pickup_section | item(N) | 坑位点击 | select_item | touch/voice/gesture | shop_id, shop_name, sku_id, sku_name, sku_index, price, target_a, request_id, request_info |

---

### 4.2 商品列表页 / product_list

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| fixed_top | back_btn | 坑位点击 | back | touch/voice/gesture | - |
| voice_bubble | bubble_content | 区块曝光 | block_expose | - | bubble_state=recommend, recommend_text |
| voice_bubble | bubble_content | 状态变更 | bubble_change | voice | old_state, new_state, content |
| voice_bubble | voice_result | 语音识别结果 | voice_recognize | voice | asr_text, intent, intent_confidence |
| product_list | item(N) | 坑位曝光 | position_expose | - | sku_id, sku_name, sku_index, shop_id, shop_name, price, list_type, delivery_type, request_id, request_info |
| product_list | item(N) | 坑位点击 | select_item | touch/voice/gesture | sku_id, sku_name, sku_index, shop_id, shop_name, price, list_type, delivery_type, request_id, request_info |
| quick_actions | refresh_btn | 坑位点击 | refresh | touch/voice/gesture | - |
| quick_actions | quick_order_btn | 坑位点击 | add_cart | touch/voice/gesture | sku_id, sku_name |
| sug_area | sug_btn | 区块曝光 | block_expose | - | sug_list |
| sug_area | sug_btn | 坑位点击 | select_item/next_page/refresh等 | touch/voice/gesture | action, sug_text |

---

### 4.3 规格选择页 / spec_select

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| product_info | - | 区块曝光 | block_expose | - | sku_id, sku_name, price |
| spec_options | spec_option(N) | 坑位曝光 | position_expose | - | spec_id, spec_name, spec_type, is_selected |
| spec_options | spec_option(N) | 坑位点击 | modify_spec | touch/voice/gesture | spec_id, spec_name, spec_type |
| quantity | quantity_btn | 坑位点击 | modify_quantity | touch/voice/gesture | quantity, operation |
| bottom_actions | confirm_btn | 坑位点击 | confirm | touch/voice/gesture | final_price |

---

### 4.4 商品确认页 / item_confirm

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| item_confirm_area | item_card | 坑位曝光 | position_expose | - | sku_id, sku_name, price |
| quick_actions | switch_hot_btn | 坑位点击 | switch_hot | touch/voice/gesture | - |
| quick_actions | switch_pickup_btn | 坑位点击 | switch_delivery | touch/voice/gesture | delivery_type |
| bottom_actions | pay_btn | 坑位点击 | pay | touch/voice/gesture | price, delivery_type |

---

### 4.5 多品确认页 / multi_item_confirm

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| item_list | item_card(N) | 坑位曝光 | position_expose | - | sku_id, sku_name, quantity, price |
| item_list | item_card(N) | 坑位点击 | select_item | touch/voice/gesture | sku_id, sku_name |
| remark_area | add_remark_btn | 坑位点击 | add_remark | touch/voice/gesture | - |
| quick_actions | switch_hot_btn | 坑位点击 | switch_hot | touch/voice/gesture | - |
| quick_actions | switch_pickup_btn | 坑位点击 | switch_delivery | touch/voice/gesture | delivery_type |
| bottom_actions | pay_btn | 坑位点击 | pay | touch/voice/gesture | total_price, item_count, delivery_type |

---

### 4.6 必选品选择页 / required_item

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| required_item_list | required_item_card(N) | 坑位曝光 | position_expose | - | sku_id, sku_name, sku_index, price |
| required_item_list | required_item_card(N) | 坑位点击 | select_item | touch/voice/gesture | sku_id, sku_name, sku_index, price |
| quick_actions | first_btn | 坑位点击 | select_item | touch/voice/gesture | sku_id |

---

### 4.7 地址清单页 / address_list

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| address_list | address_card(N) | 坑位曝光 | position_expose | - | address_id, receiver, phone, is_in_range |
| address_list | address_card(N) | 坑位点击 | select_address | touch/voice/gesture | address_id, is_in_range |
| quick_actions | add_address_btn | 坑位点击 | add_address | touch/voice/gesture | - |

---

### 4.8 新增地址搜索页 / address_search

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| search_results | - | 区块曝光 | block_expose | - | search_keyword |
| search_results | address_option(N) | 坑位曝光 | position_expose | - | address_text, poi_id |
| search_results | address_option(N) | 坑位点击 | select_address | touch/voice/gesture | address_text, poi_id |

---

### 4.9 新增地址确认页 / address_add

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| address_form | - | 区块曝光 | block_expose | - | - |
| address_form | receiver_input | 坑位点击 | input_receiver | touch | - |
| address_form | phone_input | 坑位点击 | input_phone | touch | - |
| address_form | detail_input | 坑位点击 | input_detail | touch | - |
| bottom_actions | confirm_btn | 坑位点击 | confirm | touch/voice/gesture | - |

---

### 4.10 地址修改页 / address_edit

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| address_form | - | 区块曝光 | block_expose | - | - |
| address_form | edit_receiver_btn | 坑位点击 | modify_address | touch/voice/gesture | field=receiver |
| address_form | edit_phone_btn | 坑位点击 | modify_address | touch/voice/gesture | field=phone |
| address_form | edit_address_btn | 坑位点击 | modify_address | touch/voice/gesture | field=address |
| bottom_actions | confirm_btn | 坑位点击 | confirm | touch/voice/gesture | - |

---

### 4.11 结算页 / checkout

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| delivery_info | delivery_card | 坑位点击 | switch_delivery | touch/voice/gesture | delivery_type |
| delivery_info | address_card | 坑位点击 | modify_address | touch/voice/gesture | - |
| product_info | product_card | 坑位曝光 | position_expose | - | sku_id, sku_name, quantity, price |
| remark_area | add_remark_btn | 坑位点击 | add_remark | touch/voice/gesture | remark_status |
| payment_method | payment_select | 坑位点击 | select_payment | touch/voice/gesture | payment_method |
| bottom_actions | pay_btn | 坑位点击 | pay | touch/voice/gesture | total_price, payment_method |
| sug_area | sug_btn | 区块曝光 | block_expose | - | sug_list |
| sug_area | sug_btn | 坑位点击 | confirm/switch_delivery等 | touch/voice/gesture | action, sug_text |

---

### 4.12 支付方式页 / payment_method

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| method_list | method_option(N) | 坑位曝光 | position_expose | - | method_id, method_name |
| method_list | method_option(N) | 坑位点击 | select_payment | touch/voice/gesture | method_id, method_name |
| bottom_actions | confirm_btn | 坑位点击 | confirm | touch/voice/gesture | selected_method |

---

### 4.13 支付中页 / paying

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| payment_status | - | 区块曝光 | block_expose | - | order_id |

---

### 4.14 支付成功页 / pay_success

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| result_status | - | 区块曝光 | block_expose | - | order_id, total_price, delivery_type |
| order_info | - | 区块曝光 | block_expose | - | order_id, delivery_type |
| actions | view_order_btn | 坑位点击 | view_order | touch/voice/gesture | order_id |
| actions | recommend_btn | 坑位点击 | recommend | touch/voice/gesture | - |

---

### 4.15 支付失败页 / pay_fail

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| result_status | - | 区块曝光 | block_expose | - | order_id, fail_reason |
| actions | retry_pay_btn | 坑位点击 | retry | touch/voice/gesture | order_id |

---

### 4.16 订单列表页 / order_list

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| order_list | order_card(N) | 坑位曝光 | position_expose | - | order_id, order_status, delivery_type |
| order_list | order_card(N) | 坑位点击 | select_item | touch/voice/gesture | order_id |
| status_bar | live_island | 区块曝光 | block_expose | - | order_id, order_status |
| status_bar | live_island | 坑位点击 | select_item | touch/voice/gesture | target_page=order_detail |

---

### 4.17 订单详情页 / order_detail

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| pickup_code | - | 区块曝光 | block_expose | - | order_id, pickup_code |
| order_status | - | 区块曝光 | block_expose | - | order_id, order_status |
| actions | recommend_btn | 坑位点击 | recommend | touch/voice/gesture | - |

---

### 4.18 复购确认页 / repurchase_confirm

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| history_order | - | 区块曝光 | block_expose | - | history_orders[] |
| history_order | history_card(N) | 坑位曝光 | position_expose | - | order_id, order_time, shop_name |
| history_order | history_card(N) | 坑位点击 | select_item | touch/voice/gesture | order_id |
| product_confirm | - | 区块曝光 | block_expose | - | sku_id, sku_name, price |
| bottom_actions | confirm_btn | 坑位点击 | confirm | touch/voice/gesture | - |

---

### 4.19 声纹开通弹窗 / voiceprint_open

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| modal_content | - | 区块曝光 | block_expose | - | - |
| modal_content | agreement_link | 坑位点击 | select_item | touch/voice/gesture | - |
| modal_actions | - | 区块曝光 | block_expose | - | - |
| modal_actions | skip_btn | 坑位点击 | skip_voice | touch/voice - |
| modal/gesture |_actions | enable_btn | 坑位点击 | enable_voice | touch/voice/gesture | - |
| modal_close | close_btn | 坑位点击 | close | touch/voice/gesture | - |

---

### 4.20 加载页 / loading

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| loading_status | - | 区块曝光 | block_expose | - | loading_type |

---

### 4.21 异常提示页 / error_tip

| C | D | 事件 | action | click_type | 业务参数 |
|---|---|------|-------|------------|----------|
| error_message | - | 区块曝光 | block_expose | - | error_type, error_code |
| actions | back_btn | 坑位点击 | back | touch/voice/gesture | - |
| actions | retry_btn | 坑位点击 | retry | touch/voice/gesture | - |

---

## 五、参数定义

### 5.1 公共业务参数

| 参数名 | 类型 | 必填 | 说明 | 枚举值 |
|--------|------|------|------|--------|
| order_id | string | 是 | 订单ID | - |
| vid | string | 是 | 车辆VID | - |
| car_city | string | 是 | 车辆城市 | - |
| env | string | 是 | 环境标识 | test/prod |
| user_pin | string | 是 | 用户PIN | - |
| session_id | string | 是 | 会话ID | - |

### 5.2 商品参数

| 参数名 | 类型 | 必填 | 说明 | 枚举值 |
|--------|------|------|------|--------|
| source | string | 是 | 商品来源 | desktop_delivery/desktop_pickup/product_list/required_item/repurchase |
| sku_id | string | 是 | 商品ID | - |
| sku_name | string | 是 | 商品名称 | - |
| sku_index | number | 是 | 商品顺序 | 1,2,3... |
| shop_id | string | 否 | 门店ID | - |
| shop_name | string | 否 | 门店名称 | - |
| price | number | 是 | 价格（分） | - |
| original_price | number | 否 | 原价（分） | - |
| quantity | number | 是 | 数量 | 1,2,3... |
| list_type | string | 是 | 列表类型 | multi_store/single_store |
| delivery_type | string | 是 | 配送方式 | delivery/pickup |

### 5.3 推荐参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| request_id | string | 是 | 推荐请求ID，用于关联推荐结果和用户行为 |
| request_info | string | 是 | 推荐透传参数，JSON字符串，包含推荐系统返回的所有信息 |

### 5.4 地址参数

| 参数名 | 类型 | 必填 | 说明 | 枚举值 |
|--------|------|------|------|--------|
| address_id | string | 是 | 地址ID | - |
| address | string | 是 | 地址详情 | - |
| receiver | string | 是 | 收货人 | - |
| phone | string | 是 | 手机号 | - |
| address_status | string | 是 | 地址状态 | selected/unselected/no_default |
| is_in_range | boolean | 是 | 是否在配送范围 | true/false |

### 5.5 结算参数

| 参数名 | 类型 | 必填 | 说明 | 枚举值 |
|--------|------|------|------|--------|
| total_price | number | 是 | 订单总价（分） | - |
| discount_price | number | 否 | 优惠金额（分） | - |
| delivery_fee | number | 否 | 配送费（分） | - |
| item_count | number | 是 | 商品数量 | - |
| payment_status | string | 是 | 支付方式状态 | selected/unselected |
| payment_method | string | 否 | 支付方式类型 | wechat/alipay/voicepay/... |
| remark_status | string | 是 | 备注状态 | filled/none |

### 5.6 规格参数

| 参数名 | 类型 | 必填 | 说明 | 枚举值 |
|--------|------|------|------|--------|
| spec_id | string | 是 | 规格ID | - |
| spec_name | string | 是 | 规格名称 | - |
| spec_type | string | 是 | 规格类型 | temperature/capacity/flavor |
| is_selected | boolean | 是 | 是否选中 | true/false |
| operation | string | 是 | 数量操作 | increase/decrease |

### 5.7 语音气泡参数

| 参数名 | 类型 | 必填 | 说明 | 枚举值 |
|--------|------|------|------|--------|
| bubble_state | string | 是 | 气泡状态 | recommend/listening/recognizing/result/success/fail |
| recommend_text | string | 否 | 推荐文本 | - |
| old_state | string | 是 | 变更前状态 | - |
| new_state | string | 是 | 变更后状态 | - |
| asr_text | string | 是 | 语音识别文本 | - |
| intent | string | 是 | 识别出的意图 | - |
| intent_confidence | number | 是 | 意图置信度 | 0-1 |

### 5.8 SUG参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| sug_list | array | 否 | 当前页面显示的SUG词列表 |
| action | string | 是 | 意图，映射到原子操作（如select_item、next_page、refresh、confirm等） |
| sug_text | string | 是 | SUG上显示的实际文本 |

### 5.9 订单参数

| 参数名 | 类型 | 必填 | 说明 | 枚举值 |
|--------|------|------|------|--------|
| order_id | string | 是 | 订单ID | - |
| order_status | string | 是 | 订单状态 | pending/cooking/delivering/completed/cancelled |
| pickup_code | string | 否 | 取餐码 | - |
| estimated_time | string | 否 | 预计送达/取餐时间 | - |

### 5.10 异常参数

| 参数名 | 类型 | 必填 | 说明 | 枚举值 |
|--------|------|------|------|--------|
| error_type | string | 是 | 异常类型 | no_address/no_shop/out_of_range/... |
| error_code | string | 是 | 异常码 | - |
| fail_reason | string | 否 | 失败原因 | - |

---

## 六、tag机制

### 6.1 tag作用

- 记录用户在应用内的完整访问路径
- 支持来源分析和归因分析
- 支持排查用户转化路径问题

### 6.2 tag追加规则

| 事件类型 | 规则 |
|----------|------|
| 页面浏览 | tag追加一段，最多保留20段 |
| 页面内点击 | 后面覆盖前面的（同一页面内） |
| 返回/左滑 | 中间路径被抹除 |
| 首页入口 | tag清空，重新开始 |

### 6.3 需要记录到tag的关键点击

- select_item（选择商品）
- confirm（确认）
- pay（支付）
- add_cart（加购物车）
- switch_delivery（切换配送方式）
- sug_btn（SUG点击）

---

## 七、指标体系

### 7.1 用户漏斗指标

| 指标 | 计算口径 |
|------|----------|
| 入口点击率 | 入口点击 / 入口曝光 |
| 商品点击率CTR | 商品点击 / 商品曝光 |
| 加购率 | 加购点击 / 商品点击 |
| 结算转化率 | 结算曝光 / 商品点击 |
| 支付转化率 | 支付成功 / 发起支付 |
| 任务完成率 | 支付成功 / 入口点击 |

### 7.2 推荐效果指标

| 指标 | 说明 |
|------|------|
| 各来源CTR | desktop_delivery / desktop_pickup / product_list |
| 召回渠道效果 | ad/search/history 转化对比 |
| 广告位效果 | is_ad=true 的转化 |

### 7.3 业务结果指标

| 指标 | 说明 |
|------|------|
| 订单数 | 成功支付的订单数 |
| 订单金额 | 订单总收入 |
| 客单价 | 订单金额 / 订单数 |
| 配送方式分布 | delivery vs pickup |
| 支付方式分布 | 各支付方式占比 |

---

## 八、示例数据

### 示例1：桌面外卖商品点击

```json
{
  "target_spm": "desktop.home_recommend.delivery_section.item(1)",
  "action": "select_item",
  "click_type": "touch",

  "order_id": "order_123456",
  "vid": "vid_abc123",
  "car_city": "beijing",
  "env": "prod",
  "user_pin": "user_pin_xxx",

  "source": "desktop_delivery",
  "sku_id": "sku_98765",
  "sku_name": "生椰拿铁",
  "sku_index": 1,
  "price": 1900,
  "target_a": "takeaway_pickup",

  "request_id": "req_abc123456",
  "request_info": "{\"reco_source\":\"search\",\"reco_channel\":\"delivery\",\"search_keyword\":\"咖啡\",\"result_items\":[...]}"
}
```

### 示例2：商品列表页商品曝光

```json
{
  "target_spm": "takeaway_pickup.product_list.product_list.item(1)",
  "action": "position_expose",

  "order_id": "order_123456",
  "vid": "vid_abc123",

  "source": "product_list",
  "sku_id": "sku_98765",
  "sku_name": "生椰拿铁",
  "sku_index": 1,
  "shop_id": "shop_001",
  "shop_name": "瑞幸咖啡",
  "price": 1900,
  "list_type": "multi_store",
  "delivery_type": "delivery",

  "request_id": "req_abc123456",
  "request_info": "{\"reco_source\":\"search\",\"result_items\":[...]}"
}
```

### 示例3：结算页曝光

```json
{
  "target_spm": "takeaway_pickup.checkout.delivery_info",
  "action": "block_expose",

  "order_id": "order_123456",
  "vid": "vid_abc123",

  "delivery_type": "delivery",
  "address_status": "selected",
  "address_id": "addr_001",
  "payment_status": "selected",
  "payment_method": "voicepay",
  "remark_status": "none",
  "item_count": 2,
  "total_price": 4800,
  "discount_price": 200,
  "delivery_fee": 500
}
```

---

## 九、变更记录

| 日期 | 版本 | 变更内容 | 变更人 |
|------|------|---------|-------|
| 2026-03-11 | v2.0 | 完整重构：统一商品D命名、新增推荐参数、新增语音气泡、新增tag机制 | - |
| 2026-03-11 | v2.1 | SUG区域优化：统一C/D结构，通过action和sug_text参数区分 | - |
| 2026-03-11 | v2.2 | 曝光优化：删除冗余的C级曝光，D曝光已能代表的场景 | - |
