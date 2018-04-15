Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _dec,_class;var _RCTBridge=require("./../../bridge/RCTBridge");var _RCTBridge2=_interopRequireDefault(_RCTBridge);var _RedBoxView=require("./RedBoxView");var _RedBoxView2=_interopRequireDefault(_RedBoxView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getFileName(path){return path.split("\\").pop().split("/").pop();}var RCTRedBox=(_dec=(0,_RCTBridge.RCT_EXPORT_MODULE)("RCTRedBox"),_dec(_class=function(){function RCTRedBox(bridge){var _this=this;(0,_classCallCheck3.default)(this,RCTRedBox);this.dismiss=function(){while(_this.domRoot.firstChild){_this.domRoot.removeChild(_this.domRoot.firstChild);}};this.reload=function(){window.location.reload(true);};this.copy=function(){var fullStackTrace="";if(_this._lastErrorMessage!=null){fullStackTrace+=_this._lastErrorMessage;fullStackTrace+="\n\n";}if(_this._lastStackTrace){for(var _iterator=_this._lastStackTrace,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==="function"?typeof Symbol==="function"?Symbol.iterator:"@@iterator":"@@iterator"]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var frame=_ref;fullStackTrace+=frame.methodName+"\n";if(frame.file){fullStackTrace+="    "+_this.formatFrameSource(frame)+"\n";}}}var bundleURL=new URL(_this.bridge.bundleLocation);bundleURL.pathname="/copy-to-clipboard";bundleURL.search="";fetch(bundleURL,{method:"POST",body:fullStackTrace,headers:{"Content-Type":"text/plain"}});};this.openStackFrame=function(_ref2){var frame=_ref2.detail;var bundleURL=new URL(_this.bridge.bundleLocation);bundleURL.pathname="/open-stack-frame";bundleURL.search="";fetch(bundleURL,{method:"POST",body:JSON.stringify(frame),headers:{"Content-Type":"application/json"}});};this.bridge=bridge;this.domRoot=document.createElement("div");this.domRoot.setAttribute("id","redbox");if(document.documentElement){document.documentElement.appendChild(this.domRoot);}}(0,_createClass3.default)(RCTRedBox,[{key:"formatFrameSource",value:function formatFrameSource(frame){var fileName=function(){if(frame.file){var name=getFileName(frame.file);if(name)return name;}return"<unknown file>";}();var lineInfo=fileName+":"+frame.lineNumber;if(frame.column!==0){lineInfo+=":"+frame.column;}return lineInfo;}},{key:"updateError",value:function updateError(message,stack){var currentBox=this.currentBox;if(currentBox){currentBox.message=message;currentBox.stack=stack;}this._lastErrorMessage=message;this._lastStackTrace=stack;}},{key:"showErrorMessage",value:function showErrorMessage(message,stack){var redBox=new _RedBoxView2.default();this.currentBox=redBox;redBox.message=message;redBox.stack=stack;this._lastErrorMessage=message;this._lastStackTrace=stack;redBox.addEventListener("dismiss",this.dismiss);redBox.addEventListener("reload",this.reload);redBox.addEventListener("copy",this.copy);redBox.addEventListener("stackframe",this.openStackFrame);this.domRoot.appendChild(redBox);}}]);return RCTRedBox;}())||_class);exports.default=RCTRedBox;
//# sourceMappingURL=RCTRedBox.js.map