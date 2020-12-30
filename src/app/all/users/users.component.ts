import { AfterContentChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/data.service';
import { UserData } from '../../shared/user.model';
import {ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements AfterViewInit, OnInit {

  ngOnInit(){
    this.db.collection('users').valueChanges().subscribe((users: UserData[]) =>{
      this.dataSource = new MatTableDataSource(users);
    });
  }

  displayedColumns: string[] = ['name', 'date', 'phone'];
  dataSource: MatTableDataSource<UserData>;
  users: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private db: AngularFirestore, private dataService: DataService, private cdref: ChangeDetectorRef ) {
 
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editPass(row) {
    console.log(row);
  }

  

  
}
