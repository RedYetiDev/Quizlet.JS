---
layout: default
title: teamAssignments
nav_order: 3
description: "Quizlet.JS Classic teamAssignments Event"
permalink: /Classic/Events/teamAssignments
parent: Classic Events
grand_parent: Classic
---

# Quizlet.JS `teamAssignments` Event

## Overview
This event is emitted when the host assigns teams.

## Using
This event's only use is to let the client know that it disconnected. This event returns 2 items, the team of the team that the client has been assigned to (EX: `'Lions'`), and the other players on the team (EX: `['John', 'Jane', 'Jill', 'Jack']`)

## Example
```js
Game.on('teamAssignments', (teamName, playerNames) => {
    console.log(`You are on team "${teamName}" with ${playerNames.join(', ')}`);
});
```