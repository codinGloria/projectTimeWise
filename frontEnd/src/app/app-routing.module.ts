import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { NgModule } from '@angular/core';

import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NgIf
  ],
  exports: [RouterModule],
  providers: [ HttpClientModule, HttpClient, ]
})
export class AppModule { }
