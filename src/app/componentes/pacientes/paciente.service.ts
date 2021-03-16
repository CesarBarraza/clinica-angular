import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from './paciente';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  paciente = new Subject<any>();
  pacienteService: Paciente

  constructor(private http: HttpClient) { }

  getAllPacintes(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(environment.URL_API+'/pacientes')
  }

  getById(id: number): Observable<any>{
    return this.http.get<any>(environment.URL_API+'/pacientes/'+ id)
  }

  postPaciente(paciente: Paciente): Observable<Paciente>{
    return this.http.post<Paciente>(environment.URL_API+'/pacientes', paciente)
  }

  editPaciente(id: number): Observable<any>{
    return this.http.patch<any>(environment.URL_API+'/pacientes', id)
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
