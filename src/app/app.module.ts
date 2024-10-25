import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"asistenaica","appId":"1:811483993302:web:e8c8854fa23a07cef22577","storageBucket":"asistenaica.appspot.com","apiKey":"AIzaSyCEdyshxrnJtj7n43y8dRhEG9qbij3TZQk","authDomain":"asistenaica.firebaseapp.com","messagingSenderId":"811483993302","measurementId":"G-TY8BHJXKL1"})), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
