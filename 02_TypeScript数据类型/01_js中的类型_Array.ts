// 对于数组来说，如果你想明确的指定数组的类型
// 1.string[]:数组类型，并且数组中存放的是字符串类型  这里注意：在真实的开发中，数组一般存放相同的类型，不要存放不同的类型
let names: string[] = ["zjx", "zzb"]
names.push("like")
// names.push(123)//这个就报错了
// 第二种写法 Array<泛型> 这种一般在特殊的场景下写
let nums:Array<number> =[123,231]