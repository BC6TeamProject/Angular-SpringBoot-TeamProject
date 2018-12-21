import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
import {Outbox} from '../../model/outbox';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.css']
})
export class OutboxComponent implements OnInit {

  id: string;
  outbox: Outbox[];

  constructor(private service: MessageService) { }

  ngOnInit() {
    this.id = localStorage.getItem('id');
    this.service.readOutbox(this.id)
      .subscribe(data => (this.outbox = data));
    console.log(this.outbox);
  }

}
