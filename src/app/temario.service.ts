import { Injectable } from '@angular/core';
import * as data from '../assets/temario.json';
import { Temario } from './models/temario.model';

@Injectable({
  providedIn: 'root'
})
export class TemarioService {
  public temarios: Array<Temario>;
  public temarioSeleccionado: Temario;

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
    this.temarioSeleccionado.lecciones[idLeccion].estaLeido === !this.temarioSeleccionado.lecciones[idLeccion].estaLeido;
  }

  public SeleccionarTemario(idTemario: number) {
    this.temarioSeleccionado = this.temarioSeleccionado[idTemario];
  }
}
