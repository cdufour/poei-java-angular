import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../../model/student.interface';
// import d'opérateurs propres à la version 6 de Rxjs
import { take, filter, map, tap, mergeMap, delay } from 'rxjs/operators';

interface Photo {
  albumId?: number;
  id: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
  src?: string;
  alt?: string;
}

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  // propriétés
  images: Photo[] = [];
  compteur: number = 0;
  style1: any = {
    'color': 'green',
    'text-decoration': 'underline'
  };
  groups: string[] = ['ESD', 'POEI Java', 'POEC Symfony'];
  private highlightGoodStudents: boolean = false;
  students: Student[] = [
    {
      id:1,
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Paolo',
      lastname: 'Dybala',
      notes: [14, 5, 7],
      group: 'POEI Java'
    },
    {
      id:2,
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Chris',
      lastname: 'Chris',
      notes: [19, 15, 17],
      group: 'POEI Java'
    },
    {
      id:3,
      image: 'https://www.thehindu.com/sport/football/article18590831.ece/alternates/FREE_300/Paulo%20Dybala',
      firstname: 'Jean-François',
      lastname: 'El Flouz',
      notes: [4, 12, 20],
      group: 'ESD'
    }
  ];
  selectedGroup: string = '0';

  // méthodes
  constructor(private http: HttpClient) {
    // Injection dépendance
    // un objet de type HttpCLient est crée dès l'instanciation
    // de la classe StudentComponent
    // StudentComponent dispose d'une propriété http
    // lui permettant de faire des requêtes ajax
  }

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

  testAjax() {
    this.http
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        delay(500), // pause de 0.5 seconde
        mergeMap(data => data),
        //take(3),
        filter(el => el.id > 3999 && el.id < 4021),
        map(el => {
          return {id: el.id, src: el.thumbnailUrl, alt: 'image_' + el.id};
        }),
        tap(() => {
          // cet opérateur n'agit pas sur la valeur du flux (stream)
          //console.log('tap => side effect')
        })
      )
      .subscribe(res => {
        console.log(res);
        // filtrage en utilisant la méthode .filter native
        // des tableaux javascript
        //this.images = res.filter(x => x.id < 21);
        //console.log(this.images);
        this.images.push(res); // on ajoute au tableau les réponses
      });
  }

}
