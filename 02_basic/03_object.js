// types of object

// singleton

// Symbol
const mysym = Symbol("key1");

// object literal

const Jsuser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary Roy",
    [mysym]: "myKey1",
    age: 18,
    email: "hitesh@google.com",
    isLoggedin: false,
    lastLoginday: ["Monday", "Saturday"]
}

console.log(Jsuser.name);
console.log(Jsuser["name"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mysym]);
console.log(typeof Jsuser[mysym]);

console.log(Jsuser);

