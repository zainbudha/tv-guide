'use strict';

describe('tvGuide.episodes module', function() {

  beforeEach(angular.mock.module('tvGuide.episodes'));

  describe('episodes controller', function(){

  	var $controller = {};
  	var $scope = {};
  	var $routeParams = {};
  	var req;
  	beforeEach(angular.mock.inject(function(_$controller_, _req_) {
  		$controller = _$controller_;
  		req = _req_;
  		$controller('EpisodeController',{$scope : $scope, $routeParams : $routeParams, req : req})
  	}))

  	it('', function() {
  		expect($scope).toBeDefined();
  	})

  });
});