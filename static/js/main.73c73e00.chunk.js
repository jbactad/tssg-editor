(this["webpackJsonptssg-editor"]=this["webpackJsonptssg-editor"]||[]).push([[0],{218:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),i=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(21),s=n(4),c=n(227),u=n(223),p=(n(50),n(51),n(95),n(225)),m=n(41),d=n(226),y=n(222),v=n(69),f=n.n(v),g=function(e){var t=e.isOpen,n=e.onClose,o=Object(a.useState)(""),i=Object(l.a)(o,2),c=i[0],u=i[1];return Object(a.useEffect)((function(){"undefined"!==typeof fetch&&fetch("./readme.md").then((function(e){return e.text()})).then((function(e){return u(e)}))}),[]),r.a.createElement(d.a,{isOpen:t,onClose:n,size:"900px"},r.a.createElement(d.f,null),r.a.createElement(d.d,null,r.a.createElement(d.e,null,r.a.createElement(y.a,{size:"lg",backgroundColor:"royalblue",display:"inline-block",p:2,px:6,color:"white"},"How to use guide...")),r.a.createElement(d.c,null),r.a.createElement(d.b,null,r.a.createElement(s.a,{className:"how-to-guide"},r.a.createElement(f.a,{source:c,escapeHtml:!1})))))},E=n(228),x=n(224),h=n(87),b=function(e){var t=e.rightSection;return r.a.createElement(s.a,{pl:8},r.a.createElement(u.a,{alignItems:"center"},r.a.createElement(s.a,{flex:1},r.a.createElement(u.a,{alignItems:"center"},r.a.createElement(y.a,{color:"green.500"},"TSSG"),r.a.createElement(E.a,{color:"white",backgroundColor:"orange.400",mx:2},"Alpha"),r.a.createElement(y.a,{size:"xs",color:"black.200"},"The Swagger Schema Generator")),r.a.createElement(x.a,null,"Write schema in an easy, concise and short way")),r.a.createElement(s.a,null,r.a.createElement(u.a,{alignItems:"center",mr:4},r.a.createElement(s.a,{mr:4,mt:2},r.a.createElement(h.a,{href:"https://github.com/jskod/tssg-editor","data-size":"large","data-show-count":!0,"aria-label":"Star jskod/tssg-editor on GitHub"},"Star")),t))))},S=n(88),O=n(82),w=n(83),j=n.n(w),k=n(84),C=(n(204),n(205),n(206),n(210),n(211),function(e){var t=e.setParsedData,n=e.width,o=e.height,i=Object(a.useState)("/**\n* Example TSSG Syntax\n* Data Types:\n* \tstring | s, number | n, integer | i, boolean | b, [], {}\n* Marker:\n* \tuse `!` sign to mark an object property as required\n* Supported functions:\n* \toneOf, allOf, anyOf\n*\n* For more information read `how to use` guide.\n* This project is Work In Progress. It will soon support other swagger features.\n*/\n\n{\n\tname: s,\n\tage: !n,\n\taddress: {\n    \tcity: string,\n        country: !string\n    },\n    choices: oneOf(s, n, b),\n}"),c=Object(l.a)(i,2),u=c[0],p=c[1],m=Object(a.useState)(""),d=Object(l.a)(m,2),y=d[0],v=d[1],f=Object(a.useCallback)(j()((function(e){if(e)try{var n=Object(k.ssgToOASParser)("(".concat(e,")"));t(n),v("")}catch(a){v(a.message)}}),1e3,{trailing:!0}),[]);return Object(a.useEffect)((function(){f(u)}),[u]),r.a.createElement(s.a,{position:"relative"},y&&r.a.createElement(I,Object.assign({error:y},{position:"absolute",left:0,bottom:0,zIndex:999,width:"100%",color:"white"})),r.a.createElement(O.Controlled,{editorDidMount:function(e){e.setSize(n/2,o-80)},className:"tssg-editor",value:u,options:{lineWrapping:!0,lineNumbers:!0,theme:"material",smartIndent:!1,autoCloseBrackets:!0,highlightSelectionMatches:!0,matchBrackets:!0,mode:"javascript"},onBeforeChange:function(e,t,n){p(n)},onChange:function(e,t,n){}}))}),I=function(e){var t=e.error,n=Object(S.a)(e,["error"]);return console.log(t),r.a.createElement(s.a,Object.assign({padding:2,bg:"orange.400"},n),t||"")},A=n(85),z=function(){var e,t,n=Object(a.useState)(),o=Object(l.a)(n,2),i=o[0],d=o[1],y=Object(a.useState)(!1),v=Object(l.a)(y,2),f=v[0],E=v[1];Object(a.useEffect)((function(){E(!1)}),[i]);var x=null===(e=window)||void 0===e?void 0:e.innerHeight,h=null===(t=window)||void 0===t?void 0:t.innerWidth,S=Object(p.a)(),O=S.isOpen,w=S.onClose,j=S.onOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{h:80,position:"relative"},r.a.createElement(b,{rightSection:r.a.createElement(c.a,{onClick:j,size:"md"},r.a.createElement(m.a,{name:"info-outline",mr:2})," How to use?")})),r.a.createElement(u.a,null,r.a.createElement(s.a,{flex:1},r.a.createElement(C,{setParsedData:d,width:h,height:x})),r.a.createElement(s.a,{flex:1,bg:"green.500",color:"white",position:"relative"},r.a.createElement(s.a,{position:"absolute",top:2,right:6},r.a.createElement(A.CopyToClipboard,{text:JSON.stringify(i,null,2),onCopy:function(){return E(!0)}},r.a.createElement(c.a,{size:"sm",variantColor:"blue"},r.a.createElement(m.a,{name:f?"check":"copy",mr:2})," Copy to clipboard"))),r.a.createElement("pre",{style:{overflowY:"scroll",height:x-80,padding:"10px",fontSize:"16px"}},JSON.stringify(i,null,2)))),r.a.createElement(g,{isOpen:O,onClose:w}))},T=n(35),q=n(220),P=n(229);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T.a,{theme:q.a},r.a.createElement(P.a,null),r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,n){"use strict";var a=n(7),r=n(202),o=n(66),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var l=i(n(203));function s(e,t,n){var a,r,o,i;try{if(n.value.type===l.Syntax.ArrayExpression||n.value.type===l.Syntax.UnaryExpression&&n.value.argument.type===l.Syntax.ArrayExpression||n.value.type===l.Syntax.CallExpression||n.value.type===l.Syntax.UnaryExpression&&n.value.argument.type===l.Syntax.CallExpression)return{type:u(t.name)};e.properties[n.key.name]={type:u(null===(a=t)||void 0===a?void 0:a.name)}}catch(s){throw new Error("Line ".concat(null===(i=null===(o=null===(r=n)||void 0===r?void 0:r.loc)||void 0===o?void 0:o.start)||void 0===i?void 0:i.line,": ").concat(s.message))}return e}var c=["s","string","i","integer","n","number","b","boolean"];function u(e){if(!c.includes(e))throw new Error("ssg error: '".concat(e,"' is not a valid data type"));return{s:"string",i:"integer",n:"number",b:"boolean"}[e]||e}function p(e,t,n){var a,r,i,c;if("!"===t.operator){if(e.required=[].concat(o((null===(a=e)||void 0===a?void 0:a.required)||[]),[n.key.name]),t.argument.type===l.Syntax.Identifier)return s(e,t.argument,n);if(t.argument.type===l.Syntax.ObjectExpression)return m(e,t.argument,n);if(t.argument.type===l.Syntax.ArrayExpression)return d(e,t.argument,n);if(t.argument.type===l.Syntax.CallExpression)return v(e,t.argument,n)}throw new Error("Line ".concat(null===(c=null===(i=null===(r=n)||void 0===r?void 0:r.loc)||void 0===i?void 0:i.start)||void 0===c?void 0:c.line,": Syntax error"))}function m(e,t,n){return n.value.type===l.Syntax.ArrayExpression||n.value.type===l.Syntax.UnaryExpression&&n.value.argument.type===l.Syntax.ArrayExpression||n.value.type===l.Syntax.CallExpression||n.value.type===l.Syntax.UnaryExpression&&n.value.argument.type===l.Syntax.CallExpression?r({type:"object"},t.properties.reduce(g,void 0)):(e.properties[n.key.name]=r({type:"object"},t.properties.reduce(g,void 0)),e)}function d(e,t,n){return e.properties[n.key.name]={type:"array",items:function(){var e=t.elements[0];if(!e)return{};switch(e.type){case l.Syntax.Identifier:return s({},e,n);case l.Syntax.ObjectExpression:return m({},e,n);case l.Syntax.CallExpression:return v(null,e,n)}}()},e}var y=["oneOf","allOf","anyOf"];function v(e,t,n){var r,o,i;if(!y.includes(t.callee.name))throw new Error("Line ".concat(null===(i=null===(o=null===(r=n)||void 0===r?void 0:r.loc)||void 0===o?void 0:o.start)||void 0===i?void 0:i.line,": '").concat(t.callee.name,"' is an invalid keyword"));if(y.includes(t.callee.name)){if(!e&&(n.value.type===l.Syntax.ArrayExpression||n.value.type===l.Syntax.UnaryExpression&&n.value.argument.type===l.Syntax.ArrayExpression))return a({},t.callee.name,t.arguments.map((function(e){return e.type===l.Syntax.Identifier?s({},e,n):e.type===l.Syntax.ObjectExpression?m({},e,n):void 0})));e.properties[n.key.name]=a({},t.callee.name,t.arguments.map((function(e){return e.type===l.Syntax.Identifier?s({},e,n):e.type===l.Syntax.ObjectExpression?m({},e,n):void 0})))}return e}function f(e){var t;return"undefined"===typeof e.required||(null===(t=e.required)||void 0===t?void 0:t.length)||delete e.required,e}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"object",required:[],properties:{}},t=arguments.length>1?arguments[1]:void 0;return t.value.type===l.Syntax.Identifier?f(s(e,t.value,t)):t.value.type===l.Syntax.UnaryExpression?f(p(e,t.value,t)):t.value.type===l.Syntax.ObjectExpression?f(m(e,t.value,t)):t.value.type===l.Syntax.ArrayExpression?d(e,t.value,t):t.value.type===l.Syntax.CallExpression?f(v(e,t.value,t)):void 0};t.ssgToOASParser=function(e){return l.parseScript("(".concat(e,")"),{loc:!0}).body[0].expression.properties.reduce(g,void 0)}},90:function(e,t,n){e.exports=n(218)},95:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.73c73e00.chunk.js.map