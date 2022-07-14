/* eslint-disable no-console */
/* eslint-disable no-alert */
function calculator(number1, number2) {
  let j;

  let result = [];

  result.push(number1 + number2);
  result.push(number1 - number2);
  result.push(number1 * number2);
  result.push(number1 / number2);

  for (j = 0; j < result.length; j++) {
    if (`${result[j]}`.length > 5) {
      result[j] = result[j].toFixed(3);
    }
  }

  console.log("Results:");

  if (result.length > 1) {
    console.log(`The result of the sum is: ${result[0]}`);
    console.log(`The result of the rest is: ${result[1]}`);
    console.log(`The result of the multiplication is: ${result[2]}`);
    console.log(`The result of the division is: ${result[3]}`);
  } else {
    if (`${result}`.length > 5) {
      result = result.toFixed(3);
    }
    console.log(`The result of the square root is: ${result}`);
  }
  return result;
}

calculator();

export default calculator;
