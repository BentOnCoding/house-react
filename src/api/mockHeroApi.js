import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const heroes = [
  {
    id: "superman",
    name: "Superman",
    heroId: "superman",
    nemesisId: 'doomfist',
    age: "unknown"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
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
        const minCourseTitleLength = 1;
        if (hero.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (hero.id) {
          const existingCourseIndex = heroes.findIndex(a => a.id == hero.id);
          heroes.splice(existingCourseIndex, 1, hero);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          hero.id = generateId(hero);
          hero.watchHref = `http://www.pluralsight.com/courses/${hero.id}`;
          heroes.push(hero);
        }

        resolve(hero);
      }, delay);
    });
  }

  static deleteHero(heroId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = heroes.findIndex(course => {
          course.id == heroId;
        });
        heroes.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default HeroApi;