Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _dec,_dec2,_class,_desc,_value,_class2;var _RCTBridge=require("./../bridge/RCTBridge");var _RCTBridge2=_interopRequireDefault(_RCTBridge);var _RCTEventEmitter2=require("./RCTEventEmitter");var _RCTEventEmitter3=_interopRequireDefault(_RCTEventEmitter2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var hidden=void 0,visibilityChange=void 0;if(typeof document.hidden!=="undefined"){hidden="hidden";visibilityChange="visibilitychange";}else if(typeof document.msHidden!=="undefined"){hidden="msHidden";visibilityChange="msvisibilitychange";}else if(typeof document.webkitHidden!=="undefined"){hidden="webkitHidden";visibilityChange="webkitvisibilitychange";}var RCTAppState=(_dec=(0,_RCTBridge.RCT_EXPORT_MODULE)("RCTAppState"),_dec2=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec(_class=(_class2=function(_RCTEventEmitter){(0,_inherits3.default)(RCTAppState,_RCTEventEmitter);function RCTAppState(bridge){(0,_classCallCheck3.default)(this,RCTAppState);var _this=(0,_possibleConstructorReturn3.default)(this,(RCTAppState.__proto__||Object.getPrototypeOf(RCTAppState)).call(this,bridge));_this.bridge=bridge;document.addEventListener(visibilityChange,_this.didUpdateVisibility.bind(_this),false);_this.listenerCount=1;return _this;}(0,_createClass3.default)(RCTAppState,[{key:"currentBackgroundState",value:function currentBackgroundState(){if(document[hidden]==null){return"unknown";}if(document[hidden]){return"background";}return"active";}},{key:"constantsToExport",value:function constantsToExport(){return{initialAppState:this.currentBackgroundState()};}},{key:"supportedEvents",value:function supportedEvents(){return["appStateDidChange"];}},{key:"didUpdateVisibility",value:function didUpdateVisibility(){this.sendEventWithName("appStateDidChange",{app_state:this.currentBackgroundState()});}},{key:"getCurrentAppState",value:function getCurrentAppState(callbackId){this.bridge.callbackFromId(callbackId)({app_state:this.currentBackgroundState()});}}]);return RCTAppState;}(_RCTEventEmitter3.default),(_applyDecoratedDescriptor(_class2.prototype,"getCurrentAppState",[_dec2],Object.getOwnPropertyDescriptor(_class2.prototype,"getCurrentAppState"),_class2.prototype)),_class2))||_class);exports.default=RCTAppState;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1JlYWN0RG9tL21vZHVsZXMvUkNUQXBwU3RhdGUuanMiXSwibmFtZXMiOlsiaGlkZGVuIiwidmlzaWJpbGl0eUNoYW5nZSIsImRvY3VtZW50IiwibXNIaWRkZW4iLCJ3ZWJraXRIaWRkZW4iLCJSQ1RBcHBTdGF0ZSIsImJyaWRnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaWRVcGRhdGVWaXNpYmlsaXR5IiwiYmluZCIsImxpc3RlbmVyQ291bnQiLCJpbml0aWFsQXBwU3RhdGUiLCJjdXJyZW50QmFja2dyb3VuZFN0YXRlIiwic2VuZEV2ZW50V2l0aE5hbWUiLCJhcHBfc3RhdGUiLCJjYWxsYmFja0lkIiwiY2FsbGJhY2tGcm9tSWQiXSwibWFwcGluZ3MiOiJ3bkJBS0EsZ0QsbURBS0EsbUQsdXlCQUVBLEdBQUlBLGNBQUosQ0FBWUMsdUJBQVosQ0FDQSxHQUFJLE1BQU9DLFVBQVNGLE1BQWhCLEdBQTJCLFdBQS9CLENBQTRDLENBRTFDQSxPQUFTLFFBQVQsQ0FDQUMsaUJBQW1CLGtCQUFuQixDQUNELENBSkQsSUFJTyxJQUFJLE1BQU9DLFVBQVNDLFFBQWhCLEdBQTZCLFdBQWpDLENBQThDLENBQ25ESCxPQUFTLFVBQVQsQ0FDQUMsaUJBQW1CLG9CQUFuQixDQUNELENBSE0sSUFHQSxJQUFJLE1BQU9DLFVBQVNFLFlBQWhCLEdBQWlDLFdBQXJDLENBQWtELENBQ3ZESixPQUFTLGNBQVQsQ0FDQUMsaUJBQW1CLHdCQUFuQixDQUNELEMsR0FHS0ksWSxPQURMLGlDQUFrQixhQUFsQixDLE9BNENFLGtFLHNHQXhDRCxxQkFBWUMsTUFBWixDQUErQiw2S0FDdkJBLE1BRHVCLEdBRTdCLE1BQUtBLE1BQUwsQ0FBY0EsTUFBZCxDQUVBSixTQUFTSyxnQkFBVCxDQUNFTixnQkFERixDQUVFLE1BQUtPLG1CQUFMLENBQXlCQyxJQUF6QixPQUZGLENBR0UsS0FIRixFQU1BLE1BQUtDLGFBQUwsQ0FBcUIsQ0FBckIsQ0FWNkIsYUFXOUIsQyw0R0FFd0IsQ0FFdkIsR0FBSVIsU0FBU0YsTUFBVCxHQUFvQixJQUF4QixDQUE4QixDQUM1QixNQUFPLFNBQVAsQ0FDRCxDQUNELEdBQUlFLFNBQVNGLE1BQVQsQ0FBSixDQUFzQixDQUNwQixNQUFPLFlBQVAsQ0FDRCxDQUNELE1BQU8sUUFBUCxDQUNELEMsNkRBRW1CLENBQ2xCLE1BQU8sQ0FDTFcsZ0JBQWlCLEtBQUtDLHNCQUFMLEVBRFosQ0FBUCxDQUdELEMseURBRWlCLENBQ2hCLE1BQU8sQ0FBQyxtQkFBRCxDQUFQLENBQ0QsQyxpRUFFcUIsQ0FDcEIsS0FBS0MsaUJBQUwsQ0FBdUIsbUJBQXZCLENBQTRDLENBQzFDQyxVQUFXLEtBQUtGLHNCQUFMLEVBRCtCLENBQTVDLEVBR0QsQyw4REFHa0JHLFUsQ0FBb0IsQ0FDckMsS0FBS1QsTUFBTCxDQUFZVSxjQUFaLENBQTJCRCxVQUEzQixFQUF1QyxDQUNyQ0QsVUFBVyxLQUFLRixzQkFBTCxFQUQwQixDQUF2QyxFQUdELEMsNlBBR1lQLFciLCJmaWxlIjoiUkNUQXBwU3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwcm92aWRlc01vZHVsZSBSQ1RBcHBTdGF0ZVxuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgUkNUQnJpZGdlLCB7XG4gIFJDVF9FWFBPUlRfTU9EVUxFLFxuICBSQ1RfRVhQT1JUX01FVEhPRCxcbiAgUkNURnVuY3Rpb25UeXBlTm9ybWFsXG59IGZyb20gXCJSQ1RCcmlkZ2VcIjtcbmltcG9ydCBSQ1RFdmVudEVtaXR0ZXIgZnJvbSBcIlJDVE5hdGl2ZUV2ZW50RW1pdHRlclwiO1xuXG5sZXQgaGlkZGVuLCB2aXNpYmlsaXR5Q2hhbmdlO1xuaWYgKHR5cGVvZiBkb2N1bWVudC5oaWRkZW4gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgLy8gT3BlcmEgMTIuMTAgYW5kIEZpcmVmb3ggMTggYW5kIGxhdGVyIHN1cHBvcnRcbiAgaGlkZGVuID0gXCJoaWRkZW5cIjtcbiAgdmlzaWJpbGl0eUNoYW5nZSA9IFwidmlzaWJpbGl0eWNoYW5nZVwiO1xufSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQubXNIaWRkZW4gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgaGlkZGVuID0gXCJtc0hpZGRlblwiO1xuICB2aXNpYmlsaXR5Q2hhbmdlID0gXCJtc3Zpc2liaWxpdHljaGFuZ2VcIjtcbn0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBoaWRkZW4gPSBcIndlYmtpdEhpZGRlblwiO1xuICB2aXNpYmlsaXR5Q2hhbmdlID0gXCJ3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlXCI7XG59XG5cbkBSQ1RfRVhQT1JUX01PRFVMRShcIlJDVEFwcFN0YXRlXCIpXG5jbGFzcyBSQ1RBcHBTdGF0ZSBleHRlbmRzIFJDVEV2ZW50RW1pdHRlciB7XG4gIGJyaWRnZTogUkNUQnJpZGdlO1xuXG4gIGNvbnN0cnVjdG9yKGJyaWRnZTogUkNUQnJpZGdlKSB7XG4gICAgc3VwZXIoYnJpZGdlKTtcbiAgICB0aGlzLmJyaWRnZSA9IGJyaWRnZTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICB2aXNpYmlsaXR5Q2hhbmdlLFxuICAgICAgdGhpcy5kaWRVcGRhdGVWaXNpYmlsaXR5LmJpbmQodGhpcyksXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICB0aGlzLmxpc3RlbmVyQ291bnQgPSAxO1xuICB9XG5cbiAgY3VycmVudEJhY2tncm91bmRTdGF0ZSgpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgaWYgKGRvY3VtZW50W2hpZGRlbl0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwidW5rbm93blwiO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnRbaGlkZGVuXSkge1xuICAgICAgcmV0dXJuIFwiYmFja2dyb3VuZFwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJhY3RpdmVcIjtcbiAgfVxuXG4gIGNvbnN0YW50c1RvRXhwb3J0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbml0aWFsQXBwU3RhdGU6IHRoaXMuY3VycmVudEJhY2tncm91bmRTdGF0ZSgpXG4gICAgfTtcbiAgfVxuXG4gIHN1cHBvcnRlZEV2ZW50cygpIHtcbiAgICByZXR1cm4gW1wiYXBwU3RhdGVEaWRDaGFuZ2VcIl07XG4gIH1cblxuICBkaWRVcGRhdGVWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMuc2VuZEV2ZW50V2l0aE5hbWUoXCJhcHBTdGF0ZURpZENoYW5nZVwiLCB7XG4gICAgICBhcHBfc3RhdGU6IHRoaXMuY3VycmVudEJhY2tncm91bmRTdGF0ZSgpXG4gICAgfSk7XG4gIH1cblxuICBAUkNUX0VYUE9SVF9NRVRIT0QoUkNURnVuY3Rpb25UeXBlTm9ybWFsKVxuICBnZXRDdXJyZW50QXBwU3RhdGUoY2FsbGJhY2tJZDogbnVtYmVyKSB7XG4gICAgdGhpcy5icmlkZ2UuY2FsbGJhY2tGcm9tSWQoY2FsbGJhY2tJZCkoe1xuICAgICAgYXBwX3N0YXRlOiB0aGlzLmN1cnJlbnRCYWNrZ3JvdW5kU3RhdGUoKVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJDVEFwcFN0YXRlO1xuIl19