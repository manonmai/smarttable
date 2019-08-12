import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployyesComponent} from './employyes.component'


const routes: Routes = [
  {
    path: '',
    component: EmployyesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployyesRoutingModule { }
