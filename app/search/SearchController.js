angular.module('tvGuide.search')
.controller('SearchController', ['req', '$location',
	function(req, $location){
		var searchCtrl = this;

		searchCtrl.title = "Search for a TV show";
		searchCtrl.searchString = "";
		
		searchCtrl.search = function search(searchStr) {
			searchCtrl.episodes = [];

			if(searchStr) {
				searchCtrl.shows = req.searchShow(searchStr)
        	}
        	else {
        		searchCtrl.shows = [];
        	}
		}

		searchCtrl.gotoEpisodeList = function episodeList(result) {
			$location.path('/episodeList/' + result.show.name + '/' + result.show.id);
		}
	}])