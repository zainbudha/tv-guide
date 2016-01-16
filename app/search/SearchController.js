angular.module('tvGuide.search')
.controller('SearchController', ['req', '$location',
	function(req, $location){
		var searchCtrl = this;

		searchCtrl.title = "Search for a TV show";
		searchCtrl.searchString = "";
		
		searchCtrl.search = function search(searchStr) {
			searchCtrl.episodes = [];
			if(searchStr) {
				req.searchShow(searchStr)
	        		.then(function displayShowDetails(data) {
	        			searchCtrl.shows = data;
	        		})
        	}
        	else {
        		searchCtrl.shows = [];
        	}
		}

		searchCtrl.gotoEpisodeList = function episodeList(result) {
			$location.path('/episodeList/' + result.show.name + '/' + result.show.id);
		}
	}])