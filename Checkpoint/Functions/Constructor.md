---
layout: default
title: Constructor
nav_order: 2
description: "Quizlet.JS Checkpoint Constructor"
permalink: /Checkpoint/Functions/Constructor
parent: Checkpoint Functions
grand_parent: Checkpoint
---

# Quizlet.JS Constructor

## Overview
This function returns/creates a new instance of **`Quizlet Checkpoint`**, which is the entire game client. 

## Using
When you use this function, you *must* supply the game pin and the username to display. You can also supply an image to use. The order of the paramters is: **Pin, Name, Advanced**

### Here are the options for the JSON `Advanced` Parameter:
- `userImage`:
    The `userImage` parameter is the client's user image.
- `accountName`:
    The `accountName` parameter is the account username if you want to login. If this parameter is set, the user image, and user name are overrided by the account name.

## Example
```js
const Game = new Quizlet.checkpoint(123456, 'RedYetiDev', {
    userImage: 'https://quizlet.com/favicon.ico',
    accountName: 'RedYetiDev'
})
```