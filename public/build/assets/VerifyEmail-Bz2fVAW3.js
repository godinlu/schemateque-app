import{d as c,T as p,i as g,c as y,w as o,o as a,a as i,u as t,Z as v,b as n,g as b,h as k,e as r,n as x,k as h,f as _}from"./app-wjdzez0_.js";import{_ as w}from"./GuestLayout.vue_vue_type_script_setup_true_lang-CvReraK4.js";import{P as V}from"./PrimaryButton-ao5rvHtE.js";import"./ApplicationLogo-B5wyAfvn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={key:0,class:"mb-4 text-sm font-medium text-green-600"},C={class:"mt-4 flex items-center justify-between"},P=c({__name:"VerifyEmail",props:{status:{}},setup(d){const l=d,s=p({}),u=()=>{s.post(route("verification.send"))},m=g(()=>l.status==="verification-link-sent");return(f,e)=>(a(),y(w,null,{default:o(()=>[i(t(v),{title:"Email Verification"}),e[2]||(e[2]=n("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1)),m.value?(a(),b("div",B," A new verification link has been sent to the email address you provided during registration. ")):k("",!0),n("form",{onSubmit:_(u,["prevent"])},[n("div",C,[i(V,{class:x({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:o(()=>e[0]||(e[0]=[r(" Resend Verification Email ")])),_:1},8,["class","disabled"]),i(t(h),{href:f.route("logout"),method:"post",as:"button",class:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},{default:o(()=>e[1]||(e[1]=[r("Log Out")])),_:1},8,["href"])])],32)]),_:1}))}});export{P as default};