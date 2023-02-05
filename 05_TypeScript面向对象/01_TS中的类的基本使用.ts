class Person {
    // ts中如果有成员属性，比如这里的name,age，那就需要声明成员属性
    // 这里也可以对其进行初始化，比如name:''这样他自己也会进行类型推导
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eating(){
        console.log(this.name);
        
    }
}
const p1 = new Person("zjx", 18)
const p2 = new Person("zzb", 20)
