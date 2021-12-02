import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'',
loadChildren:()=>import('./index/index.module').then((m)=>m.IndexModule)
},
{
  path:'administracion',
loadChildren:()=>import('./administracion/administracion.module').then((m)=>m.AdministracionModule)
},
{
  path:'**',
redirectTo:''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
