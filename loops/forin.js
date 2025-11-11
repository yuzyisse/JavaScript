let person = {
    name: "Yusra Isse",
    age: 18,
    city: "Brisbane"
}

for (const key in person) {
    console.log ("they key is" + key + "and the value is" + person[key])
}