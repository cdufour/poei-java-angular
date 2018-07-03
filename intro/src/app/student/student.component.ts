import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //private http: HttpClient;

  images: any[] = [];

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

  testAjax() {
    this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        //take(10) // Chris enquête
        //map(res => []) // altère le flux par remplacement
        //filter(res => {
          // en construction
        //})
        tap(() => {
        // cet opérateur n'agit pas sur la valeur du flux (stream)
        console.log('tap => side effect')
        })
      )
      .subscribe(res => {
        // filtrage en utilisant la méthode .filter native
        // des tableaux javascript
        this.images = res.filter(x => x.id < 21);
        console.log(this.images);
      });
  }

}
