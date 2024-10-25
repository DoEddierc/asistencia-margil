import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  docData,
  Firestore
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore:Firestore
  ) { }

  getListas():Observable<any[]>{
    const registrosRef = collection(this.firestore,'/lista_3_prepa');
    return collectionData(registrosRef,{idField:'id'}) as Observable<any[]>;
  }
}
