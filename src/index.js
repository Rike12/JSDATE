//Challenge 1
let now = new Date();

let date = now.getDate();

console.log(now.getDate());

//Challenge 2
let milliseconds = now.getMilliseconds();

console.log(now.getMilliseconds());

//Challenge 3

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = now.getDay();
console.log(days[now.getDay()]);

//Chalenge 4
let year = now.getFullYear();
console.log(now.getFullYear());

//Chalenge 5
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];

console.log(months[now.getMonth()]);

//Chalenge 6
console.log(`Today is ${day}, ${month}, ${date}, ${year}`);

//Challenge 7
function formatDate(aDate) {
  let date = aDate.getDate();
  let year = aDate.getFullYear();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[aDate.getDay()];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let month = months[aDate.getMonth()];

  return `Today is ${day}, ${month}, ${date}, ${year}`;
}
console.log(formatDate(new Date()));
