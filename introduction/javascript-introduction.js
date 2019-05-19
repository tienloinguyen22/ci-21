// declare
var a = 1;
let b = 2;
const c = 3;

// function
function myFirstFunction (a, b) {
  return a + b;
}

const newFunction = (c, d) => {
  const e = 10;

  if (c > 5) {
    const f = 100;
    return c;
  } else {
    return c + d;
  }
};

myFirstFunction(4, 5);
newFunction(1, 2);

for (let i = 0; i < 100; i += 1) {
  // logic
}

const myArray = [1, 2, 3, 4, 5, 6 ,7];
for (let i = 0; i < myArray.length; i += 1) {
  myArray[i];
}

for (let item of myArray) {

}

// camel case
const myFirstJavascriptName = 'Hello world!';

// Pascal case
const MyPascalCaseVariable = '123456789';

// slug
slug-variable-test

// snake
snake_varialbe_test