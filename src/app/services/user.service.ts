import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../modeles/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrlUser = environment.cc2ApiUrl + '/user';

  constructor(private http: HttpClient) { }

  public getUserList(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrlUser + '/all');
  }

  public getUserById(id: number): Observable<User>{
    return this.http.get<User>(this.apiUrlUser + '?id=' + id);
  }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrlUser, user);
  }

  public changeUserUsername(id: number, userName: string): Observable<User>{
    return this.http.put<User>(this.apiUrlUser + '/username', {userId: id, userName});
  }

  public changeUserPassword(id: number, password: string): Observable<User>{
    return this.http.put<User>(this.apiUrlUser + '/userpassword', {userId: id, password});
  }

  public changeUserProfilePicture(id: number, picture: string): Observable<User>{
    return this.http.put<User>(this.apiUrlUser + '/userpicture', {userId: id, picture});
  }
}
