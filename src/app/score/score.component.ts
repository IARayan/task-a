import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PlayerService } from '../player.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {
  @Input()  player: Player;
  public showScores = false;

  constructor() {}

  toggleScores () {
    this.showScores = !this.showScores;
  }

}
