(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{"161c":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return!t.loading&&t.hasInvitationLink?e("div",{staticClass:"q-pa-lg"},[e("q-card",{staticClass:"card-edit-settings",attrs:{flat:"",bordered:""}},[e("q-card-section",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-10"},[e("q-item-label",{directives:[{name:"t",rawName:"v-t",value:"INVITATIONLINKWEBCLIENT.INFO_ACCOUNT_PASSWORD",expression:"'INVITATIONLINKWEBCLIENT.INFO_ACCOUNT_PASSWORD'"}],staticClass:"color: text-negative"})],1)])])],1)],1):t._e()},n=[],s={name:"EditUserInvitationLinkData",props:{user:Object,loading:Boolean},computed:{hasInvitationLink:function(){var t,i=this.$store.getters["invitationlink/getInvitationLinks"];return!!i[null===(t=this.user)||void 0===t?void 0:t.id]}},mounted:function(){this.requestData()},methods:{requestData:function(){var t;null!==(t=this.user)&&void 0!==t&&t.publicId&&this.$store.dispatch("invitationlink/requestInvitationLink",{tenantId:this.user.tenantId,userId:this.user.id,publicId:this.user.publicId})}}},o=s,r=e("2877"),d=e("f09f"),c=e("a370"),l=e("0170"),u=e("eebe"),I=e.n(u),v=Object(r["a"])(o,a,n,!1,null,"36f1e021",null);i["default"]=v.exports;I()(v,"components",{QCard:d["a"],QCardSection:c["a"],QItemLabel:l["a"]})}}]);