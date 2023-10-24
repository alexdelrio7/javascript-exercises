const findTheOldest = function(people) {
        return people.reduce((oldest, person) => {
          const currentAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
          const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;
      
          return currentAge > oldestAge ? person : oldest;
        });
      }

      
      // Example usage:
      const people = [
        {
          name: "Carly",
          yearOfBirth: 1942,
          yearOfDeath: 1970,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ];
      

// Do not edit below this line
module.exports = findTheOldest;
