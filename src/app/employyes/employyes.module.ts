import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployyesRoutingModule } from './employyes-routing.module';
import { EmployyesComponent } from './employyes.component';


@NgModule({
  declarations: [EmployyesComponent],
  imports: [
    CommonModule,
    EmployyesRoutingModule
  ]
})
export class EmployyesModule { }