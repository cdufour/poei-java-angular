import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input('data') student = {
    id: 0,
    firstname: '',
    lastname: '',
    notes: [],
    group: '',
  };

  @Input() editMode: boolean = false;

  // la propriété changeNode reçoit un objet de type EventEmitter
  @Output() changeEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  changeNote(studentId: number, indexNote: number) {
    console.log('studentId: ' + studentId + ', indexNote: ' + indexNote);

    // notification à destination du parent
    this.changeEmitter.emit(null);
  }

  getAverage(notes: number[]): number {
    let total: number = 0;
    notes.forEach(note => {
      total += note;
    })
    return total / notes.length;
  }

}
