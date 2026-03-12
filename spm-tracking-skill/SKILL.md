---
name: spm-tracking
description: SPM埋点自动化设计 - 资深数据产品专家，精通SPM位置模型埋点设计
---

# SPM埋点自动化设计 Skill

## 适用场景快速确认 ⚠️ HUMAN CHECK

**目标**: 确认业务场景，自动适配规范

**执行步骤**:
1. 询问用户业务场景类型
2. 根据场景加载对应的SPM模板和参数规范
3. 如有新场景，引导用户创建新规范

**场景选项**:
```
请选择业务场景（可多选）：
□ 电商零售 (默认) - 商品、购物车、订单、支付
□ Robotaxi自动驾驶 - 无人驾驶出租车、车队管理
□ 网约车 / 出行服务 - 快车、专车、代驾
□ 智能座舱 / 车机系统 - IVI娱乐、语音助手、驾驶辅助
□ 金融理财 - 账户、交易、理财产品
□ 在线教育 - 课程、直播、学习进度
□ 工具类App - 功能性工具应用
□ 其他：[___]
```

**场景适配说明**:
- 不同场景对应不同的 SPM 层级结构和公共参数
- 选择场景后，自动加载对应的规范文档
- 首次使用某场景时，需要用户确认 SPM 结构

---

### Phase 0: 启动加载 ⚡ AUTO

> **重要**: Skill 启动时自动加载记忆系统

**执行步骤**:
1. 读取长期记忆 `.claude/brain/rules.md` → 获取静态规则
2. 读取工作日志 `.claude/brain/memories.jsonl` → 获取历史经验
3. 分析最近 5 条记忆 → 识别需要注意的问题
4. 加载对应场景模板（如果存在）

**启动话术**:
```
🧠 [记忆加载]

长期记忆已加载：
- 数据字典: 已加载
- 埋点协议: 已加载
- 业务边界: 已加载
- 场景分类: 已加载

最近经验回顾：
[显示最近 3 条记忆摘要]

⚠️ 注意事项：
[如有需要特别注意的历史经验，在此处提示]
```

---

### Phase 1: 场景选择 ⚠️ HUMAN CHECK

> **重要**: 在开始需求分析前，必须先确认业务场景。场景决定 SPM 结构和公共参数模板。

选择场景后，按照对应场景的 SPM 模板进行设计。如选择多个场景，需要分别设计或说明场景间的关系。

---

## 核心工作流程

### Phase 1: 需求理解 ⚠️ HUMAN CHECK

**目标**: 深度理解需求文档的每一个细节

**执行步骤**:
1. 读取需求文档（PRD/需求说明）
2. 提取核心业务流程（用户从入口到完成目标的完整路径）
3. 识别业务实体（商品、订单、用户、优惠券等核心对象）
4. 梳理关键指标（转化率、点击率、停留时长等）
5. 识别需要埋点的页面和交互场景

**确认话术**:
```
⚠️ [需求理解确认]

我理解的需求如下：
1. 核心业务流程：[描述]
2. 涉及页面：[页面列表]
3. 关键交互点：[交互列表]
4. 核心业务指标：[指标列表]

请确认以上理解是否正确？如有遗漏或偏差，请指出。
```

---

### Phase 2: 设计稿分析 ⚠️ HUMAN CHECK

**目标**: 结构化理解Figma设计稿，提取可埋点元素

**执行步骤**:
1. 读取Figma截图文件（使用Read工具查看图片）
2. 理解页面关系（首页→列表页→详情页→下单页的跳转关系）
3. 提取页面元素：
   - 导航元素（顶部导航、底部Tab、侧边栏）
   - 内容区域（轮播、列表、卡片、Feeds流）
   - 交互元素（按钮、链接、图标、输入框）
   - 状态元素（弹窗、浮层、Toast）
4. 识别可埋点位置（所有用户可点击/可交互的区域）
5. 标注每个元素的位置和业务含义

**确认话术**:
```
⚠️ [设计稿分析确认]

我识别的页面结构和元素如下：
1. 页面：[页面名称]
   - 导航区域：[元素]
   - 内容区域：[元素]
   - 可交互元素：[元素]
2. 页面跳转关系：[关系图]

请确认页面结构和元素识别是否正确？
```

---

### Phase 3: 公共参数确认

**目标**: 确认业务公共参数，避免重复定义

**执行步骤**:
1. 读取已有的参数管理规范（./参数管理规范.md）
2. 识别当前需求需要用到的公共业务参数
3. 确认参数类型、必填性、枚举值

> **注意**: SDK级参数（uid/timestamp/device/session等）由SDK自动上报，业务方无需关注

---

### Phase 4: SPM设计 ⚠️ HUMAN CHECK

**目标**: 设计符合规范的SPM编码

**执行步骤**:
1. 读取SPM全集文档（./SPM全集文档.md）确认已有定义
2. 根据页面结构设计SPM：
   - a(产品模块): 根据业务功能模块确定（如order_checkout/safety/pay）
   - b(页面): 根据设计稿页面确定（如product_detail/checkout）
   - c(区块): 根据元素所在区域确定（如banner/recommend/feeds）
   - d(坑位): 根据交互元素确定（如buy_btn/add_cart）
3. 对于复杂坑位，定义biz_type（业务类型）进行细分

**SPM设计规范**:
```
格式: a.b.c.d
示例: order_checkout.payment.wechat_pay.submit_btn

层级说明:
- a(产品模块): 业务下的功能模块 (order_checkout/safety_module/ride_service/pay)
  - 注意: a 是业务功能模块，不是APP名称
  - 如"下单流程模块"、"安全模块"、"出行服务模块"、"支付模块"
- b(页面): 具体页面 (product_detail/checkout/order_list)
- c(区块): 页面区域 (banner/recommend/feeds/nav)
- d(坑位): 交互元素 (buy_btn/add_cart/favorite)

坑位类型:
- 固定坑位: 固定不变的按钮/图标/链接
- 顺序坑位: 1,2,3,4... (用于Feeds流、列表等)
```

**确认话术**:
```
⚠️ [SPM设计确认]

设计的SPM方案如下：
| 页面 | SPM | 说明 |
|------|-----|------|
| 商品详情 | shop.product_detail | b |
| - 顶部横幅 | shop.product_detail.banner | c |
| - 立即购买 | shop.product_detail.banner.buy_btn | d |
| - 加购按钮 | shop.product_detail.recommend.add_cart | d |

请确认SPM命名是否符合全局规范？是否有冲突或需要调整？
```

---

### Phase 5: 参数设计 ⚠️ HUMAN CHECK

**目标**: 设计符合规范的参数方案

**执行步骤**:
1. 读取参数管理规范（./参数管理规范.md）确认类型定义
2. 为每个埋点事件设计业务参数：
   - 参数命名: 语义化、小写下划线
   - 数据类型: string/number/boolean/array
   - 必填性: 是/否
   - 枚举值: 如有固定取值范围
   - 校验规则: length/enum/regex/range
3. 检查参数一致性（相同含义使用相同命名）

**参数设计原则**:
```
命名规范:
- product_id (商品ID) 而非 pid/goods_id
- sku_id (SKU ID) 而非 skuid
- price (价格) 而非 amount/money

类型定义:
- string: "abc", "pending"
- number: 123, 99.00
- boolean: true/false

必填判断:
- 业务必须使用的参数 → 必填
- 可选的业务信息 → 选填
```

**确认话术**:
```
⚠️ [参数设计确认]

设计的参数方案如下：
| 参数名 | 类型 | 必填 | 说明 | 枚举值 |
|--------|------|------|------|--------|
| product_id | string | 是 | 商品ID | - |
| price | number | 是 | 价格(分) | - |
| sku_id | string | 否 | SKU ID | - |
| biz_type | string | 否 | 业务类型 | card/add_cart/favorite |

请确认参数设计是否符合规范？是否有不一致或需要调整？
```

---

### Phase 6: 埋点文档生成

**目标**: 生成完整的埋点方案文档

**输出格式**:
```markdown
# SPM埋点方案文档

## 1. 需求概述

### 1.1 业务背景
[需求背景描述]

### 1.2 涉及页面
| 页面 | 页面SPM | 说明 |
|------|---------|------|
| 首页 | order_checkout.index | 叫车入口 |
| 叫车页 | order_checkout.booking | 填写订单 |
| 行程页 | ride_service.ride | 行程中 |

---

## 2. SPM树形结构

```
a: order_checkout (下单模块)
│
├── b: index (首页)
│   ├── c: header
│   │   └── d: profile_btn, settings_btn
│   ├── c: quick_action
│   │   └── d: book_btn, reserve_btn
│   └── c: recent
│       └── d: start_btn, end_btn
│
├── b: booking (叫车页)
│   ├── c: input
│   │   └── d: start_point, end_point, add_stop
│   ├── c: service_type
│   │   └── d: ride_btn, taxi_btn, premium_btn
│   └── c: confirm
│       └── d: confirm_btn
│
└── b: ride (行程页)
    ├── c: driver_info
    │   └── d: call_btn, chat_btn
    ├── c: map
    │   └── d: share_btn
    └── c: emergency
        └── d: sos_btn
```

---

## 3. 埋点清单

### 3.1 [b: 首页]

**页面SPM**: `order_checkout.index`

**PV事件**: 进入首页时触发

| c (区块) | d (坑位) | 事件类型 | 触发时机 | 参数 |
|----------|----------|----------|----------|------|
| header | profile_btn (个人中心) | 点击 | 点击头像 | - |
| header | settings_btn (设置) | 点击 | 点击设置 | - |
| quick_action | book_btn (立即叫车) | 点击 | 点击立即叫车 | order_type, city |
| quick_action | reserve_btn (预约) | 点击 | 点击预约 | order_type, city |
| recent | start_btn (出发地) | 点击 | 选择出发地 | location_type |
| recent | end_btn (目的地) | 点击 | 选择目的地 | location_type |

---

### 3.2 [b: 叫车页]

**页面SPM**: `order_checkout.booking`

**PV事件**: 进入叫车页时触发

| c (区块) | d (坑位) | 事件类型 | 触发时机 | 参数 |
|----------|----------|----------|----------|------|
| input | start_point (出发地) | 点击/输入 | 选择/输入出发地 | location, address |
| input | end_point (目的地) | 点击/输入 | 选择/输入目的地 | location, address |
| input | add_stop (添加途经点) | 点击 | 添加途经点 | - |
| service_type | ride_btn (快车) | 点击 | 选择快车服务 | service_type |
| service_type | taxi_btn (出租车) | 点击 | 选择出租车 | service_type |
| service_type | premium_btn (专车) | 点击 | 选择专车服务 | service_type |
| confirm | confirm_btn (确认叫车) | 点击 | 确认发起订单 | order_id, estimated_price |
| driver_match | view_driver (查看司机) | 点击 | 查看匹配司机 | driver_id, eta |
| driver_match | cancel_match (取消匹配) | 点击 | 取消司机匹配 | reason |

---

### 3.3 [b: 行程中]

**页面SPM**: `ride_service.ride`

**PV事件**: 行程开始时触发

| c (区块) | d (坑位) | 事件类型 | 触发时机 | 参数 |
|----------|----------|----------|----------|------|
| driver_info | call_btn (联系司机) | 点击 | 点击拨打电话 | driver_phone |
| driver_info | chat_btn (在线聊天) | 点击 | 点击聊天 | - |
| driver_info | view_detail (查看详情) | 点击 | 查看司机详情 | driver_id |
| map | share_btn (分享行程) | 点击 | 分享行程 | order_id |
| map | route_view (查看路线) | 点击 | 查看完整路线 | - |
| payment | view_price (查看费用) | 点击 | 查看预估费用 | estimated_price |
| emergency | sos_btn (紧急求助) | 点击 | 点击紧急求助 | - |
| ride | arrive_btn (到达目的地) | 状态变化 | 到达目的地 | dropoff_location |

---

## 4. 参数定义

### 4.1 公共业务参数
| 参数名 | 类型 | 必填 | 说明 | 校验规则 |
|--------|------|------|------|----------|
| order_id | string | 是 | 订单ID | length: 1-50 |
| vehicle_id | string | 是 | 车辆ID | length: 1-32 |
| driver_id | string | 否 | 司机ID | length: 1-32 |
| service_type | string | 是 | 服务类型 | enum: ride/taxi/premium |
| estimated_price | number | 否 | 预估价格(分) | range: 0-999999 |
| actual_price | number | 否 | 实际价格(分) | range: 0-999999 |

### 4.2 事件特有参数
[各事件的特有参数已内联到埋点清单中]

---

## 5. 变更记录

| 日期 | 版本 | 变更内容 | 变更人 |
|------|------|---------|-------|
| 2026-03-12 | v1.4 | 新增三层记忆系统：脑干(规则)、海马体(日志)、前额叶(反思) | - |
| 2026-03-12 | v1.3 | 新增进化机制：Phase 8、数据存储结构、案例库、问题库、模板库 | - |
| 2026-03-12 | v1.2 | 优化输出格式：按b模块组织，去掉事件ID/名称 | - |
| 2026-03-12 | v1.1 | 扩展场景：Robotaxi自动驾驶、网约车出行、智能座舱 | - |
| 2026-03-06 | v1.0 | 初始版本 | - |
```

---

### Phase 7: 文档沉淀询问 ⚠️ HUMAN CHECK

**目标**: 询问是否需要沉淀到全局规范文档

**确认话术**:
```
📝 [文档沉淀询问]

本次需求完成后，是否需要沉淀以下文档？

□ 埋点设计规范 - 新增事件模板/参数模板
□ SPM全集文档 - 新增的SPM枚举值（a/b/c/d）
□ 参数管理文档 - 新增/变更的参数定义

如需沉淀，请告知需要更新的文档类型。
```

---

### Phase 7.5: 记录记忆 💾 AUTO

> **重要**: 每次执行完成后自动记录到工作日志

**执行步骤**:
1. 生成任务摘要
2. 记录到 `.claude/brain/memories.jsonl`
3. 检查是否触发进化条件

**记录格式**:
```json
{"date": "YYYY-MM-DD", "task": "场景_任务类型", "feedback": "用户反馈", "status": "success/corrected"}
```

**记录话术**:
```
💾 [记忆记录]

本次执行已记录：
- 任务: [场景]_[任务类型]
- 状态: [success/corrected]
- 反馈: [用户反馈摘要]

累计记录: N 条
```

**触发进化检测**:
- 同一场景执行 ≥3 次? → 提示生成模板
- 同一问题反馈 ≥2 次? → 提示更新规则

---

## 规范文档引用

在执行过程中，需要引用以下规范文档：

| 文档 | 路径 | 用途 |
|------|------|------|
| 埋点设计规范 | ./埋点设计规范.md | SPM结构、事件类型、命名规范 |
| 参数管理规范 | ./参数管理规范.md | 参数类型、校验规则、枚举值 |
| SPM全集文档 | ./SPM全集文档.md | 已有的SPM定义、biz_type定义 |

---

## 进化机制

### 8.1 进化系统架构

```
┌─────────────────────────────────────────────────────────────────┐
│                        进化系统架构                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   反馈收集层                                                    │
│   ┌───────────┐  ┌───────────┐  ┌───────────┐                 │
│   │ 用户评价   │  │ 执行数据  │  │ 冲突检测  │                 │
│   └─────┬─────┘  └─────┬─────┘  └─────┬─────┘                 │
│         └───────────────┼───────────────┘                       │
│                         ▼                                        │
│              ┌──────────────────┐                                │
│              │   反馈聚合中心    │                                │
│              │  (案例库+问题库)  │                                │
│              └────────┬─────────┘                                │
│                       │                                           │
│   学习引擎层          ▼                                           │
│   ┌──────────────────────────────────────────┐                 │
│   │            模式识别器                     │                 │
│   │  场景模式  │  参数模式  │  SPM模式      │                 │
│   └──────────────────────────────────────────┘                 │
│   ┌──────────────────────────────────────────┐                 │
│   │            知识沉淀器                     │                 │
│   │  高频场景→生成模板                       │                 │
│   │  通用参数→更新参数库                     │                 │
│   │  常见错误→更新检查清单                   │                 │
│   └──────────────────────────────────────────┘                 │
│                       │                                           │
│   规范更新层          ▼                                           │
│   ┌──────────────────────────────────────────┐                 │
│   │            自动进化触发器                 │                 │
│   │  触发条件:                                │                 │
│   │  - 同一场景执行 ≥3 次 → 生成模板          │                 │
│   │  - 同一问题反馈 ≥2 次 → 更新规范          │                 │
│   │  - 新场景类型出现 → 提示创建模板          │                 │
│   └──────────────────────────────────────────┘                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 8.2 数据存储结构

```
📁 spm-tracking-skill/
├── data/
│   ├── cases/                    # 案例库
│   │   ├── 电商_商品详情页_20260312.md
│   │   ├── 网约车_叫车流程_20260310.md
│   │   ├── 智能座舱_语音助手_20260308.md
│   │   └── _index.json           # 案例索引
│   │
│   ├── issues/                   # 问题库
│   │   ├── 理解偏差_202603.md
│   │   ├── 命名冲突_202603.md
│   │   ├── 参数遗漏_202603.md
│   │   └── _统计.json
│   │
│   ├── templates/                 # 场景模板库
│   │   ├── 电商_通用.json
│   │   ├── 出行_网约车.json
│   │   ├── 出行_robotaxi.json
│   │   ├── 座舱_智能座舱.json
│   │   └── _生成规则.md
│   │
│   └── analytics/                # 执行数据分析
│       ├── 执行记录.json
│       └── 趋势分析.json
│
├── docs/                         # 规范文档
│   ├── 埋点设计规范.md
│   ├── 参数管理规范.md
│   └── SPM全集文档.md
│
└── SKILL.md                      # Skill 定义
```

### 8.3 案例库格式

```markdown
# 案例: [场景名称]
- 执行日期: YYYY-MM-DD
- 场景类型: 电商/出行/座舱/其他
- 涉及页面: N 个
- 埋点数量: N 个
- 用户确认率: X%
- 执行耗时: X分钟

## 输入
[需求文档摘要]

## 输出
[埋点清单摘要]

## 反馈
- [ ] 理解正确
- [ ] 有偏差: [具体问题]

## 问题记录
[如有]

## 改进建议
[如有]
```

### 8.4 问题库格式

```markdown
# 问题记录

## 问题类型
- 理解偏差 / 命名冲突 / 参数遗漏 / 规范缺失

## 问题描述
Q: [问题描述]
A: [解决方案]

## 影响范围
- 影响 Phase: [Phase编号]
- 影响文档: [文档名称]

## 解决状态
- [ ] 待解决
- [ ] 已解决
- [ ] 已沉淀到规范

## 解决措施
[具体措施]
```

### 8.5 场景模板格式

```json
{
  "场景": "网约车_叫车流程",
  "版本": "1.0",
  "a模块": ["ride_booking", "ride_service"],
  "b页面": ["home", "booking", "ride", "history"],
  "c区块": ["header", "input", "service_type", "confirm", "driver_info", "map"],
  "d坑位": ["book_btn", "confirm_btn", "call_btn", "sos_btn"],
  "公共参数": ["order_id", "driver_id", "vehicle_id", "service_type", "estimated_price"],
  "典型埋点": 20,
  "复杂度": "中",
  "首次出现": "2026-03-12"
}
```

### 8.6 Phase 8: 进化评估

> **目标**: 评估本次执行是否产生可复用的知识，自动触发进化

**自动检测项**:
```
1. 新增 SPM 数量 ≥ 3 → 建议更新 SPM全集文档
2. 新增参数数量 ≥ 2 → 建议更新参数管理规范
3. 遇到规范未覆盖场景 → 建议补充埋点设计规范
4. 用户确认过程中有重大修改 → 记录到问题库
5. 同一场景执行次数 ≥ 3 → 自动生成场景模板
```

**进化确认话术**:
```
📈 [进化评估]

本次执行统计:
- 新增 SPM: N 个
- 新增参数: N 个
- 用户确认修改: N 处
- 执行耗时: X 分钟

建议进化:
□ 发现 N 个新 SPM → 沉淀到 SPM全集文档
□ 发现 N 个新参数 → 沉淀到参数管理规范
□ 遇到新场景模式 → 生成场景模板
□ 记录 N 个问题 → 补充检查清单

是否确认执行进化？
```

**触发条件**:
| 条件 | 触发动作 |
|------|---------|
| 同一场景执行 ≥3 次 | 自动生成/更新场景模板 |
| 同一问题反馈 ≥2 次 | 自动更新检查清单 |
| 新增 SPM/参数达到阈值 | 提示用户确认更新规范 |
| 新场景类型出现 | 提示创建新场景模板 |

### 8.7 自我进化检查清单

**每轮执行后（自动）**:
- [ ] 记录本次案例到 `data/cases/`
- [ ] 更新案例索引 `data/cases/_index.json`
- [ ] 如有问题，记录到 `data/issues/`
- [ ] 统计本次执行数据

**每周（手动/自动）**:
- [ ] 汇总高频场景 → 生成/更新模板
- [ ] 汇总问题 → 更新检查清单
- [ ] 分析执行数据 → 优化流程
- [ ] 清理过期数据

**每月（手动）**:
- [ ] 评估模板覆盖度
- [ ] 更新场景模板版本
- [ ] 发布 Skill 新版本

### 8.8 规范文档更新流程

1. **识别新定义**: 在设计过程中发现新的SPM或参数
2. **提出更新建议**: 在 Phase 8 进化评估阶段提出具体更新内容
3. **用户确认**: 获得用户确认后更新全局规范文档
4. **版本记录**: 在变更记录中标注更新内容
5. **案例沉淀**: 将本次执行记录到案例库

### 8.9 持续优化机制

- **用户反馈收集**: 每次执行后记录用户反馈
- **执行数据分析**: 统计各 Phase 耗时、确认次数、跳过率
- **规范冲突检测**: 自动检测 SPM/参数的命名冲突
- **知识自动沉淀**: 达到阈值自动触发知识沉淀

---

## 注意事项

1. **Human in the Loop**: 任何不确定的环节必须主动确认，不自行猜测
2. **全局一致性**: SPM和参数设计必须参考已有规范，保持一致性

---

## 注意事项

1. **Human in the Loop**: 任何不确定的环节必须主动确认，不自行猜测
2. **全局一致性**: SPM和参数设计必须参考已有规范，保持一致性
3. **业务优先**: 只关注业务参数，SDK级参数由底层自动处理
4. **规范引用**: 设计过程中必须引用对应的规范文档

---

## 技能元信息

- **版本**: v1.4
- **创建时间**: 2026-03-06
- **最后更新**: 2026-03-12
- **适用场景**: 电商零售、Robotaxi自动驾驶、网约车出行、智能座舱等
- **前置要求**: 需求文档（设计稿可选）

---

## 附录：各场景 SPM 模板

### 场景A: Robotaxi 自动驾驶出租车

**SPM 层级结构**:
```
格式: a.b.c.d
层级:
- a(产品模块): 业务功能模块 (robotaxi_booking/robotaxi_ride/robotaxi_safety)
- b(页面): home/map/booking/ride/feedback
- c(区块): header/footer/map/passenger_info/driver_info
- d(坑位): start_btn/cancel_btn/contact_btn/rate_star

示例:
robotaxi_booking.home
├── robotaxi_booking.home.header
│   └── robotaxi_booking.home.header.profile_btn
├── robotaxi_booking.home.map
│   └── robotaxi_booking.home.map.refresh_btn
└── robotaxi_booking.home.quick_action
    ├── robotaxi_booking.home.quick_action.book_btn
    └── robotaxi_booking.home.quick_action.reservation_btn

robotaxi_booking.booking
├── robotaxi_booking.booking.input
│   ├── robotaxi_booking.booking.input.origin
│   └── robotaxi_booking.booking.input.destination
├── robotaxi_booking.booking.confirm
│   └── robotaxi_booking.booking.confirm.confirm_btn
└── robotaxi_booking.booking.vehicle_select
    ├── robotaxi_booking.booking.vehicle_select.select_btn
    └── robotaxi_booking.booking.vehicle_select.view_detail
```

**公共业务参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| order_id | string | 是 | 行程订单ID |
| vehicle_id | string | 是 | 自动驾驶车辆ID |
| route_id | string | 否 | 路线ID |
| pickup_type | string | 否 | 接驾类型: robotonly/hybrid |
| estimated_wait_time | number | 否 | 预计等待时间(秒) |
| estimated_price | number | 否 | 预估价格(分) |

---

### 场景B: 网约车 / 出行服务

**SPM 层级结构**:
```
格式: a.b.c.d
层级:
- a(产品模块): 业务功能模块 (ride_booking/ride_service/ride_payment/driver_module)
- b(页面): home/booking/ride/history
- c(区块): banner/recommend/map/passenger_info/driver_info/payment
- d(坑位): 类型按钮/输入框/确认按钮

示例:
ride_booking.home
├── ride_booking.home.banner
│   └── ride.home.banner.promo_banner
├── ride.home.service_type
│   ├── ride.home.service_type.ride_btn
│   ├── ride.home.service_type.taxi_btn
│   └── ride.home.service_type.premium_btn
└── ride.home.recent
    ├── ride_booking.home.recent.start_btn
    └── ride_booking.home.recent.favorite_btn

ride_booking.booking
├── ride_booking.booking.input
│   ├── ride_booking.booking.input.start_point
│   └── ride_booking.booking.input.end_point
├── ride_booking.booking.driver_match
│   └── ride_booking.booking.driver_match.view_driver
└── ride_booking.booking.confirm
    └── ride_booking.booking.confirm.confirm_btn

ride_service.ride
├── ride_service.ride.driver_info
│   ├── ride_service.ride.driver_info.call_btn
│   └── ride_service.ride.driver_info.chat_btn
├── ride_service.ride.map
│   └── ride_service.ride.map.share_btn
└── ride_service.ride.emergency
    └── ride_service.ride.emergency.sos_btn
```

**公共业务参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| order_id | string | 是 | 订单ID |
| driver_id | string | 否 | 司机ID(有人驾时) |
| vehicle_id | string | 是 | 车辆ID |
| license_plate | string | 否 | 车牌号 |
| service_type | string | 是 | 服务类型: ride/taxi/premium/carpool |
| estimated_price | number | 否 | 预估价格(分) |
| actual_price | number | 否 | 实际价格(分) |
| distance | number | 否 | 行程距离(米) |
| duration | number | 否 | 行程时长(秒) |
| rating | number | 否 | 评分 1-5 |

---

### 场景C: 智能座舱 / 车机系统 (IVI)

**SPM 层级结构**:
```
格式: a.b.c.d
层级:
- a(产品模块): 业务功能模块 (ivi_entertainment/ivi_navi/ivi_voice/ivi_adas/ivi_settings)
- b(页面): home/media/navi/phone/settings
- c(区块): status_bar/main_content/side_bar/panel
- d(坑位): 实体按钮/图标/列表项

示例:
ivi_entertainment.home
├── ivi.home.status_bar
│   ├── ivi.home.status_bar.time
│   ├── ivi.home.status_bar.network
│   └── ivi.home.status_bar.battery
├── ivi.home.main
│   ├── ivi.home.main.music_player
│   └── ivi.home.main.weather
└── ivi_entertainment.home.quick_panel
    ├── ivi_entertainment.home.quick_panel.bluetooth_btn
    └── ivi_entertainment.home.quick_panel.wifi_btn

ivi_navi.navi
├── ivi_navi.navi.map
│   ├── ivi_navi.navi.map.zoom_in
│   └── ivi_navi.navi.map.zoom_out
├── ivi_navi.navi.route
│   ├── ivi_navi.navi.route.start_nav
│   └── ivi_navi.navi.route.view_alternate
└── ivi_navi.navi.search
    ├── ivi_navi.navi.search.input
    └── ivi_navi.navi.search.result_list
        └── ivi_navi.navi.search.result_list.item_1

ivi_voice.voice
├── ivi_voice.voice.wake_word
│   └── ivi_voice.voice.wake_word.hello_x
├── ivi_voice.voice.command
│   ├── ivi_voice.voice.command.music_btn
│   └── ivi_voice.voice.command.nav_btn
└── ivi_voice.voice.result
    └── ivi_voice.voice.result.feedback

ivi_adas.adas (驾驶辅助)
├── ivi_adas.adas.lka (车道保持)
│   ├── ivi_adas.adas.lka.toggle
│   └── ivi_adas.adas.lka.alert_setting
├── ivi_adas.adas.aeb (自动紧急制动)
│   └── ivi_adas.adas.aeb.toggle
└── ivi_adas.adas.cc (自适应巡航)
    ├── ivi_adas.adas.cc.set_speed
    └── ivi_adas.adas.cc.set_distance
```

**公共业务参数**:
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| vehicle_id | string | 是 | 车辆VIN码 |
| os_version | string | 否 | 车机系统版本 |
| screen_id | string | 否 | 屏幕ID: main_display/driver_display/hud |
| voice_session_id | string | 否 | 语音会话ID |
| voice_text | string | 否 | 语音识别文本 |
| command_intent | string | 否 | 命令意图 |
| media_source | string | 否 | 媒体来源: bt/usb/online/local |
| nav_destination | string | 否 | 导航目的地 |
| nav_distance | number | 否 | 导航距离(米) |
| driving_mode | string | 否 | 驾驶模式: manual/pilot/auto |
| adas_status | string | 否 | ADAS功能状态 |

---

### 通用事件类型模板

根据场景选择对应的事件类型：

| 事件类型 | 说明 | 适用场景 |
|----------|------|----------|
| click | 点击事件 | 所有 |
|曝光 | 页面/区域曝光 | 所有 |
| exposure | 内容曝光 | 所有 |
| swipe | 滑动/切换 | 所有 |
| input | 文本输入 | 输入框 |
| submit | 提交确认 | 表单/按钮 |
| success | 操作成功 | 流程完成 |
| error | 操作失败 | 异常处理 |
| arrive | 到达事件 | 出行场景 |
| pickup | 接驾事件 | 出行场景 |
| dropoff | 到达目的地 | 出行场景 |
| call | 拨打电话 | 出行/客服 |
| sos | 紧急求助 | 出行/安全 |
| voice_wake | 语音唤醒 | 智能座舱 |
| voice_cmd | 语音命令 | 智能座舱 |
| drive_start | 驾驶开始 | ADAS/出行 |
| drive_end | 驾驶结束 | ADAS/出行 |
