// this-current context

console.log(this)
// console.log(1)
const user= {
    name:"hitesh",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.name}, welcome to website`);
        console.log(this);
    }

}



// user.welcomeMessage();
// user.name="rudra"
// user.welcomeMessage();

function chai() {
    let username="rudra"
    console.log(this.username)
}
console.log(chai())


//  const chai=function () {       // this sirf object ka andar kaam karta
//     let username="rudra"
//     console.log(this.username)
// }
// console.log(chai);

// this here - { } in browser console-global variable


// const addTwo=(num1,num2) => {
//     return num2+num1
// }

const addTwo=(num1,num2) => (num1+num2)

// console.log(addTwo(3,4))
// () => {} this is arraow function

// implicit fun - one line so no need to return i know

const add=(num4,num3) => (num4+num3)
// console.log(add(2,3))

const r=() => ({user:"rudra"})
// console.log(r)

const arr=[3,4,6,8]
// arr.forEach()

