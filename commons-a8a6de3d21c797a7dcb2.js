(self.webpackChunksshihci_github_io=self.webpackChunksshihci_github_io||[]).push([[351],{5505:function(e,t,r){"use strict";function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}r.d(t,{Z:function(){return i}})},6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!o(e[l],a[l]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],a.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!o(e[s[l]],a[s[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},5414:function(e,t,r){"use strict";r.d(t,{q:function(){return he}});var n,i,o,a,c=r(5697),l=r.n(c),s=r(4839),u=r.n(s),f=r(2993),d=r.n(f),p=r(257),m=r(6494),h=r.n(m),y="bodyAttributes",v="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",N="href",x="http-equiv",O="innerHTML",Z="itemprop",A="name",C="property",j="rel",S="src",E="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",P="encodeSpecialCharacters",L="onChangeClientState",R="titleTemplate",B=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),_=[g.NOSCRIPT,g.SCRIPT,g.STYLE],q="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=G(e,g.TITLE),r=G(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=G(e,I);return t||n||void 0},K=function(e){return G(e,L)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return X({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},$=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],l=c.toLowerCase();-1===t.indexOf(l)||r===j&&"canonical"===e[r].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==O&&c!==w&&c!==Z||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][s]&&(i[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],l=h()({},n[c],i[c]);n[c]=l}return e}),[]).reverse()},G=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},J=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){J(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:r.g.requestAnimationFrame||J,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;le(g.BODY,n),le(g.HTML,i),ce(f,d);var p={baseTag:se(g.BASE,r),linkTags:se(g.LINK,o),metaTags:se(g.META,a),noscriptTags:se(g.NOSCRIPT,c),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(g.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(q),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===i.indexOf(l)&&i.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);i.length===o.length?r.removeAttribute(q):r.getAttribute(q)!==a.join(",")&&r.setAttribute(q,a.join(","))}},se=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(q,"true"),i.some((function(e,t){return a=t,r.isEqualNode(e)}))?i.splice(a,1):o.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[k[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[q]=!0,i=fe(r,n),[p.default.createElement(g.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=ue(r),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+Y(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case v:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[q]=!0,n);return Object.keys(t).forEach((function(e){var r=k[e]||e;if(r===O||r===w){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),p.default.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(g.BASE,t,n),bodyAttributes:de(y,r,n),htmlAttributes:de(v,i,n),link:de(g.LINK,o,n),meta:de(g.META,a,n),noscript:de(g.NOSCRIPT,c,n),script:de(g.SCRIPT,l,n),style:de(g.STYLE,s,n),title:de(g.TITLE,{title:f,titleAttributes:d},n)}},me=u()((function(e){return{baseTag:Q([N,E],e),bodyAttributes:V(y,e),defer:G(e,M),encode:G(e,P),htmlAttributes:V(v,e),linkTags:$(g.LINK,[j,N],e),metaTags:$(g.META,[A,T,x,C,Z],e),noscriptTags:$(g.NOSCRIPT,[O],e),onChangeClientState:K(e),scriptTags:$(g.SCRIPT,[S,O],e),styleTags:$(g.STYLE,[w],e),title:W(e),titleAttributes:V(b,e)}}),(function(e){ie&&re(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),pe)((function(){return null})),he=(i=me,a=o=function(e){function t(){return H(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return X({},n,((t={})[r.type]=[].concat(n[r.type]||[],[X({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(n.type){case g.TITLE:return X({},i,((t={})[n.type]=a,t.titleAttributes=X({},o),t));case g.BODY:return X({},i,{bodyAttributes:X({},o)});case g.HTML:return X({},i,{htmlAttributes:X({},o)})}return X({},i,((r={})[n.type]=X({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=X({},t);return Object.keys(e).forEach((function(t){var n;r=X({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return p.default.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(F(i,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=F(e,["children"]),n=X({},r);return t&&(n=this.mapChildrenToProps(t,n)),p.default.createElement(i,n)},z(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(p.default.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(257),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.default.createContext&&n.default.createContext(i),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};function l(e){return e&&e.map((function(e,t){return n.default.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return n.default.createElement(u,a({attr:a({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,i=e.attr,o=e.size,l=e.title,s=c(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.default.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.default.createElement("title",null,l),e.children)};return void 0!==o?n.default.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},4839:function(e,t,r){"use strict";var n,i=r(257),o=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return o.createElement(n,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},9162:function(e,t,r){"use strict";r.d(t,{A:function(){return Y}});var n=r(5444),i=r(5414),o=r(3366),a=r(5505),c=r(257),l=r(1312),s=["className"],u=(0,c.forwardRef)((function(e,t){var r=e.className,n=(0,o.Z)(e,s);return(0,l.tZ)("footer",Object.assign({className:(0,a.Z)("flex flex-col justify-around px-8 h-52 bg-gray-200","sm:flex-row sm:justify-between sm:items-center","md:px-24",r),ref:t},n))})),f=["className"],d=(0,c.forwardRef)((function(e,t){var r=e.className,n=(0,o.Z)(e,f);return(0,l.tZ)("p",Object.assign({className:(0,a.Z)("text-sm font-light text-cyan-600",r),ref:t},n))})),p=["className"],m=(0,c.forwardRef)((function(e,t){var r=e.className,n=(0,o.Z)(e,p);return(0,l.tZ)("p",Object.assign({className:(0,a.Z)("px-1 text-lg font-light text-cyan-600",r),ref:t},n))})),h=["className"],y=(0,c.forwardRef)((function(e,t){var r=e.className,n=(0,o.Z)(e,h);return(0,l.tZ)("div",Object.assign({className:(0,a.Z)("flex flex-col gap-2",r),ref:t},n))})),v=["className"],b=(0,c.forwardRef)((function(e,t){var r=e.className,n=(0,o.Z)(e,v);return(0,l.tZ)("p",Object.assign({className:(0,a.Z)("text-sm font-light text-cyan-600",r),ref:t},n))})),g=["className"],T=(0,c.forwardRef)((function(e,t){var r=e.className,n=(0,o.Z)(e,g);return(0,l.tZ)("p",Object.assign({className:(0,a.Z)("px-1 text-4xl font-light text-cyan-600",r),ref:t},n))})),w=["className"],N=(0,c.forwardRef)((function(e,t){var r=e.className,n=(0,o.Z)(e,w);return(0,l.tZ)("div",Object.assign({className:(0,a.Z)("flex flex-col-reverse gap-3",r),ref:t},n))})),x=u;x.TitleWrapper=N,x.SubTitle=b,x.Title=T,x.AddressWrapper=y,x.Address=d,x.AddressName=m;var O=x,Z=["className"],A=(0,c.forwardRef)((function(e,t){var r=e.className,n=(0,o.Z)(e,Z);return(0,l.tZ)("header",Object.assign({className:(0,a.Z)("flex flex-row justify-between items-center px-8 h-32","lg:px-12 lg:h-40","xl:px-20",r),ref:t},n))})),C=["className"],j=(0,c.forwardRef)((function(e,t){var r=e.className,n=(0,o.Z)(e,C);return(0,l.tZ)("nav",Object.assign({className:(0,a.Z)("hidden","lg:flex lg:flex-row lg:gap-2","xl:gap-9",r),ref:t},n))})),S=r(9499),E=["className"],k=j;k.Item=function(e){var t=e.className,r=(0,o.Z)(e,E),i=(0,S.useLocation)(),s=(0,c.useMemo)((function(){return i.href&&i.origin&&decodeURI(i.href.replace(i.origin,""))===r.to}),[r.to,i.href,i.origin]);return(0,l.tZ)(n.Link,Object.assign({className:(0,a.Z)("text-lg hover:underline transition-all duration-500 decoration-cyan-400 underline-offset-4",s&&"underline",t)},r))};var I=k,M=r(1279),P=r(5531),L=["className","children"],R=["className"],B=(0,c.forwardRef)((function(e,t){var r=e.className,n=e.children,i=(0,o.Z)(e,L),s=(0,P.k)(),u=s[0],f=s[1],d=f.setTrue,p=f.setFalse,m=(0,c.useCallback)((function(e){e.stopPropagation(),p()}),[p]);return(0,l.BX)("nav",Object.assign({className:(0,a.Z)("block","lg:hidden",r),ref:t},i,{children:[(0,l.tZ)("div",{className:(0,a.Z)(u?"hidden":"block"),children:(0,l.BX)("button",{className:"flex flex-col items-center",onClick:d,type:"button",children:[(0,l.tZ)(M.qTj,{size:36}),(0,l.tZ)("span",{className:"text-xs",children:"メニュー"})]})}),(0,l.BX)("div",{className:(0,a.Z)(u?"block":"hidden","fixed top-0 left-0 z-20 w-screen h-screen bg-gray-100 bg-opacity-90","py-24 px-12"),onClick:p,children:[(0,l.tZ)("div",{className:"relative",children:(0,l.tZ)("button",{className:"absolute top-0 right-0 p-2",onClick:p,type:"button",children:(0,l.tZ)(M.oHP,{size:36})})}),(0,l.tZ)("div",{className:"flex flex-col gap-4 w-full h-full",onClick:m,children:n})]})]}))}));B.Item=function(e){var t=e.className,r=(0,o.Z)(e,R),i=(0,S.useLocation)(),s=(0,c.useMemo)((function(){return i.href&&i.origin&&decodeURI(i.href.replace(i.origin,""))===r.to}),[r.to,i.href,i.origin]);return(0,l.tZ)(n.Link,Object.assign({className:(0,a.Z)("inline-block py-3 px-8 max-w-max text-3xl hover:underline decoration-cyan-400 underline-offset-4",s&&"underline",t)},r))};var _=B,q=["className"],D=(0,c.forwardRef)((function(e,t){var r=e.className,n=(0,o.Z)(e,q);return(0,l.tZ)("p",Object.assign({className:(0,a.Z)("text-sm font-light",r),ref:t},n))})),H=["className"],z=(0,c.forwardRef)((function(e,t){var r=e.className,n=(0,o.Z)(e,H);return(0,l.tZ)("h1",Object.assign({className:(0,a.Z)("px-1 text-4xl font-light",r),ref:t},n))})),X=r(8037),F=A;F.Title=z,F.SubTitle=D,F.TitleWrapper=function(e){var t=e.className,r=e.children;return(0,l.tZ)(X.ZP,{className:(0,a.Z)("flex flex-col-reverse gap-4",t),to:"/",children:r})},F.Nav=I,F.NavMobile=_;var U=F,Y=function(e){var t,r,o,a,c=e.children,s=(0,n.useStaticQuery)("1742117477").site;return(0,l.BX)("div",{className:"flex flex-col min-h-screen font-noto text-gray-600 bg-gray-50",children:[(0,l.tZ)(i.q,{children:(0,l.tZ)("html",{className:"scroll-smooth",lang:"ja"})}),(0,l.BX)(U,{className:"flex-shrink-0",children:[(0,l.BX)(U.TitleWrapper,{children:[(0,l.tZ)(U.Title,{children:null==s||null===(t=s.siteMetadata)||void 0===t?void 0:t.title}),(0,l.tZ)(U.SubTitle,{children:null==s||null===(r=s.siteMetadata)||void 0===r?void 0:r.subTitle})]}),(0,l.BX)(U.Nav,{children:[(0,l.tZ)(U.Nav.Item,{to:"/#研究内容の紹介",children:"研究概要"}),(0,l.tZ)(U.Nav.Item,{to:"/#研究者案内",children:"研究者紹介"}),(0,l.tZ)(U.Nav.Item,{to:"/#データの更新",children:"データについて"}),(0,l.tZ)(U.Nav.Item,{to:"/#お知らせ",children:"お知らせ"}),(0,l.tZ)(U.Nav.Item,{to:"/#お問い合わせ",children:"お問い合わせ"})]}),(0,l.BX)(U.NavMobile,{children:[(0,l.tZ)(U.NavMobile.Item,{to:"/#研究内容の紹介",children:"研究概要"}),(0,l.tZ)(U.NavMobile.Item,{to:"/#研究者案内",children:"研究者紹介"}),(0,l.tZ)(U.NavMobile.Item,{to:"/#データの更新",children:"データについて"}),(0,l.tZ)(U.NavMobile.Item,{to:"/#お知らせ",children:"お知らせ"}),(0,l.tZ)(U.NavMobile.Item,{to:"/#お問い合わせ",children:"お問い合わせ"})]})]}),(0,l.tZ)("main",{className:"flex flex-col flex-1 gap-5",children:c}),(0,l.BX)(O,{className:"flex-shrink-0",children:[(0,l.BX)(O.TitleWrapper,{children:[(0,l.tZ)(O.Title,{children:null==s||null===(o=s.siteMetadata)||void 0===o?void 0:o.title}),(0,l.tZ)(O.SubTitle,{children:null==s||null===(a=s.siteMetadata)||void 0===a?void 0:a.subTitle})]}),(0,l.BX)(O.AddressWrapper,{children:[(0,l.tZ)(O.AddressName,{children:"金沢八景キャンパス"}),(0,l.tZ)(O.Address,{children:"〒236-0027 横浜市金沢区瀬戸22-2"})]})]})]})}},111:function(e,t,r){"use strict";r.d(t,{p:function(){return a}});var n=r(5444),i=r(5414),o=r(1312),a=function(e){var t,r,a,c,l,s,u,f,d,p,m,h,y,v,b,g=e.title,T=e.description,w=e.twitterTitle,N=e.twitterDescription,x=e.type,O=void 0===x?"website":x,Z=(0,n.useStaticQuery)("2515209461").site;return(0,o.BX)(i.q,{defaultTitle:null==Z||null===(t=Z.siteMetadata)||void 0===t?void 0:t.title,titleTemplate:"%s | "+(null==Z||null===(r=Z.siteMetadata)||void 0===r?void 0:r.title),children:[(0,o.tZ)("title",{children:g}),(0,o.tZ)("meta",{content:null!=T?T:null==Z||null===(a=Z.siteMetadata)||void 0===a?void 0:a.description,property:"description"}),(0,o.tZ)("meta",{content:g,property:"og:title"}),(0,o.tZ)("meta",{content:null==Z||null===(c=Z.siteMetadata)||void 0===c?void 0:c.title,property:"og:site_name"}),(0,o.tZ)("meta",{content:null!=T?T:null==Z||null===(l=Z.siteMetadata)||void 0===l?void 0:l.description,property:"og:description"}),(0,o.tZ)("meta",{content:O,property:"og:type"}),(0,o.tZ)("meta",{content:null!==(s=null!=w?w:g)&&void 0!==s?s:null==Z||null===(u=Z.siteMetadata)||void 0===u?void 0:u.title,property:"twitter:title"}),(0,o.tZ)("meta",{content:null!==(f=null!=N?N:T)&&void 0!==f?f:null==Z||null===(d=Z.siteMetadata)||void 0===d?void 0:d.description,property:"twitter:description"}),(0,o.tZ)("meta",{content:null==Z||null===(p=Z.siteMetadata)||void 0===p||null===(m=p.twitter)||void 0===m?void 0:m.creator,property:"twitter:creator"}),(0,o.tZ)("meta",{content:null==Z||null===(h=Z.siteMetadata)||void 0===h||null===(y=h.twitter)||void 0===y?void 0:y.account,property:"twitter:site"}),(0,o.tZ)("meta",{content:null==Z||null===(v=Z.siteMetadata)||void 0===v||null===(b=v.facebook)||void 0===b?void 0:b.accountId,property:"fb:admins"})]})}},8403:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(3366),i=r(5505),o=r(257),a=r(1312),c=["className"],l=(0,o.forwardRef)((function(e,t){var r=e.className,o=(0,n.Z)(e,c);return(0,a.tZ)("section",Object.assign({className:(0,i.Z)("relative py-5",r),ref:t},o))})),s=["className"],u=(0,o.forwardRef)((function(e,t){var r=e.className,o=(0,n.Z)(e,s);return(0,a.tZ)("div",Object.assign({className:(0,i.Z)("py-12 px-4 sm:px-8 mx-auto max-w-5xl",r),ref:t},o))})),f=["className"],d=(0,o.forwardRef)((function(e,t){var r=e.className,o=(0,n.Z)(e,f);return(0,a.BX)("div",{className:"flex flex-row gap-5 items-center",children:[(0,a.tZ)("div",{className:(0,i.Z)("w-12 border-0 h-[1.125px] bg-cyan-600","sm:w-28")}),(0,a.tZ)("h2",Object.assign({className:(0,i.Z)("flex-1 text-4xl font-light",r),ref:t},o))]})})),p=l;p.Title=d,p.Body=u;var m=p},5531:function(e,t,r){"use strict";r.d(t,{k:function(){return i}});var n=r(257),i=function(e){void 0===e&&(e=!1);var t=(0,n.useState)(e),r=t[0],i=t[1],o=(0,n.useCallback)((function(){return i((function(e){return!e}))}),[]),a=(0,n.useCallback)((function(){return i(!0)}),[]);return[r,{setFalse:(0,n.useCallback)((function(){return i(!1)}),[]),setTrue:a,setValue:i,toggle:o}]}}}]);
//# sourceMappingURL=commons-a8a6de3d21c797a7dcb2.js.map