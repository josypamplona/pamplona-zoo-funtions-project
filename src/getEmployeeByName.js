const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  let empregados = {};
  if (employeeName) {
    empregados = data.employees.find((objeto) => objeto
      .firstName === employeeName || objeto.lastName === employeeName);
  }
  return empregados;
};

console.log(getEmployeeByName('Bethea'));

module.exports = getEmployeeByName;
