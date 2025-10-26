"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablero = void 0;
const Submarino_1 = require("../submarino/Submarino");
class Tablero {
    mapa;
    submarino;
    constructor() {
        this.submarino = new Submarino_1.Submarino();
        this.mapa = [];
    }
    init(config) {
        this.mapa = Array.from({ length: config.size }, () => Array.from({ length: config.size }, () => 0));
        this.submarino.init(config.size);
        console.log(this.mapa);
        while (this.disparar("1,2") != true) {
            this.submarino.mover();
            console.log("moviendose");
        }
        console.log("ganaste");
    }
    disparar(disparo) {
        const coordenadas = disparo.split(",");
        const x = Number.parseInt(coordenadas[0]);
        const y = Number.parseInt(coordenadas[1]);
        return this.submarino.checkCoords(x, y);
    }
}
exports.Tablero = Tablero;
//# sourceMappingURL=Tablero.js.map