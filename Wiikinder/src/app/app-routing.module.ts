import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogueadoGuard } from 'src/Guards/logueado.guard';

const routes: Routes = [
{
  path:'',
loadChildren:()=>import('./index/index.module').then((m)=>m.IndexModule)
},
{
  path:'administracion',
  canActivateChild: [LogueadoGuard],
loadChildren:()=>import('./administracion/administracion.module').then((m)=>m.AdministracionModule)
},
{
  path:'usuario',
  canActivateChild: [LogueadoGuard],
loadChildren:()=>import('./user/user.module').then((m)=>m.UserModule)
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
