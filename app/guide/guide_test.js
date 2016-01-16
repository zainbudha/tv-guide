'use strict';

describe('tvGuide.guide module', function() {

  beforeEach(module('tvGuide.guide'));

  describe('guide controller', function(){

  	var guideCtrl;
  	var $scope;
  	var mock;

  	beforeEach(function(){
  		inject(function($controller, req, $q) {
	    	guideCtrl = $controller('GuideController');
	    	spyOn(req, "getDaySchedule").and.callFake(function mockGetSchedule(date) {
		        var deferred = $q.defer();
		        deferred.resolve('{
id: 562593,
name: "2016-01-12",
season: 2016,
number: 12,
airdate: "2016-01-12",
airtime: "07:00",
show: {
id: 8566,
url: "http://www.tvmaze.com/shows/8566/good-morning-america",
name: "Good Morning America",
network: {
id: 3,
name: "ABC",
}
}
},
{
id: 562635,
url: "http://www.tvmaze.com/episodes/562635/today-2016-01-12-2016-01-12",
name: "2016-01-12",
season: 2016,
number: 12,
airdate: "2016-01-12",
airtime: "07:00",
show: {
id: 9564,
url: "http://www.tvmaze.com/shows/9564/today",
name: "Today",
network: {
id: 1,
name: "NBC",
}
}
}');
		        return deferred.promise;
		    });
	    });
  	})
  	
  	
    it('guide controller should be defined', function() {
      expect(guideCtrl).toBeDefined();
    });

	it('Date should be defined', function() {
      expect(guideCtrl.date).toBeDefined();
    });

    it('noData should be false', function() {
      expect(guideCtrl.noData).toBe(false);
    });

    it('getChannels should be defined', function() {
      expect(guideCtrl.getChannels).toBeDefined();
    });

    it('test getChannels()', inject(function() {
    	guideCtrl.getChannels()
    	.then(function() {
    		console.log('success')
    	})
    }));
  });
});