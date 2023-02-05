function foo(this: { name: string }, info: { name: string }) {
    console.log(this, info);

}
type FooType = typeof foo
// 1.ThisParameterType:获取FooType类型中this的类型
type FooThisType = ThisParameterType<FooType>
// 2.OmitOmitThisParameter:删除this参数类型，剩余的函数类型
type PureFooType = OmitThisParameter<FooType>
// 3.ThisType:用于绑定一个上下文的this
interface IState {
    name: string
    age: number
}
interface IStore {
    state: IState
    eating: () => void
}
// 1.我们希望将this(store.state)绑定到这个store上面
const store: IStore & ThisType<IState> = {
    state: {
        name: "zjx",
        age: 19
    },
    eating: function () {
        console.log(this.name);

    }
}
store.eating.call(store.state)//2.这里我们将this绑定成这个，那上面拿取name的时候就可以直接this.name，如果不绑定这个，上面想要拿取到那么就只能this.state.name,但是这样将this绑定给store.state之后，上面不知道啊，所以我们得告诉他

export { }