import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    localStorage.clear();
  }

  public saveToken(token: string): void {
    // window.sessionStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    // return sessionStorage.getItem(TOKEN_KEY);
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    // window.sessionStorage.removeItem(USER_KEY);
    // window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    // return JSON.parse(sessionStorage.getItem(USER_KEY));
    return JSON.parse(localStorage.getItem(USER_KEY));
  }
}
