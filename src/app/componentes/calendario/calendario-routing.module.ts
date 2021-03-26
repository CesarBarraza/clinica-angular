import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullcalendarioComponent } from './fullcalendario/fullcalendario.component';
import { TurnosComponent } from './turnos/turnos.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'mi-calendario', component: FullcalendarioComponent },
      { path:'turnos', component: TurnosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioRoutingModule { }
