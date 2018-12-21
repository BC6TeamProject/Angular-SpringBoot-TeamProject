import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons/faAt';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editForm: FormGroup;
  faKey = faKey;
  faUserTie = faUserTie;
  faUsers = faUsers;
  faAt = faAt;
  firstName: string = this.service.firstName;
  lastName: string = this.service.lastName;
  email: string = this.service.email;

  constructor(private formBuilder: FormBuilder, private service: UserService, private router: Router) { }

  ngOnInit() {

    this.service.getUser(+parseInt(localStorage.getItem('id'), 10))
      .subscribe(data => {
        this.editForm.setValue(data);
      });

    this.editForm = this.formBuilder.group({
      id: [this.service.id],
      username: [this.service.username, Validators.required],
      password: [this.service.password, Validators.required],
      role: [this.service.role],
      firstName: [this.firstName, Validators.required],
      lastName: [this.lastName, Validators.required],
      email: [this.service.email, Validators.required]
    });
  }

  onSubmit() {
    this.service.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate(['home']);
      });
  }
}
