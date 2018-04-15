Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _dec,_dec2,_class,_desc,_value,_class2;var _RCTBridge=require("./../bridge/RCTBridge");var _RCTBridge2=_interopRequireDefault(_RCTBridge);var _RCTEventEmitter2=require("./RCTEventEmitter");var _RCTEventEmitter3=_interopRequireDefault(_RCTEventEmitter2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var hidden=void 0,visibilityChange=void 0;if(typeof document.hidden!=="undefined"){hidden="hidden";visibilityChange="visibilitychange";}else if(typeof document.msHidden!=="undefined"){hidden="msHidden";visibilityChange="msvisibilitychange";}else if(typeof document.webkitHidden!=="undefined"){hidden="webkitHidden";visibilityChange="webkitvisibilitychange";}var RCTAppState=(_dec=(0,_RCTBridge.RCT_EXPORT_MODULE)("RCTAppState"),_dec2=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec(_class=(_class2=function(_RCTEventEmitter){(0,_inherits3.default)(RCTAppState,_RCTEventEmitter);function RCTAppState(){var _ref;var _temp,_this,_ret;(0,_classCallCheck3.default)(this,RCTAppState);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=(0,_possibleConstructorReturn3.default)(this,(_ref=RCTAppState.__proto__||Object.getPrototypeOf(RCTAppState)).call.apply(_ref,[this].concat(args))),_this),_this.didUpdateVisibility=function(){_this.bridge.uiManager.requestTick();_this.sendEventWithName("appStateDidChange",{app_state:_this.currentBackgroundState()});},_temp),(0,_possibleConstructorReturn3.default)(_this,_ret);}(0,_createClass3.default)(RCTAppState,[{key:"startObserving",value:function startObserving(){document.addEventListener(visibilityChange,this.didUpdateVisibility,false);}},{key:"stopObserving",value:function stopObserving(){document.removeEventListener(visibilityChange,this.didUpdateVisibility,false);}},{key:"currentBackgroundState",value:function currentBackgroundState(){if(document[hidden]==null){return"unknown";}if(document[hidden]){return"background";}return"active";}},{key:"constantsToExport",value:function constantsToExport(){return{initialAppState:this.currentBackgroundState()};}},{key:"supportedEvents",value:function supportedEvents(){return["appStateDidChange"];}},{key:"getCurrentAppState",value:function getCurrentAppState(callbackId){this.bridge.callbackFromId(callbackId)({app_state:this.currentBackgroundState()});}}]);return RCTAppState;}(_RCTEventEmitter3.default),(_applyDecoratedDescriptor(_class2.prototype,"getCurrentAppState",[_dec2],Object.getOwnPropertyDescriptor(_class2.prototype,"getCurrentAppState"),_class2.prototype)),_class2))||_class);exports.default=RCTAppState;
//# sourceMappingURL=RCTAppState.js.map