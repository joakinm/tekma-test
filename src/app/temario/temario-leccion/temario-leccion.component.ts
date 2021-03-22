import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor( public rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = +this.rutaActiva.snapshot.paramMap.get('id');
    this.lecciones = data.Temario[this.id].lecciones;
  }

  public volver() {
    this.router.navigate(['/temario']);
  }

  public irALeccion(id: number) {
    this.router.navigate(['/leccion/' + id]);
  }
}
