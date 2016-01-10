'use strict';

angular.module('tvGuide.guide', ['ngRoute', 'tvGuide.comm'])
.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider
    .when('/guide', {
      templateUrl: 'guide/guide.html',
      controller: 'GuideController',
      controllerAs: 'guideCtrl'
    })
}])

.controller('GuideController',['$scope', 'req', 'dateFilter',
function($scope, req, dateFilter) {
    var guide = this;

    var getChannels = function getChannels(date) {
      req.getDaySchedule(dateFilter(date, 'yyyy-MM-dd'))
        .then(function setChannels(schedule) {
          guide.scheduleDate = date;
          guide.channels = schedule;
          
          if(Object.keys(schedule).length === 0) {
            guide.noData = true;
          }
          else {
            guide.noData = false;
          }
        });
    }

    guide.getChannels = getChannels;
    guide.date = new Date();
    guide.noData = false;
    getChannels(guide.date);

}]);
