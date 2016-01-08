/**
 * Created by ankitj on 1/8/2016.
 */
angular.module('tvGuide')
.controller('GuideController',['$scope', 'schedule',
function($scope, schedule) {
    var guide = this;

    guide.schedule = schedule;
    console.log("Schedule : " + guide.schedule)

    console.log("Name : " + guide.schedule[0].name)
}]);