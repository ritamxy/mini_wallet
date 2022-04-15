(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),s=(n(20),n(5)),l=n(10),i=n(2),r=n(6),u=n.n(r),j=n(1),o=(n(22),n(23),n(0)),b=function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by Year"}),Object(o.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"})]})]})})};n(25);var d=function(e){var t="card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})};n(26),n(27),n(28);var x=function(e){var t=e.date.toLocaleString("en-AU",{day:"2-digit"}),n=e.date.toLocaleString("en-AU",{month:"long"}),a=e.date.getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__day",children:t}),Object(o.jsx)("div",{className:"expense-date__month",children:n}),Object(o.jsx)("div",{className:"expense-date__year",children:a})]})};var v=function(e){return Object(o.jsx)("li",{children:Object(o.jsxs)(d,{className:"expense-item",children:[Object(o.jsx)(x,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},O=function(e){if(0===e.items.length)return Object(o.jsx)("h2",{className:"expenses-list__fallback",children:"No Expenses Found"});var t=e.items.map((function(e){return Object(o.jsx)(v,{title:e.title,amount:e.amount,date:e.date},e.id)}));return Object(o.jsx)("ul",{className:"expenses-list",children:t})},h=n(11),m=(n(29),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"char-bar__label",children:e.label})]})}),p=(n(30),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(o.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(m,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),f=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(h.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(o.jsx)(p,{dataPoints:n})};var _=function(e){var t=Object(j.useState)("2021"),n=Object(i.a)(t,2),a=n[0],c=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(o.jsx)("div",{children:Object(o.jsxs)(d,{className:"expenses",children:[Object(o.jsx)(b,{selected:a,onChangeFilter:function(e){c(e)}}),Object(o.jsx)(f,{expenses:s}),Object(o.jsx)(O,{items:s})]})})},N=n(7),g=(n(31),function(e){var t=Object(j.useState)(""),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(j.useState)(""),l=Object(i.a)(s,2),r=l[0],u=l[1],b=Object(j.useState)(""),d=Object(i.a)(b,2),x=d[0],v=d[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+r,date:new Date(x)};e.onSaveExpenseData(n),c(""),u(""),v("")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"title"}),Object(o.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:r,onChange:function(e){u(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",min:"2021-01-01",max:"2022-12-31",value:x,onChange:function(e){v(e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),y=(n(32),function(e){var t=Object(j.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(o.jsxs)("div",{className:"new-expense",children:[a&&Object(o.jsx)(g,{onSaveExpenseData:function(t){var n=Object(N.a)(Object(N.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}}),!a&&Object(o.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"})]})}),w=function(){var e=Object(j.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];Object(j.useEffect)((function(){var e=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,c,s,l,i,r,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mini-wallet-23d6b-default-rtdb.firebaseio.com/current_expenses.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(s in n=e.sent,c=[],n)l=n[s],i=l.amount,r=l.date,j=l.title,c.push({id:s,title:j,amount:i,date:new Date(r)});a(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(o.jsxs)("div",{children:[Object(o.jsx)(y,{onAddExpense:function(e){a((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(o.jsx)(_,{items:n})]})};c.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(w,{}))}},[[33,1,2]]]);
//# sourceMappingURL=main.10cb0d30.chunk.js.map