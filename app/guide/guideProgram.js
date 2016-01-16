angular.module('tvGuide.guide')
.directive('guideProgram', function() {
  var directiveDefinition = {
    restrict : 'E',
    templateUrl : 'guide/program.html',
    scope : {
      program : '='
    },
    controller: ['$scope', '$location', function($scope, $location) {
      var guideProgram = this;
      guideProgram.selected = false;
      guideProgram.program = $scope.program;

      guideProgram.showEpisodes = function show() {
        guideProgram.selected = !guideProgram.selected;
      }
      
      guideProgram.gotoEpisodeList = function episodeList(guideShow) {
        $location.path('/episodeList/' + guideShow.name + '/' + guideShow.id);
      }
    }],
    controllerAs : 'guideProgram'
  }
  return directiveDefinition;
})