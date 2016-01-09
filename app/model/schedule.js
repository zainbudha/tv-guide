'use strict';

angular.module('tvGuide.schedule', [])

.factory("schedule",
function() {
    var schedule = this;

    var process = function buildChannels(data) {
        
        var channels = {};

        if(data) {
          var length = data.length;
          var j = 0;
          var channelName;
          for (var i = 0; i < length; i++) {
            channelName = data[i].show.network.name;

            if(!(channelName in channels))
              channels[channelName] = {channelName: channelName, events: []};
            channels[channelName].events.push(data[i])
          }
        }

        return channels;
    }

    var publicAPI = {
      process: process
    }
    
    return publicAPI;
});