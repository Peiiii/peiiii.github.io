import{e as n}from"./app.6dbfcf78.js";const a={},s=n('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>referer （引用页），常用于防盗链，当使用 CDN、OSS 时经常会碰到类似的提示。</p><blockquote><p>referer 正确英文为 referrer，但由于早期 HTTP 规范的拼写错误，为了保持向后兼容也就将错就错了。</p></blockquote><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">Syntax:</span>\tvalid_referers none | blocked | server_names | string ...</span><span class="token punctuation">;</span>\n<span class="token directive"><span class="token keyword">Default:</span> —\nContext: server, location\n\n<span class="token comment"># Example</span>\nlocation /</span> <span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">valid_referers</span> none blocked *.example.com example.* nginx.example.top/foo/ ~\\.google\\.</span><span class="token punctuation">;</span>\n\n  <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$invalid_referer</span>)</span> <span class="token punctuation">{</span>\n      <span class="token directive"><span class="token keyword">return</span> <span class="token number">403</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token directive"><span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;valid_referers<span class="token escape entity">\\n</span>&#39;</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><h3 id="_1-example-com" tabindex="-1"><a class="header-anchor" href="#_1-example-com" aria-hidden="true">#</a> 1. *.example.com</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -e <span class="token string">&#39;http://dev.example.com&#39;</span> nginx.example.com\n<span class="token comment"># 等价于</span>\n<span class="token function">curl</span> -H <span class="token string">&#39;referer: http://dev.example.com&#39;</span> nginx.example.com\n<span class="token comment"># HTTP/1.1 200 OK</span>\n<span class="token comment"># valid_referers</span>\n\n<span class="token function">curl</span> -ie <span class="token string">&#39;http://dev.aexample.com&#39;</span> nginx.example.com\n<span class="token comment"># HTTP/1.1 403 Forbidden</span>\n</code></pre></div><h3 id="_2-example" tabindex="-1"><a class="header-anchor" href="#_2-example" aria-hidden="true">#</a> 2. example.*</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -ie <span class="token string">&#39;http://example.org&#39;</span> nginx.example.com\n<span class="token comment"># HTTP/1.1 200 OK</span>\n<span class="token comment"># valid_referers</span>\n\n<span class="token function">curl</span> -ie <span class="token string">&#39;http://dev.example.org&#39;</span> nginx.example.com\n<span class="token comment"># HTTP/1.1 403 Forbidden</span>\n\n<span class="token function">curl</span> -ie <span class="token string">&#39;http://example.org/aaa&#39;</span> nginx.example.com\n<span class="token comment"># HTTP/1.1 200 OK</span>\n<span class="token comment"># valid_referers</span>\n</code></pre></div><h3 id="_3-nginx-example-top-foo" tabindex="-1"><a class="header-anchor" href="#_3-nginx-example-top-foo" aria-hidden="true">#</a> 3. nginx.example.top/foo/</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">curl</span> -ie <span class="token string">&#39;http://nginx.example.top&#39;</span> nginx.example.com\n<span class="token comment"># HTTP/1.1 403 Forbidden</span>\n\n<span class="token function">curl</span> -ie <span class="token string">&#39;http://nginx.example.top/aaa&#39;</span> nginx.example.com\n<span class="token comment"># HTTP/1.1 403 Forbidden</span>\n\n<span class="token function">curl</span> -ie <span class="token string">&#39;http://nginx.example.top/foo&#39;</span> nginx.example.com\n<span class="token comment"># HTTP/1.1 403 Forbidden</span>\n<span class="token function">curl</span> -ie <span class="token string">&#39;http://nginx.example.top/foo/&#39;</span> nginx.example.com\n<span class="token comment"># HTTP/1.1 200 OK</span>\n<span class="token comment"># valid_referers</span>\n\n<span class="token function">curl</span> -ie <span class="token string">&#39;http://nginx.example.top/foo/aa&#39;</span> nginx.example.com\n<span class="token comment"># HTTP/1.1 200 OK</span>\n<span class="token comment"># valid_referers</span>\n</code></pre></div>',12);a.render=function(n,a){return s};export{a as default};
