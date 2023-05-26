---
title: AI Collections
category: 技术
tags:
  - Mine Weekly
date: 2023-3-25
vssue: true
---

Mine Weekly Special Edition.

收集一些近段时间较为火热的 AI 产品。

<!-- more -->

> 日刊：https://juejin.cn/user/554605767047053
> 
> 机器之心：https://www.jiqizhixin.com/
>
> 知识星球：https://wx.zsxq.com/dweb2/index/group/48848418144448


## ChatGPT 镜像
> 国内也可以访问 [carrot] https://github.com/xx025/carrot 
> 
## 同类产品

### New Bing
微软提供的基于同样模型的工具。需要在 edge 浏览器里才能使用。
- [bing image create base on DALL·E](https://cn.bing.com/images/create)
- [获取 BingChat 内测权限](https://githubdaily.gitee.io/posts/2023-04-08-new-bing-waitlist/)

Bing 现在支持在 Microsoft Edge 浏览器上跟 PDF 文件直接对话了。

这个方法不仅局限于本地的 PDF 文件，凡是在网页上阅读的 PDF 论文、学术报告、行业调研报告，都可以用 Bing Chat 来对话。

如果你还没有拿到 Bing Chat 内测权限，可以看下我之前写的这篇文章：

具体操作方法：

1. 打开 Microsoft Edge 浏览器；
2. 登录 Microsoft 账号（需要已经拥有 Bing Chat 权限）；
3. 打开右上角的 Bing Chat 图标，开始对话。

使用过程中，如果提示：

"允许 Microsoft 访问您的浏览器网页内容，以便启用有关您的网页聊天响应，选择文本并提供编辑帮助，生成页面摘要等功能。"

输入「打开」或者「Turn on」即可。

#### NewBing 的2种硬核新用法
第一种硬核玩法直接秒掉「ChatPDF」「ChatDOC」这类文档工具。如果，对于在浏览器中打开的文档，NewBing不仅可以通过问答进行内容总结、大纲提炼等任务，还能跨中英文直接作答。
1. 最好下载Edge DEV，不然聊天入口会因为重定向等问题经常消失不见
2. 使用时要选择严谨模式，并且默认搜索引擎国际版
3. 当然，需要魔法

第二种硬核玩法，是在New Bing 创造力模式里，可以无限次、免费地使用AI进行画图（fast模式限额100次 ）。出图质量不错，而且方便易用，广场上还有很多例子可以看。

### Google Bard【地区限制】
已经开放内测申请：[详情] https://githubdaily.gitee.io/posts/2023-03-22-google-bard/

### Claude【地区限制】
> https://www.anthropic.com/product

ChatGPT 最有实力的竞争对手 Claude 也开放 API 申请了，很大方，不仅会给免费的 API，官网也可以直接使用进行问答。已经添加到slack中。[slack](https://app.slack.com/)
1. 注册 Slack。打开网址 slack.com/intl/zh-cn/ ，跟随系统提示即可顺利完成注册
2. 将Claude添加到Slack。打开网址 https://www.anthropic.com/index/claude-now-in-slack ，点击 Add to Slack
3. 设置Slack工作区，允许Claude 访问Slack 工作区权限
4. 开始使用，操作简单，几乎秒答，小白也能快速上手
Claude API 服务来开发自己的产品，都需要在这个页面提交申请并等待邮件回复 www.anthropic.com/earlyaccess

## 收集类 & 提效工具
> 提升 ChatGPT 使用效率

[AI-Products-All-In-One](https://github.com/TheExplainthis/AI-Products-All-In-One)

项目整理了一些 ChatGPT 以及 AI 相关的生产力工具。
覆盖了文件处理、工作优化、邮箱助手、求职面试、写作工具、文案生成、PPT 生成、图像生成、聊天机器人等应用领域。

[gpt3demo](https://gpt3demo.com/map)

网站收集了很多 GPT-3 的各个应用网站。看多了使用场景，让 AI 赋能，解放生产力。


[hugging face](https://huggingface.co/)

开源模型和训练集。ai 领域的 github.

## 相关课程学习
### ChatGPT 从 0 到 1
生成式AI不以结果为导向，是以输出为导向。

因为AI不用对自己的回答负责，它可以为化妆品设计无数个很好的广告语，但是它不会告诉你哪个最有效果。它缺乏这种基于结果的学习，这需要人去评估。

很多场景相对生成而言，比如客服，更重要的是给出一个标准答案。而ChatGPT尤其是对于数字上经常会一本正经的胡说八道，把人带沟里去。对于企业而言，chatGPT说错了10w和100w这两个数字，这个后果就只能企业来承担。这个时候需要一个以结果为导向的人工智能技术。
很多场景下还是需要理解内容的。GPT的局限在于当他生成这些内容的时候，它并不真正理解所生成内容的意义。虽然很多时候它是对的，但是还是会出错甚至是一些虚假内容。对于企业客服来讲，这时候宁愿不回答或者不知道，也比传递错误的信息强。企业很难接受不可控的输出。所以业内也通普遍认为基于大模型的人机交互技术对于认识增强而不是替代。

::: tip 如何去提问
为什么提问？企业高薪找 Prompt Engineer，还有很多人把 Prompt 打包售卖来赚钱。

任务的描述 + 样例

1. 适当的提示可以引导模型生成有用的输出
2. 用多重方式表达以达到最佳结果
3. 描述具体的事情并给出相关的背景信息
4. 向模型展示你希望看到的内容，引导模型生成想要的结果
:::

### B站 AIGC 视频合集
> https://www.bilibili.com/list/group/210003/241004

B站汇总整理全站资源，发布了这个「AIGC来啦」视频合集，争取让每个人都能免费了解和学会AI的一些应用，更容易找到自己感兴趣的入门通道。
这是一个持续更新的合集，目前包含以下4个主题、近百个视频，是UP主们对这波AI浪潮下的前沿探索记录、深度使用体验和深度思考表达！总之！关于AIGC的一切，现在都在这里了~

1. 入门必刷
2. 技术科普
3. 实用教程
4. 花式整活

### Stable Diffusion

[零基础学会Stable Diffusion](https://www.bilibili.com/video/BV1As4y127HW/)

B站UP主「Nenly同学」正在更新一门神仙课程——《零基础学会Stable Diffusion》，并号称「B站第一套系统的AI绘画课」。课程上线两周已经获得了23W+的播放

[开源图像模型Stable Diffusion入门手册](https://mp.weixin.qq.com/s/8czNX-pXyOeFDFhs2fo7HA)

[教会你使用AI绘画利器Stable Diffusion](https://mp.weixin.qq.com/s/9Dw2GYkg6b1vvKKyJQ-3TA)

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

### AI 翻唱
感谢教程：@领航员未鸟 https://www.bilibili.com/video/BV1Hg4y1E7nW/

@羽毛布団 https://www.bilibili.com/video/BV1H24y187Ko/

项目地址：https://github.com/svc-develop-team/so-vits-svc

## 语言模型相关

### 微软开源 Deep Speed Chat
> https://github.com/microsoft/DeepSpeed/tree/master/blogs/deepspeed-chat

4月12日，微软宣布开源 Deep Speed Chat，帮助用户轻松训练类 ChatGPT 等大语言模型，使得人人都能拥有自己的 ChatGPT！

Deep Speed Chat是基于微软Deep Speed深度学习优化库开发而成，具备训练、强化推理等功能，还使用了RLHF（人工反馈机制的强化学习）技术，可将训练速度提升15倍以上，成本却大幅度降低。例如，一个130亿参数的类ChatGPT模型，只需1.25小时就能完成训练。



## 应用层级

### chatgpt academic ​​​中科院科研工作专用
特别优化了学术 Paper 润色体验，支持自定义快捷按钮，支持 markdown 表格显示，Tex 公式双显示，代码显示功能完善，新增本地 Python 工程剖析功能 / 自我剖析功能。

项目地址：https://github.com/binary-husky/chatgpt_academic ​​​

第一步：获取项目
```sh
git clone https://github.com/binary-husky/gpt_academic.git
```

第二步：在 https://platform.openai.com/account/api-keys 上获取 api key.

第三步：复制项目 config.py 文件，重命名为 config_private.py。填写 `API_KEY`，并 `USE_PROXY` 改为 `True`，修改 `proxies` 端口号：端口号可通过 https://ipapi.co/json/ 控制台 networks 中的 /json 接口 Remote Address 查看

第四步：安装 python 3.10.x 以上版本。

第四步：windows 为例，在地址栏输入 cmd 命令提示符窗口，执行安装依赖语句 `python -m pip install -r requirements.txt`

第五步：`python main.py` 运行


### ChatPaper 速读 PDF 和刷 ArXiv 论文
在线体验：https://huggingface.co/spaces/wangrongsheng/ChatPaper

安装和使用教程：https://zhuanlan.zhihu.com/p/613055271

项目地址：https://github.com/kaixindelele/ChatPaper

### Auto-GPT
项目地址：https://github.com/Significant-Gravitas/Auto-GPT

```sh
pip install -r requirements.txt
python -m autogpt
```

[Auto-GPT](https://githubdaily.gitee.io/posts/2023-04-16-auto-gpt/) 最近挺火，但不少人因为代理问题，一直没办法在本地跑通。

除了之前提到的 AgentGPT ，这里再推荐一个解决方案：[Cognosys](https://www.cognosys.ai/)，可在线运行 Auto-GPT。

登录后，只需在线设定好机器人名称、目标、任务，即可自动运行，比较方便。


## chatGPT 前端项目（聊天界面）
### ChatGPT-Next-Web
在线地址：https://chat-gpt-next-web.vercel.app/

一键免费部署你的私人 ChatGPT 网页应用。
- 使用 Vercel 免费一键部署
- 一键导出聊天记录，完整的 Markdown 支持
- 自动压缩上下文聊天记录，在节省 Token 的同时支持超长对话

项目地址：https://github.com/Yidadaa/ChatGPT-Next-Web

### chatgpt-web 部署定制化的 chatgpt
一键部署属于自己定制化的 chatgpt web 程序(兼容gpt3.5)， 只需下载release中对应平台的项目文件，修改配置后执行，打开 `http://127.0.0.1:8080` ，便可以获得属于自己的chatgpt网站。

项目地址：https://github.com/869413421/chatgpt-web

### chatgpt-web 本地部署项目
用 Express 和 Vue3 搭建的 ChatGPT 演示网页

项目地址：https://github.com/Chanzhaoyu/chatgpt-web

### 川虎 Chat
为ChatGPT/ChatGLM/LLaMA/StableLM/MOSS等多种LLM提供了一个轻快好用的Web图形界面

项目地址：https://github.com/GaiZhenbiao/ChuanhuChatGPT