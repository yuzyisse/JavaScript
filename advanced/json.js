const user = {name: "Yusra", age: 21};

// Convert object to JSON string
const jsonStr = JSON.stringify(user);
console.log(jsonStr);

// Convert JSON string to object
const obj = JSON.parse(jsonStr);
console.log(obj.name);

