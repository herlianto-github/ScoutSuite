(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[83],{527:function(e,t,a){"use strict";a.r(t);var n=a(1),r=(a(0),a(103)),c=a(640);t.default=function(e){var t=e.data;return t?Object(n.jsx)(c.a,{data:t,children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:"Informations"}),Object(n.jsx)(c.c,{label:"Enabled",valuePath:"enabled"}),Object(n.jsx)(c.c,{label:"Region",valuePath:"region"}),Object(n.jsx)(c.c,{label:"Role ARN",valuePath:"role_ARN"}),Object(n.jsx)(c.c,{label:"Last Status",valuePath:"last_status"}),Object(n.jsx)(c.c,{label:"Last Status Time",valuePath:"last_start_time",renderValue:r.h}),Object(n.jsx)(c.c,{label:"Last Status Change Time",valuePath:"last_status_change_time",renderValue:r.h})]})}):null}},637:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return s}));var n=a(0),r=a.n(n),c={path_to_issue:[],item:{}},i=r.a.createContext(c),l=r.a.createContext(""),s=r.a.createContext((function(){}))},638:function(e,t,a){"use strict";var n=a(19),r=a(1),c=a(0),i=a(633),l=a(7),s=a.n(l),o=a(15),u=a.n(o),b=a(10),d=a.n(b),j=a(637),h=a(103),v=a(83),f=(a(641),a(624)),p=a(191),x=a.n(p),O=a(192),m=a(130),P=function(e){var t=e.service,a=e.finding,n=e.path,l=Object(c.useContext)(m.a),s=l.exceptions,o=l.addException,b=Object(O.b)().enqueueSnackbar,d=u()(s,[t,a],[]).includes(n);return Object(r.jsx)(i.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(r.jsx)(f.a,{disabled:d,size:"small",startIcon:Object(r.jsx)(x.a,{}),className:"exception-btn",onClick:function(){o(t,a,n),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},g=a(29),_=function(e){var t,a=e.label,l=e.separator,o=e.valuePath,b=e.errorPath,f=e.className,p=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,_=e.basePathOverwrite,C=Object(g.g)(),A=Object(c.useContext)(j.a),N=Object(c.useContext)(j.b),R=Object(c.useContext)(j.c),S=Object(h.a)(_||N,o),k=m(e.value||u()(A.item,S,e.value));("boolean"===typeof k&&(k=String(k)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(h.a)(_||N,e)})):t=[S];var w=t.some((function(e){return A.path_to_issues.includes(e)})),E=A.level;if(Object(c.useEffect)((function(){w&&R(E)}),[E]),void 0===k||null===k)return null;var L=Object(r.jsx)(P,{service:C.service,finding:C.finding,path:"".concat(A.path,".").concat(t[0])}),T=Object(r.jsxs)("span",{className:s()(w&&s()("issue",E)),children:[k,w&&L]});return Object(r.jsx)(v.a,{className:s()(f,"partial-value",{inline:p}),label:a,separator:l,value:x?Object(r.jsx)(i.a,Object(n.a)(Object(n.a)({title:k},O),{},{children:T})):T})};_.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=_},639:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a(637),i=a(103);t.a=function(e){var t=e.path,a=e.children,l=Object(r.useContext)(c.b);return Object(n.jsx)(c.b.Provider,{value:Object(i.a)(l,t),children:a})}},640:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return i.a})),a.d(t,"c",(function(){return l.a}));var n=a(1),r=(a(0),a(637)),c=(a(103),function(e){var t=e.data,a=e.children;return console.info("PARTIAL DATA",t),Object(n.jsx)(r.a.Provider,{value:t,children:a})}),i=a(639),l=a(638)},641:function(e,t,a){}}]);
//# sourceMappingURL=83.def3ad00.chunk.js.map