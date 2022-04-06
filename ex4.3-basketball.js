//first define a function for average
const average = (x, y, z) => {
  let avg = (x + y + z) / 3;
  return Math.round(avg);
};

const winner = () => {
  let john = average(89, 120, 103);
  let mike = average(116, 94, 123);
  let Mary = average(116, 94, 123);
  if (john === mike) {
    console.log("Same score", john);
  }
  if (john > mike) {
    console.log("the winner is John's team and the score is", john);
  } else {
    console.log("the winner is Mike's team and the score is", mike);
  }
};

winner();
