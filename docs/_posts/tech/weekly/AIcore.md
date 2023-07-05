---
title: AI 学习路径
category: 技术
date: 2023-5-7
vssue: true
---

## 生成式 AI 应用路线图：多模态 AI 的应用能力演进

> 路线图解读：https://mp.weixin.qq.com/s/dSXgDrvcM8GD33RWu78gyA
>
> 路线图：https://github.com/SeedV/generative-ai-roadmap

随着生成式 AI「对生成内容的可控性」不断提高，其应用场景也在不断扩展和深化，这个演进过程大致分为如图所示的 6 个阶段。

与简单的文本/图片生成相比，包含声音、视频、3D 场景、动画、复杂故事线的多模态系统，与人类的常识感受和本源需求更加契合，明显拥有更宽广深远的应用前景。

作者认为，生成式 AI 会大致按照图示的脉络演进积累，不断催生有革命意义的新应用、新平台甚至颠覆性的新商业模式

## 参考资料

- [提示工程指南](https://www.promptingguide.ai/zh) [repo](https://github.com/datawhalechina/hugging-llm/tree/main/content)
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) 对于开发人员来说，这是使用 Open AI 的指南和代码示例的权威集合

## 互联网人的大模型实践指南：从小白到 AI Builder

1. [x] 注册一个 ChatGPT 账号，并获得 OpenAI 的 [API Key](https://platform.openai.com/account/api-keys)。
2. [x] 注册 [Google Colab](https://colab.google/) 不用下载配置本地环境即可线上实现很多大模型的框架
3. [x] 注册并多逛 [Hugging Face](https://huggingface.co/) 有大量开源模型，数据集，以及模型的线上体验
4. [x] 使用体验各个大模型:ChatGPT, Claude, [Poe](https://poe.com/) 以及应用 New Bing、ChatPDF、notion ai、Character.ai。
5. [x] 积极尝试在自己的工作流中嵌入 ChatGPT/MidJourney 等产品，写代码，写周报， 脑暴想法，总结文档，翻译等。生活中的问题也可以积极问。总而言之多使用。
6. [x] Prompt 是科学也是艺术。科学性体现在 Prompt 的效果很多时候是稳定可复现的。好的 Prompt 能够让 GPT 学会调用工具和 API(HuggingGPT)，学会操控机器人，学会和其他 AI Agent 协同(CAMEL)
7. [x] 掌握 Prompt Engineering 通用原则: Few-shot prompting, Chain of Thoughts, Self-Ask 等等，Prompt Engineering 进阶技巧: ToT, Automatic Prompt Engineer (APE), APE ， Prefix-Tuning, P-Tuning, Prompt Tuning。 例如 APE 通过程序化调试 Prompt 的方式 发现了比人工试出来的“Let's think step by step”更好的零样本 CoT Prompt. 多看、多 搜、多想、多练，很快你就会成为 Prompt 高手
8. [x] [OpenAI Cookbook](https://github.com/openai/openai-cookbook) 对于开发人员来说，这是使用 Open AI 的指南和代码示例的权威集合
9. [ ] 学习 [Langchain](https://python.langchain.com/en/latest/) 框架，LangChain 是目前 LLM 应用搭建最主流的框架，能给 LLM 这个“大脑”组装上“手”和“腿”，一定要了解 Agent，Memory，Chain 等核心概念
10. [ ] Build with LLM 建造自己的 AI 助手。实践开干，LLM 应用层程序开发:掌握开发框架可以极大的提升实践效率，同时 Github 上有大量 GPT 开源项目可以参考实践。动手实践干中学。

## 手把手带你实现：基于 Langchain 和 chatglm-6b 构建本地知识库的自动问答应用

> https://www.bilibili.com/video/BV11N411y7dT/

## 『搭建基于 LLM 的客服系统的实践』基于清华大模型 ChatGLM-6B 完成 6 类任务

- 任务 1：客服打招呼任务 (已完成)
- 任务 2：实现交谈任务分类 (已完成)
- 任务 3：实现交谈内容相似度任务 (已完成)
- 任务 4：实现交谈内容结构化提取任务
- 任务 5：实现本地知识库和网络搜索的增强任务
- 任务 6：实现自动化任务

[系列一](https://zhuanlan.zhihu.com/p/626232785) 0. 环境说明

1. ChatGLM-6B 介绍
2. 硬件需求：最低 GPU 显存
3. 环境安装：使用 pip 安装依赖
4. API 部署

[任务 1：客服打招呼任务](https://zhuanlan.zhihu.com/p/626234226)

1. 首先定义 role 的 prompt，让模型知道自己的角色
2. 然后再描述一下客户的基本信息
3. 最后加上命令，生成完整的 prompt，发给模型

[任务 2：实现交谈任务分类](https://zhuanlan.zhihu.com/p/626416551)

1. 根据场景定义好分类
2. 按照业务场景预先生成分类的例子
3. 构建 prompt 作为 pre_history 送到模型参数中
4. 把要做分类的句子输给模型，模型根据要求进行分类，并输出

[任务 3：实现交谈内容相似度任务](https://zhuanlan.zhihu.com/p/627333923)

1. 根据场景选择一些常用的对话
2. 按照业务场景预先生成对话比对的例子 (比对目标最好是内设场景对话)
3. 构建 prompt 作为 pre_history 送到模型参数中
4. 把要做分类的句子输给模型，模型根据要求进行比对，并输出是还是不是

## 基于 ChatGLM-6B 搭建个人专属知识库

> https://juejin.cn/post/7233625509107384379

ChatGLM-6B 是一个垂直领域的语言模型，使用了 P-Tuning 微调技术。它可以通过向量嵌入技术实现个人专属知识库，并在提问时匹配最相关的知识库片段，将其与问题一起提交给 LLM 生成回答。这个模型可以应用于多个领域，如财务分析、智能客服、律师助手和在线问诊医生等。部署和配置该模型需要一些准备工作，但使用 Gradio 页面可以改进用户体验。

垂直领域的 LLM 专属模型在生产落地过程中需要微调，但微调对非专业人员不友好，需要专业知识、大量计算资源和时间。ChatGLM-6B + langchain 可以实现无需微调的垂直领域专业问答，创建个人专属知识库简单易上手。
技术原理是使用向量嵌入（embedding）将用户知识库和问题进行向量化，利用向量相关性算法（如余弦算法）匹配最相似的知识库片段，并将其作为上下文与用户问题一起提交给 LLM 生成回答。可以调整 prompt 和匹配不同的知识库，让 LLM 扮演不同角色，如财务分析师、智能客服、律师助手、在线问诊医生等。部署和配置该系统需要准备环境、下载源码、安装依赖和模型，并进行参数调整。可以通过 Web 模式、API 模式或命令行模式启动系统。可以选择不同的知识库，并基于知识库进行问答。

## 【AI】LangChain 和 LlamaIndex 项目实践手册：将大型语言模型应用于现实世界

> online: https://leanpub.com/langchain/read
>
> github: https://github.com/mark-watson/langchain-book-examples

是一本以技能和项目为主线的 LangChain 主题书籍，介绍如何利用 LangChain、LlamaIndex 项目、ChatGPT API 解决一系列问题。

该书涵盖了安装和使用 LangChain 和 LlamaIndex 的基本要求，以及使用 Google Knowledge Graph API、使用 Hugging Face 开源模型、使用 Zapier 集成等方面的示例。它还提供了关于大型语言模型的概述和使用场景的讨论。该书的目标读者是希望构建自己的工具并提升程序设计能力的开发人员。

## 【AI】Full Stack LLM Bootcamp: LLM 应用开发全栈指南 (免费训练营)

> https://fullstackdeeplearning.com/llm-bootcamp/

The Full Stack 是一个人工智能学习网站，提供各类免费课程和训练营，帮助用户熟悉深度学习基础技能，并提供实践计划以提升实际操作能力。
近期 ，网站推出了新的训练营课程「Full Stack LLM Bootcamp」，帮助了解基于 LLM 构建 App 所需要的最佳实践和工具，掌握从提示工程到「用户中心设计」的全栈技能！以下是课程笔记要点！学习课程与查看完整笔记

1. [笔记 1 LLM 应用开发全栈指南](https://mp.weixin.qq.com/s/weH_7K2g3sBMbtei1_dTng)
2. [笔记 2 LLM 全栈开发指南补遗](https://mp.weixin.qq.com/s/3zijYYxIJA5rJz9fBoArPw)

## 如何快速高效的使用 LLM 构建应用程序？

> https://mp.weixin.qq.com/s/nIuw16xkC3TjKd0mbwFvmA
>
> 原文：https://twitter.com/agishaun/status/1671704791658135552

作者 Matt Bornstein 和 Rajko Radovanovic 分享了使用 LLM 构建应用程序的一种新的参考架构，并对每个部分进行了详细的解释。

如图所示，Emerging LLM App Stack 是基于情景学习的设计模式，包含以下三个阶段，适用于大部分的人工智能创业公司或前沿科技公司。

- 数据预处理/嵌入〖Data preprocessing / embedding〗： 这个阶段涉及存储私有数据以供稍后检索
- 提示构造/检索〖Prompt construction / retrieval〗：当用户提交一个查询时，应用程序构造一系列提交给语言模型的提示
- 提示执行/推理〖Prompt execution / inference〗：经过编译的提示被提交给一个预训练的 LLM 进行推理——包括专有的模型 API 和开源或自训练的模型

![大模型开发流程](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a876970602b34616b991d3dee6dcdc00~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

推特博主 @agishaun 基于上方内容，分享了他自己的在千余小开发实践中的经验和收获，帮助你少走弯路

1. 每个人都可以学会提示词，学习使用 LLM 进行开发，可以节约节省大量时间。因此，尽可能将 LLM 整合到你的开发流程中，建议从 Microsoft Copilot 开始。
2. 数据，数据，还是数据！数据质量是 LLM 开发中被低估的因素。记住！「Garbage in Garbage out (输入是垃圾，输出也是垃圾)」适用于任何软件系统，而 LLM 仍然是软件系统。
3. 向量数据库不能解决一切问题。一个好的向量数据库，也不能解决所有的数据质量问题。使用 LLAMA 或者 LangChain 框架帮助清理数据并正确地导入数据更为重要。
4. 通过艰难的方式学习 LLM。框架会加速你的开发过程，但它会把实现的细节隐藏起来。如果你刚开始 LLM 的开发旅程，可以尝试在没有任何框架的情况下开发，或者使用像 Microsoft Guidance 这样的轻框架。
5. 如何正确使用 LLM？一般工程师面对大模型开发时，一般是先准备数据，然后试图存储，再放入 LLM 中编排。而 @agishaun 认为，更优化的流程可以降低 50% 的开发时间，减少 90% 的错误率，是因为这样开发离 LLM 更近，且可以充分利用 LLM 的能力.
   ![如何正确使用LLM](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf998bb69949438f865e9d9078784040~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

## LLM 全景图：学习路径与学习资料包

> https://zhuanlan.zhihu.com/p/637154782

作者 @Andy Yang 根据近期的论文、演讲、报告、测评和数据集等资源，整理了这份「LLM 全景图」，可以帮助你快速通关大语言模型、俯瞰当前 LLM 领域。如果对细分板块感兴趣，可以找更深入的资料。

1. Overview
   - 前沿模型观摩
2. 预训练
   - 整体
   - 数据相关
   - 训练相关
   - Tokenization
3. SFT(Supervised FineTuning)/Instruction Tuning

   - SFT 模型

4. RLHF 部分

5. 推理使用

- 解码方法
- Prompt Engineering
- 反思以及其他高阶应用

6. 其他
   - Tools （API 调用）
   - Code Related
   - Math Related
   - [可选] GPT API 相关应用

## 教程

> 绘画 https://www.bilibili.com/medialist/detail/ml2243104665
>
> 语音合成 https://www.bilibili.com/medialist/detail/ml2252128065

### Midjourney 中文教程

1. [Midjourney 保姆级注册教程](https://mp.weixin.qq.com/s/0rllMo2iu8Blwz0DtTBeVA)
2. [MidJourney 学习导航](https://learningprompt.wiki/docs/midjourney-learning-path)
3. 最好的 MidJourney 中文教程 https://www.bilibili.com/video/BV1p24y1h7CQ
4. MidJourney 常用参数超详细介绍及用法 [介绍 1](https://mp.weixin.qq.com/s/dLkoNpXAI51U9uc9IWhphA) | [介绍 2](https://mp.weixin.qq.com/s/QJQChAb8-fjtubQk75OlBg)

### Stable Diffusion

[Stable Diffusion 视频教程](https://www.bilibili.com/video/BV1BM4y127eD/)

[零基础学会 Stable Diffusion 视频教程](https://www.bilibili.com/video/BV1As4y127HW/)

B 站 UP 主「Nenly 同学」正在更新一门神仙课程——《零基础学会 Stable Diffusion》，并号称「B 站第一套系统的 AI 绘画课」。课程上线两周已经获得了 23W+的播放

[开源图像模型 Stable Diffusion 入门手册](https://mp.weixin.qq.com/s/8czNX-pXyOeFDFhs2fo7HA)

[教会你使用 AI 绘画利器 Stable Diffusion](https://mp.weixin.qq.com/s/9Dw2GYkg6b1vvKKyJQ-3TA)

[手把手教你用 Stable Diffusion 写好提示词](https://mp.weixin.qq.com/s/sEQpP5S7W_gsCUf3i7OZiQ)

试用 stable diffusion 画图

适用场景：不会在电脑上搭环境，显卡不行。但是会翻墙。

github.com/camenduru/stable-diffusion-webui-colab

stable-diffusion-webui-colab 是我用过的最方便的环境搭建脚本。点几下链接就搞定了！

1. 注册登录好 google colab 账号
2. 从列表里面选好你要运行的模型，比如最近很火的 midjourney，midjourney_v4_diffusion_webui_colab（如果你想画漂亮小姐姐就选 chillout_mix_webui_colab）
3. 每个模型都有 v1.9 和 v2.0 两个版本，优先选择 v2.0，因为已经包含了 ControlNet
4. 点击链接后会跳转到 google colab，然后点击左上角三角播放按钮等搭建好环境
5. 等脚本运行，运行好了你可以看到有几个网址，点击就可以打开 UI 做图了。

完整教程参考[如何在 Google Colab 上部署 Stable Diffusion Web UI Colab](https://atlassc.net/2023/02/18/stable-diffusion-webui-colab-guide-for-beginners)

[Stable Diffusion 你需要知道的算法原理（通俗版）](https://mp.weixin.qq.com/s/2-mihwrCmYW2We2H67zzPg)
01 Stable Diffusion 原理介绍

1. 什么是扩散 (Diffusion)
2. 扩散 (Diffusion) 是怎么能被稳定 (Stable) 控制的 (以文生图为例)
3. CLIP：我们输入的文字 prompt 是如何起作用的
4. UNET：扩散模型的工作原理
5. 理解 VAE 的编解码过程

02 模型训练相关原理

1. 机器是如何认识图片的？
2. 模型是如何被训练的？

03 大模型微调技术

1. 为什么要进行大模型微调？
2. 大模型微调需要解决的两个问题
3. 常见的大模型微调技术及其原理 (Dreambooth / LoRA / Embedding / Hypernetwork)

### AI 翻唱

> https://www.bilibili.com/medialist/detail/ml2252128065

感谢教程：@领航员未鸟 https://www.bilibili.com/video/BV1Hg4y1E7nW/

@羽毛布団 https://www.bilibili.com/video/BV1H24y187Ko/

项目地址：https://github.com/svc-develop-team/so-vits-svc

[教你打造属于自己的 AI 孙燕姿，AI 歌手模型使用及训练保姆级课程 #1/2 使用模型](https://mp.weixin.qq.com/s/bXD1u6ysYkTEamt-PYI1RA)

[教你打造属于自己的 AI 孙燕姿，AI 歌手模型使用及训练保姆级课程 #2/2 训练模型](https://mp.weixin.qq.com/s/IeeW1PbMUbxMlLl529JTYQ)

## 接入 ChatGPT 的文章教程

相关[机器人项目](/robot-collections)

## 微软开源 Deep Speed Chat

> https://github.com/microsoft/DeepSpeed/tree/master/blogs/deepspeed-chat

4 月 12 日，微软宣布开源 Deep Speed Chat，帮助用户轻松训练类 ChatGPT 等大语言模型，使得人人都能拥有自己的 ChatGPT！

Deep Speed Chat 是基于微软 Deep Speed 深度学习优化库开发而成，具备训练、强化推理等功能，还使用了 RLHF（人工反馈机制的强化学习）技术，可将训练速度提升 15 倍以上，成本却大幅度降低。例如，一个 130 亿参数的类 ChatGPT 模型，只需 1.25 小时就能完成训练。

## more

### 专门做研究的 ChatGPT 平台：你的答案完全来自论文，免费使用

> https://www.jiqizhixin.com/articles/2023-06-24-3
>
> https://consensus.app/

Consensus 是一个免费的平台，通过使用人工智能从研究论文中提取信息，帮助用户高效地查阅和摘要文献。用户可以输入他们感兴趣的问题，Consensus 将从真实数据中提供答案，并提取与问题相关的观点和段落。此外，Consensus 还通过 AI 评级系统对主题进行评价，帮助用户了解研究论文中积极和消极观点的比例。该平台被认为是一个有用的工具，适用于科研、学习和内容创作。

### 使用 ChatGPT 在 5 分钟内「完全读懂」任何书籍

> https://www.reddit.com/r/ChatGPT/comments/14elgw9/how_i_use_chatgpt_to_read_and_remember_any_book/

Reddit 是美国知名论坛，ChatGPT 子区目前有个帖子非常火，是一位狂热的书友分享如何借助 ChatGPT，将阅读一本书的时间压缩到 5 分钟！并且给出了详细的 Prompt！

- Prompt 1: Please summarize [BOOK] by [AUTHOR]
- 请按[作者]总结[图书]

- Prompt 2: What are all of the chapters in the book?
- 这本书的章节都有哪些？(注意，在这里，可以根据想学的内容，挑选出对应的最佳章节)

- Prompt 3: In [BEST CHAPTER], what are the most important 20% of learnings about [INSERT LEARNING OBJECTIVE] that will help me understand 80% of it."
- 在[最佳章节]中，关于[插入学习目标]最重要的 20%是什么，这将帮助我理解其中的 80%

- Prompt 4: Convert those key lessons from the chapter into engaging stories and metaphors to aid my memorization.
- 将本章中的关键内容转化为引人入胜的故事和隐喻，以帮助我记忆

- Optional Prompt 5: Write me an action list of how I can apply [KEY LESSON] into [PLACE YOU WANT TO APPLY IT]
- 给我写一份行动清单，说明我如何将[关键课程]应用到[您想应用的地方] （注意！这里可以提供有价值的领域背景知识）

评论区的几百条回帖也是干货满满，书友们积极留言，分享尝试用 ChatGPT 辅助阅读时，那些迷惑又雀跃的时刻！

- Comment 1：注意！这种方式可能会因为 ChatGPT 的「幻觉」而得到错误信息。可以用已经读过的书来尝试一下，然后你就会发现某些具体细节要么不太准确，要么完全就是捏造的。

- Comment 2：对于「幻觉」我倒是有一些处理经验，一般就是在提问时注意这三点：

明确地告诉它你想要一个准确的答案，没有幻觉

改变 temperature 参数（比如改到 0），或者控制创造力水平

得到答后，要求它为每个引用产生精确的引用和页面，以便于交叉检查

### Framer：无代码构建网站

> 网站链接：https://www.framer.com/
>
> 使用体验分享：https://nitter.net/zuozizhen/status/1668907159160250370#m

Framer 是一个强大而简单的网站构建工具，它可以帮助你快速、轻松、有趣地创建专业的网站，同时提供最佳的 SEO、性能和托管服务。

Framer 的特点包括：

AI 驱动：你可以使用 AI 生成你网站的初版，然后自由定制。

设计和布局：Framer 提供了丰富的设计和布局工具，你可以使用定位选项来固定顶部栏、侧边栏、徽章和背景。

插件：Framer 可以连接到流行的应用，如 YouTube、Vimeo、Lottie 等。

SEO 优化：Framer 可以帮助你构建快速、全球优化的网站。

发布：你可以直接在 Framer 上发布你的网站，无需重新构建或编写代码。

社区：Framer 有一个活跃的社区，你可以看到其他人发布的网站，也可以分享你自己的作品。

比较惊喜的是生成内容的排版看起来非常舒适。即使是看他们的模版的排版也能受益匪浅。

### Novelai：目前流量最大的 AI 故事生成网站

> https://novelai.net/

NovelAI 就像一个 AI 驱动的故事创作工具箱。你可以把它想象成一个能够帮助你写故事的超级智能机器人。

它可以帮你画出你故事中的角色和场景，如果你不喜欢自由发挥，它还可以帮你进行有指导的文字冒险游戏。这个机器人还可以模仿你喜欢的作家的写作风格，或者按照你指定的主题来写作。

### LLM 全景图：学习路径与学习资料包

> https://zhuanlan.zhihu.com/p/637154782

作者 @Andy Yang 根据近期的论文、演讲、报告、测评和数据集等资源，整理了这份「LLM 全景图」，可以帮助你快速通关大语言模型、俯瞰当前 LLM 领域。如果对细分板块感兴趣，可以找更深入的资料。

1. Overview
   - 前沿模型观摩
2. 预训练
   - 整体
   - 数据相关
   - 训练相关
   - Tokenization
3. SFT(Supervised FineTuning)/Instruction Tuning

   - SFT 模型

4. RLHF 部分

5. 推理使用

- 解码方法
- Prompt Engineering
- 反思以及其他高阶应用

6. 其他
   - Tools （API 调用）
   - Code Related
   - Math Related
   - [可选] GPT API 相关应用
   - [可选] 损失函数

### 用 ChatGPT 搭建代码知识库，提升开发效率

> https://mp.weixin.qq.com/s/MpF9xBHYjgnCHNkFn1AsOA

### 吴恩达 x LangChain《基于 LangChain 的大语言模型应用开发》

> https://juejin.cn/post/7248599585735114789

### Stable Diffusion 搭建教程

- [AI 绘画基于 Kaggle 10 分钟搭建保姆级教程](https://juejin.cn/post/7247306840199135287)
- [无显卡也能 AI 作画 | Colab](https://juejin.cn/post/7217750296171233339)
- [免费搭建个人 stable-diffusion 绘画(非本地、干货教程)](https://juejin.cn/post/7237004563647397946)

### 耗时 80 小时！超详细的胎教级 Stable Diffusion 使用教程，看这一篇就够！

> https://mp.weixin.qq.com/s/eFi-xoVDQomzCBr5kO9nHA

一篇非常非常详细完备的教程，从手把手安装部署，到界面功能讲解，再到实战案例制作，到下载优质模型，每一步都有详细说明。
并且！用一个又一个的例子展示，让大家不止是枯燥地看，而是看完立刻也能做出一样的图片出来。而且贴心给出了各种安装包的下载方式。以下列写文章内容大纲。

为什么要学 Stable Diffusion，它究竟有多强大？

1. Stable Diffusion 能干嘛
2. Stable Diffusion 是什么

三分钟教你装好 Stable Diffusion

1. 什么电脑能带动 SD，A 卡和 Mac 系统也不慌
2. 低配置电脑也能玩 Stable Diffusion
3. 一键式安装 SD 本地部署，解压即用，小白的福音

小白快速上手 Stable Diffusion

1. 用对模型，照片风格才对味儿
2. 写好关键词，让你事半功倍
3. 两分钟打造你的专属模特
4. 为什么你生成的图就是跟别人不一样
5. 一分钟生成自己的二次元造型
6. 随便画几笔，你就是“神笔马良”
7. 怎么给二次元老婆换衣服
8. 两步拯救超糊照片
9. 三秒教你获取大佬的咒语
10. 一招让你自由指定女神的姿势
11. 插画师的福音，线稿秒上色
12. 小白也能进行室内设计

Stable diffusion 知识补充

1. VAE
2. 迭代步数
3. 采样方法
4. 面部修复+高分辨率修复
5. 图片分辨率（图片大小）
6. 生成多图
7. 用脚本进行照片对比

大神的模型从哪来

1. 模型在哪下载
2. 模型下载到哪里
3. 如何分辨模型

### 深入解析大型语言模型：从训练到部署大模型

> https://juejin.cn/post/7246968973765656613

### 从后端导出文件到前端（Blob）下载过程

> https://mp.weixin.qq.com/s/bSvguln5690w-kFH55mS4g

### 效率消息中心从 0-1 搭建与思考|得物技术

> https://mp.weixin.qq.com/s/SWenfaa7obt6XrSA5gZA1A

### 解锁 PDF 文件：使用 JavaScript 和 Canvas 渲染 PDF 内容

> https://mp.weixin.qq.com/s/RGRbgcNveAcqXnRNKt_0Jw

### 成为 AI 提示工程师，这 6 项技能必不可缺！

> https://www.zdnet.com/article/six-skills-you-need-to-become-an-ai-prompt-engineer/

1. 了解人工智能、机器学习和自然语言处理

   - 既然要与大语言模型 (LLM) 进行交互，那么就要了解 LLM 的基础知识，比如分类、原理与各自优缺点，但并不一定意味着要达到自己创建 LLM 的程度
   - 建议的学习方式包括：浏览传统的课件、阅读大量文章和论文、参加会议，并自己进行实验

2. 清楚地定义问题，并转化为详细的提示词
   - 提示工程就是告诉 AI 自己需要什么，这本质上是一种沟通能力，前提就是明确地知道自己的互动目标
   - 建议掌握的能力包括：合理设置对 AI 的期望、理解提供价值的视角、了解给定查询中问题的上下文和范围，也就是了解各种 LLM 的限制以及如何解决这些限制
3. 培养创造力和会话技巧
   - 提示工程更像一种协作对话 (而不是编程)，因此辩论能力、谈判经验和销售技巧都有助于从生成式 AI 系统中获得所需的结果
   - 建议的提升策略包括：定义问题和陈述时要跳出思维框框，用各种各样的对话方法和技巧获得想要的结果
4. 理解写作和艺术风格，建立领域的专业知识
   - 聊天机器人可以按照制定风格输出内容，在文本风格、Midjourney 提示词的艺术风格方面尤为明显
   - 建议拓展的知识包括：理解写作风格和艺术风格，掌握领域的专业知识，借助更多插件完成任务
5. 练习编程技能
   - 编程技能对于使用 GPT 构建应用程序非常有帮助，每个人都应该掌握基础的编程技能
   - 建议的应用场景包括：在构建的应用程序上下文中测试提示词、运行并调试代码、顺畅完成交互式编程
6. 培养耐心和幽默感
   - 人工智能绝对需要耐心，因为它们很可能胡扯出一些答案，或者即将得到靠谱答案时又离题万里
   - 建议的行为准则包括：耐心不仅仅是一种美德，而超能力；接受没办法一蹴而就的事实，包括代码跑不通
     以上只是粗略的指导方针，更建议从你感兴趣的项目入手，比如一些小应用、小程序，和几个朋友协作一起尝试能得到什么结果，而不仅仅时拿到一个往上的知识列表

### GitHub Copilot 官方指南：Prompt 最佳实践与优秀案例

> https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/
>
> 操作示例：https://github.blog/2023-05-12-how-i-used-github-copilot-to-build-a-browser-extension/

Rizel Scarlett 和 Michelle Mannering 分享了如何使用 GitHub Copilot，提高 AI 辅助编程的效率和准确度，获取想要的结果。

生成式 AI 编程工具正在改变开发人员编程的工作方式，但是初次接触难免会觉得手生，并因为实现不了想要的结果而感到沮丧。

因此，作者在文中提供了 GitHub Copilot 的 3 个最佳实践、3 条建议，以及 1 个操作示例，来帮助快速掌握使用技巧！

🔔 什么是提示词 (prompt) 和提示工程(prompt engineering)？

作者使用图表，展示了在不同语境下二者含义的差异。对于开发者和机器学习研究者来说，prompt、 prompt engineering、context 的含义略有差别。

🔔 [GitHub Copilot 的 3 个最佳实践](https://dev.to/github/a-beginners-guide-to-prompt-engineering-with-github-copilot-3ibp)

1. 在没有上下文时，使用 GitHub Copilot 先搭建框架，再补充更多细节，有助于创建更理想的输出
2. 输入的提示词应该简单且具体，便于 GitHub Copilot 理解目标，然后逐步完成输出
3. 举一两个例子，帮助 GitHub Copilot 理解我们想要的结果
   还有更多常见技巧，如 Zero-shot learning、 、One-shot learning、Few-shot learning

🔔 GitHub Copilot 的 3 个使用建议

1. 不断对输入的提示词进行实验，思考如何完善使其更加准确和清晰
2. GitHub Copilot 采用了「Neighboring Tabs」的技术，可以将 IDE 打开的所有文件都视为上下文；使用时要确保相关 Tabs 是打开的
3. 保持良好的编程习惯，比如变量和函数的命名、编码风格保持一致等。

### LangChain 的 OpenAI Functions 实现方法官方文档

> https://python.langchain.com/docs/modules/chains/additional/openai_functions_retrieval_qa

LangChain 实现的十分巧妙：它在 LLM 模型封装上下功夫，而不是改变外部使用代码。这意味着，如果调用的是 OpenAI Chat 模型，那么就会开启 function；如果是其他模型，就会使用其他的实现方式。这种设计保证了兼容性。

LangChain 的 OpenAI Functions 允许对响应输出进行结构化，这在问答中非常有用，当你不仅想得到最终答案，还想得到支持证据、引用等信息时。在 LangChain 的文档中，他们展示了如何使用一个 LLM 链，该链将 OpenAI Functions 作为整个检索管道的一部分。

在官方示例中，他们使用了一个名为 RetrievalQA 的链，它从文档中检索信息，然后使用一个名为 StuffDocumentsChain 的链将检索到的文档与问题结合起来。他们还展示了如何使用自定义的输出模式来改变链的输出，这不仅会影响我们如何解析输出，还会改变 OpenAI 输出本身。例如，我们可以在模式中添加一个名为 countries_referenced 的参数，并描述我们希望这个参数表示什么，这将导致 OpenAI 的输出中包含一个描述。

总的来说，LangChain 的 OpenAI Functions 实现提供了一种灵活的方式来处理和结构化模型的输出，使其更适应各种不同的用例。

### Awesome-Multimodal-Large-Language-Models：多模态大型语言模型（MLLM）论文清单

> 项目链接：https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models#awesome-multimodal-large-language-models

这是 Github 上的一个开源项目，项目内容包括数据集、多模态指令调整、多模态上下文学习、多模态思维链、LLM 辅助视觉推理、基础模型等。这个清单将实时更新，为研究者提供最新的多模态大型语言模型的研究成果和数据集。

### 斯坦福大学 AI 课程设置：67 门课程构建学习路径

> https://ai.stanford.edu/courses/

斯坦福大学将 67 门 AI 相关课程聚合在一起，构建了这个课程合辑，便于进行课程选择和学习。

斯坦福大学作为世界一流的大学，出品的计算机、机器学习、深度学习等系列课程一直备受好评。课程的公开视频、课件和作业等是很多入门者系统学习的首选。
