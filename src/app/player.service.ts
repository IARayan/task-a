import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Player } from './models/player';

@Injectable()
export class PlayerService {
  playerX = new Player('X');
  playerO = new Player('O');
  private player = new BehaviorSubject<Player>(this.playerX);
  turn = this.player.asObservable();

  play(id) {
    this.player.value.moves.push(id);
    this.switchTurns();
  }

  switchTurns() {
    this.player.value.name === this.playerX.name ? this.player.next(this.playerO) : this.player.next(this.playerX);
  }
}
