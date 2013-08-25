# Tasks

* Configure a commit message editor.
* Configure a commit message template.
* View diffs.

# Overview

This cheatsheet covers setting up and starting to use Git with Windows 8 and GitHub.
The idea is to be able to work through all the "tasks" in an hour, and to have the appendix as a reference.

* Windows 8
* [GitHub for Windows](http://windows.github.com/)
* PowerShell
* posh-git (POwerSHell-GIT)
* GitHub
* [Git - Book](http://www.git-scm.com/book)

# Commit Messages

## Conventions

* Use the imperative mood for the summary.
* http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

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

## Commit Editor

### WordPad!

    git config core.editor "'C:\Program Files\Windows NT\Accessories\wordpad.exe'"
    
* If it doesn't work, try changing the quote order from "'path'" to '"path"'

# View Diffs

Show the diff between your working tree and the index.  
Do this most often before staging.

    git diff 

Show the diff between the index and the last commit.  
Do this most often before commiting.

    git diff --cached
    
Show the diff between your working tree and the last commit.  
This might sometimes be worth doing before staging or committing.

    git diff HEAD
