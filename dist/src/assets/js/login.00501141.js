(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0cb9":function(t,e,o){},"294f":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("HeroSmall",{attrs:{title:"Login",template:"backend"}}),o("div",{staticClass:"wrapper"},[o("b-container",[o("b-row",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.authenticated,expression:"authenticated"}],staticClass:"loggedin"},[o("b-col",[o("div",{staticClass:"media"},[o("div",{staticClass:"media-left"},[o("img",{attrs:{src:this.getUserPicture(),alt:"userPicture",width:"150px;"}})]),o("div",{staticClass:"media-body"},[o("h2",{staticClass:"media-heading"},[t._v("Hallo "+t._s(this.getLoggedInUserName()))]),o("p",[t._v("Du bist bereits eingeloggt!")]),o("p",[t._v("Klicke hier um zur Job Verwaltung zu kommen:\n                  "),o("router-link",{attrs:{to:"/backend/list"}},[t._v("\n                    API Job Übersicht\n                  ")])],1),o("button",{staticClass:"btn-logout btn btn-xs",on:{click:function(e){t.logout()}}},[t._v("Abmelden")])])])])],1),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.authenticated,expression:"!authenticated"}],staticClass:"login"},[o("b-col",[o("h2",[t._v("Sie sind zur Zeit nicht angemeldet!")]),o("button",{staticClass:"btn-login btn btn-lg",on:{click:function(e){t.login()}}},[t._v("Login")])])],1)])],1)],1)],1)},a=[],i=(o("7f7f"),o("2b0e")),c=o("8f86");function r(){return!!localStorage.getItem("id_token")}var s={name:"login",data:function(){return{localStorage:localStorage,authenticated:!1,lock:new Auth0Lock("fjIMo36jLsTc4rYl6BOCIizBDK62hTZY","mrks.eu.auth0.com",{auth:{autoParseHash:!1,redirect:!1}})}},events:{logout:function(){this.logout()}},mounted:function(){var t=this;i["a"].nextTick(function(){t.authenticated=r(),t.lock.resumeAuth(window.location.hash,function(t,e){console.log(e)}),t.lock.on("authenticated",function(e){localStorage.setItem("id_token",e.idToken),localStorage.setItem("timestamp",new Date),t.lock.getUserInfo(e.accessToken,function(o,n){o||(localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("profile",JSON.stringify(n)),t.authenticated=!0)})}),t.lock.on("authorization_error",function(t){console.log(t)})})},methods:{login:function(){this.lock.show()},logout:function(){localStorage.removeItem("id_token"),localStorage.removeItem("profile"),localStorage.removeItem("timestamp"),this.authenticated=!1},getLoggedInUserName:function(){var t=JSON.parse(localStorage.getItem("profile"));return t?t.name:""},getUserPicture:function(){var t=JSON.parse(localStorage.getItem("profile"));return t?t.picture:""}},components:{HeroSmall:c["a"]},metaInfo:{title:"team2work",titleTemplate:"%s » Login",meta:[{property:"og:title",content:"team2work",template:function(t){return"".concat(t," - Login")},vmid:"og:title"},{property:"og:site_name",content:"team2work",template:function(t){return"".concat(t," - Login")},vmid:"og:site_name"},{property:"og:type",content:"website"},{property:"og:url",content:"https://team2work.at/#/backend/login"}]}},l=s,u=(o("9b8d"),o("2877")),m=Object(u["a"])(l,n,a,!1,null,"146a778c",null);m.options.__file="Login.vue";e["default"]=m.exports},"8f86":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("b-jumbotron",{class:t.template,attrs:{fluid:""}},[o("h1",{staticClass:"startpage"},[t._v(t._s(t.title))])])],1)},a=[],i={name:"hero-small",props:{title:{type:String,default:"Unser Angebot für Ihr Unternehmen"},template:{type:String}}},c=i,r=(o("f4c5"),o("2877")),s=Object(r["a"])(c,n,a,!1,null,"0adc0b80",null);s.options.__file="HeroSmall.vue";e["a"]=s.exports},"9b8d":function(t,e,o){"use strict";var n=o("0cb9"),a=o.n(n);a.a},c2c2:function(t,e,o){},f4c5:function(t,e,o){"use strict";var n=o("c2c2"),a=o.n(n);a.a}}]);
//# sourceMappingURL=login.00501141.js.map