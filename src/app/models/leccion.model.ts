export class Leccion {
    nombre: string;
    estaLeido: boolean;

    constructor(nombre: string, estaLeido: boolean) {
        this.nombre = nombre;
        this.estaLeido = estaLeido;
    }
}