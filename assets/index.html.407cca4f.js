import{r as n,o as a,c as e,a as s,b as t,w as l,F as o,d as r,e as i}from"./app.6dbfcf78.js";const p={},c=s("h1",{id:"快速上手-centos",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#快速上手-centos","aria-hidden":"true"},"#"),r(" 快速上手 CentOS")],-1),u=r("如果是新手，那么不妨先从虚拟机开始，此处选用 "),h={href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"},d=r("VirtualBox"),m=r("。"),f=r("接着需要准备好 CentOS 的 ISO 文件，此处选用 "),b={href:"https://mirrors.tuna.tsinghua.edu.cn/centos/7.6.1810/isos/x86_64/",target:"_blank",rel:"noopener noreferrer"},g=r("CentOS7-1810"),k=r(" 版本。"),S=r("虚拟机中加载镜像大同小异，可参考"),O=r("加载 manjaro"),x=r(" 。"),A=s("h2",{id:"在虚拟机中安装-centos",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#在虚拟机中安装-centos","aria-hidden":"true"},"#"),r(" 在虚拟机中安装 CentOS")],-1),E=s("p",null,"启动后会进入安装界面，并出现以下几个选项：",-1),y=s("ul",null,[s("li",null,"Install CentOS 7"),s("li",null,"Test this media & install CentOS 7"),s("li",null,"Troubleshooting（排除故障）"),s("li",null,"Press Tab for full configuration options on menu items")],-1),C=r("一般直接选中 Install 即可，当然你也可以按下 Tab 键进行额外 "),T=r("配置"),v=r("。"),I=i('<h3 id="_1-localization" tabindex="-1"><a class="header-anchor" href="#_1-localization" aria-hidden="true">#</a> 1. LOCALIZATION</h3><ul><li>DATE &amp; TIME：修改为 Asia Shanghai；</li><li>KEYBOARD：默认即可；</li><li>LANGUAGE SUPPORT：默认即可。</li></ul><h3 id="_2-software" tabindex="-1"><a class="header-anchor" href="#_2-software" aria-hidden="true">#</a> 2. SOFTWARE</h3><ul><li>INSTALLATION SOURCE：无需改动；</li><li>SOFTWARE SELECTION：Minimal Install <ul><li>[x] Debugging Tools（调试工具）</li><li>[x] Compatibility Libraries（兼容库）</li><li>[x] Development Tools（开发工具）</li><li>[x] System Administration Tools（管理员工具）</li></ul></li></ul><h3 id="_3-system" tabindex="-1"><a class="header-anchor" href="#_3-system" aria-hidden="true">#</a> 3. SYSTEM</h3>',5),w=s("p",null,[r("INSTALLATION DESTINATION：选择 "),s("code",null,"I will configure partitioning"),r("。")],-1),_=s("p",null,"默认选项是 LVM（逻辑卷管理，动态分配主机磁盘大小），软件实现的动态调整，在高并发状态会导致磁盘性能下降（疑问句？按我所想其功能类似 RAID0 应该不会导致性能下降才对。）;。将其修改为 Standard Partition。",-1),B=r("分区可参考 "),D=r("Manjaro"),N=r(" 的手动分区来，不过 Manjaro 是桌面环境会存在一些区别。"),L=s("li",null,[s("p",null,"KDUMP：学习时可关闭；")],-1),j=s("p",null,"NETWORK & HOST NAME：可在此处查看到之前 tab 修改的网卡命名是否生效了，Host name 改为喜欢的名字即可。",-1),M=r("修改完 Host name，接着点击 Configure 进行配置 "),P=r("："),R=s("li",null,"General：启用 Automatically connect；",-1),F=r("IPv4 Settings：Method 修改为 Manual，点击 Add 添加"),U={href:"https://zh.wikipedia.org/wiki/%E4%B8%93%E7%94%A8%E7%BD%91%E7%BB%9C",target:"_blank",rel:"noopener noreferrer"},z=r("私有网络"),G=r("，配置对应的 Address、Netmask、Gateway、DNS。如果你对此不了解，可以还原为默认配置（Automatic DHCP），自动分配一个 IP 地址给你。"),H=s("p",null,"启用 OFF 改为 ON 即可。",-1),Y=s("li",null,[s("p",null,"SECURITY POLICY：暂时默认。")],-1),K=s("p",null,"接着点击同意，开始安装即可。在安装期间可以配置 root 密码，及创建新的用户账号及密码。 最后重启即可成功。",-1),W=s("h2",{id:"初始化-centos",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#初始化-centos","aria-hidden":"true"},"#"),r(" 初始化 CentOS")],-1),q=s("h3",{id:"更新源",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#更新源","aria-hidden":"true"},"#"),r(" 更新源")],-1),V=r("CentOS 安装完毕，首先应该修改源，并更新到最新的系统。此处选用阿里云的源，"),X={href:"https://mirrors.tuna.tsinghua.edu.cn/",target:"_blank",rel:"noopener noreferrer"},Z=r("清华源"),J=r("，"),Q={href:"http://mirrors.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"},$=r("中科大源"),nn=r("也可。"),an=i('<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 安装工具 wget 或者 curl</span>\nyum <span class="token function">install</span> <span class="token function">wget</span> -y\n\n<span class="token comment"># 备份源</span>\n<span class="token function">mv</span> /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak\n\n<span class="token comment"># 下载阿里云源</span>\n<span class="token function">curl</span> -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo\n<span class="token function">curl</span> -o /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo\n\n<span class="token comment"># 清理、生成缓存</span>\nyum clean cache\nyum makecache\n</code></pre></div><h3 id="更新系统" tabindex="-1"><a class="header-anchor" href="#更新系统" aria-hidden="true">#</a> 更新系统</h3><p>更换源之后就可以使用国内的镜像了，否则下载速度太慢。</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yum update -y\n</code></pre></div><h3 id="常用包组" tabindex="-1"><a class="header-anchor" href="#常用包组" aria-hidden="true">#</a> 常用包组</h3><p>一般在安装系统时需要安装的软件包组。</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">groups</span> mark convert\n\n<span class="token comment"># 查看所有包组名称</span>\nyum grouplist\n\n<span class="token comment"># 如果缺乏部分包组，指定该包组</span>\nyum groupinstall <span class="token string">&quot;Cinnamon&quot;</span> -y\n</code></pre></div><h3 id="常用工具" tabindex="-1"><a class="header-anchor" href="#常用工具" aria-hidden="true">#</a> 常用工具</h3><p>更新完系统后还需要一些常用的工具，使用 Ubuntu Server 的时候同样需要安装，只不过指令换为 <code>apt install</code>。</p><div class="language-bash ext-sh"><pre class="language-bash"><code>yum <span class="token function">install</span> tree nmap dos2unix lrzsz <span class="token function">nc</span> <span class="token function">lsof</span> <span class="token function">wget</span> tcpdump <span class="token function">htop</span> iftop iotop sysstat nethogs psmisc net-tools bash-completion vim-enhanced -y\n</code></pre></div><h2 id="修改-centos-配置" tabindex="-1"><a class="header-anchor" href="#修改-centos-配置" aria-hidden="true">#</a> 修改 CentOS 配置</h2><h3 id="_1-网卡名-ethx" tabindex="-1"><a class="header-anchor" href="#_1-网卡名-ethx" aria-hidden="true">#</a> 1. 网卡名 ethX</h3><p>CentOS7 之前的 ethX 数字编号的网卡命名往往不一定准确对应网卡接口，所以 CentOS7 （enps）就解决了该问题，不过这会影响以往的习惯，所以还可以将命名改回来。</p><p>可以通过两种形式进行修改：</p>',14),en=i('<li><p>形式一，需要在安装系统时，光标移至 Install CentOS 7 上，按下 tab 后追加：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 需要注意和之前的内容有一个空格</span>\nnet.ifnames<span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">biosdevname</span><span class="token operator">=</span><span class="token number">0</span>\n</code></pre></div></li>',1),sn=r("形式二"),tn=r("。");p.render=function(r,i){const p=n("OutboundLink"),ln=n("RouterLink"),on=n("Badge");return a(),e(o,null,[c,s("p",null,[u,s("a",h,[d,t(p)]),m]),s("p",null,[f,s("a",b,[g,t(p)]),k]),s("p",null,[S,t(ln,{to:"/os/manjaro/how-to-install-manjaro-on-virtualbox.html#%E8%99%9A%E6%8B%9F%E6%9C%BA%E4%B8%AD%E5%8A%A0%E8%BD%BD-manjaro"},{default:l((()=>[O])),_:1}),x]),A,E,y,s("p",null,[C,t(ln,{to:"/os/centos/how-to-install-centos-on-virtualbox.html#%E9%85%8D%E7%BD%AE"},{default:l((()=>[T])),_:1}),v]),I,s("ul",null,[s("li",null,[w,_,s("p",null,[B,t(ln,{to:"/os/manjaro/how-to-install-manjaro-on-virtualbox.html#%E5%AE%89%E8%A3%85-manjaro"},{default:l((()=>[D])),_:1}),N])]),L,s("li",null,[j,s("p",null,[M,t(on,{text:"勿忘",type:"error"}),P]),s("ol",null,[R,s("li",null,[F,s("a",U,[z,t(p)]),G])]),H]),Y]),K,W,q,s("p",null,[V,s("a",X,[Z,t(p)]),J,s("a",Q,[$,t(p)]),nn]),an,s("ol",null,[en,s("li",null,[s("p",null,[t(ln,{to:"/os/centos/modify-the-network-named-eth.html"},{default:l((()=>[sn])),_:1}),tn])])])],64)};export{p as default};
