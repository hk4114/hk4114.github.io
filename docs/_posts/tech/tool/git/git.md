---
category: 技术
tags:
  - git
date: 2020-11-8
title: Git操作整理
---
> [Git飞行规则(Flight Rules)](https://github.com/k88hudson/git-flight-rules/blob/master/README_zh-CN.md)
> [看小姐姐用动图展示 10 大 Git 命令](https://mp.weixin.qq.com/s/65XK7vpmLhFjQsBB9SBZdA)
> [gitmagic](https://github.com/blynn/gitmagic/tree/master/zh_cn)
# Git操作整理

## git 常用操作命令

### git 常用操作流程
```bash
git clone                                # 远程 clone 到本地

git init                                 # 初始化
git remote add <name> <url>              # 本地添加远程仓库地址 例如git remote add origin http://xxxxx

git fetch                                # 获取远程分支信息
git branch -a                            # 查看远程分支
git checkout <branch>                    # 切换分支

git add .                                # 将所有改动放进暂存区
git commit -m "描述"                     # 提交并附带概要信息
git pull                                 # 从远程仓库拉去代码
git push                                 # 推送代码到远程仓库
```

### git 其他操作命令
```bash
# 分支操作
git checkout -b <branch name>            # 创建并切换到新分支
git branch -d <branch name>              # 删除该分支（不能删除当前所在的分支，不能删除没有合并到master上的分支）
git branch -D <branch name>              # 删除该分支（可以删除没有合并到master上的分支）

# 回退操作
git reset --hard HEAD^                   # 丢弃最新提交（未提交的内容会被擦掉）
git reset --soft HEAD^                   # 丢弃最新提交（未提交的内容不会被擦掉）
git revert HEAD^                         # 回到某个commit

# 合并操作
git rebase 目标基础点                     # 重新设置基础点
git merge <branch name>                  # 将分支合并到head指向的分支

# 远程操作
git push -d origin <branchName>          # 删除远程分支

# 暂存操作
git stash                                # 暂存代码
git stash pop                            # 弹出暂存代码
```

### 常用命令详解

### 配置操作别名
对常用git命令配置别名，可以显著提升操作效率。
```sh
git config --global alias.ci commit                 # git commit -> git ci
git config --global alias.co checkout               # git checkout -> git co
git config --global alias.sh stash                  # git stash -> git sh
git config --global alias.pop "stash pop"           # git stash pop -> git pop
```

## git 常见问题以及解决办法

### 修改最近一个commit
```sh
git log
git show HEAD
vim filename
git add .
git commit --amend
# 也可以使用 git reset HEAD~，然后执行你需要的修改，再commit即可，同上面介绍的命令效果是相同的。
```

### 获得一个干净的工作空间
```sh
git stash push -u
# git stash save [massage]
git stash list
git stash pop
# git stash pop stash@{[num]}
git stash clear
```

### 合并多个commit为一个
```sh
git log
# HEAD~3 意思是合并最近三次的提交
git rebase -i HEAD~3 `HEAD~3` 
# vim操作
# pick 改成 s
# 修改this is three commit 的信息
```

### 找回丢失的commit节点或分支
```sh
git log
git reflog # 获取对应commit hash值
git reset --hard <hash>
```

### 单一功能提交到分支
使用 --autosquash 将所有提交压缩到单个提交。没有人会愿意（看到） develop 分支中的单个功能开发就占据如此多的提交历史。
```sh
git checkout <branchname>                          # 切换至功能分支
git rebase -i --autosquash <develop branch>        # 从develop分支中获取最新的代码提交，以更新您的功能分支 
```
如果有冲突, 需要解决它们并且继续变基操作。
```sh
git add <file1> <file2> ...
git rebase --continue
git push -f/--force-with-lease                     # 推送您的（功能）分支。
``` 
变基操作会改变提交历史, 所以必须使用 -f 强制推送到远程（功能）分支。 

如果其他人也在该分支上进行协同开发，使用破坏性没那么强的--force-with-lease参数。 


## 常见的 git 面试问题

### pull 与 fetch 的区别
```bash
git pull : git fetch + git merge
git pull --rebase: git fetch + git rebase
```

### 如何使版本信息回退到某次提交？revert 和 reset有什么区别？

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

### git rebase 与 git merge 合并的区别
> 对于本地的分支或者确定只有一个人使用的远端分支用rebase，其余情况用merge。

git rebase 可以给我们带来清晰的历史记录。但会变更历史对应的commit节点。

git merge  可以保留真实的提交时间等信息，并且不容易出问题，处理冲突也比较方便。

唯一有一点需要注意的是，不要对已经处于远端的多人共用分支做rebase操作。

当在feature分支中执行rebase master时，Git会以master分支对应的commit节点为起点，新增两个全新的commit代替feature分支中的commit节点。其原因是新的commit指向的parent变了，所以对应的SHA1值也会改变，所以没办法复用原feature分支中的commit。

rebase还有一个非常好用的东西叫interactive模式，使用方法是git rebase -i。

可以实现压缩几个commit，修改commit信息，抛弃某个commit等功能。


### 撤销一个合并
如果是一个本地分支，仅需git reset --hard <合并前的SHA1>即可。

发到线上才发现有bug需要回滚 git revert -m 1 <合并的SHA1>

但要注意不要在原特性分支继续开发，而应该删除原来的分支，从E’节点拉出新分支做bug修复等。