#! /usr/bin/env node

const { readFile } = require("fs").promises;
const { join } = require("path");

const [, , day] = process.argv;

if (!day) {
  console.log("usage: ./bin/run.js <day number>");
  console.log("This will run the script for the specified day");
  process.exit(1);
}

const directory = `day${day.padStart(2, "0")}`;
const { default: main } = require(join(__dirname, "..", "lib", directory));

readFile(join(__dirname, "..", "src", directory, "input.txt"), "utf8")
  .then((data) => main(data))
  .then((result) => {
    console.log(result);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
