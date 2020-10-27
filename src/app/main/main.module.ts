import { NgModule, SkipSelf, Optional} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '../services';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ServicesModule,
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
