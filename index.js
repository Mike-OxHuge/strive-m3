console.log("let's begin!");
// 1) Create a function to calculate the sum of the two given integers. If
// the two values are the same, then returns the triple of their sum.
const ex1 = function (num1, num2) {
  let result;
  if (num1 === num2) {
    result = 3 * (num1 + num2);
  } else {
    result = num1 + num2;
  }
  return result;
};
console.log(`Result if given numbers are 1 and 2: ${ex1(1, 2)}, 
result if given numbers are 2 and 2: ${ex1(2, 2)}`);

// 2) Create a function to check two given numbers. Return true if one of
//   the numbers is 50, or if their sum is 50.
const ex2 = function (x, y) {
  let result;
  if (x === 50 || y === 50 || x + y === 50) {
    result = true;
  } else {
    result = false;
  }
  return result;
};
console.log(
  `
    the given numbers 20 and 25, the result is ${ex2(20, 25)},
    with 15 and 35: ${ex2(15, 35)},
    with 50 and 50 ${ex2(50, 50)}
    `
);

// 3) Create a function to remove a character at the specified position of
//   a given string and return the new string.
const ex3 = function (string, num) {
  newString = string.slice(0, num - 1) + string.slice(num);
  return newString;
};
console.log(
  `
    Given string is balls, given number is 2: ${ex3("balls", 2)}
    `
);

// 4) Create a function to find the largest of three given integers.
const ex4 = function (x, y, z) {
  result = Math.max(x, y, z);
  return result;
};
console.log(
  `
  The greatest number among 1,2,3 is: ${ex4(1, 2, 3)}
    `
);

// 5) Create a function to check whether two numbers are in range 40..60
// or in the range 70..100 inclusive.
const ex5 = function (x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    console.log(`${x} and ${y} are in range of 40..60 or 70..100`);
  } else {
    console.log(`${x} and ${y} are out of range of 40..60 or 70..100`);
  }
};
ex5(60, 55);

// 6) Create a function that creates and returns the specified number of
// copies of a given string (positive number).
ex6 = function (string, num) {
  let arr = [];
  if (num > 0 && typeof string === "string") {
    for (let i = 0; i < num; i++) {
      arr.push(string);
    }
  } else {
    console.log(
      `the given number of ${num} is not positive or not a number at all or ${string} is not a string`
    );
  }

  return arr;
};
console.log(ex6("balls", 6));

// 7) Create a function that returns the city name of a given string, if
// the string begins with "Los" or "New", otherwise returns blank.
const ex7 = function (city) {
  if (city.substring(0, 3) == "Los" || city.substring(0, 3) == "New") {
    return city;
  }
  return "";
};
console.log(ex7("Las balls"));
console.log(ex7("Los balls"));
console.log(ex7("New balls"));

// 8) Create a function to calculate the sum of three elements of a given
// array of integers of length 3.
ex8 = function (x, y, z) {
  let arr = [];
  let result;
  arr.push(x, y, z);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  result = arr.reduce(reducer);
  return result;
};
console.log(ex8(1, 2, 3));

// 9) Create a function to test whether an array of integers of length 2
// contains 1 or a 3.
const ex9 = function (x, y) {
  let arr = [];
  let result;
  arr.push(x, y);
  let checker = arr.find((num) => num === 1 || num === 3);
  if (checker === undefined) {
    result = false;
  } else {
    result = true;
  }
  return result;
};
console.log(ex9(5, 2));

// 10) Create a function to test whether an array of integers of length 2
// does not contain 1 or a 3
const ex10 = function (x, y) {
  let arr = [];
  let result;
  arr.push(x, y);
  let checker = arr.find((num) => num !== 1 || num !== 3);
  if (checker === undefined) {
    result = false;
  } else {
    result = true;
  }
  return result;
};
console.log(ex10(7, 6));

// 11) Create a function to find the longest string from a given array of
// strings.

//  12) Create a function to find the types of a given angle. Types of
// angles: Acute angle: An angle between 0 and 90 degrees. Right angle: An 90
// degree angle. Obtuse angle: An angle between 90 and 180 degrees. Straight
// angle: A 180 degree angle.
const ex12 = function (angle) {
  let result;
  if (angle < 90) {
    result = "acute angle";
  } else if (angle === 90) {
    result = "right angle";
  } else if (angle < 180) {
    result = "obtuse angle";
  } else if (angle === 180) {
    result = "straight angle";
  } else {
    result = "I guess this is not a valid angle";
  }
  return result;
};
console.log(
  `
    ${ex12(180)}
    `
);

// 13) Create a function to find the index of the greatest element of a
// given array of integers

// 14) Create a function to get the largest even number from an array of
// integers.

// 15) Create a function to check from two given integers, whether one is
// positive and another one is negative.
const ex15 = function (x, y) {
  let result;
  if (x > 0 && y < 0) {
    result = `${x} is positive and ${y} is negative`;
  } else {
    result = "given numbers are incorrect";
  }
  return result;
};
console.log(ex15(5, -5));

// 16) Create a function to create new string with first 3 characters are
// in lower case and the others in upper case. If the string length is less
// than 3 convert all the characters in upper case.
ex16 = function (string) {
  let result;
  if (string.length < 3) {
    result = string.toUpperCase();
  } else {
    result =
      string.substring(0, 3).toLowerCase() +
      string.substring(3, string.length).toUpperCase();
  }
  return result;
};
console.log(ex16("balls"));

// 17) Create a function to calculate the sum of the two given integers,
// If the sum is in the range 50..80 return 65 other wise return 80.
const ex17 = function (x, y) {
  let result;
  if (x + y >= 50 && x + y <= 80) {
    result = 65;
  } else {
    result = 80;
  }
  return result;
};
console.log(ex17(55, 53));

// 18) Create a function to convert a number to a string, the content of
// which depends on the number's factors. Follow next example: If the number
// has 3 as a factor, output 'Diego'. If the number has 5 as a factor, output
// 'Riccardo'. If the number has 7 as a factor, output 'Stefano'. If the
// number does not have 3, 5, or 7 as a factor, just pass the number's digits
// straight through. Examples 28's factors are 1, 2, 4, 7, 14, 28. this would
// be a simple "Stefano". 30's factors are 1, 2, 3, 5, 6, 10, 15, 30. this
// would be a "DiegoRiccardo". 34 has four factors: 1, 2, 17, and 34. this
// would be "34".

// 19) Create a function that given a phrase returns its acronym, like
// British Broadcasting Corporation returns BBC
const ex19 = function (string) {
  let result;
  result = string.split(" ");
  for (let i = 0; i < result.length; i++) {
    // fuck it
  }
  return result;
};
console.log(ex19("balls balls balls"));
