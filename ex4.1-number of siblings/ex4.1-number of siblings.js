let numSiblings = Number(prompt("How many siblings do you have?"));
if (numSiblings === 1) {
  console.log("1 sibling!");
} else if (numSiblings > 1) {
  console.log("more than 1 sibling");
} else {
  console.log("No siblings");
}

//We should use the === operator because there can be cases when we
//need to consider the type of the varaible and not only the value.
//if we put the == operation in this exercise, it deosnt matter if the input is a string or a number,
//and in this case its a string compared to a number. thats why === wasnt working.
