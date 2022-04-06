const grade = (number) => {
  if (number >= 0 && number <= 64) {
    return "F";
  } else if (number > 64 && number <= 69) {
    return "D";
  } else if (number > 69 && number <= 79) {
    return "C";
  } else if (number > 79 && number <= 89) {
    return "B";
  } else if (number > 89 && number <= 100) {
    return "A";
  }
};

console.log("Your grade is", grade(79));
