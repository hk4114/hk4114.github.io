---
title: AI 学习路径
category: 技术
date: 2023-5-7
vssue: true
---

## AIGC 学习路径、资源整合

Level 1 使用享受 AI 红利
- 注册一个 ChatGPT 账号，。
- 使用体验各个大模型:ChatGPT, Claude, [Poe](https://poe.com/) 以及应用 New Bing、ChatPDF、notion ai、Character.ai。
- 积极尝试在自己的工作流中嵌入 ChatGPT/MidJourney 等产品，写代码，写周报， 脑暴想法，总结文档，翻译等。生活中的问题也可以积极问。总而言之多使用。

Level 2 Prompt Engineer 
- Prompt 是科学也是艺术。科学性体现在 Prompt 的效果很多时候是稳定可复现的。好的 Prompt 能够让 GPT 学会调用工具和 API(HuggingGPT)，学会操控机器人，学会和其他 AI Agent 协同(CAMEL)
- 掌握 Prompt Engineering 通用原则: Few-shot prompting, Chain of Thoughts, Self-Ask 等等，Prompt Engineering 进阶技巧: ToT, Automatic Prompt Engineer (APE), APE ， Prefix-Tuning, P-Tuning, Prompt Tuning。 例如 APE 通过程序化调试 Prompt 的方式 发现了比人工试出来的“Let's think step by step”更好的零样本 CoT Prompt. 多看、多 搜、多想、多练，很快你就会成为 Prompt 高手

Level 3 API Developer
- 并获得 OpenAI 的 [API Key](https://platform.openai.com/account/api-keys)
- 注册 [Google Colab](https://colab.google/) 不用下载配置本地环境即可线上实现很多大模型的框架
- 注册并多逛 [Hugging Face](https://huggingface.co/) 有大量开源模型，数据集，以及模型的线上体验
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) 对于开发人员来说，这是使用 Open AI 的指南和代码示例的权威集合

Level 4 LLM Developer
- 学习 [Langchain](https://python.langchain.com/en/latest/) 框架，LangChain 是目前 LLM 应用搭建最主流的框架，能给 LLM 这个“大脑”组装上“手”和“腿”，一定要了解 Agent，Memory，Chain 等核心概念
- Build with LLM 建造自己的 AI 助手。实践开干，LLM 应用层程序开发:掌握开发框架可以极大的提升实践效率，同时 Github 上有大量 GPT 开源项目可以参考实践。动手实践干中学。

## 参考资料

- [提示工程指南](https://www.promptingguide.ai/zh) [repo](https://github.com/datawhalechina/hugging-llm/tree/main/content)
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) 对于开发人员来说，这是使用 Open AI 的指南和代码示例的权威集合
- [飞桨](https://aistudio.baidu.com/aistudio/education/dashboard)
- [魔搭](https://www.modelscope.cn/home)

## ChatGPT 的工作原理

> https://mp.weixin.qq.com/s/QOeL3Q9fsniyh4aEdpiWaA

这篇内容介绍了 ChatGPT（一种大型语言模型）的工作原理。

ChatGPT 通过分析数十亿个网页上的文本来预测下一个词的合理延续，并生成一个可能的词的排序列表。在选择下一个词时，模型可以采用高排名词或随机选择较低排名词的方法，以产生不同风格的文本。温度参数可以控制排名较低词被选中的频率。该文章还提到了使用简化版本的 GPT-2 模型，并给出了相关代码示例。

文章还讨论了如何通过分析语料库来计算字母和 n-gram 的概率，并以此生成更真实的文本。

### OpenAI 联合创始人亲自上场科普 GPT，让技术小白也能理解最强 AI

> https://mp.weixin.qq.com/s/zmEGzm1cdXupNoqZ65h7yg

详细介绍了如何从 GPT 基础模型训练出 ChatGPT 助手模型，并解释了大型语言模型的内部原理和 RLHF 训练细节。

演讲中提到了预训练、有监督微调、奖励建模和强化学习等四个主要阶段，并介绍了标记化、Transformer 神经网络架构等技术细节。这场演讲非常精彩，并推荐给所有关心大型语言模型的人。


## 生成式 AI 应用路线图：多模态 AI 的应用能力演进

> 路线图解读：https://mp.weixin.qq.com/s/dSXgDrvcM8GD33RWu78gyA
>
> 路线图：https://github.com/SeedV/generative-ai-roadmap

随着生成式 AI「对生成内容的可控性」不断提高，其应用场景也在不断扩展和深化，这个演进过程大致分为如图所示的 6 个阶段。

与简单的文本/图片生成相比，包含声音、视频、3D 场景、动画、复杂故事线的多模态系统，与人类的常识感受和本源需求更加契合，明显拥有更宽广深远的应用前景。

作者认为，生成式 AI 会大致按照图示的脉络演进积累，不断催生有革命意义的新应用、新平台甚至颠覆性的新商业模式

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

### 基于 ChatGLM-6B 搭建个人专属知识库

> https://juejin.cn/post/7233625509107384379

ChatGLM-6B 是一个垂直领域的语言模型，使用了 P-Tuning 微调技术。它可以通过向量嵌入技术实现个人专属知识库，并在提问时匹配最相关的知识库片段，将其与问题一起提交给 LLM 生成回答。这个模型可以应用于多个领域，如财务分析、智能客服、律师助手和在线问诊医生等。部署和配置该模型需要一些准备工作，但使用 Gradio 页面可以改进用户体验。

垂直领域的 LLM 专属模型在生产落地过程中需要微调，但微调对非专业人员不友好，需要专业知识、大量计算资源和时间。ChatGLM-6B + langchain 可以实现无需微调的垂直领域专业问答，创建个人专属知识库简单易上手。
技术原理是使用向量嵌入（embedding）将用户知识库和问题进行向量化，利用向量相关性算法（如余弦算法）匹配最相似的知识库片段，并将其作为上下文与用户问题一起提交给 LLM 生成回答。可以调整 prompt 和匹配不同的知识库，让 LLM 扮演不同角色，如财务分析师、智能客服、律师助手、在线问诊医生等。部署和配置该系统需要准备环境、下载源码、安装依赖和模型，并进行参数调整。可以通过 Web 模式、API 模式或命令行模式启动系统。可以选择不同的知识库，并基于知识库进行问答。


## 手把手带你实现：基于 Langchain 和 chatglm-6b 构建本地知识库的自动问答应用

> https://www.bilibili.com/video/BV11N411y7dT/

## 【AI】Full Stack LLM Bootcamp: LLM 应用开发全栈指南 (免费训练营)

> https://fullstackdeeplearning.com/llm-bootcamp/

The Full Stack 是一个人工智能学习网站，提供各类免费课程和训练营，帮助用户熟悉深度学习基础技能，并提供实践计划以提升实际操作能力。
近期 ，网站推出了新的训练营课程「Full Stack LLM Bootcamp」，帮助了解基于 LLM 构建 App 所需要的最佳实践和工具，掌握从提示工程到「用户中心设计」的全栈技能！以下是课程笔记要点！学习课程与查看完整笔记

1. [笔记 1 LLM 应用开发全栈指南](https://mp.weixin.qq.com/s/weH_7K2g3sBMbtei1_dTng)
2. [笔记 2 LLM 全栈开发指南补遗](https://mp.weixin.qq.com/s/3zijYYxIJA5rJz9fBoArPw)



## 关于「构建 LLM App」你所需要知道的一切
> https://towardsdatascience.com/all-you-need-to-know-to-build-your-first-llm-app-eb982c78ffac?gi=5d54fa947d4f

这是一篇长文，非常细致地讲解了如何使用 LLM 构建应用程序，并解释了相关概念的含义，以及你所需要的所有代码段。当然，如果你只想看一个「快速使用LLM构建应用程序」的简短教程，可以直接跳转到最后一部分！

1. 我们为什么需要大语言模型 (LLM)
2. 微调 VS 上下文注入
   1. Fine-Tuning (微调)
   2. In-context learning / Context Injection (情景学习 / 上下文注入)
3. 什么是LangChain？
   1. Models (模型)：各类模型的接口
   2. Prompts (提示)：提示管理、提示优化、提示序列化
   3. Indexes (索引)：：文档加载器、文本拆分器、矢量存储-支持更快、更高效地访问数据
   4. Chains (链)：链超出了单个LLM调用，它们允许我们设置调用序列
   5. Agents (代理)：是使用LLM来选择要采取哪些操作的实体
4. 手把手教你使用 LLM 构建App
   1. 使用LangChain加载文档
   2. 将文档拆分为文本块
   3. 从文本块到嵌入
   4. 定义要使用的LLM
   5. 定义提示模板
   6. 创建矢量存储

## 大语言模型 (LLM) 学习路径和资料汇总 (工程向)

> https://ninehills.tech/articles/97.html

这是 @ninehills 使用优质公开资料 (尽可能选择了中文) 构建的 LLM 学习路径，侧重工程方向，总共分为 4 个章节。读者可以根据自己需要选择对应的章节。

#### 1. 入门篇

了解 LLM 基础知识和常见术语，使用编程语言访问 OpenAI API 等常见大语言模型接口

- 大语言模型综述 ：https://github.com/RUCAIBox/LLMSurvey
- ChatGPT Prompt Engineering for Developers https://learn.deeplearning.ai/chatgpt-prompt-eng/lesson/1/introduction
- OpenAI Quickstart ：https://platform.openai.com/docs/quickstart
- State of GPT：https://www.youtube.com/watch?v=bZQun8Y4L2A

#### 2. 提高篇

了解机器学习、神经网络、NLP 的基础知识，了解 Transformer 以及典型 Decoder-only 语言模型的基础结构和简单原理，了解大语言模型发展历史，以及业界主流模型 (含开源模型) 进展

- 清华大模型公开课：https://www.bilibili.com/video/BV1UG411p7zv
- 深度学习：台湾大学李宏毅：https://www.bilibili.com/video/BV1J94y1f7u5/
- Understanding large language models：https://www.wandb.courses/courses/take/building-llm-powered-apps/lessons/44341580-understanding-large-language-models
- The Illustrated GPT-2 (Visualizing Transformer Language Models) ：jalammar.github.io/illustrated…
- InstructGPT: Training language models to follow instructions with human feedback：cdn.openai.com/papers/Trai…
- Huggingface NLP Course：https://huggingface.co/learn/nlp-course/chapter1/1

#### 3. 应用篇

可以在本地环境搭建开源模型的推理环境，使用已有框架 (如 Langchain) 或自行开发生产应用

- Building Systems with the ChatGPT API：learn.deeplearning.ai/chatgpt-bui…
- Langchain：python.langchain.com/
- GPT best practices：platform.openai.com/docs/guides…
- openai-cookbook：github.com/openai/open…
- Brex’s Prompt Engineering Guide：github.com/brexhq/prom…

#### 4. 深入篇

掌握 Continue Pre-train、Fine-tuning 已有开源模型的能力，掌握 Lora、QLora 等低资源高效模型训练的能力，掌握大语言模型微调以及预训练数据准备的能力，深入了解大模型背后的技术原理，了解生产环境部署大模型的相关技术点

- Huggingface Transformer 文档：huggingface.co/docs/transf…
- 复杂推理：大语言模型的北极星能力：yaofu.notion.site/6dafe3f8d11…
- GPT，GPT-2，GPT-3 论文精读：www.bilibili.com/video/BV1AF…
- Building LLM applications for production：huyenchip.com/2023/04/11/…

## 斯坦福大学 AI 课程设置：67 门课程构建学习路径

> https://ai.stanford.edu/courses/

斯坦福大学将 67 门 AI 相关课程聚合在一起，构建了这个课程合辑，便于进行课程选择和学习。

斯坦福大学作为世界一流的大学，出品的计算机、机器学习、深度学习等系列课程一直备受好评。课程的公开视频、课件和作业等是很多入门者系统学习的首选。

## 吴恩达AI系列再出新课，LangChain: Chat with Your Data
> LangChain: Chat with Your Data： https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data

吴恩达与 LangChain 创始人 Harrison Chase 合作再出一门 LLM 实践课程「LangChain: Chat with Your Data」，基于 LangChain 使用 LLM 构建私有数据的问答系统和聊天机器人。课程时常1小时，适合初学者入门学习。
这是双方继一个月联合发布「LangChain for LLM Application Development」课程后的又一次合作，帮助使用 LangChain 这个工具库快速创建简单的 LLM 应用。

本次主要包括以下2个主题：
- 检索增强生成 (Retrieval Augmented Generation，RAG)，这是一个常见的LLM应用程序，可从外部数据集检索上下文文档
- 构建聊天机器人的指南，该机器人根据文档的内容而不是在训练中学到的信息来响应查询

主要内容：
1. 文档加载：了解数据加载的基本知识，并发现LangChain提供的80多个独特的加载器，用于访问各种数据源，包括音频和视频
2. 文档拆分：了解拆分数据的最佳实践和注意事项
3. 矢量存储和嵌入：深入了解嵌入 (emebdding) 的概念，探索LangChain中的矢量存储集成
4. 检索：掌握访问和索引矢量存储中数据的高级技术，使您能够检索语义查询之外最相关的信息
5. 答题：构建一次答题解决方案
6. 聊天：了解如何跟踪和选择对话和数据源中的相关信息，因为您使用LangChain构建自己的聊天机器人
7. 开始构建实用的应用程序，允许您使用 LangChain 和 LLM 与数据交互

## AI Agents 绝佳综述：OpenAI团队的 Agents 理解与发展规划
> 中文翻译：https://mp.weixin.qq.com/s/Jb8HBbaKYXXxTSQOBsP5Wg
>
> 原文：https://lilianweng.github.io/posts/2023-06-23-agent/

LLM Powered Autonomous Agents 是 @Lilian Weng 一篇广泛传播的博文，可以说是目前 AI Agent 领域优质论文的系统综述。Lilian 现在是 OpenAI 的 Head of Safety Systems，之前还领导过 OpenAI 的 Applied AI 团队，她的文章绝对值得一看~

AI Agent 被认为是 OpenAI 发力的下一个方向。Lilian 将 Agents 定义为 LLM、Planning、Memory、Tools的集合，并在文章中对每个组建的实现路径进行了细致说明：
- LLM (大语言模型) 是核心大脑
- Planning (任务规划) 、Memory (记忆)、Tool use (工具使用) 等则是 Agents 系统实现的三个关键组件

## 【AI】LangChain 和 LlamaIndex 项目实践手册：将大型语言模型应用于现实世界

> online: https://leanpub.com/langchain/read
>
> github: https://github.com/mark-watson/langchain-book-examples

是一本以技能和项目为主线的 LangChain 主题书籍，介绍如何利用 LangChain、LlamaIndex 项目、ChatGPT API 解决一系列问题。

该书涵盖了安装和使用 LangChain 和 LlamaIndex 的基本要求，以及使用 Google Knowledge Graph API、使用 Hugging Face 开源模型、使用 Zapier 集成等方面的示例。它还提供了关于大型语言模型的概述和使用场景的讨论。该书的目标读者是希望构建自己的工具并提升程序设计能力的开发人员。

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

## 教程

> 绘画 https://www.bilibili.com/medialist/detail/ml2243104665
>
> 语音合成 https://www.bilibili.com/medialist/detail/ml2252128065

### Midjourney 中文教程

1. [Midjourney 保姆级注册教程](https://mp.weixin.qq.com/s/0rllMo2iu8Blwz0DtTBeVA)
2. [MidJourney 学习导航](https://learningprompt.wiki/docs/midjourney-learning-path)
3. 最好的 MidJourney 中文教程 https://www.bilibili.com/video/BV1p24y1h7CQ
4. MidJourney 常用参数超详细介绍及用法 [介绍 1](https://mp.weixin.qq.com/s/dLkoNpXAI51U9uc9IWhphA) | [介绍 2](https://mp.weixin.qq.com/s/QJQChAb8-fjtubQk75OlBg)
5. [UI/UX 设计师如何用好 Midjourney？我总结了5个方面！](https://www.uisdc.com/midjourney-ui)

### Stable Diffusion
[万字长文！从零开始带你进阶AI绘画神器 Stable Diffusion](https://www.uisdc.com/stable-diffusion-8) 这是一篇 Stable Diffusion 的进阶教程。开篇介绍了作者个人的 SD 学习路线，清晰合理，值得借鉴。

[AI 绘画基于 Kaggle 10 分钟搭建保姆级教程](https://juejin.cn/post/7247306840199135287)

[无显卡也能 AI 作画 | Colab](https://juejin.cn/post/7217750296171233339)

[免费搭建个人 stable-diffusion 绘画(非本地、干货教程)](https://juejin.cn/post/7237004563647397946)

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

