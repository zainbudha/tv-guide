'use strict';

describe('tvGuide.guide module', function() {

  beforeEach(angular.mock.module('tvGuide.model'));
  beforeEach(angular.mock.module('tvGuide.guide'));

  describe('guide controller', function(){

  	var $controller;
  	var $q;
  	var $rootScope;
  	var req;
  	var channels;
  	var $this;

  	beforeEach(angular.mock.inject(function(_$controller_, _$q_, _$rootScope_, _req_) {
  		$controller = _$controller_;
  		$q = _$q_;
  		$rootScope = _$rootScope_;
  		req = _req_;
  	}))

  	it("should test the channels", function() {
  		spyOn(req, 'getDaySchedule').and.callFake(function() {
  			var deferred = $q.defer();
  			deferred.resolve("a");
  			return deferred.promise;
  		})

  		$this = $controller("GuideController", { req: req });
  		$rootScope.$apply();
  		expect($this.channels).toBe("a");
  	})

  });
});