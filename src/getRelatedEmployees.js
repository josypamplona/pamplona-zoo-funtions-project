const data = require('../data/zoo_data');

const isManager = (id) => {
//   const ger1 = '9e7d4524-363c-416a-8759-8aa7e50c0992';
//   const ger2 = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
//   const ger3 = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
//   let retorno = false;
//   if (id === ger1 || id === ger2 || id === ger3) {
//     retorno = true;
//   }
//   return retorno;
};

const getRelatedEmployees = (managerId) => {
//   if (isManager(managerId)) { return data.employees.filter((obj) => obj.firstName && obj.lastName); }
};
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
