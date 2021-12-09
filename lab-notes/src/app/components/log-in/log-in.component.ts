import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private AuthenticationService: AuthenticationService, private Router: Router) { }

  ngOnInit(): void {
  }

  dataUser: User = new User();

  LogInUser(){    
    const { email, password }  = this.dataUser;
    if( email === '' || password === '' ){
      return alert('Please fill in all the required fields.')
    } else {
      this.AuthenticationService.LogIn(email, password).then((userCredential) => {
        console.log(userCredential)
        alert('Welcome back to Express Yourself!!')
        this.Router.navigate(['Dashboard']);
      }).catch(error => alert(error.message))
    }
}
}
