// 1.开发中很少去定义never类型，某些情况下会自动进行类型推导出never
// 2.开发框架（工具）的时候可能会用到never
// 3.封装一些类型工具的时候，可以使用never
// 1.一个函数是死循环 不会返回任何类型，会推导出never类型，但是不知道为啥这里没有推导出来
function foo():never{
// while(true){

// }
throw new Error("12333")

}
foo()

export {}
// 所以实际开发中只有进行类型推导时，可能会自动推导出来是never类型，但是很少使用他