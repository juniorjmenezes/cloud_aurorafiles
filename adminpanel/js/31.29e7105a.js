(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{b494:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"full-height full-width"},[e("q-scroll-area",{staticClass:"full-height full-width"},[e("div",{staticClass:"q-pa-lg"},[e("div",{staticClass:"row q-mb-md"},[e("div",{staticClass:"col text-h5"},[t._v(t._s(t.$t("FILESWEBCLIENT.HEADING_BROWSER_TAB")))])]),e("q-card",{staticClass:"card-edit-settings",attrs:{flat:"",bordered:""}},[e("q-card-section",[e("div",{staticClass:"row q-mb-md"},[e("div",{staticClass:"col2"},[e("q-checkbox",{attrs:{dense:""},model:{value:t.enableUploadSizeLimit,callback:function(i){t.enableUploadSizeLimit=i},expression:"enableUploadSizeLimit"}},[e("q-item-label",[t._v(t._s(t.$t("FILESWEBCLIENT.LABEL_ENABLE_UPLOAD_SIZE_LIMIT")))])],1)],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-2"},[e("div",{staticClass:"q-my-sm"},[t._v(t._s(t.$t("FILESWEBCLIENT.LABEL_UPLOAD_SIZE_LIMIT")))])]),e("div",{staticClass:"col-3"},[e("div",{staticClass:"row"},[e("q-input",{staticClass:"col-4",attrs:{outlined:"",dense:"","bg-color":"white"},model:{value:t.uploadSizeLimitMb,callback:function(i){t.uploadSizeLimitMb=i},expression:"uploadSizeLimitMb"}}),e("div",{directives:[{name:"t",rawName:"v-t",value:"COREWEBCLIENT.LABEL_MEGABYTES",expression:"'COREWEBCLIENT.LABEL_MEGABYTES'"}],staticClass:"q-ma-sm col-1",staticStyle:{"margin-top":"10px"}})],1)])])])],1),e("div",{staticClass:"q-pt-md text-right"},[e("q-btn",{staticClass:"q-px-sm",attrs:{unelevated:"","no-caps":"",dense:"",ripple:!1,color:"primary",label:t.$t("COREWEBCLIENT.ACTION_SAVE")},on:{click:t.updateSettings}})],1)],1),e("div",{staticClass:"q-pa-lg"},[e("div",{staticClass:"row q-mb-md"},[e("div",{staticClass:"col text-h5"},[e("div",{staticClass:"q-my-sm"},[t._v(t._s(t.$t("FILESWEBCLIENT.HEADING_SETTINGS_TAB_PERSONAL")))])])]),e("q-card",{staticClass:"card-edit-settings",attrs:{flat:"",bordered:""}},[e("q-card-section",[e("div",{staticClass:"row q-mb-sm"},[e("div",{staticClass:"col-2"},[e("div",{staticClass:"q-my-sm"},[t._v("\n                "+t._s(t.$t("FILESWEBCLIENT.LABEL_TENANT_SPACE_LIMIT"))+"\n              ")])]),e("div",{staticClass:"col-3"},[e("div",{staticClass:"row"},[e("q-input",{staticClass:"col-4",attrs:{outlined:"",dense:"","bg-color":"white"},model:{value:t.tenantSpaceLimitMb,callback:function(i){t.tenantSpaceLimitMb=i},expression:"tenantSpaceLimitMb"}}),e("div",{directives:[{name:"t",rawName:"v-t",value:"COREWEBCLIENT.LABEL_MEGABYTES",expression:"'COREWEBCLIENT.LABEL_MEGABYTES'"}],staticClass:"q-ma-sm col-1",staticStyle:{"margin-top":"10px"}})],1)])]),e("div",{staticClass:"row q-mb-md"},[e("div",{staticClass:"col-2"}),e("div",{staticClass:"col-8"},[e("q-item-label",{attrs:{caption:""}},[t._v("\n               "+t._s(t.$t("FILESWEBCLIENT.HINT_TENANT_SPACE_LIMIT"))+"\n             ")])],1)]),e("div",{staticClass:"row q-mb-sm"},[e("div",{staticClass:"col-2"},[e("div",{staticClass:"q-my-sm"},[t._v("\n                "+t._s(t.$t("FILESWEBCLIENT.LABEL_USER_SPACE_LIMIT"))+"\n              ")])]),e("div",{staticClass:"col-3"},[e("div",{staticClass:"row"},[e("q-input",{staticClass:"col-4",attrs:{outlined:"",dense:"","bg-color":"white"},model:{value:t.userSpaceLimitMb,callback:function(i){t.userSpaceLimitMb=i},expression:"userSpaceLimitMb"}}),e("div",{directives:[{name:"t",rawName:"v-t",value:"COREWEBCLIENT.LABEL_MEGABYTES",expression:"'COREWEBCLIENT.LABEL_MEGABYTES'"}],staticClass:"q-ma-sm col-1",staticStyle:{"margin-top":"10px"}})],1)])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-2"}),e("div",{staticClass:"col-8"},[e("q-item-label",{attrs:{caption:""}},[t._v("\n                "+t._s(t.$t("FILESWEBCLIENT.HINT_USER_SPACE_LIMIT"))+"\n              ")])],1)])])],1),e("div",{staticClass:"q-pt-md text-right"},[e("q-btn",{staticClass:"q-px-sm",attrs:{unelevated:"","no-caps":"",dense:"",ripple:!1,color:"primary",label:t.$t("COREWEBCLIENT.ACTION_SAVE")},on:{click:t.updateSettingsForEntity}})],1)],1),t.isCorporateAvailable?e("div",{staticClass:"q-pa-lg"},[e("div",{staticClass:"row q-mb-md"},[e("div",{staticClass:"col text-h5"},[t._v(t._s(t.$t("FILESWEBCLIENT.HEADING_SETTINGS_TAB_CORPORATE")))])]),e("q-card",{staticClass:"card-edit-settings",attrs:{flat:"",bordered:""}},[e("q-card-section",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-2"},[e("div",{staticClass:"q-my-sm"},[t._v(t._s(t.$t("FILESWEBCLIENT.LABEL_CORPORATE_SPACE_LIMIT")))])]),e("div",{staticClass:"col-3"},[e("div",{staticClass:"row"},[e("q-input",{staticClass:"col-4",attrs:{outlined:"",dense:"","bg-color":"white"},model:{value:t.corporateSpaceLimitMb,callback:function(i){t.corporateSpaceLimitMb=i},expression:"corporateSpaceLimitMb"}}),e("div",{directives:[{name:"t",rawName:"v-t",value:"COREWEBCLIENT.LABEL_MEGABYTES",expression:"'COREWEBCLIENT.LABEL_MEGABYTES'"}],staticClass:"q-ma-sm col-1",staticStyle:{"margin-top":"10px"}})],1)])])])],1),e("div",{staticClass:"q-pt-md text-right"},[e("q-btn",{staticClass:"q-px-sm",attrs:{unelevated:"","no-caps":"",dense:"",ripple:!1,color:"primary",label:t.$t("COREWEBCLIENT.ACTION_SAVE")},on:{click:t.updateSettingsCorporate}})],1)],1):t._e()]),e("q-inner-loading",{staticStyle:{"justify-content":"flex-start"},attrs:{showing:t.savingFilesSetting||t.savingPerFilesSetting||t.savingCorFilesSetting}},[e("q-linear-progress",{attrs:{query:""}})],1)],1)},s=[],l=e("4245"),n=e("21ac"),o=e("e539"),r=e("0091"),c=e("be6f"),E={name:"FilesAdminSettingsSystemWide",data:function(){return{savingFilesSetting:!1,savingPerFilesSetting:!1,savingCorFilesSetting:!1,enableUploadSizeLimit:!1,uploadSizeLimitMb:0,userSpaceLimitMb:0,entityType:"",entityId:"",tenantSpaceLimitMb:0,corporateSpaceLimitMb:0,isCorporateAvailable:r["a"].isModuleAvailable("CorporateFiles")}},mounted:function(){this.populate()},beforeRouteLeave:function(t,i,e){this.doBeforeRouteLeave(t,i,e)},methods:{hasChanges:function(){var t=c["a"].getFilesSettings();return this.enableUploadSizeLimit!==t.enableUploadSizeLimit||this.uploadSizeLimitMb!==t.uploadSizeLimitMb||this.userSpaceLimitMb!==t.userSpaceLimitMb||this.tenantSpaceLimitMb!==t.tenantSpaceLimitMb||this.corporateSpaceLimitMb!==t.corporateSpaceLimitMb},revertChanges:function(){this.populate()},populate:function(){var t=c["a"].getFilesSettings();this.enableUploadSizeLimit=t.enableUploadSizeLimit,this.uploadSizeLimitMb=t.uploadSizeLimitMb?t.uploadSizeLimitMb:0,this.userSpaceLimitMb=t.userSpaceLimitMb?t.userSpaceLimitMb:0,this.tenantSpaceLimitMb=t.tenantSpaceLimitMb?t.tenantSpaceLimitMb:0,this.corporateSpaceLimitMb=t.corporateSpaceLimitMb?t.corporateSpaceLimitMb:0},updateSettings:function(){var t=this;if(!this.savingFilesSetting){this.savingFilesSetting=!0;var i={EnableUploadSizeLimit:this.enableUploadSizeLimit,UploadSizeLimitMb:this.uploadSizeLimitMb,UserSpaceLimitMb:this.userSpaceLimitMb};o["a"].sendRequest({moduleName:"Files",methodName:"UpdateSettings",parameters:i}).then((function(i){t.savingFilesSetting=!1,i?(c["a"].saveFilesSettings({enableUploadSizeLimit:t.enableUploadSizeLimit,uploadSizeLimitMb:t.uploadSizeLimitMb,userSpaceLimitMb:t.userSpaceLimitMb}),n["a"].showReport(t.$t("COREWEBCLIENT.REPORT_SETTINGS_UPDATE_SUCCESS"))):n["a"].showError(t.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED"))}),(function(i){t.savingFilesSetting=!1,n["a"].showError(l["a"].getTextFromResponse(i,t.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED")))}))}},updateSettingsForEntity:function(){var t=this;if(!this.savingPerFilesSetting){this.savingPerFilesSetting=!0;var i={EntityType:"",EntityId:0,UserSpaceLimitMb:this.userSpaceLimitMb,TenantSpaceLimitMb:this.tenantSpaceLimitMb};o["a"].sendRequest({moduleName:"Files",methodName:"UpdateSettingsForEntity",parameters:i}).then((function(i){t.savingPerFilesSetting=!1,i?(c["a"].savePersonalFilesSettings({userSpaceLimitMb:t.userSpaceLimitMb,tenantSpaceLimitMb:t.tenantSpaceLimitMb}),n["a"].showReport(t.$t("COREWEBCLIENT.REPORT_SETTINGS_UPDATE_SUCCESS"))):n["a"].showError(t.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED"))}),(function(i){t.savingPerFilesSetting=!1,n["a"].showError(l["a"].getTextFromResponse(i,t.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED")))}))}},updateSettingsCorporate:function(){var t=this;if(this.isCorporateAvailable&&!this.savingCorFilesSetting){this.savingCorFilesSetting=!0;var i={SpaceLimitMb:this.corporateSpaceLimitMb};o["a"].sendRequest({moduleName:"CorporateFiles",methodName:"UpdateSettings",parameters:i}).then((function(i){t.savingCorFilesSetting=!1,i?(c["a"].saveCorporateFilesSettings({spaceLimitMb:t.corporateSpaceLimitMb}),n["a"].showReport(t.$t("COREWEBCLIENT.REPORT_SETTINGS_UPDATE_SUCCESS"))):n["a"].showError(t.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED"))}),(function(i){t.savingPerFilesSetting=!1,n["a"].showError(l["a"].getTextFromResponse(i,t.$t("COREWEBCLIENT.ERROR_SAVING_SETTINGS_FAILED")))}))}}}},S=E,p=e("2877"),d=e("4983"),L=e("f09f"),m=e("a370"),C=e("8f8e"),v=e("0170"),b=e("27f9"),u=e("9c40"),T=e("74f7"),I=e("6b1d"),_=e("eebe"),g=e.n(_),M=Object(p["a"])(S,a,s,!1,null,"2ae7bf86",null);i["default"]=M.exports;g()(M,"components",{QScrollArea:d["a"],QCard:L["a"],QCardSection:m["a"],QCheckbox:C["a"],QItemLabel:v["a"],QInput:b["a"],QBtn:u["a"],QInnerLoading:T["a"],QLinearProgress:I["a"]})}}]);