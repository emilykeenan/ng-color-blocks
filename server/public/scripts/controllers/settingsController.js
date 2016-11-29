colorBlocks.controller('SettingsController', ['$scope', "DataFactory", function($scope, DataFactory) {
  console.log("settings controller running");

  var self = this;
  self.colors = DataFactory.colors;
  self.newColor = '';
  self.colorObjects = [];

  makeColorObjects(self.colors);
  console.log(self.colorObjects);

  self.addColor = function() {
    console.log(self.newColor);
    self.colors.push(self.newColor);
    DataFactory.colors = self.colors;
    self.newColor = '';
    self.colorObjects = [];
    makeColorObjects(self.colors);
  }

  function makeColorObjects(colors) {
    for (var i = 0; i < colors.length; i++) {
      var color = {};
      color.name = colors[i];
      color.index = i;
      self.colorObjects.push(color);
    }
  }

  self.editColor = function(color) {
    self.colors.splice(color.index, 1, color.name);
  }

  self.deleteColor = function(color) {
    self.colors.splice(color.index, 1);
    self.colorObjects.splice(color.index, 1);
  }


}]);
