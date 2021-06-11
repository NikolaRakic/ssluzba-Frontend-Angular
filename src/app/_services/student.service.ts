import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getPredmeti() {
    return this.http.get(BASE_URL + '/predmet/getPredmeti');
  }

  getPredmet(id) {
    return this.http.get(BASE_URL + '/predmet/getPredmet/' + id);
  }

  getSmerovi() {
    return this.http.get(BASE_URL + '/smer/getSmerovi');
  }

  getSmer(id): Observable<any> {
    return this.http.get(BASE_URL + '/smer/getSmer/' + id);
  }

  getSmerByNaziv(naziv): Observable<any> {
    return this.http.get(BASE_URL + '/smer/getSmerByNaziv/' + naziv);
  }

  getPredmetiZaSmer(id): Observable<any> {
    return this.http.get(BASE_URL + '/predmet/predmetiPoSmeru/' + id);
  }

  getPolozeniIspiti(idStudenta) {
    return this.http.get(BASE_URL + '/ispit/polozeniIspitiZaStudenta/' + idStudenta);
  }

}

