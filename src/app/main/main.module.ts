import { NgModule, SkipSelf, Optional} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonServicesModule } from '../common-services';
import { NotificationComponent } from './notification/notification.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { HomeComponent } from './home/home.component';
import { AjaxWaitComponent } from './ajax-wait';



@NgModule({
  declarations: [NotificationComponent, CabeceraComponent, HomeComponent, AjaxWaitComponent, ],
  exports: [NotificationComponent, CabeceraComponent, HomeComponent, AjaxWaitComponent, ],
  imports: [
    CommonModule, CommonServicesModule,
  ]
})
export class MainModule {
  constructor( @Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule has already been loaded.
        Import MainModule once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
 }
