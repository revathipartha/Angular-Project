import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent implements OnInit {
  displayedColumns: string[] = ['title', 'body', 'action'];
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  itemsArray: any;
  constructor(private get: DataService, public dialog: MatDialog, private router: Router) { }
  row: any;
  element: any;
  ngOnInit(): void {
    this.getdata();
  }
  ///This code is Title & Body overall listout Method function
  getdata() {
    this.get.getPosts()
      .subscribe({
        next: (res) => {
          this.itemsArray = res;
          this.dataSource = new MatTableDataSource(this.itemsArray);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(res);
        },
      })

  }
  //This code is Edit Method function
  Edit(id: any) {
    this.router.navigate([`edit/${id}`]);
    
  }
}
