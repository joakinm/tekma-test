import { Pipe, PipeTransform } from '@angular/core';
import { Leccion } from './models/leccion.model';

@Pipe({
  name: 'leccionesVistas'
})
export class LeccionesVistasPipe implements PipeTransform {

  transform(value: Array<Leccion>, ...args: unknown[]): unknown {
    let cantidadLeidas = 0;
    value.forEach(l => {
      if (l.estaLeido) {
        cantidadLeidas ++
      }
    });
    return cantidadLeidas;
  }

}
