//ES5
// var Person = function (name, age) {
//   this.name = name
//   this.age = age
// }
// Person.prototype.jump = function () {
//   console.log("ジャンプ！")
// }

// var person = new Person("太郎", 30)
// person;
// person.jump()

//es6
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  jump() {
    console.log("ジャンぷ")
  }
  getName() {
    return this.name
  }
  static setName(person, name) {
    person.name = name
  }
}

let person = new Person("太郎", 30)
person
person.jump()

//継承

class EmpLoyee extends Person {
  constructor(name, age, years) {
    super(name, age)
    this.years = years
  }

  //オーバーライド
  jump() {
    //親のメソッド使えるが、constructorのsuper関数とは違う
    super.jump()
    super.getName()
    console.log("大ジャンプ")
  }
  //子クラスのみのメソッド
  quit() {
    console.log('やめます')
    this.years = 0
  }

  getName() {
    return super.getName + "従業員"
  }

}

let employee = new EmpLoyee("太郎", 30, 15)
employee;
console.log(employee.jump())
employee.quit()
employee.getName()