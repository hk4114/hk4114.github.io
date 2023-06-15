---
title: 《面向 chatGPT 提示工程》笔记
category: 技术
date: 2023-5-23
vssue: true
---

## 缘起
写这篇文章的动机是学完《面向 chatGPT 提示工程》这门课之后，写了笔记再结合平时杂七杂八的一些文章，发现知识点非常零散，产出的的prompt不尽如人意。

首先我们需要知道一点：

会有哪些收获

![【ChatGPT】《面向开发者的ChatGPT提示工程》笔记](./PromptEngineering.png)

## 通用技巧

### OpenAI 官方出品，GPT-4 提示词的最佳实践指南
> https://mp.weixin.qq.com/s/KSdbJfKI6oZhJz6EvKdRRQ

该指南包含六种核心策略和相应的战术，包括编写清晰的指令、使用参考文本、将复杂任务分解为简单子任务、给予模型足够的时间进行推理、使用外部工具弥补模型的不足以及系统地测试变更等。

通过遵循这些最佳实践，用户可以更好地使用GPT模型并提高其效果和性能。

## 行业案例
### 市场营销
> [如何使用 ChatGPT 进行市场营销(持续更新中)](https://twitter.com/FinanceYF5/status/1660577238377717770)

1. 首先讲自己公司的情况描述清楚：公司名称/主营业务/团队构成/市场策略/收入来源/企业目标
2. 创建社交媒体内容计划 Prompt：对于我的 [产品/服务] 在 [我的社交媒体平台] 上针对 [我的目标受众]，使用 5-3-2 规则，创建一个为期 1 个月的社交媒体内容计划
3. 构建引人入胜的品牌故事 Prompt：使用 Hero's Journey 框架，帮助我为我的 [产品/服务] 创建一个强大的品牌故事
4. 构建吸引人的营销活动 Prompt：使用 Nir Eyal 的 Hooked Model 为我们的 [产品/服务] 制定详细的营销活动
5. 回复推文评论实现Twitter账户增长 Prompt：给我以下推文的 20 个 [有趣、权威、周到] 回复：[复制粘贴推文]
6. 优化你的落地页 Prompt：使用 5Cs 框架来指导我优化目标网页
7. 制作出色的信息图 Prompt：遵循 VISUAL 框架创建指南，帮助我为我的 [产品/服务] 设计信息图
8. 使用增长飞轮活动实现持续增长 Prompt：为我们的 [产品/服务] 制定一个增长飞轮营销活动，涵盖客户获取、保留、参与和洞察力，详细的策略和指标来衡量这个持续增长循环中的成功
9.  制作YouTube视频脚本 Prompt：使用 ABT 框架为我的 [产品/服务] 编写有关以下 [主题] 的 Youtube 视频脚本
10. 生成引人注目的头条新闻 Prompt：创建关于 {Insert Topic} 的 [#] 个标题，标题应该引人注目、有力且令人难忘
11. 创建成功的电子邮件活动 Prompt：使用客户价值旅程框架，为我的 [产品/服务] 创建电子邮件营销指南
12. 制定影响力营销策略 Prompt：对于我的 [产品/服务]，使用影响者营销的 4C（内容、可信度、影响力、成本效益）为我的影响者营销策略制定指南
13. 通过分步指南，以针对[目标关键字]优化网站的SEO

## ChatGPT的工作原理
> https://mp.weixin.qq.com/s/QOeL3Q9fsniyh4aEdpiWaA

这篇内容介绍了ChatGPT（一种大型语言模型）的工作原理。

ChatGPT通过分析数十亿个网页上的文本来预测下一个词的合理延续，并生成一个可能的词的排序列表。在选择下一个词时，模型可以采用高排名词或随机选择较低排名词的方法，以产生不同风格的文本。温度参数可以控制排名较低词被选中的频率。该文章还提到了使用简化版本的GPT-2模型，并给出了相关代码示例。

文章还讨论了如何通过分析语料库来计算字母和n-gram的概率，并以此生成更真实的文本。


### OpenAI联合创始人亲自上场科普GPT，让技术小白也能理解最强AI
> https://mp.weixin.qq.com/s/zmEGzm1cdXupNoqZ65h7yg

详细介绍了如何从GPT基础模型训练出ChatGPT助手模型，并解释了大型语言模型的内部原理和RLHF训练细节。

演讲中提到了预训练、有监督微调、奖励建模和强化学习等四个主要阶段，并介绍了标记化、Transformer神经网络架构等技术细节。这场演讲非常精彩，并推荐给所有关心大型语言模型的人。

## 推荐资源
- [ChatGPT-Shortcut](https://www.aishort.top/) [项目地址](https://github.com/rockbenben/ChatGPT-Shortcut) 整理汇总多种 ChatGPT 快捷指令，按照领域和功能分区，对提示词（Prompt）进行标签筛选、关键词搜索和一键复制。

## 参考资料
- [GPT-4 提示词的最佳实践指南](https://mp.weixin.qq.com/s/KSdbJfKI6oZhJz6EvKdRRQ)
- [ChatGPT的工作原理](https://mp.weixin.qq.com/s/QOeL3Q9fsniyh4aEdpiWaA)
- [OpenAI联合创始人亲自上场科普GPT，让技术小白也能理解最强AI](https://mp.weixin.qq.com/s/zmEGzm1cdXupNoqZ65h7yg)

