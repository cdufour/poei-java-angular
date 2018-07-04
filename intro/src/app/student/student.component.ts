import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import d'opérateurs propres à la version 6 de Rxjs
import { take, filter, map, tap, mergeMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //private http: HttpClient;

  images: any[] = [];

  @Input('data') student = {
    id: 0,
    firstname: '',
    lastname: '',
    notes: [],
    group: '',
  };

  constructor(private http: HttpClient) {
    //this.http = new HttpClient;
    // Injection dépendance
    // un objet de type HttpCLient est crée dès l'instanciation
    // de la classe StudentComponent
    // StudentComponent dispose d'une propriété http
    // lui permettant de faire des requêtes ajax
  }

  ngOnInit() {
  }

  changeNote() {
    console.log('change note');
  }

  testAjax() {
    this.http
      .get('https://jsonplaceholder.typicode.com/photos')
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
