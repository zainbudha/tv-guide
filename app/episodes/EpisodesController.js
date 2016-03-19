angular.module('tvGuide.episodes')
.controller('EpisodeController', ['$routeParams', 'req', 
	function($routeParams, req) {
		var episodeCtrl = this;
		req.getEpisodes($routeParams.showId)
		.then(function setEpisodes(data) {
			episodeCtrl.episodes = data;
		})

		episodeCtrl.showName = $routeParams.showName;
}]);