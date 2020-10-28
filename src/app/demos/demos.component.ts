import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { NotificationService, NotificationType } from '../common-services';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit, OnDestroy {
  private suscriptor: Unsubscribable;

  private nombre: string = 'Mundo';
  public listado = [
    { id: 1, nombre: 'Barcelona'},
    { id: 2, nombre: 'LLEIDA'},
    { id: 3, nombre: 'taragona'},
    { id: 4, nombre: 'GironA'},
  ];
  idProvincia = 2; // public idProvincia: number = 2;

  resultado: string = null;
  visible = true;
  estetica = { error: false, importante: true, urgente: true };

  constructor(public vm: NotificationService) { }

  public get Nombre(): string { return this.nombre; }
  public set Nombre(valor: string) { if (this.nombre !== valor) { this.nombre = valor; } }

  public saluda(): void {
    this.resultado = `Hola ${this.Nombre}`;
  }
  public despida(): void {
    this.resultado = `Adios ${this.Nombre}`;
  }
  public di(algo: string): void {
    this.resultado = `Dice ${algo}`;
  }

  calcula(a: number, b: number): number { return a + b; }

  cambia(): void {
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }

  add(provincia: string): void {
    const id = this.listado.length === 0 ? 1 : (this.listado[this.listado.length - 1].id + 1);
    this.listado.push({id, nombre: provincia});
    this.idProvincia = id;
  }

  ngOnInit(): void {
    this.suscriptor = this.vm.Notificacion.subscribe(n => {
      if (n.Type !== NotificationType.error) { return; }
      window.alert(`Suscripcion: ${n.Message}`);
      //this.vm.remove(this.vm.Listado.length - 1);
    });
  }
  ngOnDestroy(): void {
    if (this.suscriptor) {
      this.suscriptor.unsubscribe();
    }
  }

}
