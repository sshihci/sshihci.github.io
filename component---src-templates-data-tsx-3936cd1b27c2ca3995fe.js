"use strict";(self.webpackChunksshihci_github_io=self.webpackChunksshihci_github_io||[]).push([[649],{6429:function(e,n,r){r.d(n,{z:function(){return f}});var t=r(3366),a=r(5505),i=r(257),l=r(9080),o=r(1312),c=["className","isActive"],f=(0,i.forwardRef)((function(e,n){var r=e.className,i=e.isActive,f=(0,t.Z)(e,c);return(0,o.tZ)("button",Object.assign({className:(0,a.Z)("",l.u,i&&"after:absolute after:right-4 after:leading-6 rounded-2xl before:!right-0 after:content-arrow-right-icon",r),ref:n,type:"button"},f))}))},5254:function(e,n,r){r.d(n,{r:function(){return s}});var t=r(3366),a=r(5505),i=r(5444),l=r(8149),o=r(9080),c=r(1312),f=["className","to"],s=function(e){var n=e.className,r=e.to,s=(0,t.Z)(e,f);return(0,l.r)(r)?(0,c.tZ)(i.Link,Object.assign({className:(0,a.Z)("",o.u,n),to:r},s)):(0,c.tZ)("a",Object.assign({className:(0,a.Z)("",o.u,n),href:r,rel:"noopener noreferrer",target:"_blank"},s))}},9080:function(e,n,r){r.d(n,{u:function(){return t}});var t=(0,r(5505).Z)("overflow-hidden relative py-1.5 px-6 text-sm text-center bg-gray-50 border min-w-[13rem] border-cyan-600 text-cyan-600","before:absolute before:w-full before:h-full before:bg-opacity-30 before:duration-200 before:bg-cyan-200","before:top-0 before:right-full hover:before:right-0","hover:rounded-2xl duration-500")},3273:function(e,n,r){r.d(n,{$:function(){return f}});var t=r(5505),a=r(5444),i=r(257),l=r(1279),o=r(1312),c={pdf:l.ih9,xlsx:l.BXA,xlx:l.BXA},f=function(e){var n=e.name,r=e.className,f=e.display,s=(0,a.useStaticQuery)("2505511569").allFile,u=(0,i.useMemo)((function(){return s.nodes.find((function(e){return e.relativePath===n||e.name===n||e.base===n}))}),[s.nodes,n]),d=(0,i.useMemo)((function(){var e;return u&&null!==(e=c[u.extension])&&void 0!==e?e:l.opy}),[u]);return u?(0,o.tZ)("div",{children:(0,o.BX)("a",{className:(0,t.Z)("flex flex-row flex-nowrap gap-2 items-center py-2 px-4","hover:underline hover:underline-offset-2",r),download:!0,href:u.publicURL,children:[(0,o.tZ)(d,{className:(0,t.Z)("flex-shrink-0","pdf"===u.extension?"text-rose-500 border-rose-500":"xlsx"===u.extension||"xlx"===u.extension?"text-emerald-500 border-emerald-500":"border-gray-600"),size:24}),(0,o.tZ)("span",{className:"text-lg",children:null!=f?f:u.base})]})}):(0,o.tZ)("div",{children:"ファイルが見つかりません"})}},7750:function(e,n,r){r.d(n,{t:function(){return u}});var t,a=r(3366),i=r(1880),l=r(5505),o=r(257),c=r(3273),f=r(1312),s=["className","file"],u=((0,String.raw)(t||(t=(0,i.Z)(["\n  fragment DataSectionBlockFile on ConfigYamlFiles {\n    name\n    date\n    pdf {\n      relativePath\n    }\n    excel {\n      relativePath\n    }\n  }\n"]))),(0,o.forwardRef)((function(e,n){var r,t,i=e.className,o=e.file,u=(0,a.Z)(e,s);return o.name&&null!==(r=o.excel)&&void 0!==r&&r.relativePath&&null!==(t=o.pdf)&&void 0!==t&&t.relativePath?(0,f.BX)("div",Object.assign({className:(0,l.Z)("flex flex-col gap-3",i)},u,{ref:n,children:[(0,f.tZ)("p",{children:o.date}),(0,f.tZ)("p",{className:"text-lg",children:o.name}),(0,f.BX)("ul",{className:"flex flex-col gap-3 p-4 bg-opacity-20 bg-cyan-200",children:[(0,f.tZ)("li",{children:(0,f.tZ)(c.$,{display:"データソースと公開URL",name:o.pdf.relativePath})}),(0,f.tZ)("li",{children:(0,f.tZ)(c.$,{display:"データ一覧",name:o.excel.relativePath})})]})]})):null})))},2436:function(e,n,r){r.d(n,{v:function(){return d}});var t,a=r(3366),i=r(1880),l=r(5505),o=r(257),c=r(6429),f=r(5254),s=r(1312),u=["className","currentConfig","allConfig"],d=((0,String.raw)(t||(t=(0,i.Z)(["\n  fragment DataSectionNavigationCurrentConfig on ConfigYaml {\n    year\n  }\n  fragment DataSectionNavigationAllConfig on ConfigYaml {\n    year\n    id\n  }\n"]))),(0,o.forwardRef)((function(e,n){var r=e.className,t=e.currentConfig,i=e.allConfig,o=(0,a.Z)(e,u);return(0,s.tZ)("ul",Object.assign({className:(0,l.Z)("flex flex-col gap-1",r),ref:n},o,{children:null==i?void 0:i.map((function(e){return e.year===(null==t?void 0:t.year)?(0,s.tZ)("li",{children:(0,s.tZ)(c.z,{className:"block w-full text-cyan-800",disabled:!0,isActive:!0,children:e.year+"年度"})},e.id):(0,s.tZ)("li",{children:(0,s.tZ)(f.r,{className:"block text-cyan-800",to:"/data/"+e.year,children:e.year+"年度"})},e.id)}))}))})))},8149:function(e,n,r){r.d(n,{r:function(){return i}});var t=r(9499),a=r(257),i=function(e){var n=(0,t.useLocation)();return(0,a.useMemo)((function(){if(e.startsWith("/")||e.startsWith("#")||e.startsWith("."))return!0;try{var r=new URL(e),t=new URL(n.href);return r.origin===t.origin}catch(a){return!1}}),[n.href,e])}},9977:function(e,n,r){r.d(n,{j:function(){return t}});var t=function(e){return null!=e}},5372:function(e,n,r){r.r(n);var t=r(9162),a=r(111),i=r(7750),l=r(2436),o=r(8403),c=r(9977),f=r(1312);n.default=function(e){var n,r,s,u,d,m=e.data;return(0,f.BX)(t.A,{children:[(0,f.tZ)(a.p,{canonical:"/data/"+(null===(n=m.configYaml)||void 0===n?void 0:n.year),title:(null===(r=m.configYaml)||void 0===r?void 0:r.year)+"年度の資料"}),(0,f.BX)(o.Z,{children:[(0,f.tZ)(o.Z.Title,{children:(null===(s=m.configYaml)||void 0===s?void 0:s.year)+"年度の資料"}),(0,f.tZ)(o.Z.Body,{children:(0,f.BX)("div",{className:"flex flex-col md:flex-row gap-12",children:[(0,f.tZ)("div",{className:"max-w-sm md:max-w-xs",children:(0,f.tZ)(l.v,{allConfig:m.allConfigYaml.nodes,currentConfig:m.configYaml})}),(0,f.tZ)("div",{className:"flex-1",children:(0,f.tZ)("div",{className:"flex flex-col gap-8 mb-4 max-w-lg",children:null===(u=m.configYaml)||void 0===u||null===(d=u.files)||void 0===d?void 0:d.filter(c.j).map((function(e){return(0,f.tZ)(i.t,{file:e},e.name)}))})})]})})]})]})}},1880:function(e,n,r){function t(e,n){return n||(n=e.slice(0)),e.raw=n,e}r.d(n,{Z:function(){return t}})}}]);
//# sourceMappingURL=component---src-templates-data-tsx-3936cd1b27c2ca3995fe.js.map