var c=30
{
    let r=90
    const f=0
    c=90

}
// console.log(r)
// console.log(f)
// console.log(c)

// deko nested function  ma scope ki gaha parent child ka conxcept a jata
function one() {
    const username="rudra"

    function two() {
        const website='youtube'
        console.log(username)
    }
    two()
}

console.log(one())

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

