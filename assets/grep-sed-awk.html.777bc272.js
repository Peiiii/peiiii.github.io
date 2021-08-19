import{e as t}from"./app.6dbfcf78.js";const e={},a=t('<h2 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h2><p>grep（global regular expression print），适用于查找匹配文本，支持基础正则表达式，扩展的正则表达式需要增加 <code>-E</code> 选项或使用 <code>egrep</code> 命令。</p><h3 id="_1-命令格式" tabindex="-1"><a class="header-anchor" href="#_1-命令格式" aria-hidden="true">#</a> 1. 命令格式</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>grep [选项…] patterns 文件</p></div><h3 id="_2-常用选项" tabindex="-1"><a class="header-anchor" href="#_2-常用选项" aria-hidden="true">#</a> 2. 常用选项</h3><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-c</td><td style="text-align:center;">统计匹配的行数。</td></tr><tr><td style="text-align:center;">-i</td><td style="text-align:center;">忽略模式中的字母大小写。</td></tr><tr><td style="text-align:center;">-v</td><td style="text-align:center;">取反，列出没有匹配到的。</td></tr><tr><td style="text-align:center;">-w</td><td style="text-align:center;">匹配整个单词。</td></tr><tr><td style="text-align:center;">-n</td><td style="text-align:center;">显示匹配的行号。</td></tr><tr><td style="text-align:center;">-E</td><td style="text-align:center;">扩展正则表达式。</td></tr><tr><td style="text-align:center;">-o</td><td style="text-align:center;">仅输出文件中匹配到的部分。</td></tr></tbody></table><h3 id="_3-示例" tabindex="-1"><a class="header-anchor" href="#_3-示例" aria-hidden="true">#</a> 3. 示例</h3><ul><li><p>取出存在 name 的行：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">grep</span> name package.json\n</code></pre></div></li><li><p>取出没有 name 的行并显示行号：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">grep</span> -vn name package.json\n</code></pre></div></li><li><p>获取文件中出现 docs 的次数：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">grep</span> -o docs package.json <span class="token operator">|</span> <span class="token function">grep</span> -c docs\n<span class="token comment"># or</span>\n<span class="token function">grep</span> -o docs package.json <span class="token operator">|</span> <span class="token function">wc</span> -l\n</code></pre></div></li></ul><h2 id="sed-行" tabindex="-1"><a class="header-anchor" href="#sed-行" aria-hidden="true">#</a> sed（行）</h2><p>sed（stream edit 流编辑器），就类似于 vim，可快速实现对文件的增删改查。区别是 vim 还需要交互操作，而 sed 可以预置一组规则。</p><h3 id="_1-命令格式-1" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-1" aria-hidden="true">#</a> 1. 命令格式</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>sed [选项…] [内置命令] 文件</p></div><h3 id="_2-常用选项-1" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-1" aria-hidden="true">#</a> 2. 常用选项</h3><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-n</td><td style="text-align:center;">取消 sed 的默认输出（仅输出自己想要的）。</td></tr><tr><td style="text-align:center;">-i</td><td style="text-align:center;">直接修改文件的内容，而非输出到终端。</td></tr><tr><td style="text-align:center;">-e</td><td style="text-align:center;">脚本命令。</td></tr><tr><td style="text-align:center;">-f</td><td style="text-align:center;">脚本文件命令。</td></tr></tbody></table><h3 id="_3-内置命令" tabindex="-1"><a class="header-anchor" href="#_3-内置命令" aria-hidden="true">#</a> 3. 内置命令</h3><table><thead><tr><th style="text-align:center;">命令</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">a</td><td style="text-align:center;">append，表示追加文本。</td></tr><tr><td style="text-align:center;">d</td><td style="text-align:center;">delete，表示匹配行的文本。</td></tr><tr><td style="text-align:center;">i</td><td style="text-align:center;">insert，表示插入文本。</td></tr><tr><td style="text-align:center;">p</td><td style="text-align:center;">print，表示打印匹配行的内容。</td></tr><tr><td style="text-align:center;">s</td><td style="text-align:center;">匹配 regexp 部分内容，使用 replacement 替换 regexp 匹配的内容。</td></tr></tbody></table><h3 id="_4-示例" tabindex="-1"><a class="header-anchor" href="#_4-示例" aria-hidden="true">#</a> 4. 示例</h3><ul><li><p>替换文本中的 docs 为 hello：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;s/docs/hello/g&#39;</span> package.json\n</code></pre></div></li><li><p>删除所有含有 @ 的行：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;/@/&#39;</span>d package.json\n</code></pre></div></li><li><p>输出 20 - 23 行的内容：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">head</span> -23 package.json <span class="token operator">|</span> <span class="token function">tail</span> -3\n<span class="token comment"># or</span>\n<span class="token function">sed</span> -n <span class="token string">&#39;20,23p&#39;</span> package.json\n</code></pre></div></li><li><p>修改 20 -23 行中 bugs 为 features：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;2,3s/bugs/features/&#39;</span> package.json\n</code></pre></div></li><li><p>在第 5 行追加 hello world：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;5a hello world&#39;</span> package.json\n</code></pre></div></li><li><p>输出第 5 行到第一个包含 docs 行之间的所有行：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> -n <span class="token string">&#39;5,/docs/p&#39;</span> package.json\n</code></pre></div></li><li><p>输出 5 - 10 行的内容到新的文件中：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> -n <span class="token string">&#39;5,10w test.txt&#39;</span> package.json\n<span class="token function">cat</span> test.txt <span class="token comment"># 验证</span>\n</code></pre></div></li></ul><h2 id="awk-列" tabindex="-1"><a class="header-anchor" href="#awk-列" aria-hidden="true">#</a> awk（列）</h2><p>awk（Aho、Weingberger、Kernighan 三人姓名） 是一种编程语言，适用于处理数据和生成报告，进行更为复杂的处理。可以顺带了解下 cut。</p><p>awk 会自动给一行中的每个数据元素分配一个变量，默认情况下：</p><ul><li>$0：代表整个文本行；</li><li>$1：代表文本行中的第 1 个数据字段；</li><li>$2：代表文本行中的第 2 个数据字段；</li><li>$n：代表文本行中的第 n 个数据字段；</li><li>$NF：代表文本行中的最后一个数据字段；</li><li>$(NF-1)：代表文本行中的倒数第二个数据字段。</li></ul><h3 id="_1-命令格式-2" tabindex="-1"><a class="header-anchor" href="#_1-命令格式-2" aria-hidden="true">#</a> 1. 命令格式</h3><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>awk [选项…] pattern{action} 文件</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>awk &#39;BEGIN{ commands } pattern{ commands } END{ commands }&#39;</p></div><h3 id="_2-常用选项-2" tabindex="-1"><a class="header-anchor" href="#_2-常用选项-2" aria-hidden="true">#</a> 2. 常用选项</h3><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-F</td><td style="text-align:center;">指定分隔符。</td></tr><tr><td style="text-align:center;">-f</td><td style="text-align:center;">指定脚本文件。</td></tr><tr><td style="text-align:center;">-v</td><td style="text-align:center;">在处理过程之前，初始化变量。</td></tr></tbody></table><h3 id="_3-示例-1" tabindex="-1"><a class="header-anchor" href="#_3-示例-1" aria-hidden="true">#</a> 3. 示例</h3><p>了解其基本使用即可。</p><ul><li><p>输出第一列内容：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sed</span> -n <span class="token string">&#39;1,5p&#39;</span> /etc/passwd <span class="token operator">|</span> <span class="token function">awk</span> -F <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $1}&#39;</span>\n</code></pre></div></li><li><p>使用变量：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ var1=&quot;v1&quot;; var2=&quot;v2&quot;; var3=&quot;v3&quot;; print var1&quot;=&quot;var2&quot;=&quot;var3; }&#39;</span>\n</code></pre></div></li><li><p>输出 20 - 23 行的行号及内容：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;NR&gt;19&amp;&amp;NR&lt;24 {print NR,$0}&#39;</span> package.json\n<span class="token comment"># or</span>\n<span class="token function">awk</span> <span class="token string">&#39;NR=20,NR=21,NR=22,NR=23 {print NR,$0}&#39;</span> package.json\n</code></pre></div></li><li><p>输出含有 docs 的行：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;/docs/&#39;</span> package.json\n</code></pre></div></li></ul>',30);e.render=function(t,e){return a};export{e as default};
