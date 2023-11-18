#!/usr/bin/env node

const fs = require("fs");

fs.readdir(process.cwd(), (err, fileNames) => {
  // err === error Object, which means something went wrong
  // OR
  // err === null, which means everything is ok

  if (err) {
    throw new Error(err);
  }

  for (let filename of fileNames) {
    fs.lstat(filename, (err, stats) => {
      if (err) {
        throw new Error(err);
      }

      console.log(filename, stats.isFile());
    });
  }
});
