# SPM埋点方案文档

## 1. 需求概览

### 1.1 需求名称

Robotaxi 无麦K歌

### 1.2 需求摘要

无麦K歌是 Robotaxi 座舱娱乐能力之一，通过桌面唱吧磁贴进入，以无麦方案提供沉浸式 KTV 体验。用户可以通过语音引导、热门歌星、大家都爱唱和更多推荐等方式选歌，进入全屏播放器后完成演唱、喝彩、调音、切歌和待唱管理。需求同时覆盖桌面入口联动、账号透传、无麦扩声、点歌台、歌曲列表、播放器、中途退出和结尾推荐等核心场景。

### 1.3 涉及页面

| 页面中文 | 页面英文 | 说明 |
| --- | --- | --- |
| 桌面 | desktop | Robotaxi 桌面承载唱吧磁贴卡片，用户从桌面进入无麦K歌。 |
| 首页 | home | 无麦K歌主入口页面，提供语音引导、热门歌星、大家都爱唱和更多推荐。 |
| 热门歌星页 | karaoke_singer | 按歌手分类浏览候选歌手并进入歌曲列表。 |
| 更多推荐页 | karaoke_recommend | 按推荐主题浏览歌曲的选歌页面。 |
| 歌曲列表页 | karaoke_song_list | 展示某位歌手或某个推荐主题下的歌曲列表。 |
| 播放器 | player | 无麦K歌全屏沉浸式播放器。 |
| 调音弹窗 | karaoke_tuning | 调节麦克风音量和媒体音量的弹窗。 |
| 已点歌单弹窗 | karaoke_queue | 展示已点待唱歌曲列表，支持置顶和删除。 |
| 中途退出弹窗 | karaoke_exit_confirm | 用户演唱中退出时的确认弹窗。 |
| 结尾推荐弹层 | karaoke_ending_recommend | 演唱结束后展示推荐歌曲和快捷推荐词。 |

## 2. 整体SPM树形结构

```text
A: 桌面 / desktop
└── B: desktop
    └── C: 首页推荐卡片区域 / home_recommend
        └── D: karaoke_card
A: K歌 / karaoke
├── B: 首页 / home
    ├── C: 语音推荐区 / voice_suggestion
        └── D: sug_btn
    ├── C: 热门歌星区 / singer_section
        ├── D: 热门歌星入口 / singer_entry
        └── D: 歌手卡片 / singer_card
    ├── C: 大家都爱唱区 / popular_section
        ├── D: 大家都爱唱入口 / popular_entry
        └── D: 热门歌曲卡片 / hot_song_card
    └── C: 更多推荐区 / recommendation_section
        ├── D: 更多推荐入口 / recommend_entry
        └── D: 推荐分类卡片 / theme_card
├── B: 热门歌星页 / karaoke_singer
    ├── C: 顶部固定区域 / fixed_top
        └── D: 返回按钮 / back
    ├── C: 歌星分类导航 / singer_tabs
        └── D: 歌星分类Tab / singer_tab
    └── C: 歌手列表区 / singer_list
        └── D: 歌手卡片 / singer_card
├── B: 更多推荐页 / karaoke_recommend
    ├── C: 顶部固定区域 / fixed_top
        └── D: 返回按钮 / back
    ├── C: 推荐分类导航 / recommendation_tabs
        └── D: 推荐分类Tab / theme_tab
    └── C: 推荐歌曲列表 / recommendation_list
        └── D: 推荐歌曲卡片 / recommend_song_card
├── B: 歌曲列表页 / karaoke_song_list
    ├── C: 顶部固定区域 / fixed_top
        └── D: 返回按钮 / back
    └── C: 歌曲列表区 / song_list
        ├── D: 歌曲卡片 / song_card
        ├── D: 直接唱按钮 / sing_now_btn
        └── D: 加入待唱按钮 / add_to_queue_btn
├── B: 播放器 / player
    ├── C: 演唱主舞台 / player_stage
        ├── D: 演唱区 / singing_stage
        └── D: 手势喝彩按钮 / cheer_btn
    ├── C: 播放器控制区 / player_controls
        ├── D: 重唱按钮 / replay_btn
        ├── D: 媒体播放暂停 / media_play_pause
        ├── D: 下一步按钮 / next_btn
        ├── D: 调音按钮 / tuning_btn
        ├── D: 打开领唱按钮 / lead_vocal_btn
        ├── D: 已点歌单按钮 / queue_btn
        ├── D: 收起按钮 / collapse_btn
        └── D: 原唱开关 / original_switch
    └── C: 高分惊喜区 / player_effect
        └── D: 高分惊喜动效 / high_score_effect
├── B: 调音弹窗 / karaoke_tuning
    ├── C: 弹窗关闭区 / modal_close
        └── D: 关闭按钮 / close_btn
    └── C: 调音操作区 / tuning_panel
        ├── D: 麦克风音量滑动条 / mic_volume_slider
        └── D: 媒体音量滑动条 / media_volume_slider
├── B: 已点歌单弹窗 / karaoke_queue
    └── C: 已点歌单区 / queue_list
        ├── D: 已点歌曲卡片 / queued_song_card
        ├── D: 置顶按钮 / pin_top_btn
        └── D: 删除按钮 / delete_btn
├── B: 中途退出弹窗 / karaoke_exit_confirm
    └── C: 操作弹窗区 / modal_actions
        ├── D: 退出按钮 / exit_btn
        └── D: 继续唱按钮 / continue_btn
└── B: 结尾推荐弹层 / karaoke_ending_recommend
    └── C: 结尾推荐区 / ending_recommend
        ├── D: 推荐歌曲卡片 / recommend_song_card
        ├── D: 点第1个推荐词 / pick_first_btn
        └── D: 换一批按钮 / refresh_batch
```

## 3. 分页面埋点方案

### 桌面 / desktop

- 页面说明: Robotaxi 桌面承载唱吧磁贴卡片，用户从桌面进入无麦K歌。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 首页推荐卡片区域 / home_recommend | karaoke_card | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 首页推荐卡片区域 / home_recommend | - | 区块曝光 | desktop.desktop.home_recommend | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 首页推荐卡片区域 / home_recommend | karaoke_card | 坑位点击 | desktop.desktop.home_recommend.karaoke_card | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填) |

### 首页 / home

- 页面说明: 无麦K歌主入口页面，提供语音引导、热门歌星、大家都爱唱和更多推荐。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 语音推荐区 / voice_suggestion | sug_btn | 固定坑位 | none | 是 | 区块覆盖 | 点击 | - |
| 热门歌星区 / singer_section | 热门歌星入口 / singer_entry | 固定坑位 | none | 是 | 不需要 | 点击 | - |
| 热门歌星区 / singer_section | 歌手卡片 / singer_card | 顺序坑位 | level_1 | 是 | 区块覆盖 | 点击 | - |
| 大家都爱唱区 / popular_section | 大家都爱唱入口 / popular_entry | 固定坑位 | none | 是 | 不需要 | 点击 | - |
| 大家都爱唱区 / popular_section | 热门歌曲卡片 / hot_song_card | 顺序坑位 | level_1 | 是 | 区块覆盖 | 点击 | - |
| 更多推荐区 / recommendation_section | 更多推荐入口 / recommend_entry | 固定坑位 | none | 是 | 不需要 | 点击 | - |
| 更多推荐区 / recommendation_section | 推荐分类卡片 / theme_card | 顺序坑位 | level_1 | 是 | 区块覆盖 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 语音推荐区 / voice_suggestion | - | 区块曝光 | karaoke.home.voice_suggestion | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 语音推荐区 / voice_suggestion | sug_btn | 坑位点击 | karaoke.home.voice_suggestion.sug_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填) |
| 热门歌星区 / singer_section | - | 区块曝光 | karaoke.home.singer_section | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>singer_id(string, 必填)<br/>singer_name(string, 选填) |
| 热门歌星区 / singer_section | 热门歌星入口 / singer_entry | 坑位点击 | karaoke.home.singer_section.singer_entry | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填) |
| 热门歌星区 / singer_section | 歌手卡片 / singer_card | 坑位点击 | karaoke.home.singer_section.singer_card | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>singer_id(string, 必填)<br/>singer_name(string, 选填) |
| 大家都爱唱区 / popular_section | - | 区块曝光 | karaoke.home.popular_section | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 大家都爱唱区 / popular_section | 大家都爱唱入口 / popular_entry | 坑位点击 | karaoke.home.popular_section.popular_entry | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填) |
| 大家都爱唱区 / popular_section | 热门歌曲卡片 / hot_song_card | 坑位点击 | karaoke.home.popular_section.hot_song_card | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 更多推荐区 / recommendation_section | - | 区块曝光 | karaoke.home.recommendation_section | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>theme_name(string, 必填) |
| 更多推荐区 / recommendation_section | 更多推荐入口 / recommend_entry | 坑位点击 | karaoke.home.recommendation_section.recommend_entry | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填) |
| 更多推荐区 / recommendation_section | 推荐分类卡片 / theme_card | 坑位点击 | karaoke.home.recommendation_section.theme_card | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>theme_name(string, 必填) |

### 热门歌星页 / karaoke_singer

- 页面说明: 按歌手分类浏览候选歌手并进入歌曲列表。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 顶部固定区域 / fixed_top | 返回按钮 / back | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 歌星分类导航 / singer_tabs | 歌星分类Tab / singer_tab | 顺序坑位 | level_1 | 是 | 区块覆盖 | 点击 | - |
| 歌手列表区 / singer_list | 歌手卡片 / singer_card | 顺序坑位 | level_1 | 是 | 区块覆盖 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 顶部固定区域 / fixed_top | 返回按钮 / back | 坑位点击 | karaoke.karaoke_singer.fixed_top.back | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填) |
| 歌星分类导航 / singer_tabs | - | 区块曝光 | karaoke.karaoke_singer.singer_tabs | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>category_name(string, 必填) |
| 歌星分类导航 / singer_tabs | 歌星分类Tab / singer_tab | 坑位点击 | karaoke.karaoke_singer.singer_tabs.singer_tab | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>category_name(string, 必填) |
| 歌手列表区 / singer_list | - | 区块曝光 | karaoke.karaoke_singer.singer_list | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>singer_id(string, 必填)<br/>singer_name(string, 选填) |
| 歌手列表区 / singer_list | 歌手卡片 / singer_card | 坑位点击 | karaoke.karaoke_singer.singer_list.singer_card | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>singer_id(string, 必填)<br/>singer_name(string, 选填) |

### 更多推荐页 / karaoke_recommend

- 页面说明: 按推荐主题浏览歌曲的选歌页面。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 顶部固定区域 / fixed_top | 返回按钮 / back | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 推荐分类导航 / recommendation_tabs | 推荐分类Tab / theme_tab | 顺序坑位 | level_1 | 是 | 区块覆盖 | 点击 | - |
| 推荐歌曲列表 / recommendation_list | 推荐歌曲卡片 / recommend_song_card | 顺序坑位 | level_1 | 是 | 区块覆盖 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 顶部固定区域 / fixed_top | 返回按钮 / back | 坑位点击 | karaoke.karaoke_recommend.fixed_top.back | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填) |
| 推荐分类导航 / recommendation_tabs | - | 区块曝光 | karaoke.karaoke_recommend.recommendation_tabs | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>theme_name(string, 必填) |
| 推荐分类导航 / recommendation_tabs | 推荐分类Tab / theme_tab | 坑位点击 | karaoke.karaoke_recommend.recommendation_tabs.theme_tab | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>theme_name(string, 必填) |
| 推荐歌曲列表 / recommendation_list | - | 区块曝光 | karaoke.karaoke_recommend.recommendation_list | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 推荐歌曲列表 / recommendation_list | 推荐歌曲卡片 / recommend_song_card | 坑位点击 | karaoke.karaoke_recommend.recommendation_list.recommend_song_card | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |

### 歌曲列表页 / karaoke_song_list

- 页面说明: 展示某位歌手或某个推荐主题下的歌曲列表。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 顶部固定区域 / fixed_top | 返回按钮 / back | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 歌曲列表区 / song_list | 歌曲卡片 / song_card | 顺序坑位 | level_1 | 是 | 区块覆盖 | 点击 | - |
| 歌曲列表区 / song_list | 直接唱按钮 / sing_now_btn | 顺序坑位 | level_1 | 是 | 不需要 | 点击 | - |
| 歌曲列表区 / song_list | 加入待唱按钮 / add_to_queue_btn | 顺序坑位 | level_1 | 是 | 不需要 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 顶部固定区域 / fixed_top | 返回按钮 / back | 坑位点击 | karaoke.karaoke_song_list.fixed_top.back | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填) |
| 歌曲列表区 / song_list | - | 区块曝光 | karaoke.karaoke_song_list.song_list | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 歌曲列表区 / song_list | 歌曲卡片 / song_card | 坑位点击 | karaoke.karaoke_song_list.song_list.song_card | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 歌曲列表区 / song_list | 直接唱按钮 / sing_now_btn | 坑位点击 | karaoke.karaoke_song_list.song_list.sing_now_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 歌曲列表区 / song_list | 加入待唱按钮 / add_to_queue_btn | 坑位点击 | karaoke.karaoke_song_list.song_list.add_to_queue_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |

### 播放器 / player

- 页面说明: 无麦K歌全屏沉浸式播放器。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 演唱主舞台 / player_stage | 演唱区 / singing_stage | 固定坑位 | none | 是 | 区块覆盖 | - | - |
| 演唱主舞台 / player_stage | 手势喝彩按钮 / cheer_btn | 固定坑位 | none | 是 | 不需要 | 点击 | - |
| 播放器控制区 / player_controls | 重唱按钮 / replay_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 播放器控制区 / player_controls | 媒体播放暂停 / media_play_pause | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 播放器控制区 / player_controls | 下一步按钮 / next_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 播放器控制区 / player_controls | 调音按钮 / tuning_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 播放器控制区 / player_controls | 打开领唱按钮 / lead_vocal_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 播放器控制区 / player_controls | 已点歌单按钮 / queue_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 播放器控制区 / player_controls | 收起按钮 / collapse_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 播放器控制区 / player_controls | 原唱开关 / original_switch | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 高分惊喜区 / player_effect | 高分惊喜动效 / high_score_effect | 固定坑位 | none | 是 | 区块覆盖 | - | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 演唱主舞台 / player_stage | - | 区块曝光 | karaoke.player.player_stage | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填)<br/>effect_type(string, 必填) |
| 演唱主舞台 / player_stage | 手势喝彩按钮 / cheer_btn | 坑位点击 | karaoke.player.player_stage.cheer_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填)<br/>effect_type(string, 必填) |
| 播放器控制区 / player_controls | 重唱按钮 / replay_btn | 坑位点击 | karaoke.player.player_controls.replay_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 播放器控制区 / player_controls | 媒体播放暂停 / media_play_pause | 坑位点击 | karaoke.player.player_controls.media_play_pause | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 播放器控制区 / player_controls | 下一步按钮 / next_btn | 坑位点击 | karaoke.player.player_controls.next_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 播放器控制区 / player_controls | 调音按钮 / tuning_btn | 坑位点击 | karaoke.player.player_controls.tuning_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 播放器控制区 / player_controls | 打开领唱按钮 / lead_vocal_btn | 坑位点击 | karaoke.player.player_controls.lead_vocal_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 播放器控制区 / player_controls | 已点歌单按钮 / queue_btn | 坑位点击 | karaoke.player.player_controls.queue_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 播放器控制区 / player_controls | 收起按钮 / collapse_btn | 坑位点击 | karaoke.player.player_controls.collapse_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 播放器控制区 / player_controls | 原唱开关 / original_switch | 坑位点击 | karaoke.player.player_controls.original_switch | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 高分惊喜区 / player_effect | - | 区块曝光 | karaoke.player.player_effect | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填)<br/>effect_type(string, 必填) |

### 调音弹窗 / karaoke_tuning

- 页面说明: 调节麦克风音量和媒体音量的弹窗。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 弹窗关闭区 / modal_close | 关闭按钮 / close_btn | 固定坑位 | none | 否 | 不需要 | 点击 | - |
| 调音操作区 / tuning_panel | 麦克风音量滑动条 / mic_volume_slider | 固定坑位 | none | 是 | 不需要 | 点击 | - |
| 调音操作区 / tuning_panel | 媒体音量滑动条 / media_volume_slider | 固定坑位 | none | 是 | 不需要 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 弹窗关闭区 / modal_close | 关闭按钮 / close_btn | 坑位点击 | karaoke.karaoke_tuning.modal_close.close_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填) |
| 调音操作区 / tuning_panel | - | 区块曝光 | karaoke.karaoke_tuning.tuning_panel | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填) |
| 调音操作区 / tuning_panel | 麦克风音量滑动条 / mic_volume_slider | 坑位点击 | karaoke.karaoke_tuning.tuning_panel.mic_volume_slider | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填) |
| 调音操作区 / tuning_panel | 媒体音量滑动条 / media_volume_slider | 坑位点击 | karaoke.karaoke_tuning.tuning_panel.media_volume_slider | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>volume_level(number, 选填) |

### 已点歌单弹窗 / karaoke_queue

- 页面说明: 展示已点待唱歌曲列表，支持置顶和删除。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 已点歌单区 / queue_list | 已点歌曲卡片 / queued_song_card | 顺序坑位 | level_1 | 是 | 区块覆盖 | 点击 | - |
| 已点歌单区 / queue_list | 置顶按钮 / pin_top_btn | 顺序坑位 | level_1 | 是 | 不需要 | 点击 | - |
| 已点歌单区 / queue_list | 删除按钮 / delete_btn | 顺序坑位 | level_1 | 是 | 不需要 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 已点歌单区 / queue_list | - | 区块曝光 | karaoke.karaoke_queue.queue_list | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填)<br/>queue_index(number, 选填) |
| 已点歌单区 / queue_list | 已点歌曲卡片 / queued_song_card | 坑位点击 | karaoke.karaoke_queue.queue_list.queued_song_card | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填)<br/>queue_index(number, 选填) |
| 已点歌单区 / queue_list | 置顶按钮 / pin_top_btn | 坑位点击 | karaoke.karaoke_queue.queue_list.pin_top_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填)<br/>queue_index(number, 选填) |
| 已点歌单区 / queue_list | 删除按钮 / delete_btn | 坑位点击 | karaoke.karaoke_queue.queue_list.delete_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填)<br/>queue_index(number, 选填) |

### 中途退出弹窗 / karaoke_exit_confirm

- 页面说明: 用户演唱中退出时的确认弹窗。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 操作弹窗区 / modal_actions | 退出按钮 / exit_btn | 固定坑位 | none | 是 | 不需要 | 点击 | - |
| 操作弹窗区 / modal_actions | 继续唱按钮 / continue_btn | 固定坑位 | none | 是 | 不需要 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 操作弹窗区 / modal_actions | - | 区块曝光 | karaoke.karaoke_exit_confirm.modal_actions | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 操作弹窗区 / modal_actions | 退出按钮 / exit_btn | 坑位点击 | karaoke.karaoke_exit_confirm.modal_actions.exit_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 操作弹窗区 / modal_actions | 继续唱按钮 / continue_btn | 坑位点击 | karaoke.karaoke_exit_confirm.modal_actions.continue_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |

### 结尾推荐弹层 / karaoke_ending_recommend

- 页面说明: 演唱结束后展示推荐歌曲和快捷推荐词。

#### 录入单元

| C | D | 坑位类型 | 顺序层级 | C曝光 | 曝光策略 | D点击 | biz_type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 结尾推荐区 / ending_recommend | 推荐歌曲卡片 / recommend_song_card | 顺序坑位 | level_1 | 是 | 区块覆盖 | 点击 | - |
| 结尾推荐区 / ending_recommend | 点第1个推荐词 / pick_first_btn | 固定坑位 | none | 是 | 不需要 | 点击 | - |
| 结尾推荐区 / ending_recommend | 换一批按钮 / refresh_batch | 固定坑位 | none | 是 | 不需要 | 点击 | - |

#### 事件与参数

| C | D | 事件 | target_spm | 参数 |
| --- | --- | --- | --- | --- |
| 结尾推荐区 / ending_recommend | - | 区块曝光 | karaoke.karaoke_ending_recommend.ending_recommend | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填)<br/>theme_name(string, 必填) |
| 结尾推荐区 / ending_recommend | 推荐歌曲卡片 / recommend_song_card | 坑位点击 | karaoke.karaoke_ending_recommend.ending_recommend.recommend_song_card | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 结尾推荐区 / ending_recommend | 点第1个推荐词 / pick_first_btn | 坑位点击 | karaoke.karaoke_ending_recommend.ending_recommend.pick_first_btn | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>reco_sug(array_string, 选填)<br/>song_id(string, 必填)<br/>song_name(string, 选填)<br/>artist_name(string, 选填) |
| 结尾推荐区 / ending_recommend | 换一批按钮 / refresh_batch | 坑位点击 | karaoke.karaoke_ending_recommend.ending_recommend.refresh_batch | user_pin(string, 必填)<br/>order_id(string, 必填)<br/>vid(string, 必填)<br/>car_city(string, 必填)<br/>env(string, 必填)<br/>click_type(string, 必填)<br/>theme_name(string, 必填) |


## 4. 主数据沉淀建议

| 类型 | 中文名 | 英文名 | 状态 | 原因 |
| --- | --- | --- | --- | --- |
| c | 应用磁贴区 | desktop_tiles | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 唱吧磁贴卡片 | karaoke_tile | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 语音推荐词按钮 | suggestion_btn | need_manual_review | 坑位D定义与现有目录冲突，命中已有项 推荐词按钮/suggestion_btn。 |
| c | 热门歌星区 | singer_section | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 热门歌星入口 | singer_entry | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 歌手卡片 | singer_card | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| param | 歌手ID | singer_id | new_candidate | 需求中出现新的参数定义，需要纳入参数主数据目录。 |
| param | 歌手名 | singer_name | new_candidate | 需求中出现新的参数定义，需要纳入参数主数据目录。 |
| c | 大家都爱唱区 | popular_section | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 大家都爱唱入口 | popular_entry | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 热门歌曲卡片 | hot_song_card | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| param | 歌曲ID | song_id | new_candidate | 需求中出现新的参数定义，需要纳入参数主数据目录。 |
| param | 歌曲名 | song_name | new_candidate | 需求中出现新的参数定义，需要纳入参数主数据目录。 |
| param | 演唱者名 | artist_name | new_candidate | 需求中出现新的参数定义，需要纳入参数主数据目录。 |
| c | 更多推荐区 | recommendation_section | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 更多推荐入口 | recommend_entry | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 推荐分类卡片 | theme_card | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| param | 推荐主题 | theme_name | new_candidate | 需求中出现新的参数定义，需要纳入参数主数据目录。 |
| b | 热门歌星页 | karaoke_singer | new_candidate | 需求中出现新的页面B定义，需要纳入主数据目录。 |
| c | 歌星分类导航 | singer_tabs | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 歌星分类Tab | singer_tab | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| param | 分类名 | category_name | new_candidate | 需求中出现新的参数定义，需要纳入参数主数据目录。 |
| c | 歌手列表区 | singer_list | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| b | 更多推荐页 | karaoke_recommend | new_candidate | 需求中出现新的页面B定义，需要纳入主数据目录。 |
| c | 推荐分类导航 | recommendation_tabs | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 推荐分类Tab | theme_tab | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| c | 推荐歌曲列表 | recommendation_list | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 推荐歌曲卡片 | recommend_song_card | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| b | 歌曲列表页 | karaoke_song_list | new_candidate | 需求中出现新的页面B定义，需要纳入主数据目录。 |
| c | 歌曲列表区 | song_list | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 歌曲卡片 | song_card | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 直接唱按钮 | sing_now_btn | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 加入待唱按钮 | add_to_queue_btn | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| b | 播放器 | player | new_candidate | 需求中出现新的页面B定义，需要纳入主数据目录。 |
| c | 演唱主舞台 | player_stage | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 演唱区 | singing_stage | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 手势喝彩按钮 | cheer_btn | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| param | 动效类型 | effect_type | new_candidate | 需求中出现新的参数定义，需要纳入参数主数据目录。 |
| c | 播放器控制区 | player_controls | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 重唱按钮 | replay_btn | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 调音按钮 | tuning_btn | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 打开领唱按钮 | lead_vocal_btn | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 已点歌单按钮 | queue_btn | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 收起按钮 | collapse_btn | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 原唱开关 | original_switch | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| c | 高分惊喜区 | player_effect | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 高分惊喜动效 | high_score_effect | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| b | 调音弹窗 | karaoke_tuning | new_candidate | 需求中出现新的页面B定义，需要纳入主数据目录。 |
| c | 调音操作区 | tuning_panel | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 麦克风音量滑动条 | mic_volume_slider | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| b | 已点歌单弹窗 | karaoke_queue | new_candidate | 需求中出现新的页面B定义，需要纳入主数据目录。 |
| c | 已点歌单区 | queue_list | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 已点歌曲卡片 | queued_song_card | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| param | 待唱顺位 | queue_index | new_candidate | 需求中出现新的参数定义，需要纳入参数主数据目录。 |
| d | 置顶按钮 | pin_top_btn | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| d | 删除按钮 | delete_btn | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| b | 中途退出弹窗 | karaoke_exit_confirm | new_candidate | 需求中出现新的页面B定义，需要纳入主数据目录。 |
| d | 继续唱按钮 | continue_btn | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
| b | 结尾推荐弹层 | karaoke_ending_recommend | new_candidate | 需求中出现新的页面B定义，需要纳入主数据目录。 |
| c | 结尾推荐区 | ending_recommend | new_candidate | 需求中出现新的区块C定义，需要纳入主数据目录。 |
| d | 点第1个推荐词 | pick_first_btn | new_candidate | 需求中出现新的坑位D定义，需要纳入主数据目录。 |
