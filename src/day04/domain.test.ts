import { expect } from "chai";

import { BingoBoard } from "./domain";

describe("Giant Squid domain", () => {
  describe("BingoBoard", () => {
    it("exposes the unmarked numbers", () => {
      const board = new BingoBoard([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      expect(board.getUnmarked()).to.deep.equal(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    });

    it("allows numbers to be marked", () => {
      const board = new BingoBoard([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      board.mark(3);
      expect(board.getUnmarked()).to.deep.equal(new Set([1, 2, 4, 5, 6, 7, 8, 9]));
    });

    it("exposes completion for a row", () => {
      const board = new BingoBoard([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      expect(board.hasWon()).to.be.false;
      board.mark(3);
      expect(board.hasWon()).to.be.false;
      board.mark(1);
      expect(board.hasWon()).to.be.false;
      board.mark(2);
      expect(board.hasWon()).to.be.true;
    });

    it("exposes completion for a column", () => {
      const board = new BingoBoard([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
      expect(board.hasWon()).to.be.false;
      board.mark(2);
      expect(board.hasWon()).to.be.false;
      board.mark(5);
      expect(board.hasWon()).to.be.false;
      board.mark(8);
      expect(board.hasWon()).to.be.true;
    });

    it("exposes a string format", () => {
      const board = new BingoBoard([[1, 2], [34, 5]]);
      expect(`${board}`).to.equal(" 1  2\n34  5");
    });

    it("exposes equality", () => {
      const board1 = new BingoBoard([[1, 2], [3, 4]]);
      const board2 = new BingoBoard([[1, 2], [3, 4]]);
      const board3 = new BingoBoard([[1, 3], [2, 4]]);
      expect(board1.equals(board2)).to.be.true;
      expect(board1.equals(board3)).to.be.false;
      expect(board1.equals(undefined)).to.be.false;
    });
  });
});
