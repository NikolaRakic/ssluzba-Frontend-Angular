import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NastavnikService {

  BASE_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  samoZaNastavnike(){
    return this.http.get(this.BASE_URL + '/korisnik/samoZaNastavnike');
  }

  getUloge(){
    return this.http.get(this.BASE_URL + '/korisnik/getUlogeNastavnik');
  }

  getPredmetiZaNastavnika(id): Observable<any>{
    return this.http.get(this.BASE_URL + '/predmet/getPredmetiZaNastavnika/' + id);
  }

  getSmeroviZaPredmet(id){
    return this.http.get(this.BASE_URL + '/smer/getSmeroviByPredmet/' + id);
  }

  getAktivniRokovi(){
    return this.http.get(this.BASE_URL + '/ispit/getSviAktivniRokovi');
  }

  getTipoviIspita(): Observable<any>{
    return this.http.get(this.BASE_URL + '/ispit/getTipoviIspita');
  }

  unesiIspit(ispitIliKolokvijumDTO){
    return this.http.post(this.BASE_URL + '/ispit/unosIspitaIliKolokvijuma', ispitIliKolokvijumDTO, {responseType:'text'})
  }
}
