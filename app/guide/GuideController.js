angular.module('tvGuide.guide')
.controller('GuideController',['req',
function(req) {
    var guide = this;

    guide.getChannels = function getChannels() {
      req.getDaySchedule(guide.date)
        .then(function setChannels(schedule) {
          guide.scheduleDate = guide.date;
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