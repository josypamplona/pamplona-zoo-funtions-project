const { species } = require('../data/zoo_data');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes quando o parametro for count', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes quando o paramentro for name', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('retorna a média de idade dos elefantes quando o paramentro for averageAge', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(["Friday", "Saturday", "Sunday", "Tuesday"]);
  });
});
