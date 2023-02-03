// 获取DOM元素
// 这样可能是element类型也可能是null类型
const img1 = document.querySelector("img")
if (img1 !== null) {
    img1.src = "xxx"
}
// 但是如果我们获取的是类选择器，他就不确定获取的元素是否是图片，那用他的src属性就会报错，所以这里就可以用到类型断言，也就是比如这里，你确定他是图片元素的情况下使用
const img2 = document.querySelector(".img") as HTMLImageElement;
img2.src = "xxx"
// 类型断言的规则：断言只能断言成更加具体的类型，或者是不太具体的类型..但是这样不太好，就以下这种
const age: number = 13
const age3 = age as any
const age4 = age3 as string
export { }