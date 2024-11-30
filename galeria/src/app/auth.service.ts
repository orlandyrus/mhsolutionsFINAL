import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser$: Observable<any>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  login(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
}