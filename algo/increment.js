function increment(number) {
  let retain = false;
  let index = number.length - 1;
  let result = null;
  do {
    let digit = number[index];

    if (digit < 9) {
      digit = digit + 1;
      retain = false;
    } else {
      digit = 0;
      retain = true;
    }
    number[index] = digit;
    index = index - 1;
  } while (index >= 0 && retain === true);
  result = number;
  if (retain === true) {
    result = new Array(number.length + 1);
    result[0] = 1;
    for (var i = 1; i <= number.length; i++) {
      result[i] = number[i - 1];
    }
  }
  return result;
}
