"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;

var _state = require("./state");

var render = function render() {
  var root = document.getElementById("root");
  var ulList = document.createElement("ul");

  _state.initialState.news.forEach(function (news) {
    var list = document.createElement("li");
    list.textContent = news.title;
    ulList.append(list);
    root.append(ulList);
  });

  _state.initialState.categories.forEach(function (cats) {
    var list_1 = document.createElement("li");
    list_1.textContent = cats.category;
    ulList.append(list_1);
    root.append(ulList);
  });
};

exports.render = render;