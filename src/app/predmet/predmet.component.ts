import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../_services/admin.service';
import { NastavnikService } from '../_services/nastavnik.service';
import { StudentService } from '../_services/student.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  predmet;
  id;
  smerovi;
  uloga;
  ulogovaniKorisnik;
  loaded = false;
  loaded2 = false;
  nastavniciZaPredmet;
  sviNastavnici;
  prikaziDodajNastavnika = false;
  noviNastavnikNaPredmetu = {
    idNastavnik: Number,
    idPredmet: Number
  }

  constructor(private nastavnikService: NastavnikService,
    private adminService: AdminService,
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.ulogovaniKorisnik = this.tokenStorage.getUser();
    try {
      this.uloga = this.ulogovaniKorisnik.authorities[0].authority;
    } catch {
      alert("Niste prijavljeni!")
      window.location.replace("login");
      return;
    }

    this.getPredmet();
    this.getNastavniciZaPredmet();
    this.getSviNastavniciZaDodavanje();
    this.getSmeroviZaPredmet();
  }

  getPredmet() {
    this.studentService.getPredmet(this.id).subscribe(
      (res) => {
        this.predmet = res
        console.log(this.predmet)
        this.loaded = true;
      }
    )
  }

  getNastavniciZaPredmet() {
    this.adminService.getNastavniciZaPredmet(this.id).subscribe(
      (res) => {
        this.nastavniciZaPredmet = res;
        console.log(this.nastavniciZaPredmet)
      }
    )
  }

  getSviNastavniciZaDodavanje() {
    this.adminService.getNastavniciZaDodavanjeNaPredmet(this.id).subscribe(
      (res) => {
        this.sviNastavnici = res
        console.log(this.sviNastavnici)
      }
    )
  }

  dodajNastavnika() {
    if (this.uloga != "admin") {
      alert("Nemate pristup!")
      window.location.replace("login");
      return;
    }
    this.noviNastavnikNaPredmetu.idPredmet = this.id;
    this.adminService.addNastavnikZaPredmet(this.noviNastavnikNaPredmetu).subscribe(
      () => window.location.reload()
    )
  }

  obrisiNastavnikaNaPredmetu(idNastavnik, idPredmet) {
    this.noviNastavnikNaPredmetu.idNastavnik = idNastavnik;
    this.noviNastavnikNaPredmetu.idPredmet = idPredmet;
    this.adminService.obrisiNastavnikZaPredmet(this.noviNastavnikNaPredmetu).subscribe(
      () => this.getNastavniciZaPredmet()
    )
    window.location.reload();
  }

  getSmeroviZaPredmet() {
    this.nastavnikService.getSmeroviZaPredmet(this.id).subscribe(
      (res) => {
        this.smerovi = res;
        this.loaded2 = true;
      }
    )
  }

}
