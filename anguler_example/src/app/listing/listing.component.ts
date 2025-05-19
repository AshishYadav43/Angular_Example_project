import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: number;
  name: string;
  email: string;
}

const ELEMENT_DATA: UserData[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 4, name: 'David', email: 'david@example.com' },
  { id: 5, name: 'Eva', email: 'eva@example.com' },
];

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {
  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);
  searchKey = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  clearFilter() {
    this.searchKey = '';
    this.applyFilter();
  }



}
