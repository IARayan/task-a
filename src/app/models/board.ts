import { Cell } from './cell';

export class Board {
  firstRow: Array<Cell> = [];
  secondRow: Array<Cell> = [];
  thirdRow: Array<Cell> = [];

  constructor() {
    this.resetCells();
  }

  resetCells() {
    this.firstRow = Array.from({length: 3}, (v, k) => new Cell(k + 1));
    this.secondRow = Array.from({length: 3}, (v, k) => new Cell(k + 4));
    this.thirdRow = Array.from({length: 3}, (v, k) => new Cell(k + 7));
  }
}
