// 一般我们在定义函数时，都要指定明确的参数类型，因为参数这里是没有类型推导的
function sum(num1: number, num2: number): number {
    return num1 + num2
}
// 但是返回值这里，如果我们指定返回值类型是什么，他是可以进行类型推到的，比如这里的res推导出来就是number.但是也可以指定，看第二行
const res = sum(1, 2)
export { } 