// Arrays

// in javaScript we can add diff
// types of element in array
//const myarr = [1, 2, 3, 4, 5, true, "hitesh"];

const myarr = [1, 2, 3, 4];
// console.log(myarr[0]);
// console.log(myarr);

const myarr2 = new Array(1, 2, 3, 4);
//console.log(myarr2);

myarr.push(5);
myarr.push(6);
myarr.push(7);
//console.log(myarr);
//console.log(myarr.includes(3));
//console.log(myarr.entries(2));
//console.log(myarr.find(5));
//console.log(myarr.filter);


myarr2.push(5);
myarr2.push(6);
myarr2.push(7);
myarr2.unshift(2);

//console.log(myarr2);


// Slice , Splice
// The Diff Between Slice And Splice is 
// Slice :- Copy the object and print it
// splice :- Pickup The Object From Array And print it
// means the elements in array are removed completely
console.log("A", myarr);

const myn1 = myarr.slice(1, 3);
console.log(myn1);

const myn2 = myarr.splice(1, 3);
console.log(myn2);

console.log(myarr);






