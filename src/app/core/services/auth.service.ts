import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
import { AuthResponse } from '../../features/auth/signup/signup';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private me$?: Observable<any>;

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
    return this.http.post<AuthResponse>('user/signup', data, {
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
      tap(() => {
        this.user$.next(null)
        this.me$ = null as any
      })
    );
  }

  getMe() {
    if (this.user$.value) {
      return this.user$.asObservable();
    }

    if (!this.me$) {
      this.me$ = this.http.get<any>('user/me', {
        withCredentials: true
      }).pipe(
        tap(res => this.user$.next(res.data.user)),
        shareReplay({ bufferSize: 1, refCount: true })
      );
    }

    return this.me$;
  }

  updateMe(data: any) {
    return this.http.patch<any>('user/updateMe', data, {
      withCredentials: true
    }).pipe(
      tap(res => {
        this.user$.next(res.data.user);
      })
    );
  }

  changeMyPassword(data: any) {
    return this.http.patch<any>('user/changeMyPassword', data, {
      withCredentials: true
    }).pipe(
      tap(res => {
        this.user$.next(res.data.user);
      })
    )
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
