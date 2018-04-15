Object.defineProperty(exports,"__esModule",{value:true});var _toConsumableArray2=require("babel-runtime/helpers/toConsumableArray");var _toConsumableArray3=_interopRequireDefault(_toConsumableArray2);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _dec,_dec2,_dec3,_dec4,_dec5,_dec6,_dec7,_dec8,_dec9,_dec10,_dec11,_dec12,_dec13,_dec14,_dec15,_dec16,_dec17,_class,_desc,_value,_class2;var _Invariant=require("./../../utils/Invariant");var _Invariant2=_interopRequireDefault(_Invariant);var _RCTNativeAnimatedNodesManager=require("./RCTNativeAnimatedNodesManager");var _RCTNativeAnimatedNodesManager2=_interopRequireDefault(_RCTNativeAnimatedNodesManager);var _RCTBridge=require("./../../bridge/RCTBridge");var _RCTEventEmitter2=require("./../RCTEventEmitter");var _RCTEventEmitter3=_interopRequireDefault(_RCTEventEmitter2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var RCTNativeAnimatedModule=(_dec=(0,_RCTBridge.RCT_EXPORT_MODULE)("RCTNativeAnimatedModule"),_dec2=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec3=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec4=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec5=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec6=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec7=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec8=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec9=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec10=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec11=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec12=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec13=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec14=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec15=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec16=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec17=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec(_class=(_class2=function(_RCTEventEmitter){(0,_inherits3.default)(RCTNativeAnimatedModule,_RCTEventEmitter);function RCTNativeAnimatedModule(bridge){(0,_classCallCheck3.default)(this,RCTNativeAnimatedModule);var _this=(0,_possibleConstructorReturn3.default)(this,(RCTNativeAnimatedModule.__proto__||Object.getPrototypeOf(RCTNativeAnimatedModule)).call(this,bridge));_this.uiManagerWillFlushBlocks=function(uiManager){if(_this.preOperations.length===0&&_this.operations.length===0){return;}var preOperations=[].concat((0,_toConsumableArray3.default)(_this.preOperations));_this.preOperations=[];var operations=[].concat((0,_toConsumableArray3.default)(_this.operations));_this.operations=[];uiManager.prependUIBlock(function(){for(var _iterator=preOperations,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==="function"?typeof Symbol==="function"?Symbol.iterator:"@@iterator":"@@iterator"]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var operation=_ref;operation(_this.nodesManager);}});uiManager.addUIBlock(function(){for(var _iterator2=operations,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==="function"?typeof Symbol==="function"?Symbol.iterator:"@@iterator":"@@iterator"]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var operation=_ref2;operation(_this.nodesManager);}_this.nodesManager.updateAnimations();});};_this.bridge=bridge;_this.nodesManager=new _RCTNativeAnimatedNodesManager2.default(_this.bridge.uiManager);_this.operations=[];_this.preOperations=[];_this.bridge.eventDispatcher.addDispatchObserver(_this);_this.bridge.uiManager.observerCoordinator.addObserver(_this);return _this;}(0,_createClass3.default)(RCTNativeAnimatedModule,[{key:"createAnimatedNode",value:function createAnimatedNode(tag,config){this.addOperationBlock(function(nodesManager){nodesManager.createAnimatedNode(tag,config);});}},{key:"connectAnimatedNodes",value:function connectAnimatedNodes(parentTag,childTag){this.addOperationBlock(function(nodesManager){nodesManager.connectAnimatedNodes(parentTag,childTag);});}},{key:"disconnectAnimatedNodes",value:function disconnectAnimatedNodes(parentTag,childTag){this.addOperationBlock(function(nodesManager){nodesManager.disconnectAnimatedNodes(parentTag,childTag);});}},{key:"startAnimatingNode",value:function startAnimatingNode(animationId,nodeTag,config,endCallbackId){var endCallback=this.bridge.callbackFromId(endCallbackId);this.addOperationBlock(function(nodesManager){nodesManager.startAnimatingNode(animationId,nodeTag,config,endCallback);});}},{key:"stopAnimation",value:function stopAnimation(animationId){this.addOperationBlock(function(nodesManager){nodesManager.stopAnimation(animationId);});}},{key:"setAnimatedNodeValue",value:function setAnimatedNodeValue(nodeTag,value){this.addOperationBlock(function(nodesManager){nodesManager.setAnimatedNodeValue(nodeTag,value);});}},{key:"setAnimatedNodeOffset",value:function setAnimatedNodeOffset(nodeTag,offset){this.addOperationBlock(function(nodesManager){nodesManager.setAnimatedNodeOffset(nodeTag,offset);});}},{key:"flattenAnimatedNodeOffset",value:function flattenAnimatedNodeOffset(nodeTag){this.addOperationBlock(function(nodesManager){nodesManager.flattenAnimatedNodeOffset(nodeTag);});}},{key:"extractAnimatedNodeOffset",value:function extractAnimatedNodeOffset(nodeTag){this.addOperationBlock(function(nodesManager){nodesManager.extractAnimatedNodeOffset(nodeTag);});}},{key:"connectAnimatedNodeToView",value:function connectAnimatedNodeToView(nodeTag,viewTag){var viewName=this.bridge.uiManager.viewNameForReactTag(viewTag);(0,_Invariant2.default)(viewName,"No such viewName for react tag "+viewTag);this.addOperationBlock(function(nodesManager){nodesManager.connectAnimatedNodeToView(nodeTag,viewTag,viewName);});}},{key:"disconnectAnimatedNodeFromView",value:function disconnectAnimatedNodeFromView(nodeTag,viewTag){this.addPreOperationBlock(function(nodesManager){nodesManager.disconnectAnimatedNodeFromView(nodeTag,viewTag);});}},{key:"dropAnimatedNode",value:function dropAnimatedNode(tag){this.addOperationBlock(function(nodesManager){nodesManager.dropAnimatedNode(tag);});}},{key:"startListeningToAnimatedNodeValue",value:function startListeningToAnimatedNodeValue(tag){var _this2=this;var valueObserver=this;this.addOperationBlock(function(nodesManager){_this2.addListener("onAnimatedValueUpdate");nodesManager.startListeningToAnimatedNodeValue(tag,valueObserver);});}},{key:"stopListeningToAnimatedNodeValue",value:function stopListeningToAnimatedNodeValue(tag){var _this3=this;this.addOperationBlock(function(nodesManager){_this3.removeListener("onAnimatedValueUpdate");nodesManager.stopListeningToAnimatedNodeValue(tag);});}},{key:"addAnimatedEventToView",value:function addAnimatedEventToView(viewTag,eventName,eventMapping){this.addOperationBlock(function(nodesManager){nodesManager.addAnimatedEventToView(viewTag,eventName,eventMapping);});}},{key:"removeAnimatedEventFromView",value:function removeAnimatedEventFromView(viewTag,eventName,animatedNodeTag){this.addOperationBlock(function(nodesManager){nodesManager.removeAnimatedEventFromView(viewTag,eventName,animatedNodeTag);});}},{key:"addOperationBlock",value:function addOperationBlock(operation){this.operations.push(operation);}},{key:"addPreOperationBlock",value:function addPreOperationBlock(operation){this.preOperations.push(operation);}},{key:"supportedEvents",value:function supportedEvents(){return["onAnimatedValueUpdate"];}},{key:"animatedNodeDidUpdateValue",value:function animatedNodeDidUpdateValue(node,value){this.sendEventWithName("onAnimatedValueUpdate",{tag:node.nodeTag,value:value});}},{key:"eventDispatcherWillDispatchEvent",value:function eventDispatcherWillDispatchEvent(event){this.nodesManager.handleAnimatedEvent(event);}}]);return RCTNativeAnimatedModule;}(_RCTEventEmitter3.default),(_applyDecoratedDescriptor(_class2.prototype,"createAnimatedNode",[_dec2],Object.getOwnPropertyDescriptor(_class2.prototype,"createAnimatedNode"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"connectAnimatedNodes",[_dec3],Object.getOwnPropertyDescriptor(_class2.prototype,"connectAnimatedNodes"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"disconnectAnimatedNodes",[_dec4],Object.getOwnPropertyDescriptor(_class2.prototype,"disconnectAnimatedNodes"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"startAnimatingNode",[_dec5],Object.getOwnPropertyDescriptor(_class2.prototype,"startAnimatingNode"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"stopAnimation",[_dec6],Object.getOwnPropertyDescriptor(_class2.prototype,"stopAnimation"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"setAnimatedNodeValue",[_dec7],Object.getOwnPropertyDescriptor(_class2.prototype,"setAnimatedNodeValue"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"setAnimatedNodeOffset",[_dec8],Object.getOwnPropertyDescriptor(_class2.prototype,"setAnimatedNodeOffset"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"flattenAnimatedNodeOffset",[_dec9],Object.getOwnPropertyDescriptor(_class2.prototype,"flattenAnimatedNodeOffset"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"extractAnimatedNodeOffset",[_dec10],Object.getOwnPropertyDescriptor(_class2.prototype,"extractAnimatedNodeOffset"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"connectAnimatedNodeToView",[_dec11],Object.getOwnPropertyDescriptor(_class2.prototype,"connectAnimatedNodeToView"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"disconnectAnimatedNodeFromView",[_dec12],Object.getOwnPropertyDescriptor(_class2.prototype,"disconnectAnimatedNodeFromView"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"dropAnimatedNode",[_dec13],Object.getOwnPropertyDescriptor(_class2.prototype,"dropAnimatedNode"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"startListeningToAnimatedNodeValue",[_dec14],Object.getOwnPropertyDescriptor(_class2.prototype,"startListeningToAnimatedNodeValue"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"stopListeningToAnimatedNodeValue",[_dec15],Object.getOwnPropertyDescriptor(_class2.prototype,"stopListeningToAnimatedNodeValue"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"addAnimatedEventToView",[_dec16],Object.getOwnPropertyDescriptor(_class2.prototype,"addAnimatedEventToView"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"removeAnimatedEventFromView",[_dec17],Object.getOwnPropertyDescriptor(_class2.prototype,"removeAnimatedEventFromView"),_class2.prototype)),_class2))||_class);exports.default=RCTNativeAnimatedModule;
//# sourceMappingURL=RCTNativeAnimatedModule.js.map