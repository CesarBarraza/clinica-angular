import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private service: UserService,
              private alert: AlertService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.service.loginUser(this.loginForm.value).subscribe(
      data => this.router.navigate(['/'])
    )
   this.alert.success('Bienvenido!!!')
  }
}
