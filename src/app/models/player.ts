export class Player {
  name = '';
  won = 0;
  lost = 0;
  tie = 0;
  avgPlayTime = 0;
  
  constructor(name) {
    this.name = name;
  }

  calculateAvgPlayTime() {
    this.avgPlayTime = 5;
  }

}