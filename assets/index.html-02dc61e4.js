import{_ as d,X as r,Y as c,Z as n,$ as e,a1 as s,a3 as t,a2 as i,E as o}from"./framework-a8949fcd.js";const p={},u=i(`<h1 id="hello-vuepress" tabindex="-1"><a class="header-anchor" href="#hello-vuepress" aria-hidden="true">#</a> Hello VuePress</h1><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><p>VuePress 遵循 “约定优于配置” 的原则，推荐的目录结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong><br>请留意目录名的大写。</p></blockquote><p>*<code> docs/.vuepress</code>: 用于存放全局的配置、组件、静态资源等。</p><ul><li><code>docs/.vuepress/components</code>: 该目录中的 Vue 组件将会被自动注册为全局组件。</li><li><code>docs/.vuepress/theme</code>: 用于存放本地主题。</li><li><code>docs/.vuepress/styles</code>: 用于存放样式相关的文件。</li><li><code>docs/.vuepress/styles/index.styl</code>: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。</li><li><code>docs/.vuepress/styles/palette.styl</code>: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。</li><li><code>docs/.vuepress/public</code>: 静态资源目录。</li><li><code>docs/.vuepress/templates</code>: 存储 HTML 模板文件。</li><li><code>docs/.vuepress/templates/dev.html</code>: 用于开发环境的 HTML 模板文件。</li><li><code>docs/.vuepress/templates/ssr.html</code>: 构建时基于 Vue SSR 的 HTML 模板文件。</li><li><code>docs/.vuepress/config.js</code>: 配置文件的入口文件，也可以是 YML 或 toml。</li><li><code>docs/.vuepress/enhanceApp.js</code>: 客户端应用的增强。</li></ul><h3 id="默认的页面路由" tabindex="-1"><a class="header-anchor" href="#默认的页面路由" aria-hidden="true">#</a> 默认的页面路由</h3><p>此处我们把 <code>docs</code> 目录作为 <code>targetDir</code> （参考 命令行接口），下面所有的“文件的相对路径”都是相对于 <code>docs</code> 目录的。在项目根目录下的 <code>package.json</code> 中添加 <code>scripts</code> ：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上述的目录结构，默认页面路由地址如下：</p><table><thead><tr><th>文件的相对路径</th><th>页面路由地址</th></tr></thead><tbody><tr><td>/README.md</td><td>/</td></tr><tr><td>/guide/README.md</td><td>/guide/</td></tr><tr><td>/config.md</td><td>/config.html</td></tr></tbody></table><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3>`,14),v=n("code",null,"h2",-1),m=n("code",null,"h3",-1),h={href:"https://www.vuepress.cn/config/#temp",target:"_blank",rel:"noopener noreferrer"},b=n("h3",{id:"主题配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#主题配置","aria-hidden":"true"},"#"),e(" 主题配置")],-1),k={href:"https://www.vuepress.cn/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.vuepress.cn/theme/",target:"_blank",rel:"noopener noreferrer"},f=i(`<h3 id="应用级别的配置" tabindex="-1"><a class="header-anchor" href="#应用级别的配置" aria-hidden="true">#</a> 应用级别的配置</h3><p>VuePress 是一个标准的 Vue 应用，可以通过创建一个 <code>.vuepress/enhanceApp.js</code>文件做一些应用级别的配置，当文件存在的时候，会被导入到应用的内部。</p><h2 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h2><h3 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径" aria-hidden="true">#</a> 相对路径</h3><p>所有的 Markdown 文件都会被 webpack 编译成 Vue 组件，应该更倾向于使用相对路径来引用所有的静态资源。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">An image</span>](<span class="token url">./image.png</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样地，在<code>*.vue</code>文件中一样可以工作，图片会被<code>url-loader</code>和<code>file-loader</code>处理。</p><p>除此之外，还可以使用<code>~</code>前缀来明确地指出这是一个 webpack 的模块请求。</p><h3 id="公共文件" tabindex="-1"><a class="header-anchor" href="#公共文件" aria-hidden="true">#</a> 公共文件</h3><p>有时，你可能需要提供一个静态资源，但是它们并不直接被你的任何一个 markdown 文件或者主题组件引用 —— 举例来说，favicons 和 PWA 的图标，在这种情形下，你可以将它们放在 <code>.vuepress/public</code> 中， 它们最终会被复制到生成的静态文件夹中。</p><h3 id="基础路径" tabindex="-1"><a class="header-anchor" href="#基础路径" aria-hidden="true">#</a> 基础路径</h3><p>如果你的网站会被部署到一个<strong>非根路径</strong>，你将需要在 <code>.vuepress/config.js</code> 中设置 <code>base</code>，举例来说，如果你打算将你的网站部署到 <code>https://foo.github.io/bar/</code>，那么 <code>base</code> 的值就应该被设置为 <code>&quot;/bar/&quot;</code> (应当总是以斜杠开始，并以斜杠结束)。</p><p>有了基础路径（Base URL），如果你希望引用一张放在 <code>.vuepress/public</code> 中的图片，你需要使用这样路径：<code>/bar/image.png</code>，然而，一旦某一天你决定去修改 <code>base</code>，这样的路径引用将会显得异常脆弱。为了解决这个问题，VuePress 提供了内置的一个 helper <code>$withBase</code>（它被注入到了 Vue 的原型上），可以帮助你生成正确的路径：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$withBase(&#39;/foo.png&#39;)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>值得一提的是，你不仅可以在你的 Vue 组件中使用上述的语法，在 Markdown 文件中亦是如此。</p><p>最后补充一句，一个 <code>base</code> 路径一旦被设置，它将会自动地作为前缀插入到 <code>.vuepress/config.js</code> 中所有以 <code>/</code> 开始的资源路径中。</p><h2 id="markdown-扩展" tabindex="-1"><a class="header-anchor" href="#markdown-扩展" aria-hidden="true">#</a> Markdown 扩展</h2><h3 id="header-anchors" tabindex="-1"><a class="header-anchor" href="#header-anchors" aria-hidden="true">#</a> Header Anchors</h3>`,18),_={href:"https://vuepress.vuejs.org/zh/config/#markdown-anchor",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"markdown.anchor",-1),w=i(`<h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h3><h4 id="内部链接" tabindex="-1"><a class="header-anchor" href="#内部链接" aria-hidden="true">#</a> 内部链接</h4><p>网站内部的链接，将会被转换成 <code>&lt;router-link&gt;</code> 用于 SPA 导航。同时，站内的每一个文件夹下的 <code>README.md</code> 或者 <code>index.md</code> 文件都会被自动编译为 <code>index.html</code>，对应的链接将被视为 <code>/</code>。</p><p>以如下的文件结构为例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设你现在在 <code>foo/one.md</code> 中：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">Home</span>](<span class="token url">/</span>)</span> <span class="token comment">&lt;!-- 跳转到根部的 README.md --&gt;</span>
<span class="token url">[<span class="token content">foo</span>](<span class="token url">/foo/</span>)</span> <span class="token comment">&lt;!-- 跳转到 foo 文件夹的 index.html --&gt;</span>
<span class="token url">[<span class="token content">foo heading</span>](<span class="token url">./#heading</span>)</span> <span class="token comment">&lt;!-- 跳转到 foo/index.html 的特定标题位置 --&gt;</span>
<span class="token url">[<span class="token content">bar - three</span>](<span class="token url">../bar/three.md</span>)</span> <span class="token comment">&lt;!-- 具体文件可以使用 .md 结尾（推荐） --&gt;</span>
<span class="token url">[<span class="token content">bar - four</span>](<span class="token url">../bar/four.html</span>)</span> <span class="token comment">&lt;!-- 也可以用 .html --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="链接的重定向" tabindex="-1"><a class="header-anchor" href="#链接的重定向" aria-hidden="true">#</a> 链接的重定向</h4>`,8),y=n("code",null,"/foo",-1),j=n("code",null,"/foo/",-1),E=n("code",null,"/foo.html",-1),q=n("code",null,"/foo/",-1),A=n("code",null,"/foo.html",-1),V={href:"https://vuepress.github.io/plugins/clean-urls/",target:"_blank",rel:"noopener noreferrer"},M=i('<blockquote><p><strong>注意</strong></p><p>无论是否使用了 permalink 和 clean-urls 插件，你的相对路径都应该依赖于当前的文件结构来定义。在上面的例子中，即使你将 <code>/foo/one.md</code> 的路径设为了 <code>/foo/one/</code>，你依然应该通过 <code>./two.md</code> 来访问 <code>/foo/two.md</code>。</p></blockquote><h4 id="页面后缀" tabindex="-1"><a class="header-anchor" href="#页面后缀" aria-hidden="true">#</a> 页面后缀</h4><p>生成页面和内部链接时，默认使用 <code>.html</code> 作为后缀。</p>',3),P={href:"https://vuepress.vuejs.org/zh/config/#markdown-pagesuffix",target:"_blank",rel:"noopener noreferrer"},H=n("h4",{id:"外部链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#外部链接","aria-hidden":"true"},"#"),e(" 外部链接")],-1),B=n("p",null,[e("外部的链接将会被自动地设置为 "),n("code",null,'target="_blank" rel="noopener noreferrer"'),e(":")],-1),L={href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"},D={href:"https://vuepress.vuejs.org/zh/config/#markdown-externallinks",target:"_blank",rel:"noopener noreferrer"},S=n("h3",{id:"front-matter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#front-matter","aria-hidden":"true"},"#"),e(" Front Matter")],-1),T={href:"https://jekyllrb.com/docs/frontmatter/",target:"_blank",rel:"noopener noreferrer"},C=i(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> Blogging Like a Hacker
<span class="token key atrule">lang</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>US
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h3><p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:tada: :100:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>输出</strong></p><p>🎉 💯</p>`,6),z={href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"},N=n("h3",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),e(" 目录")],-1),I=n("p",null,"输入",-1),F={class:"table-of-contents"},Y=i(`<p>目录（Table of Contents）的渲染可以通过 markdown.toc 选项来配置。 自定义容器 默认主题</p><h3 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h3><p>输入</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><p>提示</p><p>这是一个提示</p><p>注意</p><p>这是一个警告</p><p>警告</p><p>这是一个危险警告</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你好，VuePress！&#39;</span><span class="token punctuation">)</span></span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码块中的语法高亮" tabindex="-1"><a class="header-anchor" href="#代码块中的语法高亮" aria-hidden="true">#</a> 代码块中的语法高亮</h3>`,13),$={href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"},O=i(`<p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`\`\` js
export default {
  name: &#39;MyComponent&#39;,
  // ...
}
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`\`\` html
&lt;ul&gt;
  &lt;li
    v-for=&quot;todo in todos&quot;
    :key=&quot;todo.id&quot;
  &gt;
    {{ todo.text }}
  &lt;/li&gt;
&lt;/ul&gt;
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    {{ todo.text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),U={href:"https://prismjs.com/#languages-list",target:"_blank",rel:"noopener noreferrer"},G=i(`<h3 id="代码块中的行高亮" tabindex="-1"><a class="header-anchor" href="#代码块中的行高亮" aria-hidden="true">#</a> 代码块中的行高亮</h3><p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`\`\` js {4}
export default {
  data () {
    return {
      msg: &#39;Highlighted!&#39;
    }
  }
}
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Highlighted!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了单行以外，你也可指定多行，行数区间，或是两者都指定。</p><ul><li>行数区间: 例如 <code>{5-8}</code>, <code>{3-10}</code>, <code>{10-17}</code></li><li>多个单行: 例如 <code>{4,7,9}</code></li><li>行数区间与多个单行: 例如 <code>{4,7-13,16,23-27,40}</code></li></ul><p><strong>Input</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`\`\` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: \`Highlighted!
      This line isn&#39;t highlighted,
      but this and the next 2 are.\`,
      motd: &#39;VuePress is awesome&#39;,
      lorem: &#39;ipsum&#39;,
    }
  }
}
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token comment">// Highlighted</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Highlighted!
      This line isn&#39;t highlighted,
      but this and the next 2 are.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">motd</span><span class="token operator">:</span> <span class="token string">&#39;VuePress is awesome&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lorem</span><span class="token operator">:</span> <span class="token string">&#39;ipsum&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="行号" tabindex="-1"><a class="header-anchor" href="#行号" aria-hidden="true">#</a> 行号</h3><p>你可以通过配置来为每个代码块显示行号：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lineNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例: <img src="https://www.vuepress.cn/line-numbers-desktop.png" alt="image" loading="lazy"></li></ul><h3 id="导入代码段-beta" tabindex="-1"><a class="header-anchor" href="#导入代码段-beta" aria-hidden="true">#</a> 导入代码段 beta</h3>`,16),W={href:"https://vuepress.vuejs.org/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E6%AE%B5",target:"_blank",rel:"noopener noreferrer"},X=n("blockquote",null,[n("p",null,[n("strong",null,"注意")]),n("p",null,[e("由于代码段的导入将在 webpack 编译之前执行，因此你无法使用 webpack 中的路径别名，此处的 "),n("code",null,"@"),e(" 默认值是 "),n("code",null,"process.cwd()"),e("。")])],-1),Z=n("h2",{id:"进阶配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#进阶配置","aria-hidden":"true"},"#"),e(" 进阶配置")],-1),J={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},K=n("code",null,".vuepress/config.js",-1),Q=n("code",null,"markdown",-1),nn=n("code",null,"markdown-it",-1),en=i(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// markdown-it-anchor 的选项</span>
    <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">permalink</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// markdown-it-toc 的选项</span>
    <span class="token literal-property property">toc</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">includeLevel</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">extendMarkdown</span><span class="token operator">:</span> <span class="token parameter">md</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 使用更多的 markdown-it 插件!</span>
      md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;markdown-it-xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function sn(an,tn){const l=o("ExternalLinkIcon"),a=o("router-link");return r(),c("div",null,[u,n("p",null,[e("Vuepress 内置了基于 headers 的搜索——它会自动为所有页面的标题、"),v,e("、"),m,e("构建起一个简单的搜索索引。所有可配置的选项："),n("a",h,[e("配置"),s(l)])]),b,n("p",null,[e("默认主题提供了一些选项，自定义导航栏、侧边栏和首页等。"),n("a",k,[e("默认主题"),s(l)]),e("，如果想开发一个自定义主题，可以参考"),n("a",g,[e("自定义主题"),s(l)])]),f,n("p",null,[e("所有的标题将会自动地应用 anchor 链接，anchor 的渲染可以通过 "),n("a",_,[x,s(l)]),e(" 来配置。")]),w,n("p",null,[e("VuePress 支持重定向到干净链接。如果一个链接 "),y,e(" 找不到，VuePress 会自行寻找一个可用的 "),j,e(" 或 "),E,e("。反过来，当 "),q,e(" 或 "),A,e(" 中的一个找不到时，VuePress 也会尝试寻找另一个。借助这种特性，我们可以通过官方插件 "),n("a",V,[e("vuepress-plugin-clean-urls (opens new window)"),s(l)]),e("定制你的网站路径。")]),M,n("p",null,[e("你可以通过 "),n("a",P,[e("config.markdown.pageSuffix"),s(l)]),e(" 进行自定义配置.")]),H,B,n("ul",null,[n("li",null,[n("a",L,[e("vuejs.org(opens new window)"),s(l)])]),n("li",null,[n("a",R,[e("VuePress on GitHub(opens new window)"),s(l)])])]),n("p",null,[e("你可以自定义通过配置 "),n("a",D,[e("config.markdown.externalLinks"),s(l)]),e(" 来自定义外部链接的特性。")]),S,n("p",null,[e("VuePress 提供了对 "),n("a",T,[e("YAML front matter (opens new window)"),s(l)]),e("开箱即用的支持:")]),C,n("p",null,[e("你可以在"),n("a",z,[e("这个列表 (opens new window)"),s(l)]),e("找到所有可用的 Emoji。")]),N,I,n("nav",F,[n("ul",null,[n("li",null,[s(a,{to:"#目录结构"},{default:t(()=>[e("目录结构")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#默认的页面路由"},{default:t(()=>[e("默认的页面路由")]),_:1})])])]),n("li",null,[s(a,{to:"#基本配置"},{default:t(()=>[e("基本配置")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#配置文件"},{default:t(()=>[e("配置文件")]),_:1})]),n("li",null,[s(a,{to:"#主题配置"},{default:t(()=>[e("主题配置")]),_:1})]),n("li",null,[s(a,{to:"#应用级别的配置"},{default:t(()=>[e("应用级别的配置")]),_:1})])])]),n("li",null,[s(a,{to:"#静态资源"},{default:t(()=>[e("静态资源")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#相对路径"},{default:t(()=>[e("相对路径")]),_:1})]),n("li",null,[s(a,{to:"#公共文件"},{default:t(()=>[e("公共文件")]),_:1})]),n("li",null,[s(a,{to:"#基础路径"},{default:t(()=>[e("基础路径")]),_:1})])])]),n("li",null,[s(a,{to:"#markdown-扩展"},{default:t(()=>[e("Markdown 扩展")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#header-anchors"},{default:t(()=>[e("Header Anchors")]),_:1})]),n("li",null,[s(a,{to:"#链接"},{default:t(()=>[e("链接")]),_:1})]),n("li",null,[s(a,{to:"#front-matter"},{default:t(()=>[e("Front Matter")]),_:1})]),n("li",null,[s(a,{to:"#emoji"},{default:t(()=>[e("Emoji")]),_:1})]),n("li",null,[s(a,{to:"#目录"},{default:t(()=>[e("目录")]),_:1})]),n("li",null,[s(a,{to:"#自定义容器"},{default:t(()=>[e("自定义容器")]),_:1})]),n("li",null,[s(a,{to:"#代码块中的语法高亮"},{default:t(()=>[e("代码块中的语法高亮")]),_:1})]),n("li",null,[s(a,{to:"#代码块中的行高亮"},{default:t(()=>[e("代码块中的行高亮")]),_:1})]),n("li",null,[s(a,{to:"#行号"},{default:t(()=>[e("行号")]),_:1})]),n("li",null,[s(a,{to:"#导入代码段-beta"},{default:t(()=>[e("导入代码段 beta")]),_:1})])])]),n("li",null,[s(a,{to:"#进阶配置"},{default:t(()=>[e("进阶配置")]),_:1})])])]),Y,n("p",null,[e("VuePress 使用了 "),n("a",$,[e("Prism (opens new window)"),s(l)]),e("来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：")]),O,n("p",null,[e("在 Prism 的网站上查看 "),n("a",U,[e("合法的语言列表 (opens new window)"),s(l)]),e("。")]),G,n("p",null,[n("a",W,[e("详情"),s(l)])]),X,Z,n("p",null,[e("VuePress 使用 "),n("a",J,[e("markdown-it (opens new window)"),s(l)]),e("来渲染 Markdown，上述大多数的拓展也都是通过自定义的插件实现的。想要进一步的话，你可以通过 "),K,e(" 的 "),Q,e(" 选项，来对当前的 "),nn,e(" 实例做一些自定义的配置：")]),en])}const on=d(p,[["render",sn],["__file","index.html.vue"]]);export{on as default};
