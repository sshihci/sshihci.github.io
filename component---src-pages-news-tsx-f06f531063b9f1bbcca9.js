"use strict";(self.webpackChunksshihci_github_io=self.webpackChunksshihci_github_io||[]).push([[114],{7417:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(8037),i=n(5505),a=n(8192),o=n(9900),u=n(257),c=n(8614),l=n(296);var s=n(5749),f=n(1751),d=0;function m(){var e=d;return d++,e}var v=function(e){var t=e.children,n=e.initial,r=e.isPresent,i=e.onExitComplete,a=e.custom,c=e.presenceAffectsLayout,l=(0,f.h)(h),d=(0,f.h)(m),v=(0,u.useMemo)((function(){return{id:d,initial:n,isPresent:r,custom:a,onExitComplete:function(e){var t,n;l.set(e,!0);try{for(var r=(0,o.XA)(l.values()),a=r.next();!a.done;a=r.next()){if(!a.value)return}}catch(u){t={error:u}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}null==i||i()},register:function(e){return l.set(e,!1),function(){return l.delete(e)}}}}),c?void 0:[r]);return(0,u.useMemo)((function(){l.forEach((function(e,t){return l.set(t,!1)}))}),[r]),u.useEffect((function(){!r&&!l.size&&(null==i||i())}),[r]),u.createElement(s.O.Provider,{value:v},t)};function h(){return new Map}var g=n(8522);function p(e){return e.key||""}var x=function(e){var t=e.children,n=e.custom,r=e.initial,i=void 0===r||r,a=e.onExitComplete,s=e.exitBeforeEnter,f=e.presenceAffectsLayout,d=void 0===f||f,m=(0,o.CR)(function(){var e=(0,u.useRef)(!1),t=(0,o.CR)((0,u.useState)(0),2),n=t[0],r=t[1];(0,l.z)((function(){return e.current=!0}));var i=(0,u.useCallback)((function(){!e.current&&r(n+1)}),[n]);return[(0,u.useCallback)((function(){return c.ZP.postRender(i)}),[i]),n]}(),1),h=m[0],x=(0,u.useContext)(g.p).forceRender;x&&(h=x);var P=(0,u.useRef)(!0),k=(0,u.useRef)(!0);(0,u.useEffect)((function(){return function(){k.current=!1}}),[]);var y=function(e){var t=[];return u.Children.forEach(e,(function(e){(0,u.isValidElement)(e)&&t.push(e)})),t}(t),Z=(0,u.useRef)(y),C=(0,u.useRef)(new Map).current,b=(0,u.useRef)(new Set).current;if(function(e,t){e.forEach((function(e){var n=p(e);t.set(n,e)}))}(y,C),P.current)return P.current=!1,u.createElement(u.Fragment,null,y.map((function(e){return u.createElement(v,{key:p(e),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:d},e)})));for(var N=(0,o.ev)([],(0,o.CR)(y),!1),E=Z.current.map(p),w=y.map(p),M=E.length,T=0;T<M;T++){var R=E[T];-1===w.indexOf(R)?b.add(R):b.delete(R)}return s&&b.size&&(N=[]),b.forEach((function(e){if(-1===w.indexOf(e)){var t=C.get(e);if(t){var r=E.indexOf(e);N.splice(r,0,u.createElement(v,{key:p(t),isPresent:!1,onExitComplete:function(){C.delete(e),b.delete(e);var t=Z.current.findIndex((function(t){return t.key===e}));if(Z.current.splice(t,1),!b.size){if(Z.current=y,!1===k.current)return;h(),a&&a()}},custom:n,presenceAffectsLayout:d},t))}}})),N=N.map((function(e){var t=e.key;return b.has(t)?e:u.createElement(v,{key:p(e),isPresent:!0,presenceAffectsLayout:d},e)})),Z.current=N,u.createElement(u.Fragment,null,b.size?N:N.map((function(e){return(0,u.cloneElement)(e)})))},P=function(e){var t=e.perPage,n=e.items,r=e.initial,i=function(e){void 0===e&&(e=0);var t=(0,u.useState)(e),n=t[0],r=t[1],i=(0,u.useCallback)((function(e){return r((function(t){return t+e}))}),[]),a=(0,u.useCallback)((function(){return i(1)}),[i]),o=(0,u.useCallback)((function(e){return r((function(t){return t-e}))}),[]);return[n,{decrement:(0,u.useCallback)((function(){return o(1)}),[o]),decrementN:o,increment:a,incrementN:i,setValue:r}]}(void 0===r?1:r),a=i[0],o=i[1],c=o.increment,l=o.decrement,s=o.setValue,f=(0,u.useMemo)((function(){return Math.ceil(n.length/t)}),[t,n.length]),d=(0,u.useMemo)((function(){return a<f?a+1:null}),[a,f]),m=(0,u.useMemo)((function(){return null!==d}),[d]),v=(0,u.useMemo)((function(){return a>1?a-1:null}),[a]),h=(0,u.useMemo)((function(){return null!==v}),[v]),g=(0,u.useMemo)((function(){var e=(a-1)*t,r=a*t;return n.slice(e,r)}),[a,n,t]),p=(0,u.useCallback)((function(){d&&c()}),[c,d]),x=(0,u.useCallback)((function(){v&&l()}),[l,v]),P=(0,u.useCallback)((function(e){e>0&&e<=f&&s(e)}),[s,f]);return{currentItems:g,currentPage:a,goTo:P,goToNextPage:p,goToPrevPage:x,hasNextPage:m,hasPrevPage:h,nextPage:d,prevPage:v,totalPage:f}},k=n(2297),y=n(1279),Z=n(2982),C=n(5538),b=n(5531),N=n(1312),E=function(e){var t=e.onClick,n=e.isCurrent,r=e.page,i=(0,b.k)(),o=i[0],c=i[1],l=c.setTrue,s=c.setFalse,f=(0,u.useMemo)((function(){return n?C.knk:C.O6Y}),[n]);return(0,N.tZ)("div",{className:"flex flex-row justify-center",children:(0,N.BX)("button",{className:"relative w-4 h-4",onClick:t,onMouseEnter:l,onMouseLeave:s,onTouchEnd:s,onTouchStart:l,type:"button",children:[(0,N.tZ)(a.E.div,{animate:{scale:o?.1:1},children:(0,N.tZ)(f,{size:12})}),(0,N.tZ)(a.E.div,{animate:{scale:o?1:0},className:"absolute -top-2",children:(0,N.tZ)("span",{children:r})})]})})},w=function(e){var t,n,r=e.goToNextPage,a=e.goToPrevPage,o=e.hasNextPage,c=e.hasPrevPage,l=e.totalPage,s=e.className,f=e.currentPage,d=e.goTo,m=(0,u.useCallback)((function(e){return function(){return d(e)}}),[d]);return(0,N.BX)("div",{className:(0,i.Z)("flex flex-row gap-2 items-center",s),children:[(0,N.tZ)("div",{className:"flex flex-row justify-center",children:(0,N.tZ)("button",{disabled:!c,onClick:a,type:"button",children:(0,N.tZ)(y.CF5,{size:24})})}),(0,N.tZ)("div",{className:"flex flex-row gap-2 items-center",children:(t=1,n=l+1,(0,Z.Z)(Array(n-t)).map((function(e,n){return t+n}))).map((function(e){return(0,N.tZ)(E,{isCurrent:f===e,onClick:m(e),page:e},e)}))}),(0,N.tZ)("div",{className:"flex flex-row justify-center",children:(0,N.tZ)("button",{disabled:!o,onClick:r,type:"button",children:(0,N.tZ)(y.Td4,{size:24})})})]})},M=function(e){var t,n=e.children,r=e.index,i=(0,u.useRef)(null),o=(0,k.K)(i);return(0,N.tZ)(a.E.div,{animate:{opacity:1,x:0},exit:{opacity:0,position:"absolute",top:(null!==(t=null==o?void 0:o.height)&&void 0!==t?t:0)*r,width:"100%",x:-300},initial:{opacity:0,x:300},ref:i,role:"listitem",transition:{duration:.3},children:n})},T=function(e){var t=e.items,n=e.perPage,r=e.renderItem,a=e.commonProps,o=e.keyExtractor,u=e.listClassName,c=e.className,l=P({items:t,perPage:n}),s=l.currentPage,f=l.totalPage,d=l.currentItems,m=l.goToPrevPage,v=l.goToNextPage,h=l.hasNextPage,g=l.hasPrevPage,p=l.goTo;return(0,N.BX)("div",{className:(0,i.Z)("",c),children:[(0,N.tZ)("div",{className:(0,i.Z)("flex relative flex-col",u),role:"list",children:(0,N.tZ)(x,{children:d.map((function(e,t){return(0,N.tZ)(M,{index:t,children:r({commonProps:a,index:t,item:e})},o(e))}))})}),(0,N.tZ)(w,{className:"mx-auto max-w-max",currentPage:s,goTo:p,goToNextPage:v,goToPrevPage:m,hasNextPage:h,hasPrevPage:g,totalPage:f})]})},R=n(9162),B=n(111),z=n(8403),A=function(e){return e.id},X=function(e){var t,n,i,a,o,u,c,l=e.item;return(0,N.BX)(r.ZP,{className:"flex flex-row items-end mb-4 border-b border-cyan-600 hover:bg-cyan-50",to:"/news/"+((null===(t=l.childMarkdownRemark)||void 0===t||null===(n=t.frontmatter)||void 0===n?void 0:n.slug)||l.name),children:[(0,N.BX)("div",{className:"flex flex-col-reverse flex-shrink-0",children:[(0,N.tZ)("p",{className:"py-2 px-6 group-hover:text-gray-700",children:null===(i=l.childMarkdownRemark)||void 0===i||null===(a=i.frontmatter)||void 0===a?void 0:a.title}),(0,N.tZ)("p",{className:"font-light text-cyan-600 group-hover:text-cyan-700",children:null===(o=l.childMarkdownRemark)||void 0===o||null===(u=o.frontmatter)||void 0===u?void 0:u.date})]}),(0,N.tZ)("p",{className:"py-1 px-3 text-sm",children:null===(c=l.childMarkdownRemark)||void 0===c?void 0:c.excerpt})]})},L=function(e){var t,n,r,i=e.data;return(0,N.BX)(R.A,{children:[(0,N.tZ)(B.p,{title:"お知らせ一覧"}),(0,N.BX)(z.Z,{children:[(0,N.tZ)(z.Z.Title,{children:"お知らせ一覧"}),(0,N.tZ)(z.Z.Body,{children:(0,N.tZ)(T,{className:"mx-auto max-w-4xl",commonProps:{},items:i.allFile.nodes,keyExtractor:A,listClassName:"mb-4",perPage:null!==(t=null===(n=i.site)||void 0===n||null===(r=n.siteMetadata)||void 0===r?void 0:r.newsPerPage)&&void 0!==t?t:5,renderItem:X})})]})]})}}}]);
//# sourceMappingURL=component---src-pages-news-tsx-f06f531063b9f1bbcca9.js.map