function behaviorPromise(isWellBehaved) {
    return new Promise ((resolve, reject) => {
        // stmulate the waiting period (e.g., next week) with setTimeout
        setTimeout (() => {
            if (isWellBehaved){
                resolve ("You behaved well! Here's your new phone next week.")
            } else {
                reject("You did not behaved well, so no phone this time");
            }
        }, 1000);  // 1000 millisecond stimulating waiting time (e.g., nextweek)
    });
}

// consime the promise

// Assume the boy behaved well
behaviorPromise(true)
.then(message => {
    console.log("Mother's promise fulfiled:" + message);
})

.catch(error => {
    console.log ("Mother's promise failed:" + error);
})

.finally(() => {
    console.log("promise has been settled.");
})

// Async function to consume the promise using aasync/await 
async function checkPromise() {
    try{
        // Await the resoultion of the behaviourPromise
        const message = await behaviorPromise(true); 
        console.log("Mother's promise fulfilled" + message);
    } catch (error) {
        console.log("Mother's promise failed" + error);
    } finally {
        console.log("Promise has been settled.");
    }
}

checkPromise()