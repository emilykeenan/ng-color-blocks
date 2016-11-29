colorBlocks.controller('GameController', ['$scope', "DataFactory", function($scope, DataFactory) {

  console.log('game controller running');

  var self = this;
  self.colors = DataFactory.colors;
  self.correctCount = 0;
  self.highScores = DataFactory.highScores;
  self.highScore = {};
  self.highestScore = DataFactory.scores[DataFactory.scores.length - 1];
  self.scores = DataFactory.scores;
  self.playing = true;

  // start game
  init();

  // resets game to the starting state
  function init() {
    console.log(self.correctCount);
    self.messageText = "";
    self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
    self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?'
  }

  // click handler for guessing colors
  self.handleInput = function(clickedColor) {
    if(clickedColor === self.currentColor) {
      self.correctCount++;
      alert('You got it!\n\nNow try another!');
      init();
    } else {
      // checks correctCount against high scores to see if player is eligible for leaderboard
      self.messageText = 'Oh no! You guessed wrong!';
      if(self.correctCount > self.highestScore) {
        self.playing = false;
        self.scores.push(self.correctCount);
        DataFactory.scores = self.scores;
        self.highestScore = self.correctCount;
      }
    }
  }

  // function to submit a high score if you have beaten the current high score
  self.submitScore = function() {
    self.highScore.highScore = self.correctCount;
    console.log(self.highScore);
    self.highScores.push(self.highScore);
    DataFactory.highScores = self.highScores;
    self.highScore = {};
    self.playing = true;
    alert('Score submitted! Play again!');
    self.correctCount = 0;
    init();
  }

  //UTILITY FUNCTIONS
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }
}]);
