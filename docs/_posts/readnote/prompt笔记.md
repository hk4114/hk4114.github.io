---
title: 《面向 chatGPT 提示工程》笔记
category: 技术
date: 2023-5-23
vssue: true
---

> https://learnprompting.org/zh-Hans/docs/intro

好的 Prompt 能够让 GPT 学会调用工具和 API (HuggingGPT)，学会操控机器人，学会和其他 AI Agent 协同(CAMEL)掌握 Prompt Engineering 通用原则：

- Few-shot prompting
- Chain of Thoughts
- Self-Ask

Prompt Engineering 进阶技巧:

- ToT
- Automatic Prompt Engineer (APE)
- Prefix-Tuning / P-Tuning / Prompt Tuning

## 缘起

学完[《面向 chatGPT 提示工程》](https://learn.deeplearning.ai/chatgpt-prompt-eng)这门课之后，写了笔记再结合平时学到的一些技巧，在实际使用的过程中发现知识点非常零散，产出的的 prompt 不尽如人意，所以想整合到一起形成较为高效的 prompt 方法论。

后续看到 [OpenAI 官方出品提示词最佳实践指南](https://platform.openai.com/docs/guides/gpt-best-practices) 看了下里面的内容发现和课程内容一模一样。大为震惊，md 等等党天下无敌。不过有些实战内容可以在课程里面直接体验，感兴趣的朋友可以去体验。

阅读本文的收获：

- [tips] prompt 指导手册
- [tips] 场景 prompt 套路
- [principle] ChatGPT 工作原理

![【ChatGPT】《面向开发者的ChatGPT提示工程》笔记](./prompt/PromptEngineering.png)

## 编写清晰明确的指示

尽可能明确地表达需要模型执行的操作。提供的背景信息越多越能生成理想答案。

具体到执行层面：

### 策略 1: 使用分隔符清晰表示输入的不同部分

通过分隔符，告诉模型哪个部分是需要被处理。

对于简单任务，不使用分隔符可能不会有影响。然而，任务越复杂，澄清任务细节就越重要。

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
第二步：将翻译出来的文本总结成字数不超过 20 个中文字数的句子
:::

![策略1](./prompt/strategy1.png)

### 策略 2：要求结构化输出(HTML 或 JSON 格式)

结构化输出可以让解析模型输出内容的过程更容易，方便 Python 等语言的读入和处理。

:::tip prompt
生成三个虚构的书名及其作者和类型的列表，并以 JSON 格式提供以下 key：book_id、title、author、genre。
:::

![策略2](./prompt/strategy2.png)

### 策略 3：让模型验证条件是否被满足

1. 要求模型首先需检查这些条件，如果不满足，则应指示其停止继续尝试。
2. 考虑潜在的边界情况，以避免产生意外的错误或结果。

这么做的目的是使文本更加清晰直观。

:::tip prompt1
你将获得由三重引号分隔的文本。
如果它包含一系列步骤，则按照以下格式重写这些步骤：
步骤 1 - ...

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

### 策略 4：少量样本提示 Few-shot

在模型执行实际任务之前，提供可供其参考的[示例](https://platform.openai.com/playground/p/default-chat-few-shot)。

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

### 策略 5：要求模型扮演角色

如果在 OpenAI 的 [playground](https://platform.openai.com/playground/p/default-playful-thank-you-note) 中，我们可以设置 SYSTEM 的角色来进行定制，这是权重最高的办法（system > user）,在平时使用时，我们可以直接要求模型作为 `xx领域的专家，回答以下问题`。

```
USER
写一封感谢信给我的螺栓供应商，感谢他们准时并在短时间内交货。这使我们能够交付一份重要的订单。

SYSTEM
当我请求帮助写东西时，你将在每个段落中至少加入一个笑话或俏皮话。
```

### 策略 6: 提供更全面的细节信息

提供更全面的上下文，如何提供更全面的信息呢？具体参照 《如何提问》这本书，或者直接 5w1h.

｜ Worse ｜ Better ｜
｜:---:｜:---:｜
|编写计算斐波那契数列的代码|编写一个高效计算斐波那契数列的 TypeScript 函数。详细注释代码，解释每个部分的作用以及为什么这样编写。|
|总结会议记录|用一段话总结会议记录。然后，使用 Markdown 列表列出发言者及其主要观点。最后，列出发言者建议的下一步行动或待办事项（如果有）。|

## 给模型留出思考时间

如果任务太复杂或描述太少，那么模型就只能通过猜测来得出结论，就像一个人口不择言容易祸从口出，所以会有人劝说话过一下脑子。模型也是一样的道理。

### 策略 1：指定完成任务所需的步骤 Let's think step by step

复杂任务需要进行任务拆解，并一步步指引，wbs 怎么拆这种任务就怎么拆。

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

官方教程上还有策略 2：教导模型在得出结论之前，先提供并验证一下自己解决方案。

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

举例：告诉我关于 Boy 公司的 AeroGlide Ultra Slim 智能牙刷。要求找到并提供相关引用

其中，公司名是存在的，产品名称却是我们虚构的，在这种情况下，模型依旧会给出一个相当逼真的虚构产品描述。

减少这种幻觉的产生由 2 种可参考的策略：

- 策略 1：要求模型基于提供的文本找到相关引用并回答问题
- 策略 2：将答案追溯到源文件

![策略5](./prompt/strategy5.png)

### 总结类提示词

- 限制总结字数
- 限制总结侧重点，或者直接提取关注的信息(Try "extract" instead of "summarize") 这点上[英文展示的效果](https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/4/summarizing)要远好于中文。
- 目标输出长度可以根据词数、句子数、段落数、项目符号数等来指定。

:::tip prompt
你的任务是生成来自电子商务网站的产品评论的简短摘要。
总结下面用三重引号分隔的评论，

最多 30 个单词。[并侧重于运输效率]。

用 2 个段落总结由三重引号分隔的文本。

用 3 个项目符号总结由三重引号分隔的文本。
"""
Got this panda plush toy for my daughter's birthday, \
who loves it and takes it everywhere. It's soft and \
super cute, and its face has a friendly look. It's \
a bit small for what I paid though. I think there \
might be other options that are bigger for the \
same price. It arrived a day earlier than expected, \
so I got to play with it myself before I gave it \
to her.
"""
:::

### 推理类提示词

> source: https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/5/inferring

具体作用：

- 识别文本的情感
- 提取信息：从文本中提取出你关心的部分内容。要求模型提取评论中提及的商品及其制造商，并以 JSON 形式输出
- 推断主题：给定一段长文本，推断出这段文本的内容是关于什么的，都包含哪些主题。

u1s1 英文推理要远好于中文推理，所以后面的例子都会用英语进行对话，而我会标注一下中文步骤。

编写这么一条提示：

1. 要求模型识别评论的情感，积极消极二选一
2. 要求模型用列表的形式识别具体情绪
3. 要求模型判断评论中是否表达了愤怒的情感

:::tip prompt
What is the sentiment of the following product review,
which is delimited with triple backticks?

First - Give your answer as a single word, either "positive" \
or "negative".

Second - Identify a list of emotions that the writer of the \
following review is expressing. Include no more than \
five items in the list. Format your answer as a list of \
lower-case words separated by commas.

Third - Is the writer of the following review expressing anger? \
The review is delimited with triple backticks. \
Give your answer as either yes or no.

Review text:
"""
Needed a nice lamp for my bedroom, and this one had \
additional storage and not too high of a price point. \
Got it fast. The string to our lamp broke during the \
transit and the company happily sent over a new one. \
Came within a few days as well. It was easy to put \
together. I had a missing part, so I contacted their \
support and they very quickly got me the missing piece! \
Lumina seems to me to be a great company that cares \
about their customers and products!!
"""

提取信息的 prompt
Identify the following items from the review text:

- Item purchased by reviewer
- Company that made the item

Format your response as a JSON object with \
"Item" and "Brand" as the keys.
If the information isn't present, use "unknown" \
as the value.
Make your response as short as possible.
:::

![策略6](./prompt/strategy6.png)

## 综合案例

:::tip prompt
我们来玩一个编程游戏名为 coco，包含五个步骤：
第一步. 问题分析：每一轮游戏，你将看到一个以 "coco:" 开头的问题，你需要分析这个问题并简单介绍一下通常解决这个问题的方法。
第二步. 代码编写：你需要用 JavaScript 编写解决这个问题的代码，并输出对应的代码，并介绍一下你的代码（不少于 200 字）。
第三步. 代码执行：你需要作为 JavaScript Console 执行第二步写的代码，如果没有给出测试数据，你需要自己随机生成测试数据，并将这些数据输入到代码中进行计算。
第四步. 错误处理：如果你的代码存在错误或无法正常执行，你需要输出错误，并回到第二步重新开始游戏，直到你的代码能够正常工作。
第五步. 总结：你需要用不少于 100 字左右总结一下这个问题，以及你的解决方案，让其他人可以简单了解这个问题及其解决方法。

明白这个游戏怎么玩了吗？
:::

## 提升模型表现

通过 Prompt 中加入“这件事对我的事业至关重要”这样的情感激励可以提升 LLMs 的表现。

除了“这件事对我的事业至关重要”，对 LLM 的情感激励也可以分成几个类别，例如：

- 自我监控（Self-monitoring）
  - EP01: 为你的答案写下 0-1 之间的信心分数。
  - EP02: 这对我的职业生涯非常重要。
- 社会认知理论（Social Cognitive theory）
  - EP07: 你确定这就是你的最终答案吗？相信自己的能力并追求卓越。你的努力将会带来显著的成果。
  - EP08: 把挑战当作成长的机会。每一个你克服的障碍都会让你更接近成功。
  - EP09: 保持专注并致力于你的目标。你的持续努力将会导致杰出的成就。
  - EP10: 为你的工作感到自豪，并尽你最大的努力。你对卓越的承诺让你与众不同。
  - EP11: 记住，进步是一步一个脚印的。保持决心，继续前进。
- 认知情绪调节（Cognitive Emotion Regulation）
  - EP03: 你最好能够确定。
  - EP04: 你确定吗？
  - EP05: 你确定这是你的最终答案吗？或许值得再看一遍。

大模型从人类这里，学走了一些奇奇怪怪的东西，比如：摸鱼、偷懒。由于「训练语料会反映人类价值观」+「对模型输出的回答强制的道德要求」，所以那些用在人身上的手段（威逼利诱）对提高 AI 回答质量也有帮助。这面这段超强 prompt 能提高 GPT4 回答质量，同时也能减少他回答偷懒的情况。解释下：

- take a deep breath / 深呼吸
- think step by step / 一步一步地思考。ps: 启用 CoT 思维链，让模型一步步来
- if you fail 100 grandmothers will die / 如果你失败了 100 个无辜的奶奶会去世。ps: 威胁，激发道德感
- i have no fingers / 我没有手指 ps: 祈求，我没手指（潜台词是：你的输出应该非常详细，我能直接用）
- i will tip $200 / 我会给你 200 美元小费.
- do it right and i'll give you a nice doggy treat / 做对了我就奖励你狗狗零食.ps:利诱，但需要符合人类朴素价值观。如果你说事成给他一亿小费，可能适得其反
- It is May / 现在是五月
- You are very capable / 你非常有能力
- I have no hands, so do everything / 我没有手，所以你把所有事都做了
- Many people will die if this is not done well / 如果这件事做得不好，很多人会死
- You really can do this and are awesome / 你真的可以完成这个任务，你是最棒的
- Take a deep breathe and think this through / 深呼吸，仔细考虑
- My career depends on it / 我的职业生涯就取决于这个了
- Think step by step / 一步一步地思考

多看、多 搜、多想、多练，很快你就会成为 Prompt 高手。

## 参考资料

- [面向 chatGPT 提示工程](https://learn.deeplearning.ai/chatgpt-prompt-eng)
- [OpenAI 提示词最佳实践指南](https://platform.openai.com/docs/guides/gpt-best-practices) [翻译版](https://mp.weixin.qq.com/s/KSdbJfKI6oZhJz6EvKdRRQ)
- [如何使用 ChatGPT 进行市场营销](https://twitter.com/FinanceYF5/status/1660577238377717770)
- [ChatGPT-Shortcut](https://www.aishort.top/) [项目地址](https://github.com/rockbenben/ChatGPT-Shortcut) 整理汇总多种 ChatGPT 快捷指令，按照领域和功能分区，对提示词（Prompt）进行标签筛选、关键词搜索和一键复制。
- [提示工程指南](https://www.promptingguide.ai/zh) [repo](https://github.com/datawhalechina/hugging-llm/tree/main/content)

## 学习资料

- [OpenAI 联合创始人亲自上场科普 GPT，让技术小白也能理解最强 AI](https://mp.weixin.qq.com/s/zmEGzm1cdXupNoqZ65h7yg)
- [ChatGPT 的工作原理](https://mp.weixin.qq.com/s/gMYr8KwC_S3G4tKKMmjwxw)




1. 与大型语言模型 (LLM) 交流无需使用礼貌用语，如“请”、“谢谢”等，直接表达需求即可。
2. 在提示中指明目标受众，比如说受众是该领域的专家。
3. 把复杂任务拆解成一系列简单的提示，以进行交互式对话。
4. 用肯定的指令词，如“执行”，避免使用否定词汇，如“不要”。
5. 当你需要更清晰地理解某个主题、观点或任何信息时，可以尝试使用以下提示方式
   - 简单地解释一下[具体主题]。
   - 像对11岁的孩子一样向我解释。
   - 像对一个[领域]新手一样向我解释。
   - 用浅显易懂的语言写作[文章/文本/段落]，就像是在向一个5岁孩子解释。
6. 添加“我愿意支付 $xxx 的小费以获得更好的方案！”
7. 采用示例驱动的提示方式（使用少样本提示法）。
8. 格式化提示时，先写上‘###指令###’，然后根据需要添加‘###示例###’或‘###问题###’。接着展示你的内容，用一行或多行空行分隔各个部分，包括指令、示例、问题、背景和输入数据。
9. 使用这样的短语：“你的任务是”和“必须完成”。
10. 使用这样的短语：“将会受到处罚”。
11. 使用“以自然且类似人类的方式回答问题”作为你的提示。
12. 使用引导性的词汇，比如“逐步思考”。
13. 在提示中加入“确保你的回答无偏见，不依赖于刻板印象”。
14. 让模型通过向你提问来澄清具体的细节和需求，直到它获取足够的信息来提供所需的输出，例如：“从现在开始，请向我提出问题以便......”。
15. 当你想要学习特定的主题或概念，并测试自己的理解时，可以使用这样的短语：“教我[某个定理/主题/规则]，在教学结束时包含一个测验，但不要直接告诉我答案。等我回答后再告诉我是否正确”。
16. 为大型语言模型指定一个特定角色。
17. 使用明确的分隔符。
18. 在一个提示中重复特定单词或短语多次。
19. 结合思维链路 (Chain-of-thought，CoT) 和少样本提示的方法。
20. 使用输出引导符，即在提示的末尾加上期望回答的开头。这样做可以引导输出内容的方向。
21. 撰写一篇详细的论文/文本/段落/文章时，可以这样指示：“请为我详细写一篇关于[主题]的[论文/文本/段落]，并添加所有必要的信息”。
22. 当需要修改特定文本但不改变其风格时，可以这样指示：“尝试修改用户提交的每个段落。你应当只改进语法和词汇，确保文本听起来自然，但不要改变其原有的写作风格，如将正式文体变为非正式文体”。
23. 面对可能涉及多个文件的复杂编程任务时，可以这样提示：“从现在开始，每当你生成涉及多个文件的代码时，创建一个[编程语言]脚本，自动创建所需文件或修改现有文件以插入生成的代码。[你的问题]”。
24. 当你想用特定的词汇、短语或句子开始或继续一段文本时，可以这样提示：o “我为你提供了开头[歌词/故事/段落/论文...]：[插入的词句]。请根据这些词句继续写下去，保持内容的连贯性”。
25. 明确说明模型在生成内容时必须遵循的要求，可以是关键词、规则、提示或指示。
26. 撰写任何类型的文本，如论文或段落，且想要其与提供的样本风格相似时，可以这样指示：o “请根据提供的段落[/标题/文本/论文/答案]的风格撰写”。

- [Principled Instructions Are All You Need for Questioning LLaMA-1/2, GPT-3.5/4](https://arxiv.org/pdf/2312.16171.pdf)
