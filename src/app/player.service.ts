import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Player } from './models/player';

@Injectable()
export class PlayerService {
  playerX = new Player('X');
  playerO = new Player('O');
  private player = new BehaviorSubject<Player>(this.playerX);
  turn = this.player.asObservable();
  public stopGame: EventEmitter<any> = new EventEmitter<any>();

  play(id) {
    this.player.value.moves.push(id);
    this.player.value.calculateAvgPlayTime();
    this.player.value.checkWin() ? this.playerWon() : this.switchTurns();
  }

  resetPlayerMoves() {
    this.playerX.moves = [];
    this.playerO.moves = [];
    this.switchTurns();
  }

  playerWon() {
    this.stopGame.emit(this.player.value.name);
    this.player.value.name === this.playerX.name ? this.playerO.lost++ : this.playerX.lost++;
  }

  switchTurns() {
    if (this.player.value.moves.length === 5) {
      this.playerX.tie ++;
      this.playerO.tie ++;
      return this.stopGame.emit('tie');
    }
    this.player.value.name === this.playerX.name ? this.player.next(this.playerO) : this.player.next(this.playerX);
    this.player.value.setTimeAssigned(new Date());
  }
}
