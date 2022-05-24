(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{4757:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-scroll-area",{staticClass:"full-height full-width"},[i("div",{staticClass:"q-pa-lg"},[i("div",{staticClass:"row q-mb-md"},[i("div",{staticClass:"col text-h5"},[t._v(t._s(t.$t("FILESWEBCLIENT.HEADING_SETTINGS_TAB_PERSONAL")))])]),i("q-card",{staticClass:"card-edit-settings",attrs:{flat:"",bordered:""}},[i("q-card-section",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-2"},[i("div",{staticClass:"q-my-sm"},[t._v("\n              "+t._s(t.$t("FILESWEBCLIENT.LABEL_USER_SPACE_LIMIT"))+"\n            ")])]),i("div",{staticClass:"col-4"},[i("div",{staticClass:"row"},[i("q-input",{staticClass:"col-4",attrs:{outlined:"",dense:"","bg-color":"white"},model:{value:t.userSpaceLimitMb,callback:function(e){t.userSpaceLimitMb=e},expression:"userSpaceLimitMb"}}),i("div",{directives:[{name:"t",rawName:"v-t",value:"COREWEBCLIENT.LABEL_MEGABYTES",expression:"'COREWEBCLIENT.LABEL_MEGABYTES'"}],staticClass:"q-ma-sm col-1"})],1)])])])],1),i("div",{staticClass:"q-pt-md text-right"},[i("q-btn",{staticClass:"q-px-sm",attrs:{unelevated:"","no-caps":"",dense:"",ripple:!1,color:"primary",label:t.$t("COREWEBCLIENT.ACTION_SAVE")},on:{click:t.updateSettingsForEntity}})],1)],1),i("q-inner-loading",{staticStyle:{"justify-content":"flex-start"},attrs:{showing:t.loading||t.saving}},[i("q-linear-progress",{attrs:{query:""}})],1)],1)},a=[],n=i("b2f5"),r=i.n(n),o=i("4245"),u=i("21ac"),l=i("6bfe"),d=i("e539"),c=i("11cb"),E={name:"FilesAdminSettingsPerUser",data:function(){return{user:null,userSpaceLimitMb:0,loading:!1,saving:!1}},watch:{$route:function(t,e){this.parseRoute()}},mounted:function(){this.parseRoute()},beforeRouteLeave:function(t,e,i){this.doBeforeRouteLeave(t,e,i)},methods:{parseRoute:function(){var t,e,i,s=l["a"].pPositiveInt(null===(t=this.$route)||void 0===t||null===(e=t.params)||void 0===e?void 0:e.id);(null===(i=this.user)||void 0===i?void 0:i.id)!==s&&(this.user={id:s},this.populate())},populate:function(){var t=this;this.loading=!0;var e=this.$store.getters["tenants/getCurrentTenantId"];c["a"].getUser(e,this.user.id).then((function(e){var i=e.user,s=e.userId;s===t.user.id&&(t.loading=!1,i&&r.a.isFunction(null===i||void 0===i?void 0:i.getData)?(t.user=i,t.userSpaceLimitMb=l["a"].pInt(i.getData("Files::UserSpaceLimitMb"))):t.$emit("no-user-found"))}))},hasChanges:function(){var t,e,i=r.a.isFunction(null===(t=this.user)||void 0===t?void 0:t.getData)?l["a"].pInt(null===(e=this.user)||void 0===e?void 0:e.getData("Files::UserSpaceLimitMb")):0;return this.userSpaceLimitMb!==i},revertChanges:function(){var t,e,i=r.a.isFunction(null===(t=this.user)||void 0===t?void 0:t.getData)?l["a"].pInt(null===(e=this.user)||void 0===e?void 0:e.getData("Files::UserSpaceLimitMb")):0;this.userSpaceLimitMb=i},updateSettingsForEntity:function(){var t,e=this;this.saving=!0;var i={EntityType:"User",EntityId:null===(t=this.user)||void 0===t?void 0:t.id,TenantId:this.user.tenantId,UserSpaceLimitMb:this.userSpaceLimitMb};d["a"].sendRequest({moduleName:"Files",methodName:"UpdateSettingsForEntity",parameters:i}).then((function(t){e.saving=!1,t?(c["a"].getUser(i.TenantId,i.EntityId).then((function(t){var s=t.user;s.updateData([{field:"Files::UserSpaceLimitMb",value:i.UserSpaceLimitMb}]),e.populate()})),u["a"].showReport(e.$t("COREWEBCLIENT.REPORT_SETTINGS_UPDATE_SUCCESS"))):u["a"].showError(e.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED"))}),(function(t){e.saving=!1,u["a"].showError(o["a"].getTextFromResponse(t,e.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED")))}))}}},p=E,v=i("2877"),h=i("4983"),S=i("f09f"),m=i("a370"),L=i("27f9"),C=i("9c40"),g=i("74f7"),I=i("6b1d"),f=i("eebe"),b=i.n(f),T=Object(v["a"])(p,s,a,!1,null,"401b166b",null);e["default"]=T.exports;b()(T,"components",{QScrollArea:h["a"],QCard:S["a"],QCardSection:m["a"],QInput:L["a"],QBtn:C["a"],QInnerLoading:g["a"],QLinearProgress:I["a"]})}}]);