import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private afAuth: AngularFireAuth,
    
  ) { }
  SignUp(email:string, password:string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)   
  }
}
