(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{103:function(e,t,r){"use strict";r.r(t);var s=r(1);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n={name:"RegisterForm",data:function(){return{form:new Form({name:"",email:"",phone:{phone:"",phone_country:"NG"},password:"",password_confirmation:""}),submitted:!1,disabled:!1}},methods:a({},Object(s.b)(["setAuth","setToken","clearIntended"]),{regUser:function(){var e=this;this.disabled=!0,this.submitted=!0,this.$Progress.start(1e4),this.form.post(this.getRoutes.auth.register).then(function(t){e.setToken({token:t.data.data,remember:!0}),axios.get(e.getRoutes.auth.profile).then(function(t){e.setAuth({user:t.data.data,remember:!0}),e.disabled=!1,e.$Progress.finish(),new toast({type:"success",title:"Profile created successfully"}),e.$router.push(e.getIntended),e.clearIntended()}).catch(function(){e.disabled=!1,e.$Progress.fail(),new toast({type:"error",title:"Error setting profile"})})}).catch(function(){e.disabled=!1,e.$Progress.fail(),new toast({type:"error",title:"Error creating user"})})}}),computed:a({},Object(s.c)(["getRoutes","getIntended"]),{isDisabled:function(){return this.disabled},isSubmitted:function(){return this.submitted},isEmpty:function(){return!(this.form.name&&this.form.email&&this.form.phone.phone&&this.form.password&&this.form.password_confirmation)}})},l=r(0),m={name:"Register",components:{register:Object(l.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"text-center display-4"},[e._v("Register")]),e._v(" "),r("form",{staticClass:"container",attrs:{autocomplete:"on"}},[r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"name"}},[e._v("Name")]),e._v(" "),r("div",{staticClass:"col-md-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-valid":!e.form.errors.has("name")&&e.isSubmitted,"is-invalid":e.form.errors.has("name")},attrs:{id:"name",type:"text",name:"name",autofocus:"",placeholder:"Full Name"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"name"}})],1)]),e._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"name"}},[e._v("Email")]),e._v(" "),r("div",{staticClass:"col-md-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-valid":!e.form.errors.has("email")&&e.isSubmitted,"is-invalid":e.form.errors.has("email")},attrs:{id:"email",type:"email",name:"email",autofocus:"",placeholder:"Valid Email Address"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"email"}})],1)]),e._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"phone"}},[e._v("Phone Number")]),e._v(" "),r("div",{staticClass:"col-md-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phone.phone,expression:"form.phone.phone"}],staticClass:"form-control",class:{"is-valid":!e.form.errors.has("phone")&&e.isSubmitted,"is-invalid":e.form.errors.has("phone.phone")},attrs:{id:"phone",type:"tel",name:"phone",autofocus:"",placeholder:"Valid Phone Number In Nigeria"},domProps:{value:e.form.phone.phone},on:{input:function(t){t.target.composing||e.$set(e.form.phone,"phone",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"phone.phone"}})],1)]),e._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[e._v("Password")]),e._v(" "),r("div",{staticClass:"col-md-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-valid":!e.form.errors.has("password")&&e.isSubmitted,"is-invalid":e.form.errors.has("password")},attrs:{id:"password",type:"password",name:"password",autofocus:"",placeholder:"Minimum of 8 characters"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"password"}})],1)]),e._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password_confirmation"}},[e._v("Confirm Password")]),e._v(" "),r("div",{staticClass:"col-md-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-valid":!e.form.errors.has("password_confirmation")&&e.isSubmitted,"is-invalid":e.form.errors.has("password_confirmation")},attrs:{id:"password_confirmation",type:"password",name:"password_confirmation",autofocus:"",placeholder:"Must match password field"},domProps:{value:e.form.password_confirmation},on:{input:function(t){t.target.composing||e.$set(e.form,"password_confirmation",t.target.value)}}}),e._v(" "),r("has-error",{attrs:{form:e.form,field:"password__confirmation"}})],1)]),e._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-8 offset-md-4"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isDisabled||e.isEmpty},on:{click:function(t){return t.preventDefault(),e.regUser(t)}}},[e.isDisabled?r("i",{staticClass:"fas fa-spinner fa-spin"}):r("span",[e._v("Submit")])])])]),e._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-8 offset-md-4"},[r("p",[e._v("Have an account already?"),r("router-link",{attrs:{to:"/login"}},[e._v("Proceed to Login")])],1)])])])])},[],!1,null,"b4a70d40",null).exports}},c=Object(l.a)(m,function(){var e=this.$createElement;return(this._self._c||e)("register")},[],!1,null,"80b361d2",null);t.default=c.exports}}]);