---
layout: default
title: gameOver
nav_order: 4
description: "Quizlet.JS Checkpoint gameOver Event"
permalink: /Checkpoint/Events/gameOver
parent: Checkpoint Events
grand_parent: Checkpoint
---

# Quizlet.JS `gameOver` Event

## Overview
This event is emitted when the game ends.

## Using
This event's only use is to let the client know that the game has ended, and if the client won. This event returns one boolean, which is `true` if the client wins, and `false` if the client loses

## Example
```js
Game.on('gameOver', (didWin) => {
    console.log(`We ${didWin ? 'Won' : 'Lost'}`);
});
```