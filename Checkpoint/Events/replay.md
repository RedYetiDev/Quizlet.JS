---
layout: default
title: Replay
nav_order: 7
description: "Quizlet.JS Checkpoint Replay Event"
permalink: /Checkpoint/Events/Replay
parent: Checkpoint Events
grand_parent: Checkpoint
---
## This is not yet implemented, but will be in a future version
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