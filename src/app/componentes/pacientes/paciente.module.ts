import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteRoutingModule } from './paciente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { ListPacienteComponent } from './list-paciente/list-paciente.component';
import { ViewPacienteComponent } from './view-paciente/view-paciente.component';
import { EditPacienteComponent } from './edit-paciente/edit-paciente.component';



@NgModule({
  declarations: [FormPacienteComponent, ListPacienteComponent, ViewPacienteComponent, EditPacienteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
