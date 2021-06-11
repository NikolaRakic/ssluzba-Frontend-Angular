import { Component, OnInit } from '@angular/core';
import { StudentService } from "../_services/student.service";
import { UserService } from "../_services/user.service";
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../_services/admin.service';
import { Smer } from '../model/smer.model';

@Component({
  selector: 'app-student',
  templateUrl: './smer.component.html',
  styleUrls: ['./smer.component.css']
})
export class SmerComponent implements OnInit {

  numbers;
  sviPredmeti;
  dodavanje = false;
  izmena = false;
  predmeti = null;
  studenti;
  noviPredmet = {
    idPredmet: Number,
    idSmer: Number,
    godinaPojavljivanja: Number
  }
  smerovi = null;
  smer: Smer = new Smer({
    naziv: '',
    trajanje: null,
  });

  id;
  ulogovaniKorisnik;
  uloga;
  loaded = false;
  loaded2 = false;
  prikaziDodeluPredmeta = false;

  constructor(private studentService: StudentService,
    private router: Router,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private userService: UserService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.ulogovaniKorisnik = this.tokenStorage.getUser();
    try {
      this.uloga = this.ulogovaniKorisnik.authorities[0].authority;
    } catch {
      alert("Niste prijavljeni!")
      window.location.replace("login");
      return;
    }
    if (this.id != null) {
      this.izmena = true;
      this.getTable();
      this.getPredmetiZaSmer();
      this.getSviPredmeti();
      this.getStudentiZaSmer();
    }
    else {
      this.dodavanje = true;
      //this.smer="";
      this.loaded = true;
    }
  };

  getTable() {
    this.studentService.getSmer(this.id).subscribe(
      (res) => {
        console.log(res);
        this.smer = res;
        this.loaded = true;
        this.numbers = Array(this.smer.trajanje).fill(0).map((x, i) => i);
      },
      err => {
        console.log(err);
      })
  }

  edit() {
    if (this.uloga == "admin") {
      this.adminService.izmeniSmer(this.smer).subscribe(
        () => this.router.navigate(['/admin'])
      )
    } else {
      alert("Nemate pristup ovoj funkciji!")
      this.router.navigate(['/home'])
    }
  }

  add() {
    if (this.smer.naziv == "" || this.smer.trajanje == null) {
      alert("Niste uneli sve podatke!")
      this.router.navigate(['/smer'])
    } else {
      this.adminService.dodajSmer(this.smer).subscribe(
        () => this.router.navigate(['/admin'])
      )
    }
  }

  getPredmetiZaSmer() {
    this.studentService.getPredmetiZaSmer(this.id).subscribe(
      (res) => {
        this.predmeti = res
        this.loaded2 = true;
      }
    )
  }

  getSviPredmeti() {
    this.studentService.getPredmeti().subscribe(
      (res) => {
        this.sviPredmeti = res;
        console.log(this.sviPredmeti)
      }
    )
  }

  izmeniPredmet() {
    this.adminService.izmeniPredmetNaSmeru(this.predmeti).subscribe(
      () => window.location.reload()
    )
  }

  obrisiPredmet(idPredmet: Number) {
    var idSmer = this.id;
    this.adminService.obrisiPredmetNaSmeru(idPredmet, idSmer).subscribe(
      () => window.location.reload()
    )
  }

  dodeliPredmetSmeru() {
    this.prikaziDodeluPredmeta = true;
  }

  dodajPredmet() {
    console.log("idsmer " + this.id);
    this.noviPredmet.idSmer = this.id;
    this.adminService.dodajPredmetNaSmeru(this.noviPredmet).subscribe(
      () => window.location.reload()
    )
  }

  getStudentiZaSmer() {
    this.adminService.getStudentiZaSmer(this.id).subscribe(
      (res) => {
        this.studenti = res;
      }
    )
  }

}
