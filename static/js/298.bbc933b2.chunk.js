"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[298],{4298:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});var t=r(1413),i=r(2791),s=r(184),u=function(e){var n=e.message;return(0,s.jsx)("p",{className:"error",children:n})},c=r(9263),o=r(887),l=r(9434),a=r(6916),d=function(e){return e.phonebook},h=(0,a.P1)(d,(function(e){return e.contacts})),f=(0,a.P1)(d,(function(e){return e.isLoading})),m=(0,a.P1)(d,(function(e){return e.error})),x=(0,a.P1)(d,(function(e){return e.filterTerm})),j=r(6338),p=function(){var e=(0,o.cI)(),n=e.register,r=e.handleSubmit,a=e.reset,d=e.formState.errors,p=(0,l.I0)(),b=(0,l.v9)(h),v=(0,l.v9)(f),k=(0,l.v9)(m),g=(0,l.v9)(x);(0,i.useEffect)((function(){p((0,j.yF)())}),[p]);var w=null!==b&&b.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase().trim())}));return(0,s.jsxs)("div",{children:[(0,s.jsxs)("form",{onSubmit:r((function(e){p((0,j.uK)(e)),a()})),children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{children:"Name:"}),(0,s.jsx)("input",(0,t.Z)((0,t.Z)({},n("name",{required:!0})),{},{type:"text"})),d.name&&(0,s.jsx)("span",{children:"This field is required"})]}),(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{children:"Number:"}),(0,s.jsx)("input",(0,t.Z)((0,t.Z)({},n("number",{required:!0})),{},{type:"text"})),d.number&&(0,s.jsx)("span",{children:"This field is required"})]}),(0,s.jsx)("button",{type:"submit",children:"Add contact"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Find contact by name:"}),(0,s.jsx)("input",{onChange:function(e){var n=e.target.value;p((0,j.ch)(n))},value:g,type:"text",placeholder:"Taco..."})]}),v&&(0,s.jsx)(c.Z,{}),k&&(0,s.jsx)(u,{message:k}),(0,s.jsx)("ul",{children:w&&w.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:e.name}),(0,s.jsx)("p",{children:e.number}),(0,s.jsx)("button",{onClick:function(){return n=e.id,console.log(n),void p((0,j.GK)(n));var n},children:"Delete"})]},e.id)}))})]})}}}]);
//# sourceMappingURL=298.bbc933b2.chunk.js.map