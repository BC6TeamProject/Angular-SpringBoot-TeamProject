import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-adminedit',
  templateUrl: './adminedit.component.html',
  styleUrls: ['./adminedit.component.css']
})
export class AdmineditComponent implements OnInit {
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: UserService) { }

  ngOnInit() {
    const userId = localStorage.getItem('editUserId');
    const userName = localStorage.getItem('editUserName');
    const userRole = localStorage.getItem('editUserRole');

    if (!userId) {
      alert('Invalid userID');
      this.router.navigate(['adminmenu']);
    }

    this.editForm = this.formBuilder.group({
      id: [userId],
      username: [userName],
      password: ['', Validators.required],
      role: [userRole],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.service.getUser(+userId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });

  }

  onSubmit() {
    this.service.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate(['adminmenu']);
      });
  }
}
