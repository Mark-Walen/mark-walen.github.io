const s=JSON.parse('{"key":"v-efc2cf82","path":"/embedded-system/ecp/iic/","title":"理解 I2C 总线","lang":"zh-CN","frontmatter":{"title":"理解 I2C 总线","date":"2024-01-03T00:00:00.000Z","headerDepth":2,"description":"本文主要介绍了 I2C 接口通信","head":[["meta",{"property":"og:url","content":"https://mark-walen.github.io/embedded-system/ecp/iic/"}],["meta",{"property":"og:site_name","content":"蓝芒小栈"}],["meta",{"property":"og:title","content":"理解 I2C 总线"}],["meta",{"property":"og:description","content":"本文主要介绍了 I2C 接口通信"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mark-walen.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-04T09:18:51.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"理解 I2C 总线"}],["meta",{"property":"article:author","content":"Mark Walen"}],["meta",{"property":"article:published_time","content":"2024-01-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-04T09:18:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"理解 I2C 总线\\",\\"image\\":[\\"https://mark-walen.github.io/\\"],\\"datePublished\\":\\"2024-01-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-04T09:18:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mark Walen\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"思维导图","slug":"思维导图","link":"#思维导图","children":[]},{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"电子特性","slug":"电子特性","link":"#电子特性","children":[{"level":3,"title":"开漏用于双向通信","slug":"开漏用于双向通信","link":"#开漏用于双向通信","children":[]}]},{"level":2,"title":"术语","slug":"术语","link":"#术语","children":[]}],"git":{"createdTime":1704359931000,"updatedTime":1704359931000,"contributors":[{"name":"Mark-Walen","email":"mark_walen@qq.com","commits":1}]},"readingTime":{"minutes":3.18,"words":953},"filePathRelative":"embedded-system/ecp/iic/README.md","localizedDate":"2024年1月3日","excerpt":"<h2> 思维导图</h2>\\n<h2> 简介</h2>\\n<p>Inter-Integrated Circuit（<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msup><mtext>I</mtext><mn>2</mn></msup><mtext>C</mtext></mrow><annotation encoding=\\"application/x-tex\\">\\\\text{I}^2\\\\text{C}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8873em;\\"></span><span class=\\"mord\\"><span class=\\"mord text\\"><span class=\\"mord\\">I</span></span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8873em;\\"><span style=\\"top:-3.1362em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span><span class=\\"mord text\\"><span class=\\"mord\\">C</span></span></span></span></span>）总线是由飞利浦公司最初为消费品开发的一种双线串行接口。它是一种半双工总线，可以轻松在任何 IC 工艺（NMOS、CMOS、双极）中实现，并允许简单的IC间通信。通过使用串行数据线（SDA）、串行时钟线（SCL）和共同的地线来进行所有通信，可以最小化连接。<span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msup><mtext>I</mtext><mn>2</mn></msup><mtext>C</mtext></mrow><annotation encoding=\\"application/x-tex\\">\\\\text{I}^2\\\\text{C}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8873em;\\"></span><span class=\\"mord\\"><span class=\\"mord text\\"><span class=\\"mord\\">I</span></span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8873em;\\"><span style=\\"top:-3.1362em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span><span class=\\"mord text\\"><span class=\\"mord\\">C</span></span></span></span></span> 已经得到了广泛的接受，并且甚至作为系统管理总线（SMBus）的原型，SMBus 是 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msup><mtext>I</mtext><mn>2</mn></msup><mtext>C</mtext></mrow><annotation encoding=\\"application/x-tex\\">\\\\text{I}^2\\\\text{C}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8873em;\\"></span><span class=\\"mord\\"><span class=\\"mord text\\"><span class=\\"mord\\">I</span></span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8873em;\\"><span style=\\"top:-3.1362em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span><span class=\\"mord text\\"><span class=\\"mord\\">C</span></span></span></span></span> 的一个子集。</p>"}');export{s as data};