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

## 原理

- [ChatGPT 的工作原理](https://mp.weixin.qq.com/s/gMYr8KwC_S3G4tKKMmjwxw)
- [OpenAI 联合创始人亲自上场科普 GPT，让技术小白也能理解最强 AI](https://mp.weixin.qq.com/s/zmEGzm1cdXupNoqZ65h7yg)
- [提示工程指南](https://www.promptingguide.ai/zh) [repo](https://github.com/datawhalechina/hugging-llm/tree/main/content)

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
