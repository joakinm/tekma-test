import { Component, OnInit } from '@angular/core';
import { Temario } from '../models/temario.model';
import * as data from '../../assets/temario.json';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrls: ['./temario.component.css']
})
export class TemarioComponent implements OnInit {
  public temario: Array<Temario>;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.temario = data.Temario;
   }

  ngOnInit(): void {
  }

  verTemario(index: number) {
    this.router.navigate(['/temario/' + index]);
  }

}
