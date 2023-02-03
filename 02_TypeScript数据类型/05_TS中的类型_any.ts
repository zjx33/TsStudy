// any类型表示不限制标识符的任意类型，并且可以在该标识符上进行任意的操作
let id: any = "aaaa"
id = "bbb"
id = 123
// 定义数组，这样的话，数组里面可以使用任意类型
const infos:any[]=["abc",123]
export { }