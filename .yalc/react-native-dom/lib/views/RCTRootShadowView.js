Object.defineProperty(exports,"__esModule",{value:true});var _regenerator=require("babel-runtime/regenerator");var _regenerator2=_interopRequireDefault(_regenerator);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _this2=this;var _RCTShadowView3=require("./RCTShadowView");var _RCTShadowView4=_interopRequireDefault(_RCTShadowView3);var _yogaDom=require("yoga-dom");var _yogaDom2=_interopRequireDefault(_yogaDom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function _callee(){var RCTShadowView,Yoga,RCTRootShadowView;return _regenerator2.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator2.default.awrap(_RCTShadowView4.default);case 2:RCTShadowView=_context.sent;_context.next=5;return _regenerator2.default.awrap(_yogaDom2.default);case 5:Yoga=_context.sent;RCTRootShadowView=function(_RCTShadowView2){(0,_inherits3.default)(RCTRootShadowView,_RCTShadowView2);function RCTRootShadowView(){(0,_classCallCheck3.default)(this,RCTRootShadowView);var _this=(0,_possibleConstructorReturn3.default)(this,(RCTRootShadowView.__proto__||Object.getPrototypeOf(RCTRootShadowView)).call(this));_this.yogaConfig=new Yoga.Config();_this.yogaNode.free();_this.yogaNode=Yoga.Node.createWithConfig(_this.yogaConfig);_this.availableSize={width:Infinity,height:Infinity};return _this;}(0,_createClass3.default)(RCTRootShadowView,[{key:"updateAvailableSize",value:function updateAvailableSize(size){this.availableSize=size;this.makeDirtyRecursive();}},{key:"updatePointScaleFactor",value:function updatePointScaleFactor(ratio){this.yogaConfig.setPointScaleFactor(ratio);}},{key:"recalculateLayout",value:function recalculateLayout(){var _availableSize=this.availableSize,width=_availableSize.width,height=_availableSize.height;this.yogaNode.calculateLayout(width,height);var layoutChanges=this.getLayoutChanges({top:0,left:0});return layoutChanges;}}]);return RCTRootShadowView;}(RCTShadowView);return _context.abrupt("return",RCTRootShadowView);case 8:case"end":return _context.stop();}}},null,_this2);}();
//# sourceMappingURL=RCTRootShadowView.js.map