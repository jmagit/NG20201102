import { Component, OnInit } from '@angular/core';
import { DemosComponent } from './demos/demos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './main/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu = [
    {texto: 'Formulario', componente: FormularioComponent },
    {texto: 'Inicio', componente: HomeComponent },
    {texto: 'Demos', componente: DemosComponent},
  ];
  componenteActual = this.menu[0].componente;

  seleccionar(indice: number): void {
    this.componenteActual = this.menu[indice].componente;
  }
}
