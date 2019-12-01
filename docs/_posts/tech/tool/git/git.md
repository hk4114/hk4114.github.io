---
category: tool
tags:
  - git
date: 2019-01-21
title: git
---


1. 设置不同的仓库源
```bash
git remote --help               // 查看帮助
git remote                      // 查看不同源
git remote add [name] [url]     // 添加不同地址的源，并取一个别名
git remote remove [name]        // 删除一个源
```

2. 本地分支切换绑定远程分支

```bash
git fetch
git branch -a
git checkout daily/0.3.0
```

3. git pull 与 git fetch 之间的区别

```bash
git pull : git fetch + git merge
git pull --rebase: git fetch + git rebase
```

4. 如何使版本信息回退到某次提交？revert 和 reset有什么区别？

情况：有些时候开发者需要退回到某次正确的提交记录，有些时候开发者的commit错误了，这时候可以使用 git revert 和 git reset。
- git revert： 撤销某次操作，此次操作之前的commit都会被保留。
- git reset ： 撤销某次提交，但是此次之后的修改都会被退回到暂存区。

```bash
## 强制回退到某次提交，且需要强制提交
git reset ——hard commit_hash 
git push origin master --force 

## 回退到某提提交，保存提交commit记录, 重新commit
git revert commit_hash
git add .
git commit -m "revert"
git push origin master
```

[diff01.png](./diff01.png)

[diff02.png](./diff02.png)