"use strict";(self.webpackChunkdocu_website=self.webpackChunkdocu_website||[]).push([[4013],{895:function(e,t,n){n.d(t,{dK:function(){return c},_k:function(){return l},vc:function(){return s},rx:function(){return o},qo:function(){return i},Hk:function(){return u},Iz:function(){return m}});var r=n(1336),a=n.n(r);n(892)(a()),n(4212).w(a()),n(4182)(a());var c=["en","zh"],l=!1,s=null,o="8c5eaacc",i=8,u=50,m={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},6165:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(3366),a=n(7294),c=n(6010),l=n(261),s=n(6742),o="sidebar_2ahu",i="sidebarItemTitle_2hhb",u="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",f="sidebarItemLinkActive_12pM",v=n(4973);function h(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,c.Z)(o,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,c.Z)(i,"margin-bottom--md")},t.title),a.createElement("ul",{className:u},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:m},a.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var g=n(571),b=["sidebar","toc","children"];var _=function(e){var t=e.sidebar,n=e.toc,s=e.children,o=(0,r.Z)(e,b),i=t&&t.items.length>0;return a.createElement(l.Z,o,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},i&&a.createElement("aside",{className:"col col--3"},a.createElement(h,{sidebar:t})),a.createElement("main",{className:(0,c.Z)("col",{"col--7":i,"col--9 col--offset-1":!i})},s),n&&a.createElement("div",{className:"col col--2"},a.createElement(g.Z,{toc:n})))))}},94:function(e,t,n){n.r(t);var r=n(7294),a=n(6742),c=n(6165),l=n(4973),s=n(3018);t.default=function(e){var t=e.tags,n=e.sidebar,o=(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),i={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);i[t]=i[t]||[],i[t].push(e)}));var u=Object.entries(i).sort((function(e,t){var n=e[0],r=t[0];return n.localeCompare(r)})).map((function(e){var n=e[0],c=e[1];return r.createElement("article",{key:n},r.createElement("h2",null,n),c.map((function(e){return r.createElement(a.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),r.createElement("hr",null))})).filter((function(e){return null!=e}));return r.createElement(c.Z,{title:o,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},r.createElement("h1",null,o),r.createElement("section",{className:"margin-vert--lg"},u))}},571:function(e,t,n){n.d(t,{r:function(){return o},Z:function(){return i}});var r=n(7294),a=n(6010);var c=function(e,t,n){var a=(0,r.useState)(void 0),c=a[0],l=a[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var a=0,s=!1,o=document.getElementsByClassName(e);a<o.length&&!s;){var i=o[a],u=i.href,m=decodeURIComponent(u.substring(u.indexOf("#")+1));r.id===m&&(c&&c.classList.remove(t),i.classList.add(t),l(i),s=!0),a+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},l="tableOfContents_35-E",s="table-of-contents__link";function o(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children}))}))):null}var i=function(e){var t=e.toc;return c(s,"table-of-contents__link--active",100),r.createElement("div",{className:(0,a.Z)(l,"thin-scrollbar")},r.createElement(o,{toc:t}))}}}]);