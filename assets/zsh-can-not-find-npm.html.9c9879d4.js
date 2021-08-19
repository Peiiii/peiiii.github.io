import{e as n}from"./app.c53b77a8.js";const s={},a=n('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>一直以来都是开机使用 <code>bash</code>，在之后再切换到 <code>zsh</code>。最近设置为开机切换到 <code>zsh</code>，就导致使用 <code>npm</code> 命令时提示 <code>zsh: command not found</code>。</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><p>首先需要确认是否是 <code>PATH</code> 出现了问题：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> -v <span class="token comment"># zsh: command not found</span>\nnode -v <span class="token comment"># v12.4.0</span>\n<span class="token comment"># 可以发现环境不存在问题</span>\n<span class="token comment"># 接着查看 .bashrc 配置是否有说明</span>\n<span class="token function">less</span> ~/.bashrc\n<span class="token comment"># 注意到存在以下内容</span>\n<span class="token comment"># export NVM_DIR=&quot;$HOME/.nvm&quot;</span>\n<span class="token comment"># [ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/nvm.sh&quot;  # This loads nvm</span>\n<span class="token comment"># [ -s &quot;$NVM_DIR/bash_completion&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/bash_completion&quot;  # This loads nvm bash_completion</span>\n</code></pre></div><p>于是就想起自己依赖 <code>nvm</code> 管理 <code>node</code>，将该内容追加到 <code>.zshrc</code> 中：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.zshrc\n<span class="token function">npm</span> -v <span class="token comment"># 6.12.0</span>\n</code></pre></div>',7);s.render=function(n,s){return a};export{s as default};