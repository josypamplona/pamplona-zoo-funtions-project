const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const achar = data.species.find((objeto) => objeto.name === animal);
  const idade = achar.residents.every((objeto) => objeto.age >= age);
  return idade;
};

console.log(getAnimalsOlderThan('lions', 7));

module.exports = getAnimalsOlderThan;
