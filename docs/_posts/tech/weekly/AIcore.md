---
title: AI 核心文章
category: 技术
date: 2023-5-7
vssue: true
---

[Learn Prompt 教程](https://www.learnprompt.pro/docs/intro)

[微软全面开放Bing Chat](https://www.bilibili.com/video/BV1va4y1g7NL/)

[ChatGPT4.0正式接入新必应，无限制联网免费版无敌好用！](https://www.bilibili.com/video/BV1hu41147vk/)

[【lora模型训练】全网独家，免安装，一键启动，一键炼丹！新手福音，再也不被报错和参数困扰了！](https://www.bilibili.com/video/BV1Eo4y1w7yU)

[不依赖电脑配置！手把手教你嫖阿里云试用玩AI绘图](https://www.bilibili.com/video/BV1iX4y1y7LW/?)

## 接入 ChatGPT 的文章教程

相关[机器人项目](/robot-collections)

## 教程
> 绘画 https://www.bilibili.com/medialist/detail/ml2243104665
>
> 语音合成 https://www.bilibili.com/medialist/detail/ml2252128065

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

### Midjourney 中文教程
> 最好的 Midjourney 中文教程 https://www.bilibili.com/video/BV1p24y1h7CQ
> 
> [MidJourney 学习导航](https://learningprompt.wiki/docs/midjourney-learning-path)

[Midjourney保姆级注册教程](https://mp.weixin.qq.com/s/0rllMo2iu8Blwz0DtTBeVA)

### Stable Diffusion
[Stable Diffusion 视频教程](https://www.bilibili.com/video/BV1BM4y127eD/)

[零基础学会Stable Diffusion 视频教程](https://www.bilibili.com/video/BV1As4y127HW/)

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
> https://www.bilibili.com/medialist/detail/ml2252128065

感谢教程：@领航员未鸟 https://www.bilibili.com/video/BV1Hg4y1E7nW/

@羽毛布団 https://www.bilibili.com/video/BV1H24y187Ko/

项目地址：https://github.com/svc-develop-team/so-vits-svc

[教你打造属于自己的AI孙燕姿，AI歌手模型使用及训练保姆级课程 #1/2 使用模型](https://mp.weixin.qq.com/s/bXD1u6ysYkTEamt-PYI1RA)

[教你打造属于自己的AI孙燕姿，AI歌手模型使用及训练保姆级课程 #2/2 训练模型](https://mp.weixin.qq.com/s/IeeW1PbMUbxMlLl529JTYQ)

### Lora
https://www.bilibili.com/video/BV1Eo4y1w7yU