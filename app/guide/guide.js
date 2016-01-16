'use strict';

angular.module('tvGuide.guide', ['ngRoute', 'tvGuide.model', 'tvGuide.episodes'])
.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider
    .when('/guide', {
      templateUrl: 'guide/guide.html',
      controller: 'GuideController',
      controllerAs: 'guideCtrl'
    })
}])
