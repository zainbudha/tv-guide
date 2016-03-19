'use strict';

angular.module("tvGuide.model")
.factory("req", ['$http', '$q', '$resource', 'schedule', 'dateFilter',
  function($http, $q, $resource, schedule, dateFilter) {

    var publicAPI = {
      getDaySchedule: getDaySchedule,
      searchShow : searchShow,
      getEpisodes : getEpisodes
    }

    function httpPromise(url, processData) {
      var deferred = $q.defer();
      $http.get(url)
        .success(function(data) {
          if(processData) {
            data = schedule.process(data)
          }
          deferred.resolve(data);
        })
        .error(function() {
          deferred.reject();
        })
      return deferred.promise;
    }

    function getDaySchedule(date) {
      var url = "http://api.tvmaze.com/schedule";
      if(date) {
          url = url + "?date=" + dateFilter(date, 'yyyy-MM-dd');
      }

      return httpPromise(url, true);
    }

    var Search = $resource('http://api.tvmaze.com/search/shows?q=:search', null, {
      query : {method: 'get', isArray: true, cancellable: true}
    });

    function searchShow(searchString) {
      return Search.query({search:searchString});
    }

    function getEpisodes(id) {
      var url = "http://api.tvmaze.com/shows/" + id + "/episodes";
      
      return httpPromise(url);
    }
    
    return publicAPI;
  }]
);