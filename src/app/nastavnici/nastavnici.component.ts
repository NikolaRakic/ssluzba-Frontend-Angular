import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nastavnik } from '../model/nastavnik.model';
import { AdminService } from '../_services/admin.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-nastavnici',
  templateUrl: './nastavnici.component.html',
  styleUrls: ['./nastavnici.component.css']
})
export class NastavniciComponent implements OnInit {

  nastavnici: Nastavnik[];
  input;
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
    this.getNastavnici();
    }

  }


  getNastavnici(){
    this.adminService.getNastavnici().subscribe(
      (res: any) =>{
      this.nastavnici = res;
    },
    err =>{
      console.log(err);
    })
  }

  dodajNastavnika(){
    this.router.navigate(['/nastavnik']);
  }

  obrisi(id){
    this.adminService.obrisiKorisnika(id).subscribe(
      (res) => {
        this.getNastavnici()
        console.log(res);

      }
    );
  }

  search(){
    if(this.input != ""){
      this.nastavnici = this.nastavnici.filter(res=>{
        return res.ime.toLocaleLowerCase().match(this.input.toLocaleLowerCase()) || res.prezime.toLocaleLowerCase().match(this.input.toLocaleLowerCase());
      })
    }else if(this.input == ""){
      this.ngOnInit();
    }
    
  }

}
