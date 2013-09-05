[Git Book]: http://git-scm.com/book
[Git Book - 2.2]: http://www.git-scm.com/book/en/Git-Basics-Recording-Changes-to-the-Repository
[GitHub for Windows]: http://windows.github.com
[posh-git]: http://dahlbyk.github.io/posh-git
[Commit Message Template]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
[GitHub]: https://github.com
[PowerShell]: http://technet.microsoft.com/en-us/scriptcenter/dd742419.aspx
[New-Item]: http://technet.microsoft.com/en-us/library/ee176914.aspx
[Remove-Item]: http://technet.microsoft.com/en-us/library/ee176938.aspx
[Add-Content]: http://technet.microsoft.com/en-us/library/ee156791.aspx
[Get-Content]: http://technet.microsoft.com/en-us/library/ee176843.aspx

# Overview

* This covers setting up and starting to use Git.
* It should be possible to work through all the exercises in an hour.
* The appendix is meant as a reference.
* Most of the content comes directly from the [Git Book].

# Requirements

* Windows 8
* PowerShell

# Contents

* Basic Git concepts
* Install Git for Windows and posh-git
* Configure a commit message editor
* Configure a commit message template
* Record changes to the repository
* View diffs
* Setup a GitHub account
* Work with the remote repository
* Appendix of commands

# Install GitHub for Windows and posh-git

* [GitHub for Windows]
* [posh-git] (POwerSHell-GIT)

# Basic Git concepts

## Everything is local (within reason)

TODO Talk about how everything is local.

## Git Patches

TODO Talk about patches.

## Git File Locations

TODO Explain the file locations here.

- working directory aka working tree
- snapshot
- staging Area aka Index
- repository
- remote
- upstream

## Git File Statuses

__Untracked__
- Git is not tracking changes in these files. 
- Git will state "untracked files present" until you either add them or ignore them.
- "Untracked files"
- Create a new file in your working directory.
- Remove a tracked file from the index.
    
__Tracked__
- Git is tracking changes in these files.
- Tracked files are always in at least one of three states: unmodified, modified, or staged.
- Tracked files can be both modified and staged!

__Unmodified__
- Git notices no file differences between your working directory and your repository.
- "nothing to commit, working directory clean"
- Stage all modified files then commit.

__Modified__
- Git notices that you have made changes to a file but have not yet staged those changes.
- "Changes not staged for commit"
- Edit an unmodified file.
- Edit a staged file.

__Staged__
- Git will include these file changes in your next commit.
- "Changes to be committed"
- Add an untracked file (the file is immediately staged; it skips both unmodified and modified statuses)
- Stage a modified file.

# Practice - Recording Changes to the Repository

See also: [Git Book - 2.2]

__The Whole Script__ with neither explainations nor cleanup.

    cd C:
    new-item -type dir -name practicegit
    cd practiceGit
    git init
    new-item -type file -name readme.md
    git add readme.md    
    git commit -m "Added a readme file, because this will help users."
    add-content readme.md "Dev Teach 2013"
    git add readme.md
    add-content readme.md "`nStarting Git"
    git commit -m "Add some content to the readme."    

__Open PowerShell and navigate to C:/.__ 

    cd C:\
     
__Create and enter a new directory.__ These are PowerShell commandlets not Git commands.

    new-item -type dir -name practicegit
    cd practiceGit
    git init
    
__Clear the PowerShell screen.__

    cls

__Create a git repository.__ This is a Git command.

    git init
    
__List all children includes hidding items.__ The .git directory *is* the repository.

    ls -force
    
__Delete a Git repository.__ Just delete the .git directory.

    remove-item -force -recurse .git
    ls -force

__Delete an empty directory.__ This brings us back to square one.

    cd.. 
    remove-item practicegit
    
__Create and enter a directory. Then, create a repository.__

    new-item -type dir -name practicegit
    cd practiceGit
    git init
    ls -force

__Check the status of your files.__

    git status
    
__Create a new file.__ The file is __untracked__.

    new-item -type file -name readme.md
    git status
    
__Start tracking a file.__ The file goes from __untracked__ to __staged__ aka "Changes to be committed."

    git add readme.md
    git status
    
__Stop tracking a staged file.__ The file goes from __staged__ to __untracked__. It is *not* deleted.

    git rm --cached readme.md
    ls -force
    git status
    
__Delete an untracked file.__ PowerShell deletes it from the working tree.

    remove-item readme.md
    ls -force
    git status
    
__Create a new file and start tracking it.__ The file is __staged__.

    new-item -type file -name readme.md
    git add readme.md
    git status
    
__Remove a staged file.__ The file goes from __staged__ to __untracked__ and Git deletes it from the working tree.

    git rm -f readme.md
    ls -force
    git status
    
__Create a new file and start tracking it.__ The file is __staged__.

    new-item -type file -name readme.md
    git add readme.md
    git status
    
__Delete a staged file.__ The file goes from __staged__ to __modified__, because PowerShell has deleted it.

    remove-item readme.md
    ls -force
    git status
    
__Tell git that you've deleted a tracked file.__ The deleted file goes from __modified__ to __untracked__.

    git rm readme.md
    git status
        
__Create a new file and start tracking it.__ The file is __staged__.

    new-item -type file -name readme.md
    git add readme.md    
    git status
    
__Commit staged changes.__ The file goes from __staged__ to __unmodified__ and Git has put it in the repository.

    git commit -m "Added a readme file, because this will help users."
    ls -force
    git status
    
__Append some data to a file.__ The file goes from __unmodified__ to __modified__ aka "Changes not staged for commit"

    add-content readme.md "Dev Teach 2013"
    get-content readme.md
    git status
    
__Stage the changes.__ The file goes from __unmodified__ to __staged.__

    git add readme.md
    git st
    
__Modify a staged file.__ The files goes from __staged__ to __staged and modified__, because git tracks __diffs__.

    add-content readme.md "`nStarting Git"
    get-content readme.md
    git status
    
> Git diff gives more specific information that git status does. 
> Status talks about files; diff talk about lines.
    
__View diffs between the working tree and the index and y.__ What have you changed but not yet staged?

    git diff

__View diffs between the index and the repository.__ What have you staged that you are about to commit? 

    git diff --cached
    git diff --staged
    
__Stage the changes.__ The file is now __staged__.

    git add readme.md
    git st
    
__Commit.__ The file is now __unmodified__.

    git commit -m "Add some content to the readme."
    
__Check the history.__ Press 'q' to exit the pager.

    git log
    
__Create a new file, start tracking it, and add it to the repository.__

    new-item -type file -name foobar.txt
    git add foobar.txt
    git commit -m "Add a new file for git log practice."
    
__Make some changes to the file, stage and commit them.__

    add-content foobar.txt "foo"
    git commit -am "Add foo."
    add-content foobar.txt "`nLet's make the history more interesting."
    git commit -am "Add some filler text."
    add-content foobar.txt "`nbar"
    git commit -am "End the document with bar."
    git log 
    
__View the last (n) commits.__

    git log -4

__View the log with diffs.__ Diffs are also knowns as patches.

    git log -p -2
    
__View the log with stats.__

    git log --stat -2
    
__View the log with prebuilt prettiness.__ Here they are in order of pithiness.

...hash and message  

    git log --pretty=oneline -1
    
...hash, message, and author  
    
    git log --pretty=short -1
    
...hash, message, author, and date

    git log 
    
...hash, message, author, committer

    git log --pretty=full -1
    
...hash, message, author, committer, authorDate, committerDate
    
    git log --pretty=fuller -1
    
__Customize the log output.__

    git log --pretty=format:"%h ... %s"
    
__Include a graphical representation.__ This becomes useful with branching and merging.

    git log --pretty=oneline --graph
    
__Show the hash and a list of modified files.__

    git log --name-only
    git log --name-only --pretty=format:"%H"
    
__Filter the log output.__

    git log --since=2.weeks
    git log --author=shaunluttin@gmail.com
    git log --grep="file"
    git log readme.md
    git log --pretty=oneline -p readme.md
    
__Clean Up__

    cd C:/
    remove-item -force -recurse practicegit
    cls
    ls

# Commit Messages

## Conventions

* Use the imperative mood for the summary.
* Checkout this [Commit Message Template]

# Config Locations 

## System

    git config --system
    
* /etc/gitconfig  
* eg. "C:\Program Files (x86)\Git\etc\gitconfig"

## Global

    git config --global
    
* ~/.gitconfig  
* eg. "C:\Users\Shaun\.gitconfig"

## Repository

    git config 

* .git\config  
* eg. "C:\Users\Shaun\Documents\GitHub\Spark-Vendord\.git\config"

# Config Basics

## Ignoring Files

- blank lines and lines starting with # are ignored
- specify directories by ending patterns with (/)
- negate patterns by starting with (!)

__Basic Glob Patterns__
- * matches zero or more char
- [abc] matches any char within the brackets
- ? matches a single char
- [0-9] matches any chars within the range

## Commit Editor

### WordPad!

    git config core.editor "'C:\Program Files\Windows NT\Accessories\wordpad.exe'"
    
* If it doesn't work, try changing the quote order from "'path'" to '"path"'

# View Diffs

- git diff shows more details than git status does. 

__What have I changed but not yet staged?__
Show the diff between your working tree and the index.
Do this most often before staging.

    git diff 

__What have I staged that I am about to commit?__
Show the diff between the index and the last commit.  
Do this most often before committing.

    git diff --cached
    
Show the diff between your working tree and the last commit.  
This might sometimes be worth doing before staging or committing.

    git diff HEAD

Track and stage an untracked file OR stage a modified file.
    
    git add [filename]
    git add [directory]
    
Remove files.     
I.e. untrack a file and remove it from your working directory, all at once.

... remove an unmodified file.

    git rm [filename] 
    
... remove a staged file.    

    git rm -f [filename] 
    
... untrack a staged file.    

    git rm --cached [filename] 

Commit staged files.
    
    git commit 
    
... add the diffs to the commit message editor.
    
    git commit -v
    
... add add a commit message inline.

    git commit -m "Did x because y."
    
... automatically stage all tracked files.
    
    git commit -a
    
Rename a file.

    git mv file_from file_to

