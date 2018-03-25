Object.defineProperty(exports,"__esModule",{value:true});var _slicedToArray2=require("babel-runtime/helpers/slicedToArray");var _slicedToArray3=_interopRequireDefault(_slicedToArray2);var _extends2=require("babel-runtime/helpers/extends");var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _dec,_dec2,_dec3,_class,_desc,_value,_class2;var _RCTBridge=require("./../bridge/RCTBridge");var _RCTBridge2=_interopRequireDefault(_RCTBridge);var _NotificationCenter=require("./../base/NotificationCenter");var _NotificationCenter2=_interopRequireDefault(_NotificationCenter);var _RCTSharedTextValues=require("./../views/Text/RCTSharedTextValues");var _ColorArrayFromHexARGB=require("./../utils/ColorArrayFromHexARGB");var _ColorArrayFromHexARGB2=_interopRequireDefault(_ColorArrayFromHexARGB);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var RCTDevLoadingView=(_dec=(0,_RCTBridge.RCT_EXPORT_MODULE)("RCTDevLoadingView"),_dec2=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec3=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec(_class=(_class2=function(){function RCTDevLoadingView(bridge){(0,_classCallCheck3.default)(this,RCTDevLoadingView);this.bridge=bridge;this.initView();_NotificationCenter2.default.addListener("RCTJavaScriptDidLoadNotification",this.hide.bind(this));if(this.bridge.loading){this.showWithURL(new URL(bridge.bundleLocation));}}(0,_createClass3.default)(RCTDevLoadingView,[{key:"initView",value:function initView(){this.view=document.createElement("div");(0,_extends3.default)(this.view.style,{width:"100%",height:"22px",fontFamily:_RCTSharedTextValues.defaultFontStack,fontSize:"12px",display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",zIndex:"99999",top:"0",left:"0",transition:"transform 0.1s",transform:"translateY(-22px)",overflow:"hidden"});if(document.body){document.body.appendChild(this.view);}}},{key:"updateView",value:function updateView(){this.view.innerText=this.message;(0,_extends3.default)(this.view.style,{color:this.color,backgroundColor:this.backgroundColor,transform:this.hidden?"translateY(-22px)":"translateY(0px)"});}},{key:"showMessage",value:function showMessage(message,color,backgroundColor){this.message=message;if(typeof color==="number"){var _ColorArrayFromHexARG=(0,_ColorArrayFromHexARGB2.default)(color),_ColorArrayFromHexARG2=(0,_slicedToArray3.default)(_ColorArrayFromHexARG,4),a=_ColorArrayFromHexARG2[0],r=_ColorArrayFromHexARG2[1],g=_ColorArrayFromHexARG2[2],b=_ColorArrayFromHexARG2[3];var stringValue="rgba("+r+","+g+","+b+","+a+")";this.color=stringValue;}else{this.color=color;}if(typeof backgroundColor==="number"){var _ColorArrayFromHexARG3=(0,_ColorArrayFromHexARGB2.default)(backgroundColor),_ColorArrayFromHexARG4=(0,_slicedToArray3.default)(_ColorArrayFromHexARG3,4),_a=_ColorArrayFromHexARG4[0],_r=_ColorArrayFromHexARG4[1],_g=_ColorArrayFromHexARG4[2],_b=_ColorArrayFromHexARG4[3];var _stringValue="rgba("+_r+","+_g+","+_b+","+_a+")";this.backgroundColor=_stringValue;}else{this.backgroundColor=backgroundColor;}this.hidden=false;this.updateView();}},{key:"hide",value:function hide(){this.hidden=true;this.updateView();}},{key:"updateProgress",value:function updateProgress(_ref){var done=_ref.done,total=_ref.total;var color="white";var backgroundColor="#005900";var message="Loading "+(done/total*100).toFixed(0)+"% ("+done+"/"+total+")";this.showMessage(message,color,backgroundColor);}},{key:"showWithURL",value:function showWithURL(url){var color="white";var backgroundColor="#005900";var message="Loading from "+url.href+"...";this.showMessage(message,color,backgroundColor);}}]);return RCTDevLoadingView;}(),(_applyDecoratedDescriptor(_class2.prototype,"showMessage",[_dec2],Object.getOwnPropertyDescriptor(_class2.prototype,"showMessage"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"hide",[_dec3],Object.getOwnPropertyDescriptor(_class2.prototype,"hide"),_class2.prototype)),_class2))||_class);exports.default=RCTDevLoadingView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL1JlYWN0RG9tL0RldlN1cHBvcnQvUkNURGV2TG9hZGluZ1ZpZXcuanMiXSwibmFtZXMiOlsiUkNURGV2TG9hZGluZ1ZpZXciLCJicmlkZ2UiLCJpbml0VmlldyIsImFkZExpc3RlbmVyIiwiaGlkZSIsImJpbmQiLCJsb2FkaW5nIiwic2hvd1dpdGhVUkwiLCJVUkwiLCJidW5kbGVMb2NhdGlvbiIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwiekluZGV4IiwidG9wIiwibGVmdCIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJvdmVyZmxvdyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImlubmVyVGV4dCIsIm1lc3NhZ2UiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImhpZGRlbiIsImEiLCJyIiwiZyIsImIiLCJzdHJpbmdWYWx1ZSIsInVwZGF0ZVZpZXciLCJkb25lIiwidG90YWwiLCJ0b0ZpeGVkIiwic2hvd01lc3NhZ2UiLCJ1cmwiLCJocmVmIl0sIm1hcHBpbmdzIjoiMGtCQUtBLGdELG1EQUtBLGdFLHFFQUNBLHdFQUNBLHVFLHF6QkFHTUEsa0IsT0FETCxpQ0FBa0IsbUJBQWxCLEMsT0F3REUsa0UsT0E0QkEsa0UsaUNBM0VELDJCQUFZQyxNQUFaLENBQStCLHNEQUM3QixLQUFLQSxNQUFMLENBQWNBLE1BQWQsQ0FFQSxLQUFLQyxRQUFMLEdBRUEsNkJBQW1CQyxXQUFuQixDQUNFLGtDQURGLENBRUUsS0FBS0MsSUFBTCxDQUFVQyxJQUFWLENBQWUsSUFBZixDQUZGLEVBS0EsR0FBSSxLQUFLSixNQUFMLENBQVlLLE9BQWhCLENBQXlCLENBQ3ZCLEtBQUtDLFdBQUwsQ0FBaUIsR0FBSUMsSUFBSixDQUFRUCxPQUFPUSxjQUFmLENBQWpCLEVB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IjoiUkNURGV2TG9hZGluZ1ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwcm92aWRlc01vZHVsZSBSQ1REZXZMb2FkaW5nVmlld1xuICogQGZsb3dcbiAqL1xuXG5pbXBvcnQgUkNUQnJpZGdlLCB7XG4gIFJDVF9FWFBPUlRfTU9EVUxFLFxuICBSQ1RfRVhQT1JUX01FVEhPRCxcbiAgUkNURnVuY3Rpb25UeXBlTm9ybWFsXG59IGZyb20gXCJSQ1RCcmlkZ2VcIjtcbmltcG9ydCBOb3RpZmljYXRpb25DZW50ZXIgZnJvbSBcIk5vdGlmaWNhdGlvbkNlbnRlclwiO1xuaW1wb3J0IHsgZGVmYXVsdEZvbnRTdGFjayB9IGZyb20gXCJSQ1RTaGFyZWRUZXh0VmFsdWVzXCI7XG5pbXBvcnQgQ29sb3JBcnJheUZyb21IZXhBUkdCIGZyb20gXCJDb2xvckFycmF5RnJvbUhleEFSR0JcIjtcblxuQFJDVF9FWFBPUlRfTU9EVUxFKFwiUkNURGV2TG9hZGluZ1ZpZXdcIilcbmNsYXNzIFJDVERldkxvYWRpbmdWaWV3IHtcbiAgYnJpZGdlOiBSQ1RCcmlkZ2U7XG4gIGhpZGRlbjogYm9vbGVhbjtcbiAgY29sb3I6IHN0cmluZztcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdmlldzogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoYnJpZGdlOiBSQ1RCcmlkZ2UpIHtcbiAgICB0aGlzLmJyaWRnZSA9IGJyaWRnZTtcblxuICAgIHRoaXMuaW5pdFZpZXcoKTtcblxuICAgIE5vdGlmaWNhdGlvbkNlbnRlci5hZGRMaXN0ZW5lcihcbiAgICAgIFwiUkNUSmF2YVNjcmlwdERpZExvYWROb3RpZmljYXRpb25cIixcbiAgICAgIHRoaXMuaGlkZS5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIGlmICh0aGlzLmJyaWRnZS5sb2FkaW5nKSB7XG4gICAgICB0aGlzLnNob3dXaXRoVVJMKG5ldyBVUkwoYnJpZGdlLmJ1bmRsZUxvY2F0aW9uKSk7XG4gICAgfVxuICB9XG5cbiAgaW5pdFZpZXcoKSB7XG4gICAgdGhpcy52aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMudmlldy5zdHlsZSwge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjIycHhcIixcbiAgICAgIGZvbnRGYW1pbHk6IGRlZmF1bHRGb250U3RhY2ssXG4gICAgICBmb250U2l6ZTogXCIxMnB4XCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICB6SW5kZXg6IFwiOTk5OTlcIixcbiAgICAgIHRvcDogXCIwXCIsXG4gICAgICBsZWZ0OiBcIjBcIixcbiAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuMXNcIixcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC0yMnB4KVwiLFxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCJcbiAgICB9KTtcbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnZpZXcpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZpZXcoKSB7XG4gICAgdGhpcy52aWV3LmlubmVyVGV4dCA9IHRoaXMubWVzc2FnZTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMudmlldy5zdHlsZSwge1xuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgdHJhbnNmb3JtOiB0aGlzLmhpZGRlbiA/IFwidHJhbnNsYXRlWSgtMjJweClcIiA6IFwidHJhbnNsYXRlWSgwcHgpXCJcbiAgICB9KTtcbiAgfVxuXG4gIEBSQ1RfRVhQT1JUX01FVEhPRChSQ1RGdW5jdGlvblR5cGVOb3JtYWwpXG4gIHNob3dNZXNzYWdlKFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBjb2xvcjogc3RyaW5nIHwgbnVtYmVyLFxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nIHwgbnVtYmVyXG4gICkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSBcIm51bWJlclwiKSB7XG4gICAgICBjb25zdCBbYSwgciwgZywgYl0gPSBDb2xvckFycmF5RnJvbUhleEFSR0IoY29sb3IpO1xuICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBgcmdiYSgke3J9LCR7Z30sJHtifSwke2F9KWA7XG4gICAgICB0aGlzLmNvbG9yID0gc3RyaW5nVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGJhY2tncm91bmRDb2xvciA9PT0gXCJudW1iZXJcIikge1xuICAgICAgY29uc3QgW2EsIHIsIGcsIGJdID0gQ29sb3JBcnJheUZyb21IZXhBUkdCKGJhY2tncm91bmRDb2xvcik7XG4gICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IGByZ2JhKCR7cn0sJHtnfSwke2J9LCR7YX0pYDtcbiAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gc3RyaW5nVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuICAgIH1cblxuICAgIHRoaXMuaGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBAUkNUX0VYUE9SVF9NRVRIT0QoUkNURnVuY3Rpb25UeXBlTm9ybWFsKVxuICBoaWRlKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiRGV2TG9hZGluZ1ZpZXcuaGlkZVwiKTtcbiAgICB0aGlzLmhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICB1cGRhdGVQcm9ncmVzcyh7IGRvbmUsIHRvdGFsIH06IHsgZG9uZTogbnVtYmVyLCB0b3RhbDogbnVtYmVyIH0pIHtcbiAgICBjb25zdCBjb2xvciA9IFwid2hpdGVcIjtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDU5MDBcIjtcbiAgICBjb25zdCBtZXNzYWdlID0gYExvYWRpbmcgJHsoZG9uZSAvIHRvdGFsICogMTAwKS50b0ZpeGVkKFxuICAgICAgMFxuICAgICl9JSAoJHtkb25lfS8ke3RvdGFsfSlgO1xuICAgIHRoaXMuc2hvd01lc3NhZ2UobWVzc2FnZSwgY29sb3IsIGJhY2tncm91bmRDb2xvcik7XG4gIH1cblxuICBzaG93V2l0aFVSTCh1cmw6IFVSTCkge1xuICAgIGNvbnN0IGNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IFwiIzAwNTkwMFwiO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgTG9hZGluZyBmcm9tICR7dXJsLmhyZWZ9Li4uYDtcbiAgICB0aGlzLnNob3dNZXNzYWdlKG1lc3NhZ2UsIGNvbG9yLCBiYWNrZ3JvdW5kQ29sb3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJDVERldkxvYWRpbmdWaWV3O1xuIl19