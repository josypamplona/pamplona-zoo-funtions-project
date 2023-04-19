const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('confere se o zoologico ta aberto e retorn', () => {
    expect(getOpeningHours('Saturday', '12:30-AM')).toEqual('The zoo is closed');
  });
  it('confere se o zoologico ta aberto', () => {
    expect(getOpeningHours('Tuesday', '01:40-PM')).toEqual('The zoo is open');
  });
  it('confere se o zoologico está fechado?', () => {
    expect(getOpeningHours('Tuesday', '11:15-PM')).toEqual('The zoo is closed');
  });
  it('confere se o zoologico t', () => {
    expect(getOpeningHours('Tuesday', '09:15-PM')).toEqual('The zoo is closed');
  });
  it('confere se o zoologico está fechado?', () => {
    expect(getOpeningHours('Saturday', '10:15-PM')).toEqual('The zoo is closed');
  });
  it('confere se o zoologico está fechado hoje?', () => {
    expect(getOpeningHours('Saturday', '12:15-PM')).toEqual('The zoo is open');
  });
  it('confere se o zoologico está fechado hoje a tarde?', () => {
    expect(getOpeningHours('Saturday', '09:15-PM')).toEqual('The zoo is open');
  });
});
