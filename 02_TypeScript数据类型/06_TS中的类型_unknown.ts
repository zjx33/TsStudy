let foo: unknown = "aaa"
foo = 123//因为上面的类型是不知道类型，所以这里可以改成123
// console.log(foo.length);//这样就报错了，因为我不确定它是什么类型，所以对他进行方法上的这种操作是错的，但是如果是any就可以
// 如果你想对unknown这种类型进行操作，你必须要对起进行校验
if (typeof foo === "string") {//类型缩小
    console.log(foo.length);

}
// 总结：unknown类型默认情况下在上面进行任意草错都是非法的，所以要求必须进行类型校验（缩小），才能根据缩小之后的类型进行对应的操作
export { }