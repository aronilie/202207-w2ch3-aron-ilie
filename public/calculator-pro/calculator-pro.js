/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable prefer-template */
function calculatorPro() {
  let newNumber;
  const numberList = [];
  const result = [];
  let i;

  while (newNumber !== null) {
    newNumber = prompt("Enter a number or press cancel to stop");

    if (Number.isNaN(newNumber) === true) {
      alert("The number you entered is incorrect.");
    } else if (newNumber !== null) {
      newNumber = Number(newNumber);
    }

    numberList.push(newNumber);
  }

  result[0] = numberList[0] + numberList[1];
  result[1] = numberList[0] - numberList[1];
  result[2] = numberList[0] * numberList[1];
  result[3] = numberList[0] / numberList[1];

  for (i = 2; i < numberList.length - 1; i++) {
    result[0] += numberList[i];
    result[1] -= numberList[i];
    result[2] *= numberList[i];
    result[3] /= numberList[i];
  }

  console.log("The result of the sum is: " + result[0]);
  console.log("The result of the rest is: " + result[1]);
  console.log("The result of the multiplication is: " + result[2]);
  console.log("The result of the division is: " + result[3]);

  newNumber = prompt("New numbers? y/n");

  switch (newNumber) {
    case "y":
      calculatorPro();
      break;
    case "n":
      console.log("Bye!");
  }
}

calculatorPro();
