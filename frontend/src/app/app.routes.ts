import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { SigninComponent } from './layouts/signin/signin.component';
import { SignupComponent } from './layouts/signup/signup.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "signin", component: SigninComponent},
  {path: "signup", component: SignupComponent},
  {path: "**", redirectTo: ""}
];
