import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  constructor(private crudService: CrudService) {}
  students:any;
  ngOnInit(): void {
    this.crudService.getData().subscribe(
      (data) => {
        console.log(data);
        this.students = data;
      },
      (err) => console.log(err)
    );
  }
}
