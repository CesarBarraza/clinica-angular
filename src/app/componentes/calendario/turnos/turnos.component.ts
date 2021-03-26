import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { CalendarioService } from '../calendario.service';
import { Turno } from '../turno';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  //fecha = moment()
  horarios: any[] = []
  horario: any;
  turno: Turno

  constructor(public service: CalendarioService) { }

  ngOnInit(): void {
    this.turnos()
  }

  turnos(){
    this.service.fecha
    const h = moment('08:45', 'HH:mm')
    this.horario = h
    for(var i=0; i<20; i++ ){
      h.add(15, 'm')
      this.horarios.push(h.format('HH:mm'))
    }
  }

  clickDay(hora){
    this.turno = new Turno()
    const fecha = this.service.fecha.format('DD/MM')
    this.turno.fecha = fecha;
    this.turno.hora = hora;
    console.log(this.turno)
  }

  
  changeDay(flag){
    if(flag<0) {
      const prevDate = this.service.fecha.clone().subtract(1, "day");
      this.service.fecha = prevDate
      
    }else {
      const nextDate = this.service.fecha.clone().add(1, "day");
      this.service.fecha = nextDate
      
    }
  }

}
