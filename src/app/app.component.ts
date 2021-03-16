import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './componentes/user/user';
import { UserService } from './componentes/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinica';

  user: User

  constructor(public router: Router, private service: UserService) { 
    this.service.userSubject.subscribe(data => {
      this.user = data}
    )
  }

  salir(){
    this.service.logout();
    this.router.navigate(['/'])
  }
}
