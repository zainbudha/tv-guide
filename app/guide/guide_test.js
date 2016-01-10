'use strict';

describe('tvGuide.guide module', function() {

  beforeEach(module('tvGuide.guide'));

  describe('guide controller', function(){

  	var $scope, channels, guideCtrl;

    beforeEach(inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
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