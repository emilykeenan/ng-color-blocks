colorBlocks.controller('HighScoreController', ['$scope', "DataFactory", function($scope, DataFactory) {

console.log('scores controller running');

var self = this;
// bringing in array of high scores to use in table
self.highScores = DataFactory.highScores;

}]);
