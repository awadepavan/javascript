const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Diff Wats To Merge The TWo Array

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// let myarr = marvel_heros.concat(dc_heros);
// console.log(myarr);

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real = another_array.flat(Infinity);
console.log(real);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "hitesh" })); // intresting (provide keys or value)


let sc1 = 100;
let sc2 = 200;
let sc3 = 300;

console.log(Array.of(sc1, sc2, sc3));

