const data = require('../data/zoo_data');

const horaToda = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
};

const getSchedule = (scheduleTarget) => {
  const animais = data.species.find((obj) => obj.name === scheduleTarget);
  if (animais) {
    return animais.availability;
  } if (scheduleTarget) {
    return { [scheduleTarget]: horaToda[scheduleTarget] };
  } return horaToda;
};

console.log(getSchedule(''));
module.exports = getSchedule;
