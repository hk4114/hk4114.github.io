---
title: AI 学习路径
category: 技术
date: 2023-5-7
vssue: true
---

### 动画科普，Transformer 的诞生，让生成式 AI 成为可能
> https://ig.ft.com/generative-ai/
> 
> 中文版：https://baoyu.io/pages/ft/generative-ai

翻页时，页面右侧的动画与左侧文字变化同步，以非常具体的案例解释了 LLM 的基本原理。
如果公式、术语、论文看起来太枯燥晦涩，就来看这个网页吧！随着网页下拉，可以清楚地了解到词嵌入 (Word Embedding)、Transformer、encoder-decoder结构、自注意力 (Self-attention) 等的具体运行原理。
有博主将页面文字部分翻译成了中文，看了一下准确度还行，也可以一起看看

### Llama 2 详细解读，一篇教程带你搞懂原理和代码
> https://mp.weixin.qq.com/s/8UxCdR6BQY9R8xrPnqeYrQ

这是一篇对 LLM 半开源模型Llama 2的详细解读，全面介绍了其模型结构、位置编码、KV Cache、Attention计算等技术细节，并且辅助大量代码和关键公式帮助读者顺畅理解。
以下是文章关键知识点，如果你想深入了解大语言模型的内部实现原理，强烈推荐这篇文章

1. 处理流程
  - code
2. 模型结构
  - RMSNorm
  - RoPE：绝对位置编码、旋转位置编码、RoPE Code
  - KV Cache & GQA：KV Cache、MQA & GQA、Code
  - FeedForward

### AI智能体与人类的未来协作方式、合作组织与生产空间（万字长文）
> https://mp.weixin.qq.com/s/AluYfD6BQOkLo6XpJMyQnQ

### 主流大语言模型的技术原理细节

> https://mp.weixin.qq.com/s/P1enjLqH-UWNy7uaIviWRA

图解大语言模型

### a16z 万字长文，我们正在进入计算的第三个时代

> https://mp.weixin.qq.com/s/bUzjvwY-MQaXJs2AhvmRTA

1. 我们正处于计算的第三纪元的开始〖The third epoch of compute〗
2. 这波生成式人工智能浪潮，具有推动市场转型的经济学原理〖Economics that drive market transformations〗
3. 对于一些早期应用场景，创造力>正确性〖Creativity > correctness〗
4. 对于其他比方说编程「副驾驶」，正确性会随着人类的使用而提高〖Coding copilot〗
5. AI 与生物学的结合可以加速治疗疾病的新方法，并对人类健康产生深远影响〖Integrating AI with biology〗
6. 将模型交到用户手中，将帮助我们发现新的应用场景〖Users discover use cases〗
7. 你的 AI 朋友的记忆力将会变得更好〖Context windows〗
8. 语音聊天机器人、机器人和其他与人工智能互动的方式，是一个重要的研究领域〖Multimodal, embodied AI〗
9. 我们会有一些通用模型，一堆专用模型，还是两者兼而有之〖One model or many〗
10. 人工智能什么时候在企业获得足够推广，那些数据集又会发生什么〖AI in the enterprise〗
11. Scaling 法则会把我们一直带到 AGI 吗〖Scaling to AGI〗
12. 什么是新兴能力（emergent capabilities）〖Emergent capabilities〗
13. 服务这些模型的成本会下降吗〖Cost of serving the models〗
14. 我们如何衡量通用人工智能的进展〖Measuring progress〗
15. 还需要人类参与吗〖Humans in the loop?〗
16. 现在是创建人工智能初创公司的最激动人心的时刻 (特别是如果你是物理学家或数学家)〖Time to build AI〗

### 微软166页GPT-4V论文 (中文精校版)：多模态的新时代
> https://link.juejin.cn/?target=https%3A%2F%2Farxiv.org%2Fpdf%2F2309.17421.pdf
> 中文版：https://mp.weixin.qq.com/s/a8Y_yU5XYgJhQ2xMuTK13w

9月25日，OpenAI 发布具有视觉功能的 GPT-4V(ision)，能够分析用户提供的图像输入。9月29日，微软发布了166 页的 GPT-4V 研究报告「The Dawn of LMMs: Preliminary Explorations with GPT-4V(ision) (大型多模态的新时代：GPT-4V(ision)的初步探索)」。这也成为了我们了解 GPT-4V(ision) 的敲门砖。
从整体上来说，这篇论文依靠「试」对 GPT-4V 进行了研究，设计了涵盖多个领域的一系列输入，将它们喂给 GPT-4V 并观察记录 GPT-4V 的输出。研究员们对 GPT-4V 完成各类任务的能力进行评估，还给出了使用GPT-4V的新提示词技巧。
然后，这份说明书用了 150 多页来展示各种 Demo，详细剧透了 GPT-4V 在面对不同回答时展现出的能力。




## 参考资料
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) 对于开发人员来说，这是使用 Open AI 的指南和代码示例的权威集合
- [飞桨](https://aistudio.baidu.com/aistudio/education/dashboard)
- [魔搭](https://www.modelscope.cn/home)
- 注册 [Google Colab](https://colab.google/) 不用下载配置本地环境即可线上实现很多大模型的框架
- 注册并多逛 [Hugging Face](https://huggingface.co/) 有大量开源模型，数据集，以及模型的线上体验
- [阿里云 PAI](https://pai.console.aliyun.com/)

## AIGC 学习路径、资源整合

### Level 1 - 享受 AI 红利
多使用。在自己的工作流中加入AI产品。

写代码，写周报，脑暴想法，总结文档，翻译等。生活中的问题也可以积极问。

- 使用体验各个大模型 [Poe](https://poe.com/)、[ChatGPT](https://platform.openai.com/)、[Claude](https://www.anthropic.com/product)、[通义千问](https://qianwen.aliyun.com)、[豆包](https://www.doubao.com/chat)、[文心一言](https://yiyan.baidu.com/)
- 镜像：[老北鼻 AI - chatGPT 3.5 turbo](https://lj.lbbai.com/#url=lbbdh)、[chatGPT 镜像](https://chat2.jinshutuan.com/) [codenews](https://codenews.cc/chatgpt)
- 聚合网站：[ai 工具集](https://ai-bot.cn/)、[tabxx](https://tabxx.com/)、[gpt 3 demo](https://gpt3demo.com/map)
- [ChatHub 聚合客户端](https://chathub.gg) ChatHub 是一个 chatbot 聚合客户端，目前已经支持ChatGPT、New Bing Chat、Google Bard、Claude、ChatGLM 等，可以在一个页面同时与多个聊天机器人进行对话。
- 工具
  + [Coglayer](https://www.coglayer.com/) 自动化 Prompt 的 AI 工具，擅长处理需要深度思考的复杂任务，例如：创建商业计划、评估重要的生活决策、分析你的产品、深度研究任何主题、评估商业想法等。
  + [framer.AI](https://framer.com/) 根据提示词生成网页。例如：提示词：“一个为中国春节准备的 h5 落地页，整体配色以喜庆的红色为主。内容包括距离春节的倒计时以及页面正中间的按钮，按钮点击后跳转下载 app”。活动页地址：https://spring-festival-countdown.framer.ai/
  + [谷歌推出「NotebookLM」，上传文档就能问答/总结/再创作](https://notebooklm.google.com/) [文档](https://blog.google/technology/ai/notebooklm-google-ai) 可以自动总结用户上传的文档、回答相关问题、甚至根据提纲创作新的内容。目前仅对美国用户开放申请。相比通用AI聊天机器人，NotebookLM 更加可靠，专门基于用户上传的资料进行训练，并会自动标注来源出处，「胡说八道」的概率大大降低！是一款非常有前景的AI笔记应用,值得关注其后续发展

:::tip 推荐大模型实用工具清单
- 文本写作
  + 免费选项：[Poe](https://poe.com/)、[ChatGPT](https://platform.openai.com/)、[Claude](https://www.anthropic.com/product)、[通义千问](https://qianwen.aliyun.com)、[文心一言](https://yiyan.baidu.com/)
  + 付费选项：GPT-4、ChatGPT with plugins
- 生成图像
  + 透明选项：Adobe Firefly
  + 开源选项：Stable Diffusion
  + 免费选项：Bing / Bing Image Creator (DALL-E)、Playgound
  + 最佳质量：Midjourney [通义万相](https://wanx.aliyun.com/creation)
- 思考创意
  + 免费选项：Bing
  + 付费选项：GPT-4 
- 生成视频
  + 动画制作：D-iD、Runway v2
  + 声音克隆：ElevenLabs 
- 处理文件和数据
  + 处理文件：Claude 2
  + 处理数据：Code Interpreter
- 获取信息和学习
  + 免费选项：Bing
  + 付费选项：Khanmigo (可汗学院提供的AI学习助手)
:::

### Level 2 - Prompt Engineer 
> 输出：[我所知道的 chatGPT 提示工程](https://juejin.cn/post/7245519751224934461) 

好的 Prompt 能够让 GPT 学会调用工具和 API (HuggingGPT)，学会操控机器人，学会和其他 AI Agent 协同(CAMEL)

掌握 Prompt Engineering 通用原则：
- Few-shot prompting
- Chain of Thoughts
- Self-Ask

Prompt Engineering 进阶技巧:
- ToT
- Automatic Prompt Engineer (APE)
- Prefix-Tuning / P-Tuning / Prompt Tuning

例如 APE 通过程序化调试 Prompt 的方式，发现了比人工试出来的 Let's think step by step 更好的零样本 CoT Prompt.

多看、多 搜、多想、多练，很快你就会成为 Prompt 高手。

### Level 3 - API Developer

#### 原理

[OpenAI 联合创始人亲自上场科普 GPT，让技术小白也能理解最强 AI](https://mp.weixin.qq.com/s/zmEGzm1cdXupNoqZ65h7yg)

详细介绍了如何从 GPT 基础模型训练出 ChatGPT 助手模型，并解释了大型语言模型的内部原理和 RLHF 训练细节。

演讲中提到了预训练、有监督微调、奖励建模和强化学习等四个主要阶段，并介绍了标记化、Transformer 神经网络架构等技术细节。这场演讲非常精彩，并推荐给所有关心大型语言模型的人。

[ChatGPT 的工作原理](https://mp.weixin.qq.com/s/gMYr8KwC_S3G4tKKMmjwxw)

ChatGPT 通过分析数十亿个网页上的文本来预测下一个词的合理延续，并生成一个可能的词的排序列表。在选择下一个词时，模型可以采用高排名词或随机选择较低排名词的方法，以产生不同风格的文本。温度参数可以控制排名较低词被选中的频率。该文章还提到了使用简化版本的 GPT-2 模型，并给出了相关代码示例。

文章还讨论了如何通过分析语料库来计算字母和 n-gram 的概率，并以此生成更真实的文本。

[生成式 AI 应用路线图：多模态 AI 的应用能力演进](https://mp.weixin.qq.com/s/dSXgDrvcM8GD33RWu78gyA) / [路线图](https://github.com/SeedV/generative-ai-roadmap)

随着生成式 AI「对生成内容的可控性」不断提高，其应用场景也在不断扩展和深化，这个演进过程大致分为如图所示的 6 个阶段。

与简单的文本/图片生成相比，包含声音、视频、3D 场景、动画、复杂故事线的多模态系统，与人类的常识感受和本源需求更加契合，明显拥有更宽广深远的应用前景。

作者认为，生成式 AI 会大致按照图示的脉络演进积累，不断催生有革命意义的新应用、新平台甚至颠覆性的新商业模式

[AI Agents 绝佳综述：OpenAI团队的 Agents 理解与发展规划](https://mp.weixin.qq.com/s/Jb8HBbaKYXXxTSQOBsP5Wg) / [原文](https://lilianweng.github.io/posts/2023-06-23-agent/)

LLM Powered Autonomous Agents 是 @Lilian Weng 一篇广泛传播的博文，可以说是目前 AI Agent 领域优质论文的系统综述。Lilian 现在是 OpenAI 的 Head of Safety Systems，之前还领导过 OpenAI 的 Applied AI 团队，她的文章绝对值得一看~

AI Agent 被认为是 OpenAI 发力的下一个方向。Lilian 将 Agents 定义为 LLM、Planning、Memory、Tools的集合，并在文章中对每个组建的实现路径进行了细致说明：
- LLM (大语言模型) 是核心大脑
- Planning (任务规划) 、Memory (记忆)、Tool use (工具使用) 等则是 Agents 系统实现的三个关键组件

#### 开发应用

- [OpenAI API Key](https://platform.openai.com/account/api-keys)
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) 对于开发人员来说，这是使用 Open AI 的指南和代码示例的权威集合
- [chatgpt-web 本地部署项目](https://github.com/Chanzhaoyu/chatgpt-web) 用 Express 和 Vue3 搭建的 ChatGPT 演示网页
- [ChatGPT-Next-Web](https://chat-gpt-next-web.vercel.app/) / [项目地址](https://github.com/Yidadaa/ChatGPT-Next-Web) 使用 Vercel 免费一键部署
- [chatgpt-web](https://github.com/869413421/chatgpt-web) 部署定制化的 chatgpt，一键部署属于自己定制化的 chatgpt web 程序(兼容 gpt3.5)， 只需下载 release 中对应平台的项目文件，修改配置后执行，打开 `http://127.0.0.1:8080` ，便可以获得属于自己的 chatgpt 网站。
- [川虎 Chat](https://github.com/GaiZhenbiao/ChuanhuChatGPT)为 ChatGPT/ChatGLM/LLaMA/StableLM/MOSS 等多种 LLM 提供了一个轻快好用的 Web 图形界面
- [飞书 GPT](https://github.com/Leizhenpeng/feishu-chatgpt) 集成了飞书 + GPT-3.5 + Dall·E + Whisper 等 API，支持语音对话、角色扮演、多话题讨论、图片创作、表格分析、文档导出 等功能
- [WeChat Bot 微信机器人](https://github.com/wangrongding/wechat-bot) 一个基于 OpenAi ChatGPT + WeChaty 实现的微信机器人 ，可以用来帮助你自动回复微信消息，或者管理微信群/好友，检测僵尸好友等
- [chatgpt-wechat](https://github.com/whyiyhw/chatgpt-wechat) 可在微信 安全使用的 ChatGPT 个人助手应用
- [wechat-chatgpt 微信机器人](https://github.com/fuergaosi233/wechat-chatgpt) 通过 wechaty 将 ChatGPT 接入微信。安装完依赖后只需要填写 OpenAI 账号密码和微信扫码即可使用。

### Level 4 - LLM Developer

Build with LLM 建造自己的 AI 助手。

动手实践干中学。LLM 应用层程序开发。掌握开发框架可以极大的提升实践效率，同时 Github 上有大量 GPT 开源项目可以参考实践。

- [LangChain与ChatGPT重塑AI客服服务](https://juejin.cn/post/7267441368061739042)
- [一站式 LLM 底层技术原理入门指南](https://s3tlxskbq3.feishu.cn/docx/NyPqdCKraoXz9gxNVCfcIFdnnAc)面向非科班出身但想要了解AI技术原理的受众的 飞书文档。文档从浅到深，覆盖了非常多内容细节，并在持续更新 LLM 最新技术进展及相关原理！
- 英文资料 [Full Stack LLM Bootcamp: LLM 应用开发全栈指南 免费训练营](https://fullstackdeeplearning.com/llm-bootcamp/) 帮助了解基于 LLM 构建 App 所需要的最佳实践和工具，掌握从提示工程到「用户中心设计」的全栈技能！以下是课程笔记要点！学习课程与查看完整笔记。[笔记 1 LLM 应用开发全栈指南](https://mp.weixin.qq.com/s/weH_7K2g3sBMbtei1_dTng) / [笔记 2 LLM 全栈开发指南补遗](https://mp.weixin.qq.com/s/3zijYYxIJA5rJz9fBoArPw)
- 英文资料 [Langchain](https://python.langchain.com/en/latest/) 框架，LangChain 是目前 LLM 应用搭建最主流的框架，能给 LLM 这个“大脑”组装上“手”和“腿”，一定要了解 Agent，Memory，Chain 等核心概念
- 英文资料 [斯坦福大学 AI 课程设置：67 门课程构建学习路径](https://ai.stanford.edu/courses/)斯坦福大学将 67 门 AI 相关课程聚合在一起，构建了这个课程合辑，便于进行课程选择和学习。斯坦福大学作为世界一流的大学，出品的计算机、机器学习、深度学习等系列课程一直备受好评。课程的公开视频、课件和作业等是很多入门者系统学习的首选。
- [向量数据库](https://guangzhengli.com/blog/zh/vector-database/) 主要介绍了向量数据库的原理和实现，包括向量数据库的基本概念、相似性搜索算法、相似性测量算法、过滤算法和向量数据库的选型等等。
- [LangChain AI Handbook，一本非常系统和全面的教程性手册](https://www.pinecone.io/learn/series/langchain) 全面介绍了 LangChain 的各个方面。该手册手册包含多章节，每章聚焦一个话题，如提示工程、会话记忆、检索增强、自定义工具等，是一篇针对LangChain使用的非常系统和全面的教程性手册。

资源
- 注册 [Google Colab](https://colab.google/) 不用下载配置本地环境即可线上实现很多大模型的框架
- 注册并多逛 [Hugging Face](https://huggingface.co/) 有大量开源模型，数据集，以及模型的线上体验
- [阿里云 PAI](https://pai.console.aliyun.com/)
- [飞桨](https://aistudio.baidu.com/aistudio/education/dashboard)

#### 教程

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

当然，如果你只想看一个「快速使用LLM构建应用程序」的简短教程，可以直接跳转到最后一部分！

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

**英文资料 吴恩达AI系列再出新课 [LangChain: Chat with Your Data](https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data)**

基于 LangChain 使用 LLM 构建私有数据的问答系统和聊天机器人。课程时常1小时，适合初学者入门学习。

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

**英文资料 [LangChain 和 LlamaIndex 项目实践手册：将大型语言模型应用于现实世界](https://leanpub.com/langchain/read) / [github](https://github.com/mark-watson/langchain-book-examples)**

是一本以技能和项目为主线的 LangChain 主题书籍，介绍如何利用 LangChain、LlamaIndex 项目、ChatGPT API 解决一系列问题。

该书涵盖了安装和使用 LangChain 和 LlamaIndex 的基本要求，以及使用 Google Knowledge Graph API、使用 Hugging Face 开源模型、使用 Zapier 集成等方面的示例。

它还提供了关于大型语言模型的概述和使用场景的讨论。该书的目标读者是希望构建自己的工具并提升程序设计能力的开发人员。

**[吴恩达 X HuggingFace 使用 Gradio 快速构建生成式AI应用](https://www.deeplearning.ai/short-courses/building-generative-ai-applications-with-gradio/)**

教大家如何使用 Gradio 快速构建生成式AI的应用。Gradio 是一个开源 Python 库，可以将机器学习模型从抽象的代码转变为交互界面，大大简化了经典应用的构建过程，如草图识别、问答系统、图像分割、时序预测、基于XGBoost的可解释性展示等。

构建生成式AI应用的一个重要方向，就是构建web demo让用户能快速体验。Gradio正是当前最流行的快速构建AI Web应用的解决方案。课程还提供了非常友好的 Jupyter Notebook 练习环境，课程时长1小时左右，目前免费开放。

本门课程包含了5类应用的构建：
- 自然语言任务接口：主要讲述如何基于 Gradio 开发文本摘要和命名识别应用
- 图像说明应用：基于开源的 image-to-text 模型开发一个图片说明应用，即基于上传的图片给出相关的文本描述应用
- 图像生成应用：与上面的相反，构建的式基于text-to-image的应用
- 游戏生成应用：这是一个综合应用样例，是基于前面的2个应用构造的一个小游戏实例
- 大模型聊天应用：类似ChatGPT的应用

## 多媒体教程

### 绘画
> [B 站合集](https://www.bilibili.com/medialist/detail/ml2243104665)

### 妙鸭开源版，阿里达摩院推出「酷蛙FaceChain」并附原理揭秘
> https://mp.weixin.qq.com/s/4oTjOEW_C4dMfylUXq-39A
>
> https://modelscope.cn/studios/CVstudio/cv_human_portrait/summary

FaceChain 是一个深度学习工具链，使用3~10张头肩照片，就可以创建自己的数字写真，可以理解为开源版本的「妙鸭」。

FaceChain 由阿里达摩院开放视觉团队推出，并上线了魔搭ModelScope社区，具体操作流程可以 

### FaceChain使用教程

[魔搭](https://www.modelscope.cn/my/overview) 
1. 我的notebook -> GPU 环境
```sh
git clone https://www.modelscope.cn/studios/CVstudio/cv_human_portrait.git
cd cv_human_portrait
pip install -r requirements.txt
pip install gradio==3.35.2
python app.py
```

#### Midjourney 中文教程
1. [Midjourney 保姆级注册教程](https://mp.weixin.qq.com/s/0rllMo2iu8Blwz0DtTBeVA)
2. [视频 MidJourney 中文教程](https://www.bilibili.com/video/BV1p24y1h7CQ)
3. MidJourney 常用参数超详细介绍及用法 [介绍 1](https://mp.weixin.qq.com/s/dLkoNpXAI51U9uc9IWhphA) | [介绍 2](https://mp.weixin.qq.com/s/QJQChAb8-fjtubQk75OlBg)
4. [UI/UX 设计师如何用好 Midjourney？我总结了5个方面！](https://www.uisdc.com/midjourney-ui)
5. [MidJourney 学习导航](https://learningprompt.wiki/docs/midjourney-learning-path)

#### Stable Diffusion
1. [2023年LLM如何入门？请看这篇综述！丨论文解读](https://juejin.cn/post/7253476306008031287)
1. [免费搭建个人 stable-diffusion 绘画(非本地、干货教程)](https://juejin.cn/post/7237004563647397946)
2. [一份保姆级的Stable Diffusion部署教程，开启你的炼丹之路 | 京东云技术团队](https://juejin.cn/post/7252860591315746853)
3. [无显卡也能 AI 作画 | Colab](https://juejin.cn/post/7217750296171233339)
4. [如何在 Google Colab 上部署 Stable Diffusion Web UI Colab](https://atlassc.net/2023/02/18/stable-diffusion-webui-colab-guide-for-beginners) 试用 stable diffusion 画图，适用场景：不会在电脑上搭环境，显卡不行。但是会翻墙。
   1. 注册登录好 google colab 账号，github.com/camenduru/stable-diffusion-webui-colab
   2. 从列表里面选好你要运行的模型，比如最近很火的 midjourney，midjourney_v4_diffusion_webui_colab（如果你想画漂亮小姐姐就选 chillout_mix_webui_colab）
   3. 每个模型都有 v1.9 和 v2.0 两个版本，优先选择 v2.0，因为已经包含了 ControlNet
   4. 点击链接后会跳转到 google colab，然后点击左上角三角播放按钮等搭建好环境
   5. 等脚本运行，运行好了你可以看到有几个网址，点击就可以打开 UI 做图了。
5. [AI 绘画基于 Kaggle 10 分钟搭建保姆级教程](https://juejin.cn/post/7247306840199135287)
6. [开源图像模型 Stable Diffusion 入门手册](https://mp.weixin.qq.com/s/8czNX-pXyOeFDFhs2fo7HA)
7. [教会你使用 AI 绘画利器 Stable Diffusion](https://mp.weixin.qq.com/s/9Dw2GYkg6b1vvKKyJQ-3TA)
8. [耗时 80 小时！超详细的胎教级 Stable Diffusion 使用教程，看这一篇就够！](https://mp.weixin.qq.com/s/eFi-xoVDQomzCBr5kO9nHA)
9.  [万字长文！从零开始带你进阶AI绘画神器 Stable Diffusion](https://www.uisdc.com/stable-diffusion-8) 这是一篇 Stable Diffusion 的进阶教程。开篇介绍了作者个人的 SD 学习路线，清晰合理，值得借鉴。
10. [视频教程 Stable Diffusion](https://www.bilibili.com/video/BV1BM4y127eD/)
11. [视频教程 零基础学会 Stable Diffusion](https://www.bilibili.com/video/BV1As4y127HW/) B 站 UP 主「Nenly 同学」正在更新一门神仙课程——《零基础学会 Stable Diffusion》，并号称「B 站第一套系统的 AI 绘画课」。课程上线两周已经获得了 23W+的播放
12. [Stable Diffusion 特效设计流程教学](https://www.bilibili.com/video/BV1gX4y1J7ei/)由浅入深地讲解使用 Stable Diffusion 塑造文字、Logo形体的基本操作方式，剖析权重、引导时机等 ControlNet 进阶调节参数的作用，了解 Brightness、Illumination 等模型的使用方法。

提示词
- [手把手教你用 Stable Diffusion 写好提示词](https://mp.weixin.qq.com/s/sEQpP5S7W_gsCUf3i7OZiQ)
- [Stable Diffusion 你需要知道的算法原理（通俗版）](https://mp.weixin.qq.com/s/2-mihwrCmYW2We2H67zzPg)

### 语音
> [B 站合集](https://www.bilibili.com/medialist/detail/ml2252128065)

1. [教你打造属于自己的 AI 孙燕姿，AI 歌手模型使用及训练保姆级课程 #1/2 使用模型](https://mp.weixin.qq.com/s/bXD1u6ysYkTEamt-PYI1RA) / [教你打造属于自己的 AI 孙燕姿，AI 歌手模型使用及训练保姆级课程 #2/2 训练模型](https://mp.weixin.qq.com/s/IeeW1PbMUbxMlLl529JTYQ)
2. [领航员未鸟](https://www.bilibili.com/video/BV1nL411z7kb)
3. [羽毛布団](https://www.bilibili.com/video/BV1H24y187Ko/)


