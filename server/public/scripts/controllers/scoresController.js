colorBlocks.controller('HighScoreController', ['$scope', "DataFactory", function($scope, DataFactory) {

console.log('scores controller running');

var self = this;
self.highScores = DataFactory.highScores;

console.log(self.highScores);

}]);
