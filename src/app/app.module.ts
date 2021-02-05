import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { OceneComponent } from './nastavnik/ocene/ocene.component';
import { SmerComponent } from './smer/smer.component';
import { AdminComponent } from './admin/admin.component';
import { StudentiComponent } from './studenti/studenti.component';
import { NastavniciComponent } from './nastavnici/nastavnici.component';
import { ProfilComponent } from './profil/profil.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import { PredmetComponent } from './predmet/predmet.component';
import { RokoviComponent } from './rokovi/rokovi.component';
import { PredmetiNastavnikComponent } from './predmeti-nastavnik/predmeti-nastavnik.component';
import { OcenjivanjeComponent } from './ocenjivanje/ocenjivanje.component';
import { IspitiComponent } from './ispiti/ispiti.component';
import { PolozeniIspitiComponent } from './polozeni-ispiti/polozeni-ispiti.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NastavnikComponent,
    OceneComponent,
    SmerComponent,
    AdminComponent,
    StudentiComponent,
    NastavniciComponent,
    ProfilComponent,
    PredmetiComponent,
    PredmetComponent,
    RokoviComponent,
    PredmetiNastavnikComponent,
    OcenjivanjeComponent,
    IspitiComponent,
    PolozeniIspitiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
