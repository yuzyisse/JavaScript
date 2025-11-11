// compile time errors
// run time errors

// IDE Integrated Development Enviroment
    // 1. Visual studio Code
    // 2. IntelliJ IDEA
    // 3. Sublime Text
    // 4. Atom
    // 5. Eclipse
    // 6. NetBeans
    // 6. PyCharm
    // 7. Andriod Studio
    // 8. WebStorm

try {
    // open database connection
    let firstName
    console.log(firstName.topUpperCase())
    console.log("hello")
    console.log("hello2")
    let dbError = new ErrorEvent("Could not connecr to the database")
    throw dbError
} catch (error) {
    console.log("error.message")
} finally {
    console,log("This will run regardless of the error")
    // close the database connection
}

// excuting