import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from './paciente';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AlertService } from 'ngx-alerts';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  paciente = new Subject<any>();
  pacienteService: Paciente

  constructor(private http: HttpClient, private alert: AlertService) { }

  getAllPacintes(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(environment.URL_API+'/pacientes')
  }

  getById(id: number): Observable<any>{
    return this.http.get<any>(environment.URL_API+'/pacientes/'+ id)
  }

  postPaciente(paciente: Paciente): Observable<Paciente | any>{
    return this.http.post<Paciente>(environment.URL_API+'/pacientes', paciente).pipe(
      map((data: any) =>{
         return alert(data.message)
      }),
      catchError((error: any) => of(alert(error.error.message))))
  }

  editPaciente(paciente: Paciente): Observable<Paciente | any>{
    return this.http.patch<any>(environment.URL_API+'/pacientes/'+paciente.id, paciente).pipe(
      map((data: any) => {
        return alert(data.message)
      }),
      catchError((error: any) => of(alert(error.error.message)))
    )
  }

  deletePaciente(id: number): Observable<any>{
    return this.http.delete<any>(environment.URL_API+'/pacientes/'+id)
  }

  refreshList(): Observable<any>{
    return this.paciente.asObservable();
  }

  filter(filter: string){
    this.paciente.next(filter);
  }
}
