(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{D7Da:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}));var n=r("q1tI"),o=r("CjxU"),a=function(e,t){if(null!=e)if("function"===typeof e)e(t);else try{e.current=t}catch(r){throw new Error('Cannot assign value "'+t+'" to ref "'+e+'"')}};["a[href]","area[href]","button:not([disabled])","embed","iframe","input:not([disabled])","object","select:not([disabled])","textarea:not([disabled])","*[tabindex]:not([aria-disabled])","*[contenteditable]"].join();"undefined"!==typeof window?n.useLayoutEffect:n.useEffect;function i(e,t){Object(o.b)()}},hkpG:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r("wLTh"),a=r("ma3e"),i=r("qWyU"),l=r("pVnL"),c=r.n(l),d=r("8OQS"),u=r.n(d),s=r("qKvR"),b=0,f=function(){var e=Object(n.useState)(null),t=e[0],r=e[1];return Object(n.useEffect)((function(){return r(++b)}),[]),t},p=r("D7Da"),h=r("lSNA"),m=r.n(h),g=r("mf32"),v=r("CjxU");function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(r,!0).forEach((function(t){m()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j={display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",transition:"all 0.2s",_focus:{zIndex:"1",boxShadow:"outline"}},x={_disabled:{opacity:.4,cursor:"not-allowed"}},C=function(e){switch(e.variant){case"line":return function(e){var t=e.color;return{tabList:{borderBottom:"2px",borderColor:"inherit"},tab:{borderBottom:"2px",borderColor:"transparent",mb:"-2px",_selected:{color:{light:t+".600",dark:t+".300"}[e.colorMode],borderColor:"currentColor"},_active:{bg:"gray.200"},_disabled:{opacity:.4,cursor:"not-allowed"}}}}(e);case"enclosed":return function(e){var t=e.color,r=e.colorMode,n={light:t+".600",dark:t+".300"},o={light:"#fff",dark:e.theme.colors.gray[800]};return{tab:{roundedTop:"md",border:"1px",borderColor:"transparent",mb:"-1px",_selected:{color:n[r],borderColor:"inherit",borderBottomColor:o[r]}},tabList:{mb:"-1px",borderBottom:"1px",borderColor:"inherit"}}}(e);case"enclosed-colored":return function(e){var t=e.color,r=e.colorMode;return{tab:{border:"1px",borderColor:"inherit",bg:{light:"gray.50",dark:"whiteAlpha.50"}[r],mb:"-1px",_notLast:{mr:"-1px"},_selected:{bg:{light:"#fff",dark:"gray.800"}[r],color:{light:t+".600",dark:t+".300"}[r],borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"}},tabList:{mb:"-1px",borderBottom:"1px",borderColor:"inherit"}}}(e);case"soft-rounded":return function(e){var t=e.color;return{tab:{rounded:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:t+".700",bg:t+".100"}},tabList:{}}}(e);case"solid-rounded":return function(e){var t=e.color,r=e.colorMode;return{tab:{rounded:"full",fontWeight:"semibold",color:{light:"gray.600",dark:"inherit"}[r],_selected:{color:{light:"#fff",dark:"gray.800"}[r],bg:{light:t+".600",dark:t+".300"}[r]}},tabList:{}}}(e);case"unstyled":return{}}},w=function(e){var t,r,n=e.align,o=e.orientation;return"horizontal"===o&&(t={alignItems:"center",justifyContent:{end:"flex-end",center:"center",start:"flex-start"}[n],maxWidth:"full"},r={height:"100%"}),"vertical"===o&&(t={flexDirection:"column"},r={width:"100%"}),{tabList:t,tab:r}},k={sm:{padding:"0.25rem 1rem",fontSize:"0.85rem"},md:{fontSize:"1rem",padding:"0.5rem 1rem"},lg:{fontSize:"1.15rem",padding:"0.75rem 1rem"}},S=r("+Cyc"),D=r("Weur"),P=r("BMxC"),I=Object(n.forwardRef)((function(e,t){var r=e.isSelected,o=e.isDisabled,a=e.id,i=(e.size,u()(e,["isSelected","isDisabled","id","size"])),l=function(){var e=Object(v.b)(),t=Object(n.useContext)(L),r=t.variant,o=t.color,a=t.size,i=t.isFitted,l=t.orientation,c=Object(g.b)().colorMode,d=C({variant:r,color:o,theme:e,colorMode:c}),u=w({orientation:l});return y({},j,{},x,{},k[a],{},d&&d.tab,{},u&&u.tab,{},i&&{flex:1})}();return Object(s.d)(S.a,c()({ref:t,role:"tab",tabIndex:r?0:-1,id:"tab:"+a,outline:"none",as:"button",type:"button",disabled:o,"aria-selected":r,"aria-disabled":o,"aria-controls":"panel:"+a},l,i))}));I.displayName="Tab";var M=Object(n.forwardRef)((function(e,t){var r=e.children,o=e.onKeyDown,a=(e.onClick,u()(e,["children","onKeyDown","onClick"])),i=Object(n.useContext)(L),l=i.id,d=i.index,b=i.manualIndex,f=i.onManualTabChange,p=i.isManual,h=i.onChangeTab,m=i.onFocusPanel,g=i.orientation,O=function(){var e=Object(v.b)(),t=Object(n.useContext)(L),r=t.variant,o=t.align,a=t.orientation,i=C({variant:r,theme:e}),l=w({align:o,orientation:a});return y({},i&&i.tabList,{},l&&l.tabList)}(),j=Object(n.useRef)([]),x=n.Children.map(r,(function(e,t){return!0===e.props.isDisabled?null:t})).filter((function(e){return null!=e})),k=x.indexOf(d),S=x.length,P=function(e){var t=x[e];j.current[t].focus(),h&&h(t)},I=n.Children.map(r,(function(e,t){var r=p?t===b:t===d;return Object(n.cloneElement)(e,{ref:function(e){return j.current[t]=e},isSelected:r,onClick:function(r){j.current[t].focus(),f(t),h(t),e.props.onClick&&e.props.onClick(r)},id:l+"-"+t})}));return Object(s.d)(D.a,c()({onKeyDown:function(e){"ArrowRight"===e.key&&(e.preventDefault(),P((k+1)%S));"ArrowLeft"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),P((k-1+S)%S));"Home"===e.key&&(e.preventDefault(),P(0)),"End"===e.key&&(e.preventDefault(),P(S-1)),"ArrowDown"===e.key&&(e.preventDefault(),m&&m()),o&&o(e)},ref:t,role:"tablist","aria-orientation":g},O,a),I)}));M.displayName="TabList";var T=Object(n.forwardRef)((function(e,t){var r=e.children,n=e.isSelected,o=e.selectedPanelRef,a=e.id,i=u()(e,["children","isSelected","selectedPanelRef","id"]);return Object(s.d)(P.a,c()({ref:function(e){n&&Object(p.a)(o,e),Object(p.a)(t,e)},role:"tabpanel",tabIndex:-1,"aria-labelledby":"tab:"+a,hidden:!n,id:"panel:"+a,outline:0},i),r)}));T.displayName="TabPanel";var z=Object(n.forwardRef)((function(e,t){var r=e.children,o=u()(e,["children"]),a=Object(n.useContext)(L),i=a.index,l=a.selectedPanelRef,d=a.id,b=a.isManual,f=a.manualIndex,p=n.Children.map(r,(function(e,t){if(Object(n.isValidElement)(e))return Object(n.cloneElement)(e,{isSelected:b?t===f:t===i,selectedPanelRef:l,id:d+"-"+t})}));return Object(s.d)(P.a,c()({tabIndex:"-1",ref:t},o),p)}));z.displayName="TabPanels";var L=Object(n.createContext)(),R=Object(n.forwardRef)((function(e,t){var r=e.children,o=e.onChange,a=e.index,i=e.defaultIndex,l=e.isManual,d=e.variant,b=void 0===d?"line":d,h=e.variantColor,m=void 0===h?"blue":h,g=e.align,v=void 0===g?"start":g,O=e.size,y=void 0===O?"md":O,j=e.orientation,x=void 0===j?"horizontal":j,C=e.isFitted,w=u()(e,["children","onChange","index","defaultIndex","isManual","variant","variantColor","align","size","orientation","isFitted"]);Object(p.b)("Tabs",m);var k=Object(n.useRef)(null!=a).current,S=Object(n.useRef)(),D=Object(n.useState)((function(){return l?a||i||0:i||0})),I=D[0],M=D[1],T=Object(n.useState)(a||i||0),z=T[0],R=T[1],_=l?I:k?a:I,E=k?a:z,N={id:f(),index:_,manualIndex:E,onManualTabChange:function(e){k||R(e),l&&o&&o(e)},isManual:l,onChangeTab:function(e){k||M(e),k&&l&&M(e),l||o&&o(e)},selectedPanelRef:S,onFocusPanel:function(){S.current&&S.current.focus()},color:m,size:y,align:v,variant:b,isFitted:C,orientation:x};return Object(s.d)(L.Provider,{value:N},Object(s.d)(P.a,c()({ref:t},w),r))}));R.displayName="Tabs";var _=R,E=r("sK1y"),N=r("pboS"),B=r("oO+H"),W=n.createElement;t.default=Object(o.b)((function(){return W(B.a,null,W(i.a,{as:"h1",fontSize:["xl","2xl","3xl","3xl"],marginTop:"10",marginBottom:"10",letterSpacing:"tight"},"Introduction products and speeches"),W(_,{size:"lg",variant:"enclosed",variantColor:"teal",isFitted:!0},W(M,{mb:"10"},W(I,{fontWeight:"bold"},"Product"),W(I,{fontWeight:"bold"},"Speech")),W(z,null,W(T,{margin:"4"},"COMING SOON!!"),W(T,null,W(E.a,{margin:"4"},"2019/12/7 [We are JavaScripters! 3\u5468\u5e74\u8a18\u5ff5]"),W(D.a,{marginLeft:"8"},W(a.a,null),W(N.a,{href:"https://speakerdeck.com/nozaki/hazimetefalseuniversal-javascript"},W(E.a,{fontWeight:"bold"},"\u300c\u306f\u3058\u3081\u3066\u306eUniversal JavaScript\u300d")))))))}))},sIsM:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work",function(){return r("hkpG")}])},sK1y:function(e,t,r){"use strict";var n=r("pVnL"),o=r.n(n),a=r("q1tI"),i=r.n(a),l=r("BMxC"),c=i.a.forwardRef((function(e,t){return i.a.createElement(l.a,o()({ref:t,as:"p",fontFamily:"body"},e))}));c.displayName="Text",t.a=c}},[["sIsM",1,2,4,0,3,5,6]]]);