"use strict";

// 1

// let user = localStorage.getItem("userData");
// if (user) {
//     console.log(JSON.parse(user));
// } else {
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then((result) => {
//     localStorage.setItem("userData", JSON.stringify(result));
//     })
//     .catch((error) => console.error(error));
// }

// 2

// function isValidDateFormat(str) {
//     let userDate = /^\d{4}\/\d{2}\/\d{2}\s\d{2}:\d{2}$/;
//     return userDate.test(str);
// }
// console.log(isValidDateFormat("2002/04/11 14:23"));
// console.log(isValidDateFormat("16.11.2006 23:45"));

// 3

function isAfter(firstDate, secondDate) {
    return firstDate > secondDate;
}

console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); // true
console.log(isAfter(1648636135000, 1648549735000)); // true
console.log(isAfter(1648549735000, 1648636135000)); // false