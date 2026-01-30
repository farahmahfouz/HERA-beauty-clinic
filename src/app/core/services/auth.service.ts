import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthResponse } from '../../features/auth/signup/signup';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user$ = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post<any>('user/login', data, {
      withCredentials: true
    }).pipe(
      tap(res => {
        this.user$.next(res.data.user);
      })
    );
  }

  signup(data: any) {
    return this.http.post<AuthResponse>('user/signup', data , {
      withCredentials: true
    }).pipe(
      tap(res => {
        this.user$.next(res.data.user);
      })
    );
  }

  logout() {
    return this.http.get('user/logout', {
      withCredentials: true
    }).pipe(
      tap(() => this.user$.next(null))
    );
  }

  getMe() {
    return this.http.get<any>('user/me', {
      withCredentials: true
    }).pipe(
      tap(res => this.user$.next(res.data.user))
    );
  }

  get user() {
    return this.user$.value;
  }

  get isLoggedIn() {
    return !!this.user$.value;
  }

  get role() {
    return this.user?.role;
  }
}
