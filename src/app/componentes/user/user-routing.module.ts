import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes= [
  {
    path: '',
    children: [
      { path: 'user-login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule { }
