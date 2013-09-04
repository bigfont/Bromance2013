[Git Book]: http://git-scm.com/book
[GitHub for Windows]: http://windows.github.com
[Commit Message Template]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

# Git Tasks

* Configure a commit message editor.
* Configure a commit message template.
* View diffs.

# Cheatsheet Overview

This cheatsheet covers setting up and starting to use Git with Windows 8 and GitHub.
The idea is to be able to work through all the "tasks" in an hour, and to have the appendix as a reference.
Most of the content comes directly from the [Git Book]

* Windows 8
* [GitHub for Windows]
* PowerShell
* posh-git (POwerSHell-GIT)
* GitHub
* [Git Book]

# Fundamental Git Concepts

## Git Patches

TODO Talk about patches here.

## Git File Locations

TODO Explain the file locations here.

- Working directory
- Snapshot
- Staging Area aka Index

## Git File Statuses

__Untracked__
- "Untracked files"
- Create a new file in your working directory.
- Remove a tracked file.
    
__Tracked__
- Add an untracked file.
- Tracked files can be unmodified, modified, or staged.

__Unmodified__
- Commit a staged file.

__Modified__
- "Changes not staged for commit"
- Edit an unmodified file (i.e. edit a file that is already tracked).

__Staged__
- "Changes to be committed"
- Stage a modified file.

# Recording Changes to the Repository

Check the status of your files. 

    git status

Track and stage an untracked file OR stage a modified file.
    
    git add [filename]
    git add [directory]

Untrack a file, commit (without a message), and remove the file from your working directory, all at once.

... remove an untracked file.

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
    
## Exercise with posh-git

    git status
    New-Item -Type File -Name readme.md
    dir
    git status 
    git rm readme.md 
    git add readme.md
    git status
    it rm --cached readme.md
    git rm asdf 
    Remove-Item -Path readme.md

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


