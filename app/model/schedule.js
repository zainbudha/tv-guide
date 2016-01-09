'use strict';

angular.module('tvGuide.schedule', [])

.factory("schedule",
function() {
    var schedule = this;

    var process = function buildModel(data) {
        return data;
    }

    var publicAPI = {
      process: process
    }
    
    return publicAPI;
});