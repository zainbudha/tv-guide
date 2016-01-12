angular.module('tvGuide.search')
.controller('SearchController', ['req',
	function(req){
		var searchCtrl = this;

		searchCtrl.title = "Search for a TV show";
		searchCtrl.searchString = "";
		
		searchCtrl.search = function search(searchStr) {
			req.searchShow(searchStr)
        		.then(function displayShowDetails(data) {
        			searchCtrl.shows = data;
        		})
		}

		searchCtrl.getEpisodes = function getEpisodes(id) {
			req.getEpisodes(id)
				.then(function setEpisodes(data) {
					searchCtrl.episodes = data;
				})
		}
		
	}])