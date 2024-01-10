---
title: AI 学习路径
category: 技术
date: 2023-5-7
vssue: true
---

## Level 1 - 享受 AI 红利、多用 AI

多使用。在自己的工作流中加入 AI 产品。写代码，写周报，脑暴想法，总结文档，翻译等。生活中的问题也可以积极问。

### 日常使用的 AI 工具

|                     应用                     |                                                         功能                                                         |
| :------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
|           [Poe](https://poe.com/)            |                                       聚合，可以使用 Claude、GPT-4、copilot 等                                       |
|        [ChatHub](https://chathub.gg)         |                                                  聚合，需要登陆状态                                                  |
|   [perplexity](https://www.perplexity.ai/)   |                                          查资料,全网搜索主题并给出引用地址                                           |
|         [devv.ai](https://devv.ai/)          |                                           一个新的面向程序员的 AI 搜索引擎                                           |
| [蚂蚁 CodeFuse](https://codefuse.alipay.com) |                蚂蚁自研，IDE 插件，可以完成代码补全、代码优化、添加注释、解释代码、生成单测等编程任务                |
|   [ChatGPT](https://platform.openai.com/)    | 镜像：[老北鼻 AI - chatGPT 3.5 turbo](https://lj.lbbai.com/#url=lbbdh)、[chatGPT 镜像](https://chat18.aichatos.xyz/) |
|       [bard](https://bard.google.com/)       |                                                      支持长文本                                                      |
| [Claude](https://www.anthropic.com/product)  |                                                      支持长文本                                                      |
|     [文心一言](https://yiyan.baidu.com/)     |                                                        国内版                                                        |
|    [通义千问](https://qianwen.aliyun.com)    |                                                        国内版                                                        |
|     [consensus](https://consensus.app/)      |                              专门做研究的 ChatGPT 平台：你的答案完全来自论文，免费使用                               |
|       [智朴清言](https://chatglm.cn/)        |                                                        国内版                                                        |

### 云平台

|                              应用                               |                                                  功能                                                  |
| :-------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
|             [Hugging Face](https://huggingface.co/)             |                         注册并多逛，有大量开源模型，数据集，以及模型的线上体验                         |
|              [Google Colab](https://colab.google/)              |                            不用下载配置本地环境即可线上实现很多大模型的框架                            |
|          [Lepton AI](https://www.lepton.ai/playground)          | 这个网站把开源的 AI 模型，都做成了云服务，你可以在本地用一行命令调用，也可以在它的网站上试玩这些模型。 |
|          [阿里云 PAI](https://pai.console.aliyun.com/)          |                                                                                                        |
|            [阿里云百炼](https://bailian.aliyun.com/)            |                                                                                                        |
|             [魔搭](https://www.modelscope.cn/home)              |                                                                                                        |
| [飞桨](https://aistudio.baidu.com/aistudio/education/dashboard) |                                                                                                        |

### Level 2 - Prompt Engineer

> 输出：[我所知道的 chatGPT 提示工程](https://juejin.cn/post/7245519751224934461)
> 
> 输出：[提示词技巧手册](https://juejin.cn/spost/7274626136328142900)

### Level 3 - API Developer
- [大模型应用知识地图：RAG、Agent、Prompt Engineering 要点概览](https://www.mubu.com/doc/2yVWogEso5i)
- [动画科普，Transformer 的诞生，让生成式 AI 成为可能](https://baoyu.io/pages/ft/generative-ai)
- [图解大语言模型](https://mp.weixin.qq.com/s/P1enjLqH-UWNy7uaIviWRA)

### Level 4 - LLM Developer & Agent

Build with LLM 建造自己的 AI 助手。

动手实践干中学。LLM 应用层程序开发。掌握开发框架可以极大的提升实践效率，同时 Github 上有大量 GPT 开源项目可以参考实践。

- [LangChain 与 ChatGPT 重塑 AI 客服服务](https://juejin.cn/post/7267441368061739042)
- [一站式 LLM 底层技术原理入门指南](https://s3tlxskbq3.feishu.cn/docx/NyPqdCKraoXz9gxNVCfcIFdnnAc)面向非科班出身但想要了解 AI 技术原理的受众的 飞书文档。文档从浅到深，覆盖了非常多内容细节，并在持续更新 LLM 最新技术进展及相关原理！
  1. 点击 GeminiProChat 右侧的「Deploy」按钮，进入创建程序 (需要根据提示使用 GitHub 等账号进行登录)
  2. 点击「Create Git Repository」的「Create」按钮，创建项目
  3. 在「Configure Project」的 Value 一栏中输入自己的Google Gemini API Key (免费的，需要自己申请)，点击「Deploy」按钮
  4. 等待几秒钟即可创建成功，点击进入对话界面
- 英文资料 [Full Stack LLM Bootcamp: LLM 应用开发全栈指南 免费训练营](https://fullstackdeeplearning.com/llm-bootcamp/) 帮助了解基于 LLM 构建 App 所需要的最佳实践和工具，掌握从提示工程到「用户中心设计」的全栈技能！以下是课程笔记要点！学习课程与查看完整笔记。[笔记 1 LLM 应用开发全栈指南](https://mp.weixin.qq.com/s/weH_7K2g3sBMbtei1_dTng) / [笔记 2 LLM 全栈开发指南补遗](https://mp.weixin.qq.com/s/3zijYYxIJA5rJz9fBoArPw)
- 英文资料 [Langchain](https://python.langchain.com/en/latest/) 框架，LangChain 是目前 LLM 应用搭建最主流的框架，能给 LLM 这个“大脑”组装上“手”和“腿”，一定要了解 Agent，Memory，Chain 等核心概念
- 英文资料 [斯坦福大学 AI 课程设置：67 门课程构建学习路径](https://ai.stanford.edu/courses/)斯坦福大学将 67 门 AI 相关课程聚合在一起，构建了这个课程合辑，便于进行课程选择和学习。斯坦福大学作为世界一流的大学，出品的计算机、机器学习、深度学习等系列课程一直备受好评。课程的公开视频、课件和作业等是很多入门者系统学习的首选。
- [向量数据库](https://guangzhengli.com/blog/zh/vector-database/) 主要介绍了向量数据库的原理和实现，包括向量数据库的基本概念、相似性搜索算法、相似性测量算法、过滤算法和向量数据库的选型等等。
- [LangChain AI Handbook，一本非常系统和全面的教程性手册](https://www.pinecone.io/learn/series/langchain) 全面介绍了 LangChain 的各个方面。该手册手册包含多章节，每章聚焦一个话题，如提示工程、会话记忆、检索增强、自定义工具等，是一篇针对 LangChain 使用的非常系统和全面的教程性手册。

#### 教程

[用 Ollama 轻松玩转本地大模型，附基础教程&进阶玩法](https://sspai.com/post/85193) https://ollama.ai/
本地大模型和基于 llama.cpp 的应用，门槛还是比较高的，因此局限在少数极客和研究者圈子里，劝退了很多普通学习者和开发者。
Ollama 这个简明易用的本地大模型运行框架，通过简单的安装指令，就能够帮助用户在本地快速运行开源大模型了！
而且，围绕着 Ollama 的开发者生态，进一步简化了用户的操作难度，能够让更多人以最简单快速的方式在本地把大模型跑起来~

1. 快速上手：支持macOS、Windows (通过WSL 2) 和Docker，用户可以通过简单的命令行操作来下载和运行模型，如使用 ollama pull 和 ollama run 命令
2. 套上外壳：Ollama提供了多种用户界面 (UI) 选项，包括WebUI、oterm、Raycast插件等；提供了丰富的功能和快捷键支持，使得与大模型的交互更加直观和便捷
3. 用户可以根据需要更换不同的模型，通过指定模型名和标签来选择特定的模型版本
4. Ollama支持图片输入，用户可以直接将图片路径提供给模型以获取文本内容
5. 用户可以自定义系统提示词，以改变模型的响应风格和内容
6. Ollama的ModelFile允许用户进一步自定义模型的行为，包括对话模板、推理温度等

[Awesome AIGC Tutorials](https://github.com/luban-agi/Awesome-AIGC-Tutorials/blob/main/README_zh.md)
该仓库收集各种生成式 AI 的教程。

[大规模语言模型：从理论到实践](https://intro-llm.github.io/)

复旦大学张奇教授团队写了一本在线免费的电子书，《大规模语言模型：从理论到实践》，大概有 300 页篇幅，将大模型从理论到实战的每个阶段都描述的较为清楚。

**[LLM 学习手册，掌握核心知识点 & 学会如何选择模型](https://ai-guide.future.mozilla.org/)**

这是一篇 LLM 学习小手册，2023 年 9 月最新开源的，介绍了 LLM 的核心知识点，并且提供了模型选择指导和实战案例展示，是一个可以快速完成学习的教程！
以下是各章节主要内容，教程的结构和基础内容覆盖还不错，感兴趣可以前往网站学习：

1. 简介 / Introduction：通过提供这份开源指南，帮助工程师了解人工智能，尤其是大型语言模型 (LLM)
2. 人工智能基础知识 / AI Basics：定义 AI、LLM 及其能力和局限性，并从技术层面解释 LLM 的工作原理
3. 语言模型 101 / Language Models 101：提供有关模型架构、训练和推理的具体内容，并解释了参数、微调、束搜索等关键概念
4. 选择 ML 模型 / Choosing ML Models：就如何开始使用模型和评估结果提供指导
5. 著名项目 / Notable Projects：将重点介绍完整的 LLM 解决方案、运行时、检索增强、协调和前端
6. 从左侧大纲可以看出，一些核心章节仍待上传，可以蹲一波更新：数据检索、图像模型、微调、构建模型和音频/视频模型

**[LLM 应用全栈开发 | 实践笔记](https://aitutor.liduos.com)**

理论学习部分由 Langchain、LlamaIndex 等开源工具文档、一些最佳实践的技术博客、论文阅读三部分组成。在每个工具的理论学习结束后，辅以实践性代码帮助理解。最后会将各个模块整合起来实现一个信息处理系统。

[官方教程 | ChatGLM3-6B 部署和微调 (Function Call、Code Interpreter、Agent)](https://www.bilibili.com/video/BV1uC4y1J7yA)

ChatGLM3-6B 是 ChatGLM 系列最新一代的开源模型，于 10 月 27 日推出，在保留了前两代模型对话流畅、部署门槛低等众多优秀特性的基础上，引入了更强大的基础模型、更完整的功能支持等特性。
11 月 1 日，开发团队在 B 站分享了 ChatGLM3-6B 部署和微调的视频教程，时长约 1 小时。

**[LLM 开发必修课，6 周教你用热门框架开发商业级 LLM 产品](https://www.edx.org/course/large-language-models-application-through-production)**

这门课程面向开发人员、数据科学家和工程师，帮助使用最流行的框架 (如 Hugging Face、LangChain) 来构建面向大语言模型的应用程序。通过这门课程的学习,你能够构建一个端到端的 LLM 工作流程，使其准备上线生产。

- 模块 1：用 LLM 应用
- 模块 2：嵌入、向量数据库和搜索
- 模块 3：多阶段推理
- 模块 4：LLM 的微调和评估
- 模块 5：社会与 LLM-偏见和安全
- 模块 6：LLMOps

学习收获

- 如何使用流行的库 (如 Hugging Face、LangChain) 将 LLM 应用到自然语言处理 (NLP) 的实际问题中
- 如何使用嵌入和向量数据库将域知识和记忆添加到 LLM 流程中
- 理解预训练、微调和提示工程的细微差别,并将这些知识应用到自定义聊天模型的微调中
- 如何使用不同的方法来评估 LLM 的效果和偏见
- 如何实现 LLMOps 和多阶段推理最佳实践的 LLM 工作流程
- 如何利用 LLMOps 最佳实践在规模上部署模型

**英文资料 [关于「构建 LLM App」你所需要知道的一切](https://towardsdatascience.com/all-you-need-to-know-to-build-your-first-llm-app-eb982c78ffac?gi=5d54fa947d4f)**

长文，细致讲解如何使用 LLM 构建应用程序，并解释了相关概念的含义，以及你所需要的所有代码段。

当然，如果你只想看一个「快速使用 LLM 构建应用程序」的简短教程，可以直接跳转到最后一部分！

1. 我们为什么需要大语言模型 (LLM)
2. 微调 VS 上下文注入
   1. Fine-Tuning (微调)
   2. In-context learning / Context Injection (情景学习 / 上下文注入)
3. 什么是 LangChain？
   1. Models (模型)：各类模型的接口
   2. Prompts (提示)：提示管理、提示优化、提示序列化
   3. Indexes (索引)：：文档加载器、文本拆分器、矢量存储-支持更快、更高效地访问数据
   4. Chains (链)：链超出了单个 LLM 调用，它们允许我们设置调用序列
   5. Agents (代理)：是使用 LLM 来选择要采取哪些操作的实体
4. 手把手教你使用 LLM 构建 App
   1. 使用 LangChain 加载文档
   2. 将文档拆分为文本块
   3. 从文本块到嵌入
   4. 定义要使用的 LLM
   5. 定义提示模板
   6. 创建矢量存储

**英文资料 吴恩达 AI 系列再出新课 [LangChain: Chat with Your Data](https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data)**

基于 LangChain 使用 LLM 构建私有数据的问答系统和聊天机器人。课程时常 1 小时，适合初学者入门学习。

本次主要包括以下 2 个主题：

- 检索增强生成 (Retrieval Augmented Generation，RAG)，这是一个常见的 LLM 应用程序，可从外部数据集检索上下文文档
- 构建聊天机器人的指南，该机器人根据文档的内容而不是在训练中学到的信息来响应查询

主要内容：

1. 文档加载：了解数据加载的基本知识，并发现 LangChain 提供的 80 多个独特的加载器，用于访问各种数据源，包括音频和视频
2. 文档拆分：了解拆分数据的最佳实践和注意事项
3. 矢量存储和嵌入：深入了解嵌入 (emebdding) 的概念，探索 LangChain 中的矢量存储集成
4. 检索：掌握访问和索引矢量存储中数据的高级技术，使您能够检索语义查询之外最相关的信息
5. 答题：构建一次答题解决方案
6. 聊天：了解如何跟踪和选择对话和数据源中的相关信息，因为您使用 LangChain 构建自己的聊天机器人
7. 开始构建实用的应用程序，允许您使用 LangChain 和 LLM 与数据交互

**英文资料 [LangChain 和 LlamaIndex 项目实践手册：将大型语言模型应用于现实世界](https://leanpub.com/langchain/read) / [github](https://github.com/mark-watson/langchain-book-examples)**

是一本以技能和项目为主线的 LangChain 主题书籍，介绍如何利用 LangChain、LlamaIndex 项目、ChatGPT API 解决一系列问题。

该书涵盖了安装和使用 LangChain 和 LlamaIndex 的基本要求，以及使用 Google Knowledge Graph API、使用 Hugging Face 开源模型、使用 Zapier 集成等方面的示例。

它还提供了关于大型语言模型的概述和使用场景的讨论。该书的目标读者是希望构建自己的工具并提升程序设计能力的开发人员。

**[吴恩达 X HuggingFace 使用 Gradio 快速构建生成式 AI 应用](https://www.deeplearning.ai/short-courses/building-generative-ai-applications-with-gradio/)**

教大家如何使用 Gradio 快速构建生成式 AI 的应用。Gradio 是一个开源 Python 库，可以将机器学习模型从抽象的代码转变为交互界面，大大简化了经典应用的构建过程，如草图识别、问答系统、图像分割、时序预测、基于 XGBoost 的可解释性展示等。

构建生成式 AI 应用的一个重要方向，就是构建 web demo 让用户能快速体验。Gradio 正是当前最流行的快速构建 AI Web 应用的解决方案。课程还提供了非常友好的 Jupyter Notebook 练习环境，课程时长 1 小时左右，目前免费开放。

本门课程包含了 5 类应用的构建：

- 自然语言任务接口：主要讲述如何基于 Gradio 开发文本摘要和命名识别应用
- 图像说明应用：基于开源的 image-to-text 模型开发一个图片说明应用，即基于上传的图片给出相关的文本描述应用
- 图像生成应用：与上面的相反，构建的式基于 text-to-image 的应用
- 游戏生成应用：这是一个综合应用样例，是基于前面的 2 个应用构造的一个小游戏实例
- 大模型聊天应用：类似 ChatGPT 的应用

## 多媒体教程

#### Midjourney 中文教程

1. [Midjourney 保姆级注册教程](https://mp.weixin.qq.com/s/0rllMo2iu8Blwz0DtTBeVA)
2. [视频 MidJourney 中文教程](https://www.bilibili.com/video/BV1p24y1h7CQ)
3. MidJourney 常用参数超详细介绍及用法 [介绍 1](https://mp.weixin.qq.com/s/dLkoNpXAI51U9uc9IWhphA) | [介绍 2](https://mp.weixin.qq.com/s/QJQChAb8-fjtubQk75OlBg)
4. [UI/UX 设计师如何用好 Midjourney？我总结了 5 个方面！](https://www.uisdc.com/midjourney-ui)
5. [MidJourney 学习导航](https://learningprompt.wiki/docs/midjourney-learning-path)

#### Stable Diffusion

1. [2023 年 LLM 如何入门？请看这篇综述！丨论文解读](https://juejin.cn/post/7253476306008031287)
1. [免费搭建个人 stable-diffusion 绘画(非本地、干货教程)](https://juejin.cn/post/7237004563647397946)
1. [一份保姆级的 Stable Diffusion 部署教程，开启你的炼丹之路 | 京东云技术团队](https://juejin.cn/post/7252860591315746853)
1. [无显卡也能 AI 作画 | Colab](https://juejin.cn/post/7217750296171233339)
1. [如何在 Google Colab 上部署 Stable Diffusion Web UI Colab](https://atlassc.net/2023/02/18/stable-diffusion-webui-colab-guide-for-beginners) 试用 stable diffusion 画图，适用场景：不会在电脑上搭环境，显卡不行。但是会翻墙。
   1. 注册登录好 google colab 账号，github.com/camenduru/stable-diffusion-webui-colab
   2. 从列表里面选好你要运行的模型，比如最近很火的 midjourney，midjourney_v4_diffusion_webui_colab（如果你想画漂亮小姐姐就选 chillout_mix_webui_colab）
   3. 每个模型都有 v1.9 和 v2.0 两个版本，优先选择 v2.0，因为已经包含了 ControlNet
   4. 点击链接后会跳转到 google colab，然后点击左上角三角播放按钮等搭建好环境
   5. 等脚本运行，运行好了你可以看到有几个网址，点击就可以打开 UI 做图了。
1. [AI 绘画基于 Kaggle 10 分钟搭建保姆级教程](https://juejin.cn/post/7247306840199135287)
1. [开源图像模型 Stable Diffusion 入门手册](https://mp.weixin.qq.com/s/8czNX-pXyOeFDFhs2fo7HA)
1. [教会你使用 AI 绘画利器 Stable Diffusion](https://mp.weixin.qq.com/s/9Dw2GYkg6b1vvKKyJQ-3TA)
1. [耗时 80 小时！超详细的胎教级 Stable Diffusion 使用教程，看这一篇就够！](https://mp.weixin.qq.com/s/eFi-xoVDQomzCBr5kO9nHA)
1. [万字长文！从零开始带你进阶 AI 绘画神器 Stable Diffusion](https://www.uisdc.com/stable-diffusion-8) 这是一篇 Stable Diffusion 的进阶教程。开篇介绍了作者个人的 SD 学习路线，清晰合理，值得借鉴。
1. [视频教程 Stable Diffusion](https://www.bilibili.com/video/BV1BM4y127eD/)
1. [视频教程 零基础学会 Stable Diffusion](https://www.bilibili.com/video/BV1As4y127HW/) B 站 UP 主「Nenly 同学」正在更新一门神仙课程——《零基础学会 Stable Diffusion》，并号称「B 站第一套系统的 AI 绘画课」。课程上线两周已经获得了 23W+的播放
1. [Stable Diffusion 特效设计流程教学](https://www.bilibili.com/video/BV1gX4y1J7ei/)由浅入深地讲解使用 Stable Diffusion 塑造文字、Logo 形体的基本操作方式，剖析权重、引导时机等 ControlNet 进阶调节参数的作用，了解 Brightness、Illumination 等模型的使用方法。

提示词

- [手把手教你用 Stable Diffusion 写好提示词](https://mp.weixin.qq.com/s/sEQpP5S7W_gsCUf3i7OZiQ)
- [Stable Diffusion 你需要知道的算法原理（通俗版）](https://mp.weixin.qq.com/s/2-mihwrCmYW2We2H67zzPg)

### 语音

> [B 站合集](https://www.bilibili.com/medialist/detail/ml2252128065)

1. [教你打造属于自己的 AI 孙燕姿，AI 歌手模型使用及训练保姆级课程 #1/2 使用模型](https://mp.weixin.qq.com/s/bXD1u6ysYkTEamt-PYI1RA) / [教你打造属于自己的 AI 孙燕姿，AI 歌手模型使用及训练保姆级课程 #2/2 训练模型](https://mp.weixin.qq.com/s/IeeW1PbMUbxMlLl529JTYQ)
2. [领航员未鸟](https://www.bilibili.com/video/BV1nL411z7kb)
3. [羽毛布団](https://www.bilibili.com/video/BV1H24y187Ko/)

### Stable Diffusion 生态全盘点，第一门 SD 系统性梳理课程

> https://www.bilibili.com/video/BV1K8411y7Ei

这是一个非常与众不同的 Stable Diffusion 系列教程。作者对 SD 的生态进行了非常完整的整理，并绘制了大量的可视化图形 (绝美)，帮助理解论文、技术、应用之间的关系。
最难得的是，作者目前已经更新的内容中，不纠结技术细节又非常清晰完整地介绍了发展来龙去脉。对于非 AI 背景的学习者来说，这个教程系列可谓十分友好！会用 SD 还知道枝枝蔓蔓，就真的是专家了~
目前系列已经更新了 5 个视频，约 180 分钟，学起来非常爽并忍不住想做笔记。

### [全网第一门「AI 动画」系统课程，带你实现 AI 动画的商业落地](https://www.bilibili.com/video/BV1dw411Y7YY/)

完整介绍市面上最有用的 AI 动画工具和插件，帮助学习者了解底层原理，并掌握「AI 工具+传统动画后期」的创新工作流。课程非常贴心地推荐了大量优秀案例和创作思路，并对部分优秀案例进行拆解分析，带你创作属于自己的故事。

### Stable Diffusion 生态全盘点，第一门 SD 系统性梳理课程

> https://www.bilibili.com/video/BV1K8411y7Ei

这是一个非常与众不同的 Stable Diffusion 系列教程。作者对 SD 的生态进行了非常完整的整理，并绘制了大量的可视化图形 (绝美)，帮助理解论文、技术、应用之间的关系。
最难得的是，作者目前已经更新的内容中，不纠结技术细节又非常清晰完整地介绍了发展来龙去脉。对于非 AI 背景的学习者来说，这个教程系列可谓十分友好！会用 SD 还知道枝枝蔓蔓，就真的是专家了~
目前系列已经更新了 5 个视频，约 180 分钟，学起来非常爽并忍不住想做笔记。