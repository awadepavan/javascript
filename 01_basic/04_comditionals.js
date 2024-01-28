console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* 
The reason is that an equality  check ==
and comparision > <>= <= work different
comparision converter null to a number, treating it as 0.
That's why (3) null >= is true and (1) null > 0 is false.
 */


