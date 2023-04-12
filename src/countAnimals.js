const data = require('../data/zoo_data');

const countAnimals = (obj) => {
    const contar = data.species.find((obj) => obj.name === obj);
    return contar;
};
console.log(countAnimals(liom))
module.exports = countAnimals;
