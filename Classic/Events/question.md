---
layout: default
title: Question
nav_order: 6
description: "Quizlet.JS Classic Question Event"
permalink: /Classic/Events/Question
parent: Classic Events
grand_parent: Classic
---

# Quizlet.JS `question` Event

## Overview
This event is emitted when a question is sent to the client

## Using
This event is used to answer questions, and **__MUST__** be handled with the [**`answer`**](/Classic/Functions/Answer) function (Not to be confused with the [**`answer`**](/Classic/Events/Answer) event). This event returns 3 items: The question (EX: `"What is 3 * 2"`), the possible answers (EX: `["6", "12", "5", "10"]`), and the correct answer (EX: `"6"`).

## Example
```js
Game.on('question', (Question, possibleAnswers, correctAnswer) => {
    Game.answer(correctAnswer)
});
```