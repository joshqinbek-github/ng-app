import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  msg: string;
  constructor(
    private dataService: DataService,
    private db: AngularFireDatabase,
    private fireStore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit(n, d, m, y, p) {
    let val = { name: n, date: { day: d, month: m, year: y }, phone: p };
    this.db.list("users").push(val);
    this.router.navigate(['/']);

  }
}



