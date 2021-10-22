---
layout: default
title: Rejoin
nav_order: 6
description: "Quizlet.JS Rejoin Function"
permalink: /Rejoin
parent: Functions
---

# Quizlet.JS Rejoin Function

## Overview
This function tells the client to rejoin the game.

## Using
This function accepts *no* arguments and returns *nothing*. This function can only be run after the [**`disconnect`**](Disconnect) event, or after the [**`leave`**](Leave) function is run.

## Example
```js
Game.rejoin();
```
### Example with [**`disconnect`**](Disconnect) event.
```js
Game.on('disconnect', () => {
    Game.rejoin();
})
```