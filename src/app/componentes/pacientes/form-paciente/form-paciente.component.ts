import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.css']
})
export class FormPacienteComponent implements OnInit {

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

  constructor(public service: PacienteService, private router: Router) { }

  ngOnInit(): void {
  }

  ingresarPaciente(){
    this.service.postPaciente(this.formPaciente.value).subscribe(
      data => {
        this.pacientes.push(data)
        this.formPaciente.reset();
      }
    )
  }

  cancelar(){
    this.router.navigate(['/paciente/lista-pacientes'])
  }

}
