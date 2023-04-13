const data = require('../data/zoo_data');

const isManager = (id) => {
  const ger1 = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const ger2 = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const ger3 = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  let retorno = false;
  if (id === ger1 || id === ger2 || id === ger3) {
    retorno = true;
  }
  return retorno;
};

const getRelatedEmployees = (managerId) => {
  const gerente = data.employees.filter((arrey2) => arrey2.managers.includes(managerId));
  const empregado = gerente.map((arrey3) => `${arrey3.firstName} ${arrey3.lastName}`);
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return empregado;
};

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = { isManager, getRelatedEmployees };
