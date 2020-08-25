import projectConfig from '/pagic.config.js';
export default {
    'prev': {
        "text": "配置文件",
        "link": "docs/config.html"
    },
    'next': {
        "text": "_layout.tsx",
        "link": "docs/layout.html"
    },
    'sidebar': [
        {
            "text": "介绍",
            "link": "docs/introduction.html",
            "pagePath": "docs/introduction.md"
        },
        {
            "text": "基本用法",
            "link": "docs/usage.html",
            "pagePath": "docs/usage.md"
        },
        {
            "text": "配置文件",
            "link": "docs/config.html",
            "pagePath": "docs/config.md"
        },
        {
            "text": "页面内容",
            "link": "docs/content.html",
            "pagePath": "docs/content.md"
        },
        {
            "text": "_layout.tsx",
            "link": "docs/layout.html",
            "pagePath": "docs/layout.md"
        },
        {
            "text": "主题",
            "link": "docs/themes.html",
            "pagePath": "docs/themes.md"
        },
        {
            "text": "插件",
            "link": "docs/plugins.html",
            "pagePath": "docs/plugins.md"
        },
        {
            "text": "部署",
            "link": "docs/deployment.html",
            "pagePath": "docs/deployment.md"
        },
        {
            "text": "示例网站",
            "link": "docs/demos.html",
            "pagePath": "docs/demos.md"
        },
        {
            "text": "局限性",
            "link": "docs/limitations.html",
            "pagePath": "docs/limitations.md"
        }
    ],
    config: { "root": "/", ...projectConfig },
    'pagePath': "docs/content.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/content.html",
    'title': "页面内容",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>页面内容</h1>\n<p>Pagic 支持将 <code>md/tsx</code> 文件渲染成静态页面，下面将分别介绍这两种文件支持的特性。</p>\n<h2 id="md-%E6%96%87%E4%BB%B6">md 文件<a class="anchor" href="#md-%E6%96%87%E4%BB%B6">§</a></h2>\n<p>Pagic 使用 <a href="https://github.com/markdown-it/markdown-it">markdown-it</a> 来编译 Markdown 文件，它支持通过添加第三方插件来扩展原有的功能。Pagic 支持了以下特性：</p>\n<h3 id="title"><code>title</code><a class="anchor" href="#title">§</a></h3>\n<p>文章中的第一个 <code>&lt;h1&gt;</code> 标签将会被提取出来作为整个页面的 <code>title</code>（再加上 <code>pagic.config.ts</code> 中的 <code>title</code> 作为后缀）。</p>\n<p>若文章中没有 <code>&lt;h1&gt;</code> 标签，则会使用 <code>pagic.config.ts</code> 中的 <code>title</code> 作为页面的 <code>title</code>。</p>\n<h3 id="toc"><code>toc</code><a class="anchor" href="#toc">§</a></h3>\n<p>文章中所有的 <code>&lt;h2&gt;</code> 和 <code>&lt;h3&gt;</code> 标签会被提取出来作为页面的目录。</p>\n<p>若文章中没有 <code>&lt;h2&gt;</code> 或 <code>&lt;h3&gt;</code>，则 <code>toc</code> 为 <code>undefined</code>。</p>\n<h3 id="%E6%A0%87%E9%A2%98%E4%B8%AD%E7%9A%84%E9%94%9A%E7%82%B9">标题中的锚点<a class="anchor" href="#%E6%A0%87%E9%A2%98%E4%B8%AD%E7%9A%84%E9%94%9A%E7%82%B9">§</a></h3>\n<p>文章中所有的 <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>, <code>&lt;h5&gt;</code>, <code>&lt;h6&gt;</code> 标签会被插入一个可点击的锚点 <code>§</code>。</p>\n<h3 id="%E9%93%BE%E6%8E%A5%E6%9B%BF%E6%8D%A2">链接替换<a class="anchor" href="#%E9%93%BE%E6%8E%A5%E6%9B%BF%E6%8D%A2">§</a></h3>\n<p>文章中的链接如果是以 <code>.md</code> 结尾，则会在构建过程中被替换为 <code>.html</code>，比如：</p>\n<pre class="language-md"><code class="language-md"><span class="token url">[<span class="token content">配置文件</span>](./config.md)</span>\n</code></pre>\n<p>会被构建为：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./config.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>配置文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>真实的构建结果：<a href="./config.html">配置文件</a>，不妨点击看看跳转效果。</p>\n<p>为什么要这么设计呢？</p>\n<p>因为这样的链接不仅在生成的页面中支持点击跳转，在 GitHub 的 Markdown 预览中支持点击跳转，而且在 VSCode（或其他编辑器）中也支持 <code>cmd/ctrl + click</code> 跳转。</p>\n<p>不妨在<a href="https://github.com/xcatliu/pagic/blob/master/site/docs/content.md#%E9%93%BE%E6%8E%A5%E6%9B%BF%E6%8D%A2">本页面的 GitHub 版</a>试试吧。</p>\n<p>需要注意的是，链接中的 <code>README.md</code> 不仅后缀会被替换为 <code>.html</code>，路径也会被替换为 <code>index</code>：</p>\n<pre class="language-md"><code class="language-md"><span class="token url">[<span class="token content">首页</span>](/README.md)</span>\n</code></pre>\n<p>会被构建为：</p>\n<pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/index.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n<p>真实的构建结果：<a href="/index.html">首页</a>，不妨点击看看跳转效果。</p>\n<p>另外，如果链接是以 <code>http://</code> 或 <code>https://</code> 开头，则表示它是一个外部链接，那么无论后缀是什么都不会被替换了。</p>\n<h3 id="%E5%A4%B4%E4%BF%A1%E6%81%AF">头信息<a class="anchor" href="#%E5%A4%B4%E4%BF%A1%E6%81%AF">§</a></h3>\n<p>Markdown 文件的顶部允许设置一些头信息（frontMatter），它们将会作为 <code>props</code> 传递到 <code>_layout.tsx</code> 中，注意它的优先级是最高的，会覆盖掉任何插件添加的 <code>props</code>，比如：</p>\n<p>设置 <code>outputPath</code> 可以指定输出页面的路径（默认情况下输出路径是文件路径）：</p>\n<pre class="language-md"><code class="language-md"><span class="token hr punctuation">---</span>\n<span class="token title important">outputPath: foo/bar.html\n<span class="token punctuation">---</span></span>\n\n<span class="token title important"><span class="token punctuation">#</span> 页面内容</span>\n\n...\n</code></pre>\n<p>设置 <code>layoutPath</code> 可以指定本页面使用的模版文件：</p>\n<pre class="language-md"><code class="language-md"><span class="token hr punctuation">---</span>\n<span class="token title important">layoutPath: blog/_layout.tsx\n<span class="token punctuation">---</span></span>\n\n<span class="token title important"><span class="token punctuation">#</span> 页面内容</span>\n\n...\n</code></pre>\n<p>设置 <code>toc</code> 为 <code>null</code> 可以禁用本页的目录：</p>\n<pre class="language-md"><code class="language-md"><span class="token hr punctuation">---</span>\n<span class="token title important">toc: null\n<span class="token punctuation">---</span></span>\n\n<span class="token title important"><span class="token punctuation">#</span> 页面内容</span>\n\n...\n</code></pre>\n<p>设置 <code>prev</code> 或 <code>next</code> 可以指定上一页下一页的路径（需要配合 <code>prev_next</code> 插件）：</p>\n<pre class="language-md"><code class="language-md"><span class="token hr punctuation">---</span>\n<span class="token title important">prev: README.md\n<span class="token punctuation">---</span></span>\n\n<span class="token title important"><span class="token punctuation">#</span> 页面内容</span>\n\n...\n</code></pre>\n<p>头信息的设置很灵活，搭配各种插件，或者自定义的 <code>_layout.tsx</code>，可以实现各种各样的效果。</p>\n<h3 id="%E5%B1%80%E9%99%90%E6%80%A7">局限性<a class="anchor" href="#%E5%B1%80%E9%99%90%E6%80%A7">§</a></h3>\n<p>目前 Pagic 的 Markdown 解析还存在一些局限性，这也是将来的改进方向：</p>\n<ul>\n<li>不支持配置 <code>markdown-it</code> 的选项</li>\n<li>不支持科学公式、流程图等高级语法</li>\n<li>不支持内嵌 jsx</li>\n</ul>\n<h2 id="tsx-%E6%96%87%E4%BB%B6">tsx 文件<a class="anchor" href="#tsx-%E6%96%87%E4%BB%B6">§</a></h2>\n<p>tsx 文件渲染成静态页面是 Pagic 的特色之一，借助 React 组件的可编程性，极大的扩展了静态网站的能力。</p>\n<h3 id="%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">基本用法<a class="anchor" href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">§</a></h3>\n<p>任何不以 <code>_</code> 开头的 <code>tsx</code> 文件都会被视为一个 <code>tsx</code> 页面文件。</p>\n<p>我们不妨在之前的 <code>site</code> 项目中创建一个 <code>hello.tsx</code> 文件：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n├── hello<span class="token punctuation">.</span>tsx\n└── README<span class="token punctuation">.</span>md\n</code></pre>\n<p>它的内容是：</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">React</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'<a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function"><span class="token maybe-class-name">Hello</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello world</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token maybe-class-name">Hello</span><span class="token punctuation">;</span>\n</code></pre>\n<p>接下来我们运行：</p>\n<pre class="language-bash"><code class="language-bash">pagic build --serve\n</code></pre>\n<p>然后打开 <a href="http://127.0.0.1:8000/hello.html">http://127.0.0.1:8000/hello.html</a> ，可以看到页面中显示出了 <code>Hello world</code>。</p>\n<p>同时 <code>dist</code> 目录下多了一个 <code>hello.html</code> 文件：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # 构建结果目录\n|   |── hello<span class="token punctuation">.</span>html\n|   └── index<span class="token punctuation">.</span>html\n├── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n├── hello<span class="token punctuation">.</span>tsx\n└── README<span class="token punctuation">.</span>md\n</code></pre>\n<blockquote>\n<p><code>hello.tsx</code> 中的<strong>默认导出</strong>（<code>export default</code>）会被视为页面的内容。</p>\n</blockquote>\n<h3 id="%E9%80%BB%E8%BE%91%E8%84%9A%E6%9C%AC">逻辑脚本<a class="anchor" href="#%E9%80%BB%E8%BE%91%E8%84%9A%E6%9C%AC">§</a></h3>\n<p>Pagic 不仅会在渲染页面时执行 <code>tsx</code> 文件中的逻辑，而且其中的逻辑在浏览器中也会运行。</p>\n<p>比如，我们可以使用 <code>React.setState</code> 实现一个计数器页面：</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">React</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'<a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function"><span class="token maybe-class-name">Hello</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello world</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">Count: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Count +1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token maybe-class-name">Hello</span><span class="token punctuation">;</span>\n</code></pre>\n<p>访问 <a href="/hello.html">/hello.html</a> 可以查看其真实的渲染结果。</p>\n<blockquote>\n<p>由于 <code>react.d.ts</code> 的限制，使用 <code>React</code> 的子方法时必须用 <code>React.xxx</code>，而不能在导入时将子方法直接导入（<code>import React, { useState } ...</code>）。</p>\n</blockquote>\n<h3 id="%E7%BB%84%E4%BB%B6%E5%8C%96">组件化<a class="anchor" href="#%E7%BB%84%E4%BB%B6%E5%8C%96">§</a></h3>\n<p>组件化是 React 的重要特性之一，我们可以通过拆分 <code>tsx</code> 页面为一个个子组件来复用代码。不过在 Pagic 中，由于需要支持 <code>tsx</code> 文件渲染为页面，所以我们需要对子组件做一个约定——以 <code>_</code> 开头的组件为子组件：</p>\n<pre class="language-autoit"><code class="language-autoit">site<span class="token operator">/</span>\n|── dist    # 构建结果目录\n|   └── hello<span class="token punctuation">.</span>html\n├── _count<span class="token punctuation">.</span>tsx\n├── hello<span class="token punctuation">.</span>tsx\n└── pagic<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts\n</code></pre>\n<p>在上面的例子中，<code>hello.tsx</code> 会被构建为 <code>dist/hello.html</code>，而 <code>_count.tsx</code> 由于是 <code>_</code> 开头，所以不会被构建为页面。这样就可以实现对 <code>hello.tsx</code> 的拆分，将 <code>Count</code> 组件拆分到 <code>_count.tsx</code> 文件中，然后在 <code>hello.tsx</code> 中引用即可：</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">React</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'<a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token maybe-class-name">Count</span> <span class="token keyword">from</span> <span class="token string">\'./_count.tsx\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function"><span class="token maybe-class-name">Hello</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello world</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Count</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token maybe-class-name">Hello</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="%E5%A4%B4%E4%BF%A1%E6%81%AF-2">头信息<a class="anchor" href="#%E5%A4%B4%E4%BF%A1%E6%81%AF-2">§</a></h3>\n<p>与 <code>md</code> 文件类似，<code>tsx</code> 文件也支持头信息，它是通过导出一个 <code>frontMatter</code> 对象实现的：</p>\n<pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token maybe-class-name">React</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'<a class="token url-link" href="https://deno.land/x/pagic/mod.ts">https://deno.land/x/pagic/mod.ts</a>\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function"><span class="token maybe-class-name">Hello</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Hello world</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token maybe-class-name">Hello</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> frontMatter <span class="token operator">=</span> <span class="token punctuation">{</span>\n  outputPath<span class="token operator">:</span> <span class="token string">\'foo/bar.html\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="%E5%B1%80%E9%99%90%E6%80%A7-2">局限性<a class="anchor" href="#%E5%B1%80%E9%99%90%E6%80%A7-2">§</a></h3>\n<p>使用 <code>tsx</code> 文件同样存在一些局限性，这也是将来的改进方向：</p>\n<ul>\n<li>不支持代码高亮</li>\n<li>不支持内嵌 Markdown</li>\n<li>不支持自动生成目录</li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#md-%E6%96%87%E4%BB%B6">md 文件</a><ol><li><a href="#title">title</a></li><li><a href="#toc">toc</a></li><li><a href="#%E6%A0%87%E9%A2%98%E4%B8%AD%E7%9A%84%E9%94%9A%E7%82%B9">标题中的锚点</a></li><li><a href="#%E9%93%BE%E6%8E%A5%E6%9B%BF%E6%8D%A2">链接替换</a></li><li><a href="#%E5%A4%B4%E4%BF%A1%E6%81%AF">头信息</a></li><li><a href="#%E5%B1%80%E9%99%90%E6%80%A7">局限性</a></li></ol></li><li><a href="#tsx-%E6%96%87%E4%BB%B6">tsx 文件</a><ol><li><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">基本用法</a></li><li><a href="#%E9%80%BB%E8%BE%91%E8%84%9A%E6%9C%AC">逻辑脚本</a></li><li><a href="#%E7%BB%84%E4%BB%B6%E5%8C%96">组件化</a></li><li><a href="#%E5%A4%B4%E4%BF%A1%E6%81%AF-2">头信息</a></li><li><a href="#%E5%B1%80%E9%99%90%E6%80%A7-2">局限性</a></li></ol></li></ol></nav>'
        } })
};
