#!/usr/bin/env node

const fs = require("fs");

const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, fileNames) => {
  if (err) {
    console.log(err);
  }

  for (let fileName of fileNames) {
    try {
      const stats = await lstat(fileName);
      console.log(fileName, stats.isFile());
    } catch (err) {
      throw new Error(err);
    }
  }
});
