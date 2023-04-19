const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testa se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('testa se retorna todos os dias, caso não passe nada para a função', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('testa se chamar a função como segunda-feira ela retorna, como fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('testa se chamado certo dia, ele retorna um Array com zoologico aberto, se não retorna fechado', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Saturday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Friday", "09:00-AM')).toBe('The zoo is closed');
  });
  it('testa se dar erro se passar um dia que não existe', () => {
    expect(() => getOpeningHours('Segunda', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('testa se dar erro se passar um horario que não existe', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Monday', '09:75-AM')).toThrow('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Monday', 'DD:00-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Monday', '09:DD-AM')).toThrow('The minutes should represent a number');
  });
  const abbreviation = /^The abbreviation must be 'AM' or 'PM'$/;
  it('testa se dar erro se passar uma abreviação que não existe', () => {
    expect(() => getOpeningHours('Monday', '11:00-CM')).toThrow(abbreviation);
    expect(() => getOpeningHours('Monday', '09:00-BM')).toThrow(abbreviation);
  });
});
