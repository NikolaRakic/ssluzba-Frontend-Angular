import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../_services/admin.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-rokovi',
  templateUrl: './rokovi.component.html',
  styleUrls: ['./rokovi.component.css']
})
export class RokoviComponent implements OnInit {

  rokovi;
  ulogovaniKorisnik;
  uloga;

  constructor(private adminService: AdminService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.ulogovaniKorisnik = this.tokenStorage.getUser();
    this.uloga = this.ulogovaniKorisnik.authorities[0].authority;
    if(this.uloga != "admin"){
      alert("Nemate pristup ovoj stranici!");
      this.router.navigate(['/login']);
     
    }else{
    this.getRokovi();
    }
  }

  getRokovi(){
    this.adminService.getSviRokovi().subscribe(
      (res) =>{
        this.rokovi = res;
      }
    )
  }

  sacuvaj(){
    this.adminService.sacuvajRokove(this.rokovi).subscribe(
      () => window.location.reload()
    )
  }

}
