import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AdminService } from '../_services/admin.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  korisnik;
  selektovaniSmer;
  smerovi;
  uloga;
  ulogovaniKorisnik;
  id: String;
  loaded = false;

  constructor(private userService: UserService, private adminService: AdminService, private router: Router, private route: ActivatedRoute, private tokenStorageService: TokenStorageService) { }

  @ViewChild('izmenaAdmin') izmena: ElementRef;
  @ViewChild('tabela') tabela: ElementRef;
  @ViewChild('showEditBtn') showEditBtn: ElementRef;
  @ViewChild('nazivSmera') nazivSmera: ElementRef;


  ngOnInit(): void {


    this.id = this.route.snapshot.paramMap.get('id');
    this.ulogovaniKorisnik = this.tokenStorageService.getUser();
    try {
      this.uloga = this.ulogovaniKorisnik.authorities[0].authority;
    } catch {
      alert("Niste prijavljeni!")
      window.location.replace("login");
      return;
    }
    if (this.ulogovaniKorisnik.id == this.id || this.uloga == "admin" || this.uloga == "nastavnik") {
      if (this.uloga == "admin") {
        this.getSmerovi();
      }
      this.getProfil(this.id);
    }
  };

  getProfil(id: String): void {
    this.userService.getStudent(Number(this.id)).subscribe((res: any) => {
      this.korisnik = res;
      console.log(res);
      this.loaded = true;
    },
      err => {
        console.log(err);
      })
  }

  showEdit() {
    this.izmena.nativeElement.style.display = "inline";
    this.tabela.nativeElement.style.display = "none";
    this.showEditBtn.nativeElement.style.display = "none";
  }

  obrisiStudenta(): void {
    this.adminService.obrisiKorisnika(Number(this.id)).subscribe(
      () => this.router.navigateByUrl("/studenti")
    );
  }

  getSmerovi() {
    this.adminService.getSmerovi().subscribe((res: any) => {
      this.smerovi = res;
    })
  }

  edit() {
    this.adminService.izmeniKorisnika(this.korisnik).subscribe(
      () => window.location.reload()
    )
  }

}


