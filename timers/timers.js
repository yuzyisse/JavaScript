function sayMyName(name){
    console.log("Hello" + "Yusra")
}

let timer = setInterval(sayMyName,5000)

setTimeout(function () {
    clearInterval(timer)
}, 5000)