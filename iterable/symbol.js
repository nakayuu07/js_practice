// シンボル
//シンボルはECMASCRIPTの開発者向けの機能
let symbol = Symbol()
symbol;
let symbolA = Symbol("symbol")
let symbolB = Symbol("symbol")
// symbolは自分自身しかtrueを返さない
symbolA === symbolB //false

//objectのキーとしても使える
var obj = {
  [symbolA]: "hello world"
}
console.log(obj[symbolA])
//通常のプロパティとしてはアクセスできない
console.log(Object.getOwnPropertyNames(obj)) //[]
console.log(JSON.stringify(obj))  //{}
console.log(Object.keys(obj))  //[]

//これはtrue
console.log(Object.getOwnPropertySymbols(obj)[0] === symbolA)
