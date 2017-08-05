import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponentComponent } from '../shared/button-component/button-component.component';
import { DateComponentComponent } from '../shared/date-component/date-component.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponentComponent,
    DateComponentComponent
  ],
  declarations: [
    ButtonComponentComponent,
    DateComponentComponent
  ]
})
export class SharedModule { }
