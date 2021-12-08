import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private afAuth: AngularFireAuth,
    public router: Router,    
  ) { }
  SignUp(email:string, password:string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)   
  }
  
  LogIn(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password)
  }

  UserSignedIn(){
    return this.afAuth.onAuthStateChanged((user) => {
      if(!user){
        this.router.navigate(['LogIn'])
      } else{
        this.router.navigate(['Dashboard'])
      }
    })
  }
  
  LogOut(){
    return this.afAuth.signOut()
  }
}
