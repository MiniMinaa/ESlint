//Task one
const greet = (firstName: string) => {
  return "Hello " + firstName;
};
console.log(greet("Student"));

// Task two

const double = (n: number) => {
  return n * 2;
};
console.log(double(5));

//Task three

const isEven = (num: number) => {
  return num % 2 === 0;
};
console.log(isEven(4));

//Task four

const square = (x: number) => {
  return x * x;
};
console.log(`square is ${square(5)}`);

//Task five

const getAge = (year: number) => {
  return 2026 - year;
};
console.log(`This year im turning ${getAge(2001)} years old.`);

//Task six
const prices = [10, 20, 30];
let total = 0;
prices.forEach((p) => {
  total += p;
});
console.log(`the total is ${total}`);
