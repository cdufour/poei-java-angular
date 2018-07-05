import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// composants
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { StudentComponent } from './student/student.component';
import { ListStudentComponent } from './list-student/list-student.component';

// services
import { StudentService } from './services/student.service';
import { MenuComponent } from './menu/menu.component';

// table de routage
const appRoutes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'students', component: ListStudentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    StudentComponent,
    ListStudentComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
