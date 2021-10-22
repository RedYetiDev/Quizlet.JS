---
layout: default
title: Events
nav_order: 4
description: "Quizlet.JS Events"
permalink: /Events
has_children: true
---
# Events
Any event emitted in Quizlet.JS can be handled using the `Game.on` function.

## Example
```js
Game.on('Event Name', (Event, Return, Items) => {
    // Event Handler
})
```