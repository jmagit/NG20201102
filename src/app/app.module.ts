import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ERROR_LEVEL, LoggerService, ViewNextCoreModule } from 'src/view-next-core';
import { ServicesModule } from './services';
import { AjaxWaitInterceptor, MainModule } from './main';
import { environment } from 'src/environments/environment';
import { CommonServicesModule } from './common-services';
import { DemosComponent } from './demos/demos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonasModule } from './personas';

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, ViewNextCoreModule, MainModule, CommonServicesModule, ServicesModule,
    PersonasModule,
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
