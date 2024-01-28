const accountId = 14453;

let accountEmail = "pavan@gmail.com";

var accountPassword = "12345";
/*
  perfer not to use var because issue 
  in block Scope({}) And Function Scope
*/

accountCity = "Nanded";
let accountState = "Maharashtra";

//accountId = 2; // We cant Change the Constant Value  

accountEmail = "hc@hv.com";
accountPassword = "123456";
accountCity = " pune";
console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);
