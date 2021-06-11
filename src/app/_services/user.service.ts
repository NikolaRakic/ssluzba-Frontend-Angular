import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getStudent(id: number): Observable<any> {
    return this.http.get(BASE_URL + '/korisnik/getStudent/' + id)
  }

  getNastavnik(id: Number): Observable<any> {
    return this.http.get(BASE_URL + '/korisnik/getNastavnik/' + id)
  }

}
