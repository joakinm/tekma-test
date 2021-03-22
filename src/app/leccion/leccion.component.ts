import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-leccion',
  templateUrl: './leccion.component.html',
  styleUrls: ['./leccion.component.css']
})
export class LeccionComponent implements OnInit {
  public id: number;
  constructor(public rutaActiva: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = +this.rutaActiva.snapshot.paramMap.get('id');
  }

}
