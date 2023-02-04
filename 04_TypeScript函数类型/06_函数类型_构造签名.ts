// 理解：用的不是很多
class Person {

}
interface IPerson {
    new(): Person
}
function factory(fn: IPerson) {
    const f = new fn()
    return f
}
factory(Person)