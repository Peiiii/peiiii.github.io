import{r as e,o as t,c as a,a as r,b as n,F as l,d as s}from"./app.c53b77a8.js";const i={},o=r("h2",{id:"介绍",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),s(" 介绍")],-1),u=r("p",null,"一些可以快捷使用的脚本，更复杂的推荐油猴。",-1),c=r("h2",{id:"如何使用",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#如何使用","aria-hidden":"true"},"#"),s(" 如何使用")],-1),d=r("p",null,"将下方的脚本拖拽至标签栏即可全局使用。",-1),p=["src"],h=r("h2",{id:"脚本",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#脚本","aria-hidden":"true"},"#"),s(" 脚本")],-1),m={href:"javascript: document.querySelectorAll('*').forEach(q => q.style.outline = q.style.outline ? '' : '1px solid red')"},f=r("details",{class:"custom-container details"},[r("summary",null,"说明"),r("p",null,[s("可以给页面中所有的元素添加外边框，便于查看 "),r("code",null,"DOM"),s(" 结构。")])],-1),v={href:"javascript: document.querySelectorAll('a').forEach(a=>{if(!a.style.pointerEvents){a.setAttribute('markPointerEvents',true);a.style.pointerEvents='none';return;}if(a.getAttribute('markPointerEvents')&&a.style.pointerEvents==='none'){a.removeAttribute('markPointerEvents');a.style.pointerEvents='';return;}})"},y=r("details",{class:"custom-container details"},[r("summary",null,"说明"),r("p",null,"阻止 a 链接跳转，便于复制文字。"),r("p",null,"拖到书签栏位置后，点击一次禁止跳转，再点击恢复跳转。")],-1);i.render=function(s,i){const b=e("Badge");return t(),a(l,null,[o,u,c,d,r("img",{src:s.$withBase("/bookmark/bookmark-scripts.gif"),alt:"bookmark scripts"},null,8,p),h,r("p",null,[r("a",m,[n(b,{text:"外边框",type:"error",vertical:"middle"})])]),f,r("p",null,[r("a",v,[n(b,{text:"阻止链接跳转",type:"error",vertical:"middle"})])]),y],64)};export{i as default};
