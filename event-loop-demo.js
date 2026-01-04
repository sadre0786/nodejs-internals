console.log("Start");   //Runs immediately | Goes to call stack | Printed instantly

setTimeout(()=>{
    console.log("Timer Finished");      //This is slow task | Node js send it to background | Timer starts (2sec) Node.js does not wait
},2000)

console.log("End");   //Runs immediately | Printed before timer finished



/* || What this prooves ||

Node.js is single-threaded

Node.js is event-driven

Node.js is non-blocking

Node.js does not wait for slow tasks */
