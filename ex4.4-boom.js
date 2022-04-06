let boom = (n) => {
  for (let i = 1; i < n + 1; i++) {
    if (i % 7 === 0 && String(i).includes(7)) {
      //indexOf(7) != -1
      console.log("BOOM-BOOM");
    } else if (i % 7 === 0) {
      console.log("BOOM");
    } else {
      console.log(i);
    }
  }
};

boom(18);
