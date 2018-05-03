var _slicedToArray2=require("babel-runtime/helpers/slicedToArray");var _slicedToArray3=_interopRequireDefault(_slicedToArray2);var _regenerator=require("babel-runtime/regenerator");var _regenerator2=_interopRequireDefault(_regenerator);var _toConsumableArray2=require("babel-runtime/helpers/toConsumableArray");var _toConsumableArray3=_interopRequireDefault(_toConsumableArray2);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _this8=this;var _Invariant=require("./../utils/Invariant");var _Invariant2=_interopRequireDefault(_Invariant);var _RCTBridge=require("./../bridge/RCTBridge");var _RCTBridge2=_interopRequireDefault(_RCTBridge);var _UIView=require("./../base/UIView");var _UIView2=_interopRequireDefault(_UIView);var _RCTView=require("./../views/RCTView");var _RCTView2=_interopRequireDefault(_RCTView);var _RCTRootView=require("./../bridge/RCTRootView");var _RCTRootView2=_interopRequireDefault(_RCTRootView);var _RCTDeviceInfo=require("./RCTDeviceInfo");var _RCTDeviceInfo2=_interopRequireDefault(_RCTDeviceInfo);var _RCTLayoutAnimationManager=require("./LayoutAnimation/RCTLayoutAnimationManager");var _RCTLayoutAnimationManager2=_interopRequireDefault(_RCTLayoutAnimationManager);var _RCTUIManagerObserver=require("./RCTUIManagerObserver");var _RCTUIManagerObserver2=_interopRequireDefault(_RCTUIManagerObserver);var _RCTComponentData=require("./../views/RCTComponentData");var _RCTComponentData2=_interopRequireDefault(_RCTComponentData);var _CanUse=require("./../utils/CanUse");var _CanUse2=_interopRequireDefault(_CanUse);var _Instrument=require("./../utils/Instrument");var _Instrument2=_interopRequireDefault(_Instrument);var _RCTShadowView2=require("./../views/RCTShadowView");var _RCTShadowView3=_interopRequireDefault(_RCTShadowView2);var _RCTRootShadowView2=require("./../views/RCTRootShadowView");var _RCTRootShadowView3=_interopRequireDefault(_RCTRootShadowView2);var _RCTShadowText2=require("./../views/Text/RCTShadowText");var _RCTShadowText3=_interopRequireDefault(_RCTShadowText2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object['ke'+'ys'](descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object['define'+'Property'](target,property,desc);desc=null;}return desc;}var rootTagCounter=0;module.exports=function _callee(){var _dec,_dec2,_dec3,_dec4,_dec5,_dec6,_dec7,_dec8,_dec9,_dec10,_dec11,_dec12,_dec13,_dec14,_dec15,_class,_desc,_value,_class2;var RCTShadowView,RCTRootShadowView,RCTShadowText,RCTUIManager;return _regenerator2.default.async(function _callee$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return _regenerator2.default.awrap(_RCTShadowView3.default);case 2:RCTShadowView=_context4.sent;_context4.next=5;return _regenerator2.default.awrap(_RCTRootShadowView3.default);case 5:RCTRootShadowView=_context4.sent;_context4.next=8;return _regenerator2.default.awrap(_RCTShadowText3.default);case 8:RCTShadowText=_context4.sent;RCTUIManager=(_dec=(0,_RCTBridge.RCT_EXPORT_MODULE)("RCTUIManager"),_dec2=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec3=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec4=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec5=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec6=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec7=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec8=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec9=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec10=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec11=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec12=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec13=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec14=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec15=(0,_RCTBridge.RCT_EXPORT_METHOD)(_RCTBridge.RCTFunctionTypeNormal),_dec(_class=(_class2=function(){function RCTUIManager(bridge){var _this=this;(0,_classCallCheck3.default)(this,RCTUIManager);this.pendingUIBlocks=[];this.didUpdateDimensions=function(_ref){var _ref$window=_ref.window,width=_ref$window.width,height=_ref$window.height,scale=_ref$window.scale;var _loop=function _loop(rootViewTag){var rootView=_this.viewRegistry.get(rootViewTag);(0,_Invariant2.default)(rootView,"Root view must exist");(0,_Invariant2.default)(rootView instanceof _RCTRootView2.default,"View must be an RCTRootView");_this.addUIBlock(function(){_this.setAvailableSize({width:width,height:height},scale,rootView);});};for(var _iterator=_this.rootViewTags,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==="function"?typeof Symbol==="function"?typeof Symbol==="function"?Symbol.iterator:"@@iterator":"@@iterator":"@@iterator"]();;){var _ref2;if(_isArray){if(_i>=_iterator.length)break;_ref2=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref2=_i.value;}var rootViewTag=_ref2;_loop(rootViewTag);}_this.requestTick();};this.bridge=bridge;this.shadowViewRegistry=new Map();this.viewRegistry=new Map();this.rootViewTags=new Set();this.componentDataByName=new Map();this.bridge.moduleClasses.forEach(function(moduleClass){if(moduleClass.__isViewManager){var componentData=new _RCTComponentData2.default(moduleClass,_this.bridge);_this.componentDataByName.set(componentData.name,componentData);}});this.layoutAnimationManager=new _RCTLayoutAnimationManager2.default(this);this.observerCoordinator=new _RCTUIManagerObserver2.default();(0,_Invariant2.default)(this.bridge,"Bridge must be set");var deviceInfoModule=this.bridge.modulesByName["DeviceInfo"];deviceInfoModule.addListener("didUpdateDimensions",this.didUpdateDimensions);}(0,_createClass3.default)(RCTUIManager,[{key:"registerRootView",value:function registerRootView(rootView){var reactTag=rootView.reactTag;var availableSize=rootView.availableSize;this.viewRegistry.set(reactTag,rootView);var shadowView=new RCTRootShadowView();shadowView.availableSize=availableSize;shadowView.reactTag=reactTag;shadowView.viewName=rootView.constructor.name;var pixelRatio=this.bridge.deviceInfo.getDevicePixelRatio();shadowView.updatePointScaleFactor(pixelRatio);this.shadowViewRegistry.set(reactTag,shadowView);this.rootViewTags.add(reactTag);}},{key:"setAvailableSize",value:function setAvailableSize(size,scale,rootView){var _this2=this;this.pendingUIBlocks.push(function(){var reactTag=rootView.reactTag;var rootShadowView=_this2.shadowViewRegistry.get(reactTag);if(rootShadowView&&rootShadowView instanceof RCTRootShadowView)rootShadowView.updateAvailableSize(size)&&rootShadowView.updatePointScaleFactor(scale);});}},{key:"setLocalDataForView",value:function setLocalDataForView(localData,view){var tag=view.reactTag;var shadowView=this.shadowViewRegistry.get(tag);if(shadowView==null){console.warn("Could not locate shadow view with tag "+tag+", this is probably caused by a temporary inconsistency between native views and shadow views.");return;}shadowView.localData=localData;this.requestTick();}},{key:"rootViewForReactTag",value:function rootViewForReactTag(reactTag,completion){}},{key:"viewNameForReactTag",value:function viewNameForReactTag(reactTag){var shadowView=this.shadowViewRegistry.get(reactTag);(0,_Invariant2.default)(shadowView,"No such shadowView with id "+reactTag);return shadowView.viewName;}},{key:"purgeView",value:function purgeView(reactTag){var shadowView=this.shadowViewRegistry.get(reactTag);if(shadowView){!this.layoutAnimationManager.isPending()&&this.shadowViewRegistry.delete(reactTag);shadowView.purge();}if(this.layoutAnimationManager.isPending()){var view=this.viewRegistry.get(reactTag);if(view&&view.reactSuperview){view.reactSuperview.removeReactSubview(view);}this.layoutAnimationManager.queueRemovedNode(reactTag);}else{this.addUIBlock(function(uiManager,viewRegistry){var view=viewRegistry.get(reactTag);viewRegistry.delete(reactTag);if(view){view.purge();}});}}},{key:"frame",value:function frame(){var _this3=this;return _regenerator2.default.async(function frame$(_context){while(1){switch(_context.prev=_context.next){case 0:this.observerCoordinator.uiManagerWillPerformLayout(this);this.rootViewTags.forEach(function(rootTag){var rootShadowView=_this3.shadowViewRegistry.get(rootTag);if(rootShadowView!=null&&rootShadowView.isDirty){(0,_Invariant2.default)(rootShadowView instanceof RCTRootShadowView,"attempting to recalculate from shadowView that isn't root");var layoutChanges=(0,_Instrument2.default)("⚛️ Layout",function(){return rootShadowView.recalculateLayout();});if(_this3.layoutAnimationManager.isPending()){_this3.layoutAnimationManager.addLayoutChanges(layoutChanges);}else{_this3.applyLayoutChanges(layoutChanges);}}});this.observerCoordinator.uiManagerDidPerformLayout(this);if(this.layoutAnimationManager.isPending()){(0,_Instrument2.default)("⚛️ LayoutAnimation Construction",function(){_this3.layoutAnimationManager.applyLayoutChanges();});}this.observerCoordinator.uiManagerWillFlushBlocks(this);(0,_Instrument2.default)("⚛️ Style",function(){if(_this3.pendingUIBlocks.length>0){var uiBlocks=[].concat((0,_toConsumableArray3.default)(_this3.pendingUIBlocks));_this3.pendingUIBlocks=[];uiBlocks.forEach(function(block){block.call(null,_this3,_this3.viewRegistry);});_this3.requestTick();}});case 6:case"end":return _context.stop();}}},null,this);}},{key:"shouldContinue",value:function shouldContinue(){return this.pendingUIBlocks.length!==0;}},{key:"requestTick",value:function requestTick(){var _this4=this;this.rootViewTags.forEach(function(rootViewTag){var rootView=_this4.viewRegistry.get(rootViewTag);(0,_Invariant2.default)(rootView&&rootView instanceof _RCTRootView2.default,"RootView (with ID "+rootViewTag+") does not exist");rootView.requestTick();});}},{key:"applyLayoutChanges",value:function applyLayoutChanges(layoutChanges){var _this5=this;layoutChanges.forEach(function(layoutChange){var reactTag=layoutChange.reactTag,layout=layoutChange.layout;_this5.addUIBlock(function(uiManager,viewRegistry){var view=viewRegistry.get(reactTag);(0,_Invariant2.default)(view,"View with reactTag "+reactTag+" does not exist");view.frame=layout;});});}},{key:"measure",value:function measure(reactTag,callbackId){var _this6=this;return new Promise(function(resolve,reject){_this6.addUIBlock(function(){var shadowView=_this6.shadowViewRegistry.get(reactTag);var view=_this6.viewRegistry.get(reactTag);if(!shadowView||!shadowView.measurement){return;}var _shadowView$measureGl=shadowView.measureGlobal(),globalX=_shadowView$measureGl.globalX,globalY=_shadowView$measureGl.globalY;(0,_Invariant2.default)(shadowView.previousLayout,"Shadow view has no previous layout");var _shadowView$previousL=shadowView.previousLayout,left=_shadowView$previousL.left,top=_shadowView$previousL.top,width=_shadowView$previousL.width,height=_shadowView$previousL.height;if(callbackId!=null){_this6.bridge.callbackFromId(callbackId)(left,top,width,height,globalX,globalY);}else{resolve({left:left,top:top,width:width,height:height,globalX:globalX,globalY:globalY});}});});}},{key:"measureInWindow",value:function measureInWindow(reactTag,callbackId){var view,_view$getBoundingClie,left,top,width,height;return _regenerator2.default.async(function measureInWindow$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:view=this.viewRegistry.get(reactTag);(0,_Invariant2.default)(view,"No such view with tag: "+reactTag);_view$getBoundingClie=view.getBoundingClientRect(),left=_view$getBoundingClie.left,top=_view$getBoundingClie.top,width=_view$getBoundingClie.width,height=_view$getBoundingClie.height;this.bridge.callbackFromId(callbackId)(left,top,width,height);case 4:case"end":return _context2.stop();}}},null,this);}},{key:"setJSResponder",value:function setJSResponder(reactTag){this.jsResponder=this.viewRegistry.get(reactTag);if(!this.jsResponder){console.error("Invalid view set to be the JS responder - tag "+reactTag);}}},{key:"clearJSResponder",value:function clearJSResponder(){this.jsResponder=null;}},{key:"configureNextLayoutAnimation",value:function configureNextLayoutAnimation(config,onAnimationDidEnd){if(!_CanUse2.default.matchMedia||!window.matchMedia("(prefers-reduced-motion: reduce)").matches){this.layoutAnimationManager.configureNext(config,this.bridge.callbackFromId(onAnimationDidEnd));}}},{key:"addUIBlock",value:function addUIBlock(block){if(block==null||this.viewRegistry==null){return;}block.call(null,this,this.viewRegistry);}},{key:"prependUIBlock",value:function prependUIBlock(block){if(!block){return;}block.call(null,this,this.viewRegistry);}},{key:"setChildren",value:function setChildren(containerTag,reactTags){RCTUIManager.RCTSetChildren(containerTag,reactTags,this.shadowViewRegistry);this.addUIBlock(function(uiManager,viewRegistry){RCTUIManager.RCTSetChildren(containerTag,reactTags,viewRegistry);});}},{key:"createView",value:function createView(reactTag,viewName,rootTag,props){var componentData=this.componentDataByName.get(viewName);(0,_Invariant2.default)(componentData,"No component found for view with name "+viewName);var shadowView=componentData.createShadowView(reactTag);if(shadowView!=null){shadowView.viewName=viewName;componentData.setPropsForShadowView(props,shadowView);this.shadowViewRegistry.set(reactTag,shadowView);}var backgroundColor=shadowView.backgroundColor;var view=componentData.createView(reactTag);if(view!=null){componentData.setPropsForView(props,view);this.viewRegistry.set(reactTag,view);}}},{key:"updateView",value:function updateView(reactTag,viewName,updatedProps){var componentData=this.componentDataByName.get(viewName);(0,_Invariant2.default)(componentData,"No component found for view with name "+viewName);var shadowView=this.shadowViewRegistry.get(reactTag);if(shadowView){componentData.setPropsForShadowView(updatedProps,shadowView);}var view=this.viewRegistry.get(reactTag);if(view){componentData.setPropsForView(updatedProps,view);}}},{key:"synchronouslyUpdateView",value:function synchronouslyUpdateView(reactTag,viewName,props){var componentData=this.componentDataByName.get(viewName);(0,_Invariant2.default)(componentData,"No component found for view with name "+viewName);var view=this.viewRegistry.get(reactTag);if(view){componentData.setPropsForView(props,view);}}},{key:"replaceExistingNonRootView",value:function replaceExistingNonRootView(reactTag,newReactTag){var shadowView=this.shadowViewRegistry.get(reactTag);(0,_Invariant2.default)(shadowView,"shadowView (for ID "+reactTag+") not found");var superShadowView=shadowView.reactSuperview;(0,_Invariant2.default)(superShadowView,"shadowView super (of ID "+reactTag+") not found");var indexOfView=superShadowView.reactSubviews.indexOf(shadowView);(0,_Invariant2.default)(indexOfView!==-1,"View's superview does't claim it as subview");var removeAtIndices=[indexOfView];var addTags=[newReactTag];this.manageChildren(superShadowView.reactTag,null,null,addTags,removeAtIndices,removeAtIndices);}},{key:"findSubviewIn",value:function findSubviewIn(reactTag,atPoint,callbackId){var _atPoint,x,y,shadowView,targetReactTag,measurement,globalX,globalY,width,height;return _regenerator2.default.async(function findSubviewIn$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_atPoint=(0,_slicedToArray3.default)(atPoint,2),x=_atPoint[0],y=_atPoint[1];shadowView=this.shadowViewRegistry.get(reactTag);(0,_Invariant2.default)(shadowView,"No such view with tag "+reactTag);targetReactTag=shadowView.reactTagAtPoint({x:x,y:y});_context3.next=6;return _regenerator2.default.awrap(this.measure(targetReactTag));case 6:measurement=_context3.sent;(0,_Invariant2.default)(measurement,"View with tag "+targetReactTag+" has no measurement");globalX=measurement.globalX,globalY=measurement.globalY,width=measurement.width,height=measurement.height;this.bridge.callbackFromId(callbackId)(targetReactTag,globalX,globalY,width,height);case 10:case"end":return _context3.stop();}}},null,this);}},{key:"manageChildren",value:function manageChildren(tag,moveFrom,moveTo,addChildTags,addAtIndices,removeFrom){var _this7=this;var viewToManage=this.viewRegistry.get(tag);var shadowViewToManage=this.shadowViewRegistry.get(tag);if(!viewToManage||!shadowViewToManage)return;var numToMove=!moveFrom?0:moveFrom.length;var viewsToAdd=[];var indicesToRemove=[];var tagsToRemove=[];var tagsToDelete=[];if(moveFrom&&moveTo){for(var i=0;i<moveFrom.length;i++){var moveFromIndex=moveFrom[i];var tagToMove=viewToManage.reactSubviews[moveFromIndex].reactTag;viewsToAdd[i]={tag:tagToMove,index:moveTo[i]};indicesToRemove[i]=moveFromIndex;tagsToRemove[i]=tagToMove;}}if(addChildTags){for(var _i2=0;_i2<addChildTags.length;_i2++){var viewTagToAdd=addChildTags[_i2];var indexToAddAt=addAtIndices[_i2];viewsToAdd[numToMove+_i2]={tag:viewTagToAdd,index:indexToAddAt};}}if(removeFrom){for(var _i3=0;_i3<removeFrom.length;_i3++){var indexToRemove=removeFrom[_i3];if(viewToManage.reactSubviews[indexToRemove]){var tagToRemove=viewToManage.reactSubviews[indexToRemove].reactTag;indicesToRemove[numToMove+_i3]=indexToRemove;tagsToRemove[numToMove+_i3]=tagToRemove;tagsToDelete[_i3]=tagToRemove;}}}viewsToAdd.sort(function(a,b){return a.index-b.index;});indicesToRemove.sort(function(a,b){return a-b;});var _loop2=function _loop2(_i4){var childIndex=indicesToRemove[_i4];var shadowSubView=undefined;if(shadowViewToManage instanceof RCTShadowText){shadowSubView=shadowViewToManage.textChildren[childIndex];}else{shadowSubView=shadowViewToManage.reactSubviews[childIndex];}if(shadowSubView){shadowViewToManage.removeReactSubview(shadowSubView);if(_this7.layoutAnimationManager.isPending()){shadowSubView.reactSuperview=shadowViewToManage;}}if(!_this7.layoutAnimationManager.isPending()){_this7.addUIBlock(function(uiManager,viewRegistry){var subView=viewToManage.reactSubviews[childIndex];viewToManage.removeReactSubview(subView);});}};for(var _i4=indicesToRemove.length-1;_i4>=0;_i4--){_loop2(_i4);}var _loop3=function _loop3(_i5){var _viewsToAdd$_i=viewsToAdd[_i5],tagToAdd=_viewsToAdd$_i.tag,indexToAdd=_viewsToAdd$_i.index;var shadowSubView=_this7.shadowViewRegistry.get(tagToAdd);if(shadowSubView){shadowViewToManage.insertReactSubviewAtIndex(shadowSubView,indexToAdd);}_this7.addUIBlock(function(uiManager,viewRegistry){var subView=viewRegistry.get(tagToAdd);(0,_Invariant2.default)(subView,"Attempted to insert subview with tag "+tagToAdd+" that does not exist");viewToManage.insertReactSubviewAtIndex(subView,indexToAdd);});};for(var _i5=0;_i5<viewsToAdd.length;_i5++){_loop3(_i5);}for(var _i6=0;_i6<tagsToDelete.length;_i6++){this.purgeView(tagsToDelete[_i6]);}}},{key:"dispatchViewManagerCommand",value:function dispatchViewManagerCommand(reactTag,commandID,commandArgs){var shadowView=this.shadowViewRegistry.get(reactTag);(0,_Invariant2.default)(shadowView,"No such shadow view with tag "+reactTag);var componentData=this.componentDataByName.get(shadowView.viewName);(0,_Invariant2.default)(componentData,"No such componentData for name "+shadowView.viewName);var managerClass=componentData.managerClass;var moduleData=this.bridge.moduleDataForName[(0,_RCTBridge.bridgeModuleNameForClass)(managerClass)];var methodName=moduleData.methods[commandID];var args=[reactTag].concat((0,_toConsumableArray3.default)(commandArgs));var manager=this.bridge.moduleForClass(managerClass);manager[methodName].apply(manager,args);}},{key:"focus",value:function focus(reactTag){}},{key:"blur",value:function blur(reactTag){}},{key:"constantsToExport",value:function constantsToExport(){var constants={};var bubblingEvents={};var directEvents={};for(var _iterator2=this.componentDataByName,_isArray2=Array.isArray(_iterator2),_i7=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==="function"?typeof Symbol==="function"?Symbol.iterator:"@@iterator":"@@iterator"]();;){var _ref5;if(_isArray2){if(_i7>=_iterator2.length)break;_ref5=_iterator2[_i7++];}else{_i7=_iterator2.next();if(_i7.done)break;_ref5=_i7.value;}var _ref3=_ref5;var _ref4=(0,_slicedToArray3.default)(_ref3,2);var name=_ref4[0];var componentData=_ref4[1];var moduleConstants={};var bubblingEventTypes={};var directEventTypes={};moduleConstants.Manager=(0,_RCTBridge.bridgeModuleNameForClass)(componentData.managerClass);var viewConfig=componentData.viewConfig;moduleConstants.NativeProps=viewConfig.propTypes;moduleConstants.baseModuleName=viewConfig.baseModuleName;for(var _iterator3=viewConfig.directEvents,_isArray3=Array.isArray(_iterator3),_i8=0,_iterator3=_isArray3?_iterator3:_iterator3[typeof Symbol==="function"?typeof Symbol==="function"?Symbol.iterator:"@@iterator":"@@iterator"]();;){var _ref6;if(_isArray3){if(_i8>=_iterator3.length)break;_ref6=_iterator3[_i8++];}else{_i8=_iterator3.next();if(_i8.done)break;_ref6=_i8.value;}var eventName=_ref6;if(!directEvents[eventName]){directEvents[eventName]={registrationName:"on"+eventName.substring(3)};}directEventTypes[eventName]=directEvents[eventName];}moduleConstants.directEventTypes=directEventTypes;for(var _iterator4=viewConfig.bubblingEvents,_isArray4=Array.isArray(_iterator4),_i9=0,_iterator4=_isArray4?_iterator4:_iterator4[typeof Symbol==="function"?typeof Symbol==="function"?Symbol.iterator:"@@iterator":"@@iterator"]();;){var _ref7;if(_isArray4){if(_i9>=_iterator4.length)break;_ref7=_iterator4[_i9++];}else{_i9=_iterator4.next();if(_i9.done)break;_ref7=_i9.value;}var _eventName=_ref7;if(!bubblingEvents[_eventName]){var bubbleName="on"+_eventName.substring(3);bubblingEvents[_eventName]={phasedRegistrationNames:{bubbled:bubbleName,captured:bubbleName+"Capture"}};}bubblingEventTypes[_eventName]=bubblingEvents[_eventName];}moduleConstants.bubblingEventTypes=bubblingEventTypes;constants[name]=moduleConstants;}return constants;}},{key:"allocateRootTag",get:function get(){var tag=rootTagCounter;rootTagCounter++;return tag*10+1;}}],[{key:"RCTSetChildren",value:function RCTSetChildren(containerTag,reactTags,registry){var container=registry.get(containerTag);var index=0;reactTags.forEach(function(reactTag){var view=registry.get(reactTag);(0,_Invariant2.default)(container,"No container view found with id: "+containerTag);(0,_Invariant2.default)(view,"No view found with id: "+reactTag);container.insertReactSubviewAtIndex(view,index++);});}}]);return RCTUIManager;}(),(_applyDecoratedDescriptor(_class2.prototype,"measure",[_dec2],Object.getOwnPropertyDescriptor(_class2.prototype,"measure"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"measureInWindow",[_dec3],Object.getOwnPropertyDescriptor(_class2.prototype,"measureInWindow"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"setJSResponder",[_dec4],Object.getOwnPropertyDescriptor(_class2.prototype,"setJSResponder"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"clearJSResponder",[_dec5],Object.getOwnPropertyDescriptor(_class2.prototype,"clearJSResponder"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"configureNextLayoutAnimation",[_dec6],Object.getOwnPropertyDescriptor(_class2.prototype,"configureNextLayoutAnimation"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"setChildren",[_dec7],Object.getOwnPropertyDescriptor(_class2.prototype,"setChildren"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"createView",[_dec8],Object.getOwnPropertyDescriptor(_class2.prototype,"createView"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"updateView",[_dec9],Object.getOwnPropertyDescriptor(_class2.prototype,"updateView"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"replaceExistingNonRootView",[_dec10],Object.getOwnPropertyDescriptor(_class2.prototype,"replaceExistingNonRootView"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"findSubviewIn",[_dec11],Object.getOwnPropertyDescriptor(_class2.prototype,"findSubviewIn"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"manageChildren",[_dec12],Object.getOwnPropertyDescriptor(_class2.prototype,"manageChildren"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"dispatchViewManagerCommand",[_dec13],Object.getOwnPropertyDescriptor(_class2.prototype,"dispatchViewManagerCommand"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"focus",[_dec14],Object.getOwnPropertyDescriptor(_class2.prototype,"focus"),_class2.prototype),_applyDecoratedDescriptor(_class2.prototype,"blur",[_dec15],Object.getOwnPropertyDescriptor(_class2.prototype,"blur"),_class2.prototype)),_class2))||_class);return _context4.abrupt("return",RCTUIManager);case 11:case"end":return _context4.stop();}}},null,_this8);}();
//# sourceMappingURL=RCTUIManager.js.map