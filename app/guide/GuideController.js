/**
 * Created by ankitj on 1/8/2016.
 */
angular.module('tvGuide')
.controller('GuideController',['$scope', 'schedule',
function($scope, schedule) {
    var guide = this;

    guide.schedule = schedule;
}]);