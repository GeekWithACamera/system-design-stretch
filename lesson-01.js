"use strict";

// Lesson 1: The Client and Server Model.
// Your standalone code and written observations for this lesson live here,
// as code and comments. The site work happens in the stretch-records folder.
//
// Step 4: how many requests did the single page load make? List three by name.
//* 12 requests were made. Three of them are:
//*  1. index.html
//*  2. style.css
//*  3. script.js

// Step 6: which files changed when you added the sixth artist, which did not,
// and why is that separation the point?
//* The files that changed were the artists.json file. The files that did not change were the index.html and script.js files. This separation is important because it shows that the data (artists.json) can be updated independently of the code (script.js) and webpage (index.html), allowing for easier maintenance and scalability of the application.
//
// Step 7: paste the console error the broken artists.json produced.
// index.html:79 Live reload enabled.
//! index.html:37 Uncaught (in promise) SyntaxError: Expected double-quoted property name in JSON at position 779 (line 37 column 3)

//
// Step 8: build one artist object, JSON.stringify() it, log the text,
// JSON.parse() it back, and log one property of the result.
//
const artist = {
  name: "John Doe",
  genre: "Rock"
};
console.log(JSON.stringify(artist));
const parsedArtist = JSON.parse(JSON.stringify(artist));
console.log(parsedArtist.name);
//
// STRETCH, step 9: describe your page as a system. Name the client, name the
// server, and state what the request asked for and what the response carried.

//* The client is the user's web browser, which sends a request to the server for the artists.json file. The server is the Live server serving the stretch-records web application, which responds with the JSON data containing the list of artists. The request asked for the artist data, and the response carried the JSON representation of that data, which was then used by the client to render artist cards on the webpage.
