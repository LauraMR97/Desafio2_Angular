import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { CrudComponent } from './components/crud/crud.component';
import { EditorComponent } from './components/editor/editor.component';

const routes: Routes = [
  {path:'crud',
  component:CrudComponent
},
{path:'editar',
component:EditorComponent
},
{path:'crear',
component:AddComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
