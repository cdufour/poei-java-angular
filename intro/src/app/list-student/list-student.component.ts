import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: any[] = [];
  editMode: boolean = false;

  constructor(private studentService: StudentService) { }

  // Lifecycle hook, ngOnInit s'exécute au chargement du composant
  ngOnInit() {
    this.studentService
      .getStudents()
      .subscribe(res => {
        this.students = res;
        console.log(this.students);
      });
  }

  changeEditMode(e) {
    this.editMode = !this.editMode;
  }

  noteChange() {
    console.log('Mon enfant me parle');
  }

}
