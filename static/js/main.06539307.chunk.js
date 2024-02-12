(this.webpackJsonphero_admin_panel=this.webpackJsonphero_admin_panel||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(5),s=n.n(a),l=n(2),i=n(3),o=n(15),u=n(11),b=n.n(u),d=n(12),j=function(){return{request:Object(c.useCallback)(function(){var e=Object(d.a)(b.a.mark((function e(t){var n,c,r,a,s,l=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",c=l.length>2&&void 0!==l[2]?l[2]:null,r=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:n,body:c,headers:r});case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 9:return e.next=11,a.json();case 11:return s=e.sent,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[])}},h=function(e){return{type:"HEROES_FETCHED",payload:e}},O=n(1),m=function(e){var t,n=e.name,c=e.description,r=e.element,a=e.onDeleteHero;switch(r){case"fire":t="bg-danger bg-gradient";break;case"water":t="bg-primary bg-gradient";break;case"wind":t="bg-success bg-gradient";break;case"earth":t="bg-secondary bg-gradient";break;default:t="bg-warning bg-gradient"}return Object(O.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(t),children:[Object(O.jsx)("img",{src:"https://www.meme-arsenal.com/memes/91fbc6284b6fa84b74d95f54414665b2.jpg",className:"img-fluid w-25 d-inline",alt:"unknown hero",style:{objectFit:"cover"}}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h3",{className:"card-title",children:n}),Object(O.jsx)("p",{className:"card-text",children:c})]}),Object(O.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",onClick:a,children:Object(O.jsx)("button",{type:"button",className:"btn-close btn-close","aria-label":"Close"})})]})},f=function(){return Object(O.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(O.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},p=function(){var e=Object(l.c)((function(e){return e})),t=e.heroes,n=e.heroesLoadingStatus,r=Object(l.b)(),a=j().request;Object(c.useEffect)((function(){r({type:"HEROES_FETCHING"}),a("http://localhost:3001/heroes").then((function(e){return r(h(e))})).catch((function(){return r({type:"HEROES_FETCHING_ERROR"})}))}),[]);if("loading"===n)return Object(O.jsx)(f,{});if("error"===n)return Object(O.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var s,u=0===(s=t).length?Object(O.jsx)("h5",{className:"text-center mt-5",children:"\u0413\u0435\u0440\u043e\u0435\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"}):s.map((function(e){var n=e.id,c=Object(o.a)(e,["id"]);return Object(O.jsx)(m,Object(i.a)({onDeleteHero:function(){return function(e){var n=t.filter((function(t){return t.id!==e}));console.log(n),r(h(n))}(n)}},c),n)}));return Object(O.jsx)("ul",{children:u})},x=n(13),g=n(7),v=n(30),E=function(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(g.a)(a,2),i=s[0],o=s[1],u=Object(c.useState)(""),b=Object(g.a)(u,2),d=b[0],j=b[1],m=Object(l.c)((function(e){return e})).heroes,f=Object(l.b)();return Object(O.jsxs)("form",{className:"border p-4 shadow-lg rounded",onSubmit:function(e){e.preventDefault();var t={id:Object(v.a)(),name:n,description:i,element:d};f(h([].concat(Object(x.a)(m),[t])))},children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0433\u0435\u0440\u043e\u044f"}),Object(O.jsx)("input",{required:!0,type:"text",name:"name",className:"form-control",id:"name",placeholder:"\u041a\u0430\u043a \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442?",value:n,onChange:function(e){var t=e.target.value;r(t)}})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"text",className:"form-label fs-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(O.jsx)("textarea",{required:!0,name:"text",className:"form-control",id:"text",placeholder:"\u0427\u0442\u043e \u044f \u0443\u043c\u0435\u044e?",style:{height:"130px"},value:i,onChange:function(e){var t=e.target.value;o(t)}})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"element",className:"form-label",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0433\u0435\u0440\u043e\u044f"}),Object(O.jsxs)("select",{required:!0,className:"form-select",id:"element",name:"element",value:d,onChange:function(e){var t=e.target.value;j(t)},children:[Object(O.jsx)("option",{children:"\u042f \u0432\u043b\u0430\u0434\u0435\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c..."}),Object(O.jsx)("option",{value:"fire",children:"\u041e\u0433\u043e\u043d\u044c"}),Object(O.jsx)("option",{value:"water",children:"\u0412\u043e\u0434\u0430"}),Object(O.jsx)("option",{value:"wind",children:"\u0412\u0435\u0442\u0435\u0440"}),Object(O.jsx)("option",{value:"earth",children:"\u0417\u0435\u043c\u043b\u044f"})]})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})},N=function(){var e=Object(l.c)((function(e){return e})),t=e.filters,n=e.heroes,r=j().request,a=Object(l.b)();Object(c.useEffect)((function(){r("http://localhost:3001/filters").then((function(e){return a(function(e){return{type:"FILTERS_FETCHED",payload:e}}(e))})).catch((function(){return a({type:"FILTERS_FETCHING_ERROR"})}))}),[]);var s=function(e){if(0!==e.length)return e.map((function(e,t){return Object(O.jsx)("button",{className:e.classes,onClick:function(){return function(e){if("all"!==e){var t=n.filter((function(t){return t.element===e}));a(h(t))}else r("http://localhost:3001/heroes").then((function(e){return a(h(e))}))}(e.element)},children:e.name},t)}))}(t);return Object(O.jsx)("div",{className:"card shadow-lg mt-4",children:Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("p",{className:"card-text",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0433\u0435\u0440\u043e\u0435\u0432 \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c"}),Object(O.jsx)("div",{className:"btn-group",children:s})]})})},_=(n(26),function(){return Object(O.jsx)("main",{className:"app",children:Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)(p,{}),Object(O.jsxs)("div",{className:"content__interactive",children:[Object(O.jsx)(E,{}),Object(O.jsx)(N,{})]})]})})}),w=n(14),y={heroes:[],heroesLoadingStatus:"idle",filters:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HEROES_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{heroesLoadingStatus:"loading"});case"HEROES_FETCHED":return Object(i.a)(Object(i.a)({},e),{},{heroes:t.payload,heroesLoadingStatus:"idle"});case"HEROES_FETCHING_ERROR":return Object(i.a)(Object(i.a)({},e),{},{heroesLoadingStatus:"error"});case"FILTERS_FETCHED":return Object(i.a)(Object(i.a)({},e),{},{filters:t.payload});case"FILTERS_FETCHING_ERROR":return Object(i.a)({},e);default:return e}},S=Object(w.a)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(27);s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(l.a,{store:S,children:Object(O.jsx)(_,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.06539307.chunk.js.map