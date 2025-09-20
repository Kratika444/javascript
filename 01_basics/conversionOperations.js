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


// *************** Operations ******************//
let value=3
let negvalue= - value 
console.log(negvalue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**3)
console.log(2%3)

let str1= "kratika"
let str2= " nigam"
let str3= str1+str2
console.log(str3)

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log(true)     // true 

console.log(+true)    // 1
console.log(+"")      // 0

let gameCounter=100
++gameCounter;
console.log(gameCounter)
gameCounter++
console.log(gameCounter)

// example ->

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



let aa= 2;
let bb=5;
console.log(`aa:${aa},bb:${bb}`);

