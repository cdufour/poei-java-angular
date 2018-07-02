import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  compteur: number = 0;
  style1 = {
    'color': 'green',
    'text-decoration': 'underline'
  };

  groups = ['ESD', 'POEC Java', 'POEC Symfony'];

  private highlightGoodStudents: boolean = false;

  students = [
    {
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Paolo',
      lastname: 'Dybala',
      notes: [14, 5, 7],
      group: 'POEC Java'
    },
    {
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Chris',
      lastname: 'Chris',
      notes: [19, 15, 17],
      group: 'POEC Java'
    },
    {
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Jean-François',
      lastname: 'El Flouz',
      notes: [4, 12, 20],
      group: 'ESD'
    }
  ];

  getAverage(notes) {
    let total = 0;
    for (let i=0; i<notes.length; i++) {
      total += notes[i];
    }
    //return Number.parseFloat(total / notes.length).toFixed(2);
    // parseFloat('14.23') => 14.23
    return (total / notes.length).toFixed(2); // 8.676666666 => 8.68
  }

  test() {
    this.compteur = this.compteur + 1;
  }

  highlightStudents() {
    this.highlightGoodStudents = !this.highlightGoodStudents;
  }

  selectGroup(e) {
    let selectedValue = e.target.value; // valeur sélectionnée, accessible uniqumement dans le
    //corps de cette fonction (portée locale)
    console.log(selectedValue);
  }

}
