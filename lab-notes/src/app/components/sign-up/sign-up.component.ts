import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    constructor( private AuthenticationService: AuthenticationService, private Router: Router) { }

  ngOnInit(): void {
    this.AuthenticationService.UserSignedIn()
  }
  
  dataUser: User = new User();

  SingUpUser(){    
    const { username, email, password, repeatPassword }  = this.dataUser;
    if(username === '' || email === '' || password === '' || repeatPassword === ''){
      return alert('Please fill in all the required fields.')
    } else if (password !== repeatPassword){
      return alert('The two passwords do not match.')
    } else {
      this.AuthenticationService.SignUp(email, password).then((userCredential) => {
        console.log(userCredential)
        alert('Welcome to Express Yourself!!')
        this.Router.navigate(['Dashboard']);
      }).catch(error => alert(error.message))
    }
  }

}
