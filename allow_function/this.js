// アロー関数
// let obj = {
//   value: 0,
//   increment: function () {
//     setTimeout(function () {
//       //thisがfunction内を見ているためNaNになる
//       this.value++;
//       console.log(this.value)
//     }, 1000)
//   }
// }

// obj.increment()

// let obj = {
//   value: 0,
//   increment: function () {
//     setTimeout(() => {
//       //thisが親のthisを引き継ぐためvalueは1になる
//       this.value++;
//       console.log(this.value)
//     }, 1000)
//   }
// }

// obj.increment()

//これが必要
// this.value = 0

// let obj = {
//   value: 0,
//   increment: () => {
//     setTimeout(() => {
//       //thisは親の更なる上のグローバルから引き継ぐ
//       this.value++;
//       console.log(this.value)
//     }, 1000)
//   }
// }

obj.increment()