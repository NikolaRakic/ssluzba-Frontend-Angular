import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Nastavnik } from '../model/nastavnik.model';
import { AdminService } from '../_services/admin.service';
import { AuthService } from '../_services/auth.service';
import { NastavnikService } from '../_services/nastavnik.service';

@Component({
  selector: 'app-nastavnik',
  templateUrl: './nastavnik.component.html',
  styleUrls: ['./nastavnik.component.css']
})
export class NastavnikComponent implements OnInit {
  constructor(private userService: UserService, private nastavnikService: NastavnikService, private adminService: AdminService, private authService: AuthService, private router: Router, private route: ActivatedRoute, private tokenStorage: TokenStorageService) { }

  id;
  uloge;
  ulogovaniKorisnik;
  uloga;
  loaded = false;
  dodavanje = false;
  izmena = false;
  nastavnik: Nastavnik = new Nastavnik({
    idKorisnik: null,
    uloga: "nastavnik",
    adresa: null,
    email: null,
    ime: null,
    pass: null,
    prezime: null,
    rodjendan: null,
    username: null,
    idNastavnik: null,
    ulogaNastavnik: null
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ulogovaniKorisnik = this.tokenStorage.getUser();
    this.uloga = this.ulogovaniKorisnik.authorities[0].authority;
    this.getUloge();
    console.log(this.uloge);

    if (this.id != null) {
      this.izmena = true;
      this.getNastavnik();
    }
    else {
      this.dodavanje = true;
      this.loaded = true;
    }
  }

  getNastavnik() {
    this.userService.getNastavnik(this.id).subscribe((res) => {
      console.log(res);
      this.nastavnik = res;
      this.loaded = true;
    },
      err => {
        console.log(err);
      })
  }

  edit() {
    if (this.uloga == "admin") {
      console.log(this.nastavnik);
      this.adminService.izmeniKorisnika(this.nastavnik).subscribe(
        () => this.router.navigate(['/nastavnici'])
      )
    } else {
      alert("Nemate pristup ovoj funkciji!")
      this.router.navigate(['/home'])
    }
  }

  add() {
    if (this.uloga == "admin") {
      if (this.nastavnik.email == null || this.nastavnik.username == null || this.nastavnik.pass == null || this.nastavnik.ime == null || this.nastavnik.prezime == null) {
        alert("Niste popunili sve podatke!")
        this.router.navigate(['/nastavnik'])
      } else {
        this.authService.register(this.nastavnik).subscribe(
          () => this.router.navigate(['/nastavnici'])
        )
      }
    } else {
      alert("Nemate pristup ovoj funkciji!")
      this.router.navigate(['/home'])
    }
  }

  getUloge() {
    this.nastavnikService.getUloge().subscribe(
      (res) => { this.uloge = res })
    console.log(" aaa " + this.uloge)
  }

}
