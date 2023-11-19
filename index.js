#!/usr/bin/env node

import fs from "fs";
import chalk from "chalk";

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

    if (stats.isFile()) {
      console.log(fileNames[index]);
    } else {
      console.log(chalk.bold.blue(fileNames[index]));
    }
  }
});
