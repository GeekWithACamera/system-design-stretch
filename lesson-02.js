"use strict";

// Lesson 2: Asynchronous JavaScript and the Event Loop.
// Standalone programs and observations go in this file as code and comments.

// ===== Provided program (task step 2): predict before you run =====
// Write your predicted output order as a comment BELOW, before running this
// file with node. Then run it, mark each line of your prediction right or
// wrong, and correct the wrong ones with one sentence each explaining why.

console.log("doors open");
setTimeout(() => console.log("encore"), 1000);
setTimeout(() => console.log("soundcheck"), 0);
console.log("main act");
setTimeout(() => console.log("intermission"), 500);
console.log("lights down");

// Your prediction:
// 1. doors open
// 2. main act
// 3. lights down
// 4. soundcheck
// 5. intermission
// 6. encore

// ===== Task: Step 3 =====
// Add a deliberately blocking loop to the stretch-records page behind a button,
// exactly as in this lesson. Observe the freeze, then remove it,
// and describe in a comment which part of the execution model was occupied
// and what could not happen while it was.

//* JavaScript runs page on a single thread, where everything happens synchronously in order,
//* and that loop occupied and blocked the thread completely while it was executing,
//* so nothing in the UI functions (page freezes) until this loop ends and releases the thread.

// ===== Provided program (task step 4): trace the call stack =====
// Trace this as a written call stack diagram in comments, listing every push
// and pop in order. Then cause an error inside the innermost function and
// confirm the stack trace in the console matches your diagram, innermost
// first. Keep it commented out while you work on step 2.

// function prepare(artist) {
//   return "Now playing " + format(artist);
// }
// function format(artist) {
//   return artist.name.toUpperCase();
// }
// console.log(prepare({ name: "Asake" }));

// 1. Push: prepare()
// 2. Push: format()
// 3. Pop: format()
// 4. Pop: prepare()
