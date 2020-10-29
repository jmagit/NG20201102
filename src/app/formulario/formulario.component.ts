import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  elemento = {
    id: null,
    nombre: null,
    apellidos: null,
    edad: null
  };
  constructor() { }

  ngOnInit(): void {
  }

  load() {
    this.elemento = {
      id: 1,
      nombre: 'Pepito',
      apellidos: 'Grilloooooooooooooo',
      edad: 99
    };
  }

  send() {
    alert(JSON.stringify(this.elemento));
  }

  cancel() {

  }
}
