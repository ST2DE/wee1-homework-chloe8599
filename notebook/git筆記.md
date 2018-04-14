## 什麼是git?
[Git](https://zh.wikipedia.org/wiki/Git) 是一個分散式版本控制軟體，最初由 Linus Torvalds 創作（也是作業系統 [Linux](https://zh.wikipedia.org/zh-tw/Linux) 系統的開發者），其最初目的是為更好地管理 Linux kernel 開發而設計，其具備優秀的 merge tracing 合併程式碼的能力（使用程式碼 snapshot 來比較歷史版本差異）。
## 什麼是github?
[Github](https://github.com/) 則是一個支援 git 程式碼存取和遠端托管的平台服務，有許多的開放原始碼的專案都是使用 Github 進行程式碼的管理。

## git的基本概念
![](https://blog.techbridge.cc/img/kdchang/cs101/git-workflow.png)

Git 可以分為 Local（本地）和 Remote（遠端）兩個環境，由於 Git 屬於分散式的版本控制系統，所以開發者可以在離線 local 環境下開發，等到有網路時再將自己的程式推到 Remote 環境或 pull 下其他開發者程式碼進行整合。在 Local 中又分為 working directory（工作資料夾）、staging area（暫存區）和 repositories（檔案庫）。
![](https://i.imgur.com/hz8u4xw.png)

Git有三種表達檔案的狀態：已提交(committed)、已修改(modified)及已暫存(staged)。
基本Git工作流程大致如下：

* 修改工作目錄內的檔案
* 暫存檔案，將檔案的快照新增到暫存區域
* 做提交的動作，這會讓存在暫存區域的檔案快照永久地儲存在Git目錄。

## git的基本指令

1. 設定使用者資訊
```
    $ git config --global user.name "使用者名稱"
    $ git config --global user.email "信箱"
    #查看設定內容
    $ git config --list
```

2. 開始使用git
```
    #建立一個新的Git Repository
    $ git init
    #複製別人的Git Repository
    $ git clone https://github.com/ST2DE/wee1-homework-chloe8599.git
    #生一個新branch
    git branch [branch-name] 
    #切換到此branch上
    git checkout [branch-name] 
```
3. 檔案修改後的整理
```
    git status #看修改了哪些檔案
    git add [修改到的檔案]     
    git commit -m [註解]
    #不斷重複步驟直到 git status 顯示沒有任何修改過的檔案
```

4. 上傳至遠端
```
    git checkout master
    git merge [branch-name] #和master merge
    git push 
```

## 參考資料
* [Git 與 Github 版本控制基本指令與操作入門教學](https://blog.techbridge.cc/2018/01/17/learning-programming-and-coding-with-python-git-and-github-tutorial/)
* [Git - Git 與 Github 版本控制超簡易教學](http://mropengate.blogspot.tw/2015/04/git-github.html)
* [Git 筆記 - Git初始設定 & Github入門](http://tech-marsw.logdown.com/blog/2013/08/16/git-notes-github)

