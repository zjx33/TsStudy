// 函数声明写法
function foo(arg: number):number {
    return 123
}
// 其实foo本身也是一个标识符，也应该有自己的类型
// 函数表达式写法
const bar = (arg: number):number => {
    return 123
}
export { }