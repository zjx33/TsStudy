interface IPerson {
    name: string
    age: number
    friend?: {
        name: string
    }
}
const info: IPerson = {
    name: "why",
    age: 18
}
// 这里因为friend可能不存在，所以这里在拿取info.friend.name就可能拿不到，那我们可以使用可选链
// console.log(info.friend.name);
console.log(info.friend?.name);//可选链
// 以上是访问属性，那如果我们要属性赋值呢？
// info.friend?.name="kobe" 这样就是错的，赋值表达式的左侧不能是可选属性访问

// 解决方案一：类型缩小
if (info.friend) {
    info.friend.name = "kobe"
}
// 解决方案二：非空类型断言,只有确保friend一定有值得时候才能使用，不然存在安全隐患
info.friend!.name = "james"