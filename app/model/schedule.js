'use strict';

angular.module('tvGuide.model', ['ngResource'])

.factory("schedule",
function() {

  function buildChannels(data) {
      
      var channels = {};

      if(data) {
        var length = data.length;
        var j = 0;
        var channelName;
        for (var i = 0; i < length; i++) {
          channelName = data[i].show.network.name;

          if(!(channelName in channels))
            channels[channelName] = {channelName: channelName, programs: []};
          channels[channelName].programs.push(data[i])
        }
      }

      return channels;
  }

  var publicAPI = {
      process: buildChannels
    }
  
  return publicAPI;
});