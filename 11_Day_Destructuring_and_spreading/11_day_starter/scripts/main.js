const constants = [2.72, 3.14, 9.81, 37, 100];
const countries1 = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
const [fin, est, sw, den, nor] = countries1;
const { width, height, area, perimeter } = rectangle;

const [Brook, Alex, David, John, Sara, Martha, Thomas] = users;
const lessThanTwo = users.filter(
  ({ scores, skills, age } = user) => skills.length < 2
);
for (const { name, capital, population } of countries) {
  console.log(name, capital, population);
}
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(array) {
  return array.map(([name, skills, scores]) => {
    return { name, skills, scores };
  });
}

console.log(convertArrayToObject(students));
