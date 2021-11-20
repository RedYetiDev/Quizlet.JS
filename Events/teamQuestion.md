---
layout: default
title: teamQuestion
nav_order: 1
description: "Quizlet.JS teamQuestion Event"
permalink: /teamQuestion
parent: Events
---

# Quizlet.JS `teamQuestion` Event

## Overview
This event is emitted when there is a question, but it is not for the client, but is for the client's team.

## Using
Use this event to log team questions. This event returns the same parameters as [Question](/Question).

## Example
```js
Game.on('teamQueston', (q, pa, a) => {
    console.log(`A member of your team was asked ${q}. It order to correctly answer this question, they must answer ${a}s`);
});
```