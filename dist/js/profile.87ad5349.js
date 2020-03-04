(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"66aa":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("Heading",{attrs:{title:e.$t("myProfile.TITLE")}}),r("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[r("v-dialog",{attrs:{"max-width":"400px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-flex",{attrs:{"text-xs-center":""}},[r("v-btn",e._g({staticClass:"btnChangePassword",attrs:{small:"",flat:""},on:{click:function(t){e.triggerChangePassword=!0}}},a),[e._v(e._s(e.$t("myProfile.CHANGE_MY_PASSWORD")))])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("form",{on:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("v-card-title",[r("span",{staticClass:"headline"},[e._v(" "+e._s(e.$t("myProfile.CHANGE_MY_PASSWORD"))+" ")])]),r("v-card-text",[r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{wrap:""}},[e.triggerChangePassword?[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"required|min:5",expression:"'required|min:5'",modifiers:{disable:!0}}],key:"oldPassword",attrs:{id:"oldPassword",name:"oldPassword",type:"password",label:e.$t("myProfile.CURRENT_PASSWORD"),"data-vv-as":e.$t("myProfile.CURRENT_PASSWORD"),error:e.errors.has("oldPassword"),"error-messages":e.errors.collect("oldPassword"),autocomplete:"off"},model:{value:e.oldPassword,callback:function(t){e.oldPassword=t},expression:"oldPassword"}})],1),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"required|min:5",expression:"'required|min:5'",modifiers:{disable:!0}}],key:"newPassword",ref:"password",attrs:{id:"newPassword",name:"newPassword",type:"password",label:e.$t("myProfile.NEW_PASSWORD"),"data-vv-as":e.$t("myProfile.NEW_PASSWORD"),error:e.errors.has("newPassword"),"error-messages":e.errors.collect("newPassword"),autocomplete:"off"},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}})],1),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"required|min:5|confirmed:password",expression:"\n                          'required|min:5|confirmed:password'\n                        ",modifiers:{disable:!0}}],key:"confirmPassword",attrs:{id:"confirmPassword",name:"confirmPassword",type:"password",label:e.$t("myProfile.CONFIRM_NEW_PASSWORD"),"data-vv-as":e.$t("myProfile.NEW_PASSWORD"),error:e.errors.has("confirmPassword"),"error-messages":e.errors.collect("confirmPassword"),autocomplete:"off"},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}})],1)]:e._e()],2)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"red lighten3",flat:""},on:{click:e.close}},[e._v(" "+e._s(e.$t("dataTable.CANCEL"))+" ")]),r("SubmitButton",{attrs:{text:e.$t("dataTable.SAVE"),color:"yellow lighten3",flat:""}})],1)],1)])],1),r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"required|email",expression:"'required|email'",modifiers:{disable:!0}}],attrs:{id:"email",name:"email",type:"email",label:e.$t("myProfile.EMAIL"),"data-vv-as":e.$t("myProfile.EMAIL"),error:e.errors.has("email"),"error-messages":e.errors.collect("email"),disabled:"",autocomplete:"off"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"required",expression:"'required'",modifiers:{disable:!0}}],attrs:{id:"name",name:"name",type:"text",label:e.$t("myProfile.NAME"),"data-vv-as":e.$t("myProfile.NAME"),error:e.errors.has("name"),"error-messages":e.errors.collect("name"),autocomplete:"off"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"required",expression:"'required'",modifiers:{disable:!0}}],attrs:{id:"phone",name:"phone",type:"tel",label:e.$t("myProfile.PHONE"),"data-vv-as":e.$t("myProfile.PHONE"),error:e.errors.has("phone"),"error-messages":e.errors.collect("phone"),autocomplete:"off"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-autocomplete",{directives:[{name:"validate",rawName:"v-validate.disable",value:"required",expression:"'required'",modifiers:{disable:!0}}],attrs:{id:"city",name:"city",label:e.$t("myProfile.CITY"),"search-input":e.searchInput,items:e.allCities,clearable:"","clear-icon":"mdi-close","no-data-text":e.$t("myProfile.NO_RESULTS_FOUND"),"data-vv-as":e.$t("myProfile.CITY"),error:e.errors.has("city"),"error-messages":e.errors.collect("city"),autocomplete:"off"},on:{"update:searchInput":function(t){e.searchInput=t},"update:search-input":function(t){e.searchInput=t}},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"required",expression:"'required'",modifiers:{disable:!0}}],attrs:{id:"country",name:"country",type:"text",label:e.$t("myProfile.COUNTRY"),"data-vv-as":e.$t("myProfile.COUNTRY"),error:e.errors.has("country"),"error-messages":e.errors.collect("country"),autocomplete:"off"},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"url",expression:"'url'",modifiers:{disable:!0}}],attrs:{id:"urlTwitter",name:"urlTwitter",type:"url",label:"Twitter","data-vv-as":"Twitter",error:e.errors.has("urlTwitter"),"error-messages":e.errors.collect("urlTwitter"),autocomplete:"off"},model:{value:e.urlTwitter,callback:function(t){e.urlTwitter=t},expression:"urlTwitter"}})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"url",expression:"'url'",modifiers:{disable:!0}}],attrs:{id:"urlGitHub",name:"urlGitHub",type:"url",label:"GitHub","data-vv-as":"GitHub",error:e.errors.has("urlGitHub"),"error-messages":e.errors.collect("urlGitHub"),autocomplete:"off"},model:{value:e.urlGitHub,callback:function(t){e.urlGitHub=t},expression:"urlGitHub"}})],1),r("v-flex",{attrs:{"text-xs-center":"","mt-5":""}},[r("SubmitButton",{attrs:{text:e.$t("myProfile.SAVE"),customClass:"btnSave"}})],1)],1)],1)],1)],1),r("ErrorMessage"),r("SuccessMessage")],1)],1)},s=[],i=r("2f62"),o={metaInfo(){return{title:this.$store.getters.appTitle,titleTemplate:`${this.$t("myProfile.TITLE")} - %s`}},data(){return{dialog:!1,triggerChangePassword:!1,oldPassword:"",newPassword:"",confirmPassword:"",searchInput:""}},computed:{name:{get(){return this.$store.state.profile.profile.name},set(e){const t={key:"name",value:e};this.addProfileData(t)}},email(){return this.$store.state.profile.profile.email},phone:{get(){return this.$store.state.profile.profile.phone},set(e){const t={key:"phone",value:e};this.addProfileData(t)}},allCities(){return this.$store.state.cities.allCities},city:{get(){return this.$store.state.profile.profile.city},set(e){const t={key:"city",value:e};this.addProfileData(t)}},country:{get(){return this.$store.state.profile.profile.country},set(e){const t={key:"country",value:e};this.addProfileData(t)}},urlTwitter:{get(){return this.$store.state.profile.profile.urlTwitter},set(e){const t={key:"urlTwitter",value:e};this.addProfileData(t)}},urlGitHub:{get(){return this.$store.state.profile.profile.urlGitHub},set(e){const t={key:"urlGitHub",value:e};this.addProfileData(t)}}},methods:{...Object(i["b"])(["changeMyPassword","getProfile","getAllCities","addProfileData","saveProfile"]),async submit(){const e=await this.$validator.validateAll();e&&await this.saveProfile({name:this.name,phone:this.phone,city:this.city,country:this.country,urlTwitter:this.urlTwitter,urlGitHub:this.urlGitHub})},close(){this.triggerChangePassword=!1,this.dialog=!1},async save(){try{const e=await this.$validator.validateAll();if(e)return await this.changeMyPassword({oldPassword:this.oldPassword,newPassword:this.newPassword}),this.oldPassword="",this.newPassword="",this.confirmPassword="",this.triggerChangePassword=!1,void this.close()}catch(e){this.oldPassword="",this.newPassword="",this.confirmPassword="",this.triggerChangePassword=!1,this.close()}}},async mounted(){await this.getProfile(),await this.getAllCities()}},l=o,d=r("2877"),n=r("6544"),c=r.n(n),u=r("c6a6"),m=r("8336"),f=r("b0af"),v=r("99d9"),w=r("12b2"),p=r("a523"),P=r("169a"),h=r("0e8f"),b=r("a722"),y=r("9910"),x=r("2677"),g=Object(d["a"])(l,a,s,!1,null,null,null);t["default"]=g.exports;c()(g,{VAutocomplete:u["a"],VBtn:m["a"],VCard:f["a"],VCardActions:v["b"],VCardText:v["d"],VCardTitle:w["a"],VContainer:p["a"],VDialog:P["a"],VFlex:h["a"],VLayout:b["a"],VSpacer:y["e"],VTextField:x["a"]})}}]);