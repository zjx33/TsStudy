// 方案一：函数类型表达式 
// 格式：(参数列表)=>返回值
// const bar: (num1: number) => number = (arg: number): number => { return 123 }
// 以上这样阅读性比较差，所以我们把他拿出来写
type BarType = (num1: number) => number
const bar: BarType = (arg: number): number => { return 123 }