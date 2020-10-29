import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonServicesModule } from '../common-services';
import { PERSONAS_COMPONENTES } from './componente.component';
import { ViewNextCoreModule } from 'src/view-next-core';


@NgModule({
  declarations: [PERSONAS_COMPONENTES],
  exports: [PERSONAS_COMPONENTES],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    ViewNextCoreModule, CommonServicesModule,
  ]
})
export class PersonasModule { }
