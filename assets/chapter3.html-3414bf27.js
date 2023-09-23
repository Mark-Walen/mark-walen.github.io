const e=JSON.parse('{"key":"v-1a8133ee","path":"/embedded-system/rtos/freertos/chapter3.html","title":"第 3 章 任务管理","lang":"zh-CN","frontmatter":{"title":"第 3 章 任务管理","date":"2023-08-10T00:00:00.000Z","description":"文档翻译","head":[["meta",{"property":"og:url","content":"https://mark-walen.github.io/embedded-system/rtos/freertos/chapter3.html"}],["meta",{"property":"og:site_name","content":"蓝芒小栈"}],["meta",{"property":"og:title","content":"第 3 章 任务管理"}],["meta",{"property":"og:description","content":"文档翻译"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-23T08:47:38.000Z"}],["meta",{"property":"article:author","content":"Mark Walen"}],["meta",{"property":"article:published_time","content":"2023-08-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-23T08:47:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第 3 章 任务管理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-23T08:47:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mark Walen\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"3.1 章节介绍和学习范围","slug":"_3-1-章节介绍和学习范围","link":"#_3-1-章节介绍和学习范围","children":[{"level":3,"title":"学习范围","slug":"学习范围","link":"#学习范围","children":[]}]},{"level":2,"title":"3.2 任务函数","slug":"_3-2-任务函数","link":"#_3-2-任务函数","children":[]},{"level":2,"title":"3.3 顶层任务状态","slug":"_3-3-顶层任务状态","link":"#_3-3-顶层任务状态","children":[]}],"git":{"createdTime":1691674645000,"updatedTime":1695458858000,"contributors":[{"name":"Mark-Walen","email":"mark_walen@qq.com","commits":3}]},"readingTime":{"minutes":2.68,"words":805},"filePathRelative":"embedded-system/rtos/freertos/chapter3.md","localizedDate":"2023年8月10日","excerpt":"<h1> 第 3 章 任务管理</h1>\\n<h2> 3.1 章节介绍和学习范围</h2>\\n<h3> 学习范围</h3>\\n<p>本章节旨在让读者能够理解以下几点：</p>\\n<ul>\\n<li>在应用程序中，FreeRTOS 怎样为每个任务分配执行时间；</li>\\n<li>FreeRTOS 怎样决定什么时间执行哪一个任务；</li>\\n<li>每个任务的相对优先级如何影响系统的行为；</li>\\n<li>一个任务存在的状态。</li>\\n</ul>\\n<p>读者也应该能够了解：</p>\\n<ul>\\n<li>如何实现任务；</li>\\n<li>如何创建一个或者多个任务实例；</li>\\n<li>如何使用任务参数；</li>\\n<li>如何更改已经创建了的任务的优先级；</li>\\n<li>如何删除任务；</li>\\n<li>如何周期性的执行一个任务（软件定时器会在后续章节讲到）；</li>\\n<li>空闲任务什么时候会执行以及如何使用。</li>\\n</ul>"}');export{e as data};
