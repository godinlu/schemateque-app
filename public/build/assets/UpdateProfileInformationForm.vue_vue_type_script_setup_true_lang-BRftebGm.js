import{d as g,Q as y,T as x,g as r,b as a,a as o,u as t,e as m,w as u,j as _,q as V,h as f,s as k,f as b,o as d,k as h}from"./app-wjdzez0_.js";import{a as c,b as p,_ as v}from"./TextInput.vue_vue_type_script_setup_true_lang-BzXwFlVW.js";import{P as w}from"./PrimaryButton-ao5rvHtE.js";const N={key:0},S={class:"mt-2 text-sm text-gray-800"},B={class:"mt-2 text-sm font-medium text-green-600"},C={class:"flex items-center gap-4"},E={key:0,class:"text-sm text-gray-600"},T=g({__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{},status:{}},setup(P){const n=y().props.auth.user,s=x({name:n.name,email:n.email});return(i,e)=>(d(),r("section",null,[e[6]||(e[6]=a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900"}," Profile Information "),a("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1)),a("form",{onSubmit:e[2]||(e[2]=b(l=>t(s).patch(i.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[a("div",null,[o(v,{for:"name",value:"Name"}),o(c,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t(s).name,"onUpdate:modelValue":e[0]||(e[0]=l=>t(s).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(p,{class:"mt-2",message:t(s).errors.name},null,8,["message"])]),a("div",null,[o(v,{for:"email",value:"Email"}),o(c,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(s).email,"onUpdate:modelValue":e[1]||(e[1]=l=>t(s).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),o(p,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),i.mustVerifyEmail&&t(n).email_verified_at===null?(d(),r("div",N,[a("p",S,[e[4]||(e[4]=m(" Your email address is unverified. ")),o(t(h),{href:i.route("verification.send"),method:"post",as:"button",class:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},{default:u(()=>e[3]||(e[3]=[m(" Click here to re-send the verification email. ")])),_:1},8,["href"])]),_(a("div",B," A new verification link has been sent to your email address. ",512),[[V,i.status==="verification-link-sent"]])])):f("",!0),a("div",C,[o(w,{disabled:t(s).processing},{default:u(()=>e[5]||(e[5]=[m("Save")])),_:1},8,["disabled"]),o(k,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:u(()=>[t(s).recentlySuccessful?(d(),r("p",E," Saved. ")):f("",!0)]),_:1})])],32)]))}});export{T as _};
