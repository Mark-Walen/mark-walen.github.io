import{_ as t,X as d,Y as a,a2 as e}from"./framework-a8949fcd.js";const i="/assets/ll_le_uncoded_packet-7ffceebb.png",r="/assets/ll_le_coded_packet-8bd3e885.png",n="/assets/ll_state_machine-1a9fb0be.png",s="/assets/ll_acl-5a796c3d.png",p="/assets/ll_advb-42b8f218.png",o="/assets/ll_bpe_over_acl-bdee7a46.png",l="/assets/ll_seop-d04eaeba.png",h="/assets/ll_retransmissions-9ddf6589.png",c="/assets/ll_crc_failure-54614999.png",_="/assets/ll_acl_peripheral_latency-d7071ef4.png",g="/assets/ll_afh_distributing_comm_ac-c443d68b.png",A="/assets/ll_basic_subrated_conn_sf5-058b850c.png",f="/assets/ll_advb_lacu-a9d8d83c.png",u="/assets/ll_ade_perturbed_in_time-ed7ce5a2.png",D="/assets/ll_reduced_contention_duty_cycle-83853ed0.png",P="/assets/ll_extend_adv-86fbda8a.png",E="/assets/ll_eadv_packet_chaining-1650d579.png",C="/assets/ll_periodic_advertising_events-572b9d80.png",b="/assets/ll_pawr_ese-7959dd94.png",N="/assets/ll_pawr_se_wrs-9e74afe7.png",L={},U=e('<h2 id="思维导图" tabindex="-1"><a class="header-anchor" href="#思维导图" aria-hidden="true">#</a> 思维导图</h2><h2 id="链路层概览" tabindex="-1"><a class="header-anchor" href="#链路层概览" aria-hidden="true">#</a> 链路层概览</h2><p>链路层规范几乎是蓝牙核心规范中 BLE 部分中最大的部分，仅次于主机控制器接口功能规范部分。然而可以说，它是最复杂的部分。</p><p>链路层有许多责任。它定义了通过空中传输的多种数据包和相关的空中接口协议。它的操作受到明确定义的状态机的影响。根据状态的不同，链路层可能以多种不同的方式运行，由多种类型的事件驱动。定义了许多影响链路状态或链路使用参数的控制过程。链路层规范中还定义了无线信道的选择和分类。</p><p>链路层支持连接和无连接的通信，以及确定性和（稍微）随机化的事件定时。支持两个设备进行点对点通信和一对多的通信模式（一个设备发送的消息，多个设备可以同时接收。）</p><h2 id="数据包格式" tabindex="-1"><a class="header-anchor" href="#数据包格式" aria-hidden="true">#</a> 数据包格式</h2><p>链路层定义了两种数据包格式。</p><ul><li><p>第一种是非编码的物理层使用的数据包格式（LE 1M 和 LE 2M）：</p><figure><img src="'+i+'" alt="ll_le_uncoded_packet.png" tabindex="0" loading="lazy"><figcaption>图2. 非编码的物理层使用的数据包格式</figcaption></figure></li><li><p>第二种是编码的物理层使用的数据包格式 （LE Coded S=2 和 LE Coded S=8）：</p><figure><img src="'+r+'" alt="ll_le_coded_packet" tabindex="0" loading="lazy"><figcaption>图3. 编码的物理层使用的数据包格式</figcaption></figure></li></ul><p>两种数据包类型都包括前导码、接入地址和CRC字段。表1解释了这些共同字段的每个部分。</p><p><strong>表一. 链路层数据包格式共有字段</strong></p><table><thead><tr><th>链路层数据包字段名称</th><th>描述</th></tr></thead><tbody><tr><td>前导码</td><td>前导码允许接收器精确同步信号的频率，执行自动增益控制并估算符号定时。</td></tr><tr><td>接入地址</td><td>接收方用接入地址区分信号和背景噪音，并确定数据包跟接收设备的相关性。例如，一对连接的设备交换具有相同随机分配的接入地址的数据包。未参与连接的设备将忽略此类数据包，因为接入地址与它们不相关。同样，所有传统的广播数据包都使用相同的接入地址，值为 0x8E89BED6，这表示这些数据包可被所有设备接收。</td></tr><tr><td>CRC</td><td>循环冗余校验（CRC）用于错误检测。发射方使用数据包中其他位的值来计算其值。在接收到一个数据包时，接收设备会根据接收到的数据包的位值计算出一个CRC值，除了构成 CRC 字段的那些位。然后，接收方计算得到的 CRC 值与数据包中 CRC 字段的值进行比较。如果两个 CRC 值匹配，那么数据包被认为已正确接收。如果不匹配，则被认为包含一个或多个错误位。</td></tr></tbody></table><p>链路层数据包的 PDU 字段可能包含各种不同的协议数据单元（PDUs），具体取决于 BLE的使用方式。当使用两种定向找寻方法之一（到达角或离开角）时，才会存在 Constant Tone Extension（CTE）。</p><p>在数据包传输之前，PDU 和 CRC 字段会经过一种称为白化的过程。白化<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>的目的是避免数据包中出现长序列的 0 或 1，因为这可能导致接收方的频率锁定漂移。接收方会反转白化过程，以在检查 CRC 之前恢复原始的位流。</p><p>PDU 字段可能会进行加密，此时它包括一个消息完整性检查字段，用于防止 PDU 被篡改。</p><p>在使用 LE Coded PHY 时，比特流在传输前会受到额外的处理。首先应用前向纠错（FEC）编码器，然后通过模式映射器生成额外的数据，接收方在逆向应用这些过程时使用该数据，并在可能的情况下纠正任何具有不正确值的位。</p><h2 id="状态机" tabindex="-1"><a class="header-anchor" href="#状态机" aria-hidden="true">#</a> 状态机</h2><p>链路层由如图 4 所展示的状态机来管理。</p><figure><img src="'+n+'" alt="ll_state_machine" width="540" tabindex="0" loading="lazy"><figcaption>图 4. 链路层状态机</figcaption></figure><p>请参考链路层规范以获取每个状态的详细信息。<strong>表二</strong>中提供了一个摘要。请注意，此部分的某些术语将在后面的内容中进行解释。</p><p><strong>表二. 链路层状态</strong></p><table><thead><tr><th>状态</th><th>描述</th></tr></thead><tbody><tr><td>待机（Standby）</td><td>设备即不发送数据包也不接收数据包</td></tr><tr><td>发起连接 （Initiating）</td><td>响应来自特定设备的广播包以请求建立连接。</td></tr><tr><td>广播 （Advertising）</td><td>发送广播包并处理其他设备的响应广播包。</td></tr><tr><td>连接 （Connection）</td><td>与另一设备建立了连接。</td></tr><tr><td>扫描 （Scanning）</td><td>监听来自其它设备广播包</td></tr><tr><td>等时广播</td><td>广播等时数据包。</td></tr><tr><td>同步</td><td>监听特定设备传输的特定广播的周期性广播。</td></tr></tbody></table><p>在连接状态时，BLE 定义了两个重要的设备角色，分别是中心角色（central role）和外围角色。发起连接并从初始化状态过渡到连接状态的设备承担中心角色（peripheral role）。接受连接请求，从广播状态过渡到连接状态的设备承担外围角色。</p><p>以智能手机为例，该手机包括音乐播放器应用和便携式蓝牙 LE 音箱。通常，智能手机将扮演中心角色，音箱将扮演外围角色。智能手机通过扫描音箱的广播数据包发现音箱，然后通常在用户的参与下启动与音箱的连接。一旦连接，按照相关 LE 音频规范中定义的附加过程，然后建立音频流。</p><p>一个状态机实例某一时刻只能处于一种状态。链路层的实现可以支持多个状态机实例并发运行。</p><p>并不是所有的角色和状态都可以任意组合。可以去阅览蓝牙核心规范了解更多细节。</p><h2 id="信道选择" tabindex="-1"><a class="header-anchor" href="#信道选择" aria-hidden="true">#</a> 信道选择</h2><p>BLE 将 2.4 GHz频段划分为 40 个信道。链路层控制这些信道的使用方式，这反过来取决于蓝牙低功耗用于通信的总体方式（更正式地说，这在第 7 节数据传输体系结构中有所涉及）。</p><p>蓝牙低功耗以多种不同的方式使用频谱扩展技术，在一段时间内通过多个信道传输数据。这降低了碰撞的几率，使通信更可靠。</p><p>BLE 中使用的一种著名的频谱扩展技术是自适应频率跳频。这涉及用于数据包通信的无线电信道定期更改。<strong>通过使用信道选择算法和称为信道映射的数据表来选择信道，该表将每个信道分类为已使用或未使用</strong>。实现可以监视每个信道上的通信质量，如果发现某个信道的性能不佳，可能是由于来自其他源的干扰，可以更新信道映射以将该信道的分类设置为未使用，从而确保该信道不再被算法选择。通过这种方式，信道选择算法能够适应当前的条件，并优化以获得最可靠的性能。、</p><p>有关如何使用无线电信道的详细信息将在下文讨论 BLE 逻辑传输及其相关物理信道时进一步描述。</p><h2 id="数据传输架构" tabindex="-1"><a class="header-anchor" href="#数据传输架构" aria-hidden="true">#</a> 数据传输架构</h2><p>蓝牙核心规范的架构部分定义了一系列概念，共同构成了蓝牙数据传输架构。其中关键的概念包括<u>物理信道</u>、<u>物理链路</u>、<u>逻辑链路</u>和<u>逻辑传输</u>。为支持不同应用类型，已定义了特定的组合，每种都具有关于拓扑结构、时序、可靠性和信道使用等方面的特定要求。</p><p><strong>物理信道</strong>定义了使用蓝牙进行通信的多种方式之一。例如，两个连接的设备之间可以使用LE Piconet<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> 物理信道进行通信，其中涉及跨 37 个信道的自适应频率跳跃。另外，LE 广播物理信道可用于从一个设备无连接地向无限数量的其他设备进行广播通信。LE 周期物理信道也可用于定期广播数据，但具有确定性的时间计划。观察者（接收器）设备能够确定该时间计划并使用它来同步其扫描计划。</p><p><strong>物理链路</strong>基于单个特定的物理信道，并指定了该链路的某些特性，如是否使用功率控制。</p><p><strong>逻辑链路和传输</strong>具有各种参数，旨在通过物理链路使用特定的物理信道类型，提供支持特定数据通信需求的适当手段。</p><p>例如，在 BLE 中，可靠的、双向的、点对点通信使用 LE 异步连接导向逻辑（ACL）传输，其中可以使用 LE-C 链路传输控制数据，或者使用 LE-U 链路传输用户数据，这发生在基于 LE Piconet 物理信道的物理链路上。</p><figure><img src="'+s+'" alt="ll_acl" tabindex="0" loading="lazy"><figcaption>图 5. 异步面向连接逻辑（ACL）传输</figcaption></figure><p>另一方面，在 BLE 中，不可靠的、单向的广播通信使用 LE 广播（ADVB）逻辑传输，其中可以使用 ADVB-C 链路传输控制数据，或者使用 ADVB-U 链路传输用户数据，这发生在基于 LE 广播物理信道的物理链路上。</p><figure><img src="'+p+'" alt="ll_advb" tabindex="0" loading="lazy"><figcaption>图 6. LE 广播（ADVB）逻辑传输</figcaption></figure><h2 id="逻辑传输" tabindex="-1"><a class="header-anchor" href="#逻辑传输" aria-hidden="true">#</a> 逻辑传输</h2><h3 id="le-acl-异步面向连接的逻辑传输" tabindex="-1"><a class="header-anchor" href="#le-acl-异步面向连接的逻辑传输" aria-hidden="true">#</a> LE ACL 异步面向连接的逻辑传输</h3><h4 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h4><p>当两个 BLE 设备连接时，它们使用异步面向连接逻辑传输（LE-ACL 或简称 ACL）。LE-ACL 是最常用的 BLE 逻辑传输类型之一，支持面向连接的数据通信。实际上，ACL 连接通常简称为连接。</p><p>设备可以通过响应接收到的广播数据包，并携带一个请求连接的 PDU 来与广播设备建立连接。请求中指定了多个参数，其中包括<u>接入地址</u>、<u>连接间隔</u>、<u>外围设备延迟</u>、<u>监管超时</u>和<u>信道映射</u>。</p><p><strong>连接间隔</strong>参数定义了<em>在多少毫秒内，无线电可以用于为此连接提供服务</em>。每当连接间隔到期时，就会开始一个连接事件，在此时，连接中的中央设备可以传输一个数据包。给定连接的每个连接事件都有一个16位的标识符，这是一个在每个事件时递增的计数器值。在每个连接事件开始时，使用适用的信道选择算法选择要使用的射频信道。</p><p><strong>监管超时</strong>参数指定两个链路层数据包接收之间最长允许的时间，超过这个时间，认为链路已经丢失。</p><p>外围设备具有与中央设备相同的已同意连接参数，因此外围设备知道何时可以接收中央设备传输的数据包以及在哪个信道上接收数据包。因此，它可以选择在完全相同的时间监听该信道，从而接收中央设备的数据包。外围设备可以在接收完中央设备的数据包的最后一位后的150微秒（+/- 2µs）内回复给中央设备。中央和外围设备随后轮流进行，交替发送和接收数据包，并且在连接事件期间可以交换一定数量的数据包，该数量由实现定义。请注意，外围设备的行为可能会受到非零的外围设备延迟参数值的影响。</p><p>图 7 显示了在两个连接事件期间的基本数据包交换，其中 C&gt;P 表示中央设备的数据包传输，P&gt;C 表示外围设备的数据包传输。</p><figure><img src="'+o+'" alt="ll_basic_packet_exchange_over_acl" tabindex="0" loading="lazy"><figcaption>图 7. 通过 LE ACL 连接进行基本数据包交换</figcaption></figure><h4 id="有序和确认-ack" tabindex="-1"><a class="header-anchor" href="#有序和确认-ack" aria-hidden="true">#</a> 有序和确认（ACK）</h4><p>LE-ACL 包含一个系统，确保数据按正确的顺序处理，可以确认接收数据包，并利用这一确认来决定是继续处理下一个数据包，还是重新传输前一个数据包。</p><p>数据包含三个重要字段，有助于确保通信的可靠性。这些字段称为序列号（SN）、下一个预期序列号（NESN）和更多数据字段。这三个字段都是单比特字段，它们的使用提供了一种确认系统和检查接收到的数据包正确顺序的方法。</p><p><strong>通信始于</strong>主设备（设备A）发送一个链路层数据包，<u>其中 SN 和 NESN 都设置为零</u>。从这一点开始，在每次数据包交换中，如果一切正常，由设备 A 设置的 SN 字段的值将在 0 和 1 之间交替。因此，通用设备（设备B）总是知道下一个要接收的数据包的 SN 值，并进行检查。</p><p><em>如果设备 B 从设备 A 接收到具有预期 SN 值的数据包</em>，它会以一个链路层数据包回应，其中 NESN 被设置为逻辑值 NOT(SN)。例如，如果接收到的 SN 值为 1，那么响应中的NESN将为 0。</p><p>当设备 A 从设备 B 接收到一个响应，其中 NESN 被设置为设备 A 打算在其下一个数据包中用作SN的值时，设备A将其视为设备B的确认，证实它正确接收了上一个传输的数据包。图8 显示了这个过程。</p><figure><img src="'+l+'" alt="A successful exchange of packets at the link layer  " tabindex="0" loading="lazy"><figcaption>图 8. 链路层成功交换数据过程</figcaption></figure><p><em>如果设备 B 接收到一个带有错误 SN 值的数据包</em>，它会假设该数据包是先前接收到的数据包的重传，对其进行确认，但不会将其传递到协议栈的上层进行进一步处理。<em>如果设备 A 从设备 B 的回复中收到一个意外的 NESN 值，或者根本没有收到回复</em>，它会重新发送具有最初使用的相同SN值的数据包。不同的控制器实现可以自由地实现关于在何时断定通信失败之前重新发送多少次的算法。参见图 9。</p><figure><img src="'+h+'" alt="ll_retransmissions" tabindex="0" loading="lazy"><figcaption>图 9. 链路层超时重传</figcaption></figure><p>每个数据包都包含一个 CRC 字段，而加密的数据包还包含一个 MIC 字段。在接收到一个数据包时，链路层会检查 CRC 和（如果存在的话）MIC。如果任一检查失败，数据包将不被确认，这通常会导致数据包的发送者重新发送它。参见图 10。</p><figure><img src="'+c+'" alt="Link Layer handling CRC failure" tabindex="0" loading="lazy"><figcaption>图 10. 链路层校验 CRC 失败</figcaption></figure><h4 id="外围设备延迟" tabindex="-1"><a class="header-anchor" href="#外围设备延迟" aria-hidden="true">#</a> 外围设备延迟</h4><p>外围设备在每个连接事件期间并非必须监听中央设备的数据包。外围设备延迟参数定义了在这段时间内，外围设备不必监听的连续连接事件的数量，这有助于降低外围设备功耗。</p><p>图 11 展示了外围设备在外围设备延迟为 1 时的行为，因此只在交替的连接事件期间进行监听。中央设备可能会在外围设备不监听的事件中进行传输，但这样的数据包将不会被接收，因此也不会被确认，从而结束连接事件。</p><figure><img src="'+_+'" alt="An ACL connection with Peripheral Latency = 1" tabindex="0" loading="lazy"><figcaption>图 11. 外围设备延迟为 1 的 ACL 连接</figcaption></figure><h4 id="信道使用" tabindex="-1"><a class="header-anchor" href="#信道使用" aria-hidden="true">#</a> 信道使用</h4><p>LE-ACL 采用一种称为自适应跳频技术。在每个连接事件开始时，进行跳频，使用信道选择算法从可用信道集中确定性地选择一个射频信道。然后，连接中的每个设备将切换到所选的信道，随着时间的推移和一系列连接事件，通信将使用一系列频繁更换的不同信道进行，分布在 2.4 GHz 频段上，从而显著降低碰撞发生的概率。</p><p>在蓝牙LE定义的 40 个信道中，有 37 个信道（称为通用信道）可供 LE-ACL 连接使用。</p><p>在特定环境中，一些蓝牙射频信道可能运行不佳，可能是因为受到干扰的影响，而其他信道则可靠运行。随着环境中其他无线通信设备的进出，可靠信道和不可靠信道的列表可能会随时间而变化。</p><p>连接中的中央设备维护一个信道映射，将通用信道分类为可靠或不可靠。通过链路层过程，该信道映射与外围设备共享，以便它们都具有相同的信息，即哪些信道将被使用，哪些不会被使用。信道选择算法确保在跳频期间避免使用被标记为不可靠的信道。</p><p>默认情况下，所有通用信道都被标记为可靠，但中央设备可以使用特定于实现的技术监控每个信道的运行状况。如果中央设备确定一个或多个信道的运行状况不佳，它可以在信道映射表中将这样信道的分类更新为不可靠。相反，如果之前不良的信道现在运行良好，它的分类可以在信道映射中更新为可靠。然后，可以将信道映射更新与外围设备共享。</p><p>外围设备也可以进行自己的信道监测，并在一定间隔内向中央设备发送信道状态报告，其中每个信道的状态被分类为良好、不良或未知。然后，中央设备可以根据自己的射频条件和远程外围设备的现状，做出关于信道映射中信道分类的决策。</p><p>通过这种方式，BLE 设备可以仅使用可靠信道的最佳子集，因此例如，可以有效地与使用静态分配信道的其他无线技术共存。这就是蓝牙自适应跳频技术的自适应性。</p><p>图 12 展示了在测试期间两个连接设备使用信道的方式，并说明了射频使用如何分布在 ISM 2.4 GHz 频谱上。在图表底部，您可以看到信道索引和频率（以 MHz 为单位）。信道索引是引用射频信道的一种间接方式。</p><figure><img src="'+g+'" alt="Adaptive Frequency Hopping distributing communication across channels" tabindex="0" loading="lazy"><figcaption>图 12. 自适应跳频技术将通信分布在信道上</figcaption></figure><h4 id="逻辑链路控制" tabindex="-1"><a class="header-anchor" href="#逻辑链路控制" aria-hidden="true">#</a> 逻辑链路控制</h4><p>链路层规范指定了许多控制程序。一些示例出现在<strong>表三</strong>中。</p><p><strong>表三. 链路层控制过程例子</strong></p><table><thead><tr><th>控制过程</th><th>描述</th></tr></thead><tbody><tr><td>连接更新</td><td>允许中央设备或外围设备请求更改连接参数，包括连接间隔、外围延迟和监管超时。</td></tr><tr><td>信道映射更新</td><td>允许中央设备将其最新的信道映射数据传输给连接的外围设备。</td></tr><tr><td>加密</td><td>允许中央设备或外围设备启用数据包的加密。</td></tr><tr><td>特征交换</td><td>允许中央设备或外围设备启动支持的每个设备的链路层特性的交换，以位图字段编码。</td></tr><tr><td>周期广播同步传输</td><td>允许中央设备或外围设备通过LE ACL连接向另一设备传输与已发现的周期广播传输有关的周期广播同步信息。</td></tr><tr><td>CIS 创建过程</td><td>允许中央设备与外围设备创建连接的等时流（Connected Isochronous Stream，CIS）。</td></tr><tr><td>功率控制请求</td><td>允许一方请求另一方调整其发送功率水平。</td></tr><tr><td>信道分类报告</td><td>允许外围设备向连接的中央设备报告信道分类数据。</td></tr></tbody></table><h4 id="子速连接-subrated-connections" tabindex="-1"><a class="header-anchor" href="#子速连接-subrated-connections" aria-hidden="true">#</a> 子速连接（Subrated Connections）</h4><p>子速连接是 LE ACL（Low Energy Asynchronous Connectionless Link）连接，其具有分配给它们的附加属性，并在某些方面表现出不同的行为。这些附加属性称为子速率因子（subrate factor）、子速率基本事件（subrate base event）和连续编号（continuation number）。</p><p>子速连接属性提供了一种机制，用于指示连接的设备只会在特定的连接事件子集上进行活跃使用，而在其他连接事件上不使用射频。因此，子速连接可以具有较短的ACL连接间隔，但仍表现出低占空比。</p><p>图 13 说明了与子速连接相关的基本概念。</p><figure><img src="'+A+'" alt="A basic subrated connection with subrate factor=5" tabindex="0" loading="lazy"><figcaption>图 13. 子速率因子为 5 的基本子速连接</figcaption></figure><p>在这里，我们可以看到每五个连接事件中只有一个被使用。其他四个被跳过，因此在这些连接事件中没有射频活动。被使用与被跳过的连接事件的比例由子速率因子参数确定，在这个例子中设置为 5。射频用于传输和接收链路层数据包的连接事件被称为子速连接事件。</p><p>考虑到底层 ACL 连接参数与控制连接子速率的参数之间的关系，可以将子速连接视为具有控制 ACL 连接事件发生频率的连接间隔，以及有效连接间隔的连接。有效连接间隔确定在应用子速率参数之后实际使用这些 ACL 连接事件的频率。</p><p>子速连接使用一组不同的链路层控制过程，特别是用于更新子速连接参数的过程与一般的控制更新过程有所不同。至关重要的是，对子速连接参数的更改几乎可以立即应用，而一般参数更改可能需要很长时间才能生效。因此，子速连接的优势在于可以建立持久连接，表现出低占空比并消耗较少功率，而且可以在几乎没有用户能察觉的延迟下切换到高占空比、高带宽的连接。这种能力在一些LE音频场景中，如涉及助听器和智能手机的场景中具有特殊适用性。</p><p>《蓝牙核心规范版本5.3功能增强》文档有一个专门讨论子速连接的重要章节，强烈推荐作为进一步了解此主题的信息来源。</p><h3 id="advb——低功耗广播" tabindex="-1"><a class="header-anchor" href="#advb——低功耗广播" aria-hidden="true">#</a> ADVB——低功耗广播</h3><h4 id="基础-1" tabindex="-1"><a class="header-anchor" href="#基础-1" aria-hidden="true">#</a> 基础</h4><p>LE广播（或简称广播）提供了一种无连接的通信模式。它可用于传输数据或指示外围设备的可连接性。通常，广播数据包旨在被范围内的任何扫描设备接收，因此广播可以用于同时向多个扫描设备传输数据，形成一对多的拓扑结构。然而，还定义了一种称为定向广播的特殊形式，允许从一个广播设备无连接地向一个特定的扫描设备传输数据，该设备由其蓝牙设备地址标识。</p><p>广播本身仅支持单向数据通信，从广播设备到扫描设备，但这些设备可以通过 PDU 回复广播数据包，请求进一步的信息或建立连接。当扫描设备通过回复来获取更多信息时，称为主动扫描。当不回复时，称为被动扫描。</p><p>广播通常被称为一种不可靠的传输，因为接收方不会发送确认。</p><p>蓝牙核心规范中定义了两种广播程序，分别被称为传统广播（legacy advertising）和扩展广播（extended advertising）。</p><h4 id="传统广播-legacy-advertising" tabindex="-1"><a class="header-anchor" href="#传统广播-legacy-advertising" aria-hidden="true">#</a> 传统广播（Legacy Advertising）</h4><h5 id="信道使用和数据包大小" tabindex="-1"><a class="header-anchor" href="#信道使用和数据包大小" aria-hidden="true">#</a> 信道使用和数据包大小</h5><p>使用 ADV_IND PDU 类型的传统广播数据包（请参阅 7.2.2.3 传统广播和相关 PDU 类型）的长度为 37 个字节，其中包括一个 6 个字节的头部和最多 31 字节的有效载荷。广播数据包的相同副本通过最多三个专用信道（编号为 37、38 和 39，称为主广播信道）之一以某种顺序逐个传输。</p><figure><img src="'+f+'" alt="legacy advertising and channel use" tabindex="0" loading="lazy"><figcaption>图 14. 传统广播和信道使用</figcaption></figure><h5 id="调度" tabindex="-1"><a class="header-anchor" href="#调度" aria-hidden="true">#</a> 调度</h5><p>广播数据包的传输发生在每次广播事件发生时。广播事件的调度受到定时参数的控制，在基本情况下，有意的将调度设计为略微不规则的，以避免与其他广播设备发生持续的碰撞。在每个广播事件中，将 advDelay 分配一个伪随机值，该值在 0 - 10 毫秒的范围内，并将其添加到常规广播间隔（advInterval）中，以便扰动广播事件的时间。图 15 重现了蓝牙核心规范第 6 卷B部分中的图 4.5，并说明了 advDelay 参数的效果。</p><figure><img src="'+u+'" alt="Advertising events perturbed in time using advDelay" tabindex="0" loading="lazy"><figcaption>图 15. advDelay 参数对广播事件在时间的扰动。</figcaption></figure><p>以这种方式调度广播事件有助于避免碰撞，但也使得接收器更难以高效接收广播数据包，需要更高的接收（RX）占空比以适应广播事件的不可预测时序。</p><h5 id="传统广播和相关-pdu-类型" tabindex="-1"><a class="header-anchor" href="#传统广播和相关-pdu-类型" aria-hidden="true">#</a> 传统广播和相关 PDU 类型</h5><p>为传统广播定义了多种 PDU 类型。不同类型的 PDU 用于无定向广播，其中数据包面向任何扫描设备，以及有定向广播，其中数据包寻址到一个特定设备。PDU 类型还指示是否允许主动扫描，接收器是否会回复并请求更多数据，以及广播设备是否可以被连接。<strong>所有传统广播都在主广播信道 37、38 和 39 中的一个或多个上进行，并且只能使用 LE 1M PHY</strong>。</p><table><caption>表四. 传统广播 PDU 类型列表</caption><tr><th>PDU 名称</th><th>描述</th><th>信道</th><th>PHY 类别</th><th>发送角色</th><th>可扫描</th><th>可连接</th></tr><tr><td>ADV_IND</td><td>不定向广播</td><td>主信道</td><td>LE 1M</td><td>外围设备</td><td>是</td><td>是</td></tr><tr><td>ADV_DIRECT_IND</td><td>定向广播</td><td>主信道</td><td>LE 1M</td><td>外围设备</td><td>否</td><td>是</td></tr><tr><td>ADV_NONCONN_IND</td><td>不定向、不可连接、不可扫描的广播</td><td>主信道</td><td>LE 1M</td><td>外围设备</td><td>否</td><td>否</td></tr><tr><td>ADV_SCAN_IND</td><td>不定向可扫描广播</td><td>主信道</td><td>LE 1M</td><td>外围设备</td><td>是</td><td>否</td></tr><tr><td>SCAN_REQ</td><td>扫描请求</td><td>主信道</td><td>LE 1M</td><td>中央设备</td><td>N/A</td><td>N/A</td></tr><tr><td>SCAN_RSP</td><td>扫描响应</td><td>主信道</td><td>LE 1M</td><td>外围设备</td><td>N/A</td><td>N/A</td></tr><tr><td>CONNECT_REQ</td><td>连接请求</td><td>主信道</td><td>LE 1M</td><td>中央设备</td><td>N/A</td><td>N/A</td></tr></table><p>蓝牙核心规范中链接层规范章节的第 4.4 节详细介绍了所有广播 PDU 类型的信息。</p><h4 id="扩展广播-extended-advertising" tabindex="-1"><a class="header-anchor" href="#扩展广播-extended-advertising" aria-hidden="true">#</a> 扩展广播（Extended Advertising）</h4><p>蓝牙核心规范第5版引入了一些关于如何执行广播的重大变化。新增了八种与广播、扫描和连接相关的PDU以及定义了新的过程。这组新的广播能力集合被统称为扩展广播。</p><p>扩展广播允许广播更大量的数据，按确定性的时间表执行广播，并传输由不同配置管理的多组不同的广播数据。它在竞争和占空比方面也提供了显著的改进。</p><p>ADV 广播者（ADVB）和 PADVB 逻辑传输都可以使用扩展广播。</p><h5 id="信道和数据包大小" tabindex="-1"><a class="header-anchor" href="#信道和数据包大小" aria-hidden="true">#</a> 信道和数据包大小</h5><p>在发送传统广播时，广播信道的使用方式与在主广播信道 37、38 和 39 上执行广播时不同，其中主广播信道 37、38 和 39 携带较少的数据，而通用信道 0 - 36 携带大部分数据。</p><p>如 7.2.2 传统广播中所述，<strong>传统广播在三个不同的主广播信道上最多可以传输三次相同的有效载荷。扩展广播只传输有效载荷数据一次</strong>，通过小的标头从主广播信道引用它。因此，传输的数据总量比使用传统广播的等效情况少，因此有效占空比降低。</p><figure><img src="'+D+'" alt="Reduced contention and duty cycle" tabindex="0" loading="lazy"><figcaption>图 16. 降低碰撞的概率和占空比</figcaption></figure><p>扩展广播允许数据包的长度最多为 255 个字节。这部分是通过将有效载荷转移到 0-36 信道编号范围内的一个通用信道来实现的。</p><figure><img src="'+P+'" alt="Extended advertising supports larger advertising packets and channel offload" tabindex="0" loading="lazy"><figcaption>图 17. 扩展广播支持更大的广播数据包和信道卸载</figcaption></figure><p>在执行扩展广播时，只有头部数据被传输到 37、38 和 39 号主广播信道上。其中包括一个称为 AuxPtr 的字段。</p><p>AuxPtr 字段引用一个关联的辅助数据包，其中包含将在从 0 到 36 号信道中选择的一个通用信道上传输的有效载荷。AuxPtr 包括通用信道索引，指示将在其上传输辅助数据包的信道，以便接收方知道在哪里找到它。在主广播信道上的包引用 AuxPtr 字段的通过 AuxPtr 引用的通用信道上传输的数据包称为从属数据包，而引用的包称为上级数据包。</p><p>在 AuxPtr 中选择信道索引值是与实现相关的，蓝牙核心规范仅建议“使用足够的信道差异来避免碰撞”。</p><h5 id="数据包链式传输" tabindex="-1"><a class="header-anchor" href="#数据包链式传输" aria-hidden="true">#</a> 数据包链式传输</h5><p>在那些应用需要广播更多数据的情况下（最多 1,650 字节），控制器可以对数据进行分段并将数据包链接在一起，其中每个数据包包含数据的一个子集。每个链接的数据包可以在不同的信道上传输，AuxPtr 头字段引用链中的下一个数据包。图 18 说明了这一过程。</p><figure><img src="'+E+'" alt="Extended advertising with packet chaining" tabindex="0" loading="lazy"><figcaption>图 18. 扩展广播的链式传输</figcaption></figure><h5 id="广播集" tabindex="-1"><a class="header-anchor" href="#广播集" aria-hidden="true">#</a> 广播集</h5><p>传统广播未对广播有效负载和参数进行正式规定，不允许它们变化。而扩展广播包括了一种标准机制，用于拥有多组独立的广播数据。</p><p>广播集具有一个 ID，用于指示给定数据包属于哪个集合，每个集合都有自己的广播参数，如广播间隔和要使用的 PDU 类型。</p><p>安排和传输不同集合的任务由控制器中的链路层负责，而不是由</p><p>主机驱动，这将更加节能。主机只需最初通知控制器有关广播集及其各自参数，之后链路层接管这些任务。</p><h5 id="周期性广播" tabindex="-1"><a class="header-anchor" href="#周期性广播" aria-hidden="true">#</a> 周期性广播</h5><p>扩展广播包括一种使用确定性调度的广播方法，其详细信息可以被扫描设备发现并同步。这被称为周期性广播（Periodic Advertising）。周期性广播被定义为一个独立的逻辑传输，因此在第 7.3 节 PADVB - LE 周期性广播中进行了描述。</p><h5 id="扩展广播和相关-pdu-类型" tabindex="-1"><a class="header-anchor" href="#扩展广播和相关-pdu-类型" aria-hidden="true">#</a> 扩展广播和相关 PDU 类型</h5><table><caption>表五. 扩展广播 PDU 类型</caption><tr><th>PDU 名称</th><th>描述</th><th>信道</th><th>PHY</th><th>发送角色</th></tr><tr><td>ADV_EXT_IND</td><td>扩展广播主体</td><td>主信道</td><td>LE 1M, LE Coded</td><td>外围设备</td></tr><tr><td>AUX_ADV_IND</td><td>从属扩展广播通用数据</td><td>通用信道</td><td>LE 1M, LE 2M, LE Coded</td><td>外围设备</td></tr><tr><td>AUX_CHAIN_IND</td><td>附加广播数据通用数据</td><td>通用信道</td><td>LE 1M, LE 2M, LE Coded</td><td>外围设备</td></tr><tr><td>AUX_SYNC_IND</td><td>周期性广播同步</td><td>周期信道</td><td>LE 1M, LE 2M, LE Coded</td><td>外围设备</td></tr><tr><td>AUX_SCAN_REQ</td><td>辅助扫描请求</td><td>通用信道</td><td>LE 1M, LE 2M, LE Coded</td><td>中央设备</td></tr><tr><td>AUX_SCAN_RSP</td><td>辅助扫描响应</td><td>通用信道</td><td>LE 1M, LE 2M, LE Coded</td><td>外围设备</td></tr><tr><td>AUX_CONNECT_REQ</td><td>辅助连接请求</td><td>通用信道</td><td>LE 1M, LE 2M, LE Coded</td><td>中央设备</td></tr><tr><td>AUX_CONNECT_RSP</td><td>辅助连接响应</td><td>通用信道</td><td>LE 1M, LE 2M, LE Coded</td><td>外围设备</td></tr></table><p>ADV_EXT_IND、AUX_ADV_IND、AUX_SCAN_RSP、AUX_SYNC_IND、AUX_CHAIN_IND 和 AUX_CONNECT_RSP 类型的 PDU 的有效负载采用了通用扩展广播有效负载格式。其中包括 AuxPtr 字段和 AdvMode 字段等字段。AdvMode 使用两位来指示广播模式的可连接和可扫描属性，而不是使用不同的 PDU 类型。</p><p>蓝牙核心规范中链接层规范章节的第 4.4 节详细介绍了所有广播 PDU 类型的信息。</p><h5 id="调度-1" tabindex="-1"><a class="header-anchor" href="#调度-1" aria-hidden="true">#</a> 调度</h5><p>扩展广播发生在扩展广播事件中。扩展广播事件与广播事件同时开始，包括具有 AuxPtr 字段的上级数据包以及与之相关的从属数据包。</p><h4 id="传统广播和扩展广播的比较" tabindex="-1"><a class="header-anchor" href="#传统广播和扩展广播的比较" aria-hidden="true">#</a> 传统广播和扩展广播的比较</h4><p><strong>表六</strong>总结了传统广播与扩展广播的比较</p><table><caption>表六. 传统广播和扩展广播的比较</caption><thead><tr><th></th><th>传统广播</th><th colspan="2">扩展广播</th></tr></thead><tbody><tr><td>主机最大广播数据大小</td><td>31 字节</td><td>1,650 字节</td><td>扩展广播支持分片，从而支持最大主机广播数据大小增加50倍。</td></tr><tr><td>每个主机数据包的最大长度</td><td>31 字节</td><td>254 字节</td><td>扩展广播PDU使用通用扩展广播有效负载格式，支持广播数据字段增大8倍。</td></tr><tr><td>TX 信道</td><td>37, 38, 39</td><td>0-39</td><td>扩展广播使用37个通用信道作为次要广播信道。ADV_EXT_IND PDU 类型只能在主广播信道（37、38、39）上传输。</td></tr><tr><td>PHY支持</td><td>LE 1M</td><td>LE 1M、LE 2M（不包括 ADV_EXT_IND PDU）、LE Coded</td><td>所有扩展广播 PDU（除 ADV_EXT_IND 外）可使用三个 LE PHY 之一进行传输，而 ADV_EXT_IND PDU 可使用 LE 1M 或 LE Coded PHY 进行传输。</td></tr><tr><td>最大活动广播配置</td><td>1</td><td>16</td><td>扩展广播包括广播集，使广播设备能够同时支持最多 16 个不同的广播配置，并根据集合中定义的时间间隔交错每个广播集的广播。</td></tr><tr><td>通信类型</td><td>异步</td><td>异步、同步</td><td>扩展广播包括周期广播，支持发射器和接收器之间的广播数据的时间同步通信</td></tr></tbody></table><h3 id="padvb——低功耗周期性广播" tabindex="-1"><a class="header-anchor" href="#padvb——低功耗周期性广播" aria-hidden="true">#</a> PADVB——低功耗周期性广播</h3><h4 id="基础-2" tabindex="-1"><a class="header-anchor" href="#基础-2" aria-hidden="true">#</a> 基础</h4><p>ADV 广播逻辑传输（参见7.7.2 ADVB - LE广播广播）发送的广播包传输在时序上包含一定程度的随机性。在广播事件的调度中，故意插入了 0 到 10 毫秒之间的随机延迟，以避免持续的数据包冲突。在执行传统广播时，这是广播工作的唯一方式。</p><p>周期性广播涉及按确定性日程传输数据包，并提供一种机制，允许其他设备将其扫描同步到广播设备的日程。<strong>周期性广播始终是不可扫描和不可连接的</strong>。周期性广播可以通过为观察设备提供更省电的扫描方式来提高效率，是 LE 音频广播解决方案中的关键组成部分。</p><p>广播以固定的间隔进行，称为周期性广播间隔，广播数据负载可能会发生变化。一系列 AUX_SYNC_IND 和相关的 AUX_CHAIN_IND PDU 形成了一个周期性广播传输。</p><p>在每个周期性广播事件中，先传输一个 AUX_SYNC_IND PDU，然后根据主机提供的负载是否需要分片，传输零个或多个 AUX_CHAIN_IND PDU。</p><p>AUX_ADV_IND PDU 包括一个称为 SyncInfo 的字段，它是通用扩展广播有效负载格式的一部分，包含信道和时序偏移信息。</p><h4 id="信道使用-1" tabindex="-1"><a class="header-anchor" href="#信道使用-1" aria-hidden="true">#</a> 信道使用</h4><p>周期性广播使用 37 个通用广播信道。在每个周期性广播事件的开始，使用信道选择算法#2选择一个信道，该算法的输入是称为 paEventCounter 的事件计数器字段。该计数器在每个周期性广播事件中递增。与 AUX_SYNC_IND PDU 相关的任何辅助 AUX_CHAIN_IND PDU 都使用特定于实现的算法进行信道选择，并在 AuxPtr 字段中指定。请参见图 19。</p><h4 id="调度-2" tabindex="-1"><a class="header-anchor" href="#调度-2" aria-hidden="true">#</a> 调度</h4><p>周期性广播间隔确定给定广播集的周期性广播可以发生的频率。它始于 AUX_SYNC_IND PDU 的传输，并随后传输零个或多个 AUX_CHAIN_IND PDU，如图 18 所示。</p><figure><img src="'+C+'" alt="Periodic advertising events" tabindex="0" loading="lazy"><figcaption>图 19. 周期性广播事件</figcaption></figure><p>请注意，图 19 已经简化，可能有多个在不同主广播信道上的 ADV_EXT_IND PDU 被表示为一个单一的框。</p><h4 id="同步建立" tabindex="-1"><a class="header-anchor" href="#同步建立" aria-hidden="true">#</a> 同步建立</h4><p>扫描设备可以通过两种方式之一与周期性广播传输进行同步。它可以扫描 AUX_ADV_IND PDU，并使用 SyncInfo 字段的内容来建立要使用的周期性广播间隔、时序偏移和信道信息，或者它可以通过 LE-ACL 连接从另一台设备接收此信息，该设备本身已经从 AUX_ADV_IND PDU 中确定了此信息。这种方法被称为周期性广播同步传输过程。</p><h3 id="pawr-——-具有响应的-le-周期性广播" tabindex="-1"><a class="header-anchor" href="#pawr-——-具有响应的-le-周期性广播" aria-hidden="true">#</a> PAwR —— 具有响应的 LE 周期性广播</h3><h4 id="基础-3" tabindex="-1"><a class="header-anchor" href="#基础-3" aria-hidden="true">#</a> 基础</h4><p>PAwR 与 PADVB 相似之处：</p><ul><li>PADVB 允许应用数据由一个设备（广播者）传输到一个或多个接收设备（观察者），形成一对多的通信拓扑结构。PAwR 也是如此；</li><li>PAwR 和 PADVB 都使用物理机的通信方式；</li><li>广播数据包的传输在两种情况下均是周期性的，具有固定的间隔，并且在调度中没有随机扰动。</li><li>观察者可以通过AUX_ADV_IND PDU或使用周期广播同步传输（PAST）程序来建立由广播者使用的周期传输计划；</li></ul><p>PAwR 与 PADVB 不同之处：</p><ul><li>数据通信机制 <ul><li>PADVB支持从广播者到观察者的单向数据通信；</li><li>PAwR观察者可以向广播器发送响应数据包。PAwR提供双向、无连接的通信机制。</li></ul></li><li>同步信息 <ul><li>PADVB 的同步信息包含在 AUX_ADV_IND PDU 的 SyncInfo 字段中；</li><li>PAwR 的同步信息包含在 AUX_ADV_IND PDU 的 SyncInfo 字段和 ACAD 字段中。</li></ul></li><li>数据传输 <ul><li>PADVB 广播者在广播事件内安排传输；</li><li>PAwR 广播者在一系列事件和子事件中安排传输，观察者预期以同步的方式进行，以便仅在特定子事件或子事件期间进行监听。</li></ul></li><li>发送连接请求，建立 LE-ACL 连接 <ul><li>PADVB 不具备这个能力；</li><li>PAwR 广播器可以使用传输时隙发送连接请求（AUX_CONNECT_REQ PDU）到特定设备，并与其建立 LE-ACL 连接。</li></ul></li><li>数据更改 <ul><li>在 PADVB 中，应用数据往往只在一段时间内更改；</li><li>PAwR 设计时预期应用数据会频繁更改。</li></ul></li><li>应用数据传递 <ul><li>使用 PADVB，相同的应用数据传递给所有与同一广播集同步的观察者设备；</li><li>使用 PAwR，可以将不同的数据传递给每个观察者设备或一组观察者设备。</li></ul></li></ul><p>支持 PAST 过程对 PADVB 来说是可选的，对 PAwR 是必须的。</p><h4 id="信道的使用" tabindex="-1"><a class="header-anchor" href="#信道的使用" aria-hidden="true">#</a> 信道的使用</h4><p>信道选择是通过使用信道选择算法 #2 完成的，并且在每个周期广播子事件中进行（参见7.2.3 调度）。在子事件中传输的 PDU 的响应使用相同的信道。这包括对AUX_SYNC_SUBEVENT_IND PDU 的响应中发送的 AUX_SYNC_SUBEVENT_RSP PDU 以及对 AUX_CONNECT_REQ PDU 的响应中发送的 AUX_CONNECT_RSP PDU。</p><h4 id="调度-3" tabindex="-1"><a class="header-anchor" href="#调度-3" aria-hidden="true">#</a> 调度</h4><p>与其他广播模式一样，PAwR 的活动发生在称为“PAwR事件”的事件中。这些事件以固定的间隔发生，调度中没有随机扰动。每个周期广播间隔 ms 开始一个事件。</p><p>每个PAwR事件包含多个子事件，在子事件期间传输广播数据包。主机配置每个事件的子事件数量，最多为128个。每个周期广播子事件间隔 ms 开始一个子事件。主机（HOST）使用 HCI 命令 <code>HCI_LE_Set_Periodic_Advertising_Parameters</code> V2（或更高版本），配置每个事件的子事件数量和周期广播子事件间隔。</p><figure><img src="'+b+'" alt="PAwR events and subevents" tabindex="0" loading="lazy"><figcaption>图 20. PAwR 事件与子事件</figcaption></figure><p>在每个子事件中，广播者传输一个数据包，通常包含一个 AUX_SYNC_SUBEVENT_IND PDU，但也可能包含一个 AUX_CONNECT_REQ PDU。在延迟（称为周期广播响应时隙延迟）之后，一系列时间时隙在同一子事件中被保留，用于接收观察者设备的响应。对AUX_SYNC_SUBEVENT_IND PDU 的响应发送在 AUX_SYNC_SUBEVENT_RSP PDU 中。主机通过 HCI 命令 <code>HCI_LE_Set_Periodic_Advertising_Parameters</code> 配置所需的响应时隙数量。图 21 说明了 PAwR 子事件的结构。</p><figure><img src="'+N+'" alt="A PAwR subevent with response slots" tabindex="0" loading="lazy"><figcaption>图 21. PAwR 有响应时间间隙的子事件</figcaption></figure><h4 id="同步建立-1" tabindex="-1"><a class="header-anchor" href="#同步建立-1" aria-hidden="true">#</a> 同步建立</h4><p><strong>通用</strong></p><p>同步的过程为观察者设备提供了它需要的信息，以便有效地扫描并接收由广播设备传输的相关数据包。在 PAwR 的情况下，这涉及到三个方面：</p><ul><li><strong>观察者需要知道 PAwR 事件的发生频率，以及下一个事件何时发生</strong>。这些信息包含在一个周期广播间隔参数和 syncPacketWindowOffset 的计算值中；</li><li>观察者需要关于子事件的信息，包括它们的发生频率以及每个周期广播带响应事件容纳多少个子事件。它还需要了解与每个子事件中用于响应传输的时间时隙有关的某些详细信息。这些信息包含在 Subevent_Interval、Num_Subevents、Response_Slot_Delay、Response_Slot_Spacing 和 Num_Response_Slots 参数中。</li><li>最后，观察者需要知道它应该扫描哪个子事件号，应该使用哪个特定的响应时隙，并在传输的响应数据包中使用哪个接入地址。</li></ul><p>(1) 和 (2) 中描述的事件时间信息和子事件信息已被观察者获取，从而得到了 PAwR 广播传输的事件和子事件的完整时序参数和结构描述。<strong>但只有当具备 (3) 中的信息时，它才能调度其扫描，以仅接收那些预计包含相关数据的数据包，并安排响应数据包的传输。</strong></p><p>(1) 和 (2) 由 PAwR 逻辑传输处理，如蓝牙核心规范中所定义。有两种可选择的程序可用于获取这一级别的同步信息。这两种程序在本文中涵盖在“扫描周期广播同步信息”和“周期广播同步传输（PAST）”章节中。</p><p><strong>(3) 必须由应用层处理</strong>，并可以在适用的蓝牙配置文件规范中定义，例如电子货架标签（ESL）配置文件。</p><p><strong>扫描周期广播同步信息</strong></p><p>PAwR 和 PADVB 各自使用类似的过程通过扫描获取周期广播同步信息。</p><p>在 PAwR 和 PADVB 中，观察者扫描在次级广播信道上传输的AUX_ADV_IND数据包。AUX_ADV_IND 包括 SyncInfo 字段，其中包含周期广播间隔值以及用于计算称为syncPacketWindowOffset 的变量的一些数据项。获取了这两个值后，观察者可以计算带响应的周期广播事件将何时发生，参见（1）中的概述。</p><p><strong>PAwR 还需要有关子事件和响应时隙的信息</strong>，参见（2）中的概述，才能完成同步过程。这些信息可以在从中获取周期广播间隔的 AUX_ADV_IND PDU 中找到，但在一个称为“周期广播响应定时信息”的广播数据类型（AD 类型）中，该类型本身位于 PDU 的附加控制器广播信息（ACAD）字段中。</p><p><strong>周期广播同步传输（PAST）</strong></p><p>在使用 PAST 过程时，有时设备在连接上传递同步参数之前会首先代表另一设备进行扫描以获取同步信息。然而，在 PAwR 的情况下，对于PAST 的支持是强制性的，因此 PAwR 广播器可以通过 LE ACL 连接向观察者传递所需的同步数据。如果采用这种方法，任何设备都不需要进行 AUX_ADV_IND PDU 的扫描。</p><p><strong>子时间同步和响应时间插槽分配</strong></p><p>子事件同步涉及指示观察者设备应该执行扫描的子事件。一个或多个观察者设备可以同步到同一个子事件。一个个体观察者可以同步以在一个或多个子事件期间接收。</p><p>此外，为了使观察者能够发送响应 PDU，它必须有某种依据来确定使用哪个子事件响应时隙。</p><p>这两个方面的责任都属于应用层。</p><h2 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h2><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>白化: 白化的目的就是降低输入的冗余性。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>Piconet: 是指用蓝牙(Blue tooth)技术把小范围(10-100m)内装有蓝牙单元(即在支持蓝牙技术的各种电器设备中嵌入的蓝牙模块)的各种电器组成的微型网络，俗称微微网。 <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>',187),x=[U];function S(m,I){return d(),a("div",null,x)}const y=t(L,[["render",S],["__file","link_layer.html.vue"]]);export{y as default};
