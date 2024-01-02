const url = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const countries = await response.json();
    const languages = [];
    return countries.forEach((country) =>
      country.languages.forEach((language) => {
        if (!languages.includes(language.name)) {
          languages.push(language.name);
        }
        return console.log(languages);
      })
    );
  } catch (err) {
    console.error(err);
  }
};

const fetchCats = async () => {
  const response = await fetch(catsAPI);
  const cats = await response.json();
  return cats.every((cat) => console.log(cat));
};
fetchCats();

fetchData();
