Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _dec,_dec2,_dec3,_dec4,_dec5,_class,_desc,_value,_class2;var _RCTBridge=require("./../bridge/RCTBridge");var _RCTBridge2=_interopRequireDefault(_RCTBridge);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var RCTExceptionsManager=(_dec=(0,_RCTBridge.RCT_EXPORT_MODULE)("RCTExceptionsManager"),_dec2=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec3=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec4=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec5=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec(_class=(_class2=function(){function RCTExceptionsManager(bridge){(0,_classCallCheck3.default)(this,RCTExceptionsManager);this.bridge=bridge;}(0,_createClass3.default)(RCTExceptionsManager,[{key:"reportSoftException",value:function reportSoftException(message,stack,exceptionId){this.bridge.redBox.showErrorMessage(message,stack);}},{key:"reportFatalException",value:function reportFatalException(message,stack,exceptionId){this.bridge.redBox.showErrorMessage(message,stack);}},{key:"updateExceptionMessage",value:function updateExceptionMessage(message,stack,exceptionId){this.bridge.redBox.updateError(message,stack);}},{key:"reportUnhandledException",value:function reportUnhandledException(message,stack){this.reportFatalException(message,stack,-1);}}]);return RCTExceptionsManager;}(),(_applyDecoratedDescriptor(_class2.prototype,"reportSoftException",[_dec2],Object.getOwnPropertyDescriptor(_class2.prototype,"reportSoftException"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"reportFatalException",[_dec3],Object.getOwnPropertyDescriptor(_class2.prototype,"reportFatalException"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"updateExceptionMessage",[_dec4],Object.getOwnPropertyDescriptor(_class2.prototype,"updateExceptionMessage"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"reportUnhandledException",[_dec5],Object.getOwnPropertyDescriptor(_class2.prototype,"reportUnhandledException"),_class2.prototype)),_class2))||_class);exports.default=RCTExceptionsManager;
//# sourceMappingURL=RCTExceptionsManager.js.map