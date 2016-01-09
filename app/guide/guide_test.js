'use strict';

describe('tvGuide.guide module', function() {

  beforeEach(module('tvGuide.guide'));

  describe('guide controller', function(){

  	var $scope, channels, guideCtrl;

    beforeEach(inject(function($controller) {
      $scope = {};
      channels = {};
      guideCtrl = $controller('GuideController', {$scope : $scope, channels:channels});
    }));
  	
    it('should be defined', function() {
      expect(guideCtrl).toBeDefined();
    });

	it('schedue should be defined', function() {
      expect(channels).toBeDefined();
    });
  });
});