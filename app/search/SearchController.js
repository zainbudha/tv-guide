angular.module('tvGuide.search')
.controller('SearchController', ['req', '$location',
	function(req, $location){
		var searchCtrl = this;

		searchCtrl.title = "Search for a TV show";
		searchCtrl.searchString = "";
		
		searchCtrl.search = function search() {
			searchCtrl.episodes = [];

			if(searchCtrl.searchString) {
				searchCtrl.shows = req.searchShow(searchCtrl.searchString);
        	}
        	else {
        		searchCtrl.shows = [];
        	}
		}

		searchCtrl.gotoEpisodeList = function episodeList(result) {
			$location.path('/episodeList/' + result.show.name + '/' + result.show.id);
		}
	}])