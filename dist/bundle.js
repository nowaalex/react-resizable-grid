"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),r=e(t),n=e(require("prop-types")),i=require("react-draggable"),o=e(require("react-dom")),a=e(require("classnames")),s=r.memo(function(e){var t=e.className,n=e.type,o=e.style,a=e.index,s=e.onDrag,c=e.onStart,u=e.disabled,l=e.children;return r.createElement(i.DraggableCore,{onStart:c,onDrag:s,disabled:u},r.createElement("div",{"data-resizer-index":a,"data-resizer-type":n,className:t,style:o,children:l}))});function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?p(e):t}s.propTypes={type:n.oneOf(["row","col"]),onDrag:n.func,onStart:n.func,index:n.number,disabled:n.bool,children:n.node,style:n.object,className:n.string};var b="aFrCtGrD",y=function(){function e(){var t=this;c(this,e);var r=localStorage.getItem(b);this.e=r?JSON.parse(r):{},window.addEventListener("beforeunload",function(){Object.keys(t.e).length>1&&localStorage.setItem(b,JSON.stringify(t.e))})}return l(e,[{key:"addStylesInfo",value:function(e,t){this.e[e]=t}},{key:"getStylesInfo",value:function(e){return this.e[e]||{}}}]),e}(),g=new y,w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.create(null);return function(r){return t[r]||(t[r]=e(r))}},D=function(e,t,r){return e>r?r:e<t?t:e},S={row:{t:"react-rsz-grid-row",r:"pageX",n:"offsetWidth",i:"clientWidth",o:"width",a:"minWidth",s:"maxWidth",c:["Left","Right"]},col:{t:"react-rsz-grid-col",r:"pageY",n:"offsetHeight",i:"clientHeight",o:"height",a:"minHeight",s:"maxHeight",c:["Top","Bottom"]}},z=function(e,t,r){return e.hasOwnProperty(t)?e[t]:r};function N(e){if(!r.isValidElement(e))return e;var t=e.type,n=e.props,i=this.props,o=i.resizerChildren,a=i.type,c=i.localStorageKey,u=z(this.props,"resizerClassName","react-rsz-grid-default-resizer"),l=this.u;if(t===s)return r.cloneElement(e,{index:l,onDrag:this.l,onStart:this.f,type:a,className:z(n,"className",u)},z(n,"children",o));var f=this.state[l],h={style:n.style?Object.assign({},n.style,f):f,ref:this.h(l)};return t===O&&(h.resizerClassName=z(n,"resizerClassName",u),h.resizerChildren=z(n,"resizerChildren",o),h.localStorageKey=z(n,"localStorageKey",c+"_"+l)),this.u++,r.cloneElement(e,h)}var O=function(e){function n(){var e,t;c(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=v(this,(e=d(n)).call.apply(e,[this].concat(i)))).state=g.d(t.props.localStorageKey),t.m=[],t.f=function(e){var r=t.p=+e.currentTarget.dataset.resizerIndex,n=t.m[r-1],i=t.m[r];if(t.v=!(!n||!i)){var o=S[t.props.type].r;t.b=e[o],t.y(n,1),t.y(i,2);var a=t._curD1+t._curD2;t._maxD1||(t._maxD1=a-t._minD2),t._maxD2||(t._maxD2=a-t._minD1),t.g()}else"production"!==process.env.NODE_ENV&&console.warn("Resizer must be between other components. It is inactive during this drag.")},t.l=function(e){if(t.v){var r=S[t.props.type],n=r.r,i=r.o,o=e[n]-t.b;t.setState(function(e){return t.w(e,i,o)})}},t.h=w(function(e){return function(r){t.m[e]=o.findDOMNode(r),"production"===process.env.NODE_ENV||!t.m[e]||t.m[e]instanceof Element||__JEST__||console.error("af-react-grid: can't find ref for component:",r,"ReactDOM.findDomNode must return element for all children of Container.")}}),t.D=function(e,r){var n=r.type,i=S[n],o=i.o,a=i.n;return t.m.reduce(function(t,r,n){var i;r&&(t[n]=Object.assign({},e[n],(f(i={},o,r[a]),f(i,"flexBasis","auto"),f(i,"boxSizing","border-box"),i)));return t},{})},t.g=function(){return t.setState(t.D)},t}return h(n,r.Component),l(n,[{key:"_setInitialDimensionsCache",value:function(e,t){var r=this.props.type,n=S[r],i=n.s,o=n.a,a=n.n,s=n.i,c=n.c,u=getComputedStyle(e),l=(this["_curD"+t]=e[a])-e[s]+c.reduce(function(e,t){return e+parseFloat(u["padding".concat(t)])},0);this["_minD"+t]=l+(parseFloat(u[o])||0),this["_maxD"+t]=parseFloat(u[i])||0}},{key:"sendToStateSaverIfNeeded",value:function(){var e=this.props.localStorageKey;e&&g.S(e,this.state)}},{key:"_getChangedState",value:function(e,t,r){var n,i=this.p;return f(n={},i-1,Object.assign({},e[i-1],f({},t,D(this._curD1+r,this._minD1,this._maxD1)))),f(n,i,Object.assign({},e[i],f({},t,D(this._curD2-r,this._minD2,this._maxD2)))),n}},{key:"render",value:function(){var e=this.props,n=e.type,i=e.className,o=e.children,s=e.style;return this.u=0,r.createElement("div",{style:s,className:a(i,S[n].t),children:t.Children.map(o,N,this)})}},{key:"componentDidMount",value:function(){this._st=setTimeout(this.g,50),window.addEventListener("resize",this.g)}},{key:"componentDidUpdate",value:function(){this.z();var e=this.m.length-this.u;e&&this.m.splice(this.u,e)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.g),clearTimeout(this._st)}}]),n}();O.propTypes={type:n.oneOf(["row","col"]),className:n.string,style:n.object,children:function(e,n){if(t.Children.toArray(e[n]).some(function(e){return r.isValidElement(e)&&e.type===r.Fragment}))throw new Error("Fragments are not allowed inside Container, use arrays instead")},resizerChildren:n.node,resizerClassName:n.string,localStorageKey:n.string},O.defaultProps={type:"row"},exports.Resizer=s,exports.Container=O;
