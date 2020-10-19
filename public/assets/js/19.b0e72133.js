(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{518:function(t,n,v){"use strict";v.r(n);var T=v(20),s=Object(T.a)({},(function(){var t=this,n=t.$createElement,v=t._self._c||n;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("HTTP/1.1消除了HTTP/1.0大量歧义内容并引入多项改进，包括"),v("strong",[t._v("持久连接")]),t._v("，"),v("strong",[t._v("管线化技术")]),t._v("。基于"),v("strong",[t._v("SPDY")]),t._v("协议的HTTP/2改变了传统的报文分发方式，采用数据帧进行双向流的多路复用连接方式。下图是常见的http/1.1请求瀑布图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://xutianbao123-1258172908.cos.ap-shanghai.myqcloud.com/1601017224(1).jpg",alt:""}})]),t._v(" "),v("p",[t._v("浏览器对每个域名最多开6个并发连接（HTTP/1.1），当页面里连接很多的时候就必须排队等待（queued & queueing），图中等待了1.62s才被浏览器处理。虽然浏览器要预先分配资源，调度连接（Stalled）。接着DNS解析（DNS Lookup），因为存在缓存，所有很快。然后进行初次连接（Initial connection）其中包括"),v("strong",[t._v("TCP三次握手")]),t._v("和"),v("strong",[t._v("SSL握手")]),t._v("，开始进入HTTP请求和响应阶段，最耗时的是等待服务器处理（TTFB），这其中还包括服务器到客户端的传输时间，最后客户端下载字节流。可以看到图中最耗时的分别是排队等待、TCP和SSL握手和等待WEB服务器响应，HTTP连接管理的演进就围绕着前两个点进行改进。")]),t._v(" "),v("p",[t._v("HTTP是高并发下应用场景，在没有缓存的条件下打开一个网站短时间内需要请求大量资源，前端为了解决这个问题，采取了很多方式，究其目的是减少请求连接数，在css上可以将多个图标合成一个"),v("strong",[t._v("雪碧图")]),t._v("从而减少并发请求数，在js上主要是"),v("strong",[t._v("异步加载")]),t._v("、减少包的依赖等减少并发请求数。")]),t._v(" "),v("p",[v("strong",[t._v("串行连接")]),t._v("时最初的HTTP协议连接方案，即一条条HTTP请求在一个TCP传输通道里重复着队列、TCP握手、等待响应的过程，是十分低效的，"),v("strong",[t._v("并行连接")]),t._v("同时打开更多的TCP传输通道，以满足浏览器高并发HTTP请求，但并行连接是不确定的，它需要依据外部环境来判断浏览器加载资源是否更快，还是更慢。比如带宽不足的情况下多条连接会带来额外的开销，此时可能比串行连接更慢。又比如客户端连接数的增大在服务端看来其并发处理也是成倍的增加，这会造成服务器性能的下降，因此并不是越开多的TCP连接通道就越好，HTTP一般规定单个域名的并行连接数为6个，如果想扩大并行连接数可以使用"),v("strong",[t._v("域名分片")]),t._v("，即将资源分为不同的域名，如将资源分片为2个域名，那么并行连接数就是12。")]),t._v(" "),v("p",[t._v("另一个尝试是在宝贵的TCP通道上的重用，在一条请求-响应结束之后不关闭TCP连接，而是继续保持打开的状态，以便同域名下的资源"),v("strong",[t._v("持久传输")]),t._v("，直到客户端或服务器决定将其关闭，这样做的好处是减少重复的TCP握手过程，因此持久连接的瀑布流图没有DNS解析和握手的时间消耗。最佳的HTTP/1.1的实践往往并行连接和持久连接配合使用，以达到高效传输的目的。持久化连接在HTTP/1.0中并不像并行连接那样是浏览器的自动行为，需要客户端/服务端双方认可，其关闭的时机也需要人为的判断，在非标准的HTTP/1.0扩展中用"),v("strong",[t._v("keep-alive")]),t._v("首部来标识长连接的建立以及关闭的时机（但这并不是一个promise），如下常见的保持长连接的请求首部：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Connection: Keep-Alive //告知服务器建立长连接\nKeep-Alive: max=5, timeout=120 //告知服务器为另外五个事务保持连接状态或将空闲时间设置为2min\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("p",[v("strong",[t._v("持久连接")]),t._v("常让人忽略的点是非主观参与下如何判定一个事务的结束，因此只有当一个事务结束后下一个事务才会开启，事务结束完成的一个标志在于实体的数据传递完毕，因此对于存在主体的持久连接要标注正确Content-Length首部。HTTP/1.1引入"),v("strong",[t._v("persistent connection")]),t._v("来代替keep-alive，改进后最主要的点在于一切都是默认行为，不用人为的开启和关闭持久连接，如果服务端和客户端没有刻意的去关持久连接，那么持久连接的状态将保持，但空闲的持久连接也可以随时被客户端与服务端关闭，不发送Connection:Close不意味着服务器承诺连接永远保持打开，如在Nginx服务器上可以设置keepalive_timeout来指定闲置多少秒后自动关闭长连接。")]),t._v(" "),v("p",[v("strong",[t._v("管道连接")]),t._v("建立在持久连接的基础上，且是非默认的方式，在队列中的第一条请求达到服务器时，陆续的第二条请求也可以开始发送了，而不像之前必须等到第一条响应达到才发送第二条请求，在高延时网络条件下，这样做可以降低网络的环回时间，提高性能。但这种连接方式也意味着客户端接收响应的顺序必须和发出的请求顺序相同，也就是说这依赖于服务器对于响应的排序，如果服务器不支持管线化的话，那么响应就会乱序，往往演变为影响到页面布局错乱的问题。这实质上抵消了通过使用流水线减少往返次数而获得的性能，大部分浏览器会默认关闭这一功能。试想根据请求发送的顺序，如果需要特别冗长的处理的请求（例如数据库查询）在管道中相对较早地发送，这实际上可能会导致性能下降，因为所有其他响应都必须等待较长的时间一个先完成，然后再响应其他请求。")]),t._v(" "),v("p",[t._v("HTTP/1的三种连接方式如下（MDN）：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://mdn.mozillademos.org/files/13727/HTTP1_x_Connections.png",alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("队头阻塞")]),t._v("是HTTP请求——响应通信"),v("strong",[t._v("串行连接")]),t._v("模式的“过载”结果，当顺序发送的请求序列中的一个请求-响应因为某种原因被阻塞时，其后面的所有请求也一并被阻塞，这样会导致客户端迟迟收不到数据。队头阻塞问题在HTTP/1中普遍存在，客户端对这个问题也进行过优化，比如chrome开启另一个线程去扫描后续的http请求，这只是针对性的优化，其实质还是HTTP协议连接的问题。")]),t._v(" "),v("p",[t._v("HTTP/2摒弃了纯文本的报文，把TCP的部分特性挪到了应用层，采用二进制数据格式，即把原来的报文分为数个小片的二进制帧，HTTP/2在TLS上层添加了一个二进制分帧层，数据在经过二进制分帧层后会被转换成一个个带有ID的"),v("strong",[t._v("帧")]),t._v("，帧大致可以分成数据帧和控制帧两类，HEADERS帧和DATA帧属于数据帧，存放的是HTTP报文，而SETTINGS、PRIORITY表示控制帧。通过底层的协议栈将帧发送到服务器，服务器接收到所有帧后，会将所有具有相同ID的帧组装成一个个虚拟的"),v("strong",[t._v("流")]),t._v("，客户端和服务器都可以创建流，双方互不干扰，且流是双向，当服务器处理完数据后同样在这个流发送帧到客户端，等同于HTTP/1.1里的“请求-应答”来回。流之间是没有固定关系，流内部的帧有着严格顺序，但流可以设置优先级，也可以发送控制帧随时终止流，取消接收和发送。这样就可以在一个TCP连接上实现多个请求的传递，即多路复用——多个往返通信都复用一个连接来处理。这种方式从根本上解决了HTTP队头阻塞问题(TCP队头阻塞问题依然存在)，多个请求-响应之间没有了顺序，不需要排队等待，大幅度提高了连接的利用率。如下图的流和帧的传递方式：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://xutianbao123-1258172908.cos.ap-shanghai.myqcloud.com/1601102581(1).png",alt:""}})]),t._v(" "),v("p",[v("em",[t._v("HTTP/2来源于《透视HTTP协议》")])]),t._v(" "),v("p",[v("em",[t._v("串行、并行、持久化、管线连接管理来源于《HTTP权威指南》")])]),t._v(" "),v("p",[t._v("后记：虽然内容看上去全是别人的东西，从这里抄一点那里抄一点的，都是网上贴烂的，但是重点是理解别人写的东西，别人没写全的或者遗落的，需要自己去思考和实践，查资料去补上，然后在细微之处提一笔，这个过程繁琐很消耗时间，但是当把自己的blog升级到HTTP/2的感觉瞬间高大上了。")]),t._v(" "),v("p",[t._v("2018年10月24号")])])}),[],!1,null,null,null);n.default=s.exports}}]);