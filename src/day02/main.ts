import { promises } from "fs";

import main from ".";

const [_, __, file] = process.argv;


promises
  .readFile(file, "utf8")
  .then((data) => main(data))
  .then((result) => {
    console.log(result);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
