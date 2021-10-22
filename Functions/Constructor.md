---
layout: default
title: Constructor
nav_order: 2
description: "Quizlet.JS Constructor"
permalink: /Constructor
parent: Functions
---

# Quizlet.JS Constructor

## Overview
This function returns/creates a new instance of **`Quizlet`**, which is the entire game client. 

## Using
When you use this function, you *must* supply the game pin and the username to display. You can also supply an image to use. The order of the paramters is: **Pin, Name, Image**

## Example
```js
const Game = new Quizlet(123456, 'RedYetiDev', 'https://quizlet.com/favicon.ico')
```