// 1.这里函数没有返回值，那么他的返回值类型是void类型。你不写，它返回的也是void类型
// 2.如果返回值是void类型，那我们也可以返回undefined,也就是说下面那个函数我们可以写一个return undefined(函数默认返回值就是undefined)TS编译器允许这样做
function sum(num1: number, num2: number): void {
    console.log(num1 + num2);
    // return undefined
}

//应用场景,用来指定函数类型的返回值是void
type FooType = () => void
const foo: FooType = () => { }
