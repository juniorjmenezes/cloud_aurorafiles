(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"1e23":function(n,i,t){"use strict";var e=t("970b"),a=t.n(e),o=t("5bc3"),r=t.n(o),g=t("b2f5"),s=t.n(g),b=t("6bfe"),d=function(){function n(i){a()(this,n);var t=b["a"].pObject(i.BrandingWebclient);s.a.isEmpty(t)||(this.loginLogo=t.LoginLogo,this.tabsbarLogo=t.TabsbarLogo)}return r()(n,[{key:"saveBrandingsSettings",value:function(n){var i=n.loginLogo,t=n.tabsbarLogo;this.loginLogo=i,this.tabsbarLogo=t}}]),n}(),u=null;i["a"]={init:function(n){u=new d(n)},saveBrandingsSettings:function(n){u.saveBrandingsSettings(n)},getBrandingsSettings:function(){var n,i;return{loginLogo:null===(n=u)||void 0===n?void 0:n.loginLogo,tabsbarLogo:null===(i=u)||void 0===i?void 0:i.tabsbarLogo}}}},2681:function(n,i,t){"use strict";t.r(i);t("c7fe"),t("3119"),t("8da0"),t("b5bb"),t("a2b7");var e=t("1e23");i["default"]={moduleName:"BrandingWebclient",requiredModules:[],init:function(n){e["a"].init(n)},getAdminSystemTabs:function(){return[{tabName:"branding",title:"BRANDINGWEBCLIENT.ADMIN_SETTINGS_TAB_LABEL",component:function(){return Promise.all([t.e(0),t.e(24)]).then(t.bind(null,"2842"))}}]},getAdminTenantTabs:function(){return[{tabName:"branding",paths:["id/:id/branding","search/:search/id/:id/branding","page/:page/id/:id/branding","search/:search/page/:page/id/:id/branding"],title:"BRANDINGWEBCLIENT.ADMIN_SETTINGS_TAB_LABEL",component:function(){return Promise.all([t.e(0),t.e(25)]).then(t.bind(null,"6804"))}}]}}}}]);