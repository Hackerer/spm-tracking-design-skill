# SPM埋点方案文档 - 口令彩蛋

## 1. 需求概述

### 1.1 业务背景
口令彩蛋是一个隐藏彩蛋功能，用户输入特定口令可触发彩蛋动画效果。该功能入口位于"我的"页面，用户通过输入正确口令可触发星星纸片飘落+logo展示的彩蛋动画。

### 1.2 业务流程
```
用户点击"口令彩蛋"入口
    ↓
弹出口令输入弹窗
    ↓
用户输入口令并点击确认
    ↓
[正确口令] → 触发彩蛋动画 → 关闭彩蛋
[错误口令] → 提示"口令有误，请重试" → 重新输入
```

### 1.3 涉及页面
| 页面 | 功能 |
|------|------|
| 我的页面 | 展示"口令彩蛋"入口 |
| 口令输入弹窗 | 输入口令并确认 |
| 彩蛋展示页 | 全屏彩蛋动画展示 |

---

## 2. SPM树形结构

```
a: user (用户模块)
│
b: easter_egg (口令彩蛋)
├── c: entry (入口区域)
│   └── d: easter_egg_entrance(口令彩蛋入口)
│
b: easter_egg_input (口令输入弹窗)
├── c: popup (弹窗区域)
│   ├── d: close_btn(关闭按钮)
│   ├── d: input_field(口令输入框)
│   └── d: confirm_btn(确认按钮)
│
b: easter_egg_show (彩蛋展示页)
├── c: animation (动画区域)
│   ├── d: easter_egg_animation(彩蛋动画)
│   └── d: logo(品牌logo)
└── c: close (关闭区域)
    └── d: close_btn(关闭按钮)
```

---

## 3. 埋点清单

### 3.1 我的页面 - 口令彩蛋入口

| b | c | d(中文+英文) | 事件类型 | 触发时机 | 参数 |
|-----|-----|----------------|----------|----------|------|
| easter_egg | entry | 口令彩蛋入口(easter_egg_entrance) | 点击 | 点击"口令彩蛋"入口 | [] |

### 3.2 口令输入弹窗

| b | c | d(中文+英文) | 事件类型 | 触发时机 | 参数 |
|-----|-----|----------------|----------|----------|------|
| easter_egg_input | popup | 关闭按钮(close_btn) | 点击 | 点击关闭按钮 | [] |
| easter_egg_input | popup | 口令输入框(input_field) | 输入 | 输入/修改口令时 | [{"param_code":"input_text","param_name":"输入的口令","data_type":"string","is_required":false,"enum_values":[],"description":"用户输入的口令内容","校验规则":{"length":{"min":0,"max":20}}}] |
| easter_egg_input | popup | 确认按钮(confirm_btn) | 点击 | 点击确认按钮 | [{"param_code":"input_text","param_name":"输入的口令","data_type":"string","is_required":true,"enum_values":[],"description":"用户输入的口令内容","校验规则":{"length":{"min":1,"max":20}}},{"param_code":"verify_result","param_name":"验证结果","data_type":"string","is_required":true,"enum_values":["correct","incorrect"],"description":"口令验证结果"}] |

### 3.3 彩蛋展示页

| b | c | d(中文+英文) | 事件类型 | 触发时机 | 参数 |
|-----|-----|----------------|----------|----------|------|
| easter_egg_show | animation | 彩蛋动画(easter_egg_animation) | 曝光 | 彩蛋动画开始展示 | [{"param_code":"animation_type","param_name":"动画类型","data_type":"string","is_required":true,"enum_values":["stars","confetti"],"description":"彩蛋动画类型"}] |
| easter_egg_show | animation | 品牌logo(logo) | 曝光 | logo展示 | [{"param_code":"logo_name","param_name":"logo名称","data_type":"string","is_required":true,"enum_values":[],"description":"展示的logo名称或标识"}] |
| easter_egg_show | close | 关闭按钮(close_btn) | 点击 | 点击关闭按钮 | [] |

---

## 4. 参数定义

### 4.1 公共业务参数
本需求无特殊的公共业务参数，所有参数均为事件特有参数。

### 4.2 事件特有参数

| 参数名 | 类型 | 必填 | 说明 | 校验规则 | 枚举值 |
|--------|------|------|------|----------|--------|
| input_text | string | 否 | 用户输入的口令内容 | length: 0-20 | - |
| verify_result | string | 是 | 口令验证结果 | - | correct/incorrect |
| animation_type | string | 是 | 彩蛋动画类型 | - | stars/confetti |
| logo_name | string | 是 | 展示的logo名称 | length: 1-50 | - |

---

## 5. 变更记录

| 日期 | 版本 | 变更内容 | 变更人 |
|------|------|---------|-------|
| 2026-03-10 | v1.0 | 初始版本 | Claude |

---

## 6. 新增SPM定义

### 6.1 新增b级页面
| b级值 | 页面名称 | 说明 |
|-------|----------|------|
| easter_egg | 口令彩蛋入口页 | "我的"页面中的口令彩蛋入口 |
| easter_egg_input | 口令输入弹窗 | 输入口令的弹窗 |
| easter_egg_show | 彩蛋展示页 | 彩蛋动画展示页面 |

### 6.2 新增c级区块
| c级值 | 说明 | 适用场景 |
|--------|------|----------|
| entry | 入口区域 | 功能入口 |
| animation | 动画区域 | 彩蛋动画展示 |

### 6.3 新增d级坑位
| d级值 | 说明 | 适用场景 |
|--------|------|----------|
| easter_egg_entrance | 口令彩蛋入口 | 入口点击 |
| input_field | 口令输入框 | 输入框交互 |
| easter_egg_animation | 彩蛋动画 | 动画曝光 |
| logo | 品牌logo | logo曝光 |

---

## 7. 验证要点

### 7.1 功能验证
- [ ] 点击"口令彩蛋"入口是否正确上报
- [ ] 输入口令时是否正确上报
- [ ] 点击确认按钮时是否正确上报验证结果
- [ ] 彩蛋动画展示时是否正确上报曝光
- [ ] 点击关闭按钮时是否正确上报

### 7.2 数据验证
- [ ] verify_result参数值是否正确（correct/incorrect）
- [ ] input_text长度是否在规定范围内
- [ ] 各事件SPM是否唯一不冲突
