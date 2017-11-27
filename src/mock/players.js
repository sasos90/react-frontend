const players = [];

const playerNames = [
  'Chris Johnson',
  'Michael Oliver',
  'Dwayne Patrick',
  'John Miller'
];
const numberOfPlayers = 4;

let rand = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

for (let i = 0; i < numberOfPlayers; i++) {
  players.push({
    id: i + 1,
    name: playerNames[i%4],
    age: rand(17, 40),
    height: rand(168, 215),
    weight: rand(65, 130),
    shirtNumber: rand(1, 100),
    picture: '/github.jpg',
    skills: {
      speed: rand(1, 20),
      technique: rand(1, 20),
      jump: rand(1, 20),
      experience: rand(1, 20),
      fatigue: rand(1, 20)
    }
  });
}


export default players;
/*
export const players = [
  {
    id: 123,
    name: 'Chris Johnson',
    age: 21,
    height: 183,
    weight: 90,
    shirtNumber: 10,
    picture: '/github.jpg',
    skills: {
      speed: 1,
      technique: 1,
      jump: 1,
      experience: 1,
      fatigue: 1
    }
  }, {
    id: 456,
    name: 'Michael Oliver',
    age: 22,
    height: 193,
    weight: 95,
    shirtNumber: 11,
    picture: '/github.jpg',
    skills: {
      speed: 2,
      technique: 2,
      jump: 2,
      experience: 2,
      fatigue: 2
    }
  }, {
    id: 789,
    name: 'Dwayne Patrick',
    age: 23,
    height: 205,
    weight: 120,
    shirtNumber: 12,
    picture: '/github.jpg',
    skills: {
      speed: 3,
      technique: 3,
      jump: 3,
      experience: 3,
      fatigue: 3
    }
  }, {
    id: 123456,
    name: 'John Miller',
    age: 24,
    height: 175,
    weight: 78,
    shirtNumber: 13,
    picture: '/github.jpg',
    skills: {
      speed: 4,
      technique: 4,
      jump: 4,
      experience: 4,
      fatigue: 4
    }
  }
];
*/
