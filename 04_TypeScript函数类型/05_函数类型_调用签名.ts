// 函数的调用签名，从对象的角度来看待这个哈桑农户，也可以有其他属性  函数类型表达式只能表达出只是一个函数，所以出现了函数签名
interface IBar {
    name: string
    age: number
    // 函数调用签名
    // 格式，(参数列表):返回值类型
    (num1: number): number
}
const bar: IBar = (num1: number): number => {
    return 123
}
bar.name = "zjx"
bar.age = 16
// 我们这里调用函数是会报错的，所以我们需要在interface里面去调用
bar(123)
// 开发中如何选择
// 如果只是描述函数类型本身（函数可以被调用），那就使用函数类型表达式
// 如果在描述函数作为对象可以被调用，同时也有其他属性，那就使用函数调用签名
export { }