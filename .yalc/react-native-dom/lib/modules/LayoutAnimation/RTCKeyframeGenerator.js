Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _bezierEasing=require("bezier-easing");var _bezierEasing2=_interopRequireDefault(_bezierEasing);var _fastMemoize=require("fast-memoize");var _fastMemoize2=_interopRequireDefault(_fastMemoize);var _Invariant=require("./../../utils/Invariant");var _Invariant2=_interopRequireDefault(_Invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var timestepCoefficient=1;var staticEasingFunctions={linear:function linear(x){return x;},easeIn:(0,_bezierEasing2.default)(0.42,0,1,1),easeOut:(0,_bezierEasing2.default)(0,0,0.58,1),easeInEaseOut:(0,_bezierEasing2.default)(0.42,0,0.58,1)};var springFactor=0.5;var springTimestep=16.667*timestepCoefficient;function generateStaticKeyframes(ease,duration,delay){var numSteps=duration/springTimestep;var timestep=1.0/numSteps;var keyframes=[];var currentX=0;for(var i=0;i<numSteps;i++){keyframes.push(ease(currentX));currentX+=timestep;}keyframes.push(1);return{keyframes:keyframes,duration:duration,delay:delay};}var epsilon=0.001;var maxDamping=1;var minDamping=Number.MIN_VALUE;var approximateRoot=function approximateRoot(func,derivative,initialGuess){var times=arguments.length>3&&arguments[3]!==undefined?arguments[3]:24;var result=initialGuess;for(var i=0;i<times;i++){result=result=func(result)/derivative(result);}return result;};var angularFrequency=function angularFrequency(undampedFrequency,dampingRatio){return undampedFrequency*Math.sqrt(1-Math.pow(dampingRatio,2));};function computeDerivedSpringCurveOptions(dampingRatio,duration){var velocity=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;var mass=arguments.length>3&&arguments[3]!==undefined?arguments[3]:1;dampingRatio=Math.max(Math.min(dampingRatio,maxDamping),minDamping);var envelope=void 0;var derivative=void 0;if(dampingRatio<1){envelope=function envelope(undampedFrequency){var exponentialDecay=undampedFrequency*dampingRatio;var currentDisplacement=exponentialDecay*duration;var a=exponentialDecay-velocity;var b=angularFrequency(undampedFrequency,dampingRatio);var c=Math.exp(-currentDisplacement);return epsilon-a/b*c;};derivative=function derivative(undampedFrequency){var exponentialDecay=undampedFrequency*dampingRatio;var currentDisplacement=exponentialDecay*duration;var d=currentDisplacement*velocity+velocity;var e=Math.pow(dampingRatio,2)*Math.pow(undampedFrequency,2)*duration;var f=Math.exp(-currentDisplacement);var g=angularFrequency(Math.pow(undampedFrequency,2),dampingRatio);var factor=-envelope(undampedFrequency)+epsilon>0?-1:1;return factor*((d-e)*f)/g;};}else{envelope=function envelope(undampedFrequency){var a=Math.exp(-undampedFrequency*duration);var b=(undampedFrequency-velocity)*duration+1;return-epsilon+a*b;};derivative=function derivative(undampedFrequency){var a=Math.exp(-undampedFrequency*duration);var b=(velocity-undampedFrequency)*Math.pow(duration,2);return a*b;};}var result={tension:100,friction:10,velocity:velocity};var initialGuess=5/duration;var undampedFrequency=approximateRoot(envelope,derivative,initialGuess);if(!isNaN(undampedFrequency)){result.tension=Math.pow(undampedFrequency,2)*mass;result.friction=dampingRatio*2*Math.sqrt(mass*result.tension);}return result;}var Integrator=function(){function Integrator(accelerationForState){(0,_classCallCheck3.default)(this,Integrator);this.accelerationForState=accelerationForState;}(0,_createClass3.default)(Integrator,[{key:"integrateState",value:function integrateState(state,dt){var a=this.evaluateState(state);var b=this.evaluateStateWithDerivative(state,dt*0.5,a);var c=this.evaluateStateWithDerivative(state,dt*0.5,b);var d=this.evaluateStateWithDerivative(state,dt,c);var dxdt=1.0/6.0*(a.dx+2.0*(b.dx+c.dx)+d.dx);var dvdt=1.0/6.0*(a.dv+2.0*(b.dv+c.dv)+d.dv);state.x=state.x+dxdt*dt;state.v=state.v+dvdt*dt;return state;}},{key:"evaluateState",value:function evaluateState(initialState){return{dx:initialState.v,dv:this.accelerationForState(initialState)};}},{key:"evaluateStateWithDerivative",value:function evaluateStateWithDerivative(initialState,dt,derivative){var state={};state.x=initialState.x+derivative.dx*dt;state.v=initialState.v+derivative.dv*dt;var output={};output.dx=state.v;output.dv=this.accelerationForState(state);return output;}}]);return Integrator;}();function createSpringInterpolator(tension,friction,velocity){var tolerance=arguments.length>3&&arguments[3]!==undefined?arguments[3]:1/1000;var stopSpring=false;var time=0;var value=0;var integrator=new Integrator(function(state){return-tension*state.x-friction*state.v;});var finished=function finished(){return stopSpring;};return{finished:finished,next:function next(delta){if(finished()){return 1;}time+=delta;var stateBefore={x:value-1,v:velocity};var stateAfter=integrator.integrateState(stateBefore,delta);value=1+stateAfter.x;var finalVelocity=stateAfter.v;var netFloat=stateAfter.x;var net1DVelocity=stateAfter.v;var netValueIsLow=Math.abs(netFloat)<tolerance;var netVelocityIsLow=Math.abs(net1DVelocity)<tolerance;stopSpring=netValueIsLow&&netValueIsLow;velocity=finalVelocity;return value;}};}function generateSpringKeyframes(){var springDamping=arguments.length>0&&arguments[0]!==undefined?arguments[0]:springFactor;var initialVelocity=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var duration=arguments[2];var delay=arguments[3];var numSteps=duration/springTimestep;var _computeDerivedSpring=computeDerivedSpringCurveOptions(springDamping,duration/6000,initialVelocity),friction=_computeDerivedSpring.friction,tension=_computeDerivedSpring.tension,velocity=_computeDerivedSpring.velocity;var interpolator=createSpringInterpolator(tension,friction,velocity);var keyframes=[];while(!interpolator.finished()){keyframes.push(interpolator.next(1/60));}keyframes.push(1);return{keyframes:keyframes,duration:keyframes.length*springTimestep,delay:delay};}var generateKeyframes=(0,_fastMemoize2.default)(function(){var config=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var duration=arguments[1];var _config$type=config.type,type=_config$type===undefined?"easeInEaseOut":_config$type,springDamping=config.springDamping,initialVelocity=config.initialVelocity,delay=config.delay;var resolvedDelay=delay!=null?delay:0;var resolvedDuration=config.duration!=null?config.duration:duration;if(resolvedDuration===0){return null;}if(type&&type!=="spring"){var easingFunction=staticEasingFunctions[type];return generateStaticKeyframes(easingFunction,resolvedDuration,resolvedDelay);}if(type&&type==="spring"&&springDamping){return generateSpringKeyframes(springDamping,initialVelocity,resolvedDuration,resolvedDelay);}(0,_Invariant2.default)(false,"Invalid layoutAnimation configuration provided");});exports.default=generateKeyframes;
//# sourceMappingURL=RTCKeyframeGenerator.js.map