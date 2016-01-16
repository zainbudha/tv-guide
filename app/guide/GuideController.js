angular.module('tvGuide.guide')
.controller('GuideController',['req',
function(req) {
    var guide = this;

    guide.getChannels = function getChannels(date) {
      req.getDaySchedule(date)
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

    // var addHours = function(date, h) {    
    //   return new Date(date.getTime() + (h*60*60*1000)); 
    // }

    guide.date = new Date();
    guide.noData = false;
    guide.getChannels(guide.date);

    // guide.dates = [guide.date];

    // for (var i = 1; i < 7; i++) {
    //   guide.dates[i] = addHours(guide.date,i)
    // };
    // console.log(guide.dates);
}]);