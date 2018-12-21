import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-sendmsg',
  templateUrl: './sendmsg.component.html',
  styleUrls: ['./sendmsg.component.css']
})
export class SendmsgComponent implements OnInit {
  sendForm: any;
  msgpreview: any;
  msgreceiver: any;
  getId: number;
  userId: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private  user: UserService, private msg: MessageService) { }

  ngOnInit() {
    this.sendForm = this.formBuilder.group({
      sender: [localStorage.getItem('id'), Validators.required],
      receiver: ['', Validators.required],
      body: ['', Validators.compose([Validators.required, Validators.minLength(0), Validators.maxLength(250)])]
    });
  }

  send() {
    console.log(this.sendForm.value.receiver);
    this.userId = this.sendForm.value.receiver;
    this.msg.getIdFromUsername(this.userId)
      .subscribe(data => {
        this.getId = data.id;
        console.log('dataID: ' + data.id);
      });
    console.log('getID: ' + this.getId);
    if (this.getId) {
      this.sendForm.controls['receiver'].setValue(String(this.getId));
      console.log('userId:' + this.userId);
      console.log(this.sendForm.value);
      this.msg.sendMessage(this.sendForm.value)
        .subscribe(data => {
          this.router.navigate(['home']);
        });
    }

  }

}
