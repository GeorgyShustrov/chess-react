import { Cell } from "./Cell";
import { Colors } from "./Colors";
export class Board {
  cells: Cell[][] = [];
  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(
            new Cell({
              board: this,
              x: j,
              y: i,
              color: Colors.BLACK,
              figure: null,
            })
          ); //BLACK
        } else {
          row.push(
            new Cell({
              board: this,
              x: j,
              y: i,
              color: Colors.WHITE,
              figure: null,
            })
          ); //WHITE
        }
      }
      this.cells.push(row);
    }
  }
}
