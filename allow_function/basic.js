//ES5
//function関数
// const array = [1, 2, 3, 4]
// const byTwo = array.map((function (num) {
//   return num * 2
// }))
// byTwo;

//ES6
// //allow関数
//default
// const allowByTwo = array.map((num) => {
//   return num * 2
// })

//引数一つの時()を省略できる
// const allowByTwo = array.map(num => {
//   return num * 2
// })

//関数内にreturnしかない時、return & {} 省略可能
// const allowByTwo = array.map(num => num * 2)

//オブジェクトを返す時丸括弧が必要
// const allowByTwo = array.map(num => ({ number: num * 2 }))



