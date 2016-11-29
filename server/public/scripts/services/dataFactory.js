colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];
  var highScores = [];

  var publicApi = {
  colors: colors,
  highScores: highScores
};

return publicApi;

}]);
