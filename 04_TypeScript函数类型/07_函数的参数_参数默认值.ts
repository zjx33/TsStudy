// 函数的参数可以有默认值
// 1.有默认值的情况下，参数的类型注解可以省略（x:number,y=100）
// 2.有默认值的参数是可以接受传入undefined的，就相当于foo(10,undefined)就是foo(10)
function foo(x: number, y: number = 100) {
    console.log(y + 10);

}
foo(10)
foo(10, undefined)//这里允许传入undefined
export { }