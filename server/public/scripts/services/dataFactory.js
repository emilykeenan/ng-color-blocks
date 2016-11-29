colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];
  var highScores = [];
  var scores = [1];

  var publicApi = {
  colors: colors,
  highScores: highScores,
  scores: scores
};

return publicApi;

}]);
