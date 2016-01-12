angular.module('tvGuide.guide')
.controller('GuideController',['req', 'dateFilter',
function(req, dateFilter) {
    var guide = this;

    guide.getChannels = function getChannels(date) {
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

    guide.date = new Date();
    guide.noData = false;
    guide.getChannels(guide.date);

}]);