import { Component, OnInit } from '@angular/core';
import { Temario } from '../models/temario.model';
import * as data from '../../assets/temario.json';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrls: ['./temario.component.css']
})
export class TemarioComponent implements OnInit {
  public temario: Array<Temario>;
  constructor() {
    this.temario = data.Temario;
   }

  ngOnInit(): void {
  }

}
