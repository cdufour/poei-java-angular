import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //public message: string = "Message en provencance du service";
  private urlServer: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getStudents() {
    // renvoie Observable, la souscription se fera côté composant
    return this.http.get(this.urlServer + '/students');
  }
}
