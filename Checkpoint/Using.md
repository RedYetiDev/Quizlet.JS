---
layout: default
title: Using
nav_order: 4
description: "How to use Quizlet.JS Checkpoint"
permalink: /Checkpoint/Using
parent: Checkpoint
---

# Initial Using Guide To Quizlet.JS

> It is presumed that `const Quizlet = require('quizlet.js')` has been run.

## Creating an instance of Quizlet.JS.
```js
const Game = new Quizlet.checkpoint("PIN", "NAME", {advanced});
```
You can learn more about the constructor [here](/Checkpoint/Functions/Constructor)

## Joining a Game.
```js
Game.joinGame();
```
## Move on to [Events](/Checkpoint/Events) and [Functions](/Checkpoint/Functions)