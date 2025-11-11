let person = {
    name: "Yusra Isse",
    age: 18,
    city:"Brisbane",
    sayHi: function(){
        console.log("Hi")
    }
}
 
person.sayHi()
person.age = 18
person.name = "Yusra Isse"
console.log(person["age"])

let vechicle = {
    brand: "Porsche",
    model: "Macan 4 Electric",
    year: 2024,
    color: "Purple",
    owner: person,
    stop: function () {
        console.log("The car has stopped")
    }
}

console.log(vechicle.stop())
console.log(person.age)
console.log(vechicle.owner.name)

let students = ["A", "B", "C", "D"]

let animal = new object ();
animal.type = "Dog";
animal.breed = "Golden Retriever";
console.log(animal)

let animal = {}
animal.type = "Dog";
animal.breed = "Golden Retriever";
console.log(animal)