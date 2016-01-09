'use strict';

angular.module('tvGuide.guide', ['ngRoute', 'tvGuide.comm'])
.config(['$routeProvider', 
  function($routeProvider) {
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

.controller('GuideController',['$scope', 'schedule',
function($scope, schedule) {
    var guide = this;

    guide.schedule = schedule;
}]);
