const e=JSON.parse('{"key":"v-400691f6","path":"/cas/ostep/virtualization/memory/vm-api.html","title":"第 14 章 内存 API","lang":"zh-CN","frontmatter":{"title":"第 14 章 内存 API","date":"2024-01-21T00:00:00.000Z","description":"在这个插曲中，我们讨论 UNIX 系统中的内存分配接口。所提供的接口非常简单，因此本章简短而言之。我们要解决的主要问题是： 如何分配和管理内存 在UNIX/C程序中，了解如何分配和管理内存对于构建健壮可靠的软件至关重要。通常使用哪些接口？应该避免哪些错误？ 思维导图 图 1. 思维导图 内存的类型","head":[["meta",{"property":"og:url","content":"https://mark-walen.github.io/cas/ostep/virtualization/memory/vm-api.html"}],["meta",{"property":"og:site_name","content":"蓝芒小栈"}],["meta",{"property":"og:title","content":"第 14 章 内存 API"}],["meta",{"property":"og:description","content":"在这个插曲中，我们讨论 UNIX 系统中的内存分配接口。所提供的接口非常简单，因此本章简短而言之。我们要解决的主要问题是： 如何分配和管理内存 在UNIX/C程序中，了解如何分配和管理内存对于构建健壮可靠的软件至关重要。通常使用哪些接口？应该避免哪些错误？ 思维导图 图 1. 思维导图 内存的类型"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mark-walen.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-21T12:05:11.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"第 14 章 内存 API"}],["meta",{"property":"article:author","content":"Mark Walen"}],["meta",{"property":"article:published_time","content":"2024-01-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-21T12:05:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第 14 章 内存 API\\",\\"image\\":[\\"https://mark-walen.github.io/\\"],\\"datePublished\\":\\"2024-01-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-21T12:05:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mark Walen\\"}]}"]]},"headers":[{"level":2,"title":"思维导图","slug":"思维导图","link":"#思维导图","children":[]},{"level":2,"title":"内存的类型","slug":"内存的类型","link":"#内存的类型","children":[]},{"level":2,"title":"malloc 函数的使用","slug":"malloc-函数的使用","link":"#malloc-函数的使用","children":[]},{"level":2,"title":"free() 函数的调用","slug":"free-函数的调用","link":"#free-函数的调用","children":[]},{"level":2,"title":"常见错误","slug":"常见错误","link":"#常见错误","children":[{"level":3,"title":"忘记分配内存","slug":"忘记分配内存","link":"#忘记分配内存","children":[]},{"level":3,"title":"内存分配不足","slug":"内存分配不足","link":"#内存分配不足","children":[]},{"level":3,"title":"忘记初始化分配的内存","slug":"忘记初始化分配的内存","link":"#忘记初始化分配的内存","children":[]},{"level":3,"title":"忘记释放内存","slug":"忘记释放内存","link":"#忘记释放内存","children":[]},{"level":3,"title":"释放内存时要确保你使用完它","slug":"释放内存时要确保你使用完它","link":"#释放内存时要确保你使用完它","children":[]},{"level":3,"title":"重复释放内存","slug":"重复释放内存","link":"#重复释放内存","children":[]},{"level":3,"title":"错误地调用 free()","slug":"错误地调用-free","link":"#错误地调用-free","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"底层操作系统支持","slug":"底层操作系统支持","link":"#底层操作系统支持","children":[]},{"level":2,"title":"其它的函数调用","slug":"其它的函数调用","link":"#其它的函数调用","children":[]},{"level":2,"title":"总结","slug":"总结-1","link":"#总结-1","children":[]}],"git":{"createdTime":1705838711000,"updatedTime":1705838711000,"contributors":[{"name":"Mark-Walen","email":"mark_walen@qq.com","commits":1}]},"readingTime":{"minutes":15.54,"words":4663},"filePathRelative":"cas/ostep/virtualization/memory/vm-api.md","localizedDate":"2024年1月21日","excerpt":"<p>在这个插曲中，我们讨论 UNIX 系统中的内存分配接口。所提供的接口非常简单，因此本章简短而言之。我们要解决的主要问题是：</p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">如何分配和管理内存</p>\\n<p>在UNIX/C程序中，了解如何分配和管理内存对于构建健壮可靠的软件至关重要。通常使用哪些接口？应该避免哪些错误？</p>\\n</div>\\n<h2> 思维导图</h2>\\n<figure><figcaption>图 1. 思维导图</figcaption></figure>\\n<h2> 内存的类型</h2>","autoDesc":true}');export{e as data};
