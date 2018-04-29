Object.defineProperty(exports,"__esModule",{value:true});exports.RCTScrollContentView=undefined;var _toConsumableArray2=require("babel-runtime/helpers/toConsumableArray");var _toConsumableArray3=_interopRequireDefault(_toConsumableArray2);var _regenerator=require("babel-runtime/regenerator");var _regenerator2=_interopRequireDefault(_regenerator);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _get2=require("babel-runtime/helpers/get");var _get3=_interopRequireDefault(_get2);var _set2=require("babel-runtime/helpers/set");var _set3=_interopRequireDefault(_set2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _extends2=require("babel-runtime/helpers/extends");var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _dec,_class,_dec2,_class2;var _RCTView3=require("./RCTView");var _RCTView4=_interopRequireDefault(_RCTView3);var _UIView=require("./../base/UIView");var _UIView2=_interopRequireDefault(_UIView);var _CustomElement=require("./../utils/CustomElement");var _CustomElement2=_interopRequireDefault(_CustomElement);var _detectIt=require("detect-it");var _detectIt2=_interopRequireDefault(_detectIt);var _RCTScrollViewLocalData=require("./RCTScrollViewLocalData");var _RCTScrollViewLocalData2=_interopRequireDefault(_RCTScrollViewLocalData);var _Invariant=require("./../utils/Invariant");var _Invariant2=_interopRequireDefault(_Invariant);var _debounce=require("debounce");var _debounce2=_interopRequireDefault(_debounce);var _RCTEventDispatcher=require("./../bridge/RCTEventDispatcher");var _RCTEventDispatcher2=_interopRequireDefault(_RCTEventDispatcher);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var SCROLL_LISTENER_OPTIONS=_detectIt2.default.passiveEvents?{passive:true}:false;var SHOULD_CORRECT_SCROLL=!!navigator.platform.match(/iPhone|iPod|iPad/g);var RCTScrollEvent=function(){function RCTScrollEvent(eventName,reactTag,contentOffset,contentInset,contentSize,scrollFrame,zoomScale,coalescingKey,userData){(0,_classCallCheck3.default)(this,RCTScrollEvent);this.eventName=eventName;this.viewTag=reactTag;this.scrollViewContentOffset=contentOffset;this.scrollViewContentInset=contentInset;this.scrollViewContentSize=contentSize;this.scrollViewFrame=scrollFrame;this.scrollViewZoomScale=zoomScale;this.userData=userData;this.coalescingKey=coalescingKey;}(0,_createClass3.default)(RCTScrollEvent,[{key:"canCoalesce",value:function canCoalesce(){return true;}},{key:"coalesceWithEvent",value:function coalesceWithEvent(newEvent){var updatedChildFrames=[];if(this.userData&&this.userData.updatedChildFrames)updatedChildFrames=updatedChildFrames.concat(this.userData.updatedChildFrames);if(newEvent.userData&&newEvent.userData.updatedChildFrames)updatedChildFrames=updatedChildFrames.concat(newEvent.userData.updatedChildFrames);if(updatedChildFrames.length!==0){newEvent.userData={updatedChildFrames:updatedChildFrames};}return newEvent;}},{key:"moduleDotMethod",value:function moduleDotMethod(){return"RCTEventEmitter.receiveEvent";}},{key:"arguments",value:function _arguments(){var args=[this.viewTag,(0,_RCTEventDispatcher.normalizeInputEventName)(this.eventName),this.body];return args;}},{key:"body",get:function get(){var body={contentOffset:(0,_extends3.default)({},this.scrollViewContentOffset),contentInset:(0,_extends3.default)({},this.scrollViewContentInset),contentSize:(0,_extends3.default)({},this.scrollViewContentSize),layoutMeasurement:{width:this.scrollViewFrame.width,height:this.scrollViewFrame.height},zoomScale:this.scrollViewZoomScale};var userData=this.userData;if(userData){body=(0,_extends3.default)({},body,userData);}return body;}}]);return RCTScrollEvent;}();var RCTScrollContentView=exports.RCTScrollContentView=(_dec=(0,_CustomElement2.default)("rct-scroll-content-view"),_dec(_class=function(_RCTView){(0,_inherits3.default)(RCTScrollContentView,_RCTView);function RCTScrollContentView(bridge){(0,_classCallCheck3.default)(this,RCTScrollContentView);var _this=(0,_possibleConstructorReturn3.default)(this,(RCTScrollContentView.__proto__||Object.getPrototypeOf(RCTScrollContentView)).call(this,bridge));_this.updateHostStyle({position:"relative",display:"block",opacity:"1",contain:"layout style"});_this.addWillChange("transform");return _this;}(0,_createClass3.default)(RCTScrollContentView,[{key:"frame",set:function set(value){(0,_set3.default)(RCTScrollContentView.prototype.__proto__||Object.getPrototypeOf(RCTScrollContentView.prototype),"frame",value,this);var superView=this.reactSuperview;var subView=this.reactSubviews[0];if(subView&&subView instanceof _RCTView4.default&&superView&&superView instanceof RCTScrollView){superView.boundsDidChange(subView);}},get:function get(){return(0,_get3.default)(RCTScrollContentView.prototype.__proto__||Object.getPrototypeOf(RCTScrollContentView.prototype),"frame",this);}}]);return RCTScrollContentView;}(_RCTView4.default))||_class);var RCTScrollView=(_dec2=(0,_CustomElement2.default)("rct-scroll-view"),_dec2(_class2=function(_RCTView2){(0,_inherits3.default)(RCTScrollView,_RCTView2);function RCTScrollView(bridge){var _this3=this;(0,_classCallCheck3.default)(this,RCTScrollView);var _this2=(0,_possibleConstructorReturn3.default)(this,(RCTScrollView.__proto__||Object.getPrototypeOf(RCTScrollView)).call(this,bridge));_this2.contentSize={width:0,height:0};_this2.handleScroll=function _callee(e,userData){var scrollLeft,scrollTop,contentOffset,contentInset,contentSize,shadowView,contentFrame,args;return _regenerator2.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_this2.coalescingKey++;scrollLeft=_this2.scrollLeft;scrollTop=_this2.scrollTop;contentOffset={x:scrollLeft,y:scrollTop};_this2.scrollDidChange(scrollLeft,scrollTop);contentInset={top:0,left:0,bottom:0,right:0};contentSize={width:_this2.scrollWidth,height:_this2.scrollHeight};shadowView=_this2.manager.shadowViewRegistry.get(_this2.reactTag);(0,_Invariant2.default)(shadowView,"No ShadowView for tag "+_this2.reactTag);contentFrame=shadowView.previousLayout;(0,_Invariant2.default)(contentFrame,"ShadowView with tag "+_this2.reactTag+" has not been layed out");args=[_this2.reactTag,contentOffset,contentInset,contentSize,contentFrame,1,_this2.coalescingKey,userData];_this2.debouncedOnScrollEnd.apply(_this2,args);if(_this2.isScrolling){_this2.handleScrollTick.apply(_this2,args);}else{_this2.handleScrollStart.apply(_this2,args);}case 14:case"end":return _context.stop();}}},null,_this3);};_this2.debouncedOnScrollEnd=(0,_debounce2.default)(_this2.handleScrollEnd,100);_this2.manager=bridge.uiManager;_this2.updateHostStyle("contain","strict");if(!_this2.hasScrollParent()){_this2.updateHostStyle("overscrollBehavior","contain");}_this2.isScrolling=false;_this2.scrollEventThrottle=0;_this2.coalescingKey=0;_this2.cachedChildFrames=[];_this2._horizontal=false;_this2._overflow="scroll";_this2._scrollEnabled=true;_this2.addWillChange("transform");_this2.addEventListener("scroll",_this2.handleScroll,SCROLL_LISTENER_OPTIONS);return _this2;}(0,_createClass3.default)(RCTScrollView,[{key:"hasScrollParent",value:function hasScrollParent(){var currentView=this;while(currentView.reactSuperview){if(currentView instanceof RCTScrollView){return true;}currentView=currentView.reactSuperView;}return false;}},{key:"updateScrollBehavior",value:function updateScrollBehavior(){var styleUpdate={};if(this._overflow==="scroll"&&this._scrollEnabled){styleUpdate.msOverflowStyle="-ms-autohiding-scrollbar";styleUpdate.webkitOverflowScrolling="touch";if(this._horizontal){styleUpdate.overflowX="auto";styleUpdate.overflowY="hidden";styleUpdate.touchAction="pan-x";this.setAttribute("touch-action","pan-x");}else{styleUpdate.overflowX="hidden";styleUpdate.overflowY="auto";styleUpdate.touchAction="pan-y";this.setAttribute("touch-action","pan-y");}}else{styleUpdate.touchAction=undefined;this.removeAttribute("touch-action");styleUpdate.msOverflowStyle="auto";styleUpdate.webkitOverflowScrolling="";styleUpdate.overflowX="hidden";styleUpdate.overflowY="hidden";}this.updateHostStyle(styleUpdate);}},{key:"calculateChildFramesData",value:function calculateChildFramesData(){var _this4=this;var updatedChildFrames=[];var contentView=this.reactSubviews[0];(0,_Invariant2.default)(contentView&&contentView instanceof RCTScrollContentView,"RCTScrollView (of ID "+this.reactTag+") has no contentView");contentView.reactSubviews.forEach(function(subview,idx){var newFrame=subview.frame;var frameChanged=false;if(_this4.cachedChildFrames.length<=idx){frameChanged=true;}else if(JSON.stringify(newFrame)!==JSON.stringify(_this4.cachedChildFrames[idx])){frameChanged=true;}if(frameChanged){updatedChildFrames.push({index:idx,x:newFrame.left,y:newFrame.top,width:newFrame.width,height:newFrame.height});}});return updatedChildFrames;}},{key:"connectedCallback",value:function connectedCallback(){if(SHOULD_CORRECT_SCROLL){if(this._horizontal){this.scrollLeft=1;}else{this.scrollTop=1;}}}},{key:"boundsDidChange",value:function boundsDidChange(contentView){this.coalescingKey++;var childFrames=this.calculateChildFramesData();var contentOffset={x:this.scrollLeft,y:this.scrollTop};var contentInset={top:0,left:0,bottom:0,right:0};var contentSize={width:this.scrollWidth,height:this.scrollHeight};var shadowView=this.manager.shadowViewRegistry.get(this.reactTag);(0,_Invariant2.default)(shadowView,"No ShadowView for tag "+this.reactTag);var contentFrame=shadowView.previousLayout;(0,_Invariant2.default)(contentFrame,"ShadowView with tag "+this.reactTag+" has not been layed out");this.contentSize={width:contentFrame.width,height:contentFrame.height};var args=[this.reactTag,contentOffset,contentInset,contentSize,contentFrame,1,this.coalescingKey];this.bridge.eventDispatcher.sendEvent(new(Function.prototype.bind.apply(RCTScrollEvent,[null].concat(["onScroll"],args,[{updatedChildFrames:childFrames}])))());}},{key:"scrollDidChange",value:function scrollDidChange(x,y){var _this5=this;setTimeout(function(){var localData=new _RCTScrollViewLocalData2.default(x,y);_this5.bridge.uiManager.setLocalDataForView(localData,_this5);},0);}},{key:"handleScrollStart",value:function handleScrollStart(){this.isScrolling=true;this._scrollLastTick=Date.now();for(var _len=arguments.length,eventArgs=Array(_len),_key=0;_key<_len;_key++){eventArgs[_key]=arguments[_key];}var scrollEvent=new(Function.prototype.bind.apply(RCTScrollEvent,[null].concat(["onScrollBeginDrag"],(0,_toConsumableArray3.default)(eventArgs))))();this.bridge.eventDispatcher.sendEvent(scrollEvent);}},{key:"handleScrollEnd",value:function handleScrollEnd(){this.isScrolling=false;for(var _len2=arguments.length,eventArgs=Array(_len2),_key2=0;_key2<_len2;_key2++){eventArgs[_key2]=arguments[_key2];}var scrollEvent=new(Function.prototype.bind.apply(RCTScrollEvent,[null].concat(["onScrollEndDrag"],(0,_toConsumableArray3.default)(eventArgs))))();this.bridge.eventDispatcher.sendEvent(scrollEvent);var momentumScrollEvent=new(Function.prototype.bind.apply(RCTScrollEvent,[null].concat(["onMomentumScrollEnd"],(0,_toConsumableArray3.default)(eventArgs))))();this.bridge.eventDispatcher.sendEvent(momentumScrollEvent);this.correctScrollPosition();}},{key:"correctScrollPosition",value:function correctScrollPosition(){var scrollNudge=1;if(SHOULD_CORRECT_SCROLL){if(!this._horizontal){var endTopPosition=this.scrollTop+this.contentSize.height;if(this.scrollTop<=0&&this.scrollTop>=-0.1){this.scrollTop=scrollNudge;}else if(endTopPosition>=this.scrollHeight&&endTopPosition<=this.scrollHeight+0.1){this.scrollTop=this.scrollTop-scrollNudge;}}else{var endLeftPosition=this.scrollLeft+this.contentSize.width;if(this.scrollLeft<=0&&this.scrollLeft>=-0.1){this.scrollLeft=scrollNudge;}else if(endLeftPosition>=this.scrollWidth&&endLeftPosition<=this.scrollWidth+0.1){this.scrollLeft=this.scrollLeft-scrollNudge;}}}}},{key:"handleScrollTick",value:function handleScrollTick(){var shouldEmitScrollEvent=this.shouldEmitScrollEvent(this._scrollLastTick,this.scrollEventThrottle);if(shouldEmitScrollEvent){this._scrollLastTick=Date.now();for(var _len3=arguments.length,eventArgs=Array(_len3),_key3=0;_key3<_len3;_key3++){eventArgs[_key3]=arguments[_key3];}var scrollEvent=new(Function.prototype.bind.apply(RCTScrollEvent,[null].concat(["onScroll"],(0,_toConsumableArray3.default)(eventArgs))))();this.bridge.eventDispatcher.sendEvent(scrollEvent);}}},{key:"shouldEmitScrollEvent",value:function shouldEmitScrollEvent(lastTick,eventThrottle){var timeSinceLastTick=Date.now()-lastTick;return eventThrottle>0&&timeSinceLastTick>=eventThrottle;}},{key:"scrollEnabled",set:function set(value){this._scrollEnabled=!!value;this.updateScrollBehavior();}},{key:"horizontal",set:function set(value){this._horizontal=!!value;this.updateScrollBehavior();}},{key:"overflow",set:function set(value){if(value!=null){this._overflow=value;}else{this._overflow="hidden";}this.updateScrollBehavior();}},{key:"scrollBehavior",set:function set(value){this.updateHostStyle({scrollBehavior:value});}},{key:"touchable",get:function get(){return(0,_get3.default)(RCTScrollView.prototype.__proto__||Object.getPrototypeOf(RCTScrollView.prototype),"touchable",this);},set:function set(value){this.updateHostStyle("cursor","auto");}}]);return RCTScrollView;}(_RCTView4.default))||_class2);exports.default=RCTScrollView;
//# sourceMappingURL=RCTScrollView.js.map