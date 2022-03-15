"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _render = require("./render");

var _state = require("./state");

var getNews = function getNews() {
  fetch("http://localhost:3000/news/").then(function (res) {
    return res.json();
  }).then(function (news) {
    _state.initialState.news = news;
    (0, _render.render)();
  });
};

var _default = getNews;
exports.default = _default;