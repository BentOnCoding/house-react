import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const heroes = [
  {
    id: "superman",
    secretIdentity: "Clark Kent",
    name: "Superman",
    heroId: "superman",
    nemesisId: 'doomfist',
    age: "unknown"
  },
  {
    id: "batman",
    secretIdentity: "Bruce Wayne",
    name: "Batman",
    heroId: "batman",
    nemesisId: "lex-luthor",
    age: 43
  }
 
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (hero) => {
  return replaceAll(hero.title, ' ', '-');
};

class HeroApi {
  static getAllHeroes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], heroes));
      }, delay);
    });
  }

  static saveHero(hero) {
    hero = Object.assign({}, hero); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minHeroTitleLength = 1;
        if (hero.title.length < minHeroTitleLength) {
          reject(`Title must be at least ${minHeroTitleLength} characters.`);
        }

        if (hero.id) {
          const existingHeroIndex = heroes.findIndex(a => a.id == hero.id);
          heroes.splice(existingHeroIndex, 1, hero);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          hero.id = generateId(hero);
          heroes.push(hero);
        }

        resolve(hero);
      }, delay);
    });
  }

  static deleteHero(heroId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfHeroToDelete = heroes.findIndex(hero => {
          hero.id == heroId;
        });
        heroes.splice(indexOfHeroToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default HeroApi;