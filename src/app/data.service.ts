import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserData } from './shared/user.model';

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private firestore: AngularFirestore) {}

  getPolicies() {
    return this.firestore.collection('users').snapshotChanges();
  }

  createPolicy(policy: UserData) {
    return this.firestore.collection('users').add(policy);
  }

  updatePolicy(policy: UserData) {
    delete policy.id;
    this.firestore.doc('users/' + policy.id).update(policy);
  }

  deletePolicy(policyId: string){
    this.firestore.doc('users/' + policyId).delete();
}


}
