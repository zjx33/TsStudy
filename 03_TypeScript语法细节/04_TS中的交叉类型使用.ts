// 交叉类型：两种（多种）类型要同时满足
interface IKun {
    name: string,
    age: number
}
interface ICoder {
    name: string,
    coding: () => void
}
const info: IKun & ICoder = {
    name: "zjx",
    age: 18,
    coding: function () {
        console.log("coding");

    }
}
export {}