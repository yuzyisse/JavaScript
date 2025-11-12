function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  console.log(total);
}

sum(2, 4);          // 6
sum(1, 2, 3, 4, 5); // 15