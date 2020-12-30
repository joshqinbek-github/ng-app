import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { UserData } from '../shared/user.model';



@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {


  dataSource;
  dataSub: Subscription;
  date = new Date();
  
  constructor(db: AngularFireDatabase, fireStore: AngularFirestore) {
     this.dataSub = fireStore.collection('users').valueChanges()
     .subscribe((users: UserData[]) =>{
      this.dataSource = users;
    });
  }
  
  ngOnInit(): void {

  }

}
