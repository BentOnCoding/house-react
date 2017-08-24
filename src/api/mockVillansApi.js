import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const villains = [
  {
    id: 'doomfist',
    firstName: 'Doom',
    lastName: 'Fist'
  },
  {
    id: 'thanos',
    firstName: 'Thanos',
    lastName: 'n/a'
  },
  {
    id: 'lex-luthor',
    firstName: 'Lex',
    lastName: 'Luther'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (villain) => {
  return villain.firstName.toLowerCase() + '-' + villain.lastName.toLowerCase();
};

class VillainApi {
  static getAllVillians() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], villains));
      }, delay);
    });
  }

  static saveVillain(villain) {
    villain = Object.assign({}, villain); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minNameLength = 3;
        if (villain.firstName.length < minNameLength) {
          reject(`First Name must be at least ${minNameLength} characters.`);
        }

        if (villain.lastName.length < minNameLength) {
          reject(`Last Name must be at least ${minNameLength} characters.`);
        }

        if (villain.id) {
          const existingVillainIndex = villains.findIndex(a => a.id == villain.id);
          villains.splice(existingVillainIndex, 1, villain);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new villain in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          villain.id = generateId(villain);
          villains.push(villain);
        }

        resolve(villain);
      }, delay);
    });
  }

  static deleteVillain(villainId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfVillainToDelete = villains.findIndex(villain => {
          villain.id == villainId;
        });
        villains.splice(indexOfVillainToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default VillainApi;