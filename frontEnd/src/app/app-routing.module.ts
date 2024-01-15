import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgClass, NgIf } from '@angular/common';

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ControleFinanceiroComponent } from './controle-financeiro/controle-financeiro.component';
import { ControleHorarioComponent } from './controle-horario/controle-horario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardAdminComponent } from './dashboardAdmin/dashboardAdmin.component';
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "controle-financeiro", component: ControleFinanceiroComponent },
  { path: "controle-horario", component: ControleHorarioComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard-admin", component: DashboardAdminComponent },
  { path: "help", component: HelpComponent },
  { path: "settings", component: SettingsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "sidenav", component: SidenavComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ControleFinanceiroComponent,
    ControleHorarioComponent,
    HelpComponent,
    DashboardAdminComponent,
    SettingsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NgIf,
    NgClass
  ],
  exports: [RouterModule],
  providers: [ HttpClientModule, HttpClient ]
})
export class AppModule { }
