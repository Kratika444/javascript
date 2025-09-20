let score ="33abc"
let marks= null
let check= true 
let str= undefined 

console.log(typeof score);
console.log(typeof(score));

let valueInNumber= Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)    // output= NaN // not a number 

let convert= Number(marks)
console.log(typeof(convert))
console.log(convert)  

let con= Number(check)
console.log(typeof(con))
console.log(con)   

let conv= Number(str)
console.log(typeof(conv))
console.log(conv)   

// 33-> 33
//"33abc"-> NaN 
// true ->1

let isLoggedIn =1        // true 
//let isLoggedIn=""      // false 
//let isLoggedIn="kratika"     // true 

let booleanIsLoggedIn=  Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let num =33
let stringNum= String(num)
console.log(stringNum)
