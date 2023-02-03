// 1.typeof：使用得最多
function printId(id: number | string) {
    if (typeof id === "string") {
        console.log(id.length);
    }
}
// 2.平等缩小，一般判断字面量
type Direction = "left" | "right" | "up" | "down"
function switchDirection(direction: Direction) {
    if (direction === "left") {
        console.log(direction, "角色向左移动");
    } else if (direction === "right") {
        console.log(direction, "角色向右移动");
    } else if (direction === "up") {
        console.log(direction, "角色向上移动");
    }
    else {
        console.log(direction, "角色向下移动");
    }
}
// 3.传入一个日期，打印日期 instanceof
function printDate(date: string | Date) {
    // 看这个date是不是这个Date得实例
    if (date instanceof Date) {
        console.log(date.getTime());
    } else {
        console.log(date);

    }
}
// 4.in操作符判断是否有某一个属性
interface Iswim {
    swim: () => void
}
interface IRun {
    run: () => void
}
function move(animal: Iswim | IRun) {
    if ("swim" in animal) {
        animal.swim()
    } else if ("run" in animal) {
        animal.run()
    }
}
const fish: Iswim = {
    swim: function () { }
}
const dog: IRun = {
    run: function () { }
}
move(fish)
move(dog)
