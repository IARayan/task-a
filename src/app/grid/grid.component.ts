import { Component, EventEmitter, Output, Input } from '@angular/core';

import { Board } from '../models/board';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent {
  @Output() selectedCell = new EventEmitter();
  @Input() board: Board;

  selectCell(cell) {
    if (cell.player === '') {
      this.selectedCell.emit(cell);
    }
  }
}
