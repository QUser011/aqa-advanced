const mainArray = [1, 2, 3, 4, 5];

const sum = mainArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);

