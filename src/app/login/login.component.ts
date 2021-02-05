import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { NastavnikComponent } from '../nastavnik/nastavnik.component';
import { SmerComponent } from '../smer/smer.component';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      (data: any) => {
        console.log("token " + data.token)
     
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        const uloga = data.authorities[0].authority;
        console.log(uloga);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
       
        
      
        this.reloadPage();

       if(uloga == 'admin'){
        this.router.navigateByUrl("/login");
      }
      if(uloga == 'nastavnik'){
        this.router.navigateByUrl("/login");
      }
      if(uloga == 'student'){
        this.router.navigateByUrl("/login");
      }

      
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
