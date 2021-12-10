# Quizlet.JS
> **Better** documentation is at [**quizlet.js.org**](//quizlet.js.org).
##### Version 1


## Installing from [NPM](https://www.npmjs.com/package/quizlet.js)
[![Quizlet.JS](https://nodei.co/npm/quizlet.js.png?mini=true)](https://www.npmjs.com/package/quizlet.js)

---

## Setup

To setup Quizlet.JS, first require `quizlet.js` in your script
```js
var Quizlet = require("quizlet.js");
```

Create a new instance of `Quizlet` for the [Quizlet Live](https://quizlet.live) game.
```js
var Game = new Quizlet(Pin, "Name", *Optional: {Advanced}*)
```

### Here are the options for the JSON `Advanced` Parameter:
- `userImage`:
    The `userImage` parameter is the client's user image. **The image *must* be a valid URL from the `quizlet.com` hostname**
- `accountName`:
    The `accountName` parameter is the account username if you want to login. If this parameter is set, the user image, and user name are overrided by the account name.


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

- ### `gameOver`
    The `gameOver` event returns 1 argument: A boolean value whether the client's team won the game. This event signifies the game ending

- ### `answer`
    The `answer` event returns 2 arguments: A boolean value whether the answer was correct, and the team member that answered the question. This event signifies a team member answering a question

- ### `question`
    The `question` event returns 3 arguments: The question, The possible answers, and the correct answer. This event signifies a question being asked and the client having the answer.

- ### `teamQuestion`
    The `teamQuestion` event returns 3 arguments: The question, The possible answers, and the correct answer. This event signifies another team member receiving a question

- ### `error`
    The `error` event returns 1 argument, the error thrown. This event only emits when there is an error.

## Functions

- ### `contructor`
    The `contructor` function (the root function) creates a new instance of a `Quizlet.JS` client. This function requires 2 parameters: The game pin (`Int` or `String`), and the client name (`String`). An optional parameter is a image to use (`String`, `URL`)<sup><a>2</a></sup>. This must be called with `new` and returns a instance of `Quizlet`

- ### `joinGame`
    The `joinGame` function joins the game, the function accepts no arguments and returns nothing.

- ### `answer`
    The `answer` function answers a question and should be called in the `question` event. This function accepts 1 argument, the answer (`String`). This function returns nothing.

- ### `leave`
    The `leave` functions leaves the game, and has no arguments, the function also returns nothing.

## Bugs

If you find any new bugs, please report an issue or a pull request. If you have any questions or comments, you can either create an issue, or email me at [redyetidev@gmail.com](mailto:redyetidev@gmail.com?subject=Quizlet.JS)
