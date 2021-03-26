import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CalendarioRoutingModule } from './calendario-routing.module';
import { FullcalendarioComponent } from './fullcalendario/fullcalendario.component';
import { DateFormatPipe } from '../shared/date-format.pipe';
import { TurnosComponent } from './turnos/turnos.component';


@NgModule({
  declarations: [FullcalendarioComponent, DateFormatPipe, TurnosComponent],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    RouterModule
  ],
  providers:[DatePipe]
})
export class CalendarioModule { }
