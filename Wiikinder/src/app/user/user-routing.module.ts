import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmigosComponent } from './components/amigos/amigos.component';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';

const routes: Routes = [
  {
    path:'menu',
  component:MenuUsuarioComponent
},
{
  path:'amigos',
component:AmigosComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
