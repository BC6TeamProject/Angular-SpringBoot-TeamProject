import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
import {Inbox} from '../../model/inbox';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  id: string;
  inbox: Inbox[];

  constructor(private service: MessageService) { }

  ngOnInit() {
    this.id = localStorage.getItem('id');
    this.service.readInbox(this.id)
      .subscribe(data => (this.inbox = data));
    console.log(this.inbox);
  }

}
