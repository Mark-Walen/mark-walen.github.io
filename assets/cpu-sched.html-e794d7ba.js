const e=JSON.parse('{"key":"v-4fb991f6","path":"/cas/ostep/virtualization/cpu-sched.html","title":"第 7 章 进程调度：介绍","lang":"zh-CN","frontmatter":{"title":"第 7 章 进程调度：介绍","date":"2023-10-10T00:00:00.000Z","description":"这一节我们将了解 5 个运行调度规则，两种基本调度策略：优化周转时间的三种调度算法和一种优化响应时间的调度算法。这四种调度算法分别是：FIFO，SJF 和 STCF 与 Round Robin.","head":[["meta",{"property":"og:url","content":"https://mark-walen.github.io/cas/ostep/virtualization/cpu-sched.html"}],["meta",{"property":"og:site_name","content":"蓝芒小栈"}],["meta",{"property":"og:title","content":"第 7 章 进程调度：介绍"}],["meta",{"property":"og:description","content":"这一节我们将了解 5 个运行调度规则，两种基本调度策略：优化周转时间的三种调度算法和一种优化响应时间的调度算法。这四种调度算法分别是：FIFO，SJF 和 STCF 与 Round Robin."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-22T08:06:44.000Z"}],["meta",{"property":"article:author","content":"Mark Walen"}],["meta",{"property":"article:published_time","content":"2023-10-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-22T08:06:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第 7 章 进程调度：介绍\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-22T08:06:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mark Walen\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"思维导图","slug":"思维导图","link":"#思维导图","children":[]},{"level":2,"title":"引言","slug":"引言","link":"#引言","children":[]},{"level":2,"title":"7.1 工作负载假设","slug":"_7-1-工作负载假设","link":"#_7-1-工作负载假设","children":[]},{"level":2,"title":"7.2 调度指标","slug":"_7-2-调度指标","link":"#_7-2-调度指标","children":[]},{"level":2,"title":"7.3 先进先出（FIFO）","slug":"_7-3-先进先出-fifo","link":"#_7-3-先进先出-fifo","children":[]},{"level":2,"title":"7.4 最短任务优先（SJF）","slug":"_7-4-最短任务优先-sjf","link":"#_7-4-最短任务优先-sjf","children":[]},{"level":2,"title":"7.5 最短完成时间优先（STCF）","slug":"_7-5-最短完成时间优先-stcf","link":"#_7-5-最短完成时间优先-stcf","children":[]},{"level":2,"title":"7.6 新度量指标：响应时间","slug":"_7-6-新度量指标-响应时间","link":"#_7-6-新度量指标-响应时间","children":[]},{"level":2,"title":"7.7 时间片轮转调度","slug":"_7-7-时间片轮转调度","link":"#_7-7-时间片轮转调度","children":[]},{"level":2,"title":"7.8 结合 I/O","slug":"_7-8-结合-i-o","link":"#_7-8-结合-i-o","children":[]},{"level":2,"title":"7.9 No More Oracle","slug":"_7-9-no-more-oracle","link":"#_7-9-no-more-oracle","children":[]},{"level":2,"title":"7.10 小结","slug":"_7-10-小结","link":"#_7-10-小结","children":[]}],"git":{"createdTime":1697896689000,"updatedTime":1697962004000,"contributors":[{"name":"Mark-Walen","email":"mark_walen@qq.com","commits":2}]},"readingTime":{"minutes":19.1,"words":5729},"filePathRelative":"cas/ostep/virtualization/cpu-sched.md","localizedDate":"2023年10月10日","excerpt":"<h2> 思维导图</h2>\\n<figure><figcaption><b>图 7.0 </b>进程调度思维导图</figcaption></figure>\\n<h2> 引言</h2>\\n<p>到目前为止，关于运行进程的底层机制（例如上下文切换）应该是清楚的；如果不清楚，可以回到前面的章节重新阅读关于这些内容的描述。然而，我们还没有理解操作系统调度程序采用的高级策略。现在我们将做到这一点，介绍一系列调度策略（有时被称为学科），这些策略是各种聪明而勤奋的人多年来开发出来的。</p>\\n<p>事实上，调度的起源早于计算机系统；早期的方法来自运营管理领域，应用于计算机。这个事实应该不足为奇：装配线和许多其他人类工作也需要调度，其中存在许多相同的问题，包括对效率的强烈追求。</p>"}');export{e as data};
