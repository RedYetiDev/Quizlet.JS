---
layout: default
title: Connect
nav_order: 1
description: "Quizlet.JS Checkpoint Connect Event"
permalink: /Checkpoint/Events/Connect
parent: Checkpoint Events
grand_parent: Checkpoint
---

# Quizlet.JS `connect` Event

## Overview
This event signifies the client connecting to the game.

## Using
This event's only use is to let the client know that it connected. The event does not return anything.

## Example
```js
Game.on('connect', () => {
    console.log('You have connected to the game');
});
```