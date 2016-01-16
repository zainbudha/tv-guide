angular.module('tvGuide.episodes', ['tvGuide.model'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/episodeList/:showName/:showId', {
      templateUrl: 'episodes/episodeList.html',
      controller: 'EpisodeController',
      controllerAs: 'episodeCtrl'
    })
}])
.directive('guideEpisodes', ['req', function(req) {
	var directiveDefinition = {
		restrict : 'E',
		templateUrl : 'episodes/episodeList.html',
		scope : {
			guideShow : '=?'
		},
		link : function(scope, element, attr) {
			req.getEpisodes(scope.guideShow.id)
			.then(function setEpisodes(data) {
				scope.episodes = data;
			})

			scope.showName = scope.guideShow.name
		}
	};
	return directiveDefinition;
}])
.controller('EpisodeController', ['$scope', '$routeParams', 'req', 
	function($scope, $routeParams, req) {
		var episodeCtrl = this;

		req.getEpisodes($routeParams.showId)
		.then(function setEpisodes(data) {
			$scope.episodes = data;
		})

		$scope.showName = $routeParams.showName;
}])