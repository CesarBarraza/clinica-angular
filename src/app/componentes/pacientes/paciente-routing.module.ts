import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { EditPacienteComponent } from './edit-paciente/edit-paciente.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { ListPacienteComponent } from './list-paciente/list-paciente.component';
import { ViewPacienteComponent } from './view-paciente/view-paciente.component';

const routes: Routes= [
  {
    path: '',
    children: [
      { path: 'formulario-paciente', component: FormPacienteComponent, canActivate: [AuthGuard] },
      { path: 'lista-pacientes', component: ListPacienteComponent, canActivate: [AuthGuard] },
      { path: 'view-paciente', component: ViewPacienteComponent, canActivate: [AuthGuard] },
      { path: 'edit-paciente', component: EditPacienteComponent, canActivate: [AuthGuard] }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class PacienteRoutingModule { }
