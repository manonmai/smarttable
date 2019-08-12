import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'employyes',
    loadChildren: () => import('./employyes/employyes.module').then(mod => mod.EmployyesModule)
  },
  {
    path: '',
    redirectTo: 'employyes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
