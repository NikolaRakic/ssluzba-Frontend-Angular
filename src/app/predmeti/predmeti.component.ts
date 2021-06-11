import { Component, OnInit } from '@angular/core';
import { Smer } from '../model/smer.model';
import { Student } from '../model/student.model';
import { Predmet } from '../model/predmet.model';
import { StudentService } from '../_services/student.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css']
})
export class PredmetiComponent implements OnInit {

  predmeti = null;
  loaded = false;
  prikazZaStudenta = false;
  sviPredmeti;
  ulogovaniKorisnik = null;
  ulogovaniStudentId = null
  smer;
  student = null;
  id = null;
  showAddForm = false;
  noviPredmet = {
    idPredmet: null,
    naziv: null
  }


  constructor(private location: Location, 
              private userService: UserService, 
              private router: Router, 
              private route: ActivatedRoute, 
              private adminService: AdminService, 
              private studentService: StudentService, 
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ulogovaniKorisnik = this.tokenStorageService.getUser();
    console.log("id je " + this.id)
    console.log("uloga " + this.ulogovaniKorisnik.uloga)

    if (this.id == this.ulogovaniKorisnik.id) {
      this.getPredmetiZaStudenta(this.id);
      this.prikazZaStudenta = true;
    }
    else if (this.id == null && this.ulogovaniKorisnik.uloga == 'admin') {
      this.getSviPredmeti();
    }
    else {
      alert("Nemate pristup ovoj stranici!")
      this.location.back();
    }
  }

  getPredmetiZaStudenta(id: Number) {
    this.userService.getStudent(Number(this.id)).subscribe((res: any) => {
      const smerStudenta = res.smerStudenta;
      this.studentService.getSmerByNaziv(smerStudenta).subscribe((res: any) => {
        this.smer = res;
        this.studentService.getPredmetiZaSmer(Number(this.smer.id)).subscribe((res1: any) => {
          this.predmeti = res1;
          this.loaded = true;
        })
      })
    })
  }

  getSviPredmeti() {
    this.studentService.getPredmeti().subscribe(
      (res) => {
        this.predmeti = res
        console.log(this.predmeti)
      }
    )
  }

  obrisiPredmet(idPredmet) {
    this.adminService.obrisiPredmet(idPredmet).subscribe(
      () => window.location.reload()
    )
  }

  showAddFormF() {
    this.showAddForm = true;
  }

  dodajPredmet() {
    if (this.noviPredmet.naziv != null) {
      console.log(this.noviPredmet)
      this.adminService.dodajPredmet(this.noviPredmet).subscribe(
        () => window.location.reload()
      )
    } else {
      alert("Niste uneli sve podatke!")
      this.router.navigate(['/predmeti'])
    }
  }

}
