//es5
// let person = {
//   firstname: "太郎",
//   age: 20,
//   getOlder: function () {
//     () => {
//       this.age++;
//     }
//   }
// }

//es6
let person = {
  firstname: "太郎",
  age: 20,
  //:functionを省略できる
  getOlder() {
    () => {
      this.age++;
    }
  }
}
console.log(person.getOlder())
console.log(person)