// const tinderUser=new object()   singleton object-only one instance can be made
const tinderUser={}
// console.log(tinderUser)

tinderUser.email="rudra@google.com"
tinderUser.id="123abc"
tinderUser.isLoggedIn=false

// ab vo jaise array ma array waise yaha bhi dikkat

const regularUser={
    email:"rudi@google.com",
    fullName:{
        userfullName:
        {
            firstname:"rudra",
            lastname:"chib"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullName.userfullName.firstname) // isi ma fir ? wala hn

const obj1={ 1:"a",2:"b"}
const obj2={3:"a", 4:"b"}
// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)   //destination and src
// const obj4={...obj1,...obj2}  //spread best way like in array
// console.log(obj4)

// hmarra pass database sa data array ma object ki form ma aga
const user= [
    {
        id:1,
        email:"rudi@yahoo.com"
    },
    {
        id:2,
        email:"rudi@yp"
    },
]
// console.log(user[1])

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course ={
    coursename:"js in hindi",
    courseInstructor:"hitesh",
    coursePrice:"999"

}
const {courseInstructor:instructor}=course  // de structure your object
console.log(instructor)

// {
//     "name":"rudra"         json api format
//     "class":"10"
// }