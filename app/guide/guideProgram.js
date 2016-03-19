angular.module('tvGuide.guide')
.directive('guideProgram', function() {
  var directiveDefinition = {
    restrict : 'E',
    templateUrl : 'guide/program.html',
    scope : {
      program : '='
    },
    bindToController: true,
    controller: ['$location', function($location) {
      var guideProgram = this;
      
      guideProgram.gotoEpisodeList = function episodeList(guideShow) {
        $location.path('/episodeList/' + guideShow.name + '/' + guideShow.id);
      }
    }],
    controllerAs : 'guideProgram'
  }
  return directiveDefinition;
})