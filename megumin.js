"use strict";

var _myAnimeList = _interopRequireDefault(require("./myAnimeList.js"));

var _getListLinks = _interopRequireDefault(require("./getListLinks"));

var _moment = _interopRequireDefault(require("moment"));

var _axios = require("axios");

var _cheerio = require("cheerio");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var today = (0, _moment["default"])().format('dddd').toLowerCase();
(0, _getListLinks["default"])(today, _myAnimeList["default"], _axios.get, _cheerio.load);
