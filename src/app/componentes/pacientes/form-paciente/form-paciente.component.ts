import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.css']
})
export class FormPacienteComponent implements OnInit {

  formPaciente = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
  })

  constructor(private service: PacienteService) { }

  ngOnInit(): void {
  }

  ingresarPaciente(){
    this.service.postPaciente(this.formPaciente.value).subscribe(
      data => {
        this.formPaciente.reset();
        alert('Se ingreso correctamente!!!')
      }
    )
  }

}
