angular.module("tvGuide.comm", [])
  .factory("req",['$http',
    function($http) {

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
            return response.data;
          });
      }
      
      var publicAPI = {
        getDaySchedule: getDaySchedule,
      }
      
      return publicAPI;
    }]
  );