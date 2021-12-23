"use strict";(self.webpackChunksshihci_github_io=self.webpackChunksshihci_github_io||[]).push([[691],{1901:function(e,a,t){t.r(a),t.d(a,{default:function(){return ea}});var r=t(6125),n=t(257),l=t(3366),s=t(9499),i=t(5505),c=t(5444),o=(0,i.Z)("py-1.5 px-16 text-sm bg-gray-50 border border-cyan-600 text-cyan-600","hover:bg-cyan-100 hover:text-cyan-700","before:w-10 before:h-10 before:bg-blue-200"),d=t(1312),f=["className","to"],u=function(e){var a=e.className,t=e.to,r=(0,l.Z)(e,f),u=(0,s.useLocation)();return(0,n.useMemo)((function(){if(t.startsWith("/"))return!0;try{var e=new URL(t),a=new URL(u.href);return e.origin===a.origin}catch(r){return console.error(r),!1}}),[u.href,t])?(0,d.tZ)(c.Link,Object.assign({className:(0,i.Z)("",o,a),to:t},r)):(0,d.tZ)("a",Object.assign({className:(0,i.Z)("",o,a),href:t,rel:"noopener noreferrer",target:"_blank"},r))},m=t(8614),h=t(1751),Z="undefined"!=typeof performance?function(){return performance.now()}:function(){return Date.now()};var b=t(9900),g=t(7442),p=t(2005);function v(e){var a=(0,h.h)((function(){return(0,g.B)(e)}));if((0,n.useContext)(p._).isStatic){var t=(0,b.CR)((0,n.useState)(e),2)[1];(0,n.useEffect)((function(){return a.onChange(t)}),[])}return a}function N(){var e,a,t=v(0);return e=function(e){return t.set(e)},a=(0,h.h)(Z),(0,n.useEffect)((function(){var t=function(t){var r=t.timestamp;e(r-a)};return m.ZP.update(t,!0),function(){return m.qY.update(t)}}),[e]),t}var x=t(735),w=function(e){return function(e){return"object"==typeof e&&e.mix}(e)?e.mix:void 0};function y(e,a){var t=v(a()),r=function(){return t.set(a())};return r(),function(e,a){(0,n.useEffect)((function(){var t=e.map((function(e){return e.onChange(a)}));return function(){return t.forEach((function(e){return e()}))}}))}(e,(function(){return m.ZP.update(r,!1,!0)})),t}function R(e,a,t,r){var n="function"==typeof a?a:function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];var t=!Array.isArray(e[0]),r=t?0:-1,n=e[0+r],l=e[1+r],s=e[2+r],i=e[3+r],c=(0,x.s)(l,s,(0,b.pi)({mixer:w(s[0])},i));return t?c(n):c}(a,t,r);return Array.isArray(e)?B(e,n):B([e],(function(e){var a=(0,b.CR)(e,1)[0];return n(a)}))}function B(e,a){var t=(0,h.h)((function(){return[]}));return y(e,(function(){t.length=0;for(var r=e.length,n=0;n<r;n++)t[n]=e[n].get();return a(t)}))}var j=t(4345),S=t(2297),X=function(e){var a=e.size,t=e.parentRef,r=e.state,l=(0,n.useRef)(null),s=function(e,a){var t=(0,S.K)(e),r=(0,S.K)(a);return(0,n.useMemo)((function(){if(!t||!r)return null;var e=t.width,a=t.height;return{ratio:(e*(r.left-t.left+r.width/2)+a*(-(r.top-t.top)+r.height/2))/(Math.pow(e,2)+Math.pow(a,2))}}),[t,r])}(t,l),i=v(0);(0,n.useEffect)((function(){null!=s&&s.ratio&&i.set(s.ratio)}),[i,null==s?void 0:s.ratio]);var c=R([r,i],(function(e){var a=e[0],t=e[1];return((null!=a?a:0)+(null!=t?t:0))%1})),o=R(c,[0,.5,1],["#93DAE3","#42C2D3","#93DAE3"]);return(0,d.tZ)("svg",{className:"drop-shadow-hexagon",height:a,ref:l,viewBox:"-150 -150 300 300",width:a,children:(0,d.tZ)(j.m.path,{d:"M130 75 L0 150 L-130 75 L-130 -75 L-0 -150 L130 -75 z",fill:o})})},O=function(e){var a=e.className,t=e.duration,r=void 0===t?1e3:t,l=(0,n.useRef)(null),s=R(N(),(function(e){return e%r/r}));return(0,d.BX)("div",{className:(0,i.Z)("inline-flex flex-col gap-3 animate-pulse",a),ref:l,children:[(0,d.BX)("div",{className:"flex flex-row gap-6",children:[(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s})]}),(0,d.BX)("div",{className:"flex flex-row gap-6",children:[(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s})]}),(0,d.BX)("div",{className:"flex flex-row gap-6",children:[(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s}),(0,d.tZ)(X,{parentRef:l,size:"15",state:s})]})]})},z=t(1279),I={pdf:z.ih9,xlsx:z.BXA,xlx:z.BXA},D=function(e){var a=e.name,t=(0,c.useStaticQuery)("1508275194").allFile,r=(0,n.useMemo)((function(){return t.nodes.find((function(e){return e.name===a||e.base===a}))}),[t.nodes,a]),l=(0,n.useMemo)((function(){var e;return r&&null!==(e=I[r.extension])&&void 0!==e?e:z.opy}),[r]);return r?(0,d.tZ)("div",{children:(0,d.BX)("a",{className:(0,i.Z)("flex flex-row gap-2 items-center py-2 px-4 rounded-md border","pdf"===r.extension?"text-white bg-rose-500 border-rose-500":"xlsx"===r.extension||"xlx"===r.extension?"text-white bg-emerald-500 border-emerald-500":"bg-white border-gray-600"),download:!0,href:r.publicURL,children:[(0,d.tZ)(l,{className:"",size:48}),(0,d.tZ)("span",{className:"text-lg",children:r.base})]})}):(0,d.tZ)("div",{children:"ファイルが見つかりません"})},k=t(9162),M=t(111),C=t(2249),T=["className","children"],F=(0,n.forwardRef)((function(e,a){var t=e.className,r=e.children,s=(0,l.Z)(e,T),c=(0,C.e1)().addToast,o=(0,n.useCallback)((function(e){setTimeout((function(){e.target instanceof HTMLFormElement&&e.target.reset(),c("お問い合わせありがとうございます。",{autoDismiss:!0})}))}),[c]);return(0,d.BX)("form",Object.assign({className:(0,i.Z)("",t),method:"POST",onSubmit:o,ref:a,target:"contact-form-iframe"},s,{children:[r,(0,d.tZ)("iframe",{className:"hidden",name:"contact-form-iframe"})]}))})),L=["className"],H=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,L);return(0,d.tZ)("fieldset",Object.assign({className:(0,i.Z)("flex flex-col gap-1","sm:flex-row sm:gap-4",t),ref:a},r))})),A=["className"],P=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,A);return(0,d.tZ)("input",Object.assign({className:(0,i.Z)("block flex-1 text-lg placeholder:text-gray-400 bg-gray-200 rounded-t-xl border-0","focus:border-b-2 focus:ring-0 focus:outline-none focus:border-cyan-500",t),ref:a,type:"text"},r))})),_=["className","children"],U=(0,n.forwardRef)((function(e,a){var t=e.className,r=e.children,n=(0,l.Z)(e,_);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)("flex flex-row justify-start items-center text-lg text-right min-w-[8rem]","sm:justify-end sm:text-base",t),ref:a},n,{children:(0,d.tZ)("legend",{children:r})}))})),E=["className"],Y=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,E);return(0,d.tZ)("textarea",Object.assign({className:(0,i.Z)("block flex-1 text-lg placeholder:text-gray-400 bg-gray-200 rounded-t-xl border-0","focus:border-b-2 focus:ring-0 focus:outline-none focus:border-cyan-500",t),ref:a},r))})),W=H;W.Label=U,W.Input=P,W.Textarea=Y;var J=W,q=F;q.Field=J;var G=q,K=["className"],Q=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,K);return(0,d.tZ)("button",Object.assign({className:(0,i.Z)("",o,t),ref:a,type:"button"},r))})),V=["className"],$=function(e){var a=e.className,t=(0,l.Z)(e,V);return(0,d.tZ)(Q,Object.assign({className:(0,i.Z)("",a),type:"submit"},t))},ee=["className"],ae=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,ee);return(0,d.tZ)("div",Object.assign({className:(0,i.Z)("relative",t),ref:a},r))})),te=["className"],re=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,te);return(0,d.tZ)("div",{className:"absolute top-0 right-0 z-10 drop-shadow-2xl max-h-[60%] max-w-[80%] aspect-video",children:(0,d.tZ)("div",Object.assign({className:(0,i.Z)("pt-2 pr-8 pb-20 pl-40 w-full h-full bg-cyan-500","sm:pb-44 sm:pl-64",t),ref:a,style:{clipPath:"polygon(0 0, 100% 0, 100% 100%)"}},r))})})),ne=["className"],le=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,ne);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)("text-3xl leading-normal text-gray-100 break-all","sm:w-56 sm:text-5xl",t),ref:a},r))})),se=re;se.Text=le;var ie=se,ce=["className"],oe=["className"],de=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,oe);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)("absolute bottom-12 left-12 font-light tracking-widest","sm:bottom-36 sm:left-36 sm:text-4xl",t),ref:a},r))})),fe=ae;fe.Image=function(e){var a=e.className,t=(0,l.Z)(e,ce);return(0,d.BX)("div",{className:"overflow-hidden relative",children:[(0,d.tZ)(r.G,Object.assign({className:(0,i.Z)("object-cover w-full h-[32rem]",a)},t)),(0,d.tZ)("div",{className:"absolute top-0 left-0 w-full h-full bg-white bg-opacity-60"})]})},fe.Text=de,fe.Badge=ie;var ue=fe,me=["className"],he=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,me);return(0,d.tZ)("article",Object.assign({className:(0,i.Z)("flex flex-col md:flex-row gap-16 items-center",t),ref:a},r))})),Ze=["className"],be=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Ze);return(0,d.tZ)("div",Object.assign({className:(0,i.Z)("flex flex-col flex-1 gap-5",t),ref:a},r))})),ge=["className"],pe=["className"],ve=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,pe);return(0,d.tZ)("div",Object.assign({className:(0,i.Z)("",t),ref:a},r))})),Ne=["className"],xe=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Ne);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)(" text-sm font-light ",t),ref:a},r))})),we=["className"],ye=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,we);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)(" text-2xl ",t),ref:a},r))})),Re=ve;Re.Japanese=ye,Re.English=xe;var Be=Re,je=["className"],Se=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,je);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)(" text-lg ",t),ref:a},r))})),Xe=["className"],Oe=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Xe);return(0,d.tZ)("div",Object.assign({className:(0,i.Z)("flex flex-row gap-3",t),ref:a},r))})),ze=["className"],Ie=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,ze);return(0,d.tZ)("i",Object.assign({className:(0,i.Z)("not-italic",t)},r,{ref:a,children:"■"}))})),De=["className","children"],ke=(0,n.forwardRef)((function(e,a){var t=e.className,r=e.children,n=(0,l.Z)(e,De);return(0,d.BX)("p",Object.assign({className:(0,i.Z)(" text-lg ",t),ref:a},n,{children:[(0,d.tZ)(Ie,{className:"text-cyan-400"}),r]}))})),Me=["className"],Ce=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Me);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)(" text-lg ",t),ref:a},r))})),Te=Oe;Te.Label=ke,Te.Name=Ce;var Fe=Te,Le=he;Le.Name=Be,Le.MainSubject=Fe,Le.Description=be,Le.Profile=Se,Le.Image=function(e){var a=e.className,t=(0,l.Z)(e,ge);return(0,d.tZ)(r.G,Object.assign({className:(0,i.Z)("flex-shrink-0 w-64 h-64 rounded-md",a)},t))};var He=Le,Ae=["className"],Pe=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Ae);return(0,d.tZ)("ol",Object.assign({className:(0,i.Z)("flex flex-col gap-4",t),ref:a},r))})),_e=t(8037),Ue=["className","newsId"],Ee=(0,n.forwardRef)((function(e,a){var t=e.className,r=e.newsId,n=(0,l.Z)(e,Ue);return(0,d.tZ)("li",{children:(0,d.tZ)(_e.ZP,{to:"/news/"+r,children:(0,d.tZ)("section",Object.assign({className:(0,i.Z)("flex flex-col-reverse mx-auto max-w-4xl border-b border-cyan-600",t)},n,{ref:a}))})})})),Ye=["className"],We=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Ye);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)(" font-light text-cyan-600",t),ref:a},r))})),Je=["className"],qe=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Je);return(0,d.tZ)("h3",Object.assign({className:(0,i.Z)("py-2 px-6  ",t),ref:a},r))})),Ge=Ee;Ge.Date=We,Ge.Title=qe;var Ke=Ge,Qe=Pe;Qe.Item=Ke;var Ve=Qe,$e=t(8403),ea=function(e){var a,l,s,i,c,o,f,m,h,Z,b,g,p,v,N,x,w,y,R,B,j,S,X,z=e.data,I=(0,n.useMemo)((function(){var e,a;return(null===(e=z.hero)||void 0===e||null===(a=e.childImageSharp)||void 0===a?void 0:a.gatsbyImageData)&&(0,r.d)(z.hero.childImageSharp.gatsbyImageData)}),[null===(a=z.hero)||void 0===a||null===(l=a.childImageSharp)||void 0===l?void 0:l.gatsbyImageData]),C=(0,n.useMemo)((function(){var e,a;return(null===(e=z.topImage)||void 0===e||null===(a=e.childImageSharp)||void 0===a?void 0:a.gatsbyImageData)&&(0,r.d)(z.topImage.childImageSharp.gatsbyImageData)}),[null===(s=z.topImage)||void 0===s||null===(i=s.childImageSharp)||void 0===i?void 0:i.gatsbyImageData]);return(0,d.BX)(k.A,{children:[(0,d.tZ)(M.p,{}),(0,d.BX)(ue,{className:"mb-8",children:[I&&(0,d.tZ)(ue.Image,{alt:"",image:I}),(0,d.BX)(ue.Text,{children:[(0,d.tZ)("span",{className:"text-4xl leading-normal",children:"Health Data Science Frontier."}),(0,d.tZ)("br",{}),(0,d.tZ)("span",{className:"text-5xl leading-normal",children:"データで医療を変えていく"})]}),(0,d.tZ)(ue.Badge,{children:(0,d.BX)(ue.Badge.Text,{children:["Big Data ",(0,d.tZ)("br",{})," Analysis"]})}),(0,d.tZ)(O,{className:"absolute -bottom-8 left-8"})]}),(0,d.BX)($e.Z,{id:"研究内容の紹介",children:[(0,d.tZ)($e.Z.Title,{children:"研究内容の紹介"}),(0,d.tZ)($e.Z.Body,{children:(0,d.tZ)("p",{children:"研究の目的は〜〜〜"})})]}),(0,d.BX)($e.Z,{className:"z-0",id:"研究者案内",children:[(0,d.tZ)(O,{className:"absolute top-24 right-12 -z-10"}),(0,d.tZ)($e.Z.Title,{children:"研究者案内"}),(0,d.tZ)($e.Z.Body,{children:(0,d.BX)(He,{children:[(0,d.BX)(He.Description,{children:[(0,d.BX)(He.Name,{children:[(0,d.tZ)(He.Name.Japanese,{children:"清水 沙友里"}),(0,d.tZ)(He.Name.English,{children:"Shimizu Sayuri"})]}),(0,d.BX)(He.MainSubject,{children:[(0,d.tZ)(He.MainSubject.Label,{children:"主要担当科目"}),(0,d.tZ)(He.MainSubject.Name,{children:"ビッグデータ解析"})]}),(0,d.tZ)(He.Profile,{children:"経歴やこれまでの業績など簡単に。箇条書きでも文章でも。挨拶などでも。 経歴やこれまでの業績など簡単に。箇条書きでも文章でも。挨拶などでも。 経歴やこれまでの業績など簡単に。箇条書きでも文章でも。挨拶などでも。 経歴やこれまでの業績など簡単に。箇条書きでも文章でも。挨拶などでも。"}),(0,d.tZ)(u,{className:"ml-auto",to:"https://researchmap.jp/ssyr",children:"リサーチマップはこちら"})]}),C&&(0,d.tZ)(He.Image,{alt:"清水 沙友里",image:C})]})})]}),(0,d.BX)($e.Z,{className:"z-0",id:"お知らせ",children:[(0,d.tZ)(O,{className:"absolute bottom-0 left-4 -z-10"}),(0,d.tZ)($e.Z.Title,{children:"お知らせ"}),(0,d.BX)($e.Z.Body,{children:[(0,d.tZ)(Ve,{className:"mb-8",children:z.allFile.nodes.map((function(e){var a,t,r,n,l=e.id,s=e.name,i=e.childMarkdownRemark;return(0,d.BX)(Ve.Item,{newsId:null!==(a=null==i||null===(t=i.frontmatter)||void 0===t?void 0:t.slug)&&void 0!==a?a:s,children:[(0,d.tZ)(Ve.Item.Title,{children:null==i||null===(r=i.frontmatter)||void 0===r?void 0:r.title}),(0,d.tZ)(Ve.Item.Date,{children:null==i||null===(n=i.frontmatter)||void 0===n?void 0:n.date})]},l)}))}),(0,d.tZ)("div",{className:"mx-auto max-w-4xl",children:(0,d.tZ)(u,{className:"block ml-auto max-w-max",to:"/news",children:"お知らせ一覧"})})]})]}),(0,d.BX)($e.Z,{id:"データの更新",children:[(0,d.tZ)($e.Z.Title,{children:"データの更新"}),(0,d.tZ)($e.Z.Body,{children:(0,d.BX)("div",{className:"flex flex-col gap-1 max-w-md",children:[(0,d.tZ)(D,{name:"POST.pdf"}),(0,d.tZ)(D,{name:"郵便番号二次医療圏対応表2017.xlsx"}),(0,d.tZ)(D,{name:"PHA2017_6月版.xlsx"}),(0,d.tZ)(D,{name:"HOSPPHA.pdf"}),(0,d.tZ)(D,{name:"HOSP2017_7月版.xlsx"})]})})]}),(0,d.BX)($e.Z,{className:"z-0",id:"お問い合わせ",children:[(0,d.tZ)(O,{className:"absolute right-7 bottom-24 -z-10"}),(0,d.tZ)($e.Z.Title,{children:"お問い合わせ"}),(0,d.tZ)($e.Z.Body,{children:(0,d.BX)(G,{action:"https://docs.google.com/forms/u/0/d/e/"+(null===(c=z.site)||void 0===c||null===(o=c.siteMetadata)||void 0===o||null===(f=o.contact)||void 0===f?void 0:f.googleFormId)+"/formResponse",children:[(0,d.BX)("div",{className:"flex flex-col lg:flex-row gap-3 lg:gap-8 mb-8",children:[(0,d.BX)("div",{className:"flex flex-col flex-1 gap-3",children:[(0,d.BX)(G.Field,{children:[(0,d.tZ)(G.Field.Label,{children:"名前"}),(0,d.tZ)(G.Field.Input,{name:null===(m=z.site)||void 0===m||null===(h=m.siteMetadata)||void 0===h||null===(Z=h.contact)||void 0===Z||null===(b=Z.fields)||void 0===b?void 0:b.name,placeholder:"山田 太郎",required:!0})]}),(0,d.BX)(G.Field,{children:[(0,d.tZ)(G.Field.Label,{children:"所属"}),(0,d.tZ)(G.Field.Input,{name:null===(g=z.site)||void 0===g||null===(p=g.siteMetadata)||void 0===p||null===(v=p.contact)||void 0===v||null===(N=v.fields)||void 0===N?void 0:N.belongs,placeholder:"横浜市立大学 ヘルスデータサイエンス学科"})]}),(0,d.BX)(G.Field,{children:[(0,d.tZ)(G.Field.Label,{children:"連絡先"}),(0,d.tZ)(G.Field.Input,{name:null===(x=z.site)||void 0===x||null===(w=x.siteMetadata)||void 0===w||null===(y=w.contact)||void 0===y||null===(R=y.fields)||void 0===R?void 0:R.contactAddress,placeholder:"email@example.com 又は 090-1234-5678"})]})]}),(0,d.tZ)("div",{className:"flex-1",children:(0,d.BX)(G.Field,{className:"h-full",children:[(0,d.tZ)(G.Field.Label,{className:"lg:sr-only",children:"お問い合わせ内容"}),(0,d.tZ)(G.Field.Textarea,{name:null===(B=z.site)||void 0===B||null===(j=B.siteMetadata)||void 0===j||null===(S=j.contact)||void 0===S||null===(X=S.fields)||void 0===X?void 0:X.body,placeholder:"詳しい内容をお書きください",required:!0,rows:4})]})})]}),(0,d.tZ)($,{className:"block mx-auto",children:"送信する"})]})})]}),(0,d.BX)($e.Z,{children:[(0,d.tZ)($e.Z.Title,{children:"関連リンク"}),(0,d.tZ)($e.Z.Body,{children:(0,d.BX)("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4",children:[(0,d.BX)("a",{className:"block flex-1 md:h-full",href:"#",children:[(0,d.tZ)("span",{className:"sr-only",children:"横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻"}),(0,d.tZ)(r.S,{alt:"横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻",layout:"fullWidth",src:"../images/HDS.png",__imageData:t(1698)})]}),(0,d.BX)("a",{className:"block flex-1 md:h-full",href:"#",children:[(0,d.tZ)("span",{className:"sr-only",children:"横浜市立大学"}),(0,d.tZ)(r.S,{alt:"横浜市立大学",layout:"fullWidth",src:"../images/YCU.png",__imageData:t(173)})]})]})})]})]})}},1698:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/3b8da8474218a51ba411e05e0d6bd20c/73538/HDS.png","srcSet":"/static/3b8da8474218a51ba411e05e0d6bd20c/7636e/HDS.png 750w,\\n/static/3b8da8474218a51ba411e05e0d6bd20c/301a3/HDS.png 1080w,\\n/static/3b8da8474218a51ba411e05e0d6bd20c/73538/HDS.png 1276w","sizes":"100vw"},"sources":[{"srcSet":"/static/3b8da8474218a51ba411e05e0d6bd20c/4f82e/HDS.webp 750w,\\n/static/3b8da8474218a51ba411e05e0d6bd20c/7928b/HDS.webp 1080w,\\n/static/3b8da8474218a51ba411e05e0d6bd20c/c3b56/HDS.webp 1276w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.22884012539184953}')},173:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/f691505ea58352f9e5b628331d9bd20c/73538/YCU.png","srcSet":"/static/f691505ea58352f9e5b628331d9bd20c/7636e/YCU.png 750w,\\n/static/f691505ea58352f9e5b628331d9bd20c/301a3/YCU.png 1080w,\\n/static/f691505ea58352f9e5b628331d9bd20c/73538/YCU.png 1276w","sizes":"100vw"},"sources":[{"srcSet":"/static/f691505ea58352f9e5b628331d9bd20c/4f82e/YCU.webp 750w,\\n/static/f691505ea58352f9e5b628331d9bd20c/7928b/YCU.webp 1080w,\\n/static/f691505ea58352f9e5b628331d9bd20c/c3b56/YCU.webp 1276w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.22884012539184953}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7018abf66287ece8bea6.js.map