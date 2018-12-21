import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {MessageService} from '../../services/message.service';
import {Inbox} from '../../model/inbox';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {

  users: User[];
  messages: Inbox[];
  showMessages: boolean;

  constructor(private router: Router, private service: UserService, private msg: MessageService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(data => (this.users = data));
    this.msg.getAllMessages()
      .subscribe(data => (this.messages = data));
  }

  editUser(user: User): void {
    localStorage.removeItem('editUserId');
    localStorage.removeItem('editUserName');
    localStorage.removeItem('editUserRole');
    localStorage.setItem('editUserId', user.id.toString());
    localStorage.setItem('editUserName', user.username.toString());
    localStorage.setItem('editUserRole', user.role.toString());
    this.router.navigate(['adminedit']);
  }

  deleteUser(user: User) {
    console.log('delete');
    this.service.deleteUser(user.id).subscribe(data => {
      this.users = this.users.filter(u => u !== user);
    });
  }

  getMessages() {
    if (this.showMessages === false) {
      this.showMessages = true;
    } else {
      this.showMessages = false;
    }
  }

  deleteMessage(inbox: Inbox) {
    this.msg.deleteMessage(inbox.id).subscribe(data => {
      this.messages = this.messages.filter(u => u !== inbox);
    });
  }
}
