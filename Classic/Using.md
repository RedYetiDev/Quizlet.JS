---
layout: default
title: Using
nav_order: 4
description: "How to use Quizlet.JS Classic"
permalink: /Classic/Using
parent: Classic
---

# Initial Using Guide To Quizlet.JS

> It is presumed that `const Quizlet = require('quizlet.js')` has been run.

## Creating an instance of Quizlet.JS.
```js
const Game = new Quizlet.classic("PIN", "NAME", {advanced});
```
You can learn more about the constructor [here](/Classic/Functions/Constructor)

## Joining a Game.
```js
Game.joinGame();
```
## Move on to [Events](/Classic/Events) and [Functions](/Classic/Functions)