import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrudComponent } from './components/crud/crud.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from './components/editor/editor.component';
import { AddComponent } from './components/add/add.component';


@NgModule({
  declarations: [
    CrudComponent,
    EditorComponent,
    AddComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdministracionRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdministracionModule { }
