Object.defineProperty(exports,"__esModule",{value:true});exports.prefixInlineStyles=undefined;var _createPrefixer=require("inline-style-prefixer/static/createPrefixer");var _createPrefixer2=_interopRequireDefault(_createPrefixer);var _static=require("./static");var _static2=_interopRequireDefault(_static);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var prefixAll=(0,_createPrefixer2.default)(_static2.default);exports.default=prefixAll;var prefixInlineStyles=exports.prefixInlineStyles=function prefixInlineStyles(style){var prefixedStyles=prefixAll(style);Object.keys(prefixedStyles).forEach(function(prop){var value=prefixedStyles[prop];if(Array.isArray(value)){prefixedStyles[prop]=value[value.length-1];}});return prefixedStyles;};
//# sourceMappingURL=prefixInlineStyles.js.map