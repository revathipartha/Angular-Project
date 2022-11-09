import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  displayedColumns: string[] = ['userId', 'id', 'title', 'body', 'action'];
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  itemsArray: any;
  constructor(private data: DataService, public dialog: MatDialog) { }
  datas: any;
  row: any;

  ngOnInit(): void {
    this.getdetail();
  }
  // This code is Overall Table listout Method function
  getdetail() {
    this.data.getPosts()
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

  //This code is Get method function
  Get(element: any) {
    try {
      this.data.getData(this.row).subscribe(result => {
        console.log(result)
        alert("Data get Successfully")
      })
    }
    catch (err) {
      alert("Error While getting the Data!!")
    }
  }
  // This code is Deleted method function

  Delete(element: any) {

    try {
      this.data.getDelete(this.row).subscribe(result => {
        console.log(result);
        alert("Data Deleted Successfully")

      })
    }
    catch (err) {
      alert("Error While deleting the Data!!")
    }
  }
}