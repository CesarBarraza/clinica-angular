import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit {

  pacientes: Paciente[] = []

  formPaciente = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
    fechaDeNacimiento: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    localidad: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  constructor(public router: Router, public service: PacienteService) { }

  ngOnInit(): void { }

  editarPaciente(){
    this.service.editPaciente(this.service.pacienteService).subscribe(
      data =>{
        this.pacientes.push(data)
        this.router.navigate(['/paciente/lista-pacientes'])
      }
    )
  }

  cancelar(){
    this.router.navigate(['/paciente/lista-pacientes'])
  }

}
