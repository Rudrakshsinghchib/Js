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

console.log(userlog("rudra"))