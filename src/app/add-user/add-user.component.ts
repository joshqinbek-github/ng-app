import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { map } from 'rxjs/operators';
// import { DataService } from '../data.service';
import { UserData } from '../shared/user.model';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  isEdit: boolean;
  id: number;
  user: UserData;
  userId: string;
  userIds: any;

  constructor(
    // private dataService: DataService,
    private db: AngularFireDatabase,
    private fireStore: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {
 
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.isEdit = params['id'] != null;
    });

    this.fireStore
      .collection('users')
      .valueChanges()
      .subscribe((users: any[]) => {
        this.user = users[this.id] != null?  users[this.id] : undefined;

      });
  }

  submit(n, d, m, y, p) {
    let val = { name: n, date: [+d, +m, +y], phone: p };
    this.fireStore.collection('users').add(val)
    

    

    this.router.navigate(['/']);
  }

  edit(n, d, m, y, p) {
    let val = { name: n, date: [+d, +m, +y], phone: p };
     
        this.fireStore.doc("users/"+this.id).update(val);
      
      
       this.router.navigate(['/']);

  }

  }


