import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080';

const token = localStorage.getItem("token");

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials){
    return this.http.post(AUTH_API + '/korisnik/login', credentials, httpOptions);
  }

  register(user){
    console.log(user);
    return this.http.post(AUTH_API + '/korisnik/kreirajIliIzmeni', user, httpOptions);
  }
}
