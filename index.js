function isEven(num) {
  return num % 2 == 0;
}

//test cases
console.assert(isEven(6) == true, "isEven(6) failed");
console.assert(isEven(7) == false, "isEven(7) failed");
