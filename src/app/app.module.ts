import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDjbZMqMevppsR1gAW89G02r0MURvRVCh8",
      authDomain: "expenses-control-app-de628.firebaseapp.com",
      projectId: "expenses-control-app-de628",
      storageBucket: "expenses-control-app-de628.appspot.com",
      messagingSenderId: "192837140237",
      appId: "1:192837140237:web:395d6abcfae51378a67a44"
    }),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
