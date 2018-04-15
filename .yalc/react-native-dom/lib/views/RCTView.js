Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _set2=require("babel-runtime/helpers/set");var _set3=_interopRequireDefault(_set2);var _get2=require("babel-runtime/helpers/get");var _get3=_interopRequireDefault(_get2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _dec,_class;var _UIView2=require("./../base/UIView");var _UIView3=_interopRequireDefault(_UIView2);var _RCTEventEmitter=require("./../modules/RCTEventEmitter");var _RCTEventEmitter2=_interopRequireDefault(_RCTEventEmitter);var _CustomElement=require("./../utils/CustomElement");var _CustomElement2=_interopRequireDefault(_CustomElement);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var RCTView=(_dec=(0,_CustomElement2.default)("rct-view"),_dec(_class=function(_UIView){(0,_inherits3.default)(RCTView,_UIView);function RCTView(bridge){(0,_classCallCheck3.default)(this,RCTView);var _this=(0,_possibleConstructorReturn3.default)(this,(RCTView.__proto__||Object.getPrototypeOf(RCTView)).call(this));_this.bridge=bridge;return _this;}(0,_createClass3.default)(RCTView,[{key:"frame",get:function get(){return(0,_get3.default)(RCTView.prototype.__proto__||Object.getPrototypeOf(RCTView.prototype),"frame",this);},set:function set(value){(0,_set3.default)(RCTView.prototype.__proto__||Object.getPrototypeOf(RCTView.prototype),"frame",value,this);if(this.onLayout){this.onLayout({layout:{x:value.left,y:value.top,width:value.width,height:value.height}});}}}]);return RCTView;}(_UIView3.default))||_class);exports.default=RCTView;
//# sourceMappingURL=RCTView.js.map