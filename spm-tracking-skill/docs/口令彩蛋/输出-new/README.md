# 口令彩蛋埋点设计 - 输出说明

## 输出文件结构

```
口令彩蛋/输出-new/
├── 口令彩蛋SPM埋点方案.md      # 完整的SPM埋点方案文档（Markdown格式）
├── 口令彩蛋SPM埋点方案.json    # 完整的SPM埋点方案文档（JSON格式）
├── 验证报告.md                 # 设计验证报告
└── 测试场景.md                 # 测试场景文档
```

## 埋点方案概要

### SPM结构
```
a: user (用户模块)
├── b: easter_egg (口令彩蛋入口)
│   └── c: entry → d: easter_egg_entrance
├── b: easter_egg_input (口令输入弹窗)
│   └── c: popup → d: close_btn, input_field, confirm_btn
└── b: easter_egg_show (彩蛋展示页)
    └── c: animation → d: easter_egg_animation, logo
    └── c: close → d: close_btn
```

### 埋点清单（共7个埋点）

| 序号 | SPM | 事件类型 | 说明 |
|------|-----|----------|------|
| 1 | user.easter_egg.entry.easter_egg_entrance | 点击 | 入口点击 |
| 2 | user.easter_egg_input.popup.close_btn | 点击 | 关闭弹窗 |
| 3 | user.easter_egg_input.popup.input_field | 输入 | 输入口令 |
| 4 | user.easter_egg_input.popup.confirm_btn | 点击 | 确认提交 |
| 5 | user.easter_egg_show.animation.easter_egg_animation | 曝光 | 彩蛋动画 |
| 6 | user.easter_egg_show.animation.logo | 曝光 | logo展示 |
| 7 | user.easter_egg_show.close.close_btn | 点击 | 关闭彩蛋 |

### 新增定义

**b级页面（3个）:**
- easter_egg: 口令彩蛋入口页
- easter_egg_input: 口令输入弹窗
- easter_egg_show: 彩蛋展示页

**c级区块（2个）:**
- entry: 入口区域
- animation: 动画区域

**d级坑位（4个）:**
- easter_egg_entrance: 口令彩蛋入口
- input_field: 口令输入框
- easter_egg_animation: 彩蛋动画
- logo: 品牌logo

### 参数定义

| 参数名 | 类型 | 必填 | 说明 | 枚举值 |
|--------|------|------|------|--------|
| input_text | string | 否 | 输入的口令 | - |
| verify_result | string | 是 | 验证结果 | correct/incorrect |
| animation_type | string | 是 | 动画类型 | stars/confetti |
| logo_name | string | 是 | logo名称 | - |

---

**生成日期**: 2026-03-10
**工具**: SPM埋点自动化设计Skill
