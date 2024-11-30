//singleton
//object.create

//object literals
const mysym=Symbol("Key")  // make this sybol in object data
const jsuser={
    name:"rudra" ,  // ya name auto ji string la lata
    age:20,
    email:"rudra@google.com",
    LoggedIn:false,
    LastLogin:["Mon","Wednesday"],
    [mysym]:"key"


}
// console.log(jsuser.email)
// console.log(jsuser["email"]) // string type hai sab object ma
console.log(jsuser.mysym)

jsuser.age=90
// Object.freeze(jsuser)
jsuser.age=18
console.log(jsuser.age)

//function ka sath bachodi
jsuser.greeting=function() {
    console.log("hello user")
}
console.log(jsuser.greeting())

jsuser.greeting2=function() {
    console.log(`hello,${this.name}`) // cool
}
console.log(jsuser.greeting2())