(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"5ace":function(e,a,s){"use strict";s.r(a);var r=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("Heading",{attrs:{title:e.$t("signup.TITLE")}}),s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("form",{on:{submit:function(a){return a.preventDefault(),e.submit(a)}}},[s("v-layout",{attrs:{column:""}},[s("v-flex",[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"required",expression:"'required'",modifiers:{disable:!0}}],attrs:{id:"name",name:"name",label:e.$t("signup.NAME"),"data-vv-as":e.$t("signup.NAME"),error:e.errors.has("name"),"error-messages":e.errors.collect("name"),autocomplete:"off"},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}})],1),s("v-flex",[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"required|email",expression:"'required|email'",modifiers:{disable:!0}}],attrs:{id:"email",name:"email",type:"email",label:e.$t("signup.EMAIL"),"data-vv-as":e.$t("signup.EMAIL"),error:e.errors.has("email"),"error-messages":e.errors.collect("email"),autocomplete:"off"},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}})],1),s("v-flex",[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"required|min:5",expression:"'required|min:5'",modifiers:{disable:!0}}],ref:"password",attrs:{id:"password",name:"password",type:"password",label:e.$t("signup.PASSWORD"),"data-vv-as":e.$t("signup.PASSWORD"),error:e.errors.has("password"),"error-messages":e.errors.collect("password"),autocomplete:"off"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}})],1),s("v-flex",[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate.disable",value:"required|min:5|confirmed:password",expression:"'required|min:5|confirmed:password'",modifiers:{disable:!0}}],attrs:{id:"confirmPassword",name:"confirmPassword",type:"password",label:e.$t("signup.CONFIRM_PASSWORD"),"data-vv-as":e.$t("signup.PASSWORD"),error:e.errors.has("confirmPassword"),"error-messages":e.errors.collect("confirmPassword"),autocomplete:"off"},model:{value:e.confirmPassword,callback:function(a){e.confirmPassword=a},expression:"confirmPassword"}})],1),s("v-flex",{attrs:{"text-xs-center":"","mt-5":""}},[s("SubmitButton",{attrs:{text:e.$t("signup.SIGN_ME_UP")}})],1)],1)],1)]),s("ErrorMessage")],1)],1)},t=[],i=s("a18c"),o=s("2f62"),l={metaInfo(){return{title:this.$store.getters.appTitle,titleTemplate:`${this.$t("signup.TITLE")} - %s`}},data(){return{name:"",email:"",password:"",confirmPassword:""}},methods:{...Object(o["b"])(["userSignUp"]),async submit(){const e=await this.$validator.validateAll();e&&await this.userSignUp({name:this.name,email:this.email,password:this.password})}},created(){this.$store.state.auth.isTokenSet&&i["a"].push({name:"home"})}},n=l,d=s("2877"),m=s("6544"),u=s.n(m),c=s("a523"),p=s("0e8f"),f=s("a722"),v=s("2677"),w=Object(d["a"])(n,r,t,!1,null,null,null);a["default"]=w.exports;u()(w,{VContainer:c["a"],VFlex:p["a"],VLayout:f["a"],VTextField:v["a"]})}}]);