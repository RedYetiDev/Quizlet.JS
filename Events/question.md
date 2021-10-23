---
layout: default
title: Question
nav_order: 6
description: "Quizlet.JS Question Event"
permalink: /Question
parent: Events
---

# Quizlet.JS `question` Event

## Overview
This event is emitted when a question is sent to the client

## Using
This event is used to answer questions, and **__MUST__** be handled with the [**`answer`**](AnswerFunction) function (Not to be confused with the [**`answer`**](AnswerEvent) event). This event returns 3 items: The question (EX: `"What is 3 * 2"`), the possible answers (EX: `["6", "12", "5", "10"]`), and the correct answer (EX: `"6"`).

## Example
```js
Game.on('question', (Question, possibleAnswers, correctAnswer) => {
    Game.answer(correctAnswer)
});
```