Object.defineProperty(exports,"__esModule",{value:true});var _toConsumableArray2=require("babel-runtime/helpers/toConsumableArray");var _toConsumableArray3=_interopRequireDefault(_toConsumableArray2);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _RCTAnimationDriver=require("./RCTAnimationDriver");var _RCTAnimationUtils=require("./../RCTAnimationUtils");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var RCTFrameAnimation=function(){function RCTFrameAnimation(animationId,config,valueNode,callback){(0,_classCallCheck3.default)(this,RCTFrameAnimation);this.animationId=animationId;this.toValue=config.toValue!=null?config.toValue:1;this.fromValue=valueNode.value;this.valueNode=valueNode;this.frames=[].concat((0,_toConsumableArray3.default)(config.frames));this.callback=callback;this.iterations=config.iterations!=null?config.iterations:1;this.currentLoop=1;this.animationHasBegun=false;this.animationHasFinished=this.iterations===0;return this;}(0,_createClass3.default)(RCTFrameAnimation,[{key:"startAnimation",value:function startAnimation(){this.animationStartTime=this.animationCurrentTIme=-1;this.animationHasBegun=true;}},{key:"stopAnimation",value:function stopAnimation(){if(this.callback){this.callback({finished:this.animationHasFinished});}}},{key:"stepAnimationWithTime",value:function stepAnimationWithTime(currentTime){if(!this.animationHasBegun||this.animationHasFinished||this.frames.length===0){return;}if(this.animationStartTime===-1){this.animationStartTime=this.animationCurrentTIme=currentTime;}this.animationCurrentTIme=currentTime;var currentDuration=this.animationCurrentTIme-this.animationStartTime;var startIndex=Math.floor(currentDuration/_RCTAnimationDriver.RCTSingleFrameInterval);var nextIndex=startIndex+1;if(nextIndex>=this.frames.length){if(this.iterations==-1||this.currentLoop<this.iterations){this.animationStartTime=currentTime;this.currentLoop++;var firstValue=this.frames[0];this.updateOutputWithFrameOutput(firstValue);}else{this.animationHasFinished=true;var finalValue=this.frames[this.frames.length-1];this.updateOutputWithFrameOutput(finalValue);}return;}var fromFrameValue=this.frames[startIndex];var toFrameValue=this.frames[nextIndex];var fromInterval=startIndex*_RCTAnimationDriver.RCTSingleFrameInterval;var toInterval=nextIndex*_RCTAnimationDriver.RCTSingleFrameInterval;var frameOutput=(0,_RCTAnimationUtils.RCTInterpolateValue)(currentDuration,fromInterval,toInterval,fromFrameValue,toFrameValue,"extend","extend");this.updateOutputWithFrameOutput(frameOutput);}},{key:"updateOutputWithFrameOutput",value:function updateOutputWithFrameOutput(frameOutput){var outputValue=(0,_RCTAnimationUtils.RCTInterpolateValue)(frameOutput,0,1,this.fromValue,this.toValue,"extend","extend");var valueNode=this.valueNode;if(valueNode){valueNode.value=outputValue;valueNode.setNeedsUpdate();}}}]);return RCTFrameAnimation;}();exports.default=RCTFrameAnimation;
//# sourceMappingURL=RCTFrameAnimation.js.map