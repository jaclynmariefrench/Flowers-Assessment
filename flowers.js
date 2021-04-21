const flowers = [
  {
    id: 1,
    color: "White",
    species: "Rose",
    price: 0.9,
  },

  {
    id: 2,
    color: "Red",
    species: "Tulip",
    price: 1.1,
  },
];

const addFlower = (flowerObject) => {
  /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */
  const lastIndex = flowers.length - 1;
  const currentLastFlower = flowers[lastIndex];
  const maxId = currentLastFlower.id;
  const idForNewFlower = maxId + 1;

  flowerObject.id = idForNewFlower;
  flowers.push(flowerObject);
};

const daisy = {
  color: "Yellow",
  species: "Daisy",
  price: 0.95,
};

addFlower(daisy);

const califoniaPoppy = {
  color: "orange",
  species: "California Poppy",
  price: 0.4,
};

addFlower(califoniaPoppy);

const sunflower = {
  color: "Yellow",
  species: "Sunflower",
  price: 1.05,
};

const findExpensiveFlowers = () => {
  const expensiveFlowers = []; // Do not change this code

  /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */

  for (const flower of flowers) {
    if (flower.price >= 1) {
      expensiveFlowers.push(flower);
    }
  }
  return expensiveFlowers; // Do not change this code
};

// Do not touch this code
module.exports = {
  findExpensiveFlowers,
  addFlower,
};
