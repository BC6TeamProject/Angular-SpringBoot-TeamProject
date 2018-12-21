import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {first} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private  service: UserService) { }

  addForm: FormGroup;
  username: string;
  password: string;
  role: number;
  firstName: string;
  lastName: string;
  email: string;
  faKey = faKey;
  faUser = faUser;
  checkLogin: boolean;
  alert = 'This field is required';

  userForm = this.formBuilder.group({
    id: [],
    username: [],
    password: [],
    role: [''],
    firstName: [''],
    lastName: [''],
    email: ['']
  });

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])]
    });
  }


  login(form: NgForm) {
    console.log(form.value);
    this.service.login(form.value)
      .pipe(first())
      .subscribe(data => {
        if (data) {
          if (form.value.username === data.username && form.value.password === data.password) {
            localStorage.setItem('username', form.value.username);
            this.service.id = parseInt(data.id, 10);
            localStorage.setItem('id', data.id);
            this.service.getUser(+this.service.id)
              .subscribe(datalog => {
                this.userForm.setValue(datalog);
                localStorage.setItem('role', this.userForm.value.role);
                this.service.role = this.userForm.value.role;
              });
            this.router.navigate(['home']);
          }
        } else {
          this.checkLogin = true;
          console.log('wrong login');
        }
      });

  }
}
