import { NgModule } from '@angular/core';
// Required services for navigation
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
    {path: '', redirectTo: 'LogIn', pathMatch: 'full'},
    {path:'LogIn', component: LogInComponent},
    {path:'SignUp', component: SignUpComponent},
    {path:'dashboard', component: DashboardComponent},
    {path: '**', redirectTo: 'LogIn', pathMatch: 'full'},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }