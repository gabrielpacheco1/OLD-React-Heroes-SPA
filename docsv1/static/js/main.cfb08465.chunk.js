(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{46:function(e,a,r){"use strict";r.r(a);var c=r(1),t=r(20),s=r.n(t),n=r(4),i=r(2),l=r(0),o=function(e){var a=e.history;return Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)("h1",{children:"Login Screen"}),Object(l.jsx)("hr",{}),Object(l.jsx)("button",{className:"btn btn-dark",onClick:function(){a.push("/")},children:"Login"})]})},h=function(){return Object(l.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(l.jsx)(n.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(l.jsx)("div",{className:"navbar-collapse",children:Object(l.jsxs)("div",{className:"navbar-nav",children:[Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(l.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(l.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(l.jsx)(n.c,{activeClassName:"active",className:"nav-item nav-link text-white bg-primary",exact:!0,to:"/login",children:"Logout"})})})]})},d=r(8),m=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],j=function(e){var a=e.id,r=e.superhero,c=e.alter_ego,t=e.first_appearance,s=e.characters;return Object(l.jsx)("div",{className:"card ms-3 animate__animated animate__slideInUp mb-2",style:{maxWidth:540},children:Object(l.jsxs)("div",{className:"row no-gutters",children:[Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsx)("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"card-img",alt:r})}),Object(l.jsx)("div",{className:"col-md-8",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title text-center",children:r}),Object(l.jsxs)("p",{className:"card-text",children:[Object(l.jsx)("span",{className:"text-muted",children:"Alter ego "}),c]}),c!==s&&Object(l.jsxs)("p",{className:"card-text",children:[Object(l.jsx)("span",{className:"text-muted",children:"Personaje/s "}),s]}),Object(l.jsxs)("p",{className:"card-text",children:[Object(l.jsx)("span",{className:"text-muted",children:"1.\xaa aparici\xf3n "}),t]}),Object(l.jsx)(n.b,{to:"./hero/".concat(a),className:"btn btn-outline-dark btn-sm",children:"Ver m\xe1s..."})]})})]})})},b=function(e){var a=e.publisher,r=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return m.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(l.jsx)("div",{className:"card-columns",children:r.map((function(e){return Object(l.jsx)(j,Object(d.a)({},e),e.id)}))})},u=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Marvel Screen"}),Object(l.jsx)("hr",{}),Object(l.jsx)(b,{publisher:"Marvel Comics"})]})},p=function(e){var a=e.history,r=Object(i.h)().heroeId,t=Object(c.useMemo)((function(){return e=r,m.find((function(a){return a.id===e}));var e}),[r]),s=t.superhero,n=t.alter_ego,o=t.characters,h=t.first_appearance,d=t.publisher;if(!t)return Object(l.jsx)(i.a,{to:"/"});return Object(l.jsxs)("div",{className:"row mt-5",children:[Object(l.jsx)("div",{className:"col-4",children:Object(l.jsx)("img",{src:"../assets/heroes/".concat(r,".jpg"),className:"img-thumbnail animate__animated animate__fadeIn",alt:s,style:{maxHeight:520,backgroundColor:"#E5E5E5",borderColor:"gray"}})}),Object(l.jsxs)("div",{className:"col-8",children:[Object(l.jsx)("h2",{children:s}),Object(l.jsxs)("ul",{className:"list-group list-group-flush animate__animated animate__fadeInRight",children:[Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("span",{className:"text-muted",children:"Alter ego "}),n]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("span",{className:"text-muted",children:"Publisher "}),d]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("span",{className:"text-muted",children:"First appearance "}),h]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("span",{className:"text-muted",children:"Characters "}),o]})]}),Object(l.jsx)("button",{className:"btn btn-dark mt-4",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Return"})]})]})},x=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"DC Screen"}),Object(l.jsx)("hr",{}),Object(l.jsx)(b,{publisher:"DC Comics"})]})},v=r(12),O=r(22),C=r.n(O),f=r(11),g=function(e){var a=e.history,r=Object(i.g)(),t=C.a.parse(r.search).q,s=void 0===t?"":t,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(c.useState)(e),r=Object(v.a)(a,2),t=r[0],s=r[1];return[t,function(e){var a=e.target;s(Object(d.a)(Object(d.a)({},t),{},Object(f.a)({},a.name,a.value)))},function(){s(e)}]}({searchText:s}),o=Object(v.a)(n,3),h=o[0],b=o[1],u=(o[2],h.searchText),p=Object(c.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),m.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Search Screen"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row animate__animated animate__slideInUp",children:[Object(l.jsxs)("div",{className:"col-5",children:[Object(l.jsx)("h4",{children:"Search Form"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(u))},children:[Object(l.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"searchText",autoComplete:"off",value:u,onChange:b}),Object(l.jsx)("button",{type:"submit",className:"btn btn-dark btn-block mt-2",children:"Search"})]})]}),Object(l.jsxs)("div",{className:"col-7",children:[Object(l.jsx)("h4",{children:"Results"}),Object(l.jsx)("hr",{}),""===s&&Object(l.jsx)("div",{className:"alert alert-secondary text-center",children:"Search a hero"}),""!==s&&0===p.length&&Object(l.jsxs)("div",{className:"alert alert-danger text-center",children:['There is no heroes with "',s,'"']}),p.map((function(e){return Object(l.jsx)(j,Object(d.a)(Object(d.a)({},e),{},{className:"mb-1"}),e.id)}))]})]})]})},_=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{}),Object(l.jsx)("div",{className:"container mt-4",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/marvel",component:u}),Object(l.jsx)(i.b,{exact:!0,path:"/hero/:heroeId",component:p}),Object(l.jsx)(i.b,{exact:!0,path:"/dc",component:x}),Object(l.jsx)(i.b,{exact:!0,path:"/search",component:g}),Object(l.jsx)(i.a,{to:"/marvel"})]})})]})},N=function(){return Object(l.jsx)(n.a,{children:Object(l.jsx)("div",{children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/login",component:o}),Object(l.jsx)(i.b,{path:"/",component:_})]})})})},k=function(){return Object(l.jsx)(N,{})};s.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.cfb08465.chunk.js.map