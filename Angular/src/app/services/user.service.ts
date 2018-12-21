import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { UserLog } from '../model/userLog';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private loginUrl = 'http://localhost:8080/api/login';

  id: number;
  username = 'guest';
  password = '';
  firstName = '';
  lastName = '';
  role: string;
  email = '';

  constructor(private http: HttpClient) {
    console.log('Service Working');
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as User[])
    );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user, {headers: this.httpHeaders});
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl, user, {headers: this.httpHeaders});
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }

  login(userLog: UserLog): Observable<UserLog> {
    return this.http.post<UserLog>(this.loginUrl, userLog, {headers: this.httpHeaders});
  }



}
