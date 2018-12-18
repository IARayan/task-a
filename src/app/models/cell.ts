export class Cell {
  id: number;
  player = '';
  constructor(id) {
    this.id = id;
  }

  selectCell(player) {
    this.player = player;
  }
}
