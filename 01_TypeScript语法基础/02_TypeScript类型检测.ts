function getLength(args:string | any[]){
    return args.length
}
// 这样的话下面传的123就会报错，因为这里我们限制了类型。并且这里数组里面的类型也可以限制，这里我是写的any[],那也就是说这个数组里面的类型可以是字符串，也可以是数字。。如果你只想这个数组里面是字符串类型，可以这样限制。string[]
console.log(getLength("aaaa"));//4
console.log(getLength(["abc", "sss"]))//2
// console.log(getLength(123));

// 这里 的类型限制也可以写成这样，args:{length:number}
// 因为数组也是对象，并且也有length属性，然后字符串是包装成对象，那也有

// TypeScript每一个文件都是一个独立的模块，所以需要
export {}