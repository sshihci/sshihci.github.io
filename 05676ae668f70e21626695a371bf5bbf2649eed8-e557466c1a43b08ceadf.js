"use strict";(self.webpackChunksshihci_github_io=self.webpackChunksshihci_github_io||[]).push([[403],{5505:function(e,t,s){function r(e){var t,s,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=r(e[t]))&&(a&&(a+=" "),a+=s);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,s=0,a="";s<arguments.length;)(e=arguments[s++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}s.d(t,{Z:function(){return a}})},1046:function(e,t,s){s.d(t,{w_:function(){return o}});var r=s(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=r.createContext&&r.createContext(a),l=function(){return l=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++)for(var a in t=arguments[s])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},i=function(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(s[r[a]]=e[r[a]])}return s};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function o(e){return function(t){return r.createElement(f,l({attr:l({},e.attr)},t),c(e.child))}}function f(e){var t=function(t){var s,a=e.attr,n=e.size,c=e.title,o=i(e,["attr","size","title"]),f=n||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,o,{className:s,style:l(l({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==n?r.createElement(n.Consumer,null,(function(e){return t(e)})):t(a)}},9162:function(e,t,s){s.d(t,{A:function(){return V}});var r=s(5444),a=s(3366),n=s(5505),l=s(7294),i=s(5893),c=["className"],o=(0,l.forwardRef)((function(e,t){var s=e.className,r=(0,a.Z)(e,c);return(0,i.jsx)("footer",Object.assign({className:(0,n.Z)("flex flex-col justify-around px-8 h-52 bg-gray-200","sm:flex-row sm:justify-between sm:items-center","md:px-24",s),ref:t},r))})),f=["className"],u=(0,l.forwardRef)((function(e,t){var s=e.className,r=(0,a.Z)(e,f);return(0,i.jsx)("p",Object.assign({className:(0,n.Z)("text-sm font-light text-cyan-600",s),ref:t},r))})),d=["className"],x=(0,l.forwardRef)((function(e,t){var s=e.className,r=(0,a.Z)(e,d);return(0,i.jsx)("p",Object.assign({className:(0,n.Z)("px-1 text-lg font-light text-cyan-600",s),ref:t},r))})),m=["className"],h=(0,l.forwardRef)((function(e,t){var s=e.className,r=(0,a.Z)(e,m);return(0,i.jsx)("div",Object.assign({className:(0,n.Z)("flex flex-col gap-2",s),ref:t},r))})),N=["className"],v=(0,l.forwardRef)((function(e,t){var s=e.className,r=(0,a.Z)(e,N);return(0,i.jsx)("p",Object.assign({className:(0,n.Z)("text-sm font-light text-cyan-600",s),ref:t},r))})),j=["className"],p=(0,l.forwardRef)((function(e,t){var s=e.className,r=(0,a.Z)(e,j);return(0,i.jsx)("p",Object.assign({className:(0,n.Z)("px-1 text-4xl font-light text-cyan-600",s),ref:t},r))})),g=["className"],b=(0,l.forwardRef)((function(e,t){var s=e.className,r=(0,a.Z)(e,g);return(0,i.jsx)("div",Object.assign({className:(0,n.Z)("flex flex-col-reverse gap-3",s),ref:t},r))})),y=o;y.TitleWrapper=b,y.SubTitle=v,y.Title=p,y.AddressWrapper=h,y.Address=u,y.AddressName=x;var Z=y,w=["className"],O=(0,l.forwardRef)((function(e,t){var s=e.className,r=(0,a.Z)(e,w);return(0,i.jsx)("header",Object.assign({className:(0,n.Z)("flex flex-row justify-between items-center px-8 h-32","lg:px-12 lg:h-40","xl:px-20",s),ref:t},r))})),k=["className"],R=(0,l.forwardRef)((function(e,t){var s=e.className,r=(0,a.Z)(e,k);return(0,i.jsx)("nav",Object.assign({className:(0,n.Z)("hidden","lg:flex lg:flex-row lg:gap-2","xl:gap-9",s),ref:t},r))})),T=s(9499),C=["className"],I=R;I.Item=function(e){var t=e.className,s=(0,a.Z)(e,C),c=(0,T.useLocation)(),o=(0,l.useMemo)((function(){return c.href&&c.origin&&decodeURI(c.href.replace(c.origin,""))===s.to}),[s.to,c.href,c.origin]);return(0,i.jsx)(r.Link,Object.assign({className:(0,n.Z)("text-lg hover:underline transition-all duration-500 decoration-cyan-400 underline-offset-4",o&&"underline",t)},s))};var M=I,A=s(1279),S=s(5531),z=["className","children"],W=["className"],E=(0,l.forwardRef)((function(e,t){var s=e.className,r=e.children,c=(0,a.Z)(e,z),o=(0,S.k)(),f=o[0],u=o[1],d=u.setTrue,x=u.setFalse,m=(0,l.useCallback)((function(e){e.stopPropagation(),x()}),[x]);return(0,i.jsxs)("nav",Object.assign({className:(0,n.Z)("block","lg:hidden",s),ref:t},c,{children:[(0,i.jsx)("div",{className:(0,n.Z)(f?"hidden":"block"),children:(0,i.jsxs)("button",{className:"flex flex-col items-center",onClick:d,type:"button",children:[(0,i.jsx)(A.qTj,{size:36}),(0,i.jsx)("span",{className:"text-xs",children:"メニュー"})]})}),(0,i.jsxs)("div",{className:(0,n.Z)(f?"block":"hidden","fixed top-0 left-0 z-20 w-screen h-screen bg-gray-100 bg-opacity-90","py-24 px-12"),onClick:x,children:[(0,i.jsx)("div",{className:"relative",children:(0,i.jsx)("button",{className:"absolute top-0 right-0 p-2",onClick:x,type:"button",children:(0,i.jsx)(A.oHP,{size:36})})}),(0,i.jsx)("div",{className:"flex flex-col gap-4 w-full h-full",onClick:m,children:r})]})]}))}));E.Item=function(e){var t=e.className,s=(0,a.Z)(e,W),c=(0,T.useLocation)(),o=(0,l.useMemo)((function(){return c.href&&c.origin&&decodeURI(c.href.replace(c.origin,""))===s.to}),[s.to,c.href,c.origin]);return(0,i.jsx)(r.Link,Object.assign({className:(0,n.Z)("inline-block py-3 px-8 max-w-max text-3xl hover:underline decoration-cyan-400 underline-offset-4",o&&"underline",t)},s))};var P=E,_=["className"],L=(0,l.forwardRef)((function(e,t){var s=e.className,r=(0,a.Z)(e,_);return(0,i.jsx)("p",Object.assign({className:(0,n.Z)("text-sm font-light",s),ref:t},r))})),F=["className"],U=(0,l.forwardRef)((function(e,t){var s=e.className,r=(0,a.Z)(e,F);return(0,i.jsx)("h1",Object.assign({className:(0,n.Z)("px-1 text-4xl font-light",s),ref:t},r))})),q=["className"],B=(0,l.forwardRef)((function(e,t){var s=e.className,r=(0,a.Z)(e,q);return(0,i.jsx)("div",Object.assign({className:(0,n.Z)("flex flex-col-reverse gap-4",s),ref:t},r))})),H=O;H.Title=U,H.SubTitle=L,H.TitleWrapper=B,H.Nav=M,H.NavMobile=P;var Q=H,V=function(e){var t,s,a,n,l=e.children,c=(0,r.useStaticQuery)("1742117477").site;return(0,i.jsxs)("div",{className:"flex flex-col min-h-screen font-noto text-gray-600 bg-gray-50",children:[(0,i.jsxs)(Q,{className:"flex-shrink-0",children:[(0,i.jsxs)(Q.TitleWrapper,{children:[(0,i.jsx)(Q.Title,{children:null==c||null===(t=c.siteMetadata)||void 0===t?void 0:t.title}),(0,i.jsx)(Q.SubTitle,{children:null==c||null===(s=c.siteMetadata)||void 0===s?void 0:s.subTitle})]}),(0,i.jsxs)(Q.Nav,{children:[(0,i.jsx)(Q.Nav.Item,{to:"/#研究内容の紹介",children:"研究概要"}),(0,i.jsx)(Q.Nav.Item,{to:"/#研究者案内",children:"研究者紹介"}),(0,i.jsx)(Q.Nav.Item,{to:"/#データについて",children:"データについて"}),(0,i.jsx)(Q.Nav.Item,{to:"/#お知らせ",children:"お知らせ"}),(0,i.jsx)(Q.Nav.Item,{to:"/#お問い合わせ",children:"お問い合わせ"})]}),(0,i.jsxs)(Q.NavMobile,{children:[(0,i.jsx)(Q.NavMobile.Item,{to:"/#研究内容の紹介",children:"研究概要"}),(0,i.jsx)(Q.NavMobile.Item,{to:"/#研究者案内",children:"研究者紹介"}),(0,i.jsx)(Q.NavMobile.Item,{to:"/#データについて",children:"データについて"}),(0,i.jsx)(Q.NavMobile.Item,{to:"/#お知らせ",children:"お知らせ"}),(0,i.jsx)(Q.NavMobile.Item,{to:"/#お問い合わせ",children:"お問い合わせ"})]})]}),(0,i.jsx)("main",{className:"flex flex-col flex-1 gap-5",children:l}),(0,i.jsxs)(Z,{className:"flex-shrink-0",children:[(0,i.jsxs)(Z.TitleWrapper,{children:[(0,i.jsx)(Z.Title,{children:null==c||null===(a=c.siteMetadata)||void 0===a?void 0:a.title}),(0,i.jsx)(Z.SubTitle,{children:null==c||null===(n=c.siteMetadata)||void 0===n?void 0:n.subTitle})]}),(0,i.jsxs)(Z.AddressWrapper,{children:[(0,i.jsx)(Z.AddressName,{children:"金沢八景キャンパス"}),(0,i.jsx)(Z.Address,{children:"〒236-0027 横浜市金沢区瀬戸22-2"})]})]})]})}},8403:function(e,t,s){s.d(t,{Z:function(){return m}});var r=s(3366),a=s(5505),n=s(7294),l=s(5893),i=["className"],c=(0,n.forwardRef)((function(e,t){var s=e.className,n=(0,r.Z)(e,i);return(0,l.jsx)("section",Object.assign({className:(0,a.Z)("relative py-5",s),ref:t},n))})),o=["className"],f=(0,n.forwardRef)((function(e,t){var s=e.className,n=(0,r.Z)(e,o);return(0,l.jsx)("div",Object.assign({className:(0,a.Z)("py-12 px-4 sm:px-8 mx-auto max-w-5xl",s),ref:t},n))})),u=["className"],d=(0,n.forwardRef)((function(e,t){var s=e.className,n=(0,r.Z)(e,u);return(0,l.jsxs)("div",{className:"flex flex-row gap-5 items-center",children:[(0,l.jsx)("div",{className:(0,a.Z)("w-12 border-0 h-[1.125px] bg-cyan-600","sm:w-28")}),(0,l.jsx)("h2",Object.assign({className:(0,a.Z)("flex-1 text-4xl font-light",s),ref:t},n))]})})),x=c;x.Title=d,x.Body=f;var m=x},5531:function(e,t,s){s.d(t,{k:function(){return a}});var r=s(7294),a=function(e){void 0===e&&(e=!1);var t=(0,r.useState)(e),s=t[0],a=t[1],n=(0,r.useCallback)((function(){return a((function(e){return!e}))}),[]),l=(0,r.useCallback)((function(){return a(!0)}),[]);return[s,{setFalse:(0,r.useCallback)((function(){return a(!1)}),[]),setTrue:l,setValue:a,toggle:n}]}}}]);
//# sourceMappingURL=05676ae668f70e21626695a371bf5bbf2649eed8-e557466c1a43b08ceadf.js.map