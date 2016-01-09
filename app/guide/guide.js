'use strict';

angular.module('tvGuide.guide', ['ngRoute', 'tvGuide.comm'])
.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider
    .when('/today', {
      templateUrl: 'guide/guide.html',
      controller: 'GuideController',
      controllerAs: 'guideCtrl',
      resolve: {
            channels: function getToday(req) {
              return req.getDaySchedule();
            }
          }
    })
    .when('/tomorrow', {
      templateUrl: 'guide/guide.html',
      controller: 'GuideController',
      controllerAs: 'guideCtrl',
      resolve: {
            channels: function getTomorrow(req) {
              return req.getDaySchedule("2015-01-10");
            }
          }
    })
}])

.controller('GuideController',['$scope', 'channels',
function($scope, channels) {
    var guide = this;

    guide.channels = channels;

}]);
