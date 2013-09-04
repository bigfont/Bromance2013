[Git Book]: http://git-scm.com/book
[GitHub for Windows]: http://windows.github.com
[posh-git]: http://dahlbyk.github.io/posh-git/
[Commit Message Template]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
[GitHub]: https://github.com/

# Overview

* This covers setting up and starting to use Git.
* It should be possible to work through all the exercises in an hour.
* The appendix is meant as a reference.
* Most of the content comes directly from the [Git Book]

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

- Working directory
- Snapshot
- Staging Area aka Index
- Repository
- Remote
- Upstream

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

# Record changes to the repository

Open PowerShell and navigate to C:/  

     cd C:\
     
Create a new directory.

     New-Item -type dir -name practiceGit
     cd practiceGit
     
Create a git repository.

    git init
    
List the contents of a directory including hidden files.

    ls -force
    
*Delete a git repository.*

    remove-item -force -recurse .git

*Delete a directory.*

    cd.. 
    remove-item practiceGit
    
Repeat without delete.

    cd C:\
    New-Item -type dir -name practiceGit
    cd practiceGit
    git init

Check the status of your files. 

    git status
    
Create a new file. 

    New-Item -type file -name readme.md
    ls
    git status
    
Start tracking a file (this also stages the new file).

    git add readme.md
    git status
    
*Remove a staged file.*

    git rm -f readme.md
    ls
    
Repeat without delete.

    git status
    New-Item -type file -name readme.md
    git add readme.md
    
Stop tracking a staged file. 

    git rm --cached readme.md
    git status
    
Delete a file.

    remove-item -name readme.md
    git status
    
Create a new file and start tracking it. 

    New-Item -type file -name readme.md
    git add readme.md
    git status
    
Commit staged changes. 

    git commit -m "Added a readme file, because this will help users."
    
Remove an unmodified file. 

    git rm readme.md
    git st
    git commit -m "Removed readme.md, because it was annoying to users."
    
Create a new file.

    new-item -type file -name readme.md
    ls
    git st
    
Remove a staged file.    

    git add -A
    git st
    git rm readme.md -f
    git st
    ls
    
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

