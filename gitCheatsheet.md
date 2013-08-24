# Overview

- PowerShell
- posh-git (POwerSHell-GIT)
- Windows 8
- GitHub

# Commit Messages

## Conventions

- Use the imperative mood for the summary.
- http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

# Config Locations 

## System

    git config --system
    
/etc/gitconfig

## Global

    git config --global
    
~/.gitconfig    

## Repository

    git config 
    
eg. "C:\Users\Shaun\Documents\GitHub\Spark-Vendord\.git\config"

# Config Basics

## Commit Editor

### WordPad!

    git config core.editor "'C:\Program Files\Windows NT\Accessories\wordpad.exe'"
    
If it doesn't work, try changing the quote order from "'path'" to '"path"'
