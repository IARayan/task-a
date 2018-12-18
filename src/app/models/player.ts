export class Player {
  name = '';
  won = 0;
  lost = 0;
  tie = 0;
  avgPlayTime = null;
  moves = [];
  timeConsumed = 0;
  timeAssigned;
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
    this.setTimeAssigned(new Date());
  }

  setTimeAssigned (timeAssigned) {
    this.timeAssigned = timeAssigned.getTime();
  }

  calculateAvgPlayTime() {
    const timePlayed = new Date().getTime();
    this.timeConsumed += ((timePlayed - this.timeAssigned) / 1000);
    this.avgPlayTime = (this.timeConsumed / this.moves.length).toFixed(1);
    this.timeAssigned = null;
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
