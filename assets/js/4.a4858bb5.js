(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{133:function(t,n,s){"use strict";s.r(n);var e=[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"数据库文档生成器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据库文档生成器","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据库文档生成器")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("choose database:\n1:mysql\n2:oracle\n3:PostgreSQL\nSelect the appropriate numbers choose database "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Enter "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),t._v(" to cancel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 3\ninput database name:\ngunslite\ninput host:\nlocalhost\ninput port:\n5432\ninput username:\nenilu\ninput password:\n123456\n\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("输入完成后回车，即可生成数据库文档目录${dbname}-doc,目录中文档以markdown文件为载体：")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:s(67),alt:"doc"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("确保安装了gitbook后，进入上述文件目录的命令行窗口运行：gitbook serve")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("E:\\\\database-doc-generator-20181006100721\\guns-lite-doc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("gitbook serve\nopenssl config failed: error:02001003:system library:fopen:No such process\nLive reload server started on port: 35729\nPress CTRL+C to quit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\ninfo: 7 plugins are installed\ninfo: loading plugin "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"livereload"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: loading plugin "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"highlight"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: loading plugin "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"search"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: loading plugin "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lunr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: loading plugin "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sharing"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: loading plugin "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fontsettings"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: loading plugin "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"theme-default"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". OK\ninfo: found 15 pages\ninfo: found 0 asset files\ninfo: "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" generation finished with success "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" 1.6s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\nStarting server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nServing book on http://localhost:4000\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("访问 http://localhost:4000，即可在线查看数据库文档")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:s(68),alt:"summary"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("img",{attrs:{src:s(69),alt:"table"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("另外还可以生成word文档哦;虽然有点简陋:\n"),n("img",{attrs:{src:s(70),alt:"word"}})])])}],a=s(0),r=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("ul",[s("li",[t._v("这是一个简单的小工具，可以根据数据库表结构生成数据库设计文档（格式包括markdown，html，word)，支持数据库（MySQL,Oracle,PostgreSQL)")]),t._v(" "),s("li",[t._v("如果你嫌PowerDesigner太重，那么可以试试该工具。")]),t._v(" "),s("li",[t._v("你可以下载"),s("a",{attrs:{href:"https://github.com/enilu/database-doc-generator/releases/tag/1.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("release"),s("OutboundLink")],1),t._v("包来或者下载"),s("a",{attrs:{href:"https://github.com/enilu/database-doc-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("源代码"),s("OutboundLink")],1),t._v("来使用。")]),t._v(" "),s("li",[t._v("如果使用源代码，需要先克隆该项目后运行mvn package打包，然后运行发布包中的bin/start.bat")]),t._v(" "),s("li",[t._v("运行程序后按照下面提示输入对应数据库参数：")])]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9)])},e,!1,null,null,null);n.default=r.exports},67:function(t,n,s){t.exports=s.p+"assets/img/doc.8079bc4b.jpg"},68:function(t,n,s){t.exports=s.p+"assets/img/summary.c83fb07c.jpg"},69:function(t,n,s){t.exports=s.p+"assets/img/table.1ea0a121.jpg"},70:function(t,n,s){t.exports=s.p+"assets/img/word.9a767c17.jpg"}}]);