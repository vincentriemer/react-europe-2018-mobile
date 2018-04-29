Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _Invariant=require("./../../utils/Invariant");var _Invariant2=_interopRequireDefault(_Invariant);var _RCTAnimatedNode=require("./Nodes/RCTAnimatedNode");var _RCTAnimatedNode2=_interopRequireDefault(_RCTAnimatedNode);var _RCTValueAnimatedNode=require("./Nodes/RCTValueAnimatedNode");var _RCTValueAnimatedNode2=_interopRequireDefault(_RCTValueAnimatedNode);var _RCTPropsAnimatedNode=require("./Nodes/RCTPropsAnimatedNode");var _RCTPropsAnimatedNode2=_interopRequireDefault(_RCTPropsAnimatedNode);var _RCTStyleAnimatedNode=require("./Nodes/RCTStyleAnimatedNode");var _RCTStyleAnimatedNode2=_interopRequireDefault(_RCTStyleAnimatedNode);var _RCTInterpolationAnimatedNode=require("./Nodes/RCTInterpolationAnimatedNode");var _RCTInterpolationAnimatedNode2=_interopRequireDefault(_RCTInterpolationAnimatedNode);var _RCTTransformAnimatedNode=require("./Nodes/RCTTransformAnimatedNode");var _RCTTransformAnimatedNode2=_interopRequireDefault(_RCTTransformAnimatedNode);var _RCTMultiplicationAnimatedNode=require("./Nodes/RCTMultiplicationAnimatedNode");var _RCTMultiplicationAnimatedNode2=_interopRequireDefault(_RCTMultiplicationAnimatedNode);var _RCTAdditionAnimatedNode=require("./Nodes/RCTAdditionAnimatedNode");var _RCTAdditionAnimatedNode2=_interopRequireDefault(_RCTAdditionAnimatedNode);var _RCTModuloAnimatedNode=require("./Nodes/RCTModuloAnimatedNode");var _RCTModuloAnimatedNode2=_interopRequireDefault(_RCTModuloAnimatedNode);var _RCTDivisionAnimatedNode=require("./Nodes/RCTDivisionAnimatedNode");var _RCTDivisionAnimatedNode2=_interopRequireDefault(_RCTDivisionAnimatedNode);var _RCTTrackingAnimatedNode=require("./Nodes/RCTTrackingAnimatedNode");var _RCTTrackingAnimatedNode2=_interopRequireDefault(_RCTTrackingAnimatedNode);var _RCTEventAnimation=require("./Drivers/RCTEventAnimation");var _RCTEventAnimation2=_interopRequireDefault(_RCTEventAnimation);var _RCTFrameAnimation=require("./Drivers/RCTFrameAnimation");var _RCTFrameAnimation2=_interopRequireDefault(_RCTFrameAnimation);var _RCTDecayAnimation=require("./Drivers/RCTDecayAnimation");var _RCTDecayAnimation2=_interopRequireDefault(_RCTDecayAnimation);var _RCTSpringAnimation=require("./Drivers/RCTSpringAnimation");var _RCTSpringAnimation2=_interopRequireDefault(_RCTSpringAnimation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var NODE_TYPE_MAP={style:_RCTStyleAnimatedNode2.default,value:_RCTValueAnimatedNode2.default,props:_RCTPropsAnimatedNode2.default,interpolation:_RCTInterpolationAnimatedNode2.default,transform:_RCTTransformAnimatedNode2.default,multiplication:_RCTMultiplicationAnimatedNode2.default,addition:_RCTAdditionAnimatedNode2.default,modulus:_RCTModuloAnimatedNode2.default,division:_RCTDivisionAnimatedNode2.default,tracking:_RCTTrackingAnimatedNode2.default};var DRIVER_TYPE_MAP={frames:_RCTFrameAnimation2.default,decay:_RCTDecayAnimation2.default,spring:_RCTSpringAnimation2.default};var RCTNativeAnimatedNodesManager=function(){function RCTNativeAnimatedNodesManager(uiManager){(0,_classCallCheck3.default)(this,RCTNativeAnimatedNodesManager);this.uiManager=uiManager;this.animationNodes={};this.eventDrivers={};this.activeAnimations=new Set();this.ticking=false;}(0,_createClass3.default)(RCTNativeAnimatedNodesManager,[{key:"createAnimatedNode",value:function createAnimatedNode(tag,config){var nodeType=config.type;var NodeClass=NODE_TYPE_MAP[nodeType];if(!NodeClass){console.error("Animated node type "+nodeType+" not supported natively");return;}var node=new NodeClass(tag,config);node.manager=this;this.animationNodes[tag]=node;node.setNeedsUpdate();}},{key:"connectAnimatedNodes",value:function connectAnimatedNodes(parentTag,childTag){var parentNode=this.animationNodes[parentTag];var childNode=this.animationNodes[childTag];(0,_Invariant2.default)(parentNode,"no such parent node with id "+parentTag);(0,_Invariant2.default)(childNode,"no such child node with id "+childTag);parentNode.addChild(childNode);childNode.setNeedsUpdate();}},{key:"disconnectAnimatedNodes",value:function disconnectAnimatedNodes(parentTag,childTag){var parentNode=this.animationNodes[parentTag];var childNode=this.animationNodes[childTag];(0,_Invariant2.default)(parentNode,"no such parent node with id "+parentTag);(0,_Invariant2.default)(childNode,"no such child node with id "+childTag);parentNode.removeChild(childNode);childNode.setNeedsUpdate();}},{key:"connectAnimatedNodeToView",value:function connectAnimatedNodeToView(nodeTag,viewTag,viewName){var node=this.animationNodes[nodeTag];if(node instanceof _RCTPropsAnimatedNode2.default){node.connectToView(viewTag,viewName,this.uiManager);}node.setNeedsUpdate();}},{key:"disconnectAnimatedNodeFromView",value:function disconnectAnimatedNodeFromView(nodeTag,viewTag){var node=this.animationNodes[nodeTag];if(node instanceof _RCTPropsAnimatedNode2.default){node.disconnectFromView(viewTag);}}},{key:"dropAnimatedNode",value:function dropAnimatedNode(tag){var node=this.animationNodes[tag];if(node){node.detachNode();delete this.animationNodes[tag];}}},{key:"setAnimatedNodeValue",value:function setAnimatedNodeValue(nodeTag,value){var node=this.animationNodes[nodeTag];if(!(node instanceof _RCTValueAnimatedNode2.default)){console.error("Not a value node.");return;}this.stopAnimationsForNode(node);node.value=value;node.setNeedsUpdate();}},{key:"setAnimatedNodeOffset",value:function setAnimatedNodeOffset(nodeTag,offset){var node=this.animationNodes[nodeTag];if(!(node instanceof _RCTValueAnimatedNode2.default)){console.error("Not a value node.");return;}node.offset=offset;node.setNeedsUpdate();}},{key:"flattenAnimatedNodeOffset",value:function flattenAnimatedNodeOffset(nodeTag){var node=this.animationNodes[nodeTag];if(!(node instanceof _RCTValueAnimatedNode2.default)){console.error("Not a value node.");return;}node.flattenOffset();}},{key:"extractAnimatedNodeOffset",value:function extractAnimatedNodeOffset(nodeTag){var node=this.animationNodes[nodeTag];if(!(node instanceof _RCTValueAnimatedNode2.default)){console.error("Not a value node.");return;}node.extractOffset();}},{key:"startAnimatingNode",value:function startAnimatingNode(animationId,nodeTag,config,endCallback){var valueNode=this.animationNodes[nodeTag];(0,_Invariant2.default)(valueNode instanceof _RCTValueAnimatedNode2.default,"Animation Node of id "+nodeTag+" is not a ValueAnimatedNode");var AnimationDriverClass=DRIVER_TYPE_MAP[config.type];if(AnimationDriverClass==null){console.error("Unsupported animation type: "+config.type);return;}var animationDriver=new AnimationDriverClass(animationId,config,valueNode,endCallback);this.activeAnimations.add(animationDriver);animationDriver.startAnimation();this.startAnimationLoopIfNeeded();}},{key:"stopAnimation",value:function stopAnimation(animationId){for(var _iterator=this.activeAnimations,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var driver=_ref;if(driver.animationId===animationId){driver.stopAnimation();this.activeAnimations.delete(driver);break;}}}},{key:"stopAnimationsForNode",value:function stopAnimationsForNode(node){var _this=this;var discarded=[];this.activeAnimations.forEach(function(driver){if(driver.valueNode===node){discarded.push(driver);}});discarded.forEach(function(driver){driver.stopAnimation();_this.activeAnimations.delete(driver);});}},{key:"addAnimatedEventToView",value:function addAnimatedEventToView(viewTag,eventName,eventMapping){var nodeTag=eventMapping.animatedValueTag;var node=this.animationNodes[nodeTag];if(!node){console.error("Animated node with tag "+nodeTag+" does not exist");return;}if(!(node instanceof _RCTValueAnimatedNode2.default)){console.error("Animated node connected to event should be of type RCTValueAnimatedNode");return;}var eventPath=eventMapping.nativeEventPath;var driver=new _RCTEventAnimation2.default(eventPath,node);var key=""+viewTag+eventName;if(this.eventDrivers[key]!=null){this.eventDrivers[key].push(driver);}else{this.eventDrivers[key]=[driver];}}},{key:"removeAnimatedEventFromView",value:function removeAnimatedEventFromView(viewTag,eventName,animatedNodeTag){var key=""+viewTag+eventName;if(this.eventDrivers[key]!=null){if(this.eventDrivers[key].length===1){delete this.eventDrivers[key];}else{var driversForKey=this.eventDrivers[key];for(var i=0;i<driversForKey.length;i++){if(driversForKey[i].valueNode.nodeTag===animatedNodeTag){this.eventDrivers[key].splice(i,1);break;}}}}}},{key:"handleAnimatedEvent",value:function handleAnimatedEvent(event){if(Object.keys(this.eventDrivers).length===0){return;}var key=""+event.viewTag+event.eventName;var driversForKey=this.eventDrivers[key];if(driversForKey){for(var _iterator2=driversForKey,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var driver=_ref2;this.stopAnimationsForNode(driver.valueNode);driver.updateWithEvent(event);}this.updateAnimations();}}},{key:"startListeningToAnimatedNodeValue",value:function startListeningToAnimatedNodeValue(tag,valueObserver){var node=this.animationNodes[tag];if(node instanceof _RCTValueAnimatedNode2.default){node.valueObserver=valueObserver;}}},{key:"stopListeningToAnimatedNodeValue",value:function stopListeningToAnimatedNodeValue(tag){var node=this.animationNodes[tag];if(node instanceof _RCTValueAnimatedNode2.default){node.valueObserver=null;}}},{key:"startAnimationLoopIfNeeded",value:function startAnimationLoopIfNeeded(){if(!this.ticking&&this.activeAnimations.size>0){window.requestAnimationFrame(this.stepAnimations.bind(this));this.ticking=true;}}},{key:"stepAnimations",value:function stepAnimations(timestamp){for(var _iterator3=this.activeAnimations,_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var _ref3;if(_isArray3){if(_i3>=_iterator3.length)break;_ref3=_iterator3[_i3++];}else{_i3=_iterator3.next();if(_i3.done)break;_ref3=_i3.value;}var animationDriver=_ref3;animationDriver.stepAnimationWithTime(timestamp);}this.updateAnimations();for(var _iterator4=this.activeAnimations,_isArray4=Array.isArray(_iterator4),_i4=0,_iterator4=_isArray4?_iterator4:_iterator4[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var _ref4;if(_isArray4){if(_i4>=_iterator4.length)break;_ref4=_iterator4[_i4++];}else{_i4=_iterator4.next();if(_i4.done)break;_ref4=_i4.value;}var _animationDriver=_ref4;if(_animationDriver.animationHasFinished){_animationDriver.stopAnimation();this.activeAnimations.delete(_animationDriver);}}this.stopAnimationLoopIfNeeded();}},{key:"stopAnimationLoopIfNeeded",value:function stopAnimationLoopIfNeeded(){this.ticking=false;if(this.activeAnimations.size!==0){this.startAnimationLoopIfNeeded();}}},{key:"updateAnimations",value:function updateAnimations(){Object.values(this.animationNodes).forEach(function(node){if(node.needsUpdate){node.updateNodeIfNecessary();}});}}]);return RCTNativeAnimatedNodesManager;}();exports.default=RCTNativeAnimatedNodesManager;
//# sourceMappingURL=RCTNativeAnimatedNodesManager.js.map