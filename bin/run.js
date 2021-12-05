#! /usr/bin/env node

const { promises } = require("fs");

const [_, __, day] = process.argv;

if (!day) {
  console.log("usage: ./bin/run.js <day number>");
  console.log("This will run the script for the specified day");
  process.exit(1);
}

const directory = `day${day.padStart(2, "0")}`;
const { default: main } = require(`${__dirname}/../lib/${directory}/`);

promises
 .readFile(`${__dirname}/../src/${directory}/input.txt`, "utf8")
 .then((data) => main(data))
 .then((result) => {
   console.log(result);
   process.exit(0);
 })
 .catch((err) => {
   console.error(err);
   process.exit(1);
 });
