const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        //  console.log(`${this.username}, welcome to website`);
    }
}

// this :- about current context

user.welcomeMessage()

// const chai = function () {
//     let uername = "hitesh"
//     console.log(this.uername);
// }

// Arrow Function 
const chai = () => {
    let uername = "hitesh"
    //  console.log(this);
}

const addtwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addtwo(30, 40));
