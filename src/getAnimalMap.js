const data = require('../data/zoo_data');

const getAnimalMap = (options) => data.species.reduce((acc, curr) => {
  acc[curr.location] = [];
  const state = data.species.find((location) => state.short ===curr.state)
  const obj = {
    location:curr.location,
  };
  acc[curr.location].push(obj);
  return acc
}); {})
module.exports = getAnimalMap;
