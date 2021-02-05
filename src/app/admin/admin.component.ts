import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from "../_services/admin.service";
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  smerovi;
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
      this.getSmerovi()
    }
    

  }

  getSmerovi(){
    this.adminService.getSmerovi().subscribe((res: any) =>{
      console.log(res);
      this.smerovi = res;
    },
    err =>{
      console.log(err);
    })
  }


  obrisiSmer(smer): void{
    this.adminService.obrisiSmer(smer).subscribe(
      (res) => {
        this.getSmerovi()
        console.log(res);

      }
    );
}

dodajSmer(){
  this.router.navigate(['/smer']);
}

}
