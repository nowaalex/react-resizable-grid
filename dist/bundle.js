"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),r=e(t),n=e(require("prop-types")),i=require("react-draggable"),o=e(require("react-dom")),s=e(require("classnames")),a=r.memo(function(e){var t=e.className,n=e.type,o=e.style,s=e.index,a=e.onDrag,u=e.onStart,c=e.disabled,l=e.children;return r.createElement(i.DraggableCore,{onStart:u,onDrag:a,disabled:c},r.createElement("div",{"data-resizer-index":s,"data-resizer-type":n,className:t,style:o,children:l}))});function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?p(e):t}a.propTypes={type:n.oneOf(["row","col"]),onDrag:n.func,onStart:n.func,index:n.number,disabled:n.bool,children:n.node,style:n.object,className:n.string};var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.create(null);return function(r){return t[r]||(t[r]=e(r))}},y=function(e,t,r){return e>r?r:e<t?t:e},g={row:{e:"react-rsz-grid-row",t:"pageX",r:"offsetWidth",n:"clientWidth",i:"width",o:"minWidth",s:"maxWidth",a:["Left","Right"]},col:{e:"react-rsz-grid-col",t:"pageY",r:"offsetHeight",n:"clientHeight",i:"height",o:"minHeight",s:"maxHeight",a:["Top","Bottom"]}},w=function(e,t,r){return e.hasOwnProperty(t)?e[t]:r};function z(e){if(!r.isValidElement(e))return e;var t=e.type,n=e.props,i=this.props,o=i.resizerChildren,s=i.type,u=w(this.props,"resizerClassName","react-rsz-grid-default-resizer");if(t===a)return r.cloneElement(e,{index:this.u,onDrag:this.c,onStart:this.l,type:s,className:w(n,"className",u)},w(n,"children",o));var c=this.state[this.u],l={style:n.style?Object.assign({},n.style,c):c,ref:this.f(this.u++)};return t===D&&(l.resizerClassName=w(n,"resizerClassName",u),l.resizerChildren=w(n,"resizerChildren",o)),r.cloneElement(e,l)}var D=function(e){function n(){var e,t;u(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=v(this,(e=d(n)).call.apply(e,[this].concat(i)))).state={},t.h=[],t.l=function(e){var r=t.d=+e.currentTarget.dataset.resizerIndex,n=t.h[r-1],i=t.h[r];if(t.m=!(!n||!i)){var o=g[t.props.type].t;t.p=e[o],t.v(n,1),t.v(i,2);var s=t._curD1+t._curD2;t._maxD1||(t._maxD1=s-t._minD2),t._maxD2||(t._maxD2=s-t._minD1),t.b()}else"production"!==process.env.NODE_ENV&&console.warn("Resizer must be between other components. It is inactive during this drag.")},t.c=function(e){if(t.m){var r=g[t.props.type],n=r.t,i=r.i,o=e[n]-t.p;t.setState(function(e){return t.y(e,i,o)})}},t.f=b(function(e){return function(r){t.h[e]=o.findDOMNode(r)}}),t.g=function(e,r){var n=r.type,i=g[n],o=i.i,s=i.r;return t.h.reduce(function(t,r,n){var i;return t[n]=Object.assign({},e[n],(f(i={},o,r[s]),f(i,"flexBasis","auto"),f(i,"boxSizing","border-box"),i)),t},{})},t.b=function(){return t.setState(t.g)},t}return h(n,r.Component),l(n,[{key:"_setInitialDimensionsCache",value:function(e,t){var r=this.props.type,n=g[r],i=n.s,o=n.o,s=n.r,a=n.n,u=n.a,c=getComputedStyle(e),l=(this["_curD"+t]=e[s])-e[a]+u.reduce(function(e,t){return e+parseFloat(c["padding".concat(t)])},0);this["_minD"+t]=l+(parseFloat(c[o])||0),this["_maxD"+t]=parseFloat(c[i])||0}},{key:"_getChangedState",value:function(e,t,r){var n,i=this.d;return f(n={},i-1,Object.assign({},e[i-1],f({},t,y(this._curD1+r,this._minD1,this._maxD1)))),f(n,i,Object.assign({},e[i],f({},t,y(this._curD2-r,this._minD2,this._maxD2)))),n}},{key:"render",value:function(){var e=this.props,n=e.type,i=e.className,o=e.children,a=e.style;return this.u=0,r.createElement("div",{style:a,className:s(i,g[n].e),children:t.Children.map(o,z,this)})}},{key:"componentDidMount",value:function(){this._st=setTimeout(this.b,50),window.addEventListener("resize",this.b)}},{key:"componentDidUpdate",value:function(){var e=this.h.length-this.u;e&&this.h.splice(this.u,e)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.b),clearTimeout(this._st)}}]),n}();D.propTypes={type:n.oneOf(["row","col"]),className:n.string,style:n.object,children:function(e,n){if(t.Children.toArray(e[n]).some(function(e){return r.isValidElement(e)&&(e.type===r.Fragment||Array.isArray(e))}))throw new Error("Fragments and arrays are not allowed inside Container")},resizerChildren:n.node,resizerClassName:n.string},D.defaultProps={type:"row"},exports.Resizer=a,exports.Container=D;
