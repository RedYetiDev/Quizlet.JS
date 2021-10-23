# Quizlet.JS
> **Better** documentation coming to [**quizlet.js.org**](//quizlet.js.org) soon.
##### Version 0.0.1 Alpha


## Installing from [NPM](https://www.npmjs.com/package/quizlet.js)
[![Quizlet.JS](https://nodei.co/npm/quizlet.js.png?mini=true)](https://www.npmjs.com/package/quizlet.js)

---

## Setup

To setup Quizlet.JS, first require `quizlet.js` in your script
```js
var Quizlet = require("quizlet.js");
```
Next, you want to create a new instance of `Quizlet` for the [Quizlet Live](https://quizlet.live) game.
```js
var Game = new Quizlet(Pin, Name, *Optional* Profile Picture)
```

Once your game instance has been created, you actually need to join the game
```js
Game.joinGame();
```

## Using

Because `Quizlet.JS` is based on `EventEmitter`, any changes in the game will be emitted as events. Below, there is a list of the events and how to use them.

## Events

- ### `connect`
    The `connect` event returns no arguments, and signifies when the client has connected to the game.

- ### `disconnect`
    The `disconnect` event returns no arguments, and signifies when the client has either left, or been kicked from the game

- ### `teamAssignments`
    The `teamAssignments` event returns 2 arguments: The team name and the players in said team. The event signifies when the host has assigned teams.

- ### Maybe coming soon: `gameStart`
    The `gameStart` event returns no arguments, and signifies the start of the game<sup><a>1</a></sup>

- ### `gameOver`
    The `gameOver` event returns 1 argument: A boolean value whether the client's team won the game. This event signifies the game ending

- ### `answer`
    The `answer` event returns 2 arguments: A boolean value whether the answer was correct, and the team member that answered the question. This event signifies a team member answering a question

- ### `question`
    The `question` event returns 3 arguments: The question, The possible answers, and the correct answer. This event signifies a question being asked and the client having the answer.

## Functions

- ### `contructor`
    The `contructor` function (the root function) creates a new instance of a `Quizlet.JS` client. This function requires 2 parameters: The game pin (`Int` or `String`), and the client name (`String`). An optional parameter is a image to use (`String`, `URL`)<sup><a>2</a></sup>. This must be called with `new` and returns a instance of `Quizlet`

- ### `joinGame`
    The `joinGame` function joins the game, the function accepts no arguments and returns nothing.

- ### `answer`
    The `answer` function answers a question and should be called in the `question` event. This function accepts 1 argument, the answer (`String`). This function returns nothing.

- ### `leave`
    The `leave` functions leaves the game, and has no arguments, the function also returns nothing.

- ### `rejoin`
    The `rejoin` functions rejoins the game after an exit, no arguments or returns.

## Bugs
- The Bot must rejoin the game in when the host hits `replay` at the end of the game. (By ending and restarting the script)

If you find any new bugs, please report an issue or a pull request. If you have any questions or comments, you can either create an issue, or email me at [redyetidev@gmail.com](mailto:redyetidev@gmail.com?subject=Quizlet.JS)

## Features Needing Testing
- Need to test how the client reacts to duplicate terms (If multiple terms have the same answer or same name).
- Game replay testing.


---
## Footnotes
<a>1</a>: The `gameStart` event has no real purpose, becuase it would be called when the first question is sent, meaning that `gameStart`, and `question` would be called at the same time.

<a>2</a>: The `userImage` param needs a little bit more testing and may not work.