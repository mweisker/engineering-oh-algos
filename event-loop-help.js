console.log("Start of the script (Call Stack)");

// Call Stack - Synchronous task
function synchronousTask() {
  console.log("Executing Synchronous Task (Call Stack)");
}

synchronousTask();

// Microtasks - Asynchronous tasks (higher priority)
console.log("Start of Microtasks (Microtasks)");

Promise.resolve()
  .then(() => {
    console.log("Microtask 1 (Microtasks)");
  })
  .then(() => {
    console.log("Microtask 2 (Microtasks)");
  });

console.log("End of Microtasks (Microtasks)");

// Macrotasks - Asynchronous tasks (lower priority)
console.log("Start of Macrotasks (Macrotasks)");

setTimeout(() => {
  console.log("Timeout Task (Macrotasks)");
}, 0);

console.log("End of Macrotasks (Macrotasks)");

console.log("End of the script (Call Stack)");


const wildCard = async () => {
  console.log(1)
  await Promise.resolve()
    .then(() => {
      console.log(2)
    })
  // await log2();
  // await log2()

  console.log(3)
}

function log2() {
  console.log(2)
}

wildCard()