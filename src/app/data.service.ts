import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }


  create(val){
    return this.firestore.collection('users').add(val);
}


  getClients() {
    return this.firestore.collection('users').snapshotChanges();
}
}
