import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-view-paciente',
  templateUrl: './view-paciente.component.html',
  styleUrls: ['./view-paciente.component.css']
})
export class ViewPacienteComponent implements OnInit {

  paciente: Paciente;

  constructor(public service: PacienteService, public router: Router) {
   }

  ngOnInit(): void {
  }
}
