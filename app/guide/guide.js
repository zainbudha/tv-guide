'use strict';

angular.module('tvGuide.guide', ['ngRoute', 'tvGuide.comm'])
.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.when('/guide', {
      templateUrl: 'guide/guide.html',
      controller: 'GuideController',
      controllerAs: 'guideCtrl',
      resolve: {
            todaySchedule: function(req) {
              return req.getDaySchedule();
            }
          }
    });
}])

.controller('GuideController',['$scope', 'todaySchedule',
function($scope, todaySchedule) {
    var guide = this;

    guide.schedule = todaySchedule;
}]);
