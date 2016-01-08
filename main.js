var Way = (function (global, document, exports, undefined) {
  'use strict';
  loadJson('./specifications/env.json', function (env) {
    console.log('environment loaded');
    var
      apikey = env.SKYWAY_API_KEY,
      peer = exports.peer = new Peer({key: apikey});
    document.getElementById('peer-connect').onclick = function peerConnect (event) {
    };
    document.getElementById('chat-send').onclick = function sendMessage (event) {
    };

  });
  return exports;
})(this, this.document, {})

console.log(Way);
