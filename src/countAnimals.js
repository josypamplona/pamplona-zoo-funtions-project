const data = require('../data/zoo_data');

const countAnimals = (obj) => {
  let contar;
  if (obj) {
    const animals = data.species.find((specie) => obj.species === specie.name);
    if (obj.sex) {
      contar = animals.residents.filter((animal) => animal.sex === obj.sex).length;
    } else if (obj.species) {
      contar = animals.residents.length;
    }
  } else {
    contar = data.species
      .reduce((keysVals, animal) => ({ ...keysVals, [animal.name]: animal.residents.length }), {});
  }
  return contar;
};

module.exports = countAnimals;
