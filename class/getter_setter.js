//ゲッターセッター

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name;
  }
}

let person = new Person("太郎", 30)
// ゲッター：関数として定義したが呼び出す際は()不要。プロパティのように呼び出す
let name = person.name

//セッター：こちらも関数として定義したが以下のように使う
person.name = "二郎"
console.log(person.name)
