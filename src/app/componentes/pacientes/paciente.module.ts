import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteRoutingModule } from './paciente-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { ListPacienteComponent } from './list-paciente/list-paciente.component';
import { ViewPacienteComponent } from './view-paciente/view-paciente.component';
import { EditPacienteComponent } from './edit-paciente/edit-paciente.component';
import { AlertModule } from 'ngx-alerts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [FormPacienteComponent, ListPacienteComponent, ViewPacienteComponent, EditPacienteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    PacienteRoutingModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 3000, positionX: 'right', positionY: 'top'})
  ]
})
export class PacienteModule { }
