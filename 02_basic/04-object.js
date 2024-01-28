//const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isloggedin = false

//console.log(tinderUser);


const regularUser = {
    email: "somesh@gmail.com",
    fullName: {
        fristName: "Somesh",
        lastName: "Hampole"
    }
}

//console.log(regularUser);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign(obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
//console.log(obj3);


const course = {
    courseName: "jsInHindi",
    price: "1000",
    courseInstructor: "hitesh"

}
//destructuring
const { courseInstructor: instructor } = course;
//console.log(courseInstructor);
console.log(instructor);

//




