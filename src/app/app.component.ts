import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentService } from './_services/student.service';
import { TokenStorageService } from './_services/token-storage.service';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  showAdmin = false;
  showProfesor = false;
  showStudent = false;
  username: string;
  id: string;
  smerId;
  student;

  constructor(private tokenStorageService: TokenStorageService,
    private router: Router,
    private studentService: StudentService,
    private userService: UserService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.id = user.id;
      console.log("KORISNIK JE " + this.id);
      const uloga = user.authorities[0].authority;

      if (uloga == "nastavnik") {
        this.showProfesor = true;
      }
      else if (uloga == "student") {
        this.showStudent = true;
        this.getSmerId();
      }
      else if (uloga == "admin") {
        this.showAdmin = true;
      }
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login');
  }

  getSmerId() {
    this.userService.getStudent(this.tokenStorage.getUser().id).subscribe((res) => {
      this.student = res;

      this.studentService.getSmerByNaziv(this.student.smerStudenta).subscribe((res) => {
        this.smerId = res.id;
      },
        err => {
          console.log(err);
        })
    });
  }

}