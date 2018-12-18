import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PlayerService } from '../player.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {
  subscription: Subscription;
  player: string;
  constructor(private playerService: PlayerService) {
    this.subscription = this.playerService.turn.subscribe(turn => this.player = turn.name)
  }

  selectCell(cell) {
    cell.selectCell(this.player)
    this.playerService.play(cell.id)
    console.log(cell)
  }

}
