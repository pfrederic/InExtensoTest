function FizzBuzz(number) {
  for (var i = 1; i <= number; i++) {
    var result = "";
    if (i % 3 === 0) {
      result += "Fizz";
    }
    if (i % 5 === 0) {
      result += "Buzz";
    }
    if (result !== "") {
      console.log(result);
    } else {
      console.log(i);
    }
  }
}

FizzBuzz(102);
