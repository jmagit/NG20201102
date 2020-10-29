import { Component, OnInit } from '@angular/core';
import { DemosComponent } from './demos/demos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './main/home/home.component';
import { PersonasComponent } from './personas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu = [
    {texto: 'Persona', componente: PersonasComponent },
    {texto: 'Inicio', componente: HomeComponent },
    {texto: 'Demos', componente: DemosComponent},
    {texto: 'Formulario', componente: FormularioComponent },
  ];
  componenteActual = this.menu[0].componente;

  seleccionar(indice: number): void {
    this.componenteActual = this.menu[indice].componente;
  }
}
