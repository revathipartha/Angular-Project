import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  constructor(private dataService: DataService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.editForm = this.fb.group({
      id: new FormControl(''),
      title: new FormControl(''),
      body: new FormControl('')
    })

  }

  editForm!: FormGroup;

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');

    this.getData(id);

  }

  getData(id: any) {
    this.dataService.getPost(id).subscribe((data: any) => {

      let resBody = data
      this.editForm.patchValue({
        id: resBody.id,
        title: resBody.title,
        body: resBody.body
      })
    })
  }

  edit() {

    this.dataService.getEdit(this.editForm.value).subscribe((data: any) => {
      console.log(data)
    })
  }

}
