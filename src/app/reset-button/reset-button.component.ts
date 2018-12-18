import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.scss']
})
export class ResetButtonComponent implements OnInit {
  @Input() winner: string;
  message = '';
  constructor() {}

  ngOnInit() {
      if (this.winner === 'tie') {
        this.message = 'It\'s a Tie!';
      } else {
        this.message = `Player ${this.winner} won!`;
      }
    }
}
