//Blocks until first line is executed -> Synchronous
console.log(1)
console.log(2)
console.log(3)

// JS is single thread programming

//Async behaviour using webapis
//setTimeout -> to create delay
console.log(1)
setTimeout(function test(){
    console.log(2)
},2000)
console.log(3)

//setInterval -> timer function
console.log("setInterval -> timer function")
console.log(1)
setInterval(function test(){
    console.log(2)
},2000)
console.log(3)