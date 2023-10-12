const { faker } = require("@faker-js/faker");
const fs = require("fs");
const { writeFileSync } = require("node:fs");
const { nanoid } = require("nanoid");


function genUser() {
    const user = {
        userId: `${nanoid(4)}`,
        hackerName:`${faker.hacker.adjective()} ${faker.science.chemicalElement()} ${faker.animal.type()}`,
    }
    console.log(user);
    return user;
}

genUser();

function genMessage() {
    const message = {
        messageId: `${nanoid(4)}`,
        messageTitle: `Help with ${faker.hacker.adjective()} ${faker.hacker.abbreviation()} on ${faker.git.branch()}`,

        messageContent: `${faker.lorem.paragraph()}`,

        isResolved: `${faker.datatype.boolean()}`,

        numberOfUpvotes: `${Math.random().toFixed(0)}`
    }
    console.log(message);
    return message;
}

genMessage();

function getResponseById(messageId) {
    const messageResponse = {
        messageResponse: `${faker.hacker.phrase()}`,
    }

    console.log(messageResponse);
    return messageResponse;
}

function getVotesByMessageId() {
    
}

function getUserById(userId) {
    console.log(users.find((user) => user.userId === id));
    return users.find((user) => user.userId === id);
}

// function updateUserById(id, data) {
    
// }

function updateMessageById(messageId, message) {
    const index = message.findIndex((message) => message.id === messageId);
    message.splice(index, 1);
    console.log(`Message with id ${messageId} was updated.`);
}

function deleteMessageById(messageId, message) {
    const index = message.findIndex((message) => message.messageId === id);
    message.splice(index, 1);
    console.log(`Message with id ${messageId} was deleted.`);
}

function deleteUserById(userId) {
    const index = user.findIndex((user) => user.userId === id);
    user.splice(index, 1);
    console.log(`User with id ${userId} was deleted.`); 
}



function saveUsers() {
    const userData = JSON.stringify(user, null, 2);
    fs.writeFileSync("./data/hackerUsers.json", userData)
}

saveUsers();

function saveMessages() {
    const messageData = JSON.stringify(user, null, 2);
    fs.writeFileSync("./data/hackerMessages.json", messageData)
}

saveMessages();