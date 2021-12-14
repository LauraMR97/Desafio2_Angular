import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmigosComponent } from './components/amigos/amigos.component';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { PerfilesAgenosComponent } from './components/perfiles-agenos/perfiles-agenos.component';
import { PeticionesComponent } from './components/peticiones/peticiones.component';

const routes: Routes = [
  {
    path:'menu',
  component:MenuUsuarioComponent
},
{
  path:'amigos',
component:AmigosComponent
},
{
  path:'miPerfil',
component:MiPerfilComponent
},
{
  path:'Perfil',
component:PerfilesAgenosComponent
},
{
  path:'peticiones',
component:PeticionesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
