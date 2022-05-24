(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{a498:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-scroll-area",{staticClass:"full-height full-width"},[a("div",{staticClass:"q-pa-lg"},[a("div",{staticClass:"row q-mb-md"},[a("div",{directives:[{name:"t",rawName:"v-t",value:"FILESWEBCLIENT.HEADING_SETTINGS_TAB_PERSONAL",expression:"'FILESWEBCLIENT.HEADING_SETTINGS_TAB_PERSONAL'"}],staticClass:"col text-h5"})]),a("q-card",{staticClass:"card-edit-settings",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"row q-mb-sm"},[a("div",{staticClass:"col-2"},[a("div",{staticClass:"q-my-sm"},[t._v("\n              "+t._s(t.$t("FILESWEBCLIENT.LABEL_TENANT_SPACE_LIMIT"))+"\n            ")])]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"row"},[a("q-input",{staticClass:"col-5",attrs:{outlined:"",dense:"","bg-color":"white"},model:{value:t.tenantSpaceLimitMb,callback:function(e){t.tenantSpaceLimitMb=e},expression:"tenantSpaceLimitMb"}}),a("div",{directives:[{name:"t",rawName:"v-t",value:"COREWEBCLIENT.LABEL_MEGABYTES",expression:"'COREWEBCLIENT.LABEL_MEGABYTES'"}],staticClass:"q-ma-sm col-1",staticStyle:{"margin-top":"10px"}})],1)])]),a("div",{staticClass:"row q-mb-sm"},[a("div",{staticClass:"col-2"}),a("div",{staticClass:"col-8 q-mb-sm"},[a("q-item-label",{attrs:{caption:""}},[t._v("\n              "+t._s(t.$t("FILESWEBCLIENT.HINT_TENANT_SPACE_LIMIT"))+"\n            ")])],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"},[a("div",{staticClass:"q-my-sm"},[t._v("\n              "+t._s(t.$t("FILESWEBCLIENT.LABEL_USER_SPACE_LIMIT"))+"\n            ")])]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"row"},[a("q-input",{staticClass:"col-5",attrs:{outlined:"",dense:"","bg-color":"white"},model:{value:t.userSpaceLimitMb,callback:function(e){t.userSpaceLimitMb=e},expression:"userSpaceLimitMb"}}),a("div",{directives:[{name:"t",rawName:"v-t",value:"COREWEBCLIENT.LABEL_MEGABYTES",expression:"'COREWEBCLIENT.LABEL_MEGABYTES'"}],staticClass:"q-ma-sm col-1",staticStyle:{"margin-top":"10px"}})],1)])]),a("div",{staticClass:"row q-mb-sm"},[a("div",{staticClass:"col-2"}),a("div",{staticClass:"col-8 q-my-sm"},[a("q-item-label",{attrs:{caption:""}},[t._v("\n              "+t._s(t.$t("FILESWEBCLIENT.HINT_USER_SPACE_LIMIT"))+"\n            ")])],1)]),a("div",{staticClass:"row"},[a("div",{directives:[{name:"t",rawName:"v-t",value:"FILESWEBCLIENT.LABEL_ALLOCATED_SPACE",expression:"'FILESWEBCLIENT.LABEL_ALLOCATED_SPACE'"}],staticClass:"col-2"}),a("div",{staticClass:"col-4"},[a("span",[t._v(t._s(t.allocatedSpace))]),a("span",{directives:[{name:"t",rawName:"v-t",value:"COREWEBCLIENT.LABEL_MEGABYTES",expression:"'COREWEBCLIENT.LABEL_MEGABYTES'"}],staticClass:"q-mx-sm q-pb-sm col-1"})])])])],1),a("div",{staticClass:"q-pt-md text-right"},[a("q-btn",{staticClass:"q-px-sm",attrs:{unelevated:"","no-caps":"",dense:"",ripple:!1,color:"primary",label:t.$t("COREWEBCLIENT.ACTION_SAVE")},on:{click:t.save}})],1)],1),a("q-inner-loading",{staticStyle:{"justify-content":"flex-start"},attrs:{showing:t.loading||t.saving}},[a("q-linear-progress",{attrs:{query:""}})],1)],1)},s=[],n=a("4245"),c=a("21ac"),l=a("6bfe"),o=a("e539"),r={name:"FilesAdminSettingsPerTenant",data:function(){return{saving:!1,loading:!1,tenantSpaceLimitMb:"",userSpaceLimitMb:"",allocatedSpace:"",tenant:null}},computed:{tenantId:function(){return this.$store.getters["tenants/getCurrentTenantId"]},allTenants:function(){return this.$store.getters["tenants/getTenants"]}},watch:{allTenants:function(){this.populate()}},beforeRouteLeave:function(t,e,a){this.doBeforeRouteLeave(t,e,a)},mounted:function(){this.loading=!1,this.saving=!1,this.populate()},methods:{hasChanges:function(){var t;if(this.loading)return!1;var e=l["a"].pObject(null===(t=this.tenant)||void 0===t?void 0:t.completeData),a=e["FilesWebclient::TenantSpaceLimitMb"],i=e["FilesWebclient::UserSpaceLimitMb"];return l["a"].pInt(this.tenantSpaceLimitMb)!==a||l["a"].pInt(this.userSpaceLimitMb)!==i},revertChanges:function(){var t,e=l["a"].pObject(null===(t=this.tenant)||void 0===t?void 0:t.completeData);this.tenantSpaceLimitMb=e["FilesWebclient::TenantSpaceLimitMb"],this.userSpaceLimitMb=e["FilesWebclient::UserSpaceLimitMb"]},populate:function(){var t=this.$store.getters["tenants/getTenant"](this.tenantId);t&&(void 0!==t.completeData["FilesWebclient::TenantSpaceLimitMb"]?(this.tenant=t,this.tenantSpaceLimitMb=t.completeData["FilesWebclient::TenantSpaceLimitMb"],this.userSpaceLimitMb=t.completeData["FilesWebclient::UserSpaceLimitMb"],this.allocatedSpace=t.completeData["FilesWebclient::AllocatedSpace"]):this.getSettings())},save:function(){var t=this;if(!this.saving){this.saving=!0;var e={EntityType:"Tenant",EntityId:this.tenantId,TenantId:this.tenantId,UserSpaceLimitMb:l["a"].pInt(this.userSpaceLimitMb),TenantSpaceLimitMb:l["a"].pInt(this.tenantSpaceLimitMb)};o["a"].sendRequest({moduleName:"Files",methodName:"UpdateSettingsForEntity",parameters:e}).then((function(a){if(t.saving=!1,a){var i={"FilesWebclient::UserSpaceLimitMb":e.UserSpaceLimitMb,"FilesWebclient::TenantSpaceLimitMb":e.TenantSpaceLimitMb,"FilesWebclient::AllocatedSpace":t.allocatedSpace};t.$store.commit("tenants/setTenantCompleteData",{id:t.tenantId,data:i}),c["a"].showReport(t.$t("COREWEBCLIENT.REPORT_SETTINGS_UPDATE_SUCCESS"))}else c["a"].showError(t.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED"))}),(function(e){t.saving=!1,c["a"].showError(n["a"].getTextFromResponse(e,t.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED")))}))}},getSettings:function(){var t=this;this.loading=!0;var e={EntityType:"Tenant",EntityId:this.tenantId};o["a"].sendRequest({moduleName:"Files",methodName:"GetSettingsForEntity",parameters:e}).then((function(e){if(t.loading=!1,e){var a={"FilesWebclient::UserSpaceLimitMb":l["a"].pInt(e.UserSpaceLimitMb),"FilesWebclient::TenantSpaceLimitMb":l["a"].pInt(e.TenantSpaceLimitMb),"FilesWebclient::AllocatedSpace":l["a"].pInt(e.AllocatedSpace)};t.$store.commit("tenants/setTenantCompleteData",{id:t.tenantId,data:a})}}),(function(t){c["a"].showError(n["a"].getTextFromResponse(t))}))}}},E=r,m=a("2877"),p=a("4983"),d=a("f09f"),L=a("a370"),S=a("27f9"),v=a("0170"),C=a("9c40"),T=a("74f7"),b=a("6b1d"),u=a("eebe"),I=a.n(u),h=Object(m["a"])(E,i,s,!1,null,"4263b167",null);e["default"]=h.exports;I()(h,"components",{QScrollArea:p["a"],QCard:d["a"],QCardSection:L["a"],QInput:S["a"],QItemLabel:v["a"],QBtn:C["a"],QInnerLoading:T["a"],QLinearProgress:b["a"]})}}]);