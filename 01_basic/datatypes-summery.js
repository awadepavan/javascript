// primitive :-

// 7 types : String , Number ,Symbol
//           Boolean , Null , undefined
//             Bigint

const bigInteger = 321456987756495642n;


// Reference (Non Primitive):-

// Types:- Array,Object , Function  

// Array
const heros = ["hitesh", "naagraj", "raju"];
// Object
let myodj = {
    name: "pavan",
    age: 22,
}

// Function
const myfunction = function () {
    console.log("Hello World");
}

//------------------------------------------------------

// Stack(use in primitive),Heap(Non-primitive)
// Stack Example(Copy is created in stack )
let myYotubeName = "Hitesh"

let anotherName = myYotubeName
anotherName = "Ritesh"
console.log(anotherName);
console.log(myYotubeName);


// Heap Examples
//( WE GET the Reference Of the Object Not A copy )

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = " Hitesh@google.com"

console.log(userOne);
console.log(userTwo);




