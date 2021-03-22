import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Leccion } from 'src/app/models/leccion.model';
import { Temario } from 'src/app/models/temario.model';
import { TemarioService } from 'src/app/temario.service';

@Component({
  selector: 'app-temario-leccion',
  templateUrl: './temario-leccion.component.html',
  styleUrls: ['./temario-leccion.component.css']
})
export class TemarioLeccionComponent implements OnInit {
  public lecciones = new Array<Leccion>();
  public temarioElegido: Temario;
  constructor( public rutaActiva: ActivatedRoute, private router: Router, private temarioService: TemarioService) { }

  ngOnInit(): void {
    const id = +this.rutaActiva.snapshot.paramMap.get('id');
    this.temarioElegido = this.temarioService.obtenerTemarioXId(id);
    this.lecciones = this.temarioElegido.lecciones;
  }

  public volver() {
    this.router.navigate(['/temario']);
  }

  public irALeccion(id: number) {
    this.router.navigate(['/leccion/' + id]);
  }
}
