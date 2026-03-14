# SPM埋点方案文档

## 1. 需求概述

### 1.1 业务背景
无麦K歌（唱吧）HMI 车机版埋点设计，应用于座舱 HMI 屏。主要场景包括桌面入口、首页、热门歌星页、更多推荐页、歌曲列表页、播放器、调音弹窗、已点歌单弹窗、中途退出弹窗、结尾推荐弹层等。

### 1.2 涉及页面
| 页面 | 页面SPM | 说明 |
|------|---------|------|
| 桌面 | hmi_base.desktop | 桌面承载唱吧推荐卡片 |
| 首页 | karaoke.home | 无麦K歌主入口页面 |
| 热门歌星页 | karaoke.karaoke_singer | 按歌手分类浏览候选歌手 |
| 更多推荐页 | karaoke.karaoke_recommend | 按推荐主题浏览歌曲 |
| 歌曲列表页 | karaoke.karaoke_song_list | 展示歌曲列表 |
| 播放器 | karaoke.player | 全屏沉浸式播放器 |
| 调音弹窗 | karaoke.karaoke_tuning | 调节音量弹窗 |
| 已点歌单弹窗 | karaoke.karaoke_queue | 已点待唱歌曲列表 |
| 中途退出弹窗 | karaoke.karaoke_exit_confirm | 退出确认弹窗 |
| 结尾推荐弹层 | karaoke.karaoke_ending_recommend | 演唱结束推荐 |

---

## 2. SPM树形结构

```
a: HMI基础 (hmi_base)
│
└── b: 桌面 (desktop) - 页面
    └── c: 首页推荐卡片区域
        └── d: recommend_card (推荐卡片)
│
a: 无麦K歌 (karaoke)
│
├── b: 首页 (home) - 页面
│   ├── c: 语音推荐区
│   │   └── d: sug_btn (语音推荐按钮)
│   ├── c: 热门歌星区
│   │   ├── d: singer_entry (热门歌星入口)
│   │   └── d: singer_card (歌手卡片)
│   ├── c: 大家都爱唱区
│   │   ├── d: popular_entry (大家都爱唱入口)
│   │   └── d: hot_song_card (热门歌曲卡片)
│   └── c: 更多推荐区
│       ├── d: recommend_entry (更多推荐入口)
│       └── d: theme_card (推荐分类卡片)
│
├── b: 热门歌星页 (karaoke_singer) - 页面
│   ├── c: 顶部固定区域
│   │   └── d: back (返回按钮)
│   ├── c: 歌星分类导航
│   │   └── d: singer_tab (歌星分类Tab)
│   └── c: 歌手列表区
│       └── d: singer_card (歌手卡片)
│
├── b: 更多推荐页 (karaoke_recommend) - 页面
│   ├── c: 顶部固定区域
│   │   └── d: back (返回按钮)
│   ├── c: 推荐分类导航
│   │   └── d: theme_tab (推荐分类Tab)
│   └── c: 推荐歌曲列表
│       └── d: recommend_song_card (推荐歌曲卡片)
│
├── b: 歌曲列表页 (karaoke_song_list) - 页面
│   ├── c: 顶部固定区域
│   │   └── d: back (返回按钮)
│   └── c: 歌曲列表区
│       ├── d: song_card (歌曲卡片)
│       ├── d: sing_now_btn (直接唱按钮)
│       └── d: add_to_queue_btn (加入待唱按钮)
│
├── b: 播放器 (player) - 页面
│   ├── c: 演唱主舞台
│   │   ├── d: singing_stage (演唱区)
│   │   └── d: cheer_btn (手势喝彩按钮)
│   ├── c: 播放器控制区
│   │   ├── d: replay_btn (重唱按钮)
│   │   ├── d: media_play_pause (媒体播放暂停)
│   │   ├── d: next_btn (下一步按钮)
│   │   ├── d: tuning_btn (调音按钮)
│   │   ├── d: lead_vocal_btn (打开领唱按钮)
│   │   ├── d: queue_btn (已点歌单按钮)
│   │   ├── d: collapse_btn (收起按钮)
│   │   └── d: original_switch (原唱开关)
│   └── c: 高分惊喜区
│       └── d: high_score_effect (高分惊喜动效)
│
├── b: 调音弹窗 (karaoke_tuning) - 组件
│   ├── c: 弹窗关闭区
│   │   └── d: close_btn (关闭按钮)
│   └── c: 调音操作区
│       ├── d: mic_volume_slider (麦克风音量滑动条)
│       └── d: media_volume_slider (媒体音量滑动条)
│
├── b: 已点歌单弹窗 (karaoke_queue) - 组件
│   └── c: 已点歌单区
│       ├── d: queued_song_card (已点歌曲卡片)
│       ├── d: pin_top_btn (置顶按钮)
│       └── d: delete_btn (删除按钮)
│
├── b: 中途退出弹窗 (karaoke_exit_confirm) - 组件
│   └── c: 操作弹窗区
│       ├── d: exit_btn (退出按钮)
│       └── d: continue_btn (继续唱按钮)
│
└── b: 结尾推荐弹层 (karaoke_ending_recommend) - 组件
    └── c: 结尾推荐区
        ├── d: recommend_song_card (推荐歌曲卡片)
        ├── d: pick_first_btn (点第1个推荐词)
        └── d: refresh_batch (换一批按钮)
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
| reco_sug | array_string | 否 | 推荐sug词 | - |

### 3.2 事件特有参数
| 参数名 | 类型 | 说明 | 枚举值 |
|--------|------|------|--------|
| singer_id | string | 歌手ID | - |
| singer_name | string | 歌手名称 | - |
| song_id | string | 歌曲ID | - |
| song_name | string | 歌曲名称 | - |
| artist_name | string | 艺人名称 | - |
| theme_name | string | 主题名称 | - |
| category_name | string | 分类名称 | - |
| effect_type | string | 动效类型 | - |
| volume_level | number | 音量级别 | - |
| queue_index | number | 队列索引 | - |

---

## 4. 埋点清单

### 4.1 桌面 (b: desktop) - 页面

浏览事件：

| a | b | b浏览 | 触发时机 | 参数 |
|---|---|------|----------|------|
| HMI基础 | 桌面 | 是 | 每次打开桌面时 | [公共参数] |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 首页推荐卡片区域 | 否 | 推荐卡片(recommend_card) | - | 顺序坑位 | 点击+曝光 | 点击进入无麦K歌 | [公共参数] |

---

### 4.2 首页 (b: home) - 页面

浏览事件：

| a | b | b浏览 | 触发时机 | 参数 |
|---|---|------|----------|------|
| 无麦K歌 | 首页 | 是 | 每次打开首页时 | [公共参数] |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 语音推荐区 | 否 | 语音推荐按钮(sug_btn) | - | 固定坑位 | 点击+曝光 | 区块覆盖时触发 | [公共参数] + reco_sug |
| 热门歌星区 | 否 | 热门歌星入口(singer_entry) | - | 固定坑位 | 点击 | 点击进入热门歌星页 | [公共参数] +|
| 热门歌星区 | 否 | 歌手卡片(singer_card) | - | 顺序坑位 | 点击 | 区块覆盖时触发 | [公共参数] +singer_id singer_name |
| 大家都爱唱区 | 否 | 大家都爱唱入口(popular_entry) | - | 固定坑位 | 点击 | 点击进入大家都爱唱 | [公共参数] +|
| 大家都爱唱区 | 否 | 热门歌曲卡片(hot_song_card) | - | 顺序坑位 | 点击 | 区块覆盖时触发 | [公共参数] +song_id song_name artist_name |
| 更多推荐区 | 否 | 更多推荐入口(recommend_entry) | - | 固定坑位 | 点击 | 点击进入更多推荐 | [公共参数] +|
| 更多推荐区 | 否 | 推荐分类卡片(theme_card) | - | 顺序坑位 | 点击 | 区块覆盖时触发 | [公共参数] +theme_name |

---

### 4.3 热门歌星页 (b: karaoke_singer) - 页面

浏览事件：

| a | b | b浏览 | 触发时机 | 参数 |
|---|---|------|----------|------|
| 无麦K歌 | 热门歌星页 | 是 | 每次打开热门歌星页时 | [公共参数] |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 顶部固定区域 | 否 | 返回按钮(back) | - | 固定坑位 | 点击 | 点击返回 | [公共参数] |
| 歌星分类导航 | 否 | 歌星分类Tab(singer_tab) | - | 顺序坑位 | 点击 | 区块覆盖时触发 | [公共参数] category_name |
| 歌手列表区 | 否 | 歌手卡片(singer_card) | - | 顺序坑位 | 点击 | 区块覆盖时触发 | [公共参数] singer_id singer_name |

---

### 4.4 更多推荐页 (b: karaoke_recommend) - 页面

浏览事件：

| a | b | b浏览 | 触发时机 | 参数 |
|---|---|------|----------|------|
| 无麦K歌 | 更多推荐页 | 是 | 每次打开更多推荐页时 | [公共参数] |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 顶部固定区域 | 否 | 返回按钮(back) | - | 固定坑位 | 点击 | 点击返回 | [公共参数] |
| 推荐分类导航 | 否 | 推荐分类Tab(theme_tab) | - | 顺序坑位 | 点击 | 区块覆盖时触发 | [公共参数] theme_name |
| 推荐歌曲列表 | 否 | 推荐歌曲卡片(recommend_song_card) | - | 顺序坑位 | 点击 | 区块覆盖时触发 | [公共参数] song_id song_name artist_name |

---

### 4.5 歌曲列表页 (b: karaoke_song_list) - 页面

浏览事件：

| a | b | b浏览 | 触发时机 | 参数 |
|---|---|------|----------|------|
| 无麦K歌 | 歌曲列表页 | 是 | 每次打开歌曲列表页时 | [公共参数] |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 顶部固定区域 | 否 | 返回按钮(back) | - | 固定坑位 | 点击 | 点击返回 | [公共参数] |
| 歌曲列表区 | 否 | 歌曲卡片(song_card) | - | 顺序坑位 | 点击 | 区块覆盖时触发 | [公共参数] song_id song_name artist_name |
| 歌曲列表区 | 否 | 直接唱按钮(sing_now_btn) | - | 顺序坑位 | 点击 | 点击直接唱 | [公共参数] song_id song_name artist_name |
| 歌曲列表区 | 否 | 加入待唱按钮(add_to_queue_btn) | - | 顺序坑位 | 点击 | 点击加入待唱 | [公共参数] song_id song_name artist_name |

---

### 4.6 播放器 (b: player) - 页面

浏览事件：

| a | b | b浏览 | 触发时机 | 参数 |
|---|---|------|----------|------|
| 无麦K歌 | 播放器 | 是 | 每次打开播放器时 | [公共参数] |

曝光点击事件：

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 演唱主舞台 | 否 | 演唱区(singing_stage) | - | 固定坑位 | 曝光 | 区块覆盖时触发 | [公共参数] +song_id song_name artist_name effect_type |
| 演唱主舞台 | 否 | 手势喝彩按钮(cheer_btn) | - | 固定坑位 | 点击 | 点击手势喝彩 | [公共参数] song_id song_name artist_name effect_type |
| 播放器控制区 | 否 | 重唱按钮(replay_btn) | - | 固定坑位 | 点击 | 点击重唱 | [公共参数] song_id song_name artist_name |
| 播放器控制区 | 否 | 媒体播放暂停(media_play_pause) | - | 固定坑位 | 点击 | 点击播放/暂停 | [公共参数] song_id song_name artist_name |
| 播放器控制区 | 否 | 下一步按钮(next_btn) | - | 固定坑位 | 点击 | 点击下一步 | [公共参数] song_id song_name artist_name |
| 播放器控制区 | 否 | 调音按钮(tuning_btn) | - | 固定坑位 | 点击 | 点击调音 | [公共参数] song_id song_name artist_name |
| 播放器控制区 | 否 | 打开领唱按钮(lead_vocal_btn) | - | 固定坑位 | 点击 | 点击打开领唱 | [公共参数] song_id song_name artist_name |
| 播放器控制区 | 否 | 已点歌单按钮(queue_btn) | - | 固定坑位 | 点击 | 点击查看已点 | [公共参数] song_id song_name artist_name |
| 播放器控制区 | 否 | 收起按钮(collapse_btn) | - | 固定坑位 | 点击 | 点击收起 | [公共参数] song_id song_name artist_name |
| 播放器控制区 | 否 | 原唱开关(original_switch) | - | 固定坑位 | 点击 | 点击切换原唱 | [公共参数] song_id song_name artist_name |
| 高分惊喜区 | 否 | 高分惊喜动效(high_score_effect) | - | 固定坑位 | 曝光 | 区块覆盖时触发 | [公共参数] +song_id song_name artist_name effect_type |

---

### 4.7 调音弹窗 (b: karaoke_tuning) - 组件

浏览事件：无

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 弹窗关闭区 | 否 | 关闭按钮(close_btn) | - | 固定坑位 | 点击 | 点击关闭 | [公共参数] |
| 调音操作区 | 否 | 麦克风音量滑动条(mic_volume_slider) | - | 固定坑位 | 点击 | 滑动麦克风音量 | [公共参数] |
| 调音操作区 | 否 | 媒体音量滑动条(media_volume_slider) | - | 固定坑位 | 点击 | 滑动媒体音量 | [公共参数] volume_level |

---

### 4.8 已点歌单弹窗 (b: karaoke_queue) - 组件

浏览事件：无

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 已点歌单区 | 否 | 已点歌曲卡片(queued_song_card) | - | 顺序坑位 | 点击 | 区块覆盖时触发 | [公共参数] song_id song_name artist_name queue_index |
| 已点歌单区 | 否 | 置顶按钮(pin_top_btn) | - | 顺序坑位 | 点击 | 点击置顶 | [公共参数] song_id song_name artist_name queue_index |
| 已点歌单区 | 否 | 删除按钮(delete_btn) | - | 顺序坑位 | 点击 | 点击删除 | [公共参数] song_id song_name artist_name queue_index |

---

### 4.9 中途退出弹窗 (b: karaoke_exit_confirm) - 组件

浏览事件：无

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 操作弹窗区 | 否 | 退出按钮(exit_btn) | - | 固定坑位 | 点击 | 点击退出 | [公共参数] song_id song_name artist_name |
| 操作弹窗区 | 否 | 继续唱按钮(continue_btn) | - | 固定坑位 | 点击 | 点击继续唱 | [公共参数] song_id song_name artist_name |

---

### 4.10 结尾推荐弹层 (b: karaoke_ending_recommend) - 组件

浏览事件：无

| c | c曝光 | d | d截图 | d坑位类型 | d事件类型 | 触发时机 | 参数 |
|---|-------|---|-----|----------|----------|----------|------|
| 结尾推荐区 | 否 | 推荐歌曲卡片(recommend_song_card) | - | 顺序坑位 | 点击 | 区块覆盖时触发 | [公共参数] song_id song_name artist_name theme_name |
| 结尾推荐区 | 否 | 点第1个推荐词(pick_first_btn) | - | 固定坑位 | 点击 | 点击推荐词 | [公共参数] reco_sug song_id song_name artist_name |
| 结尾推荐区 | 否 | 换一批按钮(refresh_batch) | - | 固定坑位 | 点击 | 点击换一批 | [公共参数] theme_name |

---

## 5. 变更记录

| 日期 | 版本 | 变更内容 | 变更人 |
|------|------|---------|-------|
| 2026-03-12 | v1.0 | 初始版本 - 无麦K歌HMI埋点设计 | - |
