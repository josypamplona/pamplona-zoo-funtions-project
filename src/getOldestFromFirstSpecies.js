const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animal = data.employees.find((obj) => obj.id === id).responsibleFor[0];
  const animalObj = data.species.find(
    (specie) => specie.id === animal,
  ).residents;
  return Object.values(
    animalObj.sort((a, b) => a.age - b.age)[animalObj.length - 1],
  );
}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;

// A função recebe um parâmetro ID referente à pessoa colaboradora e a partir desse ID:

// A função deverá encontrar a pessoa colaboradora que possui o ID passado por parâmetro;

// A função deverá encontrar a primeira espécie de animal que a pessoa colaboradora é responsável;

// A função deverá encontrar o animal mais velho daquela espécie;

// A função deverá retornar um array com as informações do animal mais velho daquela espécie.
