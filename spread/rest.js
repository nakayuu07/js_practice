//rest演算子

//es5
// function print() {
//   console.log(arguments) //iterator { '0': 1, '1': 'q', '2': true, '3': [ 1, 2, 3 ] }
// }

// print(1, "q", true, [1, 2, 3])

// function print() {
//   let arr = Array.prototype.slice.call(arguments)
//   console.log(arr)//[1, 'q', true, [1, 2, 3]]
// }
// print(1, "q", true, [1, 2, 3])

// //es6
// //そのまま引数を配列として受け取る
// function print(...arr) {
//   //[1, 'q', true, [1, 2, 3]]
//   console.log(arr)
// }
// print(1, "q", true, [1, 2, 3])