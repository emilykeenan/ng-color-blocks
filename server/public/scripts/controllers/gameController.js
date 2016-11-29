colorBlocks.controller('GameController', ['$scope', "DataFactory", function($scope, DataFactory) {

console.log('game controller running');

var self = this;
self.colors = DataFactory.colors;
self.correctCount = 0;
self.highScores = DataFactory.highScores;
self.highScore = {};
self.playing = true;

// start game
init();

// resets game to the starting state
function init() {
  self.messageText = "";
  self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
  self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?'
}

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    alert('You got it!\n\nNow try another!');
    init();
    self.correctCount++;
  } else {
    self.playing = false;
  }
}

self.submitScore = function() {
  self.highScore.highScore = self.correctCount;
  console.log(self.highScore);
  self.highScores.push(self.highScore);
  DataFactory.highScores = self.highScores;
  self.correctCount = 0;
  self.highScore = {};
  self.playing = true;
  alert('Score submitted! Play again!');
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
