import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as data from '../assets/temario.json';
import { Temario } from './models/temario.model';

@Injectable({
  providedIn: 'root'
})
export class TemarioService {
  public temarios: Array<Temario>;
  public temarioSeleccionado: Temario;
  public temariosCambio = new Subject<Array<Temario>>();

  constructor() {
    this.temarios = data.Temario;
    this.obtenerTemarios();

  }

  public obtenerTemarios() {
    return this.temarios;
  }

  public obtenerTemarioXId(idTemario: number) {
    const temarioSeleccionado = this.temarios[idTemario];
    this.temarioSeleccionado = temarioSeleccionado;
    return temarioSeleccionado;  
  }

  public modificarLeccionLeida(idLeccion: number) {
    const temarioIndex = this.temarios.findIndex(t => {return t.nombre == this.temarioSeleccionado.nombre});
    this.temarios[temarioIndex].lecciones[idLeccion].estaLeido = !this.temarioSeleccionado.lecciones[idLeccion].estaLeido;
    this.temariosCambio.next(this.temarios.slice());
  }

  public SeleccionarTemario(idTemario: number) {
    this.temarioSeleccionado = this.temarioSeleccionado[idTemario];
  }
}
