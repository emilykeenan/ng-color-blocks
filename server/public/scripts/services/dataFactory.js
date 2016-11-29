colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];

  var publicApi = {
  colors: colors
};

return publicApi;

}]);
