(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"7ac9":function(t,e,n){"use strict";var a=n("970b"),i=n.n(a),c=n("5bc3"),r=n.n(c),s=n("b2f5"),o=n.n(s),l=n("6bfe"),u=function(){function t(e){i()(this,t);var n=l["a"].pObject(e.RocketChatWebclient);o.a.isEmpty(n)||(this.chatUrl=n.ChatUrl,this.adminUsername=n.AdminUsername)}return r()(t,[{key:"saveRocketChatWebclientSettings",value:function(t){var e=t.chatUrl,n=t.adminUsername;t.adminPassword;this.chatUrl=e,this.adminUsername=n}}]),t}(),d=null;e["a"]={init:function(t){d=new u(t)},saveRocketChatWebclientSettings:function(t){d.saveRocketChatWebclientSettings(t)},getRocketChatWebclientSettings:function(){var t,e;return{chatUrl:null===(t=d)||void 0===t?void 0:t.chatUrl,adminUsername:null===(e=d)||void 0===e?void 0:e.adminUsername}}}},fb4f:function(t,e,n){"use strict";n.r(e);n("c7fe"),n("3119"),n("8da0"),n("b5bb"),n("a2b7");var a=n("7ac9");e["default"]={moduleName:"RocketChatWebclient",requiredModules:[],init:function(t){a["a"].init(t)},getAdminSystemTabs:function(){return[{tabName:"chat",title:"ROCKETCHATWEBCLIENT.ADMIN_SETTINGS_TAB_LABEL",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"06a6"))}}]},getAdminTenantTabs:function(){return[{tabName:"chat",paths:["id/:id/chat","search/:search/id/:id/chat","page/:page/id/:id/chat","search/:search/page/:page/id/:id/chat"],title:"ROCKETCHATWEBCLIENT.ADMIN_SETTINGS_TAB_LABEL",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"a00e"))}}]}}}}]);