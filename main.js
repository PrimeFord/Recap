for (let i = 0; i <= 5; i++) {
  console.log(i);
}
//
for (let i = 0; i < 6; i++) {
  console.log(i);
}
//Decrement
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
//
for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}
//
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log(newArr);

//without loop
const names = [];
names.push(countries[0].toUpperCase());
names.push(countries[1].toUpperCase());
names.push(countries[2].toUpperCase());
names.push(countries[3].toUpperCase());
names.push(countries[4].toUpperCase());
console.log(names);

//printing 1 to 100 with loop

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

for (let i = 0; i < 101; i++) {
  console.log(i);
}

// adding all elements in an array
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]; // can be shorten, sum += numbers[i]
  // sum=0+1=1
  // sum=1+2=3
  // sum=3+3=6
  // sum=6+4=10
  // sum=10+5=15
}
console.log(numbers.length);
console.log(sum);

//using the numbers array above
let add = 0;
for (let i = numbers.length - 1; i >= 0; i--) {
  add += numbers[i];
}
console.log(add);

//adding 5 to 3 from the array
let ad = 0;
for (let i = numbers.length - 1; i >= 2; i--) {
  ad += numbers[i];
}
console.log(ad);

//creating new array from an existing one
const number = [1, 2, 3, 4, 5];
const newArray = [];
let plus = 0;
for (let i = 0; i < number.length; i++) {
  newArray.push(number[i] ** 2);
}

console.log(newArray);

//While loop
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

//while decrement
let d = 10;
while (d >= 0) {
  console.log(d);
  d--;
}

//
//Do-while Loop
let a = 0;
do {
  console.log(a);
  a++;
} while (a <= 5);

//decrement for do=while loop
let b = 5;
do {
  console.log(b);
  b--;
} while (b >= 0);

//For of loop
const numberss = [1, 2, 3, 4, 5];

for (const num of numberss) {
  console.log(num ** 2);
}

const state = ["kwara", "lagos", "abuja", "abia", "kaduna"];
for (const s of state) {
  console.log(s.toUpperCase());
}

//
let summ = 0;
for (const n of numberss) {
  summ += n; //shorthand version of summ = summ + n
}
console.log(summ);

//break
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

for (let i = 0; i < state.length; i++) {
  if (i == 3) {
    break;
  }
  console.log(state[i]);
}

//
for (let i = 0; i < state.length; i++) {
  if (state[i].length < 5) {
    break;
  }
  console.log(state[i]);
}

//Continue
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

//for decrement
for (let i = 10; i >= 0; i--) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

//
const states = ["kwara", "lagos", "abuja", "abia", "kaduna"];
for (let i = 0; i < states.length; i++) {
  if (states[i].length < 5) {
    continue;
  }
  console.log(states[i]);
}
