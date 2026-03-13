# SPM埋点方案文档

## 1. 需求概述

### 1.1 业务背景
网易云音乐 HMI 车机版埋点设计，应用于座舱 HMI 屏。主要场景包括播放器内核、首页（推荐卡片）、歌曲详情页、沉浸歌词页、登录引导页、个人中心页等。

### 1.2 涉及页面
| 页面 | 页面SPM | 说明 |
|------|---------|------|
| 播放器内核 | netcloud.player_core | 不可见的"后台虚拟页面" |
| 首页 | netcloud.home | 每日推荐、漫游、排行榜等 |
| 歌曲列表详情页 | netcloud.song_list | 歌单详情 |
| 沉浸歌词页 | netcloud.lyric | 沉浸式歌词展示 |
| 登录引导页 | netcloud.login | 扫码登录/自动登录 |
| 个人中心页 | netcloud.profile | 设置、退出登录 |
| HMI基础-通用 | hmi_base | 全局SOS组件、通知组件、Dock栏 |

---

## 2. SPM树形结构

```
a: 网易云音乐 (netcloud)
│
├── b: 播放器内核 (player_core) - 组件
│   └── c: 播放器内核
│       ├── d: play_start (起播)
│       ├── d: play_end (播放中止)
│       ├── d: play_complete (自然完播)
│       └── d: play_heartbeat (播放心跳)
│
├── b: 首页 (home) - 页面
│   ├── c: 播放器
│   │   ├── d: play_btn (播放)
│   │   ├── d: pause_btn (暂停)
│   │   ├── d: prev_song_btn (上一首)
│   │   ├── d: next_song_btn (下一首)
│   │   ├── d: lyric_btn (歌词按钮)
│   │   ├── d: favorite_btn (收藏)
│   │   ├── d: play_mode_btn (播放模式)
│   │   ├── d: progress_bar (进度条)
│   │   └── d: player_cover_area (封面区域)
│   ├── c: 每日推荐
│   │   ├── d: recommend_card (推荐卡片)
│   │   └── d: quick_play_btn (快捷播放)
│   ├── c: 漫游
│   │   └── d: roaming_card (漫游卡片)
│   ├── c: 我喜欢
│   │   └── d: favorite_card (我喜欢卡片)
│   ├── c: 登录引导
│   │   └── d: login_card (登录卡片)
│   ├── c: 排行榜
│   │   ├── d: rank_card (排行榜卡片)
│   │   ├── d: quick_play_btn (快捷播放)
│   │   ├── d: song_item (歌曲)
│   │   └── d: refresh_btn (换一批)
│   └── c: 场景歌单
│       └── d: playlist_card (歌单卡片)
│
├── b: 歌曲列表详情页 (song_list) - 页面
│   └── c: 单曲列表
│       ├── d: song_item (歌曲)
│       └── d: favorite_btn (收藏)
│
├── b: 沉浸歌词页 (lyric) - 页面
│   ├── c: 顶部导航
│   │   └── d: close_btn (关闭)
│   ├── c: 歌词区域
│   │   ├── d: lyric_line (歌词行)
│   │   └── d: lyric_scroll (歌词滑动)
│   └── c: 播放控制
│       ├── d: play_btn (播放)
│       ├── d: pause_btn (暂停)
│       ├── d: prev_song_btn (上一首)
│       ├── d: next_song_btn (下一首)
│       ├── d: play_mode_btn (播放模式)
│       └── d: progress_bar (进度条)
│
├── b: 登录引导页 (login) - 页面
│   ├── c: 登录弹窗
│   │   ├── d: qr_code_img (二维码)
│   │   └── d: scan_success_view (确认成功)
│   └── c: 自动登录引导
│       ├── d: enable_btn (开启按钮)
│       └── d: cancel_btn (取消)
│
└── b: 个人中心页 (profile) - 页面
    ├── c: 设置菜单
    │   ├── d: auto_login_toggle (自动登录)
    │   └── d: logout_btn (退出登录)
    └── c: 顶部导航
        └── d: back_btn (返回)
```

---

## 3. 参数定义（统一）

### 3.1 公共业务参数 (HMI业务公参)
| 参数名 | 类型 | 必填 | 说明 | 枚举值 |
|--------|------|------|------|--------|
| user_pin | string | 是 | 用户京东pin | - |
| navi_bar_status | string | 是 | 导航栏状态 | 沉浸式/非沉浸式 |
| vid | string | 是 | 车辆id | - |
| server_env | string | 是 | 服务端环境 | live/staging/test |
| build_type | string | 是 | 包环境类型 | 可切环境包/不可切环境包 |
| order_id | string | 是 | jkc订单id | - |
| click_type | string | 是 | 点击触发方式 | voice/touch/gesture |
| reco_sug | string | 否 | 推荐sug词 | 多个用逗号分隔 |

### 3.2 事件特有参数
| 参数名 | 类型 | 说明 | 枚举值 |
|--------|------|------|--------|
| song_id | string | 歌曲ID | - |
| playlist_id | string | 歌单ID | - |
| played_duration_ms | number | 本次连续播放毫秒数 | - |
| end_reason | string | 中止原因 | user_pause/user_skip_next/user_skip_prev/natural_eof/system_interrupt/network_error |
| song_length_ms | number | 歌曲总长(毫秒) | - |
| action | string | 收藏动作 | add/cancel |
| target_mode | string | 目标播放模式 | - |
| from_sec | number | 进度条拖动起始位置(秒) | - |
| to_sec | number | 进度条拖动结束位置(秒) | - |
| seek_to_timestamp | number | 歌词跳转时间戳 | - |
| load_time_ms | number | 二维码加载时间(毫秒) | - |
| is_success | boolean | 是否加载成功 | - |
| switch_state | string | 开关状态 | on/off |
| stay_duration_sec | number | 停留时长(秒) | - |
| rank_id | string | 榜单ID | - |
| rank_name | string | 榜单名称 | - |
| card_index | number | 卡片索引(从左到右0,1,2...) | - |
| song_index | number | 歌曲索引(0,1,2) | - |
| index | number | 列表索引 | - |
| is_vip_only | boolean | 是否仅VIP | - |
| is_paid | boolean | 是否已购 | - |
| scene_type | string | 场景类型 | - |
| content_type | string | 内容类型 | 音乐/疗愈空间音频 |
| content_id | string | 内容ID | - |
| noti_content | string | 通知内容 | - |
| noti_level | string | 通知等级 | l0/l1/l2/l3 |
| initial_value | string | 变更前值 | - |
| new_value | string | 变更后值 | - |
| button_type | string | 按钮类型 | - |
| click_position | string | 点击位置 | dock栏/空调组件 |
| ac_mode | string | 空调模式 | 制冷/制热/通风 |

---

## 4. 埋点清单

### 4.1 播放器内核 (b: player_core) - 组件

浏览事件：无

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 播放器内核 | 否 | 起播(play_start) | - | - | 技术 | 播放第一帧音频流时 | [公共参数] + song_id |
| 播放器内核 | 否 | 播放中止(play_end) | - | - | 技术 | 音频因任何原因停止时 | [公共参数] + song_id played_duration_ms end_reason |
| 播放器内核 | 否 | 自然完播(play_complete) | - | - | 技术 | 歌曲进度条自然走到100%时 | [公共参数] + song_id song_length_ms |
| 播放器内核 | 否 | 播放心跳(play_heartbeat) | - | - | 技术 | 处于播放状态下，每隔30秒 | [公共参数] + song_id |

---

### 4.2 首页 (b: home) - 页面

浏览事件：

| a | b | b浏览 | 触发时机 | 参数 |
|---|---|------|----------|------|
| 网易云音乐 | 首页 | 是 | 每次打开首页时 | [公共参数] |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 播放器 | 否 | 播放(play_btn) | - | 固定坑位 | 点击 | 点击播放 | [公共参数] + song_id |
| 播放器 | 否 | 暂停(pause_btn) | - | 固定坑位 | 点击 | 点击暂停 | [公共参数] + song_id |
| 播放器 | 否 | 上一首(prev_song_btn) | - | 固定坑位 | 点击 | 点击上一首 | [公共参数] + song_id |
| 播放器 | 否 | 下一首(next_song_btn) | - | 固定坑位 | 点击 | 点击下一首 | [公共参数] + song_id |
| 播放器 | 否 | 歌词按钮(lyric_btn) | - | 固定坑位 | 点击 | 点击歌词按钮 | [公共参数] + song_id |
| 播放器 | 否 | 收藏(favorite_btn) | - | 固定坑位 | 点击 | 点击收藏/取消收藏 | [公共参数] + song_id action |
| 播放器 | 否 | 播放模式(play_mode_btn) | - | 固定坑位 | 点击 | 切换播放模式 | [公共参数] + song_id |
| 播放器 | 否 | 进度条(progress_bar) | - | 固定坑位 | 滑动结束 | 拖动进度条 | [公共参数] + song_id |
| 播放器 | 否 | 封面区域(player_cover_area) | - | 固定坑位 | 点击 | 点击进入沉浸歌词页 | [公共参数] + song_id |
| 每日推荐 | 否 | 推荐卡片(recommend_card) | - | 固定坑位 | 点击 | 点击进入歌单详情页 | [公共参数] + playlist_id |
| 每日推荐 | 否 | 快捷播放(quick_play_btn) | - | 固定坑位 | 点击 | 盲听整个推荐歌单 | [公共参数] |
| 漫游 | 否 | 漫游卡片(roaming_card) | - | 固定坑位 | 点击 | 点击漫游入口 | [公共参数] + playlist_id |
| 我喜欢 | 否 | 我喜欢卡片(favorite_card) | - | 固定坑位 | 点击 | 点击进入我喜欢的音乐 | [公共参数] |
| 登录引导 | 否 | 登录卡片(login_card) | - | 固定坑位 | 点击 | 点击登录卡片 | [公共参数] |
| 排行榜 | 否 | 排行榜卡片(rank_card) | - | 顺序坑位 | 点击 | 点击进入榜单详情页 | [公共参数] + rank_id rank_name card_index |
| 排行榜 | 否 | 快捷播放(quick_play_btn) | - | 顺序坑位 | 点击 | 榜单快捷播放 | [公共参数] + rank_id rank_name card_index |
| 排行榜 | 否 | 歌曲(song_item) | - | 顺序坑位 | 曝光 | 榜单内前3首歌曲曝光 | [公共参数] + rank_id song_id song_index |
| 排行榜 | 否 | 歌曲(song_item) | - | 顺序坑位 | 点击 | 点击榜单内前3首歌曲 | [公共参数] + rank_id song_id song_index |
| 排行榜 | 否 | 换一批(refresh_btn) | - | 固定坑位 | 点击 | 点击换一批 | [公共参数] |
| 场景歌单 | 否 | 歌单卡片(playlist_card) | - | 顺序坑位 | 点击 | 点击进入场景歌单 | [公共参数] + playlist_id scene_type card_index |

---

### 4.3 歌曲列表详情页 (b: song_list) - 页面

浏览事件：

| a | b | b浏览 | 触发时机 | 参数 |
|---|---|------|----------|------|
| 网易云音乐 | 歌曲列表详情页 | 是 | 每次打开歌曲列表详情页时 | [公共参数] |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 单曲列表 | 否 | 歌曲(song_item) | - | 顺序坑位 | 曝光 | 单曲有效曝光 | [公共参数] + song_id index is_vip_only is_paid |
| 单曲列表 | 否 | 歌曲(song_item) | - | 顺序坑位 | 点击 | 点击列表单曲播放 | [公共参数] + song_id index is_vip_only is_paid |
| 单曲列表 | 否 | 收藏(favorite_btn) | - | 固定坑位 | 点击 | 列表快捷收藏 | [公共参数] + song_id index action |

---

### 4.4 沉浸歌词页 (b: lyric) - 页面

浏览事件：

| a | b | b浏览 | 触发时机 | 参数 |
|---|---|------|----------|------|
| 网易云音乐 | 沉浸歌词页 | 是 | 每次打开沉浸歌词页时 | [公共参数] |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 顶部导航 | 否 | 关闭(close_btn) | - | 固定坑位 | 点击 | 退出沉浸模式 | [公共参数] + stay_duration_sec |
| 歌词区域 | 否 | 歌词行(lyric_line) | - | 顺序坑位 | 点击 | 点击歌词空降到进度 | [公共参数] + song_id seek_to_timestamp |
| 歌词区域 | 否 | 歌词滑动(lyric_scroll) | - | 固定坑位 | 滑动结束 | 歌词区域滑动查看 | [公共参数] + song_id |
| 播放控制 | 否 | 播放(play_btn) | - | 固定坑位 | 点击 | 沉浸态播放控制 | [公共参数] + song_id |
| 播放控制 | 否 | 暂停(pause_btn) | - | 固定坑位 | 点击 | 沉浸态暂停控制 | [公共参数] + song_id |
| 播放控制 | 否 | 上一首(prev_song_btn) | - | 固定坑位 | 点击 | 沉浸态上一首 | [公共参数] + song_id |
| 播放控制 | 否 | 下一首(next_song_btn) | - | 固定坑位 | 点击 | 沉浸态下一首 | [公共参数] + song_id |
| 播放控制 | 否 | 播放模式(play_mode_btn) | - | 固定坑位 | 点击 | 沉浸态切换模式 | [公共参数] + target_mode |
| 播放控制 | 否 | 进度条(progress_bar) | - | 固定坑位 | 滑动结束 | 沉浸态拖动进度条 | [公共参数] + song_id from_sec to_sec |

---

### 4.5 登录引导页 (b: login) - 页面

浏览事件：

| a | b | b浏览 | 触发时机 | 参数 |
|---|---|------|----------|------|
| 网易云音乐 | 登录引导页 | 是 | 每次打开登录引导页时 | [公共参数] |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 登录弹窗 | 否 | 二维码(qr_code_img) | - | 固定坑位 | 曝光 | 扫码图加载 | [公共参数] + load_time_ms is_success |
| 登录弹窗 | 否 | 确认成功(scan_success_view) | - | 固定坑位 | 曝光 | 手机确认成功 | [公共参数] |
| 自动登录引导 | 否 | 开启按钮(enable_btn) | - | 固定坑位 | 点击 | 自动登录确认 | [公共参数] |
| 自动登录引导 | 否 | 取消(cancel_btn) | - | 固定坑位 | 点击 | 点击取消 | [公共参数] |

---

### 4.6 个人中心页 (b: profile) - 页面

浏览事件：

| a | b | b浏览 | 触发时机 | 参数 |
|---|---|------|----------|------|
| 网易云音乐 | 个人中心页 | 是 | 每次打开个人中心页时 | [公共参数] |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 设置菜单 | 否 | 自动登录(auto_login_toggle) | - | 固定坑位 | 点击 | 切换自动登录 | [公共参数] + switch_state |
| 设置菜单 | 否 | 退出登录(logout_btn) | - | 固定坑位 | 点击 | 退出登录 | [公共参数] |
| 顶部导航 | 否 | 返回(back_btn) | - | 固定坑位 | 点击 | 返回首页 | [公共参数] + stay_duration_sec |

---

## 5. 变更记录

| 日期 | 版本 | 变更内容 | 变更人 |
|------|------|---------|-------|
| 2026-03-12 | v1.0 | 初始版本 - 网易云音乐HMI埋点设计 | - |
