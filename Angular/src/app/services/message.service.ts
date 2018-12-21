import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Message } from '../model/message';
import { Observable } from 'rxjs';
import {Inbox} from '../model/inbox';
import {Id} from '../model/id';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private sendUrl = 'http://localhost:8080/api/messages/send';
  private inboxUrl = 'http://localhost:8080/api/inboxMessages';
  private outboxUrl = 'http://localhost:8080/api/outboxMessages';
  private getIdforUsername = 'http://localhost:8080/api/users/username';
  private getAllMessagesUrl = 'http://localhost:8080/api/showAllMessages';
  deleteUrl = 'http://localhost:8080/api/messages';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.sendUrl, message, {headers: this.httpHeaders});
  }

  readInbox(id: string): Observable<Inbox[]> {
    return this.http.get<Inbox[]>(`${this.inboxUrl}/${id}`);
  }

  readOutbox(id: string): Observable<Inbox[]> {
    return this.http.get<Inbox[]>(`${this.outboxUrl}/${id}`);
  }
  getIdFromUsername(username: string): Observable<Id> {
    return this.http.get<Id>(`${this.getIdforUsername}/${username}`);
  }

  getAllMessages(): Observable<Inbox[]> {
    return this.http.get<Inbox[]>(this.getAllMessagesUrl).pipe(
        map(data => data as Inbox[])
      );
  }

  deleteMessage(id: number): Observable<Inbox> {
    return this.http.delete<Inbox>(`${this.deleteUrl}/${id}`, {headers: this.httpHeaders});
  }


}
