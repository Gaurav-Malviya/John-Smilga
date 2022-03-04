
//const names = require("./4-names.js")
const {names}= require('./4-names')
const helloFun = require("./5-utils.js")
const altWay = require("./6-alternative flavor")

console.log(names)
console.log(helloFun)
console.log(altWay)
console.log(" ")

helloFun.sayHi(names.grey)
helloFun.sayHi(names.dior)
helloFun.sayHi('Jeremy Fragrance')
console.log(" ")

console.log('To Eat:'.toUpperCase())
for(let i=0;i<altWay.toBuy.length;i++)
{
    console.log(altWay.toBuy[i])
}
console.log(" ")

console.log('Perfume Rotation:'.toUpperCase())
console.log("For Day:",altWay.perfumeRotation['day'])
console.log("For evening:",altWay.perfumeRotation['evening'])
console.log("For Night:",altWay.perfumeRotation['night'])
console.log(" ")

console.log(altWay.spanish())

require('./7-mind grenade')