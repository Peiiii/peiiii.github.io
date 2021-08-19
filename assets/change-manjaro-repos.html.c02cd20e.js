import{e as a}from"./app.6dbfcf78.js";const n={},c=a('<h2 id="切换为国内镜像" tabindex="-1"><a class="header-anchor" href="#切换为国内镜像" aria-hidden="true">#</a> 切换为国内镜像</h2><p><code>manjaro</code> 默认镜像非国内，会导致下载速度过慢，切换镜像地址：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> pacman-mirrors -i -c China -m rank\n</code></pre></div><h2 id="archlinuxcn" tabindex="-1"><a class="header-anchor" href="#archlinuxcn" aria-hidden="true">#</a> ArchlinuxCN</h2><p>ArchlinuxCN 是由 Arch Linux 中文社区维护的非官方的仓库，也就是说它会提供一些没有被 Arch Linux 收录的国产软件。 需注意它是 <code>arch</code> 的而非 <code>manjaro</code> 的，而 <code>manjaro</code> 的官方源更新滞后于 <code>arch</code>，当上游出现 <code>ABI</code> 破坏性更新时，ArchlinuxCN 会优先保证 Arch Linux 的用户体验，至于更新落后的 <code>manjaro</code> 可能就会挨打了。</p><h3 id="_1-命令行配置" tabindex="-1"><a class="header-anchor" href="#_1-命令行配置" aria-hidden="true">#</a> 1. 命令行配置</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/pacman.conf\n\n<span class="token comment"># 在最后追加</span>\n<span class="token comment"># 当然你也可以使用其他镜像</span>\n<span class="token punctuation">[</span>archlinuxcn<span class="token punctuation">]</span>\nServer <span class="token operator">=</span> https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/<span class="token variable">$arch</span>\n<span class="token comment"># Server = https://mirrors.aliyun.com/archlinuxcn/$arch</span>\n\n<span class="token comment"># 再添加源的 key</span>\n<span class="token function">sudo</span> pacman -S archlinuxcn-keyring\n\n<span class="token comment"># 更新软件列表</span>\n<span class="token function">sudo</span> pacman -Syy\n</code></pre></div><h3 id="_2-界面配置" tabindex="-1"><a class="header-anchor" href="#_2-界面配置" aria-hidden="true">#</a> 2. 界面配置</h3><p><code>Octopi</code> &gt; <code>工具</code> &gt; <code>软件源编辑器</code>。</p>',9);n.render=function(a,n){return c};export{n as default};
