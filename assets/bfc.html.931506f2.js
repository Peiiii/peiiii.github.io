import{r as e,o,c as d,a as c,b as l,F as i,d as a,e as t}from"./app.6dbfcf78.js";const n={},r=c("h2",{id:"概念",tabindex:"-1"},[c("a",{class:"header-anchor",href:"#概念","aria-hidden":"true"},"#"),a(" 概念")],-1),s=c("p",null,[c("strong",null,"块格式化上下文（Block Formatting Context，BFC）"),a(" ，其可以处理外边距折叠和清除浮动。")],-1),u=c("h2",{id:"产生",tabindex:"-1"},[c("a",{class:"header-anchor",href:"#产生","aria-hidden":"true"},"#"),a(" 产生")],-1),b=t("<li>根元素（<code>&lt;html&gt;</code>）</li><li>浮动元素（元素的 [<code>float</code> 不是 <code>none</code>）</li><li>绝对定位元素（元素的 <code>position</code> 为 <code>absolute</code> 或 <code>fixed</code>）</li><li>行内块元素（元素的 <code>display</code> 为 <code>inline-block</code>）</li><li>表格单元格（元素的 <code>display</code> 为 <code>table-cell</code>，HTML表格单元格默认为该值）</li><li>表格标题（元素的 <code>display</code> 为 <code>table-caption</code>，HTML表格标题默认为该值）</li><li>匿名表格单元格元素（元素的 <code>display</code> 为 <code>table</code>、<code>table-row</code>、 <code>table-row-group</code>、<code>table-header-group</code>、<code>table-footer-group</code>（分别是 HTML table、row、tbody、thead、tfoot 的默认属性）或 <code>inline-table</code>）</li><li><code>overflow</code> 值不为 <code>visible</code> 的块元素</li><li><code>display</code> 值为 <code>flow-root</code> 的元素</li><li><code>contain</code> 值为 <code>layout</code>、<code>content</code> 或 paint 的元素</li><li>弹性元素（<code>display</code> 为 <code>flex</code> 或 <code>inline-flex</code> 元素的直接子元素）</li><li>网格元素（<code>display</code> 为 <code>grid</code> 或 <code>inline-grid</code> 元素的直接子元素）</li><li>多列容器（元素的 <code>column-count</code> 或 <code>column-width</code> 不为 <code>auto</code>，包括 ``column-count<code>为</code>1`）</li>",13),p=c("code",null,"column-span",-1),h=a(" 为 "),f=c("code",null,"all",-1),m=a(" 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中（"),g={href:"https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51",target:"_blank",rel:"noopener noreferrer"},y=a("标准变更"),w=a("，"),x={href:"https://bugs.chromium.org/p/chromium/issues/detail?id=709362",target:"_blank",rel:"noopener noreferrer"},k=a("Chrome bug"),C=a("）。");n.render=function(a,t){const n=e("OutboundLink");return o(),d(i,null,[r,s,u,c("ul",null,[b,c("li",null,[p,h,f,m,c("a",g,[y,l(n)]),w,c("a",x,[k,l(n)]),C])])],64)};export{n as default};
