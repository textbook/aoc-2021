# Advent of Code 2021

Implementations for the 2021 [Advent of Code][1].

## Requirements

Written for Node 16.

_(It would probably work on earlier versions if you tweaked the `tsconfig.json` per [the docs][5].)_

## Setup

- Clone this repository to your local machine
- Use `npm install` to install the dependencies

## Scripts

- `build`: compile [TypeScript][4] in `src/` to JavaScript in `lib/`
- `day`: build all code then run the exercise for a specified day (e.g. `npm run day 1`)
- `lint`: check the code style with ESLint
- `test`: run the [Mocha][2]/[Chai][3] tests

  [1]: https://adventofcode.com/
  [2]: https://mochajs.org/
  [3]: https://www.chaijs.com/
  [4]: https://www.typescriptlang.org/
  [5]: https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping
