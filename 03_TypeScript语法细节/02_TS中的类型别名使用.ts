// 类型别名：type
type IDType = number | string
function printID(id: IDType) {
    console.log(id)
}
// 打印坐标
type pointType = { x: number, y: number, z?: number }
function print(point: pointType) {
    console.log(point.x, point.y, point.z);
}