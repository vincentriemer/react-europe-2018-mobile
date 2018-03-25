Object.defineProperty(exports,"__esModule",{value:true});var _regenerator=require("babel-runtime/regenerator");var _regenerator2=_interopRequireDefault(_regenerator);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _dec,_class;var _RCTBridge=require("./RCTBridge");var _RCTBridge2=_interopRequireDefault(_RCTBridge);var _UIView2=require("./../base/UIView");var _UIView3=_interopRequireDefault(_UIView2);var _NotificationCenter=require("./../base/NotificationCenter");var _NotificationCenter2=_interopRequireDefault(_NotificationCenter);var _RCTDeviceInfo=require("./../modules/RCTDeviceInfo");var _RCTDeviceInfo2=_interopRequireDefault(_RCTDeviceInfo);var _RCTTiming=require("./../modules/RCTTiming");var _RCTTiming2=_interopRequireDefault(_RCTTiming);var _RCTTouchHandler=require("./../modules/RCTTouchHandler");var _RCTTouchHandler2=_interopRequireDefault(_RCTTouchHandler);var _CustomElement=require("./../utils/CustomElement");var _CustomElement2=_interopRequireDefault(_CustomElement);var _Instrument=require("./../utils/Instrument");var _Instrument2=_interopRequireDefault(_Instrument);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getAvailableSize(){return{width:window.innerWidth,height:window.innerHeight};}var RCTRootView=(_dec=(0,_CustomElement2.default)("rct-root-view"),_dec(_class=function(_UIView){(0,_inherits3.default)(RCTRootView,_UIView);function RCTRootView(bundle,moduleName,parent){var enableHotReload=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var nativeModules=arguments[4];(0,_classCallCheck3.default)(this,RCTRootView);var _this=(0,_possibleConstructorReturn3.default)(this,(RCTRootView.__proto__||Object.getPrototypeOf(RCTRootView)).call(this));_this.bundleLocation=bundle;_this.enableHotReload=enableHotReload;_this.moduleName=moduleName;_this.parent=parent;if(_this.enableHotReload){bundle+="&hot=true";}var bridge=new _RCTBridge2.default(moduleName,bundle,nativeModules);_this.initialization=_this.initializeBridge(bridge);return _this;}(0,_createClass3.default)(RCTRootView,[{key:"initializeBridge",value:function initializeBridge(bridge){var deviceInfoModule,dimensions;return _regenerator2.default.async(function initializeBridge$(_context){while(1){switch(_context.prev=_context.next){case 0:this.bridge=bridge;this.bridge.bundleFinishedLoading=this.bundleFinishedLoading.bind(this);_context.next=4;return _regenerator2.default.awrap(this.bridge.initializeModules());case 4:deviceInfoModule=this.bridge.modulesByName["DeviceInfo"];dimensions=deviceInfoModule.exportedDimensions().window;this.availableSize={width:dimensions.width,height:dimensions.height};this.width=this.availableSize.width;this.height=this.availableSize.height;this.uiManager=this.bridge.uiManager;this.timing=this.bridge.modulesByName["Timing"];this.touchHandler=new _RCTTouchHandler2.default(this.bridge);this.touchHandler.attachToView(this);this.updateHostStyle({WebkitTapHighlightColor:"transparent",userSelect:"none",position:"fixed"});this.ticking=false;case 15:case"end":return _context.stop();}}},null,this);}},{key:"bundleFinishedLoading",value:function bundleFinishedLoading(){this.runApplication();}},{key:"runApplication",value:function runApplication(){var appParameters={rootTag:this.reactTag,initialProps:{}};this.bridge.enqueueJSCall("AppRegistry","runApplication",[this.moduleName,appParameters]);if(this.enableHotReload){var bundleURL=new URL(this.bundleLocation);console.warn("HotReload on "+this.bundleLocation);this.bridge.enqueueJSCall("HMRClient","enable",["dom",bundleURL.pathname.toString().substr(1),bundleURL.hostname,bundleURL.port]);}this.requestTick();}},{key:"requestTick",value:function requestTick(){if(!this.ticking){window.requestAnimationFrame(this.renderLoop.bind(this));}this.ticking=true;}},{key:"renderLoop",value:function renderLoop(){var _this2=this;var frameStart;return _regenerator2.default.async(function renderLoop$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:this.ticking=false;frameStart=window.performance?performance.now():Date.now();_context2.next=4;return _regenerator2.default.awrap((0,_Instrument2.default)("⚛️ Timing",function(){return _this2.timing.frame();}));case 4:_context2.next=6;return _regenerator2.default.awrap((0,_Instrument2.default)("⚛️ Bridge",function(){return _this2.bridge.frame();}));case 6:_context2.next=8;return _regenerator2.default.awrap((0,_Instrument2.default)("⚛️ Rendering",function(){return _this2.uiManager.frame();}));case 8:_context2.next=10;return _regenerator2.default.awrap(this.timing.idle(frameStart));case 10:this.requestTick();case 11:case"end":return _context2.stop();}}},null,this);}},{key:"render",value:function render(){return _regenerator2.default.async(function render$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return _regenerator2.default.awrap(this.initialization);case 2:this.parent.appendChild(this);this.bridge.loadBridgeConfig();this.requestTick();case 5:case"end":return _context3.stop();}}},null,this);}},{key:"reactTag",get:function get(){if(!this._reactTag){this._reactTag=this.uiManager.allocateRootTag;this.uiManager.registerRootView(this);}return this._reactTag;},set:function set(value){}}]);return RCTRootView;}(_UIView3.default))||_class);exports.default=RCTRootView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1JlYWN0RG9tL2JyaWRnZS9SQ1RSb290Vmlldy5qcyJdLCJuYW1lcyI6WyJnZXRBdmFpbGFibGVTaXplIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJSQ1RSb290VmlldyIsImJ1bmRsZSIsIm1vZHVsZU5hbWUiLCJwYXJlbnQiLCJlbmFibGVIb3RSZWxvYWQiLCJuYXRpdmVNb2R1bGVzIiwiYnVuZGxlTG9jYXRpb24iLCJicmlkZ2UiLCJpbml0aWFsaXphdGlvbiIsImluaXRpYWxpemVCcmlkZ2UiLCJidW5kbGVGaW5pc2hlZExvYWRpbmciLCJiaW5kIiwiaW5pdGlhbGl6ZU1vZHVsZXMiLCJkZXZpY2VJbmZvTW9kdWxlIiwibW9kdWxlc0J5TmFtZSIsImRpbWVuc2lvbnMiLCJleHBvcnRlZERpbWVuc2lvbnMiLCJhdmFpbGFibGVTaXplIiwidWlNYW5hZ2VyIiwidGltaW5nIiwidG91Y2hIYW5kbGVyIiwiYXR0YWNoVG9WaWV3IiwidXBkYXRlSG9zdFN0eWxlIiwiV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3IiLCJ1c2VyU2VsZWN0IiwicG9zaXRpb24iLCJ0aWNraW5nIiwicnVuQXBwbGljYXRpb24iLCJhcHBQYXJhbWV0ZXJzIiwicm9vdFRhZyIsInJlYWN0VGFnIiwiaW5pdGlhbFByb3BzIiwiZW5xdWV1ZUpTQ2FsbCIsImJ1bmRsZVVSTCIsIlVSTCIsImNvbnNvbGUiLCJ3YXJuIiwicGF0aG5hbWUiLCJ0b1N0cmluZyIsInN1YnN0ciIsImhvc3RuYW1lIiwicG9ydCIsInJlcXVlc3RUaWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyTG9vcCIsImZyYW1lU3RhcnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkRhdGUiLCJmcmFtZSIsImlkbGUiLCJhcHBlbmRDaGlsZCIsImxvYWRCcmlkZ2VDb25maWciLCJfcmVhY3RUYWciLCJhbGxvY2F0ZVJvb3RUYWciLCJyZWdpc3RlclJv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cm92aWRlc01vZHVsZSBSQ1RSb290Vmlld1xuICogQGZsb3dcbiAqL1xuaW1wb3J0IFJDVEJyaWRnZSBmcm9tIFwiUkNUQnJpZGdlXCI7XG5pbXBvcnQgVUlWaWV3LCB7IEZyYW1lWmVybyB9IGZyb20gXCJVSVZpZXdcIjtcbmltcG9ydCBOb3RpZmljYXRpb25DZW50ZXIgZnJvbSBcIk5vdGlmaWNhdGlvbkNlbnRlclwiO1xuaW1wb3J0IFJDVERldmljZUluZm8gZnJvbSBcIlJDVERldmljZUluZm9cIjtcbmltcG9ydCBSQ1RUaW1pbmcgZnJvbSBcIlJDVFRpbWluZ1wiO1xuaW1wb3J0IFJDVFRvdWNoSGFuZGxlciBmcm9tIFwiUkNUVG91Y2hIYW5kbGVyXCI7XG5pbXBvcnQgQ3VzdG9tRWxlbWVudCBmcm9tIFwiQ3VzdG9tRWxlbWVudFwiO1xuaW1wb3J0IGluc3RydW1lbnQgZnJvbSBcIkluc3RydW1lbnRcIjtcblxuaW1wb3J0IHR5cGUgeyBOYXRpdmVNb2R1bGVJbXBvcnRzIH0gZnJvbSBcIlJDVE1vZHVsZVwiO1xuXG5mdW5jdGlvbiBnZXRBdmFpbGFibGVTaXplKCkge1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuICB9O1xufVxuXG5AQ3VzdG9tRWxlbWVudChcInJjdC1yb290LXZpZXdcIilcbi8vICRGbG93Rml4TWVcbmNsYXNzIFJDVFJvb3RWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgX3JlYWN0VGFnOiBudW1iZXI7XG5cbiAgYnJpZGdlOiBSQ1RCcmlkZ2U7XG4gIHJlbmRlclJvb3Q6IEhUTUxFbGVtZW50O1xuICBtb2R1bGVOYW1lOiBzdHJpbmc7XG4gIGF2YWlsYWJsZVNpemU6IFNpemU7XG4gIHBhcmVudDogRWxlbWVudDtcbiAgdWlNYW5hZ2VyOiAqO1xuICB0aW1pbmc6IFJDVFRpbWluZztcbiAgdGlja2luZzogYm9vbGVhbjtcbiAgYnVuZGxlTG9jYXRpb246IHN0cmluZztcbiAgZW5hYmxlSG90UmVsb2FkOiBib29sZWFuO1xuXG4gIHRvdWNoSGFuZGxlcjogUkNUVG91Y2hIYW5kbGVyO1xuXG4gIGluaXRpYWxpemF0aW9uOiBQcm9taXNlPHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGJ1bmRsZTogc3RyaW5nLFxuICAgIG1vZHVsZU5hbWU6IHN0cmluZyxcbiAgICBwYXJlbnQ6IEVsZW1lbnQsXG4gICAgZW5hYmxlSG90UmVsb2FkOiBib29sZWFuID0gZmFsc2UsXG4gICAgbmF0aXZlTW9kdWxlczogTmF0aXZlTW9kdWxlSW1wb3J0c1xuICApIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5idW5kbGVMb2NhdGlvbiA9IGJ1bmRsZTtcbiAgICB0aGlzLmVuYWJsZUhvdFJlbG9hZCA9IGVuYWJsZUhvdFJlbG9hZDtcbiAgICB0aGlzLm1vZHVsZU5hbWUgPSBtb2R1bGVOYW1lO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgaWYgKHRoaXMuZW5hYmxlSG90UmVsb2FkKSB7XG4gICAgICBidW5kbGUgKz0gXCImaG90PXRydWVcIjtcbiAgICB9XG5cbiAgICBjb25zdCBicmlkZ2UgPSBuZXcgUkNUQnJpZGdlKG1vZHVsZU5hbWUsIGJ1bmRsZSwgbmF0aXZlTW9kdWxlcyk7XG4gICAgdGhpcy5pbml0aWFsaXphdGlvbiA9IHRoaXMuaW5pdGlhbGl6ZUJyaWRnZShicmlkZ2UpO1xuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZUJyaWRnZShicmlkZ2U6IFJDVEJyaWRnZSkge1xuICAgIHRoaXMuYnJpZGdlID0gYnJpZGdlO1xuICAgIHRoaXMuYnJpZGdlLmJ1bmRsZUZpbmlzaGVkTG9hZGluZyA9IHRoaXMuYnVuZGxlRmluaXNoZWRMb2FkaW5nLmJpbmQodGhpcyk7XG5cbiAgICBhd2FpdCB0aGlzLmJyaWRnZS5pbml0aWFsaXplTW9kdWxlcygpO1xuXG4gICAgY29uc3QgZGV2aWNlSW5mb01vZHVsZTogUkNURGV2aWNlSW5mbyA9ICh0aGlzLmJyaWRnZS5tb2R1bGVzQnlOYW1lW1xuICAgICAgXCJEZXZpY2VJbmZvXCJcbiAgICBdOiBhbnkpO1xuXG4gICAgY29uc3QgZGltZW5zaW9ucyA9IGRldmljZUluZm9Nb2R1bGUuZXhwb3J0ZWREaW1lbnNpb25zKCkud2luZG93O1xuICAgIHRoaXMuYXZhaWxhYmxlU2l6ZSA9IHtcbiAgICAgIHdpZHRoOiBkaW1lbnNpb25zLndpZHRoLFxuICAgICAgaGVpZ2h0OiBkaW1lbnNpb25zLmhlaWdodFxuICAgIH07XG5cbiAgICB0aGlzLndpZHRoID0gdGhpcy5hdmFpbGFibGVTaXplLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5hdmFpbGFibGVTaXplLmhlaWdodDtcblxuICAgIHRoaXMudWlNYW5hZ2VyID0gdGhpcy5icmlkZ2UudWlNYW5hZ2VyO1xuICAgIHRoaXMudGltaW5nID0gKHRoaXMuYnJpZGdlLm1vZHVsZXNCeU5hbWVbXCJUaW1pbmdcIl06IGFueSk7XG5cbiAgICB0aGlzLnRvdWNoSGFuZGxlciA9IG5ldyBSQ1RUb3VjaEhhbmRsZXIodGhpcy5icmlkZ2UpO1xuICAgIHRoaXMudG91Y2hIYW5kbGVyLmF0dGFjaFRvVmlldyh0aGlzKTtcblxuICAgIHRoaXMudXBkYXRlSG9zdFN0eWxlKHtcbiAgICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCJcbiAgICB9KTtcblxuICAgIHRoaXMudGlja2luZyA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0IHJlYWN0VGFnKCk6IG51bWJlciB7XG4gICAgaWYgKCF0aGlzLl9yZWFjdFRhZykge1xuICAgICAgdGhpcy5fcmVhY3RUYWcgPSB0aGlzLnVpTWFuYWdlci5hbGxvY2F0ZVJvb3RUYWc7XG4gICAgICB0aGlzLnVpTWFuYWdlci5yZWdpc3RlclJvb3RWaWV3KHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVhY3RUYWc7XG4gIH1cblxuICBzZXQgcmVhY3RUYWcodmFsdWU6IG51bWJlcikge31cblxuICBidW5kbGVGaW5pc2hlZExvYWRpbmcoKSB7XG4gICAgdGhpcy5ydW5BcHBsaWNhdGlvbigpO1xuICB9XG5cbiAgcnVuQXBwbGljYXRpb24oKSB7XG4gICAgY29uc3QgYXBwUGFyYW1ldGVycyA9IHtcbiAgICAgIHJvb3RUYWc6IHRoaXMucmVhY3RUYWcsXG4gICAgICBpbml0aWFsUHJvcHM6IHt9XG4gICAgfTtcblxuICAgIHRoaXMuYnJpZGdlLmVucXVldWVKU0NhbGwoXCJBcHBSZWdpc3RyeVwiLCBcInJ1bkFwcGxpY2F0aW9uXCIsIFtcbiAgICAgIHRoaXMubW9kdWxlTmFtZSxcbiAgICAgIGFwcFBhcmFtZXRlcnNcbiAgICBdKTtcblxuICAgIGlmICh0aGlzLmVuYWJsZUhvdFJlbG9hZCkge1xuICAgICAgY29uc3QgYnVuZGxlVVJMID0gbmV3IFVSTCh0aGlzLmJ1bmRsZUxvY2F0aW9uKTtcbiAgICAgIGNvbnNvbGUud2FybihcIkhvdFJlbG9hZCBvbiBcIiArIHRoaXMuYnVuZGxlTG9jYXRpb24pO1xuICAgICAgdGhpcy5icmlkZ2UuZW5xdWV1ZUpTQ2FsbChcIkhNUkNsaWVudFwiLCBcImVuYWJsZVwiLCBbXG4gICAgICAgIFwiZG9tXCIsXG4gICAgICAgIGJ1bmRsZVVSTC5wYXRobmFtZS50b1N0cmluZygpLnN1YnN0cigxKSxcbiAgICAgICAgYnVuZGxlVVJMLmhvc3RuYW1lLFxuICAgICAgICBidW5kbGVVUkwucG9ydFxuICAgICAgXSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZXF1ZXN0VGljaygpO1xuICB9XG5cbiAgcmVxdWVzdFRpY2soKSB7XG4gICAgaWYgKCF0aGlzLnRpY2tpbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXJMb29wLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICB0aGlzLnRpY2tpbmcgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgcmVuZGVyTG9vcCgpIHtcbiAgICB0aGlzLnRpY2tpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RhcnQgPSB3aW5kb3cucGVyZm9ybWFuY2UgPyBwZXJmb3JtYW5jZS5ub3coKSA6IERhdGUubm93KCk7XG5cbiAgICBhd2FpdCBpbnN0cnVtZW50KFwi4pqb77iPIFRpbWluZ1wiLCAoKSA9PiB0aGlzLnRpbWluZy5mcmFtZSgpKTtcbiAgICBhd2FpdCBpbnN0cnVtZW50KFwi4pqb77iPIEJyaWRnZVwiLCAoKSA9PiB0aGlzLmJyaWRnZS5mcmFtZSgpKTtcbiAgICBhd2FpdCBpbnN0cnVtZW50KFwi4pqb77iPIFJlbmRlcmluZ1wiLCAoKSA9PiB0aGlzLnVpTWFuYWdlci5mcmFtZSgpKTtcblxuICAgIGF3YWl0IHRoaXMudGltaW5nLmlkbGUoZnJhbWVTdGFydCk7XG5cbiAgICAvLyBUT0RPOiBSZS1lbmFibGUgY29uZGl0aW9uYWwgcmVuZGVyIGxvb3BcbiAgICAvLyBpZiAoXG4gICAgLy8gICB0aGlzLnRpbWluZy5zaG91bGRDb250aW51ZSgpIHx8XG4gICAgLy8gICB0aGlzLmJyaWRnZS5zaG91bGRDb250aW51ZSgpIHx8XG4gICAgLy8gICB0aGlzLnVpTWFuYWdlci5zaG91bGRDb250aW51ZSgpXG4gICAgLy8gKSB7XG4gICAgdGhpcy5yZXF1ZXN0VGljaygpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGFzeW5jIHJlbmRlcigpIHtcbiAgICBhd2FpdCB0aGlzLmluaXRpYWxpemF0aW9uO1xuXG4gICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgdGhpcy5icmlkZ2UubG9hZEJyaWRnZUNvbmZpZygpO1xuICAgIHRoaXMucmVxdWVzdFRpY2soKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSQ1RSb290VmlldztcbiJdfQ==