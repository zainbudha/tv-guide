'use strict';

describe('tvGuide.guide module', function() {

  beforeEach(module('tvGuide.guide'));

  describe('guide controller', function(){

  	var $scope, todaySchedule, guideCtrl;

    beforeEach(inject(function($controller) {
      $scope = {};
      todaySchedule = {};
      guideCtrl = $controller('GuideController', {$scope : $scope, todaySchedule:todaySchedule});
    }));
  	
    it('should be defined', function() {
      expect(guideCtrl).toBeDefined();
    });

	it('schedue should be defined', function() {
      expect(todaySchedule).toBeDefined();
    });
  });
});