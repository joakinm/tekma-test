import { Component, OnInit } from '@angular/core';
import { Temario } from '../models/temario.model';
import { Router } from '@angular/router';
import { TemarioService } from '../temario.service';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrls: ['./temario.component.css']
})
export class TemarioComponent implements OnInit {
  public temario: Array<Temario>;

  constructor(private router: Router, private temarioService: TemarioService) {
    this.temario = this.temarioService.obtenerTemarios();
   }

  ngOnInit(): void {
  }

  public verTemario(index: number) {
    this.router.navigate(['/temario/' + index]);
  }

}
