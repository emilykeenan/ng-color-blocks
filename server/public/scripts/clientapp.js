var colorBlocks = angular.module('colorBlocks', ['ngRoute']);

colorBlocks.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/play', {
            templateUrl: '/views/templates/gameview.html',
            controller: 'GameController',
            controllerAs: 'game'
        })
        .when('/config', {
            templateUrl: '/views/templates/configview.html',
            controller: 'SettingsController',
            controllerAs: 'settings'
        })
        .when('/scores', {
            templateUrl: '/views/templates/highscoresview.html',
            controller: 'HighScoreController',
            controllerAs: 'scores'
        })
        .otherwise({
            redirectTo: '/play'
        });
}]);
