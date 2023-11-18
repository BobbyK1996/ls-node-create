#!/usr/bin/env node

const fs = require("fs");

fs.readdir(process.cwd(), (err, fileNames) => {
  // err === error Object, which means something went wrong
  // OR
  // err === null, which means everything is ok

  if (err) {
    // error handling code here
    throw new Error(err);
  }

  console.log(fileNames);
});
