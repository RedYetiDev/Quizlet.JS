---
layout: default
title: Answer
nav_order: 4
description: "Quizlet.JS Answer Function"
permalink: /Answer
parent: Functions
---

# Quizlet.JS Answer Function

## Overview
This function tells the client to answer a question.

## Using
This function accepts one argument: the answer to the current question. This function is used in conjuction with the [**`question`**](Question) event. Check out the [**`question`**](Question) to understand how to get the current question and current answer in game.

## Example
```js
Game.answer('Bananas');
```
### Example using the [**`question`**](Question) event
```js
Game.on("question", (Question, possibleAnswers, correctAnswer) => {
    Game.answer(correctAnswer);
});
```