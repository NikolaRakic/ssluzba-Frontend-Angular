import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  smerovi;

  constructor(private authService: AuthService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getSmerovi();
   
  }

  onSubmit(): void {
    this.form.uloga = "student"
    this.form.godinaStudija = 1;  
    
    console.log("forma je  " + this.form);
    
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
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

}
