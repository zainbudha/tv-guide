'use strict';

// Declare app level module which depends on views, and components
angular.module('tvGuide', [
  'ngRoute',
  'tvGuide.guide',
  'tvGuide.search'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/',{
  	redirectTo: '/guide'
  });
}])