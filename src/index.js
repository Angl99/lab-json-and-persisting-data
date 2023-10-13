const { faker } = require("@faker-js/faker");
const fs = require("fs");
const { writeFileSync } = require("node:fs");
const { nanoid } = require("nanoid");
const users = require("../data/users.json");

// const users = require("../data/users.json");

// id: `${nanoid(4)}`,

// hackerName: faker.hacker.adjective() + faker.science.chemicalElement() + ${faker.animal.type(),

// messageTitle: `Help with ${faker.hacker.adjective()} ${faker.hacker.abbreviation()} on ${faker.git.branch()}`,

// messageContent: `${faker.lorem.paragraph()}`,

// isResolved: faker.datatype.boolean(),

// numberOfUpvotes: Number((Math.random() * 5).toFixed(2))


function addUser(data) {
  let newUser = data;

  users.push(data);
  return newUser;
}

function generateUser() {
    let newUser = addUser({id: nanoid(4), hackerName: faker.hacker.adjective() + " " + faker.science.chemicalElement().name + " " + faker.animal.type()}); 

    console.log(newUser);
}

generateUser();

function getUsers() {
  return users;
}

getUsers();



function addMessage(data) {
    let newMsg = data;

    message.push(data);
    return message;
}

function generateMessage() {
    
}



function getSpecificUser(index) {
  return users[index];
}

// Updating a supermarket
function updateUsers(index, data) {
  supermarkets[index] = {
    ...users[index],
    ...data,
  };

  return users[index];
}

function deleteUser(index) {
  users.splice(index, 1);
}

function saveUsers() {
  const stringifiedData = JSON.stringify(users, null, 2);
  fs.writeFileSync("./data/users.json", stringifiedData);
}

saveUsers();

module.exports = {
  addUser,
  getUsers,
  getSpecificUser,
  updateUsers,
  deleteUser,
  saveUsers
};
