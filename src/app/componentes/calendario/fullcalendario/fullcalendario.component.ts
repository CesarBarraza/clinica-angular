import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CalendarioService } from '../calendario.service';

@Component({
  selector: 'app-fullcalendario',
  templateUrl: './fullcalendario.component.html',
  styleUrls: ['./fullcalendario.component.css']
})
export class FullcalendarioComponent implements OnInit {

  week: any=[
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabados",
    "Domingos"
  ]

  mesSelect: any[]
  dateSelect: any;

  constructor(private service: CalendarioService, private router: Router) { }

  ngOnInit(): void {
    this.getDaysFromDate(3, 2021)
  }

  getDaysFromDate(month, year){
    //const startDate = moment()
    const startDate = moment(`${year}/${month}/01`)
    this.dateSelect = startDate
    const endDay = startDate.clone().endOf('month')

    const difDay = endDay.diff(startDate, 'days', true)
    const numberDay = Math.round(difDay)

    const arrayDays = Object.keys([...Array(numberDay)]).map((a:any) => {
      a = parseInt(a)+1;
      const dayObject = moment(`${year}-${month}-${a}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      }
    });
    this.mesSelect = arrayDays
  }

  changeMonth(flag){
    if(flag<0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    }else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day){
    const monthYear = this.dateSelect.format('MMMM, yyyy')
    const parse = moment(`${monthYear}-${day.value}`)
    this.service.fecha=parse
    this.router.navigate(['/calendario/turnos'])
  }
}
