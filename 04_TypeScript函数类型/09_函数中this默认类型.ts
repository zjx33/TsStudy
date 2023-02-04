// 在没有对TS进行特殊配置的情况下，this是any类型
// 1.对象中的函数中的this
const obj = {
    name: "why",
    studying: function () {

        console.log(this.name, "studying");

    }
}
obj.studying()
export { }