'use strict';

// Declare app level module which depends on views, and components
angular.module('tvGuide', [
  'ngRoute',
  'tvGuide.comm',
  'tvGuide.guide'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/guide'});
}]);
