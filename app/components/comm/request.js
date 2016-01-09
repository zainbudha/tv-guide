angular.module("tvGuide.comm", ['tvGuide.schedule'])
  .factory("req",['$http','schedule',
    function($http, schedule) {

      var getDaySchedule = function getSchedule(date) {
          var url;
          if(date) {
              url = "http://api.tvmaze.com/schedule?date=" + date;
          }
          else {
              url = "http://api.tvmaze.com/schedule"
          }
        return $http.get(url)
          .then(function(response) {
            return schedule.process(response.data);
          });
      }
      
      var publicAPI = {
        getDaySchedule: getDaySchedule,
      }
      
      return publicAPI;
    }]
  );