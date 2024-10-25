import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firebase/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  estudiantes:any;

  constructor(
    private dbFire: FirestoreService
  ) {}

  ngOnInit() {
    this.dbFire.getListas().subscribe({
      next:(value:any) => {
        this.estudiantes = value
        console.log(value)
      },error:(error:any) => {
        console.log(error)
      }
    })
  }

}
