# Quizlet.JS
> **Better and More organized** documentation is at [**quizlet.js.org**](//quizlet.js.org).
### Version 2.0.0
## Installing from [NPM](https://www.npmjs.com/package/quizlet.js)
[![Quizlet.JS](https://nodei.co/npm/quizlet.js.png?mini=true)](https://www.npmjs.com/package/quizlet.js)
<!-- #region Classic-->
<details>
    <summary><b>Quizlet Live Classic</b></summary>

---

## Setup

To setup Quizlet.JS, first require `quizlet.js` in your script
```js
var Quizlet = require("quizlet.js");
```

Create a new instance of `Quizlet` for the [Quizlet Live Classic](https://quizlet.live) game.
```js
var Game = new Quizlet.classic(Pin, "Name", *Optional: {Advanced}*)
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
    The `contructor` function (the root function) creates a new instance of a `Quizlet.JS` client. This function requires 2 parameters: The game pin (`Int` or `String`), and the client name (`String`). An optional parameter is a JSON of the follwing:
    ```js
    {
        userImage: "url",
        accountName: "String (Under development)"
    }
    ```
    This constructor must be called with `new` and returns a instance of `Quizlet`

- ### `joinGame`
    The `joinGame` function joins the game, the function accepts no arguments and returns nothing.

- ### `answer`
    The `answer` function answers a question and should be called in the `question` event. This function accepts 1 argument, the answer (`String`). This function returns nothing.

- ### `leave`
    The `leave` functions leaves the game, and has no arguments, the function also returns nothing.

</details>
<!-- #endregion -->
<hr />
<!-- #region Checkpoint -->
<details>
    <summary><b>Quizlet Live Checkpoint</b></summary>

## Setup

To setup Quizlet.JS, first require `quizlet.js` in your script
```js
var Quizlet = require("quizlet.js");
```

Create a new instance of `Quizlet` for the [Quizlet Live Checkpoint](https://quizlet.live) game.
```js
var Game = new Quizlet.checkpoint(Pin, "Name", *Optional: {Advanced}*)
```

### Here are the options for the JSON `Advanced` Parameter:
- `userImage`:
    The `userImage` parameter is the client's user image. 
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

- ### `gameOver`
    The `gameOver` event returns 1 argument: A boolean value whether the client's team won the game. This event signifies the game ending
    
- ### `question`
    The `question` event returns 3 arguments: The question, The possible answers, and the correct answer. This event signifies a question being asked and the client having the answer.

- ### `status`
    The `status` event returns 1 argument, the status of the game. Currently, the only status I know of is `playing`

- ### `gradeAnswers`
    The `gradeAnswers` event returns 1 argument, whether the client got the previus question correct or not. This can also be accessed used `Game.isCorrect`

- ### `error`
    The `error` event returns 1 argument, the error thrown. This event only emits when there is an error.


## Functions

- ### `contructor`
    The `contructor` function (the root function) creates a new instance of a `Quizlet.JS` client. This function requires 2 parameters: The game pin (`String`), and the client name (`String`). An optional parameter is a JSON of the follwing:
    ```js
    {
        userImage: "url",
        accountName: "String (Under development)"
    }
    ```
    This constructor must be called with `new` and returns a instance of `Quizlet`
- ### `joinGame`
    The `joinGame` function joins the game, the function accepts no arguments and returns nothing.

- ### `answer`
    The `answer` function answers a question and should be called in the `question` event. This function accepts 1 argument, the answer (`String`). This function returns nothing.

- ### `leave`
    The `leave` functions leaves the game, and has no arguments, the function also returns nothing.
</details>
<!-- #endregion -->

## Bugs

If you find any new bugs, please report an issue or a pull request. If you have any questions or comments, you can either create an issue, or email me at [redyetidev@gmail.com](mailto:redyetidev@gmail.com?subject=Quizlet.JS)
