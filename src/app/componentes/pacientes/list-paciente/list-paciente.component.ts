import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-paciente',
  templateUrl: './list-paciente.component.html',
  styleUrls: ['./list-paciente.component.css']
})
export class ListPacienteComponent implements OnInit {

  pacientes: Paciente[] = [];
  paciente: Paciente;

  constructor(private service: PacienteService, public router: Router) {
    this.service.refreshList().subscribe(
      data => this.lsitarPacintes()
    )
   }

  ngOnInit(): void {
    this.lsitarPacintes()
  }

  lsitarPacintes(){
    this.service.getAllPacintes().subscribe(
      data => this.pacientes = data
    )
  }

  eliminarPaciente(id: number){
    if(confirm('Estas seguro de eliminar??')){
    this.service.deletePaciente(id).subscribe(
      data => this.lsitarPacintes()
    )}
  }

  verPaciente(id: number){
    this.service.getById(id).subscribe(
      data => {
        this.service.pacienteService = data
        this.router.navigate(['/paciente/view-paciente'])
      }
    )
  }

}
