var _regenerator=require("babel-runtime/regenerator");var _regenerator2=_interopRequireDefault(_regenerator);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _this2=this;var _yogaDom=require("yoga-dom");var YG=_interopRequireWildcard(_yogaDom);var _RCTScrollViewLocalData=require("./RCTScrollViewLocalData");var _RCTScrollViewLocalData2=_interopRequireDefault(_RCTScrollViewLocalData);var _RCTShadowView3=require("./RCTShadowView");var _RCTShadowView4=_interopRequireDefault(_RCTShadowView3);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}module.exports=function _callee(){var RCTShadowView,RCTShadowScrollView;return _regenerator2.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator2.default.awrap(_RCTShadowView4.default);case 2:RCTShadowView=_context.sent;RCTShadowScrollView=function(_RCTShadowView2){(0,_inherits3.default)(RCTShadowScrollView,_RCTShadowView2);function RCTShadowScrollView(){(0,_classCallCheck3.default)(this,RCTShadowScrollView);var _this=(0,_possibleConstructorReturn3.default)(this,(RCTShadowScrollView.__proto__||Object.getPrototypeOf(RCTShadowScrollView)).call(this));_this.scrollOffset={top:0,left:0};return _this;}(0,_createClass3.default)(RCTShadowScrollView,[{key:"localData",set:function set(data){this.scrollOffset={top:data.scrollOffsetY,left:data.scrollOffsetX};}}]);return RCTShadowScrollView;}(RCTShadowView);return _context.abrupt("return",RCTShadowScrollView);case 5:case"end":return _context.stop();}}},null,_this2);}();
//# sourceMappingURL=RCTShadowScrollView.js.map