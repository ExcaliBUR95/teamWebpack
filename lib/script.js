"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// создание свойства класса без конструктора
var Game = /*#__PURE__*/_createClass(function Game() {
  _classCallCheck(this, Game);

  _defineProperty(this, "name", 'Violin Charades');
});

var myGame = new Game(); // создаем параграф

var p = document.createElement('p');
p.textContent = "I like ".concat(myGame.game, "."); // создаем элемент заголовка

var heading = document.createElement('h1');
heading.textContent = 'Как интересно!'; // добавляем параграф и заголовок в DOM

var root = document.querySelector('#root');
root.append(heading, p);