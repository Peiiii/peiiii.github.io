import{r as a,o as n,c as e,a as s,b as o,F as c,e as t,d as p}from"./app.6dbfcf78.js";const l={},d=t('<h2 id="等价性" tabindex="-1"><a class="header-anchor" href="#等价性" aria-hidden="true">#</a> 等价性</h2><blockquote><p>推荐在任何情景下摒弃 <code>==</code> 操作符，使用 <code>===</code> 替代。</p></blockquote><p>示例：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 故意混淆视野的取反操作，其实比较容易理解</span>\n<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment">// true</span>\n<span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment">// true</span>\n<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// false</span>\n<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// true</span>\n<span class="token comment">// 如果上面的解决了，那这个呢？</span>\n<span class="token number">0</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token comment">// false</span>\n</code></pre></div><div class="custom-container tip"><p class="custom-container-title">默认的 falsy</p><ul><li><code>&quot;&quot;</code> （空字符串）</li><li><code>0</code>、<code>-0</code>、<code>NaN</code> （非法的 <code>Number</code>）</li><li><code>null</code>、<code>undefined</code></li><li><code>false</code></li></ul></div><h2 id="非等价性" tabindex="-1"><a class="header-anchor" href="#非等价性" aria-hidden="true">#</a> 非等价性</h2><p><code>&lt;</code>、<code>&gt;</code>、<code>&lt;=</code> 和 <code>&gt;=</code> 用于非等价性比较（关系比较）。</p><p>当比较的双方都为 <code>String</code> 时按照字典顺序（typical alphabetic rules）比较，当其中一方为 <code>Number</code> 时则均转为 <code>Number</code> 再比较：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token string">&quot;aba&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;abb&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token string">&quot;43&quot;</span> <span class="token operator">&gt;</span> <span class="token string">&quot;42&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token string">&quot;43&quot;</span> <span class="token operator">&gt;</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre></div><p>当不同类型的值进行比较时：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token string">&quot;aba&quot;</span> <span class="token operator">&gt;</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token string">&quot;aba&quot;</span> <span class="token operator">&lt;</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token string">&quot;aba&quot;</span> <span class="token operator">==</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n\n<span class="token comment">// 参考下方的解析，是由于 &quot;aba&quot; 转为数字时结果为 NaN</span>\n<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;aba&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>\n</code></pre></div><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h2>',12),r=p("关于这一部分 ECMA 有规范的说明："),i={href:"https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3",target:"_blank",rel:"noopener noreferrer"},u=p("5.1"),k=p(" 版、"),m={href:"http://www.ecma-international.org/ecma-262/6.0/#sec-7.2.12",target:"_blank",rel:"noopener noreferrer"},b=p("6.0"),g=p(" 版。"),h=t('<p>偷懒，借用一下阮一峰的翻译：</p><ol><li>如果 <code>x</code> 不是正常值（比如抛出一个错误），中断执行。</li><li>如果 <code>y</code> 不是正常值，中断执行。</li><li>如果 <code>Type(x)</code> 与 <code>Type(y)</code> 相同，执行严格相等运算 <code>x === y</code>。</li><li>如果 <code>x</code> 是 <code>null</code>，<code>y</code> 是 <code>undefined</code>，返回 <code>true</code>。</li><li>如果 <code>x</code> 是 <code>undefined</code>，<code>y</code> 是 <code>null</code>，返回 <code>true</code>。</li><li>如果 <code>Type(x)</code> 是数值，<code>Type(y)</code> 是字符串，返回 <code>x == ToNumber(y)</code> 的结果。</li><li>如果 <code>Type(x)</code> 是字符串，<code>Type(y)</code> 是数值，返回 <code>ToNumber(x) == y</code> 的结果。</li><li>如果 <code>Type(x)</code> 是布尔值，返回 <code>ToNumber(x) == y</code> 的结果。</li><li>如果 <code>Type(y)</code> 是布尔值，返回 <code>x == ToNumber(y)</code> 的结果。</li><li>如果 <code>Type(x)</code> 是字符串或数值或 <code>Symbol</code> 值，<code>Type(y)</code> 是对象，返回 <code>x == ToPrimitive(y)</code> 的结果。</li><li>如果 <code>Type(x)</code> 是对象，<code>Type(y)</code> 是字符串或数值或 <code>Symbol</code> 值，返回 <code>ToPrimitive(x) == y</code> 的结果。</li><li>返回 <code>false</code>。</li></ol><p>根据上述规则则可以得到：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 不符合以上 11 种条件，返回 false</span>\n<span class="token number">0</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token comment">// false</span>\n</code></pre></div><h2 id="toprimitive" tabindex="-1"><a class="header-anchor" href="#toprimitive" aria-hidden="true">#</a> ToPrimitive</h2><p>对于以上的规则其中比较难以理解的为该部分了，对象转为原始值需要考虑三种（Boolean、String、Number）情况。</p><h3 id="_1-number" tabindex="-1"><a class="header-anchor" href="#_1-number" aria-hidden="true">#</a> 1. Number</h3><p>所有对象（包括数组、函数）都转为 true。</p><h3 id="_2-string" tabindex="-1"><a class="header-anchor" href="#_2-string" aria-hidden="true">#</a> 2. String</h3><p>对象转为 <strong>String</strong> 经历以下步骤：</p><ol><li>如果对象具有 <code>toString()</code> 方法，则调用这个方法。如果它返回一个原始值，JavaScript 将这个值转为字符串（如果本身不是字符串的话），并返回这个字符串结果。</li><li>如果对象没有 <code>toString()</code> 方法，或者这个方法并不返回一个原始值，那么 JavaScript 会调用 <code>valueOf()</code> 方法。如果存在这个方法，则 JavaScript 调用它。如果返回值是原始值，JavaScript 将这个值转为字符串（如果本身不是字符串的话），并返回这个字符串结果。</li><li>否则，JavaScript 无法从 <code>toString()</code> 或 <code>valueOf()</code> 获得一个原始值，因此这时它将抛出一个类型错误异常。</li></ol><h3 id="_3-number" tabindex="-1"><a class="header-anchor" href="#_3-number" aria-hidden="true">#</a> 3. Number</h3><p>对象转为 <strong>Number</strong> 顺序有些区别：</p><ol><li>如果对象具有 <code>valueOf()</code> 方法，后者返回一个原始值，则 JavaScript 将这个原始值转为数字（如果需要的话），并返回这个数字。</li><li>否则，如果对象具有 <code>toString()</code> 方法，后者返回一个原始值，则 JavaScript 将其转换并返回。</li><li>否则，JavaScript 抛出一个类型错误异常。</li></ol>',14);l.render=function(t,p){const l=a("OutboundLink");return n(),e(c,null,[d,s("p",null,[r,s("a",i,[u,o(l)]),k,s("a",m,[b,o(l)]),g]),h],64)};export{l as default};
