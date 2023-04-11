/* eslint-disable for-direction */
/* eslint-disable no-undef */
/* eslint-disable no-const-assign */

const data = require('../data/zoo_data');

const getSpeciesByIds = (...obj) => {
  const empurra = data.species.filter((espec) => espec.id === obj[0] || espec.id === obj[1]);
  return empurra;
};

console.log(getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));

module.exports = getSpeciesByIds;
