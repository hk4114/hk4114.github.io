---
title: Vuepress-Markdown
category: 技术项目应用
tags:
  - Vue
  - Markdown
  - 博客
date: 2019-04-17
vssue: false
---


如何在vuepress中使用markdown

<!-- more -->


# vuepress

### 项目初始化

1. `npm init -y` -> `npm i vuepress -D`
2. `mkdir docs` -> `echo "# first vuepress" > README.md`
3. 修改`package.json`文件
```json
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "deploy": "bash deploy.sh"
}
```

4. `echo "" > deploy.sh` [自动部署](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)

### 基本项目结构

```
.
├─ docs
│  ├─ .vuepress
│  │   ├─ public
│  │   ├─ theme            // 主题设置
│  │   ├─ config.js        // 配置文件
│  │   └─ enhanceApp.js    // 应用级别的配置
│  ├─ README.md
│  └─ Other dir
│      ├─ README.md
│      └─ vuepress.md
├─ package.json
└─ deploy.sh
```

### markdown 拓展

1. table

|          emoji          |         meanning         |            emoji            |                 meanning                 |
| :---------------------: | :----------------------: | :-------------------------: | :--------------------------------------: |
|         :tada:          |        第一次提交        |         :ambulance:         |              重要的修补程序              |
|          :bug:          |         修复bug          |           :fire:            |           移除了一些文件和代码           |
|       :sparkles:        |        介绍新功能        | :chart_with_upwards_trend:  |            添加分析或跟踪代码            |
|          :art:          |     改进代码结构格式     |    :construction_worker:    |              添加CI构建系统              |
|          :zap:          |         提升性能         |         :arrow_up:          |          Upgrading dependencies          |
|         :memo:          |         项目文档         |        :arrow_down:         |         Downgrading dependencies         |
|        :rocket:         |           部署           |          :pushpin:          |          将依赖项固定到特定版本          |
|       :lipstick:        |     更新UI与样式文件     |          :recycle:          |                 重构代码                 |
|   :white_check_mark:    |      updating tests      |           :whale:           |                 容器工作                 |
|         :lock:          |       解决安全问题       |      :heavy_plus_sign:      |           Adding a dependency            |
|      :see_no_evil:      | 添加或更新.gitignore文件 |     :heavy_minus_sign:      |          Removing a dependency           |
|     :camera_flash:      |      添加或更新截图      |          :wrench:           |               修改配置文件               |
|          :mag:          |         提升SEO          |          :pencil2:          |                拼写错别字                |
|        :alembic:        |        尝试新事物        |          :hankey:           |          编写需要改进的错误代码          |
|     :construction:      |      工作正在进行中      |          :rewind:           |                 还原更改                 |
|       :bookmark:        |      发布/版本标签       | :twisted_rightwards_arrows: |               合并分支机构               |
|        :iphone:         |        响应式布局        |          :package:          |            更新编译的文件或包            |
|          :egg:          |         增加彩蛋         |           :alien:           |        由于外部API更改而更新代码         |
|      :clown_face:       |    mocking something     |           :truck:           |             移动或重命名文件             |
| :building_construction: |         架构更改         |      :page_facing_up:       |             添加或更新许可证             |
|   :children_crossing:   |   改善用户体验/可用性    |           :boom:            |               介绍重大变化               |
|  :busts_in_silhouette:  |        增加贡献者        |           :bento:           |        Adding or updating assets         |
|      :loud_sound:       |         增加日志         |          :ok_hand:          | Updating code due to code review changes |
|         :mute:          |         移除日志         |        :wheelchair:         |         Improving accessibility          |
|         :apple:         |      解决苹果PC问题      |           :bulb:            |         Documenting source code          |
|        :penguin:        |      解决linux问题       |           :beers:           |          Writing code drunkenly          |
|    :checkered_flag:     |     解决windows问题      |      :speech_balloon:       |        Updating text and literals        |
|         :robot:         |      解决安卓端问题      |       :card_file_box:       |   Performing database related changes.   |
|      :green_apple:      |     解决苹果手机问题     |

```md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

### `[[toc]]` 目录

[[toc]]

### 自定义容器 tip/warning/danger

::: tip 自定义标题
this is tip
:::

### 代码块高亮

> code area type: js/html/yml/md/sh/json/vue

```js{2}
function echo(str){
  return `${str}`
}
```
