import { hostViewClassName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { homedir } from 'os';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { VmListComponent } from './vm-list/vm-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, children: [
    { path: 'page-1', component: MainDashboardComponent },
    { path: 'page-2', component: VmListComponent },  
  ]},
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
