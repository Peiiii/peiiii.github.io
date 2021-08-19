import{e as n}from"./app.6dbfcf78.js";const s={},a=n('<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p>当对调用表达式进行求值的时候，首先计算函数表达式，然后计算参数表达式，得到一组参数值。如果函数表达式的值不是一个可调用对象，则抛出一个类型错误异常（所有的函数都是可调用的，即使宿主对象不是函数它也有可能被调用）。然后，实参的值将依次赋值给形参，这些形参是定义函数时指定的，接下来开始执行函数体。如果函数使用 return 语句给出一个返回值，那么这个返回值就是整个调用表达式的值。否则，调用表达式的值为 undefined。</p><p>任何一个调用表达式都包含一对圆括号和左括号之前的表达式。如果这个表达式是一个属性访问表达式，那么这个调用被称为 <strong>方法调用</strong>。在方法调用中，执行函数体的时候，作为属性访问主体的对象和数组便是其调用方法内 this 的指向。这种特性使得在面向对象的编程范例中，函数（其 OO 名称为 “方法”）可以调用其宿主对象。</p><p>非方法调用的调用表达式通常使用全局对象作为 this 关键字的值。然而在 ECMAScript 5 中，那些通过严格模式定义的函数在调用时将使用 undefined 作为 this 的值，this 也不会指向全局对象。</p><h2 id="作为值" tabindex="-1"><a class="header-anchor" href="#作为值" aria-hidden="true">#</a> 作为值</h2><blockquote><p>引申：JavaScript 中，变量没有类型，值才有类型。</p></blockquote><p>在 JavaScript 中，函数不仅是一种语法，也是值，也就是说可以将函数赋值给变量，存储在对象的属性或数组的元素中，作为参数传入另外一个函数等（callback）：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x<span class="token operator">*</span>x<span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token comment">// 函数的名字实际上是看不见的，square 仅仅是变量的名字，这个变量指代函数对象</span>\n<span class="token keyword">var</span> s <span class="token operator">=</span> square<span class="token punctuation">;</span>\n<span class="token function">square</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 16</span>\n<span class="token function">s</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 16</span>\n\n<span class="token comment">// 匿名函数</span>\n<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token function-variable function">square</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x<span class="token operator">*</span>x<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span> \n<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x<span class="token operator">*</span>x<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\no<span class="token punctuation">.</span><span class="token function">square</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 16</span>\na<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 16，先计算函数表达式，然后计算参数表达式</span>\n</code></pre></div>',8);s.render=function(n,s){return a};export{s as default};
