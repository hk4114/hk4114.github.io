---
title: AI 核心文章
category: 技术
date: 2023-5-7
vssue: true
---

## 常用 AI 镜像
- [老北鼻AI - chatGPT 3.5 turbo](https://lj.lbbai.com/#url=lbbdh)
- [多语 - chatGPT 3.5 turbo](https://dy-ai.cn/)
- [镜像 可用4](https://gpttalk.live/)
- [ChatMind](https://www.chatmind.tech/) 根据输入文字生成思维导图、表格和文字
- [chatGPT 镜像](https://chat2.jinshutuan.com/)

### 【AI】ai 应用聚合网站
- [ai 工具集](https://ai-bot.cn/)
- [一起用 ai](https://17yongai.com/)
- [tabxx](https://tabxx.com/) 含教程


## 互联网人的大模型实践指南：从小白到AI Builder

1. 注册一个 ChatGPT 账号，并获得 OpenAI 的 [API Key](https://platform.openai.com/account/api-keys)。
2. 注册 [Google Colab](https://colab.google/) 不用下载配置本地环境即可线上实现很多大模型的框架
3. 注册并多逛 [Hugging Face](https://huggingface.co/) 有大量开源模型，数据集，以及模型的线上体验
4. 使用体验各个大模型:ChatGPT, Claude, [Poe](https://poe.com/) 以及应用 New Bing、ChatPDF、notion ai、Character.ai。积极尝试在自己的工作流中嵌入 ChatGPT/MidJourney 等产品，写代码，写周报， 脑暴想法，总结文档，翻译等。生活中的问题也可以积极问。总而言之多使用。
5. Prompt 是科学也是艺术。科学性体现在 Prompt 的效果很多时候是稳定可复现的。好的 Prompt 能够让 GPT 学会调用工具和 API(HuggingGPT)，学会操控机器人，学会和其他 AI Agent 协同(CAMEL)
6. 掌握 Prompt Engineering 通用原则: Few-shot prompting, Chain of Thoughts, Self-Ask 等等，Prompt Engineering 进阶技巧: ToT, Automatic Prompt Engineer (APE), APE ， Prefix-Tuning, P-Tuning, Prompt Tuning。 例如 APE 通过程序化调试 Prompt 的方式 发现了比人工试出来的“Let's think step by step”更好的零样本 CoT Prompt. 多看、多 搜、多想、多练，很快你就会成为 Prompt 高手
7. [OpenAI Cookbook](https://github.com/openai/openai-cookbook) 对于开发人员来说，这是使用 Open AI 的指南和代码示例的权威集合
8. 学习 [Langchain](https://python.langchain.com/en/latest/) 框架，LangChain 是目前 LLM 应用搭建最主流的框架，能给 LLM 这个“大脑”组装上“手”和“腿”，一定要了解 Agent，Memory，Chain 等核心概念
9. Build with LLM 建造自己的 AI 助手。实践开干，LLM 应用层程序开发:掌握开发框架可以极大的提升实践效率，同时 Github 上有大量 GPT 开源项目可以参考实践。动手实践干中学。[LLM Bootcamp](https://fullstackdeeplearning.com/llm-bootcamp/) 构建基于 LLM 的应用程序的实用课程


## 企业微信 + Openai
> https://github.com/ConnectAI-E/WeWork-OpenAI-Node

## 手把手带你实现：基于 Langchain 和 chatglm-6b 构建本地知识库的自动问答应用
> https://www.bilibili.com/video/BV11N411y7dT/

## 『搭建基于LLM的客服系统的实践』基于清华大模型 ChatGLM-6B 完成6类任务
- 任务1：客服打招呼任务 (已完成)
- 任务2：实现交谈任务分类 (已完成)
- 任务3：实现交谈内容相似度任务 (已完成)
- 任务4：实现交谈内容结构化提取任务
- 任务5：实现本地知识库和网络搜索的增强任务
- 任务6：实现自动化任务

[系列一](https://zhuanlan.zhihu.com/p/626232785)
0. 环境说明
1. ChatGLM-6B介绍
2. 硬件需求：最低 GPU 显存
3. 环境安装：使用 pip 安装依赖
4. API部署

[任务1：客服打招呼任务](https://zhuanlan.zhihu.com/p/626234226)
1. 首先定义role的prompt，让模型知道自己的角色
2. 然后再描述一下客户的基本信息
3. 最后加上命令，生成完整的prompt，发给模型

[任务2：实现交谈任务分类](https://zhuanlan.zhihu.com/p/626416551)
1. 根据场景定义好分类
2. 按照业务场景预先生成分类的例子
3. 构建 prompt 作为 pre_history 送到模型参数中
4. 把要做分类的句子输给模型，模型根据要求进行分类，并输出

[任务3：实现交谈内容相似度任务](https://zhuanlan.zhihu.com/p/627333923)
1. 根据场景选择一些常用的对话
2. 按照业务场景预先生成对话比对的例子 (比对目标最好是内设场景对话)
3. 构建 prompt 作为 pre_history 送到模型参数中
4. 把要做分类的句子输给模型，模型根据要求进行比对，并输出是还是不是


## 基于 ChatGLM-6B 搭建个人专属知识库
> https://juejin.cn/post/7233625509107384379

ChatGLM-6B是一个垂直领域的语言模型，使用了P-Tuning微调技术。它可以通过向量嵌入技术实现个人专属知识库，并在提问时匹配最相关的知识库片段，将其与问题一起提交给LLM生成回答。这个模型可以应用于多个领域，如财务分析、智能客服、律师助手和在线问诊医生等。部署和配置该模型需要一些准备工作，但使用 Gradio 页面可以改进用户体验。

垂直领域的 LLM 专属模型在生产落地过程中需要微调，但微调对非专业人员不友好，需要专业知识、大量计算资源和时间。ChatGLM-6B + langchain 可以实现无需微调的垂直领域专业问答，创建个人专属知识库简单易上手。
技术原理是使用向量嵌入（embedding）将用户知识库和问题进行向量化，利用向量相关性算法（如余弦算法）匹配最相似的知识库片段，并将其作为上下文与用户问题一起提交给 LLM 生成回答。可以调整 prompt 和匹配不同的知识库，让 LLM 扮演不同角色，如财务分析师、智能客服、律师助手、在线问诊医生等。部署和配置该系统需要准备环境、下载源码、安装依赖和模型，并进行参数调整。可以通过 Web 模式、API 模式或命令行模式启动系统。可以选择不同的知识库，并基于知识库进行问答。

## 【AI】LangChain和LlamaIndex项目实践手册：将大型语言模型应用于现实世界
> online: https://leanpub.com/langchain/read
>
> github: https://github.com/mark-watson/langchain-book-examples

是一本以技能和项目为主线的 LangChain 主题书籍，介绍如何利用 LangChain、LlamaIndex 项目、ChatGPT API 解决一系列问题。

该书涵盖了安装和使用LangChain和LlamaIndex的基本要求，以及使用Google Knowledge Graph API、使用Hugging Face开源模型、使用Zapier集成等方面的示例。它还提供了关于大型语言模型的概述和使用场景的讨论。该书的目标读者是希望构建自己的工具并提升程序设计能力的开发人员。

## 教程
> 绘画 https://www.bilibili.com/medialist/detail/ml2243104665
>
> 语音合成 https://www.bilibili.com/medialist/detail/ml2252128065

### Midjourney 中文教程
1. [Midjourney保姆级注册教程](https://mp.weixin.qq.com/s/0rllMo2iu8Blwz0DtTBeVA)
2. [MidJourney 学习导航](https://learningprompt.wiki/docs/midjourney-learning-path)
3. 最好的 MidJourney 中文教程 https://www.bilibili.com/video/BV1p24y1h7CQ
4. MidJourney 常用参数超详细介绍及用法 [介绍1](https://mp.weixin.qq.com/s/dLkoNpXAI51U9uc9IWhphA) | [介绍2](https://mp.weixin.qq.com/s/QJQChAb8-fjtubQk75OlBg)

### Stable Diffusion
[Stable Diffusion 视频教程](https://www.bilibili.com/video/BV1BM4y127eD/)

[零基础学会Stable Diffusion 视频教程](https://www.bilibili.com/video/BV1As4y127HW/)

B站UP主「Nenly同学」正在更新一门神仙课程——《零基础学会Stable Diffusion》，并号称「B站第一套系统的AI绘画课」。课程上线两周已经获得了23W+的播放

[开源图像模型Stable Diffusion入门手册](https://mp.weixin.qq.com/s/8czNX-pXyOeFDFhs2fo7HA)

[教会你使用AI绘画利器Stable Diffusion](https://mp.weixin.qq.com/s/9Dw2GYkg6b1vvKKyJQ-3TA)

[手把手教你用Stable Diffusion写好提示词](https://mp.weixin.qq.com/s/sEQpP5S7W_gsCUf3i7OZiQ)

试用 stable diffusion 画图

适用场景：不会在电脑上搭环境，显卡不行。但是会翻墙。

github.com/camenduru/stable-diffusion-webui-colab

stable-diffusion-webui-colab 是我用过的最方便的环境搭建脚本。点几下链接就搞定了！

1. 注册登录好 google colab 账号
2. 从列表里面选好你要运行的模型，比如最近很火的midjourney，midjourney_v4_diffusion_webui_colab（如果你想画漂亮小姐姐就选chillout_mix_webui_colab）
3. 每个模型都有v1.9和v2.0两个版本，优先选择v2.0，因为已经包含了ControlNet
4. 点击链接后会跳转到google colab，然后点击左上角三角播放按钮等搭建好环境
5. 等脚本运行，运行好了你可以看到有几个网址，点击就可以打开UI做图了。

完整教程参考[如何在 Google Colab 上部署 Stable Diffusion Web UI Colab](https://atlassc.net/2023/02/18/stable-diffusion-webui-colab-guide-for-beginners)


[Stable Diffusion 你需要知道的算法原理（通俗版）](https://mp.weixin.qq.com/s/2-mihwrCmYW2We2H67zzPg)
01 Stable Diffusion原理介绍

1. 什么是扩散 (Diffusion)
2. 扩散 (Diffusion) 是怎么能被稳定 (Stable) 控制的 (以文生图为例)
3. CLIP：我们输入的文字prompt是如何起作用的
4. UNET：扩散模型的工作原理
5. 理解VAE的编解码过程

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

[教你打造属于自己的AI孙燕姿，AI歌手模型使用及训练保姆级课程 #1/2 使用模型](https://mp.weixin.qq.com/s/bXD1u6ysYkTEamt-PYI1RA)

[教你打造属于自己的AI孙燕姿，AI歌手模型使用及训练保姆级课程 #2/2 训练模型](https://mp.weixin.qq.com/s/IeeW1PbMUbxMlLl529JTYQ)


## 接入 ChatGPT 的文章教程

相关[机器人项目](/robot-collections)




