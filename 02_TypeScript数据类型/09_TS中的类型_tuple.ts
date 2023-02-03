// 当我们想要保存个人信息：why 18 18.8
// 1.数组中最好存放相同的数据类型 这样就不太合适,获取值之后不能明确的知道数据类型
const info1: any[] = ["why", 18, 18.8]
console.log(info1[0]);

// 2.使用对象类型
const info2 = {
    name: "why",
    age: 18,
    height: 18.8
}
// 3.元组类型
// 元组数据类型中可以存放不同的数据类型，取出来的类型也是有明确的类型的，并且这个在编译的时候转js，[string, number, number]这个会没有
const info3: [string, number, number] = ["why", 18, 18.8]

// 在函数中使用元组类型是最多的（函数的返回值）

export { }
