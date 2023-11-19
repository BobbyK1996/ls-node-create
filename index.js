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

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    console.log(fileNames[index], stats.isFile());
  }
});
