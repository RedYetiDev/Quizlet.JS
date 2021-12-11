---
layout: default
title: Error
nav_order: 1
description: "Quizlet.JS Checkpoint Error Event"
permalink: /Checkpoint/Events/Error
parent: Checkpoint Events
grand_parent: Checkpoint
---

# Quizlet.JS `error` Event

## Overview
This event is emitted when an `Error` is thrown (`throw new Error()`)

## Using
Use this event to catch or debug errors. It returns the argument about what the error was.

## Example
```js
Game.on('Error', (error) => {
    console.log(`Oops! An Error Occured: ${error}`);
});
```