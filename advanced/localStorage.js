// Save data
localStorage.setItem("username", "Yusra");

// Get data
let username = localStorage.getItem("username");
console.log(username);

// Remove data
localStorage.removeItem("username");

// Store array/object
const users = [{name: "Ali"}, {name: "Maya"}];
localStorage.setItem("users", JSON.stringify(users));

// Retrieve
const storedUsers = JSON.parse(localStorage.getItem("users"));
console.log(storedUsers);
