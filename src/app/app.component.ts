import { Component } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any;
  constructor(db: AngularFireDatabase){
    
    db.list('users').valueChanges().subscribe(users =>{
      this.users = users;
    })
  }

}
