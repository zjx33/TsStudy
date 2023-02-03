// 1.字面量类型得基本使用
const name: "why" = "why"
let age: 18 = 18
// 2.讲多个字面量类型联合起来
type Direction = "left" | "right" | "up" | "down"
const d1: Direction = "left"
// 例子：封装请求方法
type MethodType = "get" | "post"
function request(url: string, method: MethodType) {

}
request("http://", "post")
// TS细节
const info = {
    url: "xxx",
    method: "post"
}
// 这样就会报错，因为他只知道info里面的method是一个字符串，他不知道是post，但是上面request参数制定了第二个参数要么是get要么是post
// request(info.url, info.method)
// 解决方案一：类型断言
request(info.url, info.method as "post")
// 解决方案二：直接让info对象类型是一个字面量类型
// const info: { url: string, method: "post" } = {
//     url: "xxx",
//     method: "post"
// }
// 但是上面比较麻烦
// const info= {
//     url: "xxx",
//     method: "post"
// } as const
export { }
