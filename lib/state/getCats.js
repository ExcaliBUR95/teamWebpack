"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _render = require("./render");

var _state = require("./state");

var getCats = function getCats() {
  fetch("http://localhost:3000/cats/get").then(function (res) {
    return res.json();
  }).then(function (cats) {
    _state.initialState.categories = cats;
    (0, _render.render)();
  });
};

var _default = getCats;
exports.default = _default;