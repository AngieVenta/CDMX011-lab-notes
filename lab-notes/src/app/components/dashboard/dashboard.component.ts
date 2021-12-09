import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private AuthenticationService: AuthenticationService, public router: Router) { }

  ngOnInit(): void {
  }

  logOutUser(){
    this.AuthenticationService.LogOut().then(() =>
      this.router.navigate(['LogIn'])
    )
  }
}
