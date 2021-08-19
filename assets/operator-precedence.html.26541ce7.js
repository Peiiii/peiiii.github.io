import{r as n,o as a,c as s,a as p,b as t,F as e,d as o,e as c}from"./app.6dbfcf78.js";const u={},l=p("h2",{id:"概念",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#概念","aria-hidden":"true"},"#"),o(" 概念")],-1),r=p("p",null,"运算符的优先级决定了表达式中运算执行的先后顺序，优先级高的运算符最先被执行。",-1),i=p("p",null,"虽然这句话是这么的直白，但总是会遗忘。",-1),k=p("h2",{id:"一次错误",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#一次错误","aria-hidden":"true"},"#"),o(" 一次错误")],-1),d=o("来源于一个 15年（五年前）的"),f={href:"https://segmentfault.com/q/1010000002637728",target:"_blank",rel:"noopener noreferrer"},h=o("提问"),b=o("，没想到我第一反应还是错了。"),m=c('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>n<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span> \na<span class="token punctuation">.</span>x <span class="token operator">=</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>n<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token function">alert</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// --&gt; undefined</span>\n<span class="token function">alert</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// --&gt; {n:2}</span>\n</code></pre></div><p>在这里我忽略了 <code>.</code> 的执行优先级是高于 <code>=</code> 操作的，也就是一开始 <code>a.x</code> 就指向了 <code>{n: 1}</code> 的 <code>heap 空间</code>，最后的结果也显而易见了。</p>',2);u.render=function(o,c){const u=n("OutboundLink");return a(),s(e,null,[l,r,i,k,p("p",null,[d,p("a",f,[h,t(u)]),b]),m],64)};export{u as default};
