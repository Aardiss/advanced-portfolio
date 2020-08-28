"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _simpleVueValidator = require("simple-vue-validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_simpleVueValidator.Validator);

new _vue["default"]({
  el: "#app-root",
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
});