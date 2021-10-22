---
layout: default
title: Examples
nav_order: 5
description: "Quizlet.JS Examples"
permalink: /Examples
---

# Examples
## Setting Up
```js
const Quizlet = require('quizlet.js');
const Game = new Quizlet(123456, 'RedYetiDev', 'https://avatars.githubusercontent.com/u/38299977?u=ec372abc7c7ecc544c62afccfc2b1deebb8e3947');
```

## Full Game Example
```js
const Quizlet = require('quizlet.js');
const Game = new Quizlet(123456, 'RedYetiDev', 'https://avatars.githubusercontent.com/u/38299977?u=ec372abc7c7ecc544c62afccfc2b1deebb8e3947');
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