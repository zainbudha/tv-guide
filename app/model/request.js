'use strict';

angular.module("tvGuide.model")
.factory("req",['$http', 'schedule', 'dateFilter',
  function($http, schedule, dateFilter) {

    var getDaySchedule = function getSchedule(date) {
      var url = "http://api.tvmaze.com/schedule";
      if(date) {
          url = url + "?date=" + dateFilter(date, 'yyyy-MM-dd');
      }
       
      return $http.get(url)
        .then(function(response) {
          return schedule.process(response.data);
        });
    }

    var searchShow = function searchShow(searchString) {
      var url = "http://api.tvmaze.com/search/shows?q=" + searchString;
             
      return $http.get(url)
        .then(function(response) {
          return response.data;
        });
    }

    var getEpisodes = function getEpisodes(id) {
      var url = "http://api.tvmaze.com/shows/" + id + "/episodes";
             
      return $http.get(url)
        .then(function(response) {
          return response.data;
        });
    }
    
    var publicAPI = {
      getDaySchedule: getDaySchedule,
      searchShow : searchShow,
      getEpisodes : getEpisodes
    }
    
    return publicAPI;
  }]
);