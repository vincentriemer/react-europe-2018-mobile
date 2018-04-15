Object.defineProperty(exports,"__esModule",{value:true});exports.RNDomInstance=exports.CustomElement=exports.UIView=exports.RCTEventEmitter=exports.RCTViewManager=exports.RCTView=exports.RCTFunctionTypeSync=exports.RCTFunctionTypePromise=exports.RCTFunctionTypeNormal=exports.RCT_EXPORT_METHOD=exports.RCT_EXPORT_MODULE=undefined;var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);require("@webcomponents/webcomponentsjs/webcomponents-sd-ce.js");require("web-animations-js/web-animations-next.min");var _RCTRootView=require("./bridge/RCTRootView");var _RCTRootView2=_interopRequireDefault(_RCTRootView);var _BundleFromRoot=require("./utils/BundleFromRoot");var _BundleFromRoot2=_interopRequireDefault(_BundleFromRoot);var _RCTBridge=require("./bridge/RCTBridge");var _RCTBridge2=_interopRequireDefault(_RCTBridge);var _UIView=require("./base/UIView");var _UIView2=_interopRequireDefault(_UIView);var _RCTView=require("./views/RCTView");var _RCTView2=_interopRequireDefault(_RCTView);var _RCTViewManager=require("./views/RCTViewManager");var _RCTViewManager2=_interopRequireDefault(_RCTViewManager);var _RCTEventEmitter=require("./modules/RCTEventEmitter");var _RCTEventEmitter2=_interopRequireDefault(_RCTEventEmitter);var _CustomElement=require("./utils/CustomElement");var _CustomElement2=_interopRequireDefault(_CustomElement);var _RCTEventDispatcher=require("./bridge/RCTEventDispatcher");var _RCTEventDispatcher2=_interopRequireDefault(_RCTEventDispatcher);var _RCTUIManager2=require("./modules/RCTUIManager");var _RCTUIManager3=_interopRequireDefault(_RCTUIManager2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}global.process=global.process||{};global.process.env=global.process.env||{};if(!global.process.env.NODE_ENV){global.process.env.NODE_ENV=__DEV__?"development":"production";}exports.RCT_EXPORT_MODULE=_RCTBridge.RCT_EXPORT_MODULE;exports.RCT_EXPORT_METHOD=_RCTBridge.RCT_EXPORT_METHOD;exports.RCTFunctionTypeNormal=_RCTBridge.RCTFunctionTypeNormal;exports.RCTFunctionTypePromise=_RCTBridge.RCTFunctionTypePromise;exports.RCTFunctionTypeSync=_RCTBridge.RCTFunctionTypeSync;exports.RCTView=_RCTView2.default;exports.RCTViewManager=_RCTViewManager2.default;exports.RCTEventEmitter=_RCTEventEmitter2.default;exports.UIView=_UIView2.default;exports.CustomElement=_CustomElement2.default;var builtInNativeModules=[require("./modules/RCTSourceCode"),require("./bridge/RCTEventDispatcher"),require("./modules/RCTDeviceInfo"),require("./modules/RCTPlatform"),require("./modules/RCTTiming"),require("./modules/RCTUIManager"),require("./views/RCTViewManager"),require("./views/Text/RCTTextManager"),require("./views/Text/RCTRawTextManager"),require("./views/RCTScrollViewManager"),require("./views/RCTScrollContentViewManager"),require("./modules/NativeAnimation/RCTNativeAnimatedModule"),require("./modules/RCTAsyncLocalStorage"),require("./views/Image/RCTImageViewManager"),require("./modules/RCTLinkingManager"),require("./views/Text/RCTTextInputManager"),require("./views/Image/RCTImageLoader"),require("./views/RCTActivityIndicatorViewManager"),require("./modules/RCTWebSocketModule"),require("./modules/RCTAppState"),require("./views/SafeAreaView/RCTSafeAreaViewManager"),require("./views/Switch/RCTSwitchManager"),require("./modules/RCTStatusBarManager"),require("./modules/RCTDeviceEventManager"),require("./modules/RCTKeyboardObserver"),require("./modules/RCTExceptionsManager"),require("./modules/RedBox/RCTRedBox")];if(__DEV__){builtInNativeModules.push(require("./DevSupport/RCTDevLoadingView"));builtInNativeModules.push(require("./modules/RCTDevSettings"));builtInNativeModules.push(require("./DevSupport/RCTDevMenu"));}var RNDomInstance=exports.RNDomInstance=function(){function RNDomInstance(bundle,moduleName,parent){var options=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};(0,_classCallCheck3.default)(this,RNDomInstance);var enableHotReload=options.enableHotReload?options.enableHotReload:false;var userNativeModules=options.nativeModules?options.nativeModules:[];this.rootView=new _RCTRootView2.default((0,_BundleFromRoot2.default)(bundle),moduleName,parent,enableHotReload,builtInNativeModules.concat(userNativeModules));}(0,_createClass3.default)(RNDomInstance,[{key:"start",value:function start(){this.rootView.render();}}]);return RNDomInstance;}();
//# sourceMappingURL=index.js.map