import{_ as n,X as a,Y as s,a2 as e}from"./framework-a8949fcd.js";const i={},l=e(`<h1 id="第-3-章-任务管理" tabindex="-1"><a class="header-anchor" href="#第-3-章-任务管理" aria-hidden="true">#</a> 第 3 章 任务管理</h1><h2 id="_3-1-章节介绍和学习范围" tabindex="-1"><a class="header-anchor" href="#_3-1-章节介绍和学习范围" aria-hidden="true">#</a> 3.1 章节介绍和学习范围</h2><h3 id="学习范围" tabindex="-1"><a class="header-anchor" href="#学习范围" aria-hidden="true">#</a> 学习范围</h3><p>本章节旨在让读者能够理解以下几点：</p><ul><li>在应用程序中，FreeRTOS 怎样为每个任务分配执行时间；</li><li>FreeRTOS 怎样决定什么时间执行哪一个任务；</li><li>每个任务的相对优先级如何影响系统的行为；</li><li>一个任务存在的状态。</li></ul><p>读者也应该能够了解：</p><ul><li>如何实现任务；</li><li>如何创建一个或者多个任务实例；</li><li>如何使用任务参数；</li><li>如何更改已经创建了的任务的优先级；</li><li>如何删除任务；</li><li>如何周期性的执行一个任务（软件定时器会在后续章节讲到）；</li><li>空闲任务什么时候会执行以及如何使用。</li></ul><p>本章介绍的概念是了解如何使用 FreeRTOS 和理解 FreeRTOS 应用程序如何运行的基础。所以这是本书最详细的章节。</p><h2 id="_3-2-任务函数" tabindex="-1"><a class="header-anchor" href="#_3-2-任务函数" aria-hidden="true">#</a> 3.2 任务函数</h2><p>任务是用 C 函数实现的。唯一特别的是他们的原型必须返回 void 类型并接受一个 void 类型的指针参数。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">ATaskFunction</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>pvParameters<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div list>清单 11. 任务函数原型</div><p>任务就是一个小程序。任务的入口是任务实现函数，任务实现函数由两部分组成：变量的定义和任务主体。任务主体是一个无限循环，用于执行任务的功能。如果一个任务不需要再执行，应该在退出任务主体循环后直接删除这个任务。</p><p>FreeRTOS 任务禁止以任何方式从任务实现函数中返回：</p><ol><li>任务函数中不能包含 return 语句；</li><li>不能在函数结束后继续执行。</li></ol><p>在创建时多个任务时，可以使用同一任务实现函数，每一个已经创建的任务是一个独立的执行实例，拥有自己的堆栈和任务本身定义的任何局部（堆栈）变量的副本。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">ATaskFunction</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>pvParameters<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/* 定义变量和普通函数没有什么区别。每一个使用这个例程函数的任务实例，
     * 都会有自己的局部变量副本，如果一个变量使用 static 关键字，
     * 这个变量就只会有一个变量副本， 每一个创建的任务实例都会共享这一个变量副本。
     */</span>
    <span class="token class-name">int32_t</span> lVariableExample <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token comment">/* 任务主体。
     */</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">/* 任务功能实现代码 */</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 如果任务实现需要退出上述循环，则必须在任务执行功能结束前删除该任务。
     * 调用 vTaskDelete() API 函数时，传入 NULL，表示要被删除的任务是当前调用任务。
     * 在第 1 章中有API 函数的命名规约相关描述。使用早于V9.0.0的FreeRTOS版本的项目
     * 必须构建其中一个heap_n.c文件之一。从 FreeRTOS V9.0.0 开始，
     * 只有在FreeRTOSConfig.h 中将 configSUPPORT_DYNAMIC_ALLOCATION 设置为 1 或者
     * 未定义 configSUPPORT_DYNAMIC_ALLOCATION 时才需要 heap_n.c 文件。
     */</span>
    <span class="token function">vTaskDelete</span><span class="token punctuation">(</span> <span class="token constant">NULL</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div list>清单12. 典型的任务函数结构</div><h2 id="_3-3-顶层任务状态" tabindex="-1"><a class="header-anchor" href="#_3-3-顶层任务状态" aria-hidden="true">#</a> 3.3 顶层任务状态</h2>`,19),c=[l];function t(p,d){return a(),s("div",null,c)}const r=n(i,[["render",t],["__file","chapter3.html.vue"]]);export{r as default};
