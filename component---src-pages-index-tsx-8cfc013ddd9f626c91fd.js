"use strict";(self.webpackChunksshihci_github_io=self.webpackChunksshihci_github_io||[]).push([[691],{7940:function(e,a,t){t.r(a),t.d(a,{default:function(){return Ke}});var r=t(6125),n=t(257),l=t(3366),s=t(9499),i=t(5505),c=t(5444),o=(0,i.Z)("overflow-hidden relative py-1.5 px-6 text-sm text-center bg-gray-50 border min-w-[13rem] border-cyan-600 text-cyan-600","before:absolute before:w-full before:h-full before:bg-opacity-30 before:duration-200 before:bg-cyan-200","before:top-0 before:right-full hover:before:right-0","hover:rounded-2xl duration-500"),d=t(1312),f=["className","to"],m=function(e){var a=e.className,t=e.to,r=(0,l.Z)(e,f),m=(0,s.useLocation)();return(0,n.useMemo)((function(){if(t.startsWith("/"))return!0;try{var e=new URL(t),a=new URL(m.href);return e.origin===a.origin}catch(r){return!1}}),[m.href,t])?(0,d.tZ)(c.Link,Object.assign({className:(0,i.Z)("",o,a),to:t},r)):(0,d.tZ)("a",Object.assign({className:(0,i.Z)("",o,a),href:t,rel:"noopener noreferrer",target:"_blank"},r))},u=t(8614),h=t(1751),g="undefined"!=typeof performance?function(){return performance.now()}:function(){return Date.now()};var Z=t(9900),b=t(7442),p=t(2005);function v(e){var a=(0,h.h)((function(){return(0,b.B)(e)}));if((0,n.useContext)(p._).isStatic){var t=(0,Z.CR)((0,n.useState)(e),2)[1];(0,n.useEffect)((function(){return a.onChange(t)}),[])}return a}function x(){var e,a,t=v(0);return e=function(e){return t.set(e)},a=(0,h.h)(g),(0,n.useEffect)((function(){var t=function(t){var r=t.timestamp;e(r-a)};return u.ZP.update(t,!0),function(){return u.qY.update(t)}}),[e]),t}var N=t(735),w=function(e){return function(e){return"object"==typeof e&&e.mix}(e)?e.mix:void 0};function y(e,a){var t=v(a()),r=function(){return t.set(a())};return r(),function(e,a){(0,n.useEffect)((function(){var t=e.map((function(e){return e.onChange(a)}));return function(){return t.forEach((function(e){return e()}))}}))}(e,(function(){return u.ZP.update(r,!1,!0)})),t}function B(e,a,t,r){var n="function"==typeof a?a:function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];var t=!Array.isArray(e[0]),r=t?0:-1,n=e[0+r],l=e[1+r],s=e[2+r],i=e[3+r],c=(0,N.s)(l,s,(0,Z.pi)({mixer:w(s[0])},i));return t?c(n):c}(a,t,r);return Array.isArray(e)?R(e,n):R([e],(function(e){var a=(0,Z.CR)(e,1)[0];return n(a)}))}function R(e,a){var t=(0,h.h)((function(){return[]}));return y(e,(function(){t.length=0;for(var r=e.length,n=0;n<r;n++)t[n]=e[n].get();return a(t)}))}var j=t(4345),I=t(2297),S=function(e){var a=e.size,t=e.parentRef,r=e.state,l=(0,n.useRef)(null),s=function(e,a){var t=(0,I.K)(e),r=(0,I.K)(a);return(0,n.useMemo)((function(){if(!t||!r)return null;var e=t.width,a=t.height;return{ratio:(e*(r.left-t.left+r.width/2)+a*(-(r.top-t.top)+r.height/2))/(Math.pow(e,2)+Math.pow(a,2))}}),[t,r])}(t,l),i=v(0);(0,n.useEffect)((function(){null!=s&&s.ratio&&i.set(s.ratio)}),[i,null==s?void 0:s.ratio]);var c=B([r,i],(function(e){var a=e[0],t=e[1];return((null!=a?a:0)+(null!=t?t:0))%1})),o=B(c,[0,.5,1],["#93DAE3","#42C2D3","#93DAE3"]);return(0,d.tZ)("svg",{className:"drop-shadow-hexagon",height:a,ref:l,viewBox:"-150 -150 300 300",width:a,children:(0,d.tZ)(j.m.path,{d:"M130 75 L0 150 L-130 75 L-130 -75 L-0 -150 L130 -75 z",fill:o})})},X=function(e){var a=e.className,t=e.duration,r=void 0===t?1e3:t,l=(0,n.useRef)(null),s=B(x(),(function(e){return e%r/r}));return(0,d.BX)("div",{className:(0,i.Z)("inline-flex flex-col gap-3 animate-pulse",a),ref:l,children:[(0,d.BX)("div",{className:"flex flex-row gap-6",children:[(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s})]}),(0,d.BX)("div",{className:"flex flex-row gap-6",children:[(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s})]}),(0,d.BX)("div",{className:"flex flex-row gap-6",children:[(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s}),(0,d.tZ)(S,{parentRef:l,size:"15",state:s})]})]})},O=t(1279),k={pdf:O.ih9,xlsx:O.BXA,xlx:O.BXA},z=function(e){var a=e.name,t=(0,c.useStaticQuery)("1508275194").allFile,r=(0,n.useMemo)((function(){return t.nodes.find((function(e){return e.name===a||e.base===a}))}),[t.nodes,a]),l=(0,n.useMemo)((function(){var e;return r&&null!==(e=k[r.extension])&&void 0!==e?e:O.opy}),[r]);return r?(0,d.tZ)("div",{children:(0,d.BX)("a",{className:(0,i.Z)("flex flex-row gap-2 items-center py-2 px-4 rounded-md border","pdf"===r.extension?"text-white bg-rose-500 border-rose-500":"xlsx"===r.extension||"xlx"===r.extension?"text-white bg-emerald-500 border-emerald-500":"bg-white border-gray-600"),download:!0,href:r.publicURL,children:[(0,d.tZ)(l,{className:"",size:48}),(0,d.tZ)("span",{className:"text-lg",children:r.base})]})}):(0,d.tZ)("div",{children:"ファイルが見つかりません"})},D=t(2274),M=t(9162),C=t(111),F=t(2249),L=["className","children"],T=(0,n.forwardRef)((function(e,a){var t=e.className,r=e.children,s=(0,l.Z)(e,L),c=(0,F.e1)().addToast,o=(0,n.useCallback)((function(e){setTimeout((function(){e.target instanceof HTMLFormElement&&e.target.reset(),c("お問い合わせありがとうございます。",{autoDismiss:!0})}))}),[c]);return(0,d.BX)("form",Object.assign({className:(0,i.Z)("",t),method:"POST",onSubmit:o,ref:a,target:"contact-form-iframe"},s,{children:[r,(0,d.tZ)("iframe",{className:"hidden",name:"contact-form-iframe"})]}))})),H=["className"],_=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,H);return(0,d.tZ)("fieldset",Object.assign({className:(0,i.Z)("flex flex-col gap-1","sm:flex-row sm:gap-4",t),ref:a},r))})),A=["className"],U=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,A);return(0,d.tZ)("input",Object.assign({className:(0,i.Z)("block flex-1 text-lg placeholder:text-gray-400 bg-gray-200 rounded-t-xl border-0 border-b-2 border-transparent","focus:ring-0 focus:outline-none focus:border-cyan-500","focus:shadow-lg focus:shadow-cyan-50",t),ref:a,type:"text"},r))})),E=["className","children"],P=(0,n.forwardRef)((function(e,a){var t=e.className,r=e.children,n=(0,l.Z)(e,E);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)("flex flex-row justify-start items-center text-lg text-right min-w-[8rem]","sm:justify-end sm:text-base","lg:min-w-[4rem]",t),ref:a},n,{children:(0,d.tZ)("legend",{children:r})}))})),Y=["className"],W=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Y);return(0,d.tZ)("textarea",Object.assign({className:(0,i.Z)("block flex-1 text-lg placeholder:text-gray-400 bg-gray-200 rounded-t-xl border-0","focus:border-b-2 focus:ring-0 focus:outline-none focus:border-cyan-500",t),ref:a},r))})),J=_;J.Label=P,J.Input=U,J.Textarea=W;var q=J,G=T;G.Field=q;var K=G,Q=["className"],V=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Q);return(0,d.tZ)("button",Object.assign({className:(0,i.Z)("",o,t),ref:a,type:"button"},r))})),$=["className"],ee=function(e){var a=e.className,t=(0,l.Z)(e,$);return(0,d.tZ)(V,Object.assign({className:(0,i.Z)("",a),type:"submit"},t))},ae=["className"],te=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,ae);return(0,d.tZ)("div",Object.assign({className:(0,i.Z)("relative",t),ref:a},r))})),re=["className","mobileImage","desktopImage"],ne=["className"],le=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,ne);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)("absolute bottom-24 left-12 font-light tracking-widest","md:bottom-36 md:left-20 md:text-4xl","lg:left-36",t),ref:a},r))})),se=te;se.Image=function(e){var a=e.className,t=e.mobileImage,n=e.desktopImage,s=(0,l.Z)(e,re);return(0,d.BX)("div",{className:"overflow-hidden relative",children:[(0,d.tZ)(r.G,Object.assign({className:(0,i.Z)("hidden md:block object-cover w-full h-[32rem]",a),image:n,imgClassName:"object-right-top"},s)),(0,d.tZ)(r.G,Object.assign({className:(0,i.Z)("block md:hidden object-cover w-full h-[32rem]",a),image:t,imgClassName:"object-right-top"},s))]})},se.Text=le;var ie=se,ce=["className"],oe=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,ce);return(0,d.tZ)("article",Object.assign({className:(0,i.Z)("flex flex-col md:flex-row gap-16 items-center",t),ref:a},r))})),de=["className"],fe=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,de);return(0,d.tZ)("div",Object.assign({className:(0,i.Z)("flex flex-col flex-1 gap-5",t),ref:a},r))})),me=["className"],ue=["className"],he=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,ue);return(0,d.tZ)("div",Object.assign({className:(0,i.Z)("",t),ref:a},r))})),ge=["className"],Ze=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,ge);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)(" text-sm font-light ",t),ref:a},r))})),be=["className"],pe=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,be);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)(" text-2xl ",t),ref:a},r))})),ve=he;ve.Japanese=pe,ve.English=Ze;var xe=ve,Ne=["className"],we=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Ne);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)("text-lg tracking-wider leading-loose text-justify",t),ref:a},r))})),ye=["className"],Be=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,ye);return(0,d.tZ)("div",Object.assign({className:(0,i.Z)("flex flex-row gap-3",t),ref:a},r))})),Re=["className"],je=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Re);return(0,d.tZ)("i",Object.assign({className:(0,i.Z)("not-italic",t)},r,{ref:a,children:"■"}))})),Ie=["className","children"],Se=(0,n.forwardRef)((function(e,a){var t=e.className,r=e.children,n=(0,l.Z)(e,Ie);return(0,d.BX)("p",Object.assign({className:(0,i.Z)(" text-lg ",t),ref:a},n,{children:[(0,d.tZ)(je,{className:"text-cyan-400"}),r]}))})),Xe=["className"],Oe=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Xe);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)(" text-lg ",t),ref:a},r))})),ke=Be;ke.Label=Se,ke.Name=Oe;var ze=ke,De=oe;De.Name=xe,De.MainSubject=ze,De.Description=fe,De.Profile=we,De.Image=function(e){var a=e.className,t=(0,l.Z)(e,me);return(0,d.tZ)(r.G,Object.assign({className:(0,i.Z)("flex-shrink-0 w-64 h-64 rounded-md",a)},t))};var Me=De,Ce=["className"],Fe=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Ce);return(0,d.tZ)("ol",Object.assign({className:(0,i.Z)("flex flex-col gap-4",t),ref:a},r))})),Le=["className"],Te=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Le);return(0,d.tZ)("ul",Object.assign({className:(0,i.Z)("flex flex-col gap-12",t)},r,{ref:a}))})),He=["className"],_e=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,He);return(0,d.tZ)("li",Object.assign({className:(0,i.Z)("flex flex-col gap-3","lg:flex-row lg:gap-11 lg:mx-auto",t)},r,{ref:a}))})),Ae=["className"],Ue=(0,n.forwardRef)((function(e,a){var t=e.className,r=(0,l.Z)(e,Ae);return(0,d.tZ)("p",Object.assign({className:(0,i.Z)("lg:max-w-3xl tracking-wider leading-loose text-justify",t)},r,{ref:a}))})),Ee=["className","children"],Pe=(0,n.forwardRef)((function(e,a){var t=e.className,r=e.children,n=(0,l.Z)(e,Ee);return(0,d.BX)("p",Object.assign({className:(0,i.Z)("flex flex-row items-start","lg:mt-6",t)},n,{ref:a,children:[(0,d.tZ)(je,{className:"mr-1 text-cyan-400"}),(0,d.tZ)("span",{className:"inline-block lg:w-24",children:r})]}))})),Ye=_e;Ye.Title=Pe,Ye.Body=Ue;var We=Ye,Je=Te;Je.Item=We;var qe=Je,Ge=t(8403),Ke=function(e){var a,l,s,i,c,o,f,u,h,g,Z,b,p,v,x,N,w,y,B,R,j,I,S,O,k,F=e.data,L=(0,n.useMemo)((function(){var e,a;return(null===(e=F.heroMobile)||void 0===e||null===(a=e.childImageSharp)||void 0===a?void 0:a.gatsbyImageData)&&(0,r.d)(F.heroMobile.childImageSharp.gatsbyImageData)}),[null===(a=F.heroMobile)||void 0===a||null===(l=a.childImageSharp)||void 0===l?void 0:l.gatsbyImageData]),T=(0,n.useMemo)((function(){var e,a;return(null===(e=F.heroDesktop)||void 0===e||null===(a=e.childImageSharp)||void 0===a?void 0:a.gatsbyImageData)&&(0,r.d)(F.heroDesktop.childImageSharp.gatsbyImageData)}),[null===(s=F.heroDesktop)||void 0===s||null===(i=s.childImageSharp)||void 0===i?void 0:i.gatsbyImageData]),H=(0,n.useMemo)((function(){var e,a;return(null===(e=F.topImage)||void 0===e||null===(a=e.childImageSharp)||void 0===a?void 0:a.gatsbyImageData)&&(0,r.d)(F.topImage.childImageSharp.gatsbyImageData)}),[null===(c=F.topImage)||void 0===c||null===(o=c.childImageSharp)||void 0===o?void 0:o.gatsbyImageData]);return(0,d.BX)(M.A,{children:[(0,d.tZ)(C.p,{}),(0,d.BX)(ie,{className:"mb-8",children:[L&&(0,d.tZ)(ie.Image,{alt:"",desktopImage:T,mobileImage:L}),(0,d.BX)(ie.Text,{children:[(0,d.tZ)("span",{className:"text-xl sm:text-2xl md:text-4xl leading-normal",children:"Health Data Science Frontier."}),(0,d.tZ)("br",{}),(0,d.tZ)("span",{className:"text-3xl sm:text-4xl md:text-5xl leading-normal",children:"データで医療を変えていく"})]}),(0,d.tZ)(X,{className:"absolute -bottom-8 left-8"})]}),(0,d.BX)(Ge.Z,{id:"ご挨拶",children:[(0,d.tZ)(Ge.Z.Title,{children:"ご挨拶"}),(0,d.tZ)(Ge.Z.Body,{children:(0,d.BX)(qe,{children:[(0,d.BX)(qe.Item,{children:[(0,d.tZ)(qe.Item.Title,{children:"研究について"}),(0,d.tZ)(qe.Item.Body,{children:"私は情報系がバックグラウンドで、大学院から医歯学総合研究科に進み、 疫学や統計に関する勉強をしていました。以来、医療・福祉政策やヘルスサービスリサーチを研究テーマとしています。 研究は、量的な分析に加えて、諸外国の医療制度に関する研究や、 医療政策に関する質的研究も行っています。 ここ数年は、統計学に加えて機械学習など新たな手法へのチャレンジをしています。 その他の活動として、データの利活用に資するオープンサイエンスの推進、統計学の研究会などを行っています。"})]}),(0,d.BX)(qe.Item,{children:[(0,d.tZ)(qe.Item.Title,{children:"学生の方へ"}),(0,d.tZ)(qe.Item.Body,{children:"HDSに入学される方は、既に何らかの分野のプロフェッショナルですので、 私はその方の修士課程やその先の目標に応じて、 異なった視点から研究を組み立てていくプロセスをアシストしていきたいと思っています。 HDSを卒業された後には、その領域のリーダーとして活躍する人になってほしいと思っていますし、 入学された方にはそのポテンシャルがあると実感しています。 ヘルスサービスリサーチの対象となる研究分野は限定されていないので、 多様な領域の方と議論できるといいなと思っています。"})]})]})})]}),(0,d.BX)(Ge.Z,{className:"z-0",id:"研究者案内",children:[(0,d.tZ)(X,{className:"absolute top-24 right-12 -z-10"}),(0,d.tZ)(Ge.Z.Title,{children:"研究者案内"}),(0,d.tZ)(Ge.Z.Body,{children:(0,d.BX)(Me,{children:[(0,d.BX)(Me.Description,{children:[(0,d.BX)(Me.Name,{children:[(0,d.tZ)(Me.Name.Japanese,{children:"清水 沙友里"}),(0,d.tZ)(Me.Name.English,{children:"Shimizu Sayuri"})]}),(0,d.BX)(Me.MainSubject,{children:[(0,d.tZ)(Me.MainSubject.Label,{children:"主要担当科目"}),(0,d.tZ)(Me.MainSubject.Name,{children:"ビッグデータ解析"})]}),(0,d.tZ)(Me.Profile,{children:"医療は、サイエンスが背景にありつつも、 現実世界では必ずしもゼロイチでわけられない曖昧な領域を含んでおり、 その国特有のものの考え方が反映されている非常に面白い分野だと感じています。 医療業界も、近い未来には他の分野の企業や人が参入する新たな時代が来るのではないでしょうか。 医療のあり方を記述し、世の中を俯瞰して見るような研究も好きですが、 そういった時代の変化を捉える分析も行っていきたいと考えています。"}),(0,d.tZ)(m,{className:"ml-auto",to:"https://researchmap.jp/ssyr",children:"リサーチマップはこちら"})]}),H&&(0,d.tZ)(Me.Image,{alt:"清水 沙友里",image:H})]})})]}),(0,d.BX)(Ge.Z,{className:"z-0",id:"お知らせ",children:[(0,d.tZ)(X,{className:"absolute bottom-0 left-4 -z-10"}),(0,d.tZ)(Ge.Z.Title,{children:"お知らせ"}),(0,d.BX)(Ge.Z.Body,{children:[(0,d.tZ)(Fe,{className:"mb-8",children:F.allFile.nodes.map((function(e){return(0,d.tZ)(D.n,Object.assign({},e),e.id)}))}),(0,d.tZ)(m,{className:"block ml-auto max-w-max",to:"/news",children:"お知らせ一覧"})]})]}),(0,d.BX)(Ge.Z,{id:"データの更新",children:[(0,d.tZ)(Ge.Z.Title,{children:"データの更新"}),(0,d.tZ)(Ge.Z.Body,{children:(0,d.BX)("div",{className:"flex flex-col gap-1 max-w-md",children:[(0,d.tZ)(z,{name:"POST.pdf"}),(0,d.tZ)(z,{name:"郵便番号二次医療圏対応表2017.xlsx"}),(0,d.tZ)(z,{name:"PHA2017_6月版.xlsx"}),(0,d.tZ)(z,{name:"HOSPPHA.pdf"}),(0,d.tZ)(z,{name:"HOSP2017_7月版.xlsx"})]})})]}),(0,d.BX)(Ge.Z,{className:"z-0",id:"お問い合わせ",children:[(0,d.tZ)(X,{className:"absolute right-7 bottom-24 -z-10"}),(0,d.tZ)(Ge.Z.Title,{children:"お問い合わせ"}),(0,d.tZ)(Ge.Z.Body,{children:(0,d.BX)(K,{action:"https://docs.google.com/forms/u/0/d/e/"+(null===(f=F.site)||void 0===f||null===(u=f.siteMetadata)||void 0===u||null===(h=u.contact)||void 0===h?void 0:h.googleFormId)+"/formResponse",children:[(0,d.BX)("div",{className:"flex flex-col lg:flex-row gap-3 lg:gap-8 mb-8",children:[(0,d.BX)("div",{className:"flex flex-col flex-1 gap-3",children:[(0,d.BX)(K.Field,{children:[(0,d.tZ)(K.Field.Label,{children:"名前"}),(0,d.tZ)(K.Field.Input,{name:null===(g=F.site)||void 0===g||null===(Z=g.siteMetadata)||void 0===Z||null===(b=Z.contact)||void 0===b||null===(p=b.fields)||void 0===p?void 0:p.name,placeholder:"山田 太郎",required:!0})]}),(0,d.BX)(K.Field,{children:[(0,d.tZ)(K.Field.Label,{children:"所属"}),(0,d.tZ)(K.Field.Input,{name:null===(v=F.site)||void 0===v||null===(x=v.siteMetadata)||void 0===x||null===(N=x.contact)||void 0===N||null===(w=N.fields)||void 0===w?void 0:w.belongs,placeholder:"横浜市立大学 ヘルスデータサイエンス学科"})]}),(0,d.BX)(K.Field,{children:[(0,d.tZ)(K.Field.Label,{children:"連絡先"}),(0,d.tZ)(K.Field.Input,{name:null===(y=F.site)||void 0===y||null===(B=y.siteMetadata)||void 0===B||null===(R=B.contact)||void 0===R||null===(j=R.fields)||void 0===j?void 0:j.contactAddress,placeholder:"email@example.com 又は 090-1234-5678"})]})]}),(0,d.tZ)("div",{className:"flex-1",children:(0,d.BX)(K.Field,{className:"h-full",children:[(0,d.tZ)(K.Field.Label,{className:"lg:sr-only",children:"お問い合わせ内容"}),(0,d.tZ)(K.Field.Textarea,{name:null===(I=F.site)||void 0===I||null===(S=I.siteMetadata)||void 0===S||null===(O=S.contact)||void 0===O||null===(k=O.fields)||void 0===k?void 0:k.body,placeholder:"詳しい内容をお書きください",required:!0,rows:4})]})})]}),(0,d.tZ)(ee,{className:"block mx-auto",children:"送信する"})]})})]}),(0,d.BX)(Ge.Z,{children:[(0,d.tZ)(Ge.Z.Title,{children:"関連リンク"}),(0,d.tZ)(Ge.Z.Body,{children:(0,d.BX)("div",{className:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4",children:[(0,d.BX)("a",{className:"block flex-1 md:h-full",href:"https://www-user.yokohama-cu.ac.jp/~ycuds/hds/",rel:"noopener noreferrer",target:"_blank",children:[(0,d.tZ)("span",{className:"sr-only",children:"横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻"}),(0,d.tZ)(r.S,{alt:"横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻",layout:"fullWidth",src:"../images/HDS.png",__imageData:t(1698)})]}),(0,d.BX)("a",{className:"block flex-1 md:h-full",href:"https://www.yokohama-cu.ac.jp/",rel:"noopener noreferrer",target:"_blank",children:[(0,d.tZ)("span",{className:"sr-only",children:"横浜市立大学"}),(0,d.tZ)(r.S,{alt:"横浜市立大学",layout:"fullWidth",src:"../images/YCU.png",__imageData:t(173)})]})]})})]})]})}},1698:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/3b8da8474218a51ba411e05e0d6bd20c/73538/HDS.png","srcSet":"/static/3b8da8474218a51ba411e05e0d6bd20c/7636e/HDS.png 750w,\\n/static/3b8da8474218a51ba411e05e0d6bd20c/301a3/HDS.png 1080w,\\n/static/3b8da8474218a51ba411e05e0d6bd20c/73538/HDS.png 1276w","sizes":"100vw"},"sources":[{"srcSet":"/static/3b8da8474218a51ba411e05e0d6bd20c/4f82e/HDS.webp 750w,\\n/static/3b8da8474218a51ba411e05e0d6bd20c/7928b/HDS.webp 1080w,\\n/static/3b8da8474218a51ba411e05e0d6bd20c/c3b56/HDS.webp 1276w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.22884012539184953}')},173:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/f691505ea58352f9e5b628331d9bd20c/73538/YCU.png","srcSet":"/static/f691505ea58352f9e5b628331d9bd20c/7636e/YCU.png 750w,\\n/static/f691505ea58352f9e5b628331d9bd20c/301a3/YCU.png 1080w,\\n/static/f691505ea58352f9e5b628331d9bd20c/73538/YCU.png 1276w","sizes":"100vw"},"sources":[{"srcSet":"/static/f691505ea58352f9e5b628331d9bd20c/4f82e/YCU.webp 750w,\\n/static/f691505ea58352f9e5b628331d9bd20c/7928b/YCU.webp 1080w,\\n/static/f691505ea58352f9e5b628331d9bd20c/c3b56/YCU.webp 1276w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.22884012539184953}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8cfc013ddd9f626c91fd.js.map