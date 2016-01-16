angular.module('tvGuide.search', ['ngRoute', 'tvGuide.model','tvGuide.episodes'])
.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/search', {
	      templateUrl: 'search/search.html',
	      controller: 'SearchController',
	      controllerAs: 'searchCtrl'
	    })
	}])