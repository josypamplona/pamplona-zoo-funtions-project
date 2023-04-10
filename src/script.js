const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(verifyNumbers); // 30

/// / encontrando o primeiro nome com cinco letras

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => names.find((name) => name.length === 5);

console.log(findNameWithFiveLetters()); // Irene

/// /Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:const musicas = [
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const findMusic = musicas.find((musica) => musica.id === '31031685');

console.log(findMusic); // {id: '31031685', title: 'Partita in C moll BWV 997'}

/// Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. Caso contrário, deve ser false.

// Dica: use some.

/// //Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;
/// Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((person) => person.age >= minimumAge);

console.log(verifyAges(people, 18)); // false
console.log(verifyAges(people, 14)); // true

/// //////// gera email

const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));

/// ///
