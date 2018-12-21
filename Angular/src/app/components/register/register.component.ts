import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons/faAt';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: UserService) { }

  addForm: FormGroup;
  faUser = faUser;
  faKey = faKey;
  faUserTie = faUserTie;
  faUsers = faUsers;
  faAt = faAt;
  alert = 'This field is required';


  ngOnInit() {
    this.addForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])],
      role: [2 , Validators.required],
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])],
      email: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])]
    });
  }

  onSubmit() {
    console.log(this.addForm.getRawValue());
    this.service.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['home']);
      });
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
