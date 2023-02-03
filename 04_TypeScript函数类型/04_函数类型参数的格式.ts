// TYpeScript对于传入的函数类型的参数个数不进行检测
type CalcType = (num1: number, num2: number) => number
function calc(calcFn: CalcType) {
    const num1 = 20
    const num2 = 40
    // 但是这里函数调用还是要跟上面保持一致
    const res = calcFn(num1, num2)
    console.log(res);
}
// 这里传入的参数是一个，但是我们上面定义的函数类型的参数个数是两个，这里是不报错的
function foo(num1: number) {
    return num1
}
calc(foo)
//这里一个参数都没传，也不报错，这里传的匿名函数
calc(function () {
    return 123
})
// 比如可以看一下forEach的例子，forEach里面传的是匿名函数,我们知道forEach里面要传的参应该是三个，但我们一般用一个，所以ts是不检验的，如果检验的话，ts反而变得不好用了
const names = ["zjx", "zzb"]
names.forEach(function (item) {
    console.log(item.length);
})
// 所以TS对于很多类型的检测报不报错，取决于他的内部规则
// 比如下面这个很强
interface IPerson {
    name: string
    age: number
}
// const info:IPerson={
//     name:"zjx",
//     age:15,
//     height:158//这样去添加一行就会报错
// }
// 但是如果我们这样操作，就不报错
const p = {
    name: "zjx",
    age: 15,
    heighr: 158
}
const info: IPerson = p
export { }
