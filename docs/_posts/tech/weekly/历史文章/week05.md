---
title: 周报第五期
---

## 文章

1. [10 Web Development Trends in 2023](https://www.robinwieruch.de/web-development-trends/)

SPA 依旧很火，React、Vue、Svelte 市占率很高，但是 CSR 转向 SSR 趋势越来越明显。其中 SSR 值得注意的框架 Next 和 SvelteKit。为什么CSR会转向SSR？其实两种渲染模式的基本用途基本不同，但是 SSR 性能上有更完美的表现。CSS-in-JS 在 SSR 这套体系中因会使包更臃肿而被抛弃了。<br />但过去短短一年之间，Webpack 却迅速过时。Vite 是单页应用程序（SPA）领域的新秀，从 esbuild 处继承了强大的功能，而且跟其他 JavaScript 打包器相比，它是用 GO 编写的，因此打包依赖项的速度能达到竞争对手（例如 Webpack）的 10 到 100 倍。Turbopack 被称为 Webpack 的继任者。预计 Next.js 和 Turbopack 在后续将成为紧密关联的一对 Web 组合。<br />AI 驱动开发。GitHub Copilot，tabnine ai assistant，ChatGPT 越来越火热。

2. [2022大前端总结和2023就业分析](https://juejin.cn/post/7196110128038690876)

前端专业成熟度基本上见顶了，基建基本稳定，2022年做的事都是深耕基建和前端垂类细化，整体看是围绕研发体验优化为主，各垂类全面专业化。<br />运行时/开发环境：node & deno & bun<br />开发框架：react & vue & Svelte & Next & SvelteKit<br />性能/打包工具：vite & turbo & webpack 5<br />跨端：electron & Tauri
> 优秀实践 dropcode Tauri（类似Electron）+ Vite + Solidjs
> 持续关注 nextjs + turbopack

低代码全栈：服务下沉，给了一些技术变革的机会。以 retool 为例，五分钟搞定2个表格，按钮，过滤，联动。这种复杂度，对于绝大部分B端应用都够了。**其最大的创新是让ui元素和SQL字段联动，让ui元素和请求联动。**
## 工具

1. [GPT-3 Demo](https://gpt3demo.com/map)

网站收集了很多 GPT-3 的各个应用网站。看多了使用场景，让 AI 赋能，解放生产力。

2. [IT Tools: 工程师工具箱](https://it-tools.tech/)

工具箱类网页，提供各类编码工具，包含了加解密、常用转换、Web 处理工具、图片、开发、数学等。

3. [Write&Improve](https://writeandimprove.com/)

免费的英文写作提高工具。可以选择数百种话题进行写作，也有不同难易程度，可以获得需要改进的建议反馈，还可进行提交获得对应认证，适合想提高英语书写表达能力的朋友。

4. [MyFakeInfo](https://www.myfakeinfo.com/)

通过使用随机规则生成假信息，无法律风险。

## 数字化动态

1. [机器之心 2022 年度评选-创新价值案例](https://www.jiqizhixin.com/awards/bfe73dd7-0368-4013-b580-3d77396c89c4/solutions)
> [奥利普奇智：AI+MES，助力啤酒厂数字化升级](https://pro.jiqizhixin.com/database/business-cases/ffbc8f21-5426-4454-bdf0-6de21eaf881f) 
> [百度智能云设备知识库助力国能绥中电厂设备管理智能化，设备故障检修周期缩短50%以上](https://pro.jiqizhixin.com/database/business-cases/2fc002fd-e6ee-43bd-b1e3-be37826e8b7a)

2. [机器之心 2022 年度评选-商业价值案例](https://www.jiqizhixin.com/awards/e34f2c29-d691-40e5-926a-b101c1161e26/solutions)
> [高重智慧农业产业大数据服务平台](https://pro.jiqizhixin.com/database/solutions/96d3b31e-544e-4a65-ab81-7188ecce36f5)
> [快商通AI SaaS 全链路营销解决方案](https://pro.jiqizhixin.com/database/solutions/66191f79-4592-4898-bc1b-d5b96c23fa4e) 
> [企企通一站式采购数字化管理平台](https://pro.jiqizhixin.com/database/solutions/9732951a-0ac1-41f4-af2b-063df8f8827c)


3. [旧工厂如何用 AI 玩出新花样？](https://mp.weixin.qq.com/s/_ngCImuWEDdNGOpQ1CJy4A)

摘要：<br />很多老旧设备的监测表头前都加装了一个摄像头，通过对表头数据（包括温度、压力等）进行图像识别和读取，把无法进行数据采集的关键设备信息也上传到了后台，供后续数据分析使用。这就解决了既要保护原始投资，又想实现数据获取、传输和应用的问题。<br />“所谓的自感知就是数据能被采集侦测，比如设备的状况能通过 IoT 技术做到实时监测；自决策就是数据采集后可以借助 AI 技术进行数据分析建模，从而实现自主决策，例如是否要调整参数或者停机等等，并且不管数据是在边缘、云端还是本地；自执行就是在决策完成后，可以把决策动作反馈到后台，让智能系统做自执行、自调整，形成闭环。”<br />尤其是在过去十年间，国内面板市场出现了大规模的扩产，对于友达这样的光电制造领导企业来说，必须提前布局思考如何从规模竞争转向价值竞争。所谓价值转型主要表现在两方面：首先，是产品形态的转变，专注于高附加值的产品；其次，是订单形态的变化，从规模化生产转变为少量多样的订单生产。<br />赖骏凯认为 AI 在制造行业主要有三大应用场景——数据科学、工业质检和智能监控。<br />企业不需要急于求成，一开始就投入大量的资源。而是找准自己的问题点，在几个关键的业务场景先针对性地投入做试点，取得一定改善成效之后再进一步复制平展。

4. [不再追求大而全的“军备竞赛”，用聚焦来提高转型“成功率”](https://mp.weixin.qq.com/s/cmRjal21zbFQOCPeVh3rrw)
```
大纲
├─不确定时代，需要更务实的数字化
├─有限资源下，聚焦更迫切的数字化场景
├─数字化转型“成功率”仅有 16%，挑战来自方方面面
| ├─挑战一：组织、流程、文化的转型滞后
| ├─挑战二：数据“地基”还没打好
| └─挑战三：人才缺口大
├─展望 2023，加速从点到面的数字化
| ├─重视平台化建设
| ├─加速智能化升级
| └─补齐人才短板
└─总结
```
