const calculateValidatioNumber = (data) => {
  let notSingleDigitResult = true;
  let inputToArray;
  let inputDataToString;
  let realNumber;
  
  while(notSingleDigitResult) {
    inputDataToString = data.toString();
    inputToArray = inputDataToString.split("");
    realNumber = inputToArray.map(Number)

    data = realNumber.reduce((a, b) => a + b, 0);
    if(data < 10) {
      notSingleDigitResult = false;
      return data;
    }
  }
}

console.log(calculateValidatioNumber(666666666));

