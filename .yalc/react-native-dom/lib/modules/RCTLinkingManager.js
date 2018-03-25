Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _dec,_dec2,_dec3,_dec4,_class,_desc,_value,_class2;var _RCTBridge=require("./../bridge/RCTBridge");var _RCTBridge2=_interopRequireDefault(_RCTBridge);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var initialURL=location.href;var RCTLinkingManager=(_dec=(0,_RCTBridge.RCT_EXPORT_MODULE)("RCTLinkingManager"),_dec2=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypePromise),_dec3=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypePromise),_dec4=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypePromise),_dec(_class=(_class2=function(){function RCTLinkingManager(bridge){(0,_classCallCheck3.default)(this,RCTLinkingManager);this.bridge=bridge;}(0,_createClass3.default)(RCTLinkingManager,[{key:"openURL",value:function openURL(url,resolveId,rejectId){window.location=new URL(url,window.location).toString();this.bridge.callbackFromId(resolveId)(true);}},{key:"canOpenURL",value:function canOpenURL(url,resolveId,rejectId){this.bridge.callbackFromId(resolveId)(true);}},{key:"getInitialURL",value:function getInitialURL(resolveId,rejectId){this.bridge.callbackFromId(resolveId)(initialURL);}}]);return RCTLinkingManager;}(),(_applyDecoratedDescriptor(_class2.prototype,"openURL",[_dec2],Object.getOwnPropertyDescriptor(_class2.prototype,"openURL"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"canOpenURL",[_dec3],Object.getOwnPropertyDescriptor(_class2.prototype,"canOpenURL"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"getInitialURL",[_dec4],Object.getOwnPropertyDescriptor(_class2.prototype,"getInitialURL"),_class2.prototype)),_class2))||_class);exports.default=RCTLinkingManager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1JlYWN0RG9tL21vZHVsZXMvUkNUTGlua2luZ01hbmFnZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFVSTCIsImxvY2F0aW9uIiwiaHJlZiIsIlJDVExpbmtpbmdNYW5hZ2VyIiwiYnJpZGdlIiwidXJsIiwicmVzb2x2ZUlkIiwicmVqZWN0SWQiLCJ3aW5kb3ciLCJVUkwiLCJ0b1N0cmluZyIsImNhbGxiYWNrRnJvbUlkIl0sIm1hcHBpbmdzIjoiMFdBS0EsZ0QsMHhCQU1BLEdBQU1BLFlBQWFDLFNBQVNDLElBQTVCLEMsR0FHTUMsa0IsT0FETCxpQ0FBa0IsbUJBQWxCLEMsT0FRRSxtRSxPQU1BLG1FLE9BS0EsbUUsaUNBZkQsMkJBQVlDLE1BQVosQ0FBK0Isc0RBQzdCLEtBQUtBLE1BQUwsQ0FBY0EsTUFBZCxDQUNELEMsbUZBR09DLEcsQ0FBYUMsUyxDQUFtQkMsUSxDQUFrQixDQUN4REMsT0FBT1AsUUFBUCxDQUFrQixHQUFJUSxJQUFKLENBQVFKLEdBQVIsQ0FBYUcsT0FBT1AsUUFBcEIsRUFBOEJTLFFBQTlCLEVBQWxCLENBQ0EsS0FBS04sTUFBTCxDQUFZTyxjQUFaLENBQTJCTCxTQUEzQixFQUFzQyxJQUF0QyxFQUNELEMsOENBR1VELEcsQ0FBYUMsUyxDQUFtQkMsUSxDQUFrQixDQUMzRCxLQUFLSCxNQUFMLENBQVlPLGNBQVosQ0FBMkJMLFNBQTNCLEVBQXNDLElBQXRDLEVBQ0QsQyxvREFHYUEsUyxDQUFtQkMsUSxDQUFrQixDQUNqRCxLQUFLSCxNQUFMLENBQVlPLGNBQVosQ0FBMkJMLFNBQTNCLEVBQXNDTixVQUF0QyxFQUNELEMsa2dCQUdZRyxpQiIsImZpbGUiOiJSQ1RMaW5raW5nTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHByb3ZpZGVzTW9kdWxlIFJDVExpbmtpbmdNYW5hZ2VyXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCBSQ1RCcmlkZ2UsIHtcbiAgUkNUX0VYUE9SVF9NT0RVTEUsXG4gIFJDVF9FWFBPUlRfTUVUSE9ELFxuICBSQ1RGdW5jdGlvblR5cGVQcm9taXNlXG59IGZyb20gXCJSQ1RCcmlkZ2VcIjtcblxuY29uc3QgaW5pdGlhbFVSTCA9IGxvY2F0aW9uLmhyZWY7XG5cbkBSQ1RfRVhQT1JUX01PRFVMRShcIlJDVExpbmtpbmdNYW5hZ2VyXCIpXG5jbGFzcyBSQ1RMaW5raW5nTWFuYWdlciB7XG4gIGJyaWRnZTogUkNUQnJpZGdlO1xuXG4gIGNvbnN0cnVjdG9yKGJyaWRnZTogUkNUQnJpZGdlKSB7XG4gICAgdGhpcy5icmlkZ2UgPSBicmlkZ2U7XG4gIH1cblxuICBAUkNUX0VYUE9SVF9NRVRIT0QoUkNURnVuY3Rpb25UeXBlUHJvbWlzZSlcbiAgb3BlblVSTCh1cmw6IHN0cmluZywgcmVzb2x2ZUlkOiBudW1iZXIsIHJlamVjdElkOiBudW1iZXIpIHtcbiAgICB3aW5kb3cubG9jYXRpb24gPSBuZXcgVVJMKHVybCwgd2luZG93LmxvY2F0aW9uKS50b1N0cmluZygpO1xuICAgIHRoaXMuYnJpZGdlLmNhbGxiYWNrRnJvbUlkKHJlc29sdmVJZCkodHJ1ZSk7XG4gIH1cblxuICBAUkNUX0VYUE9SVF9NRVRIT0QoUkNURnVuY3Rpb25UeXBlUHJvbWlzZSlcbiAgY2FuT3BlblVSTCh1cmw6IHN0cmluZywgcmVzb2x2ZUlkOiBudW1iZXIsIHJlamVjdElkOiBudW1iZXIpIHtcbiAgICB0aGlzLmJyaWRnZS5jYWxsYmFja0Zyb21JZChyZXNvbHZlSWQpKHRydWUpO1xuICB9XG5cbiAgQFJDVF9FWFBPUlRfTUVUSE9EKFJDVEZ1bmN0aW9uVHlwZVByb21pc2UpXG4gIGdldEluaXRpYWxVUkwocmVzb2x2ZUlkOiBudW1iZXIsIHJlamVjdElkOiBudW1iZXIpIHtcbiAgICB0aGlzLmJyaWRnZS5jYWxsYmFja0Zyb21JZChyZXNvbHZlSWQpKGluaXRpYWxVUkwpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJDVExpbmtpbmdNYW5hZ2VyO1xuIl19