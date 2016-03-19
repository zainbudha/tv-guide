angular.module('tvGuide.episodes', ['tvGuide.model', 'ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/episodeList/:showName/:showId', {
      templateUrl: 'episodes/episodeList.html',
      controller: 'EpisodeController',
      controllerAs: 'episodeCtrl'
    })
}]);