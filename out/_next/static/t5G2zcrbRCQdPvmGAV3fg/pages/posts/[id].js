(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{muhC:function(t,e,r){"use strict";r.r(e);var n=r("ln6h"),o=r.n(n),a=r("q1tI"),i=r("wLTh"),c=r("qWyU"),u=r("twnv"),s=r("bQFp"),l=r("Weur"),m=r("/wep"),p=r("oO+H"),b=r("M8to"),d=a.createElement,g=function(t){var e=t.post;return d(a.Fragment,null,d(b.a,{title:e.title,description:e.content,keyword:e.title,image:e.image.url,url:"https://ryusou-blog.now.sh/posts/".concat(e.id)}),d(p.a,null,d(c.a,{fontSize:{sm:"3xl"},margin:2,marginLeft:4},e.title),d("div",null,e.tags.map((function(t){return d(a.Fragment,{key:t.id},d(u.a,{marginLeft:6,marginTop:1,size:"sm"},t.name))}))),d(s.a,{src:e.image.url,rounded:"lg",margin:4,marginBottom:[10,20,20,20]}),d(l.a,{margin:"6"},d("div",{dangerouslySetInnerHTML:{__html:"".concat(e.content)}}))))};g.getInitialProps=function(t){var e,r,n;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=t.query.id,a.next=3,o.a.awrap(m.a.get("https://ryusou-mtkh.microcms.io/api/v1/posts/".concat(e)));case 3:return r=a.sent,a.next=6,o.a.awrap(r.data);case 6:return n=a.sent,a.abrupt("return",{post:n});case 8:case"end":return a.stop()}}))},e.default=Object(i.b)(g)},twnv:function(t,e,r){"use strict";var n=r("8OQS"),o=r.n(n),a=r("pVnL"),i=r.n(a),c=r("qKvR"),u=r("lSNA"),s=r.n(u),l=r("8hg0"),m=r("CjxU"),p=r("mf32");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var d=function(t){var e=t.variant,r=t.colorMode;switch(e){case"solid":return function(t){var e=t.theme.colors,r=t.color,n=e[r]&&e[r][500],o=Object(l.a)(n,.6);return{light:{bg:Object(l.c)(r,500),color:"white"},dark:{bg:o,color:"whiteAlpha.800"}}}(t)[r];case"subtle":return function(t){var e=t.theme.colors,r=t.color,n=e[r]&&e[r][200],o=Object(l.b)(n)[300];return{light:{bg:Object(l.c)(r,100),color:Object(l.c)(r,800)},dark:{bg:o,color:Object(l.c)(r,200)}}}(t)[r];case"outline":return function(t){var e=t.theme.colors,r=t.color,n=e[r]&&e[r][200],o=Object(l.a)(n,.8);return{light:{boxShadow:"inset 0 0 0px 1px "+(e[r]&&e[r][500]),color:Object(l.c)(r,500)},dark:{boxShadow:"inset 0 0 0px 1px "+o,color:o}}}(t)[r];default:return{}}},g=function(t){var e=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(r,!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t,{theme:Object(m.b)(),colorMode:Object(p.b)().colorMode});return d(e)},f=(r("w0db"),r("BMxC"),r("+Cyc")),w=r("D7Da"),v={sm:{minH:6,minW:6,fontSize:"sm",px:2},md:{minH:"1.75rem",minW:"1.75rem",fontSize:"sm",px:2},lg:{minH:8,minW:8,px:3}};e.a=function(t){var e=t.variant,r=void 0===e?"subtle":e,n=t.size,a=void 0===n?"lg":n,u=t.variantColor,s=void 0===u?"gray":u,l=o()(t,["variant","size","variantColor"]);Object(w.b)("Tag",s);var m=g({color:s,variant:r}),p=v[a];return Object(c.d)(f.a,i()({display:"inline-flex",alignItems:"center",minH:6,maxW:"100%",rounded:"md",fontWeight:"medium"},p,m,l))}},wyEa:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return r("muhC")}])}},[["wyEa",1,2,4,0,3,5,6,7]]]);