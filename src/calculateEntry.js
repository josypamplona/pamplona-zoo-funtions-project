const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const crianca = entrants.filter((elem) => elem.age < 18).length;
  const adulto = entrants.filter((elem) => elem.age >= 18 && elem.age < 50).length;
  const old = entrants.filter((elem) => elem.age >= 50).length;
  const quantidade = { child: crianca, adult: adulto, senior: old };
  const arreyV = [];
  if (entrants) {
    return quantidade;
  } return arreyV;
};

const calculateEntry = (um) => {
  if (um) {
    const entrada = countEntrants(um);
    const valor = entrada.child * 20.99;
    const valor2 = entrada.adult * 49.99;
    const valor3 = entrada.senior * 24.99;
    const somaValor = valor + valor2 + valor3;
    return somaValor;
  } return 0;
};
// calculateEntry(pessoas);

module.exports = { calculateEntry, countEntrants };
