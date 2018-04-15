Object.defineProperty(exports,"__esModule",{value:true});var _taggedTemplateLiteral2=require("babel-runtime/helpers/taggedTemplateLiteral");var _taggedTemplateLiteral3=_interopRequireDefault(_taggedTemplateLiteral2);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _templateObject=(0,_taggedTemplateLiteral3.default)(["\n      <style>\n        :host {\n          display: contents;\n        }\n        .redbox {\n          box-sizing: border-box;\n          font-family: Arial, sans-serif;\n          position: fixed;\n          top: 0px;\n          left: 0px;\n          right: 0px;\n          bottom: 0px;\n          background: rgb(204, 0, 0);\n          color: white;\n          z-index: 2147483647;\n          text-align: left;\n          font-size: 16px;\n          line-height: 1.2;\n          display: flex;\n          flex-direction: column;\n          align-items: stretch;\n          justify-content: flex-start;\n          overflow: hidden;\n        }\n        .error {\n          padding-top: 20px;\n          padding-left: 20px;\n          padding-right: 20px;\n          padding-bottom: 10px;\n          overflow: auto;\n          flex: 1;\n        }\n        .message {\n          margin-top: 10px;\n          font-size: 1.2em;\n          white-space: pre-wrap;\n        }\n        .stack {\n          flex: 1;\n          margin-top: 2em;\n          display: flex;\n          flex-direction: column;\n        }\n        .frame {\n          cursor: pointer;\n          font-family: monospace;\n          display: block;\n          font-size: 1em;\n          color: white;\n          text-align: left;\n          padding-top: 1em;\n          padding-bottom: 1em;\n          background: none;\n          border: none;\n          transition: opacity 0.2s;\n          flex-shrink: 0;\n        }\n        .frame:active {\n          opacity: 0.4;\n        }\n        .file {\n          font-size: 0.8em;\n          color: rgba(255, 255, 255, 0.7);\n          word-break: break-all;\n        }\n        .buttons {\n          height: 60px;\n          display: flex;\n          flex-direction: row;\n          align-items: stretch;\n        }\n        .button {\n          cursor: pointer;\n          font-size: 1em;\n          background: none;\n          border: none;\n          color: rgba(255, 255, 255, 0.7);\n          flex: 1;\n        }\n        .button:active {\n          color: rgba(255, 255, 255, 1.0);\n        }\n      </style>\n      <div class=\"redbox\">\n        <div class=\"error\">\n          <div class=\"message\">","</div>\n          <div class=\"stack\">\n            ","\n          </div>\n        </div>\n        <div class=\"buttons\">\n          <button onclick="," class=\"button\">Dismiss</button>\n          <button onclick="," class=\"button\">Reload JS</button>\n          <button onclick="," class=\"button\">Copy</button>\n        </div>\n      </div>\n    "],["\n      <style>\n        :host {\n          display: contents;\n        }\n        .redbox {\n          box-sizing: border-box;\n          font-family: Arial, sans-serif;\n          position: fixed;\n          top: 0px;\n          left: 0px;\n          right: 0px;\n          bottom: 0px;\n          background: rgb(204, 0, 0);\n          color: white;\n          z-index: 2147483647;\n          text-align: left;\n          font-size: 16px;\n          line-height: 1.2;\n          display: flex;\n          flex-direction: column;\n          align-items: stretch;\n          justify-content: flex-start;\n          overflow: hidden;\n        }\n        .error {\n          padding-top: 20px;\n          padding-left: 20px;\n          padding-right: 20px;\n          padding-bottom: 10px;\n          overflow: auto;\n          flex: 1;\n        }\n        .message {\n          margin-top: 10px;\n          font-size: 1.2em;\n          white-space: pre-wrap;\n        }\n        .stack {\n          flex: 1;\n          margin-top: 2em;\n          display: flex;\n          flex-direction: column;\n        }\n        .frame {\n          cursor: pointer;\n          font-family: monospace;\n          display: block;\n          font-size: 1em;\n          color: white;\n          text-align: left;\n          padding-top: 1em;\n          padding-bottom: 1em;\n          background: none;\n          border: none;\n          transition: opacity 0.2s;\n          flex-shrink: 0;\n        }\n        .frame:active {\n          opacity: 0.4;\n        }\n        .file {\n          font-size: 0.8em;\n          color: rgba(255, 255, 255, 0.7);\n          word-break: break-all;\n        }\n        .buttons {\n          height: 60px;\n          display: flex;\n          flex-direction: row;\n          align-items: stretch;\n        }\n        .button {\n          cursor: pointer;\n          font-size: 1em;\n          background: none;\n          border: none;\n          color: rgba(255, 255, 255, 0.7);\n          flex: 1;\n        }\n        .button:active {\n          color: rgba(255, 255, 255, 1.0);\n        }\n      </style>\n      <div class=\"redbox\">\n        <div class=\"error\">\n          <div class=\"message\">","</div>\n          <div class=\"stack\">\n            ","\n          </div>\n        </div>\n        <div class=\"buttons\">\n          <button onclick="," class=\"button\">Dismiss</button>\n          <button onclick="," class=\"button\">Reload JS</button>\n          <button onclick="," class=\"button\">Copy</button>\n        </div>\n      </div>\n    "]),_templateObject2=(0,_taggedTemplateLiteral3.default)(["\n                <button onclick="," class=\"frame\">\n                  <div>","</div>\n                  <div class=\"file\">\n                    ",":",":","\n                  </div>\n                </button>\n            "],["\n                <button onclick="," class=\"frame\">\n                  <div>","</div>\n                  <div class=\"file\">\n                    ",":",":","\n                  </div>\n                </button>\n            "]);var _esm=require("hyperhtml-element/esm");var _esm2=_interopRequireDefault(_esm);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var wire=_esm2.default.wire;var RedBoxView=function(_HyperHTMLElement){(0,_inherits3.default)(RedBoxView,_HyperHTMLElement);function RedBoxView(){(0,_classCallCheck3.default)(this,RedBoxView);var _this=(0,_possibleConstructorReturn3.default)(this,(RedBoxView.__proto__||Object.getPrototypeOf(RedBoxView)).call(this));_this.onDismiss=function(){_this.dispatchEvent(new Event("dismiss"));};_this.onReload=function(){_this.dispatchEvent(new Event("reload"));};_this.onCopy=function(){_this.dispatchEvent(new Event("copy"));};_this.onStackFrame=function(frame){_this.dispatchEvent(new CustomEvent("stackframe",{detail:frame}));};_this.attachShadow({mode:"open"});return _this;}(0,_createClass3.default)(RedBoxView,[{key:"render",value:function render(){var _this2=this;return this.html(_templateObject,this.state.message,this.state.stack.map(function(entry){return wire()(_templateObject2,function(){return _this2.onStackFrame(entry);},{text:entry.methodName},entry.file,entry.lineNumber,entry.column);}),this.onDismiss,this.onReload,this.onCopy);}},{key:"defaultState",get:function get(){return{message:"",stack:[]};}},{key:"message",set:function set(message){this.setState({message:message});}},{key:"stack",set:function set(stack){this.setState({stack:stack});}}]);return RedBoxView;}(_esm2.default);RedBoxView.define("rct-redbox");exports.default=RedBoxView;
//# sourceMappingURL=RedBoxView.js.map