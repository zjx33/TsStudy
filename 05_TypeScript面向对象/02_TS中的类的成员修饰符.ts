class Person {
    // 1.加上public，表示公有的属性或方法，默认情况就是public
    public name: string
    // 2.Protected在类中或者是子类中可以访问
    protected age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    // 2.加上private，只能在类Person内部使用，也就是在说在外面调用p.eating()方法就不可以了
    private eating() {
        console.log("chi");

    }
}
const p = new Person("zjx", 18)
console.log(p.name);
// p.eating()
class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age)
        this.name = name
    }
    studying() {
        console.log(this.age);
    }
}
const stu = new Student("zzb", 20)
export { }