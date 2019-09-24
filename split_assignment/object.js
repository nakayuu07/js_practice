// let getConfig = () => {
//   return {
//     isOn: true,
//     amount: 10,
//     greet: "hello world"
//   }
// }

// let { isOn, amount, greet } = getConfig()
// isOn //true
// amount  //10
// greet  // hello world

//es5
// let config = {}
// function setConfig(isOn, amount) {
//   config.isOn = isOn
//   config.amount = - amount
// }
// setConfig(true, 10)

//es6
// function setConfig({ isOn, amount }) {
//   return { isOn, amount }
// }
// const { isOn, amount } = setConfig({ isOn: true, amount: 10 })
// isOn //true
// amount //10

// let getConfig = () => {
//   return {
//     isOn: true,
//     amount: 10,
//     servers: {
//       a: "abcd",
//       b: "efgh"
//     }
//   }
// }

// //別名つけてる
// let {
//   isOn: onOffInfo,
//   amount,
//   servers: { a: serverA }
// } = getConfig()
// isOn //not defined
// onOffInfo //true
// amount
// serverA //10