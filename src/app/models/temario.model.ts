import { Leccion } from "./leccion.model";

export class Temario {
    nombre: string;
    lecciones: Array<Leccion>;

    constructor( nombre: string, lecciones: Array<{nombre: string, estaLeido: boolean}> ) {
        this.nombre = nombre;
        this.lecciones.push(...lecciones);
    }
}