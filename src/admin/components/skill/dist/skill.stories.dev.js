"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultView = exports["default"] = void 0;

var _skill = _interopRequireDefault(require("./skill"));

var _addonActions = require("@storybook/addon-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var methods = {
  onApprove: (0, _addonActions.action)("onApprove"),
  onRemove: (0, _addonActions.action)("onRemove")
};
var _default = {
  title: "skill",
  components: {
    skill: _skill["default"]
  }
};
exports["default"] = _default;

var defaultView = function defaultView() {
  return {
    components: {
      skill: _skill["default"]
    },
    data: function data() {
      return {
        skill: {
          id: 0,
          title: "Test",
          percent: 50
        }
      };
    },
    template: "\n   <skill \n      @approve=\"onApprove\" \n      @remove=\"onRemove\" \n      :skill=\"skill\" \n    />\n  ",
    methods: methods
  };
};

exports.defaultView = defaultView;