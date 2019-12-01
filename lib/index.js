"use strict";

var _myAnimeList = _interopRequireDefault(require("../myAnimeList.js"));

var _axios = require("axios");

var _cheerio = require("cheerio");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var today = (0, _moment["default"])().format('dddd').toLowerCase();
(0, _axios.get)('https://horriblesubs.info/').then(function (response) {
  var $ = (0, _cheerio.load)(response.data);
  var urlElements = $('td.schedule-widget-show');

  for (var i = 0; i < urlElements.length; i++) {
    var urlAnchor = $(urlElements[i]).find('a')[0];

    if (urlAnchor) {
      var urlText = $(urlAnchor).text();

      if (_myAnimeList["default"][today].includes(urlText)) {
        console.log(urlText);
      }
    }
  }
})["catch"](function (err) {
  console.log('Err: ' + err);
});