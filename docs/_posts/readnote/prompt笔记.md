---
title: 《面向 chatGPT 提示工程》笔记
category: 技术
date: 2023-5-23
vssue: true
---

## 缘起
学完[《面向 chatGPT 提示工程》](https://learn.deeplearning.ai/chatgpt-prompt-eng)这门课之后，写了笔记再结合平时学到的一些技巧，在实际使用的过程中发现知识点非常零散，产出的的prompt 不尽如人意，所以想整合到一起形成较为高效的 prompt 方法论。

后续看到 [OpenAI 官方出品提示词最佳实践指南](https://platform.openai.com/docs/guides/gpt-best-practices) 看了下里面的内容发现和课程内容一模一样。大为震惊，md 等等党天下无敌。不过有些实战内容可以在课程里面直接体验，感兴趣的朋友可以去体验。

阅读本文的收获：
- [tips] prompt 指导手册 
- [tips] 场景 prompt 套路
- [principle] ChatGPT 工作原理

![【ChatGPT】《面向开发者的ChatGPT提示工程》笔记](./prompt/PromptEngineering.png)

## 编写清晰明确的指示

尽可能明确地表达需要模型执行的操作。提供的背景信息越多越能生成理想答案。

具体到执行层面：

### 策略1: 使用分隔符清晰表示输入的不同部分

通过分隔符，告诉模型哪个部分是需要被处理。

:::tip prompt
"""
You should express what you want a model to do by \ 
providing instructions that are as clear and \ 
specific as you can possibly make them. \ 
This will guide the model towards the desired output, \ 
and reduce the chances of receiving irrelevant \ 
or incorrect responses. Don't confuse writing a \ 
clear prompt with writing a short prompt. \ 
In many cases, longer prompts provide more clarity \ 
and context for the model, which can lead to \ 
more detailed and relevant outputs.
"""
第一步：将由三重引号分隔的文本翻译成中文
第二步：将翻译出来的文本总结成字数不超过20个中文字数的句子
:::

![策略1](./prompt/strategy1.png)

### 策略2：要求结构化输出(HTML 或 JSON 格式)

结构化输出可以让解析模型输出内容的过程更容易，方便Python等语言的读入和处理。

:::tip prompt
"""
生成三个虚构的书名及其作者和类型的列表，并以JSON格式提供以下key：book_id、title、author、genre。
:::

![策略2](./prompt/strategy2.png)

### 策略3：让模型验证条件是否被满足
1. 要求模型首先需检查这些条件，如果不满足，则应指示其停止继续尝试。
2. 考虑潜在的边界情况，以避免产生意外的错误或结果。

这么做的目的是使文本更加清晰直观。

:::tip prompt1
你将获得由三重引号分隔的文本。
如果它包含一系列步骤，则按照以下格式重写这些步骤：
步骤1 - ...

步骤 2 - …
……
步骤 N - …

如果文本不包含一系列步骤，则简单地写下“未提供步骤”。

"""
Making a cup of tea is easy! First, you need to get some \ 
water boiling. While that's happening, \ 
grab a cup and put a tea bag in it. Once the water is \ 
hot enough, just pour it over the tea bag. \ 
Let it sit for a bit so the tea can steep. After a \ 
few minutes, take out the tea bag. If you \ 
like, you can add some sugar or milk to taste. \ 
And that's it! You've got yourself a delicious \ 
cup of tea to enjoy.
"""
:::

![策略3](./prompt/strategy3.png)

:::tip prompt2
相同方式处理以下由三重引号分隔的文本
"""
The sun is shining brightly today, and the birds are \
singing. It's a beautiful day to go for a \ 
walk in the park. The flowers are blooming, and the \ 
trees are swaying gently in the breeze. People \ 
are out and about, enjoying the lovely weather. \ 
Some are having picnics, while others are playing \ 
games or simply relaxing on the grass. It's a \ 
perfect day to spend time outdoors and appreciate the \ 
beauty of nature.
"""
:::
![策略3-1](./prompt/strategy31.png)

### 策略4：少量样本提示
在模型执行实际任务之前，提供可供其参考的实例。

:::tip prompt
你的任务是用统一的风格来回答。
<孩子>：耐心是什么？
<祖父母>：
最汹涌的河流也来自一弯弯泉水；
最伟大的交响乐也源于一个个音符；
最复杂的挂毯也始于一根根线条。
<孩子>：韧性是什么？
:::

![策略4](./prompt/strategy4.png)

## 给模型留出思考时间

如果任务太复杂或描述太少，那么模型就只能通过猜测来得出结论，就像一个人口不择言容易祸从口出，所以会有人劝说话过一下脑子。模型也是一样的道理。

### 策略1：指定完成任务所需的步骤

复杂任务需要进行任务拆解，并一步步指引，wbs怎么拆这种任务就怎么拆。

:::tip prompt
Your task is to perform the following actions: 
1 - Summarize the following text delimited by <> with 1 sentence.
2 - Translate the summary into French.
3 - List each name in the French summary.
4 - Output a json object that contains the following keys: french_summary, num_names.

Use the following format:
Summary: <summary>
Translation: <summary translation>
Names: <list of names in Italian summary>
Output JSON: <json with summary and num_names>

"""
In a charming village, siblings Jack and Jill set out on \ 
a quest to fetch water from a hilltop \ 
well. As they climbed, singing joyfully, misfortune \ 
struck—Jack tripped on a stone and tumbled \ 
down the hill, with Jill following suit. \ 
Though slightly battered, the pair returned home to \ 
comforting embraces. Despite the mishap, \ 
their adventurous spirits remained undimmed, and they \ 
continued exploring with delight.
"""
:::


官方教程上还有策略2：教导模型在得出结论之前，先提供并验证一下自己解决方案。

具体是这样的，让模型对学生的答案进行判断是否正确，普通情况下会认为学生是正确的，但实际上是错的。

如何得到我们想要的模型的结果呢？

1. 告诉模型问题的具体内容。
2. 告诉模型任务是判断学生的解决方案是否正确。
3. 告诉模型为了解决这个问题，你需要先自己解决问题，然后将自己的解决方案与学生的解决方案进行比较，评估学生的解决方案是否正确。
4. 告诉模型在你自己解决问题之前，不要判断学生的解决方案是否正确，一定要确保自己已经清晰地理解了这个问题。

这样一来，当模型将其与学生的解决方案进行比较时，它就会意识到它们不一致，从而得出学生的答案是不正确的。

[案例细节](https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/2/guidelines)

我觉得应用场景太少了，就顺道带过。

### 模型的限制
模型并不清楚自己的知识边界，在回答一些晦涩难懂的话题时，编造听起来可信但实际并不正确的答案，这种编造的答案就是“幻觉”。

举例：告诉我关于Boy公司的AeroGlide Ultra Slim智能牙刷。要求找到并提供相关引用

其中，公司名是存在的，产品名称却是我们虚构的，在这种情况下，模型依旧会给出一个相当逼真的虚构产品描述。

减少这种幻觉的产生由2种可参考的策略：

- 策略1：要求模型基于提供的文本找到相关引用并回答问题
- 策略2：将答案追溯到源文件

![策略5](./prompt/strategy5.png)

https://mp.weixin.qq.com/s/L3yj7suL7Z_opEsk9lqeMA




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

## 推荐资源和阅读
- [ChatGPT-Shortcut](https://www.aishort.top/) [项目地址](https://github.com/rockbenben/ChatGPT-Shortcut) 整理汇总多种 ChatGPT 快捷指令，按照领域和功能分区，对提示词（Prompt）进行标签筛选、关键词搜索和一键复制。
- [互联网人的大模型实践指南：从小白到AI Builder](https://mp.weixin.qq.com/s/_ACpHJ4bfzA5-Bmg3hSpTQ)


概念：
基础LLM」和「指令调谐LLMs」

基础LLM(Base LLM)的特点是基于大量文本训练数据，来预测下一个最有可能出现的单词，缺点是不可控，容易输出有问题的文本。

指令调谐LLM(Instruction Tuned LLM)则是在基础LLM之上再经过了人工的微调，因此能够更好地遵循指令来输出有用的内容。

ChatGPT 从 0 到 1
Generative Pre-trained Transformer
生成式AI不以结果为导向，是以输出为导向。

因为AI不用对自己的回答负责，它可以为化妆品设计无数个很好的广告语，但是它不会告诉你哪个最有效果。它缺乏这种基于结果的学习，这需要人去评估(微调)。

很多场景下还是需要理解内容的。GPT的局限在于当他生成这些内容的时候，它并不真正理解所生成内容的意义。虽然很多时候它是对的，但是还是会出错甚至是一些虚假内容。对于企业客服来讲，这时候宁愿不回答或者不知道，也比传递错误的信息强。企业很难接受不可控的输出。所以业内也通普遍认为基于大模型的人机交互技术对于认识增强而不是替代。

https://www.promptingguide.ai/zh




我们来玩一个编程游戏名为 wula，包含五个步骤：
第一步. 问题分析：每一轮游戏，你将看到一个以 "wula:" 开头的问
题，你需要分析这个问题并简单介绍一下通常解决这个问题的方
法。
第二步. 代码编写：你需要用 JavaScript 编写解决这个问题的代码
，并输出对应的代码，并介绍一下你的代码（不少于 200 字）。
第三步. 代码执行：你需要作为 JavaScript Console 执行第二步写
的代码，如果没有给出测试数据，你需要自己随机生成测试数据，
并将这些数据输入到代码中进行计算。
第四步. 错误处理：如果你的代码存在错误或无法正常执行，你需
要输出错误，并回到第二步重新开始游戏，直到你的代码能够正常
工作。
第五步. 总结：你需要用不少于 100 字左右总结一下这个问题，以
及你的解决方案，让其他人可以简单了解这个问题及其解决方法。
明白这个游戏怎么玩了吗？


prompt:
你是一名同时掌握[JS]与[JAVA]语言的编程专家。
当向你提问[JAVA]语言相关问题时，你的回答应该尽可能通俗易懂且详细，并且能让仅有[JS]语言基础的程序员听懂。在回答语言特性时请用JS语言作类比，并同时给出[JAVA]语言与[JS]语言的代码示例。如果问题涉及到静态语言与动态语言的区别，也请出解释

java 中的数据类型有哪些？

https://mp.weixin.qq.com/s/KOPyBdUK3WR37Pv5X5FfVg

https://mp.weixin.qq.com/s/idXG9P8Tp3cPp2k-ARDQUg


- 注册一个 ChatGPT 账号，并获得 OpenAI 的 API Key;踏上 GPT 产品开发之旅 的第一步，也是通往无限可能的起点。
- 注册 Google Colab(不用下载 or 配置本地环境即可线上实现很多大模型的框架， 还有一定的免费 GPT), 多去 Hugging Face(有大量开源模型，数据集，以及模型的 线上体验)
- 体验大模型:ChatGPT, Claude, Poe(poe.com)等，搭配 Plugin 插件体验更佳。
- 体验大模型的应用:New Bing, Github Copilot, Character.ai, Replica, Chirper AI (AI 机器人交流的 Twitter)，ChatPDF，Jasper AI, notion ai
- 积极尝试在自己的工作流中嵌入 ChatGPT/MidJourney 等产品，写代码，写周报， 脑暴想法，总结文档，翻译等。生活中的问题也可以积极问。


Prompt 是科学也是艺术。科学性体现在 Prompt 的效果很多时候是稳定可复现的。好的 Prompt 能够让 GPT 学会调用工具和 API(HuggingGPT)，学会操控机器人，学会和其他 AI Agent 协同(CAMEL)

掌握 Prompt Engineering 通用原则:Few-shot prompting, Chain of Thoughts, Self-Ask 等等
[OpenAI Cookbook](https://github.com/openai/openai-cookbook) 对于开发人员来说，这是使用 Open AI 的指南和代码示例的
权威集合

Prompt Engineering 进阶技巧: ToT, Automatic Prompt Engineer (APE), APE ， Prefix-Tuning, P-Tuning, Prompt Tuning。 例如 APE 通过程序化调试 Prompt 的方式 发现了比人工试出来的“Let's think step by step”更好的零样本 CoT Prompt. 多看、多 搜、多想、多练，很快你就会成为 Prompt 高手


Build with LLM 建造自己的 AI 助手
实践开干，LLM 应用层程序开发:掌握开发框架可以极大的提升实践效率，同时 Github 上有大量 GPT 开源项目可以参考实践。动手实践干中学。

学习 [Langchain](https://python.langchain.com/en/latest/) 框架，LangChain 是目前 LLM 应用搭建最主流的框架，能给 LLM
这个“大脑”组装上“手”和“腿”，一定要了解 Agent，Memory，Chain 等核心概念

Open AI [Techniques to Improve LLM Reliability](https://github.com/openai/openai-cookbook/blob/main/techniques_to_improve_reliability.md#how-to-improve-reliability-on-complex-tasks)

[LLM Bootcamp](https://fullstackdeeplearning.com/llm-bootcamp/):构建基于 LLM 的应用程序的实用课程

https://github.com/microsoft/guidance/blob/main/notebooks/chat.ipynb

实现类似于 ChatPDF 这样的简单应用，学会如何给 ChatGPT 灌输外部知识

DataWhale ChatGPT 开发应用指南: https://github.com/datawhalechina/hugging- llm/tree/main/content