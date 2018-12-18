export class Player {
  name = '';
  won = 0;
  lost = 0;
  tie = 0;
  avgPlayTime = 0;
  moves = [];
  winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  constructor(name: string = '') {
    this.name = name;
  }

  calculateAvgPlayTime() {
    this.avgPlayTime = 5;
  }

  checkWin() {
    let didWin = false;
    this.winningCombos.forEach(set => {
      if (set.every(x => this.moves.includes(x))) {
        this.won ++;
        didWin = true;
      }});
      return didWin;
  }

}
