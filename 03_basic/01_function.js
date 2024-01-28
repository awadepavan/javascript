function addTwoNumber(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumber(10, 30);

//console.log("result", result);

function loginuserMessage(username) {
    if (username == undefined) {
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`;
}

console.log(loginuserMessage("Somesh"));
console.log(loginuserMessage());