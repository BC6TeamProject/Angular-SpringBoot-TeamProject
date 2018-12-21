import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import {User} from '../../model/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;
  users: User[];

  constructor(private router: Router, private service: UserService) { }

  faMail = faEnvelope;
  faHome = faHome;
  faUser = faUser;
  faBino = faBinoculars;
  faTools = faTools;
  user = this.service.username;
  role: string = localStorage.getItem('role');
  id = localStorage.getItem('id');


  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.service.username = this.username;
    this.role = localStorage.getItem('role');
    this.service.role = this.role;
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    this.router.navigate(['/home']);
  }
}
