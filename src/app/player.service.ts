import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Player } from './models/player';

@Injectable()
export class PlayerService {
  playerX = new Player('X');
  playerO = new Player('O');
  private player = new BehaviorSubject<Player>(this.playerX);
  turn = this.player.asObservable();
  public stopGame: EventEmitter<boolean> = new EventEmitter<boolean>();

  play(id) {
    this.player.value.moves.push(id);
    this.player.value.checkWin() ? this.stopGame.emit(true) : this.switchTurns();
  }

  resetPlayerMoves() {
    this.playerX.moves = [];
    this.playerO.moves = [];
  }

  switchTurns() {
    if (this.player.value.moves.length === 5) {
      return this.stopGame.emit(true);
    }
    this.player.value.name === this.playerX.name ? this.player.next(this.playerO) : this.player.next(this.playerX);
  }
}
