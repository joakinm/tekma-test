import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Leccion } from 'src/app/models/leccion.model';
import * as data from '../../../assets/temario.json';

@Component({
  selector: 'app-temario-leccion',
  templateUrl: './temario-leccion.component.html',
  styleUrls: ['./temario-leccion.component.css']
})
export class TemarioLeccionComponent implements OnInit {
  public id: number;
  public lecciones = new Array<Leccion>();
  constructor( public rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.rutaActiva.snapshot.paramMap.get('id');
    this.lecciones = data.Temario[this.id].lecciones;
  }

}
