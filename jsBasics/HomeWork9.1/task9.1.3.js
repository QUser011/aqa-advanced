const car1 = {
  brand: "Tesla",
  model: "ModelX",
  year: 2024,
};
const car2 = {
  brand: "Tesla",
  model: "Model3",
  owner: "Elun Musk",
};
const car3 = {
  ...car1,
  ...car2,
};

console.log(car3);
