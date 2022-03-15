"use strict";

require("./style.css");

var _getNews = _interopRequireDefault(require("./state/getNews"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _getNews.default)();
getCats();