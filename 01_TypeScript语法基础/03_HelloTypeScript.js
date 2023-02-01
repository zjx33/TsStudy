"use strict";
exports.__esModule = true;
// 这里区别一下：string:TypeScript给我们定义标识符时，提供的字符串类型
// String:JavaScript中字符串的包装类
// 这样就能够保证不管写多少代码，message一直是string类型
var message = "Hello World";
// 如果我们想运行这段代码，不能再index.html直接引入，因为浏览器是不认识这个的。所以我们需要使用一下刚刚安装的那个工具
