(this["webpackJsonpexpense-frontend"]=this["webpackJsonpexpense-frontend"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(25),c=a.n(s),r=(a(74),a(37)),i=a(5),l=a(7),o=a(114),u=(a(75),a(56)),j=a(1);var d=function(e){var t=e.variant,a=e.heading,s=e.message,c=Object(n.useState)(!0),r=Object(i.a)(c,2),l=r[0],o=r[1],d=Object(n.useState)(null),b=Object(i.a)(d,2),x=b[0],h=b[1];return console.log(x),Object(n.useEffect)((function(){var e=setTimeout((function(){return o(!1)}),5e3);return h(e),function(){clearTimeout(x)}}),[]),Object(j.jsx)(u.a,{variant:t,onClose:function(){return o(!1)},dismissible:!0,show:l,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(u.a.Heading,{children:a}),Object(j.jsx)("p",{className:"alert-body",children:s})]})})},b=a(68),x=a(43),h=a(67),m=a(11),O=a(27),p=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m.c,{to:"/",className:"nav-link",children:Object(j.jsx)(O.d,{})}),Object(j.jsx)(m.c,{to:"/expenses",className:"nav-link",children:Object(j.jsx)(O.b,{})}),Object(j.jsx)(m.c,{to:"/expenses/create",className:"nav-link",children:Object(j.jsx)(O.c,{})}),Object(j.jsx)(m.c,{to:"/change-password",className:"nav-link",children:Object(j.jsx)(O.h,{})}),Object(j.jsx)(m.c,{to:"/sign-out",className:"nav-link",children:Object(j.jsx)(O.g,{})})]}),v=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m.c,{to:"/",className:"nav-link",children:Object(j.jsx)(O.e,{})}),Object(j.jsx)(m.c,{to:"/sign-up",className:"nav-link",children:Object(j.jsx)(O.f,{})}),Object(j.jsx)(m.c,{to:"/sign-in",className:"nav-link",children:Object(j.jsx)(O.a,{})})]}),f=function(e){var t=e.user;return Object(j.jsx)(x.a,{bg:"dark",variant:"dark",expand:"md",children:Object(j.jsxs)(h.a,{children:[Object(j.jsx)(x.a.Brand,{children:Object(j.jsx)(m.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"Expense-Tracker"})}),Object(j.jsx)(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(x.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(b.a,{className:"ms-auto",children:[t&&Object(j.jsxs)("span",{className:"navbar-text me-2",children:["Welcome, ",t.username]}),t?p:v]})})]})})},g=a(8),w=a.n(g),N=a(15),S="https://damp-thicket-22640.herokuapp.com",y="http://localhost:4741",k="localhost"===window.location.hostname?y:S,C=a(23),A=a.n(C),E=function(e,t,a,n){return A.a.post(k+"/sign-up/",{credentials:{username:e,email:t,password:a,password_confirmation:n}})},_=function(e,t){return A.a.post(k+"/sign-in/",{credentials:{email:e,password:t}})},F=function(e){return A.a.delete(k+"/sign-out/",{headers:{Authorization:"Bearer ".concat(e.token)}})},P=function(e,t,a){return A.a.patch(k+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Bearer ".concat(a.token)}})},L=a(10),I=a(35),D=function(e){var t=e.msgAlert,a=e.setUser,s=Object(n.useState)(""),c=Object(i.a)(s,2),r=c[0],o=c[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),b=d[0],x=d[1],h=Object(n.useState)(""),m=Object(i.a)(h,2),O=m[0],p=m[1],v=Object(n.useState)(""),f=Object(i.a)(v,2),g=f[0],S=f[1],y=Object(n.useState)(!1),k=Object(i.a)(y,2),C=k[0],A=k[1],F=function(){var e=Object(N.a)(w.a.mark((function e(n){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,E(r,b,O,g);case 4:return e.next=6,_(b,O);case 6:s=e.sent,a(s.data.user),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),A(!0),e.next=19;break;case 12:e.prev=12,e.t0=e.catch(1),o(""),x(""),p(""),S(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 19:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return C?Object(j.jsx)(l.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign Up"}),Object(j.jsxs)(L.a,{onSubmit:F,children:[Object(j.jsxs)(L.a.Group,{controlId:"username",children:[Object(j.jsx)(L.a.Label,{children:"UserName"}),Object(j.jsx)(L.a.Control,{required:!0,type:"username",name:"username",value:r,placeholder:"Enter username",onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)(L.a.Group,{controlId:"email",children:[Object(j.jsx)(L.a.Label,{children:"Email address"}),Object(j.jsx)(L.a.Control,{required:!0,type:"email",name:"email",value:b,placeholder:"Enter email",onChange:function(e){return x(e.target.value)}})]}),Object(j.jsxs)(L.a.Group,{controlId:"password",children:[Object(j.jsx)(L.a.Label,{children:"Password"}),Object(j.jsx)(L.a.Control,{required:!0,name:"password",value:O,type:"password",placeholder:"Password",onChange:function(e){return p(e.target.value)}})]}),Object(j.jsxs)(L.a.Group,{controlId:"passwordConfirmation",children:[Object(j.jsx)(L.a.Label,{children:"Password Confirmation"}),Object(j.jsx)(L.a.Control,{required:!0,name:"passwordConfirmation",value:g,type:"password",placeholder:"Confirm Password",onChange:function(e){return S(e.target.value)}})]}),Object(j.jsx)(I.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},U=function(e){var t=e.msgAlert,a=e.setUser,s=Object(n.useState)(""),c=Object(i.a)(s,2),r=c[0],o=c[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),b=d[0],x=d[1],h=Object(n.useState)(!1),m=Object(i.a)(h,2),O=m[0],p=m[1],v=function(){var e=Object(N.a)(w.a.mark((function e(n){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,_(r,b);case 4:s=e.sent,a(s.data.user),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),p(!0),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),o(""),x(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return O?Object(j.jsx)(l.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign In"}),Object(j.jsxs)(L.a,{onSubmit:v,children:[Object(j.jsxs)(L.a.Group,{controlId:"email",children:[Object(j.jsx)(L.a.Label,{children:"Email address"}),Object(j.jsx)(L.a.Control,{required:!0,type:"email",name:"email",value:r,placeholder:"Enter email",onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)(L.a.Group,{controlId:"password",children:[Object(j.jsx)(L.a.Label,{children:"Password"}),Object(j.jsx)(L.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return x(e.target.value)}})]}),Object(j.jsx)(I.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},G=function(e){var t=e.msgAlert,a=e.clearUser,s=e.user,c=Object(n.useState)(!1),r=Object(i.a)(c,2),o=r[0],u=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(s);case 2:t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),a(),u(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!s||o?Object(j.jsx)(l.a,{to:"/"}):""},B=function(e){var t=e.msgAlert,a=e.user,s=Object(n.useState)(""),c=Object(i.a)(s,2),r=c[0],o=c[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),b=d[0],x=d[1],h=Object(n.useState)(!1),m=Object(i.a)(h,2),O=m[0],p=m[1],v=function(){var e=Object(N.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,P(r,b,a);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),p(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),o(""),x(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!a||O?Object(j.jsx)(l.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Change Password"}),Object(j.jsxs)(L.a,{onSubmit:v,children:[Object(j.jsxs)(L.a.Group,{controlId:"oldPassword",children:[Object(j.jsx)(L.a.Label,{children:"Old password"}),Object(j.jsx)(L.a.Control,{required:!0,name:"oldPassword",value:r,type:"password",placeholder:"Old Password",onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)(L.a.Group,{controlId:"newPassword",children:[Object(j.jsx)(L.a.Label,{children:"New Password"}),Object(j.jsx)(L.a.Control,{required:!0,name:"newPassword",value:b,type:"password",placeholder:"New Password",onChange:function(e){return x(e.target.value)}})]}),Object(j.jsx)(I.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},T=(a(101),function(e){return Object(j.jsx)("div",{className:"card ".concat(e.className),children:e.children})}),q=(a(102),function(e){return Object(j.jsx)("div",{className:"expenses-filter",children:Object(j.jsxs)("div",{className:"expenses-filter__control",children:[Object(j.jsx)("label",{children:"Filter by year"}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){var a=t.target.value;console.log(a),e.onChangeFilter(a)},children:[Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2019",children:"2019"})]})]})})});a(103),a(104),a(105);var z=function(e){var t=new Date(e.date),a=t.toLocaleString("en-US",{month:"long"}),n=t.getFullYear(),s=t.toLocaleString("en-US",{day:"2-digit"});return Object(j.jsxs)("div",{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__month",children:a}),Object(j.jsx)("div",{className:"expense-date__year",children:n}),Object(j.jsx)("div",{className:"expense-date__day",children:s})]})},M=function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(T,{className:"expense-item",children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"expense-item",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("div",{className:"expense-item__price",children:"$".concat(e.amount)}),Object(j.jsx)(z,{date:e.date})]})})})})},J=(a(106),function(e){var t=e.fItems.map((function(e){return Object(j.jsx)(M,{title:e.title,amount:e.amount,date:e.date},e.id)})),a=Object(j.jsx)("h2",{className:"expenses-list__fallback",children:"No data Available"});return 0===e.fItems.length?Object(j.jsx)("ul",{children:a}):Object(j.jsx)("ul",{className:"expenses-list",children:t})}),V=a(50),Y=(a(107),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(j.jsxs)("div",{className:"chart-bar",children:[Object(j.jsx)("div",{className:"chart-bar__inner",children:Object(j.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(j.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),H=(a(108),function(e){var t=e.dataPoints.map((function(e){return e.value})),a=Math.max.apply(Math,Object(r.a)(t));return Object(j.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(j.jsx)(Y,{value:e.value,maxValue:a,label:e.label},e.label)}))})}),W=function(e){var t,a=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],n=Object(V.a)(e.expenses);try{for(n.s();!(t=n.n()).done;){var s=t.value;a[new Date(s.date).getMonth()].value+=s.amount}}catch(c){n.e(c)}finally{n.f()}return Object(j.jsx)(H,{dataPoints:a})},$=function(e){var t=Object(n.useState)("2020"),a=Object(i.a)(t,2),s=a[0],c=a[1],r=e.items.filter((function(e){return""+new Date(e.date).getFullYear()===s}));return Object(j.jsxs)(T,{className:"expenses",children:[Object(j.jsx)(q,{selected:s,onChangeFilter:function(e){console.log("Expenses.js"),c(e)}}),Object(j.jsx)(W,{expenses:r}),Object(j.jsx)(J,{fItems:r})]})},R=function(e){return A.a.get(k+"/expenses",{headers:{Authorization:"Bearer ".concat(e.token)}})},K=function(e,t){return A.a.get("".concat(k,"/expenses/").concat(e),{headers:{Authorization:"Bearer ".concat(t.token)}})},Q=function(e,t){return A.a.delete("".concat(k,"/expenses/").concat(e),{headers:{Authorization:"Bearer ".concat(t.token)}})},X=function(e,t,a,n,s){return A.a.patch("".concat(k,"/expenses/").concat(e),{expense:{title:t,amount:a,date:n}},{headers:{Authorization:"Bearer ".concat(s.token)}})},Z=function(e,t,a,n){return A.a.post("".concat(k,"/expenses"),{expense:{title:e,amount:t,date:a}},{headers:{Authorization:"Bearer ".concat(n.token)}})},ee=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),s=a[0],c=a[1];return Object(n.useEffect)((function(){var t=function(){var t=Object(N.a)(w.a.mark((function t(){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R(e.user);case 3:a=t.sent,c(a.data.expenses),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.msgAlert({heading:"Expense List failed to load",message:t.t0.message,variant:"danger"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();e.user&&t()}),[e.expenses]),e.user?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Create an Expense!"}),Object(j.jsx)($,{items:s})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Hello im home! "}),Object(j.jsx)("h2",{children:"Start keeping track of your finances"}),Object(j.jsx)("h3",{children:"The fun way!"}),Object(j.jsx)("p",{children:"you should Sign up!"})]})},te=function(e){var t=e.handleSubmit,a=e.title,n=e.amount,s=e.date,c=e.setTitle,r=e.setAmount,i=e.setDate;return Object(j.jsxs)(L.a,{onSubmit:t,children:[Object(j.jsxs)(L.a.Group,{controlId:"title",children:[Object(j.jsx)(L.a.Label,{children:"Title"}),Object(j.jsx)(L.a.Control,{placeholder:"what do you have to do?",name:"title",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(j.jsxs)(L.a.Group,{controlId:"amount",children:[Object(j.jsx)(L.a.Label,{children:"Amount"}),Object(j.jsx)(L.a.Control,{placeholder:"e.g. not get covid this week",type:"number",name:"amount",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(j.jsxs)(L.a.Group,{controlId:"date",children:[Object(j.jsx)(L.a.Label,{children:"Date"}),Object(j.jsx)(L.a.Control,{placeholder:"Pick a Date",type:"date",name:"date",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(j.jsx)(I.a,{className:"mt-2",variant:"warning",type:"submit",children:"Submit"})]})},ae=function(e){var t=e.user,a=e.msgAlert,s=Object(n.useState)(""),c=Object(i.a)(s,2),r=c[0],o=c[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),b=d[0],x=d[1],h=Object(n.useState)(""),m=Object(i.a)(h,2),O=m[0],p=m[1],v=Object(n.useState)(null),f=Object(i.a)(v,2),g=f[0],S=f[1],y=function(){var e=Object(N.a)(w.a.mark((function e(n){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,Z(r,b,new Date(O),t);case 4:s=e.sent,console.log(s.data),S(s.data.expense._id),a({heading:"Expense Created",message:"Created ".concat(r," successfully."),variant:"success"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),a({heading:"Failed to create expense",message:e.t0.message,variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return t?g?Object(j.jsx)(l.a,{to:"/expenses/".concat(g)}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{className:"expense-text",children:"Create Expense"}),Object(j.jsx)(te,{handleSubmit:y,title:r,amount:b,date:O,setTitle:o,setAmount:x,setDate:p})]})}):Object(j.jsx)(l.a,{to:"/"})},ne=a(113),se=function(e){var t=e.user,a=e.msgAlert,s=Object(n.useState)(null),c=Object(i.a)(s,2),r=c[0],o=c[1],u=Object(n.useState)(!1),d=Object(i.a)(u,2),b=d[0],x=d[1],h=Object(l.h)().id;if(!t)return Object(j.jsx)(l.a,{to:"/"});Object(n.useEffect)((function(){(function(){var e=Object(N.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K(h,t);case 3:n=e.sent,o(n.data.expense),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({heading:"Expense failed to load",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=function(){var e=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q(h,t);case 3:x(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({heading:"Failed to delete expense",message:e.t0.message,variant:"danger"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return r?b?Object(j.jsx)(l.a,{to:"/expenses"}):Object(j.jsx)("div",{className:"expense-delete",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("div",{}),Object(j.jsx)("h2",{className:"expense-item-title",children:r.title}),Object(j.jsx)("p",{className:"expense-delete-description",children:r.amount}),Object(j.jsx)(I.a,{variant:"danger",onClick:O,children:"Delete Expense"}),Object(j.jsx)(m.b,{to:"/expenses/".concat(h,"/edit"),children:Object(j.jsx)(I.a,{variant:"warning",type:"submit",children:"Update Expense"})})]})})}):Object(j.jsx)(ne.a,{animation:"border",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},ce=function(e){var t=e.user,a=e.msgAlert,s=Object(n.useState)(""),c=Object(i.a)(s,2),r=c[0],o=c[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),b=d[0],x=d[1],h=Object(n.useState)(""),m=Object(i.a)(h,2),O=m[0],p=m[1],v=Object(n.useState)(!1),f=Object(i.a)(v,2),g=f[0],S=f[1],y=Object(l.h)().id;if(!t)return Object(j.jsx)(l.a,{to:"/"});Object(n.useEffect)((function(){(function(){var e=Object(N.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K(y,t);case 3:n=e.sent,o(n.data.expense.title),x(n.data.expense.amount),p(n.data.expense.date),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a({heading:"Failed to load Expense",message:e.t0.message,variant:"danger"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=function(){var e=Object(N.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,X(y,r,b,O,t);case 4:S(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a({heading:"Failed to update Expense",message:e.t0.message,variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return g?Object(j.jsx)(l.a,{to:"/expenses/".concat(y)}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Edit Expense"}),Object(j.jsx)(te,{handleSubmit:k,title:r,amount:b,date:O,setTitle:o,setAmount:x,setDate:p})]})})},re=a(115),ie=(a(109),function(e){return Object(j.jsxs)(re.a,{className:"expense-item",children:[Object(j.jsx)(m.b,{className:"expense-item link-warning",to:"/expenses/".concat(e.expense._id),children:Object(j.jsx)("h3",{children:e.expense.title},e.expense._id)}),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"expense-item__price",children:"$".concat(e.expense.amount)}),Object(j.jsx)(z,{date:e.expense.date})]})})]})}),le=function(e){var t=e.user,a=e.msgAlert,s=e.getList,c=Object(n.useState)([]),r=Object(i.a)(c,2),o=r[0],u=r[1];if(!t)return Object(j.jsx)(l.a,{to:"/"});var d=function(){var e=Object(N.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(t);case 3:n=e.sent,u(n.data.expenses),s(n.data.expenses),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a({heading:"Expense List failed to load",message:e.t0.message,variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){d()}),[]),!o)return Object(j.jsx)(ne.a,{animation:"border",role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})});var b=o.map((function(e){return Object(j.jsx)(ie,{expense:e,date:e.date,title:e.title,amount:e.amount,user:t,msgAlert:a},e._id)}));return Object(j.jsx)(T,{className:"expenses",children:Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{className:"expenses-text",children:"My Expenses"}),Object(j.jsx)("ul",{children:b})]})})})})},oe=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),u=Object(i.a)(c,2),b=u[0],x=u[1],h=Object(n.useState)([]),m=Object(i.a)(h,2),O=m[0],p=m[1],v=function(e){var t=e.heading,a=e.message,n=e.variant,s=Object(o.a)();x((function(e){return[].concat(Object(r.a)(e),[{heading:t,message:a,variant:n,id:s}])}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{user:a}),b.map((function(e){return Object(j.jsx)(d,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(j.jsx)("main",{className:"container",children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{exact:!0,path:"/",element:Object(j.jsx)(ee,{expenses:O,msgAlert:v,user:a})}),Object(j.jsx)(l.b,{path:"/sign-up",element:Object(j.jsx)(D,{msgAlert:v,setUser:s})}),Object(j.jsx)(l.b,{path:"/sign-in",element:Object(j.jsx)(U,{msgAlert:v,setUser:s})}),Object(j.jsx)(l.b,{path:"/sign-out",element:Object(j.jsx)(G,{msgAlert:v,clearUser:function(){return s(null)},user:a})}),Object(j.jsx)(l.b,{path:"/change-password",element:Object(j.jsx)(B,{msgAlert:v,user:a})}),Object(j.jsx)(l.b,{path:"/expenses",element:Object(j.jsx)(le,{msgAlert:v,getList:p,user:a})}),Object(j.jsx)(l.b,{path:"/expenses/create",element:Object(j.jsx)(ae,{msgAlert:v,user:a})}),Object(j.jsx)(l.b,{path:"/expenses/:id",element:Object(j.jsx)(se,{msgAlert:v,user:a})}),Object(j.jsx)(l.b,{path:"/expenses/:id/edit",element:Object(j.jsx)(ce,{msgAlert:v,user:a})})]})})]})},ue=Object(j.jsx)(m.a,{basename:"/expense-frontend",children:Object(j.jsx)(oe,{})});c.a.render(ue,document.getElementById("root"))},74:function(e,t,a){},75:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.c23ec2d7.chunk.js.map