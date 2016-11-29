colorBlocks.controller('SettingsController', ['$scope', "DataFactory", function($scope, DataFactory) {
  console.log("settings controller running");

  var self = this;
  self.colors = DataFactory.colors;
  self.newColor = '';

console.log(self.colors);

  self.addColor = function() {
    console.log(self.newColor);
    self.colors.push(self.newColor);
    DataFactory.colors = self.colors;
    self.newColor = '';
  }


}]);
