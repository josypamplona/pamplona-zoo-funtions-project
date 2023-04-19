const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Já que o Zoo está sempre fechado na segunda Para os argumentos Monday e 09:00', () => {
    expect(getOpeningHours()).toEqual({ Friday: { close: 8, open: 10 },
      Monday: { close: 0, open: 0 },
      Saturday: { close: 10, open: 8 },
      Sunday: { close: 8, open: 8 },
      Thursday: { close: 8, open: 10 },
      Tuesday:
    { close: 6, open: 8 },
      Wednesday: { close: 6, open: 8 },
    });
  });
});
