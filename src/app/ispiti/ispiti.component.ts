import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../_services/admin.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-ispiti',
  templateUrl: './ispiti.component.html',
  styleUrls: ['./ispiti.component.css']
})
export class IspitiComponent implements OnInit {

  id;
  ulogovaniKorisnik;
  uloga;
  sviIspiti;
  input;

  constructor(private route: ActivatedRoute, private tokenStorage: TokenStorageService, private adminService: AdminService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get("id");
    this.ulogovaniKorisnik = this.tokenStorage.getUser();
    this.uloga = this.ulogovaniKorisnik.authorities[0].authority;

    if(this.uloga == "admin"){
      this.getSviIspiti();
    }
    if(this.uloga == "student" || this.uloga == "nastavnik") {
      this.getIspitiStudentNastavnik();
    } 
  }

  getSviIspiti(){
    this.adminService.getSviIspiti().subscribe(
      (res) => {
        this.sviIspiti = res;
        console.log(this.sviIspiti)
      }
    )
  }

  getIspitiStudentNastavnik(){
    this.adminService.getIspitiStudentNastavnik(this.ulogovaniKorisnik.id).subscribe(
      (res) => {
        this.sviIspiti = res;
        console.log(this.sviIspiti)
      }
    )
  }

  search(){
    if(this.input != ""){
      this.sviIspiti = this.sviIspiti.filter(res=>{
        return res.brojIndeksa.toLocaleLowerCase().match(this.input.toLocaleLowerCase());
      })
    }else if(this.input == ""){
      this.ngOnInit();
    } 
  }

}
