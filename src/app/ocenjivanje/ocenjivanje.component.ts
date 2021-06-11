import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../_services/admin.service';
import { NastavnikService } from '../_services/nastavnik.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-ocenjivanje',
  templateUrl: './ocenjivanje.component.html',
  styleUrls: ['./ocenjivanje.component.css']
})
export class OcenjivanjeComponent implements OnInit {
  predmeti;
  loaded;
  smerovi;
  ulogovaniKorisnik;
  uloga;
  studenti;
  aktivniRokovi;
  tipoviIspita;
  ocena;

  ispitIliKolokvijumDTO = {
    idStudent: Number,
    idPredmet: Number,
    idRok: Number,
    idTipIspita: Number,
    datumIspita: Date,
    ocena: Number,
    bodovi: Number
  }
  constructor(private nastavnikService: NastavnikService, private router: Router, private adminService: AdminService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.ulogovaniKorisnik = this.tokenStorage.getUser();
    this.uloga = this.ulogovaniKorisnik.authorities[0].authority;
    if (this.uloga != "nastavnik") {
      alert("Nemate pristup ovoj stranici!");
      this.router.navigate(['/login']);
    } else {
      this.getPredmeti(this.ulogovaniKorisnik.id);
      this.getAktivniRokovi();
      this.getTipoviIspita();
    }
  }

  getPredmeti(id: Number) {
    this.nastavnikService.getPredmetiZaNastavnika(id).subscribe(
      (res: any) => {
        console.log(res)
        this.predmeti = res;
        this.loaded = true;
      }
    )
  }

  onChange(idPredmet) {
    console.log(idPredmet)
    this.ispitIliKolokvijumDTO.idPredmet = idPredmet;
    this.nastavnikService.getSmeroviZaPredmet(idPredmet).subscribe(
      (res) => {
        this.smerovi = res;
        console.log(this.smerovi)
      }
    )
  }

  onChange2(idSmer) {
    console.log(idSmer)
    this.adminService.getStudentiZaSmer(idSmer).subscribe(
      (res) => {
        this.studenti = res;
      }
    )
  }

  onChange3(idStudenta) {
    //this.ispitIliKolokvijumDTO.idStudent = idStudenta;
    console.log(this.ispitIliKolokvijumDTO)
  }

  izracunajOcenu(brojBodova) {
    if (51 <= brojBodova && brojBodova <= 60) {
      this.ocena = 6;
    }
    else if (61 <= brojBodova && brojBodova <= 70) {
      this.ocena = 7;
    }
    else if (71 <= brojBodova && brojBodova <= 80) {
      this.ocena = 8;
    }
    else if (81 <= brojBodova && brojBodova <= 90) {
      this.ocena = 9;
    }
    else if (91 <= brojBodova && brojBodova <= 100) {
      this.ocena = 10;
    }
    else {
      this.ocena = null;
    }
  }


  getAktivniRokovi() {
    this.nastavnikService.getAktivniRokovi().subscribe(
      (res) => {
        this.aktivniRokovi = res;
      }
    )
  }

  getTipoviIspita() {
    this.nastavnikService.getTipoviIspita().subscribe(
      (res) => {
        this.tipoviIspita = res;
      }
    )
  }

  unesiIspit() {
    if (Number(this.ispitIliKolokvijumDTO.bodovi) > 100 || Number(this.ispitIliKolokvijumDTO.ocena) > 10) {
      alert("Uneli ste pogresne podatke")
      this.router.navigate(['/ocenjivanje'])
    } else {
      this.nastavnikService.unesiIspit(this.ispitIliKolokvijumDTO).subscribe(
        () => this.router.navigate(['/ispiti'])
      )
    }

  }

}
