'use strict';

angular.module('tvGuide.guide', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/guide', {
    templateUrl: 'guide/guide.html',
    controller: 'GuideController',
    controllerAs: 'guideCtrl',
    resolve: {
          schedule: function(req) {
            return req.getDaySchedule();
          }
        }
  });
}])
