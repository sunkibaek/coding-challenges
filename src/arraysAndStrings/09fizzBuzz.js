// What is fizz buzz?
// Return the string representation of numbers from 1 to n
// Multiples of 3 -> 'Fizz'
// Multiples of 5 -> 'Buzz'
// Multiples of 3 and 5 -> 'FizzBuzz'
// Can we assume the inputs are valid?
// No
// Can we assume this fits memory?
// Yes

const fizzBuzz = (n) => {
  if (n === undefined) {
    throw new TypeError("Params not given");
  }

  if (n < 1) {
    throw new TypeError("Invalid params given");
  }

  const result = [];

  for (let i = 1; i <= n; i += 1) {
    let newString = "";

    if (i % 3 === 0) {
      newString += "Fizz";
    }

    if (i % 5 === 0) {
      newString += "Buzz";
    }

    if (newString === "") {
      newString = String(i);
    }

    result.push(newString);
  }

  return result;
};

module.exports = fizzBuzz;
