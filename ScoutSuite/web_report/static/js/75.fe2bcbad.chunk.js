(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[75],{601:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(640)),c=n(103),i=n(642);t.default=function(e){var t=e.data;return t?Object(a.jsx)(r.a,{data:t,children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(r.c,{label:"Name",valuePath:"name",renderValue:c.n}),Object(a.jsx)(r.c,{label:"Creation Record",valuePath:"creation_record",renderValue:c.n}),Object(a.jsx)(r.c,{label:"Mutation Record",valuePath:"mutation_record",renderValue:c.n}),Object(a.jsx)(r.c,{label:"Conditions",valuePath:"conditions",renderValue:c.n}),Object(a.jsx)(r.c,{label:"Combiner",valuePath:"combiner",renderValue:c.n}),Object(a.jsx)(r.c,{label:"Enabled",valuePath:"enabled",renderValue:c.n})]})}):null}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),o=r.a.createContext(""),l=r.a.createContext((function(){}))},638:function(e,t,n){"use strict";var a=n(19),r=n(1),c=n(0),i=n(633),o=n(7),l=n.n(o),u=n(15),s=n.n(u),d=n(10),b=n.n(d),j=n(637),f=n(103),v=n(83),h=(n(641),n(624)),p=n(191),x=n.n(p),O=n(192),m=n(130),P=function(e){var t=e.service,n=e.finding,a=e.path,o=Object(c.useContext)(m.a),l=o.exceptions,u=o.addException,d=Object(O.b)().enqueueSnackbar,b=s()(l,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:"Add to exception list",placement:"top",arrow:!0,children:Object(r.jsx)(h.a,{disabled:b,size:"small",startIcon:Object(r.jsx)(x.a,{}),className:"exception-btn",onClick:function(){u(t,n,a),d("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:"Add"})})},C=n(29),g=function(e){var t,n=e.label,o=e.separator,u=e.valuePath,d=e.errorPath,h=e.className,p=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,g=e.basePathOverwrite,V=Object(C.g)(),N=Object(c.useContext)(j.a),A=Object(c.useContext)(j.b),_=Object(c.useContext)(j.c),w=Object(f.a)(g||A,u),k=m(e.value||s()(N.item,w,e.value));("boolean"===typeof k&&(k=String(k)),d)?t=(b()(d)?d:[d]).map((function(e){return Object(f.a)(g||A,e)})):t=[w];var E=t.some((function(e){return N.path_to_issues.includes(e)})),D=N.level;if(Object(c.useEffect)((function(){E&&_(D)}),[D]),void 0===k||null===k)return null;var I=Object(r.jsx)(P,{service:V.service,finding:V.finding,path:"".concat(N.path,".").concat(t[0])}),R=Object(r.jsxs)("span",{className:l()(E&&l()("issue",D)),children:[k,E&&I]});return Object(r.jsx)(v.a,{className:l()(h,"partial-value",{inline:p}),label:n,separator:o,value:x?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:k},O),{},{children:R})):R})};g.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=g},639:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(637),i=n(103);t.a=function(e){var t=e.path,n=e.children,o=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(o,t),children:n})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return o.a}));var a=n(1),r=(n(0),n(637)),c=(n(103),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(639),o=n(638)},641:function(e,t,n){},642:function(e,t,n){"use strict";var a=n(1);n(0),n(643);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},643:function(e,t,n){}}]);
//# sourceMappingURL=75.fe2bcbad.chunk.js.map