const Quizlet = require(".").checkpoint;

var Game = new Quizlet(process.argv[2], "TheBotIsNotOnTop");
Game.joinGame();

Game.on("connect", () => {
    console.log("Connected to Game")
})

Game.on('replay', () => {
    console.log('Game Replay')
})

Game.on("question", (q, ao, a) => {
    Game.answer(a)
})

Game.on("gameOver", (didWin) => {
    console.log("The Game Ended: Did Win: " + didWin)
});

Game.on('disconnect', () => {
    console.log('Your were disconnected')
});

Game.on("error", console.log)