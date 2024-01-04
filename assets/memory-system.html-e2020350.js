const e=JSON.parse('{"key":"v-19595b05","path":"/embedded-system/arm-v7/memory-system.html","title":"第 5 章 内存系统","lang":"zh-CN","frontmatter":{"title":"第 5 章 内存系统","date":"2023-12-08T00:00:00.000Z","description":"这一节我们将了解 5 个运行调度规则，两种基本调度策略：优化周转时间的三种调度算法和一种优化响应时间的调度算法。这四种调度算法分别是：FIFO，SJF 和 STCF 与 Round Robin.","head":[["meta",{"property":"og:url","content":"https://mark-walen.github.io/embedded-system/arm-v7/memory-system.html"}],["meta",{"property":"og:site_name","content":"蓝芒小栈"}],["meta",{"property":"og:title","content":"第 5 章 内存系统"}],["meta",{"property":"og:description","content":"这一节我们将了解 5 个运行调度规则，两种基本调度策略：优化周转时间的三种调度算法和一种优化响应时间的调度算法。这四种调度算法分别是：FIFO，SJF 和 STCF 与 Round Robin."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-03T16:10:22.000Z"}],["meta",{"property":"article:author","content":"Mark Walen"}],["meta",{"property":"article:published_time","content":"2023-12-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-03T16:10:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第 5 章 内存系统\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-03T16:10:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mark Walen\\"}]}"]]},"headers":[{"level":2,"title":"内存系统特征概览","slug":"内存系统特征概览","link":"#内存系统特征概览","children":[]},{"level":2,"title":"内存映射","slug":"内存映射","link":"#内存映射","children":[{"level":3,"title":"代码区","slug":"代码区","link":"#代码区","children":[]},{"level":3,"title":"片上 SRAM","slug":"片上-sram","link":"#片上-sram","children":[]},{"level":3,"title":"片上外设","slug":"片上外设","link":"#片上外设","children":[]},{"level":3,"title":"片外 RAM 和 片外 RAM","slug":"片外-ram-和-片外-ram","link":"#片外-ram-和-片外-ram","children":[]},{"level":3,"title":"最后 0.5GB 的隐秘地带","slug":"最后-0-5gb-的隐秘地带","link":"#最后-0-5gb-的隐秘地带","children":[]}]},{"level":2,"title":"内存访问属性","slug":"内存访问属性","link":"#内存访问属性","children":[]},{"level":2,"title":"默认内存访问权限","slug":"默认内存访问权限","link":"#默认内存访问权限","children":[]},{"level":2,"title":"位带操作","slug":"位带操作","link":"#位带操作","children":[{"level":3,"title":"位带操作的优越性","slug":"位带操作的优越性","link":"#位带操作的优越性","children":[]},{"level":3,"title":"其它数据长度上的位带操作","slug":"其它数据长度上的位带操作","link":"#其它数据长度上的位带操作","children":[]},{"level":3,"title":"在 C 语言中使用位带操作","slug":"在-c-语言中使用位带操作","link":"#在-c-语言中使用位带操作","children":[]}]},{"level":2,"title":"非对齐数据传输","slug":"非对齐数据传输","link":"#非对齐数据传输","children":[]},{"level":2,"title":"互斥访问","slug":"互斥访问","link":"#互斥访问","children":[]},{"level":2,"title":"端模式","slug":"端模式","link":"#端模式","children":[]}],"git":{"createdTime":1702052594000,"updatedTime":1704298222000,"contributors":[{"name":"Mark-Walen","email":"mark_walen@qq.com","commits":2}]},"readingTime":{"minutes":17.6,"words":5281},"filePathRelative":"embedded-system/arm-v7/memory-system.md","localizedDate":"2023年12月8日","excerpt":"<h1> 内存系统</h1>\\n<h2> 内存系统特征概览</h2>\\n<ul>\\n<li>预定义内存映射</li>\\n<li>位带操作</li>\\n<li>非对齐访问</li>\\n<li>支持大小端配置</li>\\n</ul>\\n<h2> 内存映射</h2>\\n<p>预定义内存的好处：</p>\\n<ul>\\n<li>方便 CM3 单片机的移植；</li>\\n<li>允许厂商灵活分配地址存储空间。</li>\\n</ul>\\n<p>存储空间的一些位置用于调试组件等私有外设，这个地址段被称为“私有外设区”。私有外设区的组件包括 ：</p>\\n<ul>\\n<li>闪存地址重载及断点单元（FPB）</li>\\n<li>数据观察点单元（DWT）</li>\\n<li>仪器化跟踪宏单元（ITM）</li>\\n<li>嵌入式跟踪红单元（ETM）</li>\\n<li>跟踪端口接口单元（TPIU）</li>\\n<li>ROM 表</li>\\n</ul>"}');export{e as data};
