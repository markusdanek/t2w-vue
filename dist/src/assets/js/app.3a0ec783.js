(function(e){function t(t){for(var i,r,s=t[0],l=t[1],c=t[2],u=0,b=[];u<s.length;u++)r=s[u],o[r]&&b.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(i=!1)}i&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},r={app:0},o={app:0},a=[];function s(e){return l.p+"src/assets/js/"+({"JobSingle~jobs":"JobSingle~jobs",JobSingle:"JobSingle",jobs:"jobs",bewerber:"bewerber",impressum:"impressum",jobAdd:"jobAdd",jobEdit:"jobEdit",jobList:"jobList",kontakt:"kontakt",login:"login",ueber:"ueber",unternehmen:"unternehmen"}[e]||e)+"."+{"JobSingle~jobs":"f11a1c57",JobSingle:"3b8a770a",jobs:"5e467da1",bewerber:"e94382d9",impressum:"155aa4ec",jobAdd:"1d6e8188",jobEdit:"b8b837c3",jobList:"bac94017",kontakt:"3fe751d7",login:"00501141",ueber:"fe1ffdd0",unternehmen:"339e92df"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"JobSingle~jobs":1,JobSingle:1,jobs:1,bewerber:1,impressum:1,jobAdd:1,jobEdit:1,jobList:1,kontakt:1,login:1,ueber:1,unternehmen:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var i="src/assets/css/"+({"JobSingle~jobs":"JobSingle~jobs",JobSingle:"JobSingle",jobs:"jobs",bewerber:"bewerber",impressum:"impressum",jobAdd:"jobAdd",jobEdit:"jobEdit",jobList:"jobList",kontakt:"kontakt",login:"login",ueber:"ueber",unternehmen:"unternehmen"}[e]||e)+"."+{"JobSingle~jobs":"fbf7e032",JobSingle:"e04ce197",jobs:"ad002381",bewerber:"75ebf6e2",impressum:"695cf223",jobAdd:"f78d77b0",jobEdit:"f4cb6376",jobList:"d15dcab2",kontakt:"76fea904",login:"45c3e2b8",ueber:"bc10f085",unternehmen:"bcff6a60"}[e]+".css",r=l.p+i,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var s=o[a],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===i||c===r))return t()}var u=document.getElementsByTagName("style");for(a=0;a<u.length;a++){s=u[a],c=s.getAttribute("data-href");if(c===i||c===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var i=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.request=i,n(o)},b.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(b)}).then(function(){r[e]=0}));var i=o[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise(function(t,n){i=o[e]=[t,n]});t.push(i[2]=a);var c,u=document.getElementsByTagName("head")[0],b=document.createElement("script");b.charset="utf-8",b.timeout=120,l.nc&&b.setAttribute("nonce",l.nc),b.src=s(e),c=function(t){b.onerror=b.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+i+": "+r+")");a.type=i,a.request=r,n[1](a)}o[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:b})},12e4);b.onerror=b.onload=c,u.appendChild(b)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var b=0;b<c.length;b++)t(c[b]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05d6":function(e,t,n){"use strict";var i=n("eef0"),r=n.n(i);r.a},"0712":function(e,t){e.exports={methods:{shuffleArray:function(e){var t,n,i=e.length;while(0!==i)n=Math.floor(Math.random()*i),i-=1,t=e[i],e[i]=e[n],e[n]=t;return e},retrieveJobs:function(){var e=this;this.loading=!0,this.$http.get("https://t2w-api.herokuapp.com/jobs/").then(function(t){e.jobs=t.data},function(e){console.log("Error",e)}).then(function(t){e.loading=!1})},retrieveJobsRandom:function(){var e=this;this.loading=!0,this.$http.get("https://t2w-api.herokuapp.com/jobs/").then(function(t){e.jobs=t.data,e.jobs=e.shuffleArray(e.jobs)},function(e){console.log("Error",e)}).then(function(t){e.loading=!1})},retrieveJobSingle:function(){var e=this;this.loading=!0,this.$http.get("https://t2w-api.herokuapp.com/jobs/"+this.$route.params.id).then(function(t){e.job=t.data,e.responsibility=t.data.responsibility,e.qualifications=t.data.qualifications,e.maxSalary=t.data.maxSalary,e.minSalary=t.data.minSalary,""==e.maxSalary?e.maxSalary="Keine Angabe":e.maxSalary=t.data.maxSalary,""==e.minSalary?e.minSalary="Laut KV":e.minSalary=t.data.minSalary},function(e){console.log("Error",e)})},checkEmptyFields:function(){void 0==this.job.referenceId&&(this.job.referenceId=""),void 0==this.job.subText&&(this.job.subText=""),void 0==this.job.minSalary&&(this.job.minSalary=""),void 0==this.job.maxSalary&&(this.job.maxSalary=""),void 0==this.job.salaryText&&(this.job.salaryText=""),void 0==this.job.salary&&(this.job.salary=""),void 0==this.job.area&&(this.job.area=""),void 0==this.job.hours&&(this.job.hours=""),void 0==this.job.xmlOnline&&(this.job.xmlOnline=""),void 0==this.job.subTitle&&(this.job.subTitle=""),void 0==this.job.title&&(this.job.title=""),void 0==this.job.introText&&(this.job.introText=""),void 0==this.job.moreInfoText&&(this.job.moreInfoText=""),void 0==this.job.email&&(this.job.email=""),void 0==this.job.contact&&(this.job.contact=""),void 0==this.job.expectText&&(this.job.expectText=""),void 0==this.job.qualifications&&(this.job.qualifications=""),void 0==this.job.responsibility&&(this.job.responsibility="")}}}},"111d":function(e,t,n){},18:function(e,t){},"19c0":function(e,t,n){},2856:function(e,t,n){},"2ad5":function(e,t,n){},3868:function(e,t,n){e.exports=n.p+"src/assets/img/payroll-icon.819671fa.svg"},"4fe6":function(e,t,n){},"526b":function(e,t,n){e.exports=n.p+"src/assets/img/personalleasing-icon.7c2d598f.svg"},"53d7":function(e,t,n){"use strict";var i=n("111d"),r=n.n(i);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("AppHeader"),n("router-view"),n("AppFooter"),n("cookie-message")],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{toggleable:"md",fixed:"top",id:"t2w-nav"}},[n("b-container",[n("b-navbar-toggle",{staticClass:"ml-auto",attrs:{target:"nav_collapse"}}),n("b-navbar-brand",{attrs:{href:"/"}},[n("router-link",{attrs:{to:"/"}},[e._v(" ")])],1),n("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",[n("router-link",{attrs:{to:"/unternehmen"}},[e._v("Für Unternehmen")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/bewerber"}},[e._v("Für Bewerber")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/ueber"}},[e._v("Über Uns")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/jobs"}},[e._v("Jobs")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/kontakt"}},[e._v("Kontakt")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/backend/list"}},[e._v("Backend")])],1)],1)],1)],1)],1)},s=[],l={name:"app-header",data:function(){return{scrollPosition:null}},mounted:function(){window.addEventListener("scroll",this.updateScroll)},created:function(){},methods:{updateScroll:function(){var e=document.getElementById("t2w-nav");this.scrollPosition=window.scrollY,this.scrollPosition>=62?e.classList.add("active"):e.classList.remove("active")}}},c=l,u=(n("822a"),n("2877")),b=Object(u["a"])(c,a,s,!1,null,"20661702",null);b.options.__file="Header.vue";var d=b.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"footer"},[n("div",{staticClass:"content"},[n("b-container",[n("b-row",[n("b-col",[n("p",{staticClass:"title"},[e._v("\n              Navigation\n            ")]),n("ul",{staticClass:"links"},[n("li",[n("router-link",{attrs:{to:"/unternehmen"}},[e._v("Für Unternehmen")])],1),n("li",[n("router-link",{attrs:{to:"/bewerber"}},[e._v("Für Bewerber")])],1),n("li",[n("router-link",{attrs:{to:"/ueber"}},[e._v("Über Uns")])],1),n("li",[n("router-link",{attrs:{to:"/jobs"}},[e._v("Jobs")])],1),n("li",[n("router-link",{attrs:{to:"/kontakt"}},[e._v("Kontakt")])],1),n("li",[n("router-link",{attrs:{to:"/impressum"}},[e._v("Impressum")])],1),n("li",[n("router-link",{attrs:{to:"/backend/login"}},[e._v("Login")])],1)])]),n("b-col",[n("p",{staticClass:"title"},[e._v("\n              Kontakt\n            ")]),n("ul",{staticClass:"contact"},[n("li",[e._v("team"),n("span",{staticClass:"two"},[e._v("2")]),e._v("work Arbeitskräfteüberlassung GmbH")]),n("li",[e._v("Mariahilfer Straße 136")]),n("li",[e._v("1150 Wien, Österreich")]),n("li",[e._v("Tel +43 (0)1/892 1 892, Fax -14")]),n("li",[n("a",{attrs:{href:"mailto:office@team2work.at"}},[e._v("E-Mail: office@team2work.at")])])])])],1),n("b-row",[n("b-col",{staticClass:"copy"},[n("b-col",[n("p",[e._v("\n              © "+e._s(e.year)+" "),n("strong",[e._v("team"),n("span",{staticClass:"two"},[e._v("2")]),e._v("work Arbeitskräfteüberlassung GmbH")]),e._v(" - Alle Rechte vorbehalten\n            ")])])],1)],1)],1)],1)])])},h=[],f={name:"app-footer",computed:{month:function(){return this.twoDigits((new Date).getUTCMonth()+1)},year:function(){return(new Date).getUTCFullYear()}},mounted:function(){this.checkAuth()},methods:{checkAuth:function(){localStorage.getItem("profile")?this.authenticated=!0:this.authenticated=!1}}},p=f,v=(n("53d7"),Object(u["a"])(p,m,h,!1,null,null,null));v.options.__file="Footer.vue";var g=v.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isOpen?n("div",{staticClass:"cookie",class:e.containerPosition},[n("b-container",[n("b-row",[n("b-col",{attrs:{cols:"10"}},[n("div",{staticClass:"cookie__content"},[e._t("message",[e._v("\n          Wir verwenden Cookies, um Ihnen den bestmöglichen Service zu gewährleisten.\n          Durch die Nutzung unserer Website, sind Sie mit der Cookie-Nutzung einverstanden."),n("br"),e._v("\n          Weiterführende Information finden Sie "),n("a",{attrs:{href:"https://publications.europa.eu/de/cookies-notice",target:"_blank"}},[e._v("hier")]),e._v(".\n        ")])],2)]),n("b-col",{attrs:{cols:"2"}},[n("div",{staticClass:"cookie__buttons"},[e.buttonLink?n("a",{class:e.buttonClass,attrs:{href:e.buttonLink}},[e._v(e._s(e.buttonLinkText))]):e._e(),n("div",{staticClass:"btn",class:e.buttonClass,on:{click:e.accept}},[e._v(e._s(e.buttonText))])])])],1)],1)],1):e._e()},j=[],k={props:{buttonText:{type:String,default:"Verstanden"},buttonLink:{type:String},buttonLinkText:{type:String,default:"Mehr Information"},message:{type:String,default:"Default text"},position:{type:String,default:"bottom"},buttonClass:{type:String,default:"cookie__button"}},data:function(){return{isOpen:!1}},computed:{containerPosition:function(){return"cookie--".concat(this.position)}},created:function(){!0===!this.getVisited()&&(this.isOpen=!0)},methods:{setVisited:function(){localStorage.setItem("cookie:accepted",!0)},getVisited:function(){return localStorage.getItem("cookie:accepted")},accept:function(){this.setVisited(),this.isOpen=!1,this.$emit("accept")}}},S=k,w=(n("c611"),Object(u["a"])(S,_,j,!1,null,null,null));w.options.__file="CookieMessage.vue";var y=w.exports,x={name:"app",components:{AppHeader:d,AppFooter:g,CookieMessage:y},methods:{checkTimestampAge:function(){var e=31104e6,t=new Date(localStorage["timestamp"]),n=new Date;n-t>e&&(localStorage.removeItem("id_token"),localStorage.removeItem("profile"),this.authenticated=!1)}},mounted:function(){this.checkTimestampAge()}},C=x,A=(n("5c0b"),Object(u["a"])(C,r,o,!1,null,null,null));A.options.__file="App.vue";var E=A.exports,J=n("8c4f"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HeroLarge"),n("JobList"),n("Testimonial"),n("Service")],1)},L=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("b-jumbotron",{attrs:{fluid:""}},[n("h1",{staticClass:"startpage"},[n("span",{staticClass:"first"},[e._v(e._s(e.firstWord))]),n("span",{staticClass:"second"},[e._v(e._s(e.secondWord))]),n("span",{staticClass:"third"},[e._v(e._s(e.thirdWord))])]),n("h2",{staticClass:"startpage"},[e._v(e._s(e.startpage))])])],1)},O=[],I={name:"heroLarge",props:{firstWord:{type:String,default:"Überlassung, "},secondWord:{type:String,default:"Vermittlung "},thirdWord:{type:String,default:"und Beratung"},startpage:{type:String,default:"Egal, ob Sie qualifizierte Mitarbeiter suchen oder eine neue Arbeitsstelle finden wollen: Wir kennen die Menschen und Unternehmen, die sich erfolgreich ergänzen. Für technische, kaufmännische und gewerbliche Personallösungen."}}},M=I,z=(n("cd71"),Object(u["a"])(M,P,O,!1,null,"68a88eba",null));z.options.__file="HeroLarge.vue";var $=z.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"jobs-overview"},[n("b-container",[n("h2",{staticClass:"title"},[e._v(e._s(e.title))]),n("b-row",[n("b-col",[n("div",{attrs:{id:"job-search"}},[n("autocomplete",{attrs:{source:this.jobs,resultsDisplay:"title",placeholder:"Suchen Sie hier nach allen verfügbaren Stellenanzeigen",inputClass:"form-control"},on:{selected:e.forwardJob}})],1)])],1),n("b-row",e._l(e.limitedJobs,function(t){return n("b-col",{key:t.id,attrs:{cols:"12",md:"6"}},[n("b-button",{staticClass:"job-button"},[n("router-link",{attrs:{to:{name:"JobSingle",params:{id:t._id}}}},[e._v(e._s(t.title)+"\n              "),n("icon",{attrs:{name:"angle-right"}})],1)],1)],1)})),n("b-row",[n("b-col",[n("b-button",{staticClass:"btn-more-jobs float-right"},[n("router-link",{attrs:{to:"/jobs"}},[e._v("\n              Alle Stellenanzeigen   "),n("icon",{attrs:{name:"angle-right"}})],1)],1)],1)],1)],1)],1)])},F=[],D=n("0712"),W=n.n(D),H=n("8f81"),U=n.n(H),N={name:"job-list-small",components:{Autocomplete:U.a},props:{title:{type:String,default:"Die aktuellsten Stellenanzeigen für Sie"}},data:function(){return{jobs:[],loading:!1,limitNumber:4,jobSearch:[]}},filters:{limit:function(e,t){return e.slice(0,t)}},computed:{limitedJobs:function(){return this.jobs.slice(0,this.limitNumber)}},methods:{forwardJob:function(e){this.$router.push({name:"JobSingle",params:{id:e.selectedObject._id}})}},created:function(){this.retrieveJobsRandom()},mixins:[W.a]},V=N,q=(n("5d36"),Object(u["a"])(V,B,F,!1,null,null,null));q.options.__file="JobListSmall.vue";var K=q.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"testimonial"},[n("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"testimonial",indicators:"",background:"#4b4b4b",interval:4e3},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[n("b-carousel-slide",{attrs:{"img-blank":""}},[n("p",[e._v("\n          Nach mehr als 1jähriger Beschäftigung über team"),n("span",{staticClass:"two"},[e._v("2")]),e._v("work wurde ich übernommen.\n          Ich bedanke mich für die gute Zusammenarbeit, die korrekte und pünktliche Abwicklung der Personalabrechnung,\n          und dass ich jederzeit eine Ansprechperson hatte. "),n("br"),n("br"),e._v(" Ich kann nur Positives über diese\n        Personalbereitstellungsfirma berichten!\n        ")]),n("small",[e._v("Jürgen H., 25 Jahre, EAT")])]),n("b-carousel-slide",{attrs:{"img-blank":""}},[n("p",[e._v("\n          Dank der tollen Betreuung und Beratung seitens team"),n("span",{staticClass:"two"},[e._v("2")]),e._v("work habe ich nach\n          1jähriger Auszeit wieder eine Anstellung in meinem gewünschten Arbeitsumfeld gefunden. Durch die\n          offene Kommunikation seitens des Teams von team"),n("span",{staticClass:"two"},[e._v("2")]),e._v("work hatte ich von Anfang\n          an ein gutes Gefühl. Während des Vorstellungsgespräches hatte ich nicht das Gefühl, nur eine unter\n          vielen zu sein und die Beraterin ging auf meine persönliche Situation ein.\n        ")]),n("small",[e._v("Katrin D., BSc, 27 Jahre, Supply Chain")])])],1)],1)])},R=[],Y={name:"testimonial",data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},Q=Y,Z=(n("d4fb"),Object(u["a"])(Q,G,R,!1,null,null,null));Z.options.__file="Testimonial.vue";var X=Z.exports,ee=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"service-overview"},[i("b-container",[i("b-col",[i("h2",{staticClass:"title"},[e._v("\n        Unser Service für Ihr Unternehmen\n      ")]),i("div",{staticClass:"text"},[i("b-row",[i("b-col",{attrs:{cols:"",sm:"12",md:"3"}},[i("img",{staticClass:"field-icons",attrs:{src:n("f8d5")}}),i("h3",[i("router-link",{attrs:{to:"/unternehmen#personalberatung"}},[e._v("\n                Personalberatung und -vermittlung"),i("br")])],1),i("p",[i("br"),e._v(" Dauerhafter Erfolg entsteht, indem die passenden Menschen am richtigen Ort zusammenarbeiten. Wenn Sie geeignete technische, gewerbliche oder kaufmännische Fach- oder Hilfskräfte für Ihr Unternehmen suchen, unterstützen wir Sie dabei.\n            ")])]),i("b-col",{attrs:{cols:"",sm:"12",md:"3"}},[i("img",{staticClass:"field-icons",attrs:{src:n("526b")}}),i("h3",[i("router-link",{attrs:{to:"/unternehmen#personalleasing"}},[e._v("\n                Personalleasing"),i("br")])],1),i("p",[i("br"),i("br"),e._v(" Personalengpässe treten manchmal schneller auf als erwartet. team\n              "),i("span",{staticClass:"two"},[e._v("2")]),e._v("work hilft Ihnen dabei, den Personalstand schnell und unkompliziert mit Leasingmitarbeitern auszugleichen.\n            ")])]),i("b-col",{attrs:{cols:"",sm:"12",md:"3"}},[i("img",{staticClass:"field-icons",attrs:{src:n("7705")}}),i("h3",[i("router-link",{attrs:{to:"/unternehmen#testenunduebernehmen"}},[e._v("\n                Testen & Übernehmen\n              ")])],1),i("p",[i("br"),i("br"),e._v(" Sie möchten sich länger von den Qualifikationen eines neuen Mitarbeiters im Einsatz überzeugen, bevor Sie sich für eine Übernahme in Ihr Stammpersonal entscheiden? Mit „Testen & Übernehmen“ bieten wir Ihnen diese Möglichkeit.\n            ")])]),i("b-col",{attrs:{cols:"",sm:"12",md:"3"}},[i("img",{staticClass:"field-icons",attrs:{src:n("3868")}}),i("h3",[i("router-link",{attrs:{to:"/unternehmen#payroll"}},[e._v("\n                Payroll"),i("br")])],1),i("p",[i("br"),i("br"),e._v(" team\n              "),i("span",{staticClass:"two"},[e._v("2")]),e._v("work entlastet Ihre Personalabteilung und übernimmt die gesamte Personaladministration für outgesourcte Mitarbeiter.\n            ")])])],1)],1)])],1)],1)])},te=[],ne={name:"service"},ie=ne,re=(n("c4d4"),Object(u["a"])(ie,ee,te,!1,null,"bdf11226",null));re.options.__file="Service.vue";var oe=re.exports,ae={name:"home",components:{HeroLarge:$,JobList:K,Testimonial:X,Service:oe},metaInfo:{title:"team2work",titleTemplate:"%s » Startseite",meta:[{property:"og:title",content:"team2work",template:function(e){return"".concat(e," - Für Startseite")},vmid:"og:title"},{property:"og:site_name",content:"team2work",template:function(e){return"".concat(e," - Für Startseite")},vmid:"og:site_name"},{property:"og:type",content:"website"},{property:"og:url",content:"https://team2work.at/"}]}},se=ae,le=(n("05d6"),Object(u["a"])(se,T,L,!1,null,"255d996c",null));le.options.__file="Home.vue";var ce=le.exports;i["a"].use(J["a"]);var ue=new J["a"]({routes:[{path:"/",name:"home",component:ce},{path:"/unternehmen",name:"unternehmen",component:function(){return n.e("unternehmen").then(n.bind(null,"5898"))}},{path:"/bewerber",name:"bewerber",component:function(){return n.e("bewerber").then(n.bind(null,"d2e2"))}},{path:"/ueber",name:"ueber",component:function(){return n.e("ueber").then(n.bind(null,"ea20"))}},{path:"/kontakt",name:"kontakt",component:function(){return n.e("kontakt").then(n.bind(null,"8fad"))}},{path:"/impressum",name:"impressum",component:function(){return n.e("impressum").then(n.bind(null,"761a"))}},{path:"/jobs",name:"jobs",component:function(){return Promise.all([n.e("JobSingle~jobs"),n.e("jobs")]).then(n.bind(null,"ee68"))}},{path:"/jobs/:id",name:"JobSingle",component:function(){return Promise.all([n.e("JobSingle~jobs"),n.e("JobSingle")]).then(n.bind(null,"f543"))}},{path:"/backend/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"294f"))}},{path:"/backend/list",name:"jobList",component:function(){return n.e("jobList").then(n.bind(null,"6cf6"))}},{path:"/backend/edit/:id",name:"jobEdit",component:function(){return n.e("jobEdit").then(n.bind(null,"2037"))}},{path:"/backend/add",name:"jobAdd",component:function(){return n.e("jobAdd").then(n.bind(null,"c4fc"))}},{path:"*",redirect:"/"}],scrollBehavior:function(e,t,n){return n||{x:0,y:0}}}),be=n("2f62");i["a"].use(be["a"]);var de=new be["a"].Store({state:{},mutations:{},actions:{}}),me=n("28dd"),he=n("0874"),fe=n("386f"),pe=n.n(fe),ve=n("0284"),ge=n.n(ve),_e=n("9f7b"),je=n("0a89"),ke=n.n(je);n("f9e3"),n("2dd8"),n("d06d");i["a"].use(ke.a),i["a"].config.productionTip=!1,i["a"].use(ge.a,{id:"UA-54514383-4",router:ue}),i["a"].use(pe.a,{router:ue}),i["a"].use(me["a"]),i["a"].use(_e["a"]),i["a"].component("icon",he["a"]),i["a"].http.interceptors.push(function(e,t){var n=this;t(function(e){401===e.status&&n.$dispatch("logout")})}),new i["a"]({router:ue,store:de,render:function(e){return e(E)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("2856"),r=n.n(i);r.a},"5d36":function(e,t,n){"use strict";var i=n("4fe6"),r=n.n(i);r.a},"60f9":function(e,t,n){},7705:function(e,t,n){e.exports=n.p+"src/assets/img/testen-uebernehmen-icon.b2193051.svg"},"822a":function(e,t,n){"use strict";var i=n("889b"),r=n.n(i);r.a},"889b":function(e,t,n){},b327:function(e,t,n){},c4d4:function(e,t,n){"use strict";var i=n("b327"),r=n.n(i);r.a},c611:function(e,t,n){"use strict";var i=n("2ad5"),r=n.n(i);r.a},cd71:function(e,t,n){"use strict";var i=n("19c0"),r=n.n(i);r.a},d4fb:function(e,t,n){"use strict";var i=n("60f9"),r=n.n(i);r.a},eef0:function(e,t,n){},f8d5:function(e,t,n){e.exports=n.p+"src/assets/img/personalberatung-icon.37bf3d4c.svg"}});
//# sourceMappingURL=app.3a0ec783.js.map