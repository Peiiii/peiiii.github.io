import{e as a}from"./app.6dbfcf78.js";const e={},n=a('<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>简单来说，容器是镜像的一个运行实例。所不同的是，镜像是静态的只读文件，而容器带有运行时需要的可写文件层，同时，容器中的应用进程处于运行状态。</p><h2 id="状态" tabindex="-1"><a class="header-anchor" href="#状态" aria-hidden="true">#</a> 状态</h2><h3 id="_1-运行中的容器" tabindex="-1"><a class="header-anchor" href="#_1-运行中的容器" aria-hidden="true">#</a> 1. 运行中的容器</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token function">ps</span>\n\n<span class="token comment"># -a 所有的</span>\n<span class="token comment"># -f 可以按需求进行过滤</span>\n<span class="token comment"># 过滤参数 status：One of created, restarting, running, removing, paused, exited, or dead</span>\n</code></pre></div><h3 id="_2-容器日志" tabindex="-1"><a class="header-anchor" href="#_2-容器日志" aria-hidden="true">#</a> 2. 容器日志</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker logs [OPTIONS] CONTAINER</span>\ndocker logs ttubuntu\n</code></pre></div><h3 id="_3-容器信息" tabindex="-1"><a class="header-anchor" href="#_3-容器信息" aria-hidden="true">#</a> 3. 容器信息</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 具体信息</span>\ndocker insepect ttubuntu\n\n<span class="token comment"># 内部进程</span>\ndocker <span class="token function">top</span> ttubuntu\n\n<span class="token comment"># 统计信息</span>\ndocker stats ttubuntu\n</code></pre></div><h3 id="_4-容器变更" tabindex="-1"><a class="header-anchor" href="#_4-容器变更" aria-hidden="true">#</a> 4. 容器变更</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token function">diff</span> ttubuntu\n</code></pre></div><h3 id="_5-端口映射" tabindex="-1"><a class="header-anchor" href="#_5-端口映射" aria-hidden="true">#</a> 5. 端口映射</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker port ttubuntu\n</code></pre></div><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2><h3 id="_1-创建容器" tabindex="-1"><a class="header-anchor" href="#_1-创建容器" aria-hidden="true">#</a> 1. 创建容器</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker create -it --name ttubuntu ubuntu <span class="token comment"># 默认新创建的容器为停止状态</span>\n</code></pre></div><ul><li><code>-i</code> 让容器的标准输入保持打开</li><li><code>-t</code> 让 Docker 分配一个伪终端并绑定到容器上</li></ul><h3 id="_2-启动容器" tabindex="-1"><a class="header-anchor" href="#_2-启动容器" aria-hidden="true">#</a> 2. 启动容器</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker start [OPTIONS] CONTAINER [CONTAINER...]</span>\ndocker start ttubuntu\n</code></pre></div><h3 id="_3-执行容器" tabindex="-1"><a class="header-anchor" href="#_3-执行容器" aria-hidden="true">#</a> 3. 执行容器</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run ubuntu <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span>\n</code></pre></div><p>等价于先执行 <code>docker create</code> 再执行 <code>docker start</code>，在输出 <code>hello world</code> 后容器自动停止。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 守护态 -d</span>\ndocker run -d ubuntu /bin/sh -c <span class="token string">&quot;while true; do echo hello world; sleep 1;done&quot;</span>\n</code></pre></div><h3 id="_4-暂停-恢复容器" tabindex="-1"><a class="header-anchor" href="#_4-暂停-恢复容器" aria-hidden="true">#</a> 4. 暂停/恢复容器</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker pause ttubuntu\n<span class="token comment"># docker unpause ttubuntu</span>\ndocker <span class="token function">ps</span>\n\n<span class="token comment"># 可见 paused 状态</span>\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                   PORTS               NAMES\n228fe9793889        ubuntu              <span class="token string">&quot;/bin/bash&quot;</span>         <span class="token number">14</span> minutes ago      Up <span class="token number">14</span> minutes <span class="token punctuation">(</span>Paused<span class="token punctuation">)</span>                       ttubuntu\n</code></pre></div><h3 id="_5-终止" tabindex="-1"><a class="header-anchor" href="#_5-终止" aria-hidden="true">#</a> 5. 终止</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker stop ttubuntu\n\n<span class="token comment"># 验证</span>\ndocker <span class="token function">ps</span> <span class="token comment"># ttubuntu 已消失</span>\n</code></pre></div><h3 id="_6-启动-重启容器" tabindex="-1"><a class="header-anchor" href="#_6-启动-重启容器" aria-hidden="true">#</a> 6. 启动/重启容器</h3><p><code>restart</code> 命令会将一个运行态的容器先终止，然后再重新启动。</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker start ttubuntu\n<span class="token comment"># docker restart ttubuntu</span>\n\n<span class="token comment"># 验证</span>\ndocker <span class="token function">ps</span> <span class="token comment"># ttubuntu 可见</span>\n</code></pre></div><h3 id="_7-清除停止状态的容器" tabindex="-1"><a class="header-anchor" href="#_7-清除停止状态的容器" aria-hidden="true">#</a> 7. 清除停止状态的容器</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker container prune\n\n<span class="token comment"># 验证</span>\ndocker start ttubuntu\n<span class="token comment"># Error response from daemon: No such container: ttubuntu</span>\n</code></pre></div><h3 id="_8-删除容器" tabindex="-1"><a class="header-anchor" href="#_8-删除容器" aria-hidden="true">#</a> 8. 删除容器</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker rm [OPTIONS] CONTAINER [CONTAINER...]</span>\n<span class="token comment"># -v 可以删除容器挂载的数据卷</span>\ndocker <span class="token function">rm</span> ttubuntu\n</code></pre></div><h3 id="_9-更新容器配置" tabindex="-1"><a class="header-anchor" href="#_9-更新容器配置" aria-hidden="true">#</a> 9. 更新容器配置</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>docker update ttubuntu\n</code></pre></div><h2 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器" aria-hidden="true">#</a> 进入容器</h2><p>在使用 <code>-d</code> 参数启动容器后，容器会进入后台，无法看到容器的输出信息，可以利用 <code>docker attach</code> 或 <code>docker exec</code> 进入容器。</p><p><code>attach</code> 不会在容器中创建进程执行额外的命令，只是附着到容器上；<code>exec</code> 会在运行的容器上创建进程执行新的命令。</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> -it ttubuntu <span class="token function">sh</span>\n</code></pre></div><h2 id="分享" tabindex="-1"><a class="header-anchor" href="#分享" aria-hidden="true">#</a> 分享</h2><h3 id="_1-导出容器" tabindex="-1"><a class="header-anchor" href="#_1-导出容器" aria-hidden="true">#</a> 1. 导出容器</h3><p>不管容器是否处于运行状态，都可以导出。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker export [OPTIONS] CONTAINER</span>\ndocker <span class="token builtin class-name">export</span> -o ubuntu-latest.tar ttubuntu\n</code></pre></div><h3 id="_2-导入容器" tabindex="-1"><a class="header-anchor" href="#_2-导入容器" aria-hidden="true">#</a> 2. 导入容器</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]</span>\ndocker <span class="token function">import</span> http://example.com/exampleimage.tgz\ndocker <span class="token function">import</span> ubuntu-latest.tar\n</code></pre></div><h3 id="_3-复制文件" tabindex="-1"><a class="header-anchor" href="#_3-复制文件" aria-hidden="true">#</a> 3. 复制文件</h3><p>主机和容器间复制文件。</p><div class="language-bash ext-sh"><pre class="language-bash"><code>docker <span class="token function">cp</span> data ttubuntu:/tmp/\n</code></pre></div>',49);e.render=function(a,e){return n};export{e as default};
