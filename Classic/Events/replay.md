---
layout: default
title: Replay
nav_order: 7
description: "Quizlet.JS Classic Replay Event"
permalink: /Classic/Events/Replay
parent: Classic Events
grand_parent: Classic
---

# Quizlet.JS `replay` Event

## Overview
This event is emitted when the game host replay's the game after the game has ended

## Using
This event is only used to let the client now that the game is being replayed. This event returns nothing.

## Example
```js
Game.on('replay', () => {
    console.log(`The Host is replaying the game`);
});
```