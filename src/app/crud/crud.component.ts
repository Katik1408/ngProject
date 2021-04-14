import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  constructor(
    private crudService: CrudService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  students: any;
  ngOnInit(): void {
    this.crudService.getData().subscribe(
      (data) => {
        console.log(data);
        this.students = data;
      },
      (err) => {
        console.log('Inside the Error of Component');
        console.log(err);
        this._snackBar.open(err, '', { duration: 3000 });
      }
    );
  }
  deleteStudent(id) {
    this.crudService.deleteStudent(id).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  createStudentComponent() {
    this.router.navigateByUrl('createstudent');
  }
}
