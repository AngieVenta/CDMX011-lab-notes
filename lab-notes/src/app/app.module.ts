import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Componentes 
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// Modulos 
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
//import { provideAuth,getAuth } from '@angular/fire/auth';
//import { provideDatabase,getDatabase } from '@angular/fire/database';
//import { provideFirestore,getFirestore } from '@angular/fire/firestore';
//import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    // provideRemoteConfig(() => getRemoteConfig())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
