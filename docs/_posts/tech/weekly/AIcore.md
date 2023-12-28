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

## 行业前瞻

### [太卷了！关于大模型和 AIGC 的 36 条笔记和真话](https://zhuanlan.zhihu.com/p/656246644)

一篇国内 AI 头部企业的闭门会要点笔记。
新一代生成式 AI，可能要回头看看上一代 AI 趟过的坑，不要行业自嗨，避免上一个冬天的轮回。
在这个领域的从业者，**更要清晰地看到行业的内卷和客户的痛点**，别被大佬的鸡汤迷了眼。

1. 大家融到的钱，80%-90%给到了算力，这是现状。要知道，现在还只是训练，训练的成本是可控的，推理的成本是不可控的。
2. 在算力紧张的情况下，我们在做一些前瞻性的技术尝试。大家可能都想不到，在我们大模型公司，做基础架构的同学，比做模型的同学要多。他们普遍的价格都还挺贵，也很难招。
3. 刚开始觉得模型还挺值钱的，现在又陷入到内卷了。前段时间碰到一个客户，BAT 等都报价了。刚开始报价，还挺贵，1000 多万。大家知道最后的成单价是多少？太卷了。
4. 百亿参数的大模型，在某些特殊客户的认知里面，就是免费的。
5. 我们要找到一些性感的场景。有几个标准。第一，小切口。第二，跟大模型的优势相匹配。第三，**让买单的决策用户有强感知**。比如以前获取一些数据、结论或者服务，需要不同的流程，现在通过大模型，决策者在移动设备就能快速获取和完成。
6. **大模型想做成功需要三件事**：1）能不能拿到足够多的钱去买算力。2）能不能拿到足够多的数据。3）人才密度是不是够厚，不在数量多，而是有没有足够多的高质量的科学家。
7. 我们认为机会还是在 tob 垂直模型，核心点在数据和场景本身，这是最核心的。B 端最大的 bug 在于，最后做成了高级的人力外包。
8. 我们反而认为 ToC 赚钱比较容易。ToB 有个问题，一个项目的历程时间比较长。客户批预算，再到立项，再到实施，钱的周期是很长的。
9. 我觉得现在是机会太多，**不要把资源分到你所不是的地方**，做战略选择，这个很重要。
10. 最近一两年，可能是做创新、做产品的过程，现金的回收周期会相对长一些。
11. 绕开模型，绕开算力，可能接下来的机会就是 Agent。
12. 大模型玩家，要保证自己能留在牌桌上，才有机会看到下半场新的东西出来

### [如何打造一个拖垮公司的大模型？](https://mp.weixin.qq.com/s/ZwdjTEHZvsK0VbzFlGtsng)

用戏谑的口吻描述企业打造大模型过程中的诸多挑战。有些梗会心一笑

1. 先砸 10 个亿买卡
2. 从顶流公司挖大牛来坐镇首席科学家
3. 定战略、当卷王
4. 万事开头难。从数据准备开始，全员加班鸡血加班
5. 开始玩命训练，不出意外的话快出意外了
6. 内部开始自我修正
7. 不管产品行不行市场宣传要先行一步
8. 生态伙伴少不了氛围必须搞起来
9. 大模型「练」出来了终于
10. 及时止损人间清醒

### [我的朋友开了家 AI 公司，6 个月就把裤衩赔掉了](https://mp.weixin.qq.com/s/DoF_Scs7OgruquQu0cFqbA)

6 个月，花掉 20 万，挣了 200 块，最终关停了项目。
多数的人只是冲着蹭流量来的。AI 成了一个全新的噱头，什么行业，跟 AI 沾点亲、带点故，就能卖得更香。
大部分投资人的原则是：多看，少投。甚至还有很多人打着投资的名号，在创业者这里恶补 AI 知识。

### [超级个体公开课：AI 智能体与人类，未来协作方式/合作组织/生产空间](https://mp.weixin.qq.com/s/AluYfD6BQOkLo6XpJMyQnQ)

面向数字游民、自由职业、远程办公等群体的一次 AI 时代的超级个体公开课分享。相对全面地介绍了人类与 AI 自动代理、AI 智能体的未来协作方式，将如何重塑未来的商业模式，有助于每个人提前洞察未来并由此做好职业进阶的准备。
超级个体是掌握先进生产力 (AI)、生产关系 (Web3) 以及生产空间 (Metaverse)，拥有自己的 AI 团队与自动化任务工作流，基于 AI Agent 与其他超级个体建立更加「智能化」与「自动化」的协作关系。
三大技术叙事融合趋势：提出 Web3、AGI 和元宇宙三大技术趋势正在交织影响社会，需要理解它们的交互作用。例如：人类与 AI 协同的三种方式， embedding、copilot 和 agent 三种人机协同方式。超级个体经如何经营一人公司，讨论了超级个体具有自动化核心运营的一人公司模式。自动化品牌营销公司 - AutoCorp：描绘了一个基于 AI 实现营销自动化的虚拟公司。超级个体与智能体的竞争博弈关系：分析超级个体与智能体博弈找到最优解的重要性。

### [构建外脑 / 智变时代的个人知识管理](https://www.indigox.me/build-exobrain/?ref=indigos-digital-mirror-newsletter)

本文将探讨在新一轮的 AI 变革之下，如何用新工具来帮助扩展大脑思维与记忆的边界，以及知识工作流的新方法，激发潜能，构建外脑

### [大模型时代，程序员如何实现自我成长](https://mp.weixin.qq.com/s/Y0t8qrmU5y6H93N-Z9_efw)

文章作者就是一位开发者，他梳理分享了过去一年总结积累的思考、资料和经验，并借此带领大家回顾了一下过去一年大模型领域的发展情况。

文章会分成了四个部分，从初次接触 ChatGPT 沉迷追 AI 新闻，到开始亲身实践并利用 LLM 进行一些有价值的工作，然后以开发者视角总结一年来大模型各个层面的发展，最后浅谈一下对 AI 未来的一些展望。

尤其不错的是，作者给出了品质非常不错各类清单和链接，包括优质信息源、基础和进阶课程、标志性的开源项目、基础模型服务商、中间层、体验不错的 LLM 产品等等。值得跟着作者清单 follow 一下

### [探讨人工智能对经济的影响](https://www.bridgewater.com/research-and-insights/exploring-how-ai-will-impact-the-economy)

[翻译](https://baoyu.io/translations/ai/exploring-how-ai-will-impact-the-economy)

来自桥水（bridgewater）的报告：《探讨人工智能对经济的影响》

从历史来看，像电力和计算机这样能广泛应用于整个经济的通用技术，通常在诞生后一到三十年后开始显著影响生产力。

AI 对生产力的提升速度将超过过去的通用技术，但真正的高峰期仍然遥远。

### [2024 年科技领域的重大创新思想](https://a16z.com/big-ideas-in-tech-2024/)

> 翻译：https://baoyu.io/translations/ai/big-ideas-in-tech-2024

向 ARK Invest 学习，a16z 也开始发年度 Big Ideas 了！这篇关于 2024 Tech 创新的预测中，虽然没有 AI 的单独介绍，但 AI 确贯穿生物健康、消费技术、Crypto、Fintech、游戏、企业与基础设施、还有美国的国防与安全产业，结合自己的判断把 2024 的 AI 趋势分享一下：

- 语音优先的应用将开始融入我们的生活；
- 消费级 AI 的战场从拼模型转向用户体验；
- 我们需要量身定制的 AI 助手：ChatGPT 也许是最通用的，但它不太可能 "胜任 "所有任务。新公司会围绕使用场景打造新模型 or 工作流，用户需要定制化，而且越窄越好，这也是新机会；
- GenAI 将创作的边际成本降至近乎为零，我们将看到全新的消费行为出现：Midjourney、Runway、Eleven Labs、Glif 这些新的创作工具会更多融入到创意工作流中，用户也会消费更多的 GenAI 内容，新模型和新界面将会继续涌现。AI 将帮我们再造创意；
- AI 将为金融与顾问服务产业提供动力：随着 GenAI 和 LLM 的发展，更多的工作可以实现自动化，包括管理任务、研究过程（收集和摄取数据、搜索信息）、总结以及生成报告。利用 LLM 的初创公司将捕获现有操作系统难以收集的数据，同时自动标记和存储这些数据，我们可能会看到一直由软件寡头垄断的细分市场进入一个新时代；
- AI 将推动拉美中小企业走向数字化：许多拉丁美洲的商家都使用 WhatsApp 来提供客户服务和支持。这些交互主要涉及消费者期望快速响应的任务，例如报价、排期和物流。目前，商家的响应时间可能会根据代表的可用性和请求的复杂性大相径庭。AI 助手可以大大简化这些耗时的任务，为商家和消费者创造价值；
- LLM 让我们有机会建立一个更智能的 RPA 系统：系统可以根据上下文理解输入和执行的操作，并能够动态调整，从而创建一个更强大的解决方案；
- 我们将在 2024 看到第一批 AI 优先设计的游戏：它们会利用 LLM 来实现新颖游戏系统和互动机制，游戏世界本身将不再是渲染出来的，而是在运行时利用神经网络生成的；
- 我们与 AI 的对话将和 FaceTime 对话一样自然：随着响应延迟的降低、文本到语音技术的进步以及音频驱动的面部动画，我们与 AI 伙伴的对话将越来越具有感知力、存在感和个性化。娱乐将继续从被动体验向主动体验转变，电视节目和互动游戏之间的界限将变得越来越模糊；
- 去中心化的开源 Crypto 网络将使 AI 创新民主化，而不是集中化；
- AI 模型将寻求可解释性，这个在高安全领域十分必要，例如机器人和自动驾驶；

### [人工智能即将全面改变我们使用电脑的方式](https://www.gatesnotes.com/AI-agents)

> [翻译](https://baoyu.io/translations/ai/ai-is-about-to-completely-change-how-you-use-computers)

比尔盖茨新写的一篇博客吗，在文章里面，比尔盖茨认为人工智能即将全面改变我们使用电脑的方式并彻底重塑软件行业。并且他还自嘲了当年 Office 推出的傻傻的回形针机器人：我们在 Microsoft Office 中推出后又取消的数字助理 回形针 Clippy，至今仍是人们的笑料！但他无比看好未来的 AI 智能体，相信未来五年每个人都能拥有一个自己的 AI 助理。

### Level 3 - API Developer

#### 原理

[大模型应用知识地图：RAG、Agent、Prompt Engineering 要点概览](https://www.mubu.com/doc/2yVWogEso5i)

[从第一性原理看大模型 Agent 技术](https://www.bilibili.com/video/BV1mC4y1g7cT/)

> [PPT](https://mp.weixin.qq.com/s/PL-QjlvVugUfmRD4g0P-qQ)

第一性原理 (First Principles )是指从最基本的原理出发进行思考和解决问题的方法。

最近，越来越多的人将目光投向 Agent「智能体」，并认为相比于仅具备单向输出能力的 GPT 语言模型，具有「感知-决策-执行」闭环能力的 Agent 更有可能成为实现 AGI 的路径。那么，让我们通过这篇长文来解答很多人灵魂深处的提问：到底啥是 Agent。

[动画科普，Transformer 的诞生，让生成式 AI 成为可能](https://ig.ft.com/generative-ai/)

> 中文版：https://baoyu.io/pages/ft/generative-ai

翻页时，页面右侧的动画与左侧文字变化同步，以非常具体的案例解释了 LLM 的基本原理。
如果公式、术语、论文看起来太枯燥晦涩，就来看这个网页吧！随着网页下拉，可以清楚地了解到词嵌入 (Word Embedding)、Transformer、encoder-decoder 结构、自注意力 (Self-attention) 等的具体运行原理。
有博主将页面文字部分翻译成了中文，看了一下准确度还行，也可以一起看看

[图解大语言模型](https://mp.weixin.qq.com/s/P1enjLqH-UWNy7uaIviWRA)

[OpenAI 大神 Andrej Karpathy 带你一小时入门大语言模型](https://www.bilibili.com/video/BV1kC4y1P7Lt/)

Andrej Karpathy 最近专门录制了一个视频「The busy person's intro to large language models (给大忙人的 LLM 入门课)」，用一小时的时间带你搞懂什么是大模型。这应该是我们能看到的最好的大模型入门讲座了。

链接是视频字幕的英文文字版本，以下是整理的课程要点和时间戳。没找到很好的中文翻译和学习笔记，大家先凑活看英文吧~ 感兴趣可以对照观看并整理笔记：https://www.wisdominanutshell.academy/andrej-karpathy/1hr-talk-intro-to-large-language-models-transcription/

https://blog.oxen.ai/reading-list-for-andrej-karpathys-intro-to-large-language-models-video/

虽然 Andrej Karpathy 已经尽力在把课程讲得通俗易懂了，但是想深入理解仍然需要补充很多背景知识。上方链接就是你可能需要的补充资料 Reading List (也是英文版本) ~

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

[AI Agents 绝佳综述：OpenAI 团队的 Agents 理解与发展规划](https://mp.weixin.qq.com/s/Jb8HBbaKYXXxTSQOBsP5Wg) / [原文](https://lilianweng.github.io/posts/2023-06-23-agent/)

LLM Powered Autonomous Agents 是 @Lilian Weng 一篇广泛传播的博文，可以说是目前 AI Agent 领域优质论文的系统综述。Lilian 现在是 OpenAI 的 Head of Safety Systems，之前还领导过 OpenAI 的 Applied AI 团队，她的文章绝对值得一看~

AI Agent 被认为是 OpenAI 发力的下一个方向。Lilian 将 Agents 定义为 LLM、Planning、Memory、Tools 的集合，并在文章中对每个组建的实现路径进行了细致说明：

- LLM (大语言模型) 是核心大脑
- Planning (任务规划) 、Memory (记忆)、Tool use (工具使用) 等则是 Agents 系统实现的三个关键组件

[Generative AI for Everyone](https://www.deeplearning.ai/courses/generative-ai-for-everyone) https://www.bilibili.com/video/BV11G411X7nZ

吴恩达新课,面向每个人的生成式人工智能课，这门课程科普入门课，适合对此感兴趣的所有人，不需要编程基础也不需要其他 AI 知识积累。

[面向初学者的生成式 AI 课](https://github.com/microsoft/generative-ai-for-beginners)

微软推出了一门专为初学者打造的课程「Generative AI for Beginners」，该课程总共 12 课时，每节课包含一个简短的主题视频介绍。课中讲解的项目还会有 Juypter Notebook 代码示例，并且用户还能链接到额外的资源，进行更深入的学习。

#### 开发应用

- [OpenAI API Key](https://platform.openai.com/account/api-keys)
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) 对于开发人员来说，这是使用 Open AI 的指南和代码示例的权威集合
- [一键部署自己的 Gemini Pro Chat 大模型应用，无需服务器](https://github.com/ConnectAI-E/Awesome-One-Click-Deployment) 支持一键部署各种 Github 开源AI项目，而且不需要服务器！
- [chatgpt-web 本地部署项目](https://github.com/Chanzhaoyu/chatgpt-web) 用 Express 和 Vue3 搭建的 ChatGPT 演示网页
- [ChatGPT-Next-Web](https://chat-gpt-next-web.vercel.app/) / [项目地址](https://github.com/Yidadaa/ChatGPT-Next-Web) 使用 Vercel 免费一键部署
- [chatgpt-web](https://github.com/869413421/chatgpt-web) 部署定制化的 chatgpt，一键部署属于自己定制化的 chatgpt web 程序(兼容 gpt3.5)， 只需下载 release 中对应平台的项目文件，修改配置后执行，打开 `http://127.0.0.1:8080` ，便可以获得属于自己的 chatgpt 网站。
- [川虎 Chat](https://github.com/GaiZhenbiao/ChuanhuChatGPT)为 ChatGPT/ChatGLM/LLaMA/StableLM/MOSS 等多种 LLM 提供了一个轻快好用的 Web 图形界面
- [飞书 GPT](https://github.com/Leizhenpeng/feishu-chatgpt) 集成了飞书 + GPT-3.5 + Dall·E + Whisper 等 API，支持语音对话、角色扮演、多话题讨论、图片创作、表格分析、文档导出 等功能
- [WeChat Bot 微信机器人](https://github.com/wangrongding/wechat-bot) 一个基于 OpenAi ChatGPT + WeChaty 实现的微信机器人 ，可以用来帮助你自动回复微信消息，或者管理微信群/好友，检测僵尸好友等
- [chatgpt-wechat](https://github.com/whyiyhw/chatgpt-wechat) 可在微信 安全使用的 ChatGPT 个人助手应用
- [wechat-chatgpt 微信机器人](https://github.com/fuergaosi233/wechat-chatgpt) 通过 wechaty 将 ChatGPT 接入微信。安装完依赖后只需要填写 OpenAI 账号密码和微信扫码即可使用。
- 视频教程 [如何使用自己的知识库创建一个知识类 GPT](https://weibo.com/tv/show/1034:4967270833913893) [GPT 链接](https://chat.openai.com/g/g-PjzP9GZan-the-art-of-software-engineering) [对语料库的测试](https://weibo.com/1727858283/4967291861601130)如何使用自己的知识库创建一个知识类 GPT。 最终创建的 GPT：软件工程之美 GPT
- [LobeChat 高性能聊天机器人框架](https://github.com/lobehub/lobe-chat) 可一键免费部署私人 ChatGPT/LLM 网页应用程序，支持完整的 Markdown 渲染，包括代码高亮、LaTex 公式、Mermaid 流程图等，可自定义 AI 助手角色与服务器域名。

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