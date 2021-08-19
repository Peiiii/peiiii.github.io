import{r as n,o as s,c as a,a as t,b as p,F as o,d as c,e}from"./app.6dbfcf78.js";const u={mounted(){this.drawRoundCorner(),this.drawCircle()},methods:{drawRoundCorner(){const n=this.$refs.roundCorner.getContext("2d");this.roundedImage(n,10,10,280,280,10),n.strokeStyle="#004643",n.stroke(),n.fillStyle="#f9bc60",n.fill(),n.restore()},drawCircle(){const n=this.$refs.circle.getContext("2d");n.save(),n.beginPath(),n.arc(150,150,130,0,2*Math.PI,!1),n.strokeStyle="#232946",n.stroke(),n.clip(),n.fillStyle="#eebbc3",n.fill(),n.restore()},roundedImage(n,s,a,t,p,o){n.beginPath(),n.moveTo(s+o,a),n.lineTo(s+t-o,a),n.quadraticCurveTo(s+t,a,s+t,a+o),n.lineTo(s+t,a+p-o),n.quadraticCurveTo(s+t,a+p,s+t-o,a+p),n.lineTo(s+o,a+p),n.quadraticCurveTo(s,a+p,s,a+p-o),n.lineTo(s,a+o),n.quadraticCurveTo(s,a,s+o,a),n.closePath()}}},l=t("h2",{id:"border-radius",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#border-radius","aria-hidden":"true"},"#"),c(" border-radius")],-1),i=t("p",null,"CSS 中很简单的东西，Canvas 则稍有麻烦。",-1),r={style:{display:"flex","align-items":"center","justify-content":"space-between"}},k={ref:"roundCorner",width:"300",height:"300"},d={ref:"circle",width:"300",height:"300"},h=e('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">drawRoundCorner</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">drawCircle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">drawRoundCorner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> roundCorner <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>roundCorner\n      <span class="token keyword">const</span> roundCornerCtx <span class="token operator">=</span> roundCorner<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span>\n\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">roundedImage</span><span class="token punctuation">(</span>roundCornerCtx<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">280</span><span class="token punctuation">,</span> <span class="token number">280</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>\n      roundCornerCtx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&#39;#004643&#39;</span>\n      roundCornerCtx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      roundCornerCtx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;#f9bc60&#39;</span>\n      roundCornerCtx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      roundCornerCtx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">drawCircle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>circle\n      <span class="token keyword">const</span> circleCtx <span class="token operator">=</span> circle<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span>\n\n      circleCtx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      circleCtx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      circleCtx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>\n      circleCtx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&#39;#232946&#39;</span>\n      circleCtx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      circleCtx<span class="token punctuation">.</span><span class="token function">clip</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      circleCtx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;#eebbc3&#39;</span>\n      circleCtx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      circleCtx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">roundedImage</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">,</span> radius</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>x <span class="token operator">+</span> radius<span class="token punctuation">,</span> y<span class="token punctuation">)</span>\n      ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>x <span class="token operator">+</span> width <span class="token operator">-</span> radius<span class="token punctuation">,</span> y<span class="token punctuation">)</span>\n      ctx<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span>x <span class="token operator">+</span> width<span class="token punctuation">,</span> y<span class="token punctuation">,</span> x <span class="token operator">+</span> width<span class="token punctuation">,</span> y <span class="token operator">+</span> radius<span class="token punctuation">)</span>\n      ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>x <span class="token operator">+</span> width<span class="token punctuation">,</span> y <span class="token operator">+</span> height <span class="token operator">-</span> radius<span class="token punctuation">)</span>\n      ctx<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span>x <span class="token operator">+</span> width<span class="token punctuation">,</span> y <span class="token operator">+</span> height<span class="token punctuation">,</span> x <span class="token operator">+</span> width <span class="token operator">-</span> radius<span class="token punctuation">,</span> y <span class="token operator">+</span> height<span class="token punctuation">)</span>\n      ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>x <span class="token operator">+</span> radius<span class="token punctuation">,</span> y <span class="token operator">+</span> height<span class="token punctuation">)</span>\n      ctx<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">+</span> height<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token operator">+</span> height <span class="token operator">-</span> radius<span class="token punctuation">)</span>\n      ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">+</span> radius<span class="token punctuation">)</span>\n      ctx<span class="token punctuation">.</span><span class="token function">quadraticCurveTo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> x <span class="token operator">+</span> radius<span class="token punctuation">,</span> y<span class="token punctuation">)</span>\n      ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',2),f={href:"https://codepen.io/movii/pen/QBgqeY",target:"_blank",rel:"noopener noreferrer"},x=c("Canvas draw image with round corners and circle clip");u.render=function(c,e,u,C,y,g){const b=n("OutboundLink");return s(),a(o,null,[l,i,t("div",r,[t("canvas",k,null,512),t("canvas",d,null,512)]),h,t("ul",null,[t("li",null,[t("a",f,[x,p(b)])])])],64)};export{u as default};
