// Exercises: Level 2
/* Declare a function called categorizeCountries which returns an array of countries which have
some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan'))*/

function categorizeCountries(countries, pattern) {
  return countries.filter((country) => country.name.includes(pattern));
}

console.log(categorizeCountries(countries, "land"));

// Given an array Create a function which return an array of objects,
// which is the letter and the number of times the letter use to start with a name of a country.

let result = {};
const max = {};
countries.map((country) => {
  const firstChar = country.name.charAt(0);
  if (result.hasOwnProperty(firstChar)) {
    result[firstChar] = result[firstChar] + 1;
  } else {
    result[firstChar] = 1;
  }
  return result;
});

console.log(result);

function getFirstTenCountries() {
  return console.log(countries.slice(0, 10));
}

getFirstTenCountries();

function getLastTenCountries() {
  countries.map((country) => {
    const firstChar = country.name.charAt(0);
    if (result.hasOwnProperty(firstChar)) {
      result[firstChar] = result[firstChar] + 1;
    } else {
      result[firstChar] = 1;
    }
    return Math.max(...Object.values(result));
  });
}

const getMaximum = () => {
  countries.map((country) => {
    const firstChar = country.name.charAt(0);
    if (result.hasOwnProperty(firstChar)) {
      result[firstChar] = result[firstChar] + 1;
    } else {
      result[firstChar] = 1;
    }
  });
  return Math.max(...Object.values(result));
};

console.log(getMaximum());

const mostSpokenLanguages = (n) => {
  const languagesMap = [];
  countries.forEach((country) => {
    country.languages.forEach((language) => {
      let entry = languagesMap.find((obj) => obj.country === language);
      if (entry) {
        entry.count += 1;
      } else {
        languagesMap.push({ country: language, count: 1 });
      }
    });
  });
  return languagesMap.sort((a, b) => b.count - a.count).slice(0, n);
};

console.log(mostSpokenLanguages(100));
const numbers = [12, 2, 34, 4, 57, 8, 1, 12, 13, 14, 15];
numbers.sort((a, b) => b - a);
console.log(numbers);
