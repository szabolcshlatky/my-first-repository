`use strict`;

/* Parancssor a böngészőben */

console.log(64, 55 + 21, 44 / 2, 35 % `valami`);

/* Változók, Típusok és Kifejezések a JavaScript nyelvben */

let age = 28;
let ww2 = 1945 - 1939;
let tesla = 350 * 76;
let secondsOfDay = 3600 * 24;
let hungarians = 14000000;
let bigger = 9597000 / 78871;
let participants = 654 % 7;

console.log(age, ww2, tesla, secondsOfDay, hungarians, bigger, participants);

let names = [`Hlatky`, `Eszter`, `Elizabet`];
console.log(names[2].length);

names.push(`Pocaklakó`);
names[0] = `Szabolcs`;

console.log(names.length);

let object = {
  colors: [`orange`, `magenta`, `red`, `brown`, `green`, `blue`, `teal`],
  hasManyColors: true
};

/* A JavaScript alapvető építőelemei */

let a = 7;

if (a < 5) {
  console.log(a / 2);
} else if (a <= 5) {
  console.log(a * 2);
} else {
  console.log(a - 6);
}

let bookCount = 10;

for (let i = 0; i < bookCount; i++) {
  console.log(i);
}

for (let i = 1; i <= bookCount; i++) {
  console.log(i);
}

let count = 20;

for (let i = 0; i <= count; i = i + 2) {
  console.log(i);
}

function printNumbersTill (n) {

  for (let index = 1; index <= n; index++) {
    console.log(index);
  }
}

printNumbersTill(20);
printNumbersTill(15);

function getGreetingTo(namen) {
  console.log(`Hello ${namen}!`);
} 

getGreetingTo(`Mark`);

let printValues = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

printValues([0, 3, 6, 7, 9]);

let myNumbers = [10, 20, 30, 50, 12];

myNumbers.forEach((number) => {
  console.log(number);
});