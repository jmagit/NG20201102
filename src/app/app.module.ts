import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ERROR_LEVEL, LoggerService, ViewNextCoreModule } from 'src/view-next-core';
import { ServicesModule } from './services';
import { MainModule } from './main';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, ViewNextCoreModule, ServicesModule, MainModule,
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL, useValue: 2 },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
