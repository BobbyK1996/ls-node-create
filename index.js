#!/usr/bin/env node

const fs = require("fs");

const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, fileNames) => {
  if (err) {
    console.log(err);
  }

  const statPromises = fileNames.map((fileName) => {
    return lstat(fileName);
  });

  const allStats = await Promise.all(statPromises);

  console.log(allStats);

  // for (let fileName of fileNames) {
  //   try {
  //     const stats = await lstat(fileName);
  //     console.log(fileName, stats.isFile());
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // }
});
