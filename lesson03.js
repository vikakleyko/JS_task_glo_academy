const lang = prompt("select language (ru/en)");

if (lang === "ru") {
  console.log(
    "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
  );
}
if (lang === "en") {
  console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
}

switch (lang) {
  case "ru":
    console.log(
      "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
    );
    break;
  case "en":
    console.log(
      "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
    );
    break;
}

let array = [
  ["ru", "Понедельник"],
  ["ru", "вторник"],
  ["ru", "среда"],
  ["ru", "четверг"],
  ["ru", "пятница"],
  ["ru", "суббота"],
  ["ru", "воскресенье"],
  ["en", "Monday"],
  ["en", "Tuesday"],
  ["en", "Wednesday"],
  ["en", "Thursday"],
  ["en", "Friday"],
  ["en", "Saturday"],
  ["en", "Sunday"],
];

let newArray = array
  .filter(item => {
    "use strict";
    return item[0] === lang;
  })
  .map(item => {
    "use strict";
    return item[1];
  });

console.log(newArray);

// task 2
const namePerson = prompt("enter name: ");

var result = namePerson === "Артем" ? "директор" : namePerson === "Максим" ? "преподаватель" : "студент";

console.log(result);
