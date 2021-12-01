import { promises } from "fs";

import sonarSweep from ".";

const [_, __, file] = process.argv;


promises
  .readFile(file, "utf8")
  .then((data) => sonarSweep(data))
  .then((increases) => {
    console.log(increases);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
