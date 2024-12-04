function rudra() {
    console.log("flow")
}

rudra()

function addtwonum(number1,number2) //parameter
{
    return number1+ number2
}
rudi=addtwonum(2,34)
console.log(rudi)


function userlog(username) {
    if(!username)
    {
        console.log("enter a username")
        return
    }
     return `hi ${username}`
}

// console.log(userlog("rudra"))

function calculateCartPrice(val1,val2,...num1)
{
    return num1;
}
console.log(calculateCartPrice(10,20,100))

const obj={
    username:'rudra',
    id:2
}
function o(anyobj)
{
    console.log(`hi ${anyobj.username} and id ${anyobj.id}`)
}

o(obj)

const arr=[100,400,600]
function a(array)
{
    return array[2];
}
console.log(a(arr))
console.log(a([300,500,900]))
