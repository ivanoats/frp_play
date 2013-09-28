/*global define */
define([], function () {
    'use strict';

    return '\'Allo \'Allo!';
});

function setup() {
    'use strict';
    var buttonStream = $("#searchButton").asEventStream("click");
    buttonStream.onValue(function (e) {
        console.log("Hello from Bacon.js");
    });
}
$(setup);