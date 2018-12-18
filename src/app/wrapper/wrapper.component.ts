import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PlayerService } from '../player.service';
import { Board } from '../models/board';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {
  subscription: Subscription;
  player: any;
  board = new Board();
  showResetButton = false;
  constructor(private playerService: PlayerService) {
    this.setPlayer();
    this.subscription = this.playerService.stopGame.subscribe(stop =>
    stop === true ? this.stopGame() : this.setPlayer());
  }

  stopGame() {
    // Prompt user to start a new game and show winner.
    this.showResetButton = true;
  }

  resetGame() {
    this.board = new Board();
    this.playerService.resetPlayerMoves();
    this.showResetButton = false;
  }

  setPlayer() {
    this.playerService.turn.subscribe(turn => this.player = turn);
  }

  selectCell(cell) {
    cell.selectCell(this.player.name);
    this.playerService.play(cell.id);
  }

}
