import{r as a,o as s,c as e,a as n,b as t,F as l,d as o,e as r}from"./app.6dbfcf78.js";const c={},p=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),o(" 介绍")],-1),i={href:"https://zh.wikipedia.org/wiki/%E9%87%8D%E5%AE%9A%E5%90%91_(%E8%AE%A1%E7%AE%97%E6%9C%BA)",target:"_blank",rel:"noopener noreferrer"},d=o("重定向"),h=o("标准 IO 流：标准输入（STDIN，文件描述符 0）、标准输出（STDOUT，文件描述符 1）、标准错误（STDERR，文件描述符 2）。"),u=r('<h2 id="输出重定向" tabindex="-1"><a class="header-anchor" href="#输出重定向" aria-hidden="true">#</a> 输出重定向</h2><h3 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法" aria-hidden="true">#</a> 1. 语法</h3><blockquote><p>切记，执行输出时记得提前备份，防止覆盖源文件 😢。</p></blockquote><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">&gt;</span> <span class="token function">file</span>\n</code></pre></div><p>执行命令 command 然后将结果输出至 file 文件中。</p><h3 id="_2-示例" tabindex="-1"><a class="header-anchor" href="#_2-示例" aria-hidden="true">#</a> 2. 示例</h3><ul><li><p>echo：基础操作；</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">&gt;</span> linux.txt\n</code></pre></div></li><li><p>cat：普遍的使用；</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">cat</span> linux.txt <span class="token operator">&gt;</span> linux1.txt\n</code></pre></div></li><li><p>command：command 解释。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">which</span> google-chrome-stable <span class="token operator">&gt;</span> linux.txt\n</code></pre></div></li></ul><h3 id="_3-扩展内容" tabindex="-1"><a class="header-anchor" href="#_3-扩展内容" aria-hidden="true">#</a> 3. 扩展内容</h3><ul><li><p>错误输入：命令错误时不会生效，修改默认文件描述符输入错误提示信息；</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cho <span class="token string">&quot;hello world&quot;</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> test.txt\n</code></pre></div></li><li><p>追加输入：追加内容。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">&gt;&gt;</span> test.txt\n</code></pre></div></li></ul><h2 id="输入重定向" tabindex="-1"><a class="header-anchor" href="#输入重定向" aria-hidden="true">#</a> 输入重定向</h2><h3 id="_1-语法-1" tabindex="-1"><a class="header-anchor" href="#_1-语法-1" aria-hidden="true">#</a> 1. 语法</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">&lt;</span> <span class="token function">file</span>\n</code></pre></div><p>可以从文件获取输入。</p><h3 id="_2-示例-1" tabindex="-1"><a class="header-anchor" href="#_2-示例-1" aria-hidden="true">#</a> 2. 示例</h3><p>一般输入重定向会配合输出重定向进行使用（就我个人而言）。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># command &lt; input &gt; out</span>\n<span class="token function">grep</span> -v <span class="token string">&quot;tt.&quot;</span> <span class="token operator">&lt;</span> test.txt <span class="token operator">&gt;</span> newTest.txt\n</code></pre></div><h2 id="核心使用" tabindex="-1"><a class="header-anchor" href="#核心使用" aria-hidden="true">#</a> 核心使用</h2>',17),g=o("常利用"),b={href:"https://zh.wikipedia.org/wiki//dev/null",target:"_blank",rel:"noopener noreferrer"},k=o("空设备"),x=o("（/dev/null）和重定向来丢弃不需要的输出流。"),f=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"cat"),o(" /etc/hosts "),n("span",{class:"token operator"},">"),o(" /dev/null\n")])])],-1),v=o("很多时候会将其配合 "),m=n("code",null,"2>&1",-1),E=o(" 进行使用，可参考 "),_={href:"http://www.kissyu.org/2016/12/25/shell%E4%B8%AD%3E%20:dev:null%202%20%3E%20&1%E6%98%AF%E4%BB%80%E4%B9%88%E9%AC%BC%EF%BC%9F/",target:"_blank",rel:"noopener noreferrer"},w=o("shell中>/dev/null 2>&1是什么鬼"),q=o("。");c.render=function(o,r){const c=a("OutboundLink");return s(),e(l,null,[p,n("p",null,[n("a",i,[d,t(c)]),h]),u,n("p",null,[g,n("a",b,[k,t(c)]),x]),f,n("p",null,[v,m,E,n("a",_,[w,t(c)]),q])],64)};export{c as default};
