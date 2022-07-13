/* eslint-disable no-console */
/* eslint-disable no-alert */
function calculator() {
  let j;

  let result = [];
  let canOperate;

  let number1 = prompt("Enter the first number");
  let number2;

  while (!canOperate) {
    if (number1 === "" || Number.isNaN(number1) === true) {
      number1 = prompt("The number you entered is incorrect, please try again");
    } else {
      number1 = Number(number1);
      number2 = prompt("Enter the second number (optional)");

      while (!canOperate) {
        if (Number.isNaN(number2) === true) {
          number2 = prompt(
            "The number you entered is incorrect, please try again"
          );
        } else if (number2 === "" || number2 === null) {
          canOperate = true;
          result = Math.sqrt(number1);
        } else {
          canOperate = true;
          number2 = Number(number2);

          result.push(number1 + number2);
          result.push(number1 - number2);
          result.push(number1 * number2);
          result.push(number1 / number2);
        }
      }
    }
  }

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
}

calculator();
