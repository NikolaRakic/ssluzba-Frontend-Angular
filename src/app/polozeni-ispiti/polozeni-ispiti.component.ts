import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../_services/student.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-polozeni-ispiti',
  templateUrl: './polozeni-ispiti.component.html',
  styleUrls: ['./polozeni-ispiti.component.css']
})
export class PolozeniIspitiComponent implements OnInit {

  polozeniIspiti;
  loaded;
  ulogovaniKorisnik;
  uloga;
  constructor(private router: Router, private tokenStorage: TokenStorageService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.ulogovaniKorisnik = this.tokenStorage.getUser();
    this.uloga = this.ulogovaniKorisnik.authorities[0].authority;
    if(this.uloga != "student"){
      alert("Nemate pristup ovoj stranici!");
      this.router.navigate(['/login']);
     
    }else{
      this.getPolozeniIspiti();
    }
  }

  getPolozeniIspiti(){
    this.studentService.getPolozeniIspiti(this.ulogovaniKorisnik.id).subscribe(
      (res) => {
        this.polozeniIspiti = res;
        this.loaded = true;
      }
    )
  }

}
