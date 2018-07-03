import { Component } from '@angular/core';

// l'interface définit les propriétés (typées) d'un objet
interface Student {
  image: string;
  firstname: string;
  lastname: string;
  notes: number[];
  group: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriétés
  compteur: number = 0;
  style1: any = {
    'color': 'green',
    'text-decoration': 'underline'
  };

  groups: string[] = ['ESD', 'POEI Java', 'POEC Symfony'];

  private highlightGoodStudents: boolean = false;

  students: Student[] = [
    {
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Paolo',
      lastname: 'Dybala',
      notes: [14, 5, 7],
      group: 'POEI Java'
    },
    {
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Chris',
      lastname: 'Chris',
      notes: [19, 15, 17],
      group: 'POEI Java'
    },
    {
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Jean-François',
      lastname: 'El Flouz',
      notes: [4, 12, 20],
      group: 'ESD'
    }
  ];

  selectedGroup: string = '0';


  // méthodes
  getAverage(notes: number[]): string {
    let total = 0;
    for (let i=0; i<notes.length; i++) {
      total += notes[i];
    }
    //return Number.parseFloat(total / notes.length).toFixed(2);
    // parseFloat('14.23') => 14.23
    // .toFixed() renvoie une chaîne
    return (total / notes.length).toFixed(2); // 8.676666666 => 8.68
  }

  test(): void { // void = vide, ne renvoie rien
    this.compteur = this.compteur + 1;
  }

  highlightStudents(): void {
    this.highlightGoodStudents = !this.highlightGoodStudents;
  }

  selectGroup(e: any): void {
    //let selectedValue = e.target.value; // valeur sélectionnée, accessible uniqumement dans le
    //corps de cette fonction (portée locale)
    //console.log(selectedValue);
    this.selectedGroup = e.target.value;
  }

}
