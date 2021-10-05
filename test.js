const Quizlet = require("./quizlet.js");

var Game = new Quizlet(158334, "Person");

Game.joinGame();

Game.on("connect", () => {
    console.log("Connected to Game")
})