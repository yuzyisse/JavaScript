// Create a Map with months as keys and sales as values
const monthlySales = new Map();

// Add data
monthlySales.set("January", 12000);
monthlySales.set("February", 15000);
monthlySales.set("March", 18000);
monthlySales.set("April", 20000);
monthlySales.set("May", 22000);
monthlySales.set("June", 21000);
monthlySales.set("July", 25000);
monthlySales.set("August", 23000);
monthlySales.set("September", 19000);
monthlySales.set("October", 24000);
monthlySales.set("November", 26000);
monthlySales.set("December", 30000);

// Display all months and sales
monthlySales.forEach((sales, month) => {
  console.log(`${month}: $${sales}`);
});

// Example: Get sales for a specific month
console.log("Sales in July:", monthlySales.get("July"));

// Calculate total sales
let totalSales = 0;
monthlySales.forEach(sales => totalSales += sales);
console.log("Total sales for the year:", totalSales);

let user = new Map();
user.set("name", "Yusra");
user.set("age", 21);
user.set(1, "Student");

console.log(user.get("name")); // "Yusra"
console.log(user.size); // 3
