import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/student.model';
import { AdminService } from "../_services/admin.service";
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit {

  studenti: Student[];
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
    this.getStudents();
    }
  }

  getStudents(){
    this.adminService.getStudenti().subscribe((res: any) =>{
      console.log(res);
      this.studenti = res;
    },
    err => {
      console.log(err);
    })
  }


  obrisiStudenta(korisnikId: Number): void{
    this.adminService.obrisiKorisnika(korisnikId).subscribe(
      () => this.getStudents()
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  search(){
    if(this.input != ""){
      this.studenti = this.studenti.filter(res=>{
        return res.ime.toLocaleLowerCase().match(this.input.toLocaleLowerCase()) || res.prezime.toLocaleLowerCase().match(this.input.toLocaleLowerCase());
      })
    }else if(this.input == ""){
      this.ngOnInit();
    }
    
  }

};
