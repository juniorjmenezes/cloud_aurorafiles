(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{a620:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.createMode||""===t.link?t._e():i("div",[i("div",{staticClass:"row q-mt-lg"},[i("div",{directives:[{name:"t",rawName:"v-t",value:"INVITATIONLINKWEBCLIENT.LABEL_LINK",expression:"'INVITATIONLINKWEBCLIENT.LABEL_LINK'"}],staticClass:"col-2 q-my-sm"}),i("div",{staticClass:"col-5 q-my-sm"},[i("b",[t._v(t._s(t.link))])])]),i("div",{staticClass:"row q-mt-md"},[i("div",{staticClass:"col-2 q-my-sm"}),i("div",{staticClass:"col-10"},[i("q-item-label",{directives:[{name:"t",rawName:"v-t",value:"INVITATIONLINKWEBCLIENT.INFO_PASS_LINK_TO_USER",expression:"'INVITATIONLINKWEBCLIENT.INFO_PASS_LINK_TO_USER'"}],attrs:{caption:""}})],1)]),i("div",{staticClass:"row q-mt-md"},[i("div",{staticClass:"col-2 q-my-sm"}),i("div",{staticClass:"col-5"},[i("q-btn",{staticClass:"q-px-sm",attrs:{loading:t.resending,unelevated:"","no-caps":"",dense:"",ripple:!1,color:"primary",label:t.$t("INVITATIONLINKWEBCLIENT.ACTION_RESEND")},on:{click:t.resend}})],1)])])},n=[],a=(i("fb153"),i("21ac")),r=i("6bfe"),o=i("e539"),d=i("83d6"),l={name:"EditUserInvitationLinkData",props:{user:Object,createMode:Boolean,currentTenantId:Number},data:function(){return{resending:!1}},computed:{hash:function(){var t,e,i=this.$store.getters["invitationlink/getInvitationLinks"];return r["a"].pString(null===(t=i[null===(e=this.user)||void 0===e?void 0:e.id])||void 0===t?void 0:t.hash)},link:function(){return""!==this.hash?d["a"].getBaseUrl()+"#register/"+this.hash:""}},watch:{user:function(){this.requestData()}},mounted:function(){this.requestData()},methods:{getSaveParameters:function(){return{}},hasChanges:function(){return!1},revertChanges:function(){},isDataValid:function(){return!0},save:function(){this.$emit("save")},requestData:function(){var t;null!==(t=this.user)&&void 0!==t&&t.publicId&&this.$store.dispatch("invitationlink/requestInvitationLink",{tenantId:this.user.tenantId,userId:this.user.id,publicId:this.user.publicId})},resend:function(){var t,e,i=this,s={Email:null===(t=this.user)||void 0===t?void 0:t.publicId,Hash:this.hash,TenantId:null===(e=this.user)||void 0===e?void 0:e.tenantId};this.resending=!0,o["a"].sendRequest({moduleName:"InvitationLinkWebclient",methodName:"SendNotification",parameters:s}).then((function(t){i.resending=!1,t?a["a"].showReport(i.$t("INVITATIONLINKWEBCLIENT.REPORT_SEND_LINK")):a["a"].showError(i.$t("INVITATIONLINKWEBCLIENT.ERROR_SEND_LINK"))}))}}},c=l,u=i("2877"),I=i("0170"),N=i("9c40"),v=i("eebe"),h=i.n(v),m=Object(u["a"])(c,s,n,!1,null,"07e8b3f7",null);e["default"]=m.exports;h()(m,"components",{QItemLabel:I["a"],QBtn:N["a"]})}}]);