//declaration
function percentageOfWorld1(population) {
  let worldPop = 7900000000;
  let countryPop = (population / worldPop) * 100;
  return countryPop.toFixed(2);
}
let israelPop = percentageOfWorld1(9600000);
console.log(`The population of Israel is ${israelPop}% of the world`);

let germanyPop = percentageOfWorld1(83800000);
console.log(`The population of Germany is ${germanyPop}% of the world`);

let indiaPop = percentageOfWorld1(1406600000);
console.log(`The population of India is ${indiaPop}% of the world`);

//expression
const percentageOfWorld2 = (population) => {
  return ((population / 7900000000) * 100).toFixed(2);
};

let israelPop2 = percentageOfWorld2(9600000);
console.log(`The population of Israel is ${israelPop2}% of the world`);

let germanyPop2 = percentageOfWorld2(83800000);
console.log(`The population of Germany is ${germanyPop2}% of the world`);

let indiaPop2 = percentageOfWorld2(1406600000);
console.log(`The population of India is ${indiaPop2}% of the world`);
