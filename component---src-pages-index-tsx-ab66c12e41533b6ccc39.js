"use strict";(self.webpackChunksshihci_github_io=self.webpackChunksshihci_github_io||[]).push([[691],{3257:function(e,a,s){s.r(a),s.d(a,{default:function(){return Qe}});var t=s(6125),r=s(7294),n=s(3366),l=s(9499),i=s(5505),c=s(5444),o=(0,i.Z)("py-1.5 px-16 text-sm bg-gray-50 border border-cyan-600 text-cyan-600","hover:bg-cyan-100 hover:text-cyan-700"),d=s(5893),f=["className","to"],u=function(e){var a=e.className,s=e.to,t=(0,n.Z)(e,f),u=(0,l.useLocation)();return(0,r.useMemo)((function(){if(s.startsWith("/"))return!0;try{var e=new URL(s),a=new URL(u.href);return e.origin===a.origin}catch(t){return console.error(t),!1}}),[u.href,s])?(0,d.jsx)(c.Link,Object.assign({className:(0,i.Z)("",o,a),to:s},t)):(0,d.jsx)("a",Object.assign({className:(0,i.Z)("",o,a),href:s,rel:"noopener noreferrer",target:"_blank"},t))},m=s(8614),x=s(1751),h="undefined"!=typeof performance?function(){return performance.now()}:function(){return Date.now()};var j=s(9900),g=s(7442),b=s(2005);function p(e){var a=(0,x.h)((function(){return(0,g.B)(e)}));if((0,r.useContext)(b._).isStatic){var s=(0,j.CR)((0,r.useState)(e),2)[1];(0,r.useEffect)((function(){return a.onChange(s)}),[])}return a}function v(){var e,a,s=p(0);return e=function(e){return s.set(e)},a=(0,x.h)(h),(0,r.useEffect)((function(){var s=function(s){var t=s.timestamp;e(t-a)};return m.ZP.update(s,!0),function(){return m.qY.update(s)}}),[e]),s}var N=s(6110),w=function(e){return function(e){return"object"==typeof e&&e.mix}(e)?e.mix:void 0};function Z(e,a){var s=p(a()),t=function(){return s.set(a())};return t(),function(e,a){(0,r.useEffect)((function(){var s=e.map((function(e){return e.onChange(a)}));return function(){return s.forEach((function(e){return e()}))}}))}(e,(function(){return m.ZP.update(t,!1,!0)})),s}function y(e,a,s,t){var r="function"==typeof a?a:function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];var s=!Array.isArray(e[0]),t=s?0:-1,r=e[0+t],n=e[1+t],l=e[2+t],i=e[3+t],c=(0,N.s)(n,l,(0,j.pi)({mixer:w(l[0])},i));return s?c(r):c}(a,s,t);return Array.isArray(e)?R(e,r):R([e],(function(e){var a=(0,j.CR)(e,1)[0];return r(a)}))}function R(e,a){var s=(0,x.h)((function(){return[]}));return Z(e,(function(){s.length=0;for(var t=e.length,r=0;r<t;r++)s[r]=e[r].get();return a(s)}))}var S=s(8192),z=s(2297),O=function(e){var a=e.size,s=e.parentRef,t=e.state,n=(0,r.useRef)(null),l=function(e,a){var s=(0,z.K)(e),t=(0,z.K)(a);return(0,r.useMemo)((function(){if(!s||!t)return null;var e=s.width,a=s.height;return{ratio:(e*(t.left-s.left+t.width/2)+a*(-(t.top-s.top)+t.height/2))/(Math.pow(e,2)+Math.pow(a,2))}}),[s,t])}(s,n),i=p(0);(0,r.useEffect)((function(){null!=l&&l.ratio&&i.set(l.ratio)}),[i,null==l?void 0:l.ratio]);var c=y([t,i],(function(e){var a=e[0],s=e[1];return((null!=a?a:0)+(null!=s?s:0))%1})),o=y(c,[0,.5,1],["#93DAE3","#42C2D3","#93DAE3"]);return(0,d.jsx)("svg",{className:"drop-shadow-hexagon",height:a,ref:n,viewBox:"-150 -150 300 300",width:a,children:(0,d.jsx)(S.E.path,{d:"M130 75 L0 150 L-130 75 L-130 -75 L-0 -150 L130 -75 z",fill:o})})},I=function(e){var a=e.className,s=e.duration,t=void 0===s?1e3:s,n=(0,r.useRef)(null),l=y(v(),(function(e){return e%t/t}));return(0,d.jsxs)("div",{className:(0,i.Z)("inline-flex flex-col gap-3 animate-pulse",a),ref:n,children:[(0,d.jsxs)("div",{className:"flex flex-row gap-6",children:[(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l})]}),(0,d.jsxs)("div",{className:"flex flex-row gap-6",children:[(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l})]}),(0,d.jsxs)("div",{className:"flex flex-row gap-6",children:[(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l}),(0,d.jsx)(O,{parentRef:n,size:"15",state:l})]})]})},D=s(9162),k=s(2249),C=["className","children"],M=(0,r.forwardRef)((function(e,a){var s=e.className,t=e.children,l=(0,n.Z)(e,C),c=(0,k.e1)().addToast,o=(0,r.useCallback)((function(e){setTimeout((function(){e.target instanceof HTMLFormElement&&e.target.reset(),c("お問い合わせありがとうございます。",{autoDismiss:!0})}))}),[c]);return(0,d.jsxs)("form",Object.assign({className:(0,i.Z)("",s),method:"POST",onSubmit:o,ref:a,target:"contact-form-iframe"},l,{children:[t,(0,d.jsx)("iframe",{className:"hidden",name:"contact-form-iframe"})]}))})),T=["className"],F=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,T);return(0,d.jsx)("fieldset",Object.assign({className:(0,i.Z)("flex flex-col gap-1","sm:flex-row sm:gap-4",s),ref:a},t))})),L=["className"],B=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,L);return(0,d.jsx)("input",Object.assign({className:(0,i.Z)("block flex-1 text-lg placeholder:text-gray-400 bg-gray-200 rounded-t-xl border-0","focus:border-b-2 focus:ring-0 focus:outline-none focus:border-cyan-500",s),ref:a,type:"text"},t))})),E=["className","children"],H=(0,r.forwardRef)((function(e,a){var s=e.className,t=e.children,r=(0,n.Z)(e,E);return(0,d.jsx)("p",Object.assign({className:(0,i.Z)("flex flex-row justify-start items-center text-lg text-right min-w-[8rem]","sm:justify-end sm:text-base",s),ref:a},r,{children:(0,d.jsx)("legend",{children:t})}))})),U=["className"],_=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,U);return(0,d.jsx)("textarea",Object.assign({className:(0,i.Z)("block flex-1 text-lg placeholder:text-gray-400 bg-gray-200 rounded-t-xl border-0","focus:border-b-2 focus:ring-0 focus:outline-none focus:border-cyan-500",s),ref:a},t))})),A=F;A.Label=H,A.Input=B,A.Textarea=_;var Y=A,P=M;P.Field=Y;var W=P,J=["className"],q=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,J);return(0,d.jsx)("button",Object.assign({className:(0,i.Z)("",o,s),ref:a,type:"button"},t))})),G=["className"],K=function(e){var a=e.className,s=(0,n.Z)(e,G);return(0,d.jsx)(q,Object.assign({className:(0,i.Z)("",a),type:"submit"},s))},Q=["className"],V=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,Q);return(0,d.jsx)("div",Object.assign({className:(0,i.Z)("relative",s),ref:a},t))})),X=["className"],$=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,X);return(0,d.jsx)("div",{className:"absolute top-0 right-0 z-10 drop-shadow-2xl h-[448px] w-[640px]",children:(0,d.jsx)("div",Object.assign({className:(0,i.Z)("flex justify-center items-center pb-44 pl-64 w-full h-full bg-cyan-500",s),ref:a,style:{clipPath:"polygon(0 0, 100% 0, 100% 100%)"}},t))})})),ee=["className"],ae=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,ee);return(0,d.jsx)("p",Object.assign({className:(0,i.Z)("w-56 text-5xl leading-normal text-gray-100 break-all",s),ref:a},t))})),se=$;se.Text=ae;var te=se,re=["className"],ne=["className"],le=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,ne);return(0,d.jsx)("p",Object.assign({className:(0,i.Z)("absolute top-52 left-36 text-4xl font-light tracking-widest leading-normal",s),ref:a},t))})),ie=V;ie.Image=function(e){var a=e.className,s=(0,n.Z)(e,re);return(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsx)(t.G,Object.assign({className:(0,i.Z)("",a)},s)),(0,d.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-white bg-opacity-60"})]})},ie.Text=le,ie.Badge=te;var ce=ie,oe=["className"],de=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,oe);return(0,d.jsx)("article",Object.assign({className:(0,i.Z)("flex flex-col md:flex-row gap-16 items-center",s),ref:a},t))})),fe=["className"],ue=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,fe);return(0,d.jsx)("div",Object.assign({className:(0,i.Z)("flex flex-col flex-1 gap-5",s),ref:a},t))})),me=["className"],xe=["className"],he=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,xe);return(0,d.jsx)("div",Object.assign({className:(0,i.Z)("",s),ref:a},t))})),je=["className"],ge=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,je);return(0,d.jsx)("p",Object.assign({className:(0,i.Z)(" text-sm font-light ",s),ref:a},t))})),be=["className"],pe=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,be);return(0,d.jsx)("p",Object.assign({className:(0,i.Z)(" text-2xl ",s),ref:a},t))})),ve=he;ve.Japanese=pe,ve.English=ge;var Ne=ve,we=["className"],Ze=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,we);return(0,d.jsx)("p",Object.assign({className:(0,i.Z)(" text-lg ",s),ref:a},t))})),ye=["className"],Re=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,ye);return(0,d.jsx)("div",Object.assign({className:(0,i.Z)("flex flex-row gap-3",s),ref:a},t))})),Se=["className"],ze=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,Se);return(0,d.jsx)("i",Object.assign({className:(0,i.Z)("not-italic",s)},t,{ref:a,children:"■"}))})),Oe=["className","children"],Ie=(0,r.forwardRef)((function(e,a){var s=e.className,t=e.children,r=(0,n.Z)(e,Oe);return(0,d.jsxs)("p",Object.assign({className:(0,i.Z)(" text-lg ",s),ref:a},r,{children:[(0,d.jsx)(ze,{className:"text-cyan-400"}),t]}))})),De=["className"],ke=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,De);return(0,d.jsx)("p",Object.assign({className:(0,i.Z)(" text-lg ",s),ref:a},t))})),Ce=Re;Ce.Label=Ie,Ce.Name=ke;var Me=Ce,Te=de;Te.Name=Ne,Te.MainSubject=Me,Te.Description=ue,Te.Profile=Ze,Te.Image=function(e){var a=e.className,s=(0,n.Z)(e,me);return(0,d.jsx)(t.G,Object.assign({className:(0,i.Z)("flex-shrink-0 w-64 h-64 rounded-md",a)},s))};var Fe=Te,Le=["className"],Be=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,Le);return(0,d.jsx)("ol",Object.assign({className:(0,i.Z)("flex flex-col gap-4",s),ref:a},t))})),Ee=s(8037),He=["className","newsId"],Ue=(0,r.forwardRef)((function(e,a){var s=e.className,t=e.newsId,r=(0,n.Z)(e,He);return(0,d.jsx)("li",{children:(0,d.jsx)(Ee.ZP,{to:"/news/"+t,children:(0,d.jsx)("section",Object.assign({className:(0,i.Z)("flex flex-col-reverse mx-auto max-w-4xl border-b border-cyan-600",s)},r,{ref:a}))})})})),_e=["className"],Ae=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,_e);return(0,d.jsx)("p",Object.assign({className:(0,i.Z)(" font-light text-cyan-600",s),ref:a},t))})),Ye=["className"],Pe=(0,r.forwardRef)((function(e,a){var s=e.className,t=(0,n.Z)(e,Ye);return(0,d.jsx)("h3",Object.assign({className:(0,i.Z)("py-2 px-6  ",s),ref:a},t))})),We=Ue;We.Date=Ae,We.Title=Pe;var Je=We,qe=Be;qe.Item=Je;var Ge=qe,Ke=s(8403),Qe=function(e){var a,n,l,i,c,o,f,m,x,h,j,g,b,p,v,N,w,Z,y,R,S,z,O,k=e.data,C=(0,r.useMemo)((function(){var e,a;return(null===(e=k.hero)||void 0===e||null===(a=e.childImageSharp)||void 0===a?void 0:a.gatsbyImageData)&&(0,t.d)(k.hero.childImageSharp.gatsbyImageData)}),[null===(a=k.hero)||void 0===a||null===(n=a.childImageSharp)||void 0===n?void 0:n.gatsbyImageData]),M=(0,r.useMemo)((function(){var e,a;return(null===(e=k.topImage)||void 0===e||null===(a=e.childImageSharp)||void 0===a?void 0:a.gatsbyImageData)&&(0,t.d)(k.topImage.childImageSharp.gatsbyImageData)}),[null===(l=k.topImage)||void 0===l||null===(i=l.childImageSharp)||void 0===i?void 0:i.gatsbyImageData]);return(0,d.jsxs)(D.A,{children:[(0,d.jsxs)(ce,{className:"mb-8",children:[C&&(0,d.jsx)(ce.Image,{alt:"",image:C}),(0,d.jsxs)(ce.Text,{children:["Health Data Science Frontier. ",(0,d.jsx)("br",{}),"データで医療を変えていく"]}),(0,d.jsx)(ce.Badge,{children:(0,d.jsx)(ce.Badge.Text,{children:"Big Data Analysis"})}),(0,d.jsx)(I,{className:"absolute -bottom-8 left-8"})]}),(0,d.jsxs)(Ke.Z,{id:"研究内容の紹介",children:[(0,d.jsx)(Ke.Z.Title,{children:"研究内容の紹介"}),(0,d.jsx)(Ke.Z.Body,{children:(0,d.jsx)("p",{children:"研究の目的は〜〜〜"})})]}),(0,d.jsxs)(Ke.Z,{className:"z-0",id:"研究者案内",children:[(0,d.jsx)(I,{className:"absolute top-24 right-12 -z-10"}),(0,d.jsx)(Ke.Z.Title,{children:"研究者案内"}),(0,d.jsx)(Ke.Z.Body,{children:(0,d.jsxs)(Fe,{children:[(0,d.jsxs)(Fe.Description,{children:[(0,d.jsxs)(Fe.Name,{children:[(0,d.jsx)(Fe.Name.Japanese,{children:"清水 沙友里"}),(0,d.jsx)(Fe.Name.English,{children:"Shimizu Sayuri"})]}),(0,d.jsxs)(Fe.MainSubject,{children:[(0,d.jsx)(Fe.MainSubject.Label,{children:"主要担当科目"}),(0,d.jsx)(Fe.MainSubject.Name,{children:"ビッグデータ解析"})]}),(0,d.jsx)(Fe.Profile,{children:"経歴やこれまでの業績など簡単に。箇条書きでも文章でも。挨拶などでも。 経歴やこれまでの業績など簡単に。箇条書きでも文章でも。挨拶などでも。 経歴やこれまでの業績など簡単に。箇条書きでも文章でも。挨拶などでも。 経歴やこれまでの業績など簡単に。箇条書きでも文章でも。挨拶などでも。"}),(0,d.jsx)(u,{className:"ml-auto",to:"https://researchmap.jp/ssyr",children:"リサーチマップはこちら"})]}),M&&(0,d.jsx)(Fe.Image,{alt:"清水 沙友里",image:M})]})})]}),(0,d.jsxs)(Ke.Z,{className:"z-0",id:"お知らせ",children:[(0,d.jsx)(I,{className:"absolute bottom-0 left-4 -z-10"}),(0,d.jsx)(Ke.Z.Title,{children:"お知らせ"}),(0,d.jsxs)(Ke.Z.Body,{children:[(0,d.jsx)(Ge,{className:"mb-8",children:k.allFile.nodes.map((function(e){var a,s,t=e.id,r=e.childMarkdownRemark;return(0,d.jsxs)(Ge.Item,{newsId:t,children:[(0,d.jsx)(Ge.Item.Title,{children:null==r||null===(a=r.frontmatter)||void 0===a?void 0:a.title}),(0,d.jsx)(Ge.Item.Date,{children:null==r||null===(s=r.frontmatter)||void 0===s?void 0:s.date})]},t)}))}),(0,d.jsx)("div",{className:"mx-auto max-w-4xl",children:(0,d.jsx)(u,{className:"block ml-auto max-w-max",to:"/news",children:"お知らせ一覧"})})]})]}),(0,d.jsxs)(Ke.Z,{id:"データの更新",children:[(0,d.jsx)(Ke.Z.Title,{children:"データの更新"}),(0,d.jsx)(Ke.Z.Body,{})]}),(0,d.jsxs)(Ke.Z,{className:"z-0",id:"お問い合わせ",children:[(0,d.jsx)(I,{className:"absolute right-7 bottom-24 -z-10"}),(0,d.jsx)(Ke.Z.Title,{children:"お問い合わせ"}),(0,d.jsx)(Ke.Z.Body,{children:(0,d.jsxs)(W,{action:"https://docs.google.com/forms/u/0/d/e/"+(null===(c=k.site)||void 0===c||null===(o=c.siteMetadata)||void 0===o||null===(f=o.contact)||void 0===f?void 0:f.googleFormId)+"/formResponse",children:[(0,d.jsxs)("div",{className:"flex flex-col lg:flex-row gap-3 lg:gap-8 mb-8",children:[(0,d.jsxs)("div",{className:"flex flex-col flex-1 gap-3",children:[(0,d.jsxs)(W.Field,{children:[(0,d.jsx)(W.Field.Label,{children:"名前"}),(0,d.jsx)(W.Field.Input,{name:null===(m=k.site)||void 0===m||null===(x=m.siteMetadata)||void 0===x||null===(h=x.contact)||void 0===h||null===(j=h.fields)||void 0===j?void 0:j.name,placeholder:"山田 太郎",required:!0})]}),(0,d.jsxs)(W.Field,{children:[(0,d.jsx)(W.Field.Label,{children:"所属"}),(0,d.jsx)(W.Field.Input,{name:null===(g=k.site)||void 0===g||null===(b=g.siteMetadata)||void 0===b||null===(p=b.contact)||void 0===p||null===(v=p.fields)||void 0===v?void 0:v.belongs,placeholder:"横浜市立大学 ヘルスデータサイエンス学科"})]}),(0,d.jsxs)(W.Field,{children:[(0,d.jsx)(W.Field.Label,{children:"連絡先"}),(0,d.jsx)(W.Field.Input,{name:null===(N=k.site)||void 0===N||null===(w=N.siteMetadata)||void 0===w||null===(Z=w.contact)||void 0===Z||null===(y=Z.fields)||void 0===y?void 0:y.contactAddress,placeholder:"email@example.com 又は 090-1234-5678"})]})]}),(0,d.jsx)("div",{className:"flex-1",children:(0,d.jsxs)(W.Field,{className:"h-full",children:[(0,d.jsx)(W.Field.Label,{className:"lg:sr-only",children:"お問い合わせ内容"}),(0,d.jsx)(W.Field.Textarea,{name:null===(R=k.site)||void 0===R||null===(S=R.siteMetadata)||void 0===S||null===(z=S.contact)||void 0===z||null===(O=z.fields)||void 0===O?void 0:O.body,placeholder:"詳しい内容をお書きください",required:!0,rows:4})]})})]}),(0,d.jsx)(K,{className:"block mx-auto",children:"送信する"})]})})]}),(0,d.jsxs)(Ke.Z,{children:[(0,d.jsx)(Ke.Z.Title,{children:"関連リンク"}),(0,d.jsx)(Ke.Z.Body,{children:(0,d.jsxs)("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4",children:[(0,d.jsxs)("a",{className:"block flex-1 md:h-full",href:"#",children:[(0,d.jsx)("span",{className:"sr-only",children:"横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻"}),(0,d.jsx)(t.S,{alt:"横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻",layout:"fullWidth",src:"../images/HDS.png",__imageData:s(1698)})]}),(0,d.jsxs)("a",{className:"block flex-1 md:h-full",href:"#",children:[(0,d.jsx)("span",{className:"sr-only",children:"横浜市立大学"}),(0,d.jsx)(t.S,{alt:"横浜市立大学",layout:"fullWidth",src:"../images/YCU.png",__imageData:s(173)})]})]})})]})]})}},1698:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/3b8da8474218a51ba411e05e0d6bd20c/73538/HDS.png","srcSet":"/static/3b8da8474218a51ba411e05e0d6bd20c/7636e/HDS.png 750w,\\n/static/3b8da8474218a51ba411e05e0d6bd20c/301a3/HDS.png 1080w,\\n/static/3b8da8474218a51ba411e05e0d6bd20c/73538/HDS.png 1276w","sizes":"100vw"},"sources":[{"srcSet":"/static/3b8da8474218a51ba411e05e0d6bd20c/4f82e/HDS.webp 750w,\\n/static/3b8da8474218a51ba411e05e0d6bd20c/7928b/HDS.webp 1080w,\\n/static/3b8da8474218a51ba411e05e0d6bd20c/c3b56/HDS.webp 1276w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.22884012539184953}')},173:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/f691505ea58352f9e5b628331d9bd20c/73538/YCU.png","srcSet":"/static/f691505ea58352f9e5b628331d9bd20c/7636e/YCU.png 750w,\\n/static/f691505ea58352f9e5b628331d9bd20c/301a3/YCU.png 1080w,\\n/static/f691505ea58352f9e5b628331d9bd20c/73538/YCU.png 1276w","sizes":"100vw"},"sources":[{"srcSet":"/static/f691505ea58352f9e5b628331d9bd20c/4f82e/YCU.webp 750w,\\n/static/f691505ea58352f9e5b628331d9bd20c/7928b/YCU.webp 1080w,\\n/static/f691505ea58352f9e5b628331d9bd20c/c3b56/YCU.webp 1276w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.22884012539184953}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ab66c12e41533b6ccc39.js.map