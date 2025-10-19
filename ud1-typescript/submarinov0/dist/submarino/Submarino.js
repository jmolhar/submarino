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
    init() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }
}
exports.Submarino = Submarino;
//# sourceMappingURL=Submarino.js.map