import { Component, OnInit } from '@angular/core';
import { NastavnikService } from '../_services/nastavnik.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-predmeti-nastavnik',
  templateUrl: './predmeti-nastavnik.component.html',
  styleUrls: ['./predmeti-nastavnik.component.css']
})
export class PredmetiNastavnikComponent implements OnInit {

  predmeti;
  ulogovaniKorisnik;
  loaded = false;
  smerovi;
  uloga;

  constructor(private nastavnikService: NastavnikService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.ulogovaniKorisnik = this.tokenStorage.getUser();
    this.uloga = this.ulogovaniKorisnik.authorities[0].authority;
    console.log(this.ulogovaniKorisnik)
    this.getPredmeti(this.ulogovaniKorisnik.id);
  }

  getPredmeti(id: Number){
    this.nastavnikService.getPredmetiZaNastavnika(id).subscribe(
      (res: any) => {
        console.log(res)
        this.predmeti = res;
        
        this.loaded = true;
      }
    )
  }



}
