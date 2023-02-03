// 对象的另一种声明interface 声明的方式
interface PointType2 {
    x: number
    y: number
    z?: number
}
function Print(point: PointType2) {
    console.log(point.x, point.y, point.z);
}
// 那他跟type的区别是什么呢？
// 1.type类型使用范围更广
// 比如 type MyNumber=number可以直接把number类型给MyNumber别名，但是接口类型只能用来声明对象
// 2.在声明对象时，interface可以多次声明
// type不允许两个相同名称的别名同时存在
// 比如以下这样就是错的
// type PointType={
//     x:number
// }
// type PointType = {
//     z?: number
// }
// 但是interface可以多次声明同一个接口名称
interface PointType {
    x: number
    y: number
}
interface PointType {
    z: number
}
const point: PointType = {
    x: 100,
    y: 200,
    z: 300
}
// 3.interface支持继承
interface IPerson {
    name: string
    age: number
}
interface IKun extends IPerson {
    kouhao: string
}
const ikun: IKun = {
    kouhao: "hhhh",
    name: "zjx",
    age: 18
}
// 4.interface可以被类实现
// 总结：如果是非对象类型的定义直接使用typeperformance,如果是对象类型的声明那么使用interface