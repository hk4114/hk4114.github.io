---
title: 如何经营好Github账号
category: tool
tags:
  - git
vssue: false
---

1. 找好方向 , 参与感兴趣的开源项目;
2. GitHub 比较流行的项目: 总结类、教程/demo 类、工具类、产品类和框架类，难度依此由低到高

<!-- more -->

### 找好方向 , 参与感兴趣的开源项目

怎么参与呢？先熟悉项目的现状。

可以通过阅读项目文档、贡献者文档，查看 Issues 等方式，了解这个项目之前发生过什么，当前有哪些 Issue 是急需人贡献的，未来会有哪些新的特性可以参与等等，以此来确认自己能做些什么。
1. 通过阅读项目文档、查看 Issue，了解项目情况现状，从 issue 了解哪些是急需人贡献的等，确认自己能做些什么。
2. 从一些简单的 PR 开始，比如检查拼写错误、代码格式、翻译英文文档等等。
3. 在对项目有了更深入的了解和实践后，可以进行 Fix Bug、写 Test Case、实现某个 Feature、提交 New Feature 等操作了。
4. 也可以把自己的学习过程以及相应的案例写下来，分享给同样对这个项目感兴趣的伙伴。


::: tip
目前 GitHub 比较流行的项目有总结类、教程/demo 类、工具类、产品类和框架类，难度依此由低到高，所以可以从写写某个技术的教程/demo 开始，然后到构建工具、产品，再到打造框架、系统，不过呢，最后两种项目一般都是大公司在维护，个人开发者建议还是写写工具类或产品类项目更合适。
:::


### 一次完整的 PR 流程
1. fork
2. clone
3. git remote add upstream https://github.com/[xxx].git (原地址)
4. git pull upstream master 得到目前的 Apache/spark 的最新代码，现在我们在fork的项目代码仓库的master 这个分支上，以后这个分支就留作跟踪 upstream 的远程代码。
5.  按照开发惯例，我们一般不在自己代码仓库的master上提交新的代码，而是需要为每一个新增的功能或者bugfix新增一个新的branch。git checkout -b my_change
6. 提交代码git add . git commit -m “message need to be added here”
7. 在我们提交完我们的代码更新之后，一个常见的问题是远程的upstream（即apache/spark)已经有了新的更新，从而会导致我们提交Pull Request时会导致conflict。为此我们可以在提交自己这段代码前手动先把远程其他开发者的commit与我们的commit合并。使用：
   1. git checkout master 切换到自己的主分支
   2. git pull upstream master 拉出apache spark的最新的代码
   3. 切换回 my_change 分支，使用git checkout my_change git rebase master
   4. 然后把自己在my_change分支中的代码更新到在自己github代码仓库的my_change分支中去：git push origin my_change 
8. 提交pull request 这时候可以在自己的仓库页面跳转到自己的my_change分支，然后点击 new pull request。
9. 等待 Repo committer 审核PR，如果需要进一步的代码修改，可以继续在本地的my_change分支下commit新的代码，所有新的代码会在”git push origin my_change”之后自动被加入之前提交的Pull Request中，方便进行问题的跟踪和讨论。
10. 如果一切顺利，commiter就会把代码merge到项目的master，被merge完之后，就可以把my_change这个分支给删掉了
