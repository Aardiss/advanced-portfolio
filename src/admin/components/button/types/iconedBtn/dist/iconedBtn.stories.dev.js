"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultView = exports["default"] = void 0;

var _button = _interopRequireDefault(require("../../button.vue"));

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var methods = {
  onClick: (0, _addonActions.action)("onClick")
};
var _default = {
  title: "button/iconed",
  component: _button["default"]
};
exports["default"] = _default;

var defaultView = function defaultView() {
  return {
    components: {
      iconedBtn: _button["default"]
    },
    template: "\n    <iconed-btn type=\"iconed\" @click=\"onClick\" title=\"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A\" />\n  ",
    methods: methods
  };
};

exports.defaultView = defaultView;
defaultView.story = {
  name: "Стандартный вид"
};