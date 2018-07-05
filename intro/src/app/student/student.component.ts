import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input('data') student = {
    id: 0,
    image: '',
    firstname: '',
    lastname: '',
    notes: [],
    group: '',
  };

  @Input() editMode: boolean = false;

  // la propriété changeNode reçoit un objet de type EventEmitter
  @Output() changeEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private studentService: StudentService) {}

  ngOnInit() {}

  inputChange(e: any, indexNote: number) {
    //console.log(e);
    //console.log(e.target.value);
    let val: number = parseInt(e.target.value);

    if (val >= 0 && val <= 20) {
      // valeur licite
      this.student.notes[indexNote] = val;

      // notification à destination du parent
      this.changeEmitter.emit(null);

      // update server
      this.studentService
        .updateStudent(this.student.id, this.student)
        .subscribe(res => {
          console.log(res);
        })

    } else {
      console.log('Valeur illicite');
      console.log(typeof indexNote);
      console.log('Avant change: ' + this.student.notes);
      this.student.notes[indexNote] = 0;
      console.log('Après change: ' + this.student.notes);
    }


  }

}
