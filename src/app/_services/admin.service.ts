import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Smer } from '../model/smer.model';
import { Nastavnik } from '../model/nastavnik.model';
import { Predmet } from '../model/predmet.model';


const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    })
  };
  constructor(private http: HttpClient) { }

  getSmerovi(): Observable<any> {
    return this.http.get(BASE_URL + '/smer/getSmerovi');
  }

  getStudenti(): Observable<any> {
    return this.http.get(BASE_URL + '/korisnik/getStudenti')
  }

  getStudentiZaSmer(id): Observable<any> {
    return this.http.get(BASE_URL + '/korisnik/getStudentiZaSmer/' + id)
  }

  getNastavnici(): Observable<any> {
    return this.http.get(BASE_URL + '/korisnik/getProfesori')
  }

  getNastavniciZaPredmet(id) {
    return this.http.get(BASE_URL + '/korisnik/getNastavniciZaPredmet/' + id)
  }

  getNastavniciZaDodavanjeNaPredmet(id) {
    return this.http.get(BASE_URL + '/korisnik/getNastavniciZaDodavanjeNaPredmet/' + id)
  }

  addNastavnikZaPredmet(noviNastavnikNaPredmetu: any) {
    return this.http.post(BASE_URL + '/korisnik/addNastavnikNaPredmet', noviNastavnikNaPredmetu, { responseType: 'text' });
  }

  obrisiNastavnikZaPredmet(nastavnikNaPredmetu: any) {
    return this.http.put(BASE_URL + '/korisnik/obrisiNastavnikNaPredmetu', nastavnikNaPredmetu, { responseType: 'text' })
  }

  obrisiKorisnika(korisnikId: any) {
    return this.http
      .put(BASE_URL + '/korisnik/obrisi/' + korisnikId, null, { responseType: 'text' })
  }

  obrisiPredmet(idPredmet: number) {
    return this.http.post(BASE_URL + '/predmet/obrisi/' + idPredmet, null, { responseType: 'text' })
  }

  izmeniKorisnika(korisnik: any) {
    return this.http.post(BASE_URL + '/korisnik/kreirajIliIzmeni', korisnik)
  }

  obrisiSmer(smerId: number) {
    return this.http.put(BASE_URL + '/smer/obrisi/' + smerId, null, { responseType: 'text' });
  }

  izmeniSmer(smer: any) {
    return this.http.post(BASE_URL + '/smer/kreirajIliIzmeni/', smer, { responseType: 'text' });
  }

  dodajSmer(smer: any) {
    return this.http.post(BASE_URL + '/smer/kreirajIliIzmeni/', smer, { responseType: 'text' });
  }

  dodajPredmet(predmet: any) {
    return this.http.post(BASE_URL + '/predmet/kreirajIliIzmeni/', predmet, { responseType: 'text' });
  }

  dodajPredmetNaSmeru(predmetNaSmeru: any) {
    return this.http.post(BASE_URL + '/predmet/dodeliPredmetSmeru', predmetNaSmeru, { responseType: 'text' });
  }

  izmeniPredmetNaSmeru(predmeti: any) {
    return this.http.post(BASE_URL + '/predmet/izmeniPredmetNaSmeru', predmeti, { responseType: 'text' });
  }

  obrisiPredmetNaSmeru(idPredmet: Number, idSmer: Number) {
    return this.http.post(BASE_URL + '/predmet/obrisiPredmetZaSmer/' + idPredmet + '/' + idSmer, null, { responseType: 'text' });
  }

  getSviRokovi(): Observable<any> {
    return this.http.get(BASE_URL + '/ispit/getSviRokovi');
  }

  sacuvajRokove(rokovi: any) {
    return this.http.post(BASE_URL + '/ispit/sacuvajRokove', rokovi, { responseType: 'text' });
  }

  getSviIspiti() {
    return this.http.get(BASE_URL + '/ispit/getSviIspiti');
  }

  getIspitiStudentNastavnik(id: Number) {
    return this.http.get(BASE_URL + '/ispit/getIspitiStudentNastavnik/' + id);
  }


  handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }

}
