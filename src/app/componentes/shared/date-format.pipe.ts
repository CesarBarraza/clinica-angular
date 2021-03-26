import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string) {
    var datePipe = new DatePipe("en-ES");
     value = datePipe.transform(value, 'MMMM, yyyy');
     return value;
 }

}
