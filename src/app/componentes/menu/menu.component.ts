import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: User

  constructor(public router: Router, private service: UserService) { 
    this.service.userSubject.subscribe(data => {
      this.user = data}
    )
  }

  ngOnInit(): void {
  }

  salir(){
    this.service.logout();
    this.router.navigate(['/'])
  }

}
