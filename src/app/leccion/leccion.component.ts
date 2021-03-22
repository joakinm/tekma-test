import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemarioService } from '../temario.service';

@Component({
  selector: 'app-leccion',
  templateUrl: './leccion.component.html',
  styleUrls: ['./leccion.component.css']
})
export class LeccionComponent implements OnInit {
  public idLeccion: number;
  constructor(public rutaActiva: ActivatedRoute, private router: Router, private temarioService: TemarioService ) { }

  ngOnInit(): void {
    this.idLeccion = +this.rutaActiva.snapshot.paramMap.get('id');
  }

  leccionLeida() {
    this.temarioService.modificarLeccionLeida(this.idLeccion);
    const temarioSeleccionado = this.temarioService.temarioSeleccionado;
    alert(`Lección número ${this.idLeccion + 1} del temario ${temarioSeleccionado.nombre} leída`)
    this.router.navigate(['temario']);
  }
}