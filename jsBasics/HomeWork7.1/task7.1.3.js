const divide = (numerator, denominator) => {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Numerator and denominator must be numbers");
  }
  if (denominator === 0) {
    throw new Error("Zero is not allowed.");
  }
  return numerator / denominator;
};
const divideTwo = (numerator, denominator) => {
  try {
    const result = divide(numerator, denominator);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    console.log("Роботу завершено");
  }
};

divideTwo(5, 2);
divideTwo(5, 0);
divideTwo(5, "test");
