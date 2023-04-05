---
title: 常用 Git 操作手册
category: 技术
tags:
  - 工具
  - git
date: 2023-4-4
vssue: true
---

如果是团队新人刚入职，安装完对应的软件之后，按照常用配置进行配置。

在日常开发中，可以按照常用操作进行操作。特别是开发完一个功能需要merge到dev分支上的时候。

主要分为三部分
- 常用操作
- 常用配置
- 面试/常见问题

<!-- more -->

[[toc]]

## 背景
常规的 gitflow , 两种运行环境 `dev`,`master`。如果有修改则新建分支 `fix/bugName`，新功能则新建分支 `feat/featureName`，多人同时开发同一个功能则用自己姓名首字母/功能名称，基于feat新建分支：例如张三`zs/featureName`。CR之后合并到 `dev` 进行测试，通过测试再合并到 `master`。

## 常用操作
### 基础操作
```sh
git clone                                # 远程 clone 到本地

git fetch                                # 获取远程分支信息
git branch -a                            # 查看远程分支
git checkout <branch>                    # 切换分支

git add .                                # 将所有改动放进暂存区
git commit -m "描述"                     # 提交并附带概要信息
git pull                                 # 从远程仓库拉去代码
git push                                 # 推送代码到远程仓库
```

### 常用命令
#### 本地创建项目/添加本地资源
```sh
git init                                 # 初始化
git remote add <name> <url>              # 本地添加远程仓库地址
# 例如 git remote add origin http://xxxxx 后续只要
git branch -M main
git add .
git commit -m "feat: init"
git push -u origin main
git remote -v                            # 查看远程仓库
git remote remove <name>                 # 删除
```

#### 分支操作
```sh
git checkout -b <branch name>            # 创建并切换到新分支
git branch -d <branch name>              # 删除该分支（不能删除当前所在的分支，不能删除没有合并到master上的分支）
git branch -D <branch name>              # 删除该分支（可以删除没有合并到master上的分支）
# 远程操作
git push -d origin <branch name>          # 删除远程分支
```

#### 回退操作
```sh
git reset --hard HEAD^                   # 丢弃最新提交（未提交的内容会被擦掉）
git reset --soft HEAD^                   # 丢弃最新提交（未提交的内容不会被擦掉）
git revert HEAD^                         # 回到某个commit
```
|命令|场景|图片|
|:---:|:---:|:---:|
|git reset --soft HEAD~2|将 HEAD 移至指定的提交,不会移除该提交之后加入的修改|1|
|git reset --hard HEAD~2|再也无需访问它们|2|
|git revert HEAD^ |线上需要回滚代码|3|

git reset --soft  Git 保留了 9e78i 和 035cc 引入的修改，只是head改变为ec5be了。

![afb98800-72f7-4af9-9465-928a4adca386.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4353120cde54955a203ee316a267e57~tplv-k3u1fbpfcp-watermark.image?)

git reset --hard  Git 丢弃了 9e78i 和 035cc 引入的修改，并将状态重置到了 ec5be 的状态。

![f13f4a21-c7af-4ec2-afae-41b0368dccac.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ff196aa56b54843b6a604fd0531808e~tplv-k3u1fbpfcp-watermark.image?)

提交 9e78i 还原了由提交 ec5be 引入的修改。在撤销特定的提交时，git revert 非常有用，同时也**不会修改分支的历史**。

![dc9d4979-cd32-4026-9586-e00c31b30f2e.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4ac1eb052e941e198872d3b4bc2968f~tplv-k3u1fbpfcp-watermark.image?)

示例：
```sh
## 强制回退到某次提交，且需要强制提交
git reset ——hard HEAD^                   # commit_hash 
git push origin master --force 

## 回退到某提提交，保存提交commit记录, 重新commit
git revert HEAD^                         # commit_hash 
git add .
git commit -m "revert"
git push origin master
```

#### 误删除
```bash
# 工作区删除 - 删除操作还没 commit
git restore <filename>
# 暂存区删除 - 删除操作已经 commit
git log --oneline
git reset --hard HEAD^
# 或者 操作会产生新的提交
git revert HEAD^
```

#### 撤销一个合并
```sh
# 本地分支
git reset --hard HEAD^              # 合并前的SHA1
# 线上
git revert -n 1 HEAD^               # 合并的SHA1
```
注意不要在原特性分支继续开发，而应该删除原来的分支，从相应节点拉出新分支做bug修复等。

#### 修改 commit 信息 & 合并多个commit
```sh
git log
git show HEAD
vim filename
git add .
git commit --amend
```

也可以使用 `git reset HEAD~`，然后执行所需要的修改。再commit即可，同上面介绍的命令效果是相同的。

```sh
# 合并多个commit为一个
git log
git rebase -i HEAD~3 `HEAD~3`        # HEAD~3 意思是合并最近三次的提交
# vim操作
# 修改 commit 的信息
```

#### 功能分支提交到分支
使用 `--autosquash` 将所有提交压缩到单个提交。单个功能别占用 dev 分支大量的提交历史。
```sh
git checkout <branchname>                          # 切换至功能分支
git rebase -i --autosquash <develop branch>        # 从develop分支中获取最新的代码提交，以更新您的功能分支
```
如果有冲突, 需要解决它们并且继续变基操作。
```sh
git add <file1> <file2> ...
git rebase --continue
git push -f/                                        # 推送分支。 git push --force-with-lease
```
变基操作会改变提交历史, 所以必须使用 -f 强制推送到远程分支。
**如果其他人也在该分支上进行协同开发，使用破坏性没那么强的 `--force-with-lease` 参数。**


#### 暂存 & 获得一个干净的工作空间 
```sh
# 暂存操作
git stash                                # 暂存代码
git stash pop                            # 弹出暂存代码

# 获得一个干净的工作空间
git stash push -u
# git stash save [massage]
git stash list
git stash pop
# git stash pop stash@{[num]}
git stash clear                
```

#### cherry-pick
当一个特定分支包含我们的活动分支需要的某个提交时使用。对一个提交执行 cherry-pick 时，会在活动分支上创建一个新的提交，其中包含由拣选出来的提交所引入的修改。

假设 dev 分支上的提交 76d12 为 index.js 文件添加了一项修改，而我们希望将其整合到 master 分支中。就可以运行这个命令

![51a21106-365f-457e-8a9a-2dc94a5065f5.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3cdc53c110fc46f5a04b071f320bd49c~tplv-k3u1fbpfcp-watermark.image)

#### 标签操作
本质其实就是 hash head 的别名
```bash
# 查看tag
git tag
# 设置tag
git tag <name> head^
# 删除tag
git tag -d <name>
# 基于这个标签所在的提交创建新分支
git checkout -b <name>
```



## 常用配置
### 配置别名
对常用git命令配置别名，可以显著提升操作效率。
```sh
git config --global alias.ci commit                 # git commit -> git ci
git config --global alias.co checkout               # git checkout -> git co
git config --global alias.sh stash                  # git stash -> git sh
git config --global alias.pop "stash pop"           # git stash pop -> git pop
```

### SSH 免密登录
1. 打开 cmd/terminal 进行配置
```sh
ssh-keygen -t rsa -C "Git邮箱" # 后续三次直接回车默认
cd ~/.ssh
ls
cat ~/.ssh/id_rsa.pub # 复制 `id_rsa.pub` 的内容，准备放到 `server`(git)。
```
2. 登陆 git 账户，在 git 的设置页面，找到设置 SSH 的地方。将复制的内容粘贴到 key 里，title 是 git 邮箱。
4. 在 git bash 使用 `ssh -T git@gitee.com`，测试是否成功。
5. 进到 ~/.ssh 目录，看看有没有 authorized_keys 这个文件。
6. 如果没有，新建一个，必须是这个名字。然后随便建一个文件 pub_cp，把拷贝的公钥内容放进去，保存。
7. 执行：`cat ./pub_cp >> ./authorized_keys`，这一步是把 pub_cp 的内容追加到 authorized_keys 的末尾。为什么这么做呢？因为 当不同的客户端配免密登录的时候，authorized_keys 里可能会存多个公钥，所以新的公钥要追加而不是覆盖。
8. 用小乌龟的需要注意一点：需要设置 network，要不然报错。

### SSH 仓库快速操作
```bash
ssh-keygen -t rsa -C<git-repo>
# 找到公钥文件 c:/用户/.ssh/id_rsa.pub 复制 -> 网站 SSH 公钥菜单复制进去
```


### SSH Deploy
基于 GitHub Action 的自动部署到私有服务器，需要配置 ssh，用于免密传输生成的文件。
action 地址：https://github.com/easingthemes/ssh-deploy
这个 action 需要生成 PEM 格式的公私钥，方式如下：
```sh
ssh-keygen -m PEM -t rsa -b 4096
# 生成的这对私钥用于在容器环境，上传文件到私有服务器，所以生成的时候不必覆盖我们电脑本地的私钥
Enter file in which to save the key (/Users/7411/.ssh/id_rsa): ./my_rsa
```
这样生成了 my_rsa 和 my_rsa.pub，复制使用就好。

### git hook
git hook 的作用是在 git 动作发生前后触发自定义脚本。这些动作包括提交，合并，推送等，我们可以利用这些钩子在 git 流程的各个环节实现自己的业务逻辑。

客户端 hook 主要有四个：
- pre-commit：提交信息前运行，可检查暂存区的代码
- prepare-commit-msg：不常用
- commit-msg：非常重要，检查提交信息就用这个钩子
- post-commit：提交完成后运行

服务端 hook 包括：
- pre-receive：非常重要，推送前的各种检查都在这
- post-receive：不常用
- update：不常用

在项目中使用 `husky` 去实现，具体可以参考[前端项目添加代码规范](https://juejin.cn/post/7138678042238713870)

## 面试/常见问题

### git clone failed
Error Message: `OpenSSL SSL_read: Connection was reset, errno 10054` `git did not exit cleanly (exit code 128)`.
cmd/terminal: `git config --global http.sslVerify "false"`

### pull 或者 push timeout
```sh
# 代理
git config --global http.proxy http://127.0.0.1:xxxx
git config --global https.proxy https://127.0.0.1:xxxx

# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

### 找回丢失的commit节点或分支
```sh
git log
git reflog # 获取对应commit hash值
git reset --hard HEAD^
```

### revert 和 reset有什么区别？
git revert： 撤销某次操作，此次操作之前的commit都会被保留。
git reset ： 撤销某次提交，但是此次之后的修改都会被退回到暂存区。

### git rebase 与 git merge 合并的区别
> 对于本地的分支或者确定只有一个人使用的远端分支用 rebase，其余情况用 merge。
> 不要对已经处于远端的多人共用分支做 rebase 操作。

git rebase : 可以给我们带来清晰的历史记录。但会变更历史对应的 commit 节点。将当前分支的提交复制到指定的分支之上。

git merge  : 可以保留真实的提交时间等信息，并且不容易出问题，处理冲突也比较方便。

![d9898361-5d5a-4225-b868-47026516d323.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79cc33bbc0ee4f079a78eaf069b9fcd5~tplv-k3u1fbpfcp-watermark.image?)

### pull 与 fetch 的区别
git pull = git fetch + git merge

git pull --rebase = git fetch + git rebase

## 一次完整的开源项目 PR 流程
1. fork 代码仓库
2. clone <fork 仓库>
3. `git remote add upstream https://github.com/[xxx].git` <- 原项目地址
4. `git pull upstream master` 得到目前项目最新代码，现在我们在 <fork 仓库> 的 master 这个分支上，以后这个分支就留作跟踪 upstream 的远程代码。
5. 按照开发惯例，我们一般不在自己代码仓库的 master 上提交新的代码，而是需要为每一个新增的功能或者 bugfix 新增一个新的 branch。`git checkout -b my_change`
6. 提交代码`git add .` `git commit -m "xxx"`
7. 在我们提交完我们的代码更新之后，一个常见的问题是远程的 upstream （原本项目）已经有了新的更新，从而会导致我们提交 Pull Request 时会导致 conflict 冲突。为此我们可以在提交自己这段代码前手动先把远程其他开发者的 commit 与我们的 commit 合并。具体操作如下：
```sh
# 切换到自己的主分支
git checkout master
# 拉出项目最新的代码
git pull upstream master 
# 切回 my_change 分支
git checkout my_change 
git rebase master
# 把自己在 my_change 分支中的代码更新到自己的代码仓库的 my_change 分支
git push origin my_change
```
8. 提交 pull request 这时候可以在自己的仓库页面跳转到自己的 my_change 分支，然后点击 new pull request。
9. 等待 Repo committer 审核，如果需要进一步的代码修改，可以继续在本地的 my_change 分支下 commit 新的代码，所有新的代码会在 `git push origin my_change` 之后自动被加入之前提交的 Pull Request 中，方便进行问题的跟踪和讨论。
10. 如果一切顺利就会把代码 merge 到项目的 master，被 merge 完之后，就可以把 my_change 这个分支给删掉了


## 其他

### GitLab 搭建自己的代码托管平台
> https://about.gitlab.com
1. 下载软件 - 社区版 - centOS 7
2. 直接下载的RPM软件包安装即可 `sudp rpm -ivh /opt/module/software/gitlab-ce-xxxxx.rpm`
3. 安装依赖

```sh
sudo yum install -y curl policycoreutils-python openssh-server perl
sudo systemctl enable sshd
sudo systemctl start sshd
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
# 关闭防火墙
sudo systemctl stop firewalld
# 初始化
# 配置镜像
curl -fsSL https://packages.gitlab.cn/repository/raw/scripts/setup.sh | /bin/bash
# 安装
sudo EXTERNAL_URL="https://gitlab.example.com" yum install -y gitlab-ce
# 初始化
sudo gitlab-ctl reconfigure
# 启动
gitlab-ctl start
# 暂停
gitlab-ctl stop
```
通过 `https://gitlab.example.com/users/sign_in` 访问。root 是管理员账户。在`/etc/gitlab/initial_root_password`文件中找密码。


## 参考资料
[k88hudson: Git飞行规则](https://github.com/k88hudson/git-flight-rules/blob/master/README_zh-CN.md)

[Lydia Hallie: CS Visualized Useful Git Commands](https://dev.to/lydiahallie/cs-visualized-useful-git-commands-37p1)
