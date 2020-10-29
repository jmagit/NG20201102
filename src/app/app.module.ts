import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ERROR_LEVEL, LoggerService, ViewNextCoreModule } from 'src/view-next-core';
import { ServicesModule } from './services';
import { MainModule } from './main';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CommonServicesModule } from './common-services';
import { DemosComponent } from './demos/demos.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, ViewNextCoreModule, MainModule, CommonServicesModule, ServicesModule,
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
