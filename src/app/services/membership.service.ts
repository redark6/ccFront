import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../modeles/user';
import {Membership} from '../modeles/membership';
import {MembershipApply} from '../modeles/membership-apply';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  apiUrlMember = environment.cc2ApiUrl + '/member';

  constructor(private http: HttpClient) { }

  public getMembershipList(): Observable<Membership[]>{
    return this.http.get<Membership[]>(this.apiUrlMember + '/all');
  }

  public getMembershipById(id: number): Observable<Membership>{
    return this.http.get<Membership>(this.apiUrlMember + '?id=' + id);
  }

  public applyMembership(application: MembershipApply): Observable<Membership>{
    return this.http.post<Membership>(this.apiUrlMember + '/apply', application);
  }

  public renewMembership(userId: number): Observable<Membership>{
    return this.http.post<Membership>(this.apiUrlMember + '/renew?id=' + userId, {});
  }

  public stopAutomaticMembershipRenew(userId: number, password: string): Observable<User>{
    return this.http.put<User>(this.apiUrlMember + '/stopautomaticrenew?id=' + userId, {});
  }
}
