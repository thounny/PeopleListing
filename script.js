"use strict";

let people = [
  {
    id: 1,
    firstName: "Ezra",
    lastName: "Aiden",
    email: "e.aiden@basshall.com",
    ipAddress: "18.6.24.104",
  },
  {
    id: 2,
    firstName: "Ian",
    lastName: "Auston",
    email: "ian.auston@goldmansachs.com",
    ipAddress: "17.16.4.105",
  },
];

window.onload = function () {
  loadPeopleTable();
};

function loadPeopleTable() {
  const tableBody = document.getElementById("peopleTableBody");

  // Clear any existing rows
  tableBody.innerHTML = "";

  // Loop through each person in the people array and add a row
  for (let person of people) {
    let row = tableBody.insertRow();

    let cell1 = row.insertCell(0);
    cell1.textContent = person.id;

    let cell2 = row.insertCell(1);
    cell2.textContent = person.firstName;

    let cell3 = row.insertCell(2);
    cell3.textContent = person.lastName;

    let cell4 = row.insertCell(3);
    cell4.textContent = person.email;

    let cell5 = row.insertCell(4);
    cell5.textContent = person.ipAddress;
  }
}
