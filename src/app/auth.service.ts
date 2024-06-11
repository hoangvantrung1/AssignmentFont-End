import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/user';
  private currentUser: any;

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => users.find(user => user.username === username && user.password === password)),
      tap(user => {
        if (user) {
          this.currentUser = user;
        }
      }),
      map(user => !!user)
    );
  }

  logout(): void {
    this.currentUser = null;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  isTeamLeader(): boolean {
    return this.currentUser && this.currentUser.role === 'teamLeader';
  }

  isEmployee(): boolean {
    return this.currentUser && this.currentUser.role === 'employee';
  }
}
