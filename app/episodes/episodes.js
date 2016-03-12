angular.module('tvGuide.episodes', ['tvGuide.model', 'ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/episodeList/:showName/:showId', {
      templateUrl: 'episodes/episodeList.html',
      controller: 'EpisodeController',
      controllerAs: 'episodeCtrl'
    })
}])
.controller('EpisodeController', ['$routeParams', 'req', 
	function($routeParams, req) {
		var episodeCtrl = this;
		req.getEpisodes($routeParams.showId)
		.then(function setEpisodes(data) {
			episodeCtrl.episodes = data;
		})

		episodeCtrl.showName = $routeParams.showName;
}])