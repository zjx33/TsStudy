type CalcType = (num1: number, num2: number) => number
function calc(calcFn: CalcType) {
    const num1 = 20
    const num2 = 40
    const res = calcFn(num1, num2)
    console.log(res);
}
function add(num1: number, num2: number) {
    return num1 + num2
}
calc(add)