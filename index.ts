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

//Task seven

/*Const user = { name: "Mina" };
const sayHi = () => {
  return console.log(`hi ${user.name}`);
};

sayHi();
*/
//Task eight
const colors = ["red", "blue"];
colors.forEach((c) => {
  return console.log(`color ${c}`);
});

//Task nine

const items = [1, 2, 3];
const doubled = items.map((i) => {
  return i * 2;
});
console.log(`doubled ${doubled}`);

//Task ten
/*Const user1 = { isAdmin: true };
const user2 = { isAdmin: true };*/

const checkAuth = (user) => {
  return user.isAdmin;
};
console.log(`is admin: ${checkAuth(user)}`);
