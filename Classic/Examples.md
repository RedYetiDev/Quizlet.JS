---
layout: default
title: Classic Examples
nav_order: 3
description: "Quizlet.JS Classic Examples"
permalink: /Classic/Examples
parent: Classic
---

# Examples
## Setting Up
```js
const Quizlet = require('quizlet.js');
const Game = new Quizlet.classic(123456, 'RedYetiDev');
```

## Full Game Example
```js
const Quizlet = require('quizlet.js');
const Game = new Quizlet.classic(123456, 'RedYetiDev');
Game.joinGame();
Game.on('connect', () => {
     console.log('Connected to the game')
});
Game.on('teamAssignments', (teamName, playerNames) => {
     console.log(`You are on team ${teamName} with: ${playerNames.join(', ')}`);
});
Game.on('question', (questionName, possibleAnswers, correctAnswer) => {
     console.log(`Question: ${questionName}`);
     console.log(`Your choices are: ${possibleAnswers.join(', ')}`);
     Game.answer(correctAnswer);
});
Game.on('answer', (isCorrect, playerThatAnswered) => {
     console.log(`${playerThatAnswered} answered a question ${isCorrect ? "correctly" : "incorrectly"}`);
})
Game.on('gameOver', didWin => {
     console.log(`We ${didWin ? 'Won!' : 'Lost!'}`);
})
Game.on('disconnect', () => {
     console.log('You were disconnected from the game');
})

```