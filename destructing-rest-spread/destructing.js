// objects
let person = {
    firstNmae: "Yusra",
    age: 18
}

console.log(person.firstName);
console.log(person["age"]);
let {firstName , age} = person
console.log(firstName,age);

// Arrays
let listOfStudents = ["Yusra", "Jana", "Hanna", "Menna"]

console.log(listOfStudents[0], listOfStudents[1]);

let [firstPosition, secondPosition] = listOfStudents

console.log(firstPosition, secondPosition);