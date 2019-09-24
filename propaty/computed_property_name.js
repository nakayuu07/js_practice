// []の中でjavascriptが実行できる
// let key = "lastName"
// let person = {
//   firstName: '太郎',
//   [key]: "山田"
// }
// console.log(person)

//関数もいける
// const getPlace = () => {
//   return "palce"
// }

// let key = "lastName"
// let person = {
//   firstName: '太郎',
//   [key]: "山田",
//   [getPlace()]: "tokyo"
// }


// console.log(person)  { firstName: '太郎', lastName: '山田', palce: 'tokyo' } 

//こんなこともいける
// const getPlace = () => {
//   return "palce"
// }

// let key = "lastName"
// let person = {
//   firstName: '太郎',
//   [key]: "山田",
//   ["birth" + getPlace()]: "tokyo"
// }

// console.log(person) { firstName: '太郎', lastName: '山田', birthpalce: 'tokyo' } 
