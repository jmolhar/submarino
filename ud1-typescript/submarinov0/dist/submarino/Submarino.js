"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submarino = void 0;
class Submarino {
    x;
    y;
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    init(size) {
        this.x = Math.floor(Math.random() * size);
        this.y = Math.floor(Math.random() * size);
    }
    checkCoords(x, y) {
        return this.x === x && this.y === y;
    }
    mover() {
        const movimientos = [
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
        const movimiento = movimientosPosibles[Math.floor(Math.random() * movimientosPosibles.length)];
        this.x += movimiento.x;
        this.y += movimiento.y;
    }
}
exports.Submarino = Submarino;
//# sourceMappingURL=Submarino.js.map