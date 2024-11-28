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

console.log(typeof fun)
// https://262.ecma-international.org/5.1/#sec-11.4.3

// ============== Memory Stack(non  primitive-copy) Heap(primitive reference)
let name="rudra"
let yourname=name
yourname="rudi"             // stack stuff
// console.log(yourname)
// console.log(name)


              // heap
              let mystory= {
                name:"vibhu",
                age:24,
              }
              let vi=mystory
              vi.age=29
              console.log(mystory.age)