'use strict';

describe('tvGuide.guide module', function() {

  beforeEach(module('tvGuide.guide'));

  describe('guide controller', function(){

  	var $scope, schedule, guideCtrl;

    beforeEach(inject(function($controller) {
      $scope = {};
      schedule = {};
      guideCtrl = $controller('GuideController', {$scope : $scope, schedule:schedule});
    }));
  	
    it('should be defined', function() {
      expect(guideCtrl).toBeDefined();
    });

	it('schedue should be defined', function() {
      expect(schedule).toBeDefined();
    });
  });
});