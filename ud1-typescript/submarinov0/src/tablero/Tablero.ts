import { ConfigSubmarino } from "../config/config";
import { Submarino } from "../submarino/Submarino";

class Tablero {
  private mapa: number[][];
  private submarino: Submarino;

  constructor() {
    this.submarino = new Submarino();
    this.mapa = [];
  }

  public init(config: ConfigSubmarino) {
    this.mapa = Array.from({ length: config.size }, () =>
      Array.from({ length: config.size }, () => 0)
    );
    this.submarino.init(config.size);
    console.log(this.mapa);
    while (this.disparar("1,2") != true) {
      this.submarino.mover();
      console.log("moviendose");
    }
    console.log("ganaste");
  }

  public disparar(disparo: String): boolean {
    const coordenadas: string[] = disparo.split(",");
    const x: number = Number.parseInt(coordenadas[0] as string);
    const y: number = Number.parseInt(coordenadas[1] as string);

    return this.submarino.checkCoords(x, y);
  }
}

export { Tablero };
