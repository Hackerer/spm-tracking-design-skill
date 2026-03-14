# 埋点方案审查报告

- 需求名称：Robotaxi 无麦K歌
- 审查摘要：自动审查完成，共发现 2 条问题或提示。

## 审查结果

| 级别 | 规则 | 目标类型 | 目标 | 问题 | 建议 |
| --- | --- | --- | --- | --- | --- |
| warning | CATALOG_MANUAL_REVIEW_REQUIRED | tracking_spec | d:语音推荐词按钮/suggestion_btn | 坑位D定义与现有目录冲突，命中已有项 推荐词按钮/suggestion_btn。 | 请人工确认是否复用已有主数据，或对新命名进行统一调整。 |
| warning | CATALOG_MANUAL_REVIEW_REQUIRED | tracking_spec | d:语义推荐词按钮/suggestion_btn | 坑位D定义与现有目录冲突，命中已有项 推荐词按钮/suggestion_btn。 | 请人工确认是否复用已有主数据，或对新命名进行统一调整。 |
