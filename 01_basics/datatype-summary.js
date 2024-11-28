// Primitive type
// 7 types:String,Number,boolean,null,undefined,symbol,Bigint

const score=100
const scoreValue=100.3  //dynamic language

const isLoggedIn=false
const outsidetemp=null
let email

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id=== anotherId)

// Reference (Non-primitive)
//Array,Object,Functions

const heros=["toji","sukuna","dogi"];

let myObj= {
    name:"rudra",
    age:20,
}
console.log(heros)

const fun=function() {
    console.log("hi");
}

console.log(typeof outsidetemp)

