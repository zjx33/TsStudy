function getLength(args){
    return args.length
}
console.log(getLength("aaaa"));//4
console.log(getLength(["abc","sss"]))//2
console.log(getLength(123));//这样代码在编写阶段其实就是错误的，因为这里传的这个参会报错的。所以TypeScript就可以限制这里的类型错误