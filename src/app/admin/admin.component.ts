import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Smer } from '../model/smer.model';
import { AdminService } from "../_services/admin.service";
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  smerovi: Smer[];
  ulogovaniKorisnik;
  uloga;

  constructor(private adminService: AdminService, private router: Router, private tokenStorage: TokenStorageService) { }


  ngOnInit(): void {
    this.ulogovaniKorisnik = this.tokenStorage.getUser();
    if(this.ulogovaniKorisnik != null){
        if (this.ulogovaniKorisnik.authorities[0].authority == "admin") {
          this.getSmerovi();
          return;
        }
    }
    alert("Nemate pristup ovoj stranici!");
    this.router.navigate(['/login']);
  }

  getSmerovi() {
    this.adminService.getSmerovi().subscribe((res: Smer[]) => {
      console.log(res);
      this.smerovi = res;
    },
      err => {
        console.log(err);
      })
  }


  obrisiSmer(smerId: number): void {
    this.adminService.obrisiSmer(smerId).subscribe(
      (res) => {
        this.getSmerovi()
        console.log(res);
      }
    );
  }

  dodajSmer() {
    this.router.navigate(['/smer']);
  }

}
