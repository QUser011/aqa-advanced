const handleNum = (number, handleEven, handleOdd) => {
  if (number % 2 === 0) {
    handleEven(number);
  } else {
    handleOdd(number);
  }
};
function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

handleNum(1, handleEven, handleOdd);

