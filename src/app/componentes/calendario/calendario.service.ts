import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  fecha= moment()

  constructor() { }
}
