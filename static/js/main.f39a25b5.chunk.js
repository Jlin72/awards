(this["webpackJsonpshoppify-assesment"]=this["webpackJsonpshoppify-assesment"]||[]).push([[0],{59:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(32),a=n.n(s),o=(n(59),n(53)),r=n(7),l=n(5),d=n(12),u=n(18),b=n(3),j=n(2),m=Object(c.createContext)(),O=m.Provider,h=function(e,t){switch(t.type){default:return;case"ADDING_NOMINEE":return Object(b.a)(Object(b.a)({},e),{},{nominees:[].concat(Object(u.a)(e.nominees),[t.nominee])});case"REMOVING_NOMINEE":return Object(b.a)(Object(b.a)({},e),{},{nominees:Object(u.a)(t.nominees)});case"ADDING_MOVIES":return Object(b.a)(Object(b.a)({},e),{},{movies:Object(u.a)(t.movies)});case"FETCHING_NOMINEES":return Object(b.a)(Object(b.a)({},e),{},{nominees:Object(u.a)(t.nominees)})}},f=function(e){e.value;var t=Object(d.a)(e,["value"]),n=Object(c.useReducer)(h,{movies:[],nominees:[]}),i=Object(l.a)(n,2),s=i[0],a=i[1];return Object(j.jsx)(O,Object(b.a)({value:[s,a]},t))},p=n(52),v=n.n(p),x=n(28),g=(n(80),function(e,t){var n=Object(c.useState)(e),i=Object(l.a)(n,2),s=i[0],a=i[1];return Object(c.useEffect)((function(){var n=setTimeout((function(){a(e)}),t);return function(){clearTimeout(n)}}),[e,t]),s}),C=function(e){var t=e.children,n=e.additionalClasses;return Object(j.jsx)("div",{className:"container ".concat(n),children:t})},N=(n(81),function(e){var t=e.children,n=e.additionalClasses;return Object(j.jsx)("div",{className:"row ".concat(n),children:t})}),y=(n(82),function(e){var t=e.children,n=e.additionalClasses,c=e.ref,i=e.providedDroppable;return Object(j.jsx)("div",Object(b.a)(Object(b.a)({className:"card ".concat(n),ref:c},i),{},{children:Object(j.jsx)("div",Object(b.a)(Object(b.a)({className:"card-body",ref:c},i),{},{children:t}))}))}),I=function(e){var t=e.inputId,n=e.inputClassName,c=e.inputOnChangeCb,i=e.inputPlaceholder,s=e.inputRef,a=e.inputAriaLabel,o=e.inputAriaDescribedby;return Object(j.jsx)("input",{id:t,className:n,onChange:c,placeholder:i,ref:s,"aria-label":a,"aria-describedby":o})},E=function(e){var t=e.inputOnChangeCb,n=e.inputRef;return Object(j.jsx)(N,{children:Object(j.jsx)(y,{additionalClasses:"col-12",children:Object(j.jsxs)("form",{className:"row",onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsx)("label",{for:"movieInputSearch",className:"form-label",children:"Movie Title"}),Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("span",{class:"input-group-text",id:"inputSearch",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-search",viewBox:"0 0 16 16",children:Object(j.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})}),Object(j.jsx)(I,{inputId:"movieInputSearch",inputClassName:"form-control",inputAriaDescribedby:"movieInputSearch",inputAriaLabel:"Enter movie search",inputPlaceholder:"Enter movie name",inputOnChangeCb:t,inputRef:n})]})]})})})},S=(n(83),function(e){var t=e.movieCardAdditionalClasses,n=e.cardTitle,c=e.nomineeList,i=e.searchMovieList,s=e.buttonCb,a=e.buttonText,o=e.buttonClass,r=e.children,l=function(e,t){if(e){if(5===e.length)return!0;if(e.includes(t))return!0}};return Object(j.jsxs)(y,{additionalClasses:t,children:[Object(j.jsx)("h5",{className:"card-title",children:n}),Object(j.jsx)("ul",{children:i?"undefined"===i[0]?Object(j.jsx)("p",{children:"No movie found"}):i.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsxs)("p",{className:"movieTitle",children:[e.Title," (",e.Year,")",Object(j.jsx)("button",{className:o,disabled:l(c,"".concat(e.Title," (").concat(e.Year,")")),id:"".concat(e.Title," (").concat(e.Year,")"),onClick:s,children:a})]})},t)})):c?c.length?c.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsxs)("p",{className:"movieTitle",children:[e,Object(j.jsx)("button",{className:o,id:e,onClick:s,children:a})]})},t)})):Object(j.jsx)("p",{children:"No movie nominated yet"}):void 0}),r]})}),w=n(30),T=(n(84),function(){var e=Object(w.useSpring)({to:{opacity:1},from:{opacity:0},reset:!0,reverse:!1,delay:200}),t=Object(w.useSpring)({to:{opacity:1},from:{opacity:0},reset:!0,reverse:!1,delay:1e3});return Object(j.jsxs)("div",{children:[Object(j.jsx)(w.animated.h1,{className:"landingTitle",style:e,children:"Welcome to the shoppify awards!"}),Object(j.jsx)("br",{}),Object(j.jsx)(w.animated.p,{className:"landingText",style:t,children:"Scroll Down to start nominating movies"})]})}),D=function(){var e,t=indexedDB.open("awards",1);t.onupgradeneeded=function(e){e.target.result.createObjectStore("nominees",{autoIncrement:!0})};var n=Object(c.useState)(""),i=Object(l.a)(n,2),s=i[0],a=i[1],o=Object(c.useContext)(m),r=Object(l.a)(o,2),d=r[0],u=r[1],b=g(s,500),O=Object(c.useRef)();Object(c.useEffect)((function(){s&&b&&v.a.get("http://www.omdbapi.com/?i=tt3896198&apikey=580ff57a&s=".concat(b)).then((function(e){var t=e.data;return console.log(t.Search),t.Search?u({type:"ADDING_MOVIES",movies:t.Search}):u({type:"ADDING_MOVIES",movies:["undefined"]})}))}),[b]),Object(c.useEffect)((function(){t.onsuccess=function(){var e=t.result.transaction(["nominees"],"readwrite").objectStore("nominees").getAll();e.onsuccess=function(){console.log(e.result),u({type:"FETCHING_NOMINEES",nominees:e.result[0]})}}}),[]);return Object(j.jsx)("div",{children:Object(j.jsxs)(x.a,{pages:2,style:{top:"0",left:"0"},children:[Object(j.jsx)(x.b,{offset:0,speed:2.5,style:{display:"flex",justifyContent:"center",alignItems:"center"},className:"landing",children:Object(j.jsx)(T,{})}),Object(j.jsx)(x.b,{offset:1,speed:2,style:{backgroundColor:"#d3d3d3"}}),Object(j.jsx)(x.b,{offset:1,speed:.5,children:Object(j.jsxs)(C,{additionalClasses:"homeContainer",children:[Object(j.jsx)(E,{inputRef:O,inputOnChangeCb:function(){a(O.current.value),console.log(O.current.value)}}),Object(j.jsxs)(N,{additionalClasses:"movieCardRow",children:[Object(j.jsx)(S,{cardTitle:s?'Results for "'.concat(s,'"'):"Enter movie title to start search",searchMovieList:d.movies,buttonText:"Nominate",buttonCb:function(e){console.log(e.target),5!==d.nominees.length&&(console.log(e.target.id),u({type:"ADDING_NOMINEE",nominee:e.target.id}))},buttonClass:"btn btn-outline-secondary",nomineeList:d.nominees,movieCardAdditionalClasses:"movieList col-6"}),Object(j.jsx)("div",{className:"col-6",children:Object(j.jsx)(N,{children:Object(j.jsx)(S,{cardTitle:"Nominees",nomineeList:d.nominees,buttonText:"Remove",buttonCb:function(e){var t=d.nominees.indexOf(e.target.id);d.nominees.splice(t,1),u({type:"REMOVING_NOMINEE",nominees:d.nominees})},buttonClass:"btn btn-outline-secondary",movieCardAdditionalClasses:"col-12",children:Object(j.jsx)(N,{additionalClasses:"justify-content-end",children:Object(j.jsx)("button",{className:"col-3 btn-primary btn",disabled:!(null===(e=d.nominees)||void 0===e?void 0:e.length),onClick:function(){var e=t.result.transaction(["nominees"],"readwrite").objectStore("nominees"),n=e.getAll();n.onsuccess=function(){return n.result.length>0&&e.clear(),e.add(d.nominees)},console.log(d.nominees)},children:"Save"})})})})})]})]})})]})})};var M=function(){return Object(j.jsx)(o.a,{children:Object(j.jsx)(f,{children:Object(j.jsx)(r.a,{exact:!0,path:"/",component:D})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),A()}},[[90,1,2]]]);
//# sourceMappingURL=main.f39a25b5.chunk.js.map