angular.module('tvGuide.guide')
.filter('program', function() {
  return function(input) {
    var out = "";
    if(input) {
      out = input.show.name + "\n" + input.name;
    }
    return out;
  };
})