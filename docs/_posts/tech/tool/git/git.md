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

[diff01](./diff01.png)

[diff02](./diff02.png)


# git rebase 与 git merge 合并的区别
> 对于本地的分支或者确定只有一个人使用的远端分支用rebase，其余情况用merge。

git rebase 可以给我们带来清晰的历史记录。但会变更历史对应的commit节点。
git merge  可以保留真实的提交时间等信息，并且不容易出问题，处理冲突也比较方便。
唯一有一点需要注意的是，不要对已经处于远端的多人共用分支做rebase操作。

当在feature分支中执行rebase master时，Git会以master分支对应的commit节点为起点，新增两个全新的commit代替feature分支中的commit节点。其原因是新的commit指向的parent变了，所以对应的SHA1值也会改变，所以没办法复用原feature分支中的commit。

rebase还有一个非常好用的东西叫interactive模式，使用方法是git rebase -i。
可以实现压缩几个commit，修改commit信息，抛弃某个commit等功能。
```sh
git log
# HEAD~3 意思是合并最近三次的提交
git rebase -i HEAD~3 `HEAD~3` 
# vim操作
# pick 改成 s
# 修改this is three commit 的信息
```

- 找回丢失的commit节点或分支
```sh
git log
git reflog
git reset --hard sha
```

- 获得一个干净的工作空间
```sh
git stash push -u
git stash pop
```

- 修改最近一个commit
```sh
git log
git show HEAD
vim filename
git add .
git commit --amend
# 也可以使用 git reset HEAD~，然后执行你需要的修改，再commit即可，同上面介绍的命令效果是相同的。
```

- 撤销一个合并
如果是一个本地分支，仅需git reset --hard <合并前的SHA1>即可。
发到线上才发现有bug需要回滚 git revert -m 1 <合并的SHA1>
但要注意不要在原特性分支继续开发，而应该删除原来的分支，从E’节点拉出新分支做bug修复等。
如果在原特性分支上继续开发，则在合并回master的时候需要做一次revert操作revert掉E’节点，变成E‘’（如下图），不然很容易出现丢失文件等问题。


- （切换至功能分支并且）通过交互式变基从您的develop分支中获取最新的代码提交，以更新您的功能分支。
git checkout <branchname>
git rebase -i --autosquash develop
为什么：
您可以使用 --autosquash 将所有提交压缩到单个提交。没有人会愿意（看到） develop 分支中的单个功能开发就占据如此多的提交历史。


- 如果没有冲突请跳过此步骤，如果您有冲突, 就需要解决它们并且继续变基操作。
git add <file1> <file2> ...
git rebase --continue
推送您的（功能）分支。变基操作会改变提交历史, 所以您必须使用 -f 强制推送到远程（功能）分支。 如果其他人与您在该分支上进行协同开发，请使用破坏性没那么强的 --force-with-lease 参数。

git push -f
为什么:
当您进行 rebase 操作时，您会改变功能分支的提交历史。这会导致 Git 拒绝正常的 git push 。那么，您只能使用 -f 或 --force 参数了。