import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css'],
})
export class CreatestudentComponent implements OnInit {
  public createStudent: FormGroup;
  constructor(
    private crudService: CrudService,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createStudent = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      place: new FormControl(),
    });
  }

  createNewStudent(student) {
    // console.log(student);
    this.crudService.createNewStudent(student).subscribe(
      (data) => {
        console.log(data);
        this._snackbar.open('Sucessfully Created Student', '', {
          duration: 5000,
        });
      },
      (err) => {
        console.log('Inside Error ');
        console.log(err);
        this._snackbar.open(err, '', { duration: 3000 });
      }
    );
  }
}
