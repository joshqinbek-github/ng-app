
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserData } from '../shared/user.model';



/** Constants used to fill up our data base. */


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'date', 'phone'];
  dataSource: MatTableDataSource<UserData>;
  users: any[];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(db: AngularFireDatabase) {
    // Create 100 users
     db.list('users').valueChanges().subscribe((users: UserData[]) =>{
      this.dataSource = new MatTableDataSource(users);
    });

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit() {
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
}



