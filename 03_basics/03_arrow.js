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
user.name="rudra"
user.welcomeMessage();
