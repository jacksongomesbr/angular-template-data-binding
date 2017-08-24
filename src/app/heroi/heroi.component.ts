import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Vingador} from '../vingador';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styleUrls: ['./heroi.component.css']
})
export class HeroiComponent implements OnInit {
  @Input()
  heroi: Vingador;

  @Input()
  estahSelecionado: boolean = false;

  @Output()
  onSelecionado = new EventEmitter<Vingador>();

  constructor() { }

  ngOnInit() {
  }

  selecionado(): void {
    this.onSelecionado.emit(this.heroi);
    this.estahSelecionado = true;
  }

}
