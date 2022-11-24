(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{318:function(a,s,t){a.exports=t.p+"assets/img/7.1-1.bdc431de.png"},319:function(a,s,t){a.exports=t.p+"assets/img/7.1-2.63fd496b.png"},320:function(a,s,t){a.exports=t.p+"assets/img/7.1-3.696ad84f.png"},321:function(a,s,t){a.exports=t.p+"assets/img/7.1-4.6dd815ec.png"},378:function(a,s,t){"use strict";t.r(s);var r=t(10),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_7-1-任务平台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-任务平台"}},[a._v("#")]),a._v(" 7.1 任务平台")]),a._v(" "),s("p",[a._v("juno-admin后台编辑编辑定时任务信息的时候，按组区分定时任务类别，组名即为应用名称，后面定时任务信息只会被应用所部属的机房消费到，并最终只有一台机器成功执行定时任务信息")]),a._v(" "),s("p",[a._v("有juno-admin后台统编辑带应用名的定时任务信息，并以应用名划分定时任务所在组。后台编辑好的定时任务信息在发布到etcd后，只会被任务信息所在的应用下的机房机器所消费到，机器得到消费的信息后，需要去获取锁，得锁者响应定时任务，未得锁者不响应定时任务。 这个锁可以用mysql的行锁+多版本去满足。")]),a._v(" "),s("h2",{attrs:{id:"_7-1-1-业内调研"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-1-业内调研"}},[a._v("#")]),a._v(" 7.1.1 业内调研")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.xuxueli.com/xxl-job/#c%E3%80%81%E8%A7%A6%E5%8F%91%E4%BB%BB%E5%8A%A1",target:"_blank",rel:"noopener noreferrer"}},[a._v("XXL-JOB"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/shunfei/cronsun",target:"_blank",rel:"noopener noreferrer"}},[a._v("cronsun"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"_7-1-2-架构设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-2-架构设计"}},[a._v("#")]),a._v(" 7.1.2 架构设计")]),a._v(" "),s("p",[s("img",{attrs:{src:t(318),alt:"架构设计"}})]),a._v(" "),s("h2",{attrs:{id:"_7-1-3-任务执行时序图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-3-任务执行时序图"}},[a._v("#")]),a._v(" 7.1.3 任务执行时序图")]),a._v(" "),s("h3",{attrs:{id:"添加任务-执行任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加任务-执行任务"}},[a._v("#")]),a._v(" 添加任务，执行任务")]),a._v(" "),s("p",[s("img",{attrs:{src:t(319),alt:"任务时序图"}})]),a._v(" "),s("div",{staticClass:"language-mermaid line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-mermaid"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("sequenceDiagram")]),a._v("\nadmin"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("etcd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 写入待执行指令\netcd"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("etcd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" event消息产生\nagent"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("etcd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 获取cmd执行指令内容与执行规则\nagent"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("+agent"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 获取定时任务后完成加锁操作\nagent"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("agent"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 解析规则策略，注册定时任务\nagent"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("etcd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 将任务执行信息写入etcd\nagent"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("-etcd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 执行完成后删除对应的key\nagent"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("--\x3e>")]),a._v("etcd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 执行结果反馈\netcd"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("--\x3e>")]),a._v("admin"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 获取执行结果进行MySQL落地\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h3",{attrs:{id:"立即执行任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#立即执行任务"}},[a._v("#")]),a._v(" 立即执行任务")]),a._v(" "),s("p",[s("img",{attrs:{src:t(320),alt:"立即执行任务时序图"}})]),a._v(" "),s("div",{staticClass:"language-mermaid line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-mermaid"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("sequenceDiagram")]),a._v("\nadmin"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("etcd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 写入待执行指令\netcd"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("etcd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" event消息产生\nagent"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("etcd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 获取cmd执行指令内容与执行规则\nagent"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("+agent"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 获取定时任务后完成加锁操作\nagent"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("agent"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 解析规则策略，注册定时任务\nagent"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("etcd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 将任务执行信息写入etcd\nagent"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("->>")]),a._v("-etcd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 执行完成后删除对应的key\nagent"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("--\x3e>")]),a._v("etcd"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 执行结果反馈\netcd"),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[a._v("--\x3e>")]),a._v("admin"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 获取执行结果进行MySQL落地\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h3",{attrs:{id:"强杀任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强杀任务"}},[a._v("#")]),a._v(" 强杀任务")]),a._v(" "),s("p",[s("img",{attrs:{src:t(321),alt:"强杀任务时序图"}})]),a._v(" "),s("h2",{attrs:{id:"_7-1-4-业务流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-4-业务流程"}},[a._v("#")]),a._v(" 7.1.4 业务流程")]),a._v(" "),s("ol",[s("li",[a._v("由Agent心跳上报到Admin，Admin存储应用和agent的对应关系")]),a._v(" "),s("li",[a._v("在Admin进行定时任务的逻辑处理，定时任务和应用强绑定，某个应用的定时任务执行逻辑指挥在对应的Agent上进行")]),a._v(" "),s("li",[a._v("执行结果通过ETCD进行回调，再有Admin统一处理")]),a._v(" "),s("li",[a._v("对异常执行任务进行重试")])]),a._v(" "),s("h2",{attrs:{id:"_7-1-5-关键设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-5-关键设计"}},[a._v("#")]),a._v(" 7.1.5 关键设计")]),a._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[a._v("/juno/task/proc/pid/jobId/appName/hostName  #关闭进程\n/juno/task/cmd/appName/jobId # 任务下发\n/juno/task/once/appName/jobId/hostName # 任务执行\n/juno/task/lock/jobId # 执行锁\n/juno/task/noticer/hostName # 执行结果通知\n/juno/task/csctl/<cmd> # 临时指令\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);