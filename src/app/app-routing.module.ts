import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { SmerComponent } from './smer/smer.component';
import { StudentiComponent } from './studenti/studenti.component';
import { AdminComponent } from './admin/admin.component';
import { NastavniciComponent } from './nastavnici/nastavnici.component';
import { ProfilComponent } from './profil/profil.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import { AppComponent } from './app.component';
import { PredmetComponent } from './predmet/predmet.component';
import { RokoviComponent } from './rokovi/rokovi.component';
import { PredmetiNastavnikComponent } from './predmeti-nastavnik/predmeti-nastavnik.component';
import { OcenjivanjeComponent } from './ocenjivanje/ocenjivanje.component';
import { IspitiComponent } from './ispiti/ispiti.component';
import { PolozeniIspitiComponent } from './polozeni-ispiti/polozeni-ispiti.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nastavnik', component: NastavnikComponent },
  { path: 'nastavnik/:id', component: NastavnikComponent },
  { path: 'nastavnici', component: NastavniciComponent },
  { path: 'smer', component: SmerComponent },
  { path: 'smer/:id', component: SmerComponent },
  { path: 'studenti', component: StudentiComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profil/:id', component: ProfilComponent },
  { path: 'predmeti/:id', component: PredmetiComponent },
  { path: 'predmeti', component: PredmetiComponent },
  { path: 'predmet/:id', component: PredmetComponent },
  { path: 'predmetiNastavnik', component: PredmetiNastavnikComponent },
  { path: 'ocenjivanje', component: OcenjivanjeComponent },
  { path: 'rokovi', component: RokoviComponent },
  { path: 'ispiti', component: IspitiComponent },
  { path: 'ispiti/:id', component: IspitiComponent },
  { path: 'polozeniIspiti', component: PolozeniIspitiComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
