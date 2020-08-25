"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultView = exports["default"] = void 0;

var _skillAddLine = _interopRequireDefault(require("./skillAddLine"));

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var methods = {
  onClick: (0, _addonActions.action)("onClick")
};
var _default = {
  title: "skillAddLine",
  components: {
    skillAddLine: _skillAddLine["default"]
  }
};
exports["default"] = _default;

var defaultView = function defaultView() {
  return {
    components: {
      skillAddLine: _skillAddLine["default"]
    },
    template: "\n   <skill-add-line @click=\"onClick\" />\n  ",
    methods: methods
  };
};

exports.defaultView = defaultView;