import { Component, OnInit } from '@angular/core';
import { Board } from '../models/board';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent {
  board = new Board();

  selectCell(cell) {
    cell.selectCell('O');
    console.log(this.board);
  }
}
