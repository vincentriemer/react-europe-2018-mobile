Object.defineProperty(exports,"__esModule",{value:true});var _regenerator=require("babel-runtime/regenerator");var _regenerator2=_interopRequireDefault(_regenerator);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _get2=require("babel-runtime/helpers/get");var _get3=_interopRequireDefault(_get2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _this2=this;var _yogaDom=require("yoga-dom");var YG=_interopRequireWildcard(_yogaDom);var _RCTShadowView3=require("./../RCTShadowView");var _RCTShadowView4=_interopRequireDefault(_RCTShadowView3);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function _callee(){var RCTShadowView,RCTShadowRawText;return _regenerator2.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator2.default.awrap(_RCTShadowView4.default);case 2:RCTShadowView=_context.sent;RCTShadowRawText=function(_RCTShadowView2){(0,_inherits3.default)(RCTShadowRawText,_RCTShadowView2);function RCTShadowRawText(){(0,_classCallCheck3.default)(this,RCTShadowRawText);var _this=(0,_possibleConstructorReturn3.default)(this,(RCTShadowRawText.__proto__||Object.getPrototypeOf(RCTShadowRawText)).call(this));_this.textDirty=true;_this._text="";return _this;}(0,_createClass3.default)(RCTShadowRawText,[{key:"markTextDirty",value:function markTextDirty(){var cur=this.reactSuperview;while(cur){cur.isDirty=true;typeof cur.markTextDirty==="function"&&cur.markTextDirty();cur=cur.reactSuperview;}}},{key:"purge",value:function purge(){(0,_get3.default)(RCTShadowRawText.prototype.__proto__||Object.getPrototypeOf(RCTShadowRawText.prototype),"purge",this).call(this);this.markTextDirty();}},{key:"text",get:function get(){return this._text;},set:function set(value){this._text=value||"";this.textDirty=true;this.markTextDirty();}}]);return RCTShadowRawText;}(RCTShadowView);return _context.abrupt("return",RCTShadowRawText);case 5:case"end":return _context.stop();}}},null,_this2);}();
//# sourceMappingURL=RCTShadowRawText.js.map