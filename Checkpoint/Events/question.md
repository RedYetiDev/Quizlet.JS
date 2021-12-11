---
layout: default
title: Question
nav_order: 6
description: "Quizlet.JS Checkpoint Question Event"
permalink: /Checkpoint/Events/Question
parent: Checkpoint Events
grand_parent: Checkpoint
---

# Quizlet.JS `question` Event

## Overview
This event is emitted when a question is sent to the client

## Using
This event is used to answer questions, and **__MUST__** be handled with the [**`answer`**](/Checkpoint/Functions/Answer) function. This event returns 3 items: The question (EX: `"What is 3 * 2"`), the possible answers (EX: `["6", "12", "5", "10"]`), and the correct answer (EX: `"6"`).

## Example
```js
Game.on('question', (Question, possibleAnswers, correctAnswer) => {
    Game.answer(correctAnswer)
});
```