colorBlocks.controller('SettingsController', ['$scope', "DataFactory", function($scope, DataFactory) {
  console.log("settings controller running");

  var self = this;
  self.colors = DataFactory.colors;
  self.newColor = '';
  self.colorObjects = [];

  // making array of objects from colors array
  makeColorObjects(self.colors);
  console.log(self.colorObjects);

  // adding a color to the colors array, pushing it to the array in the DataFactory,
  // clearing out newColor and colorObjects array, then remaking colorObjects array
  self.addColor = function() {
    console.log(self.newColor);
    self.colors.push(self.newColor);
    DataFactory.colors = self.colors;
    self.newColor = '';
    self.colorObjects = [];
    makeColorObjects(self.colors);
  }

  // function to make objects out of colors array with the parameters of color name and index
  function makeColorObjects(colors) {
    for (var i = 0; i < colors.length; i++) {
      var color = {};
      color.name = colors[i];
      color.index = i;
      self.colorObjects.push(color);
    }
  }

  // change color of specific index within colors array
  self.editColor = function(color) {
    self.colors.splice(color.index, 1, color.name);
  }

  // delete color from colors array
  self.deleteColor = function(color) {
    self.colors.splice(color.index, 1);
    self.colorObjects.splice(color.index, 1);
  }


}]);
