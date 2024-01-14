/*
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
*/

const highScores = document.getElementById('#highscores');
const clearScores = document.getElementById('#clear');
const timerCountdown = document.getElementById('#time');
const startScreen = document.getElementById('#start-screen');
const startButton = document.getElementById('#start');
const questionContainer = document.getElementById('#questions');
const questionTitle = document.getElementById('#question-title');
const choicesArray = document.getElementById('#choices');