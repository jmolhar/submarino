import { Movimientos } from "../config/config";

class Submarino {
  private x: number;
  private y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  public init(size: number): void {
    this.x = Math.floor(Math.random() * size);
    this.y = Math.floor(Math.random() * size);
  }

  public checkCoords(x: number, y: number): boolean {
    return this.x === x && this.y === y;
  }

  public mover() {
    const movimientos: Movimientos[] = [
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 },
    ];
    const movimientosPosibles = movimientos.filter((movimientos) => {
      const nuevaX = this.x + movimientos.x;
      const nuevaY = this.y + movimientos.y;
      return nuevaX < 5 && nuevaX >= 0 && nuevaY < 5 && nuevaY >= 0;
    });
    const movimiento =
      movimientosPosibles[
        Math.floor(Math.random() * movimientosPosibles.length)
      ];
    this.x += movimiento!.x;
    this.y += movimiento!.y;
  }
}

export { Submarino };
