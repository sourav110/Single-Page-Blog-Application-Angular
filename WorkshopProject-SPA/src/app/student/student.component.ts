import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  
  students: Student[] = [];

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    }, error => {
      console.log(error);
    });
  }
}
