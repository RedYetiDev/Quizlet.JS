---
layout: default
title: Answer
nav_order: 5
description: "Quizlet.JS Answer Event"
permalink: /AnswerEvent
parent: Events
---

# Quizlet.JS `answer` Event

## Overview
This event is emitted when a team member answers a question.

## Using
This event is only used to let the client now that a team member answered a question. This event returns 2 items: a boolean whether the question was answered correctly, and the team member that answered (EX: `"BobertThePlayer"`)

## Example
```js
Game.on('answer', (isCorrect, playerThatAnswered) => {
    console.log(`${playerThatAnswered} answered a question ${isCorrect ? 'correctly :)' : 'incorrectly :('}`);
});
```