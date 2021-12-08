export default function process(draw: number[], boards: BingoBoard[]): number {
  for (const value of draw) {
    boards.forEach((board) => board.mark(value));
    if (boards.length === 1 && boards[0].hasWon()) {
      return value * [...boards[0].getUnmarked()].reduce((curr, next) => curr + next, 0);
    }
    boards = boards.filter((board) => !board.hasWon());
  }
  throw new Error("no board ever won");
}

export class BingoBoard {
  private unmarked: Set<number>;

  constructor(protected grid: number[][]) {
    this.unmarked = new Set(grid.flat());
  }

  equals(other: unknown): boolean {
    return other instanceof BingoBoard
      && other.grid.length === this.grid.length
      && other.grid.every((row, x) => row.length === this.grid[x].length && row.every((value, y) => value === this.grid[x][y]));
  }

  getUnmarked(): Set<number> {
    return this.unmarked;
  }

  hasWon(): boolean {
    return this.anyRowWon() || this.anyColumnWon();
  }

  mark(value: number): void {
    this.unmarked.delete(value);
  }

  toString(): string {
    return this.grid.map((row) => row.map((value) => `${value}`.padStart(2, " ")).join(" ")).join("\n");
  }

  private anyColumnWon(): boolean {
    return [...Array(this.grid[0].length)]
      .map((_, index) => index)
      .some((columnIndex) => this.grid.every((row) => !this.unmarked.has(row[columnIndex])));
  }

  private anyRowWon(): boolean {
    return this.grid
      .some((row) => row.every((value) => !this.unmarked.has(value)));
  }
}
