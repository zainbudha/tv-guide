angular.module('tvGuide')
.controller('MainController',['$location',
	function($location) {
		var main = this;

		main.loadGuide = function gotoGuide() {
			$location.path('/guide');
		}

		main.loadSearch = function gotoSearch() {
			$location.path('/search');
		}
	}])