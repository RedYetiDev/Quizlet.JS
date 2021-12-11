---
layout: default
title: Disconnect
nav_order: 2
description: "Quizlet.JS Classic Disconnect Event"
permalink: /Classic/Events/Disconnect
parent: Classic Events
grand_parent: Classic
---

# Quizlet.JS `disconnect` Event

## Overview
This event signifies the client disconnecting from the game. The event does not return anything.

## Using
This event's only use is to let the client know that it disconnected.

## Example
```js
Game.on('disconnect', () => {
    console.log('You have disconnect from the game');
});
```